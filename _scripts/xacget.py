#!/usr/bin/env python3

"""
This script retrieves files from xyne.archlinux.ca. It will check the signature
of the file list and then compare all retrieved files against the checksum in
the file list.
"""


from argparse import ArgumentParser
from calendar import timegm
from locale import setlocale, LC_ALL
from os import utime
from os.path import getmtime, basename, exists, join
from time import strptime, time
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from xdg.BaseDirectory import save_cache_path
import errno
import hashlib
import subprocess
import sys




setlocale(LC_ALL, '')
http_fmt = '%a, %d %b %Y %H:%M:%S %Z'
list_fmt = '%Y-%m-%dT%H:%M:%SZ'
local_list = join(save_cache_path('xac'), 'filelist.txt')
local_sig = local_list + '.sig'
host = 'http://xyne.archlinux.ca'
remote_list = host + '/etc/dyn/filelist.txt'
remote_sig = remote_list + '.sig'
interval = 60 * 5


class HeadRequest(Request):
  def get_method(self):
    return "HEAD"


def get_last_modified_header(f):
  lmod = f.headers.get('Last-Modified')
  return timegm(strptime(lmod, http_fmt))


def get_last_modified(url):
  req = HeadRequest(url)
  with urlopen(req) as f:
    return get_last_modified_header(f)


def download(url, fpath):
  sys.stderr.write('downloading %s to %s\n' % (url, fpath))
  try:
    with urlopen(url) as f:
      with open(fpath, 'wb') as g:
        buf = f.read(4096)
        while buf:
          g.write(buf)
          buf = f.read(4096)
      mtime = get_last_modified_header(f)
      utime(fpath, (mtime, mtime))
  except (HTTPError, ConnectionResetError) as e:
    sys.stderr.write('%s [%s]\n' % (e,url))
    sys.exit(1)
  except PermissionError as e:
    sys.stderr.write('%s [%s]\n' % (e,fpath))
    sys.exit(1)


def mirror(url, fpath, local_mtime=None, remote_mtime=None):
  if not local_mtime:
    try:
      local_mtime = getmtime(fpath)
    except FileNotFoundError:
      download(url, fpath)
      return
  if not remote_mtime:
    remote_mtime = get_last_modified(url)
  if remote_mtime > local_mtime:
    download(url, fpath)


def get_digest(path):
  h = hashlib.sha512()
  chunk_size = h.block_size * 100
  with open(path, 'rb') as f:
    chunk = f.read(chunk_size)
    while chunk:
      h.update(chunk)
      chunk = f.read(chunk_size)
    return h.hexdigest()


def get_files(fnames):
  fnames = set(fnames)
  selected = dict()
  with open(local_list) as f:
    for line in f:
      mtime, digest, path = line.strip().split(' ', 2)
      bname = basename(path)
      if bname in fnames:
        try:
          selected[bname].append((mtime, digest, path))
        except KeyError:
          selected[bname] = [(mtime, digest, path)]
  for bname, candidates in selected.items():
    l = len(candidates)
    if l > 1:
      fmt = '  %' + str(len(str(l))) + 'd) %s'
      while True:
        print(bname + ':')
        for i in range(l):
          print(fmt % (i, candidates[i][2]))
        selection = input("select path: ")
        try:
          i = int(selection)
          mtime, digest, path = candidates[i]
          break
        except (ValueError, IndexError):
          pass
    else:
      mtime, digest, path = candidates[0]
    url = host + path
    mtime = timegm(strptime(mtime, list_fmt))
    mirror(url, bname, remote_mtime=mtime)
    local_digest = get_digest(bname)
    if local_digest == digest:
      print('good sha512 checksum for %s' % bname)
    else:
      sys.stderr.write('error: bad sha512 checksum for %s\n' % bname)
      sys.stderr.write('expected: %s\n' % digest)
      sys.stderr.write('found:    %s\n' % local_digest)
      sys.exit(1)


def list_files(names_only=False):
  fnames = set()
  with open(local_list) as f:
    for line in f:
      t, checksum, path = line.strip().split(' ', 2)
      if names_only:
        fnames.add(basename(path))
      else:
        print(path)
  print('\n'.join(sorted(fnames)))


def parse_args(args=None):
  parser = ArgumentParser(description='Download files from %s' % host)
  parser.add_argument(
    'files', metavar='<filename>', nargs='*',
    help='The names of files to download.'
  )
  parser.add_argument(
    '-u', dest='update', action='count', default=0,
    help='Update the file list. Pass more than once to force the download.'
  )
  parser.add_argument(
    '-l', dest='list', action='store_true',
    help='List files.'
  )
  parser.add_argument(
    '-n', dest='names', action='store_true',
    help='Only show file names when listing files.'
  )
  parser.add_argument(
    '-v', dest='verify', action='store_true',
    help='Verify filelist signature with pacman-key.'
  )
  parser.add_argument(
    '--gpg', action='store', default='/usr/bin/gpg', metavar='<path>',
    help='Specify a GPG binary to use when verifying the filelist signature, e.g. "pacman-key". Default: "/usr/bin/gpg"'
  )
  return parser.parse_args(args)


if __name__ == '__main__':
  try:
    args = parse_args()
    if args.update > 0 or not exists(local_list):
      if args.update > 1:
        download(remote_list, local_list)
        download(remote_sig, local_sig)
      else:
        mirror(remote_list, local_list)
        mirror(remote_sig, local_sig)
    if args.verify:
      cmd = [args.gpg, '--verify', local_sig]
      e = subprocess.call(cmd)
      if e != 0:
        sys.stderr.write('error: %s exited with %d\n' % (cmd[0], e))
        sys.exit(1)
    if args.list:
      list_files(args.names)
    elif args.files:
      get_files(args.files)
  except KeyboardInterrupt:
    sys.stderr.write("\n☹☠\n")
