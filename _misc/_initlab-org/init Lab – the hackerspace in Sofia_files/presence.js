jQuery(function($) {
	var containers = $('.initlab_presence_widget_container');
	
	function getGravatarResized(url, size) {
		url = new URL(url);
		url.searchParams.set('s', size.toString());
		return url.toString();
	}
	
	function formatUser(user, avatarSize) {
		return $('<div />').addClass('row').append(
			$('<img />').attr({
				width: avatarSize,
				height: avatarSize,
				src: getGravatarResized(user.picture, avatarSize)
			})
		).append(
			$('<div />').addClass('name').text(user.name)
		);
	}
	
	function updateContainer(container, users, avatarSize) {
		if (users.length === 0) {
			container.text('Всички ги е хванала липсата :(');
			return;
		}

		container.empty();
		$.each(users, function(idx, user) {
			container.append(formatUser(user, avatarSize));
		});
	}
	
	function getUsers() {
		return $.get('https://fauna.initlab.org/api/users/present.json');
	}
	
	if (containers.length === 0) {
		return;
	}
	
	getUsers().then(function(users) {
		containers.each(function() {
			var container = $(this);
			var avatarSize = container.data('avatarSize');
			var refreshTime = container.data('refreshTime');
			
			updateContainer(container, users, avatarSize);
			
			if (refreshTime) {
				setInterval((function(avatarSize) {
					return function() {
						getUsers().then(function(users) {
							updateContainer(container, users, avatarSize);
						});
					}
				})(avatarSize), refreshTime * 1000);
			}
		});
	});
});
