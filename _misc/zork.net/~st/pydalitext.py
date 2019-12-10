#!/usr/bin/python

import sys, time, random
import pygame
pygame.init()

SCREENSIZE = (320,200)
BLACK = (0,0,0,255)
WHITE = (255,255,255,255)
TRANSITIONDELAY = 900 # milliseconds, allegedly.
DISPLAYDELAY = 1000

STRINGS = [
		"PyDaliText",
		"Suffusion Of Yellow",
		"Your Ad Here",
	]

class Glyph(object):

	def __init__(self, surf=None, height=0):
		self.width = 0
		self.height = height
		self.scanlines = []

		if surf is not None:
			self._initFromSurface(surf)
		else:
			self.scanlines = [[]] * self.height

	def _initFromSurface(self, surf):
		self.width = surf.get_width()
		self.height = surf.get_height()

		for y in range(0,self.height):
			segments = []
			segStart = None
			segEnd = None
			lastPoint = 0
			for x in range(0, self.width):
				color = surf.get_at( (x,y) )
				if color > BLACK:
					currPoint = 1
				else:
					currPoint = 0

				if currPoint and not lastPoint:
					segStart = x
				elif not currPoint and lastPoint and segStart is not None:
					segEnd = x
					segments.append( (segStart, segEnd) )

				lastPoint = currPoint

			if lastPoint and segStart is not None:
				segEnd = self.width-1
				segments.append( (segStart, segEnd) )

			self.scanlines.append(segments)

	def render(self, surf, (startX,startY), color=WHITE ):
		y = startY
		for scanline in self.scanlines:
			for segStart, segEnd in scanline:
				for x in range (startX + segStart, startX + segEnd):
					surf.set_at( (x, y), color)
			y += 1


class GlyphCache(dict):

	def __init__(self, font):
		self.font = font
		self.cache = {}

	def __getitem__(self, index):
		if index in self:
			return super(GlyphCache,self).__getitem__(index)
		elif isinstance(index, str):
			g = Glyph(self.font.render(index, False, WHITE))
			self[index] = g
			return g
		else:
			raise KeyError


class TextRun(object):

	def __init__(self, text=None, cache=None):
		self.glyphs = []
		self.cache = cache

		if text is not None and cache is not None:
			self._initWithTextAndCache(text, cache)

	def __len__(self):
		return len(self.glyphs)

	def _initWithTextAndCache(self, text, cache):
		self.glyphs = [cache.__getitem__(char) for char in text]

	def render(self, surf, (startX, startY), color=WHITE):

		x = startX
		for glyph in self.glyphs:
			glyph.render(surf, (x,startY), color)
			x += glyph.width

	def extendToWidth(self, chars):
		glyphHeight = self.cache.font.size("A")[1]
		while len(self.glyphs) < chars:
			self.glyphs.append(Glyph(height=glyphHeight))


class TextMorphManager(object):

	def __init__(self, initText, finalText, duration):
		self.initText = initText
		self.finalText = finalText
		self.startTime = pygame.time.get_ticks()
		self.endTime = self.startTime + duration

		if len(self.initText) < len(finalText):
			self.initText.extendToWidth(len(finalText))
		elif len(self.initText) > len(finalText):
			self.finalText.extendToWidth(len(initText))

	def calculateCurrentFrame(self):
		now = pygame.time.get_ticks()
		ratio = float(now-self.startTime)/(self.endTime-self.startTime)

		if ratio >= 1.0:
			return self.finalText

		return morphTextRun(self.initText, self.finalText, ratio)


def normalizeScanLines(init, final):
	"""
	Make sure both scanlines have the same number of segments
	"""

	if len(init) < len(final): 
		while len(init) < len(final):
			init = init[:]
			if len(init) == 0:
				startPos = int((final[0][0] + final[0][1]) / 2)
				init.append( (startPos, startPos))
			else:
				init.append( init[-1] )
	
	if len(init) > len(final):
		while len(init) > len(final):
			final = final[:]
			if len(final) == 0:
				startPos = int((init[0][0] + init[0][1]) / 2)
				final.append( (startPos, startPos))
			else:
				final.append( final[-1] )

	return init, final

def morphScanLine(init, final, ratio):
	assert 0 <= ratio <= 1.0
	
	init, final = normalizeScanLines(init, final)

	res = []
	for (initStart, initEnd), (finalStart, finalEnd) in zip(init, final):
		start = int( (finalStart-initStart)*ratio + initStart)
		end = int( (finalEnd-initEnd)*ratio + initEnd)

		res.append( (start, end) )

	return res

def morphGlyph(init, final, ratio):
	assert init.height == final.height, ("glyphs must be same height, "
			"%r != %r" % (init.height, final.height))

	res = Glyph()
	for initLine, finalLine in zip(init.scanlines, final.scanlines):
		res.scanlines.append(morphScanLine(initLine, finalLine, ratio))

	res.height = init.height
	res.width = int( (final.width-init.width)*ratio + init.width)

	return res

def morphTextRun(init, final, ratio):
	assert len(init.glyphs) == len(final.glyphs)

	tr = TextRun(cache = init.cache)
	for initG, finalG in zip(init.glyphs, final.glyphs):
		tr.glyphs.append(morphGlyph(initG, finalG, ratio))

	return tr

screen = pygame.display.set_mode(SCREENSIZE)
font = pygame.font.Font(None,32)
cache = GlyphCache(font)
clock = pygame.time.Clock()

lastText = TextRun(random.choice(STRINGS), cache)
morpher = TextMorphManager(lastText, lastText, 1)
changeTime = pygame.time.get_ticks() + DISPLAYDELAY

while 1:
	clock.tick(60)
	e = pygame.event.poll()

	if e.type == pygame.QUIT:
		pygame.quit()
		break

	now = pygame.time.get_ticks()

	if now > changeTime:
		nextText = TextRun(random.choice(STRINGS), cache)
		morpher = TextMorphManager(lastText, nextText, TRANSITIONDELAY)
		changeTime = now + DISPLAYDELAY

	screen.fill(BLACK)
	tr = morpher.calculateCurrentFrame()
	tr.render(screen, (0,0) )

	fpsText = font.render("%0.2f" % clock.get_fps(), False, WHITE)
	screen.blit(fpsText, (0, (screen.get_height() - fpsText.get_height())) )

	pygame.display.flip()
	lastText = tr
