ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/   /' -e 's/-/|/'

# https://gist.github.com/sahwar/dc0212964b87d4e8668c6230654955a4
# forked from
# https://gist.github.com/yradunchev/14765ef407bd57bd0d5c