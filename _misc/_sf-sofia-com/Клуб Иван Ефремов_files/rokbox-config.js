/* All the presets options are the custom ones */

var rokbox;
window.addEvent('domready', function() {
	rokbox = new RokBox({
		'theme': 'light', // this string must match the theme folder name (string, no space, lowercase)
		'transition': Fx.Transitions.Quad.easeOut, // Transition to use when opening RokBox
		'duration': 400, // Duration of opening RokBox Effect (integer, milliseconds)
		'chase': 50, // Chase to use for the animation. works only for growl, see next line. (integer)
		'frame-border': 20, // Width of each border if any (integer, pixels)
		'content-padding': 0, // Padding of internal content wrapper (integer, pixels)
		'arrows-height': 35, // Height of arrows div (integer, pixels)
		'effect': 'growl', // Type of effect to use. Presets are: 'quicksilver', 'growl', 'explode'
		'captions': 1, // Whether to enable or disable captions (boolean, 1 or 0)
		'captionsDelay': 800, // How long captions effect should last, when captions are enabled (integer, milliseconds)
		'scrolling': 0, // Makes RokBox follow when scrolling the page (boolean, 1 or 0)
		'keyEvents': 1, // Enable keyevents. Esc, Left, Right to close and change previous or next (boolean, 1 or 0)
		'overlay': {
			'background': '#000', // Overlay background color (string, hex color format with starting hash #)
			'opacity': 0.2, // Opacity of the overlay (float, from 0 to 1, 0.1 makes it invisible but clickable)
			'duration': 200, // Duration of overlay effect (integer, milliseconds)
			'transition': Fx.Transitions.Quad.easeInOut // Transition to use for opacity effect
		},
		'defaultSize': {
			'width': 640, // Default RokBox window width (integer)
			'height': 460 // Default RokBox window height (integer)
		},
		'autoplay': 'true', // Enable or disable autoplay for QuickTimes and WM videos (string, 'true' or 'false')
		'controller': 'true', // Enable or disable controllers for QuickTimes and WM videos (string, 'true' or 'false')
		'bgcolor': '#ffffff', // Set Background colors for all videos and flash services that support it (string, hex color format with starting hash #)
		'youtubeAutoplay': 0, // Enable or disable autoplay for YouTube (boolean, 1 or 0)
		'vimeoColor': '00adef', // Vimeo Color Scheme (string, hex color format WITHOUT starting hash #)
		'vimeoPortrait': 0, // Enable or disable Vimeo Portrait Button (boolean, 1 or 0)
		'vimeoTitle': 0, // Enable or disable Vimeo Title caption (boolean, 1 or 0)
		'vimeoFullScreen': 1, // Enable or disable Vimeo FullScreen button (boolean, 1 or 0)
		'vimeoByline': 0 // Enable or disable Vimeo's Author line (boolean, 1 or 0)
	});
});