	function makeRequest(url){ //Make GET Request + import/execute
		var httpRequest;
		if (window.XMLHttpRequest){
			httpRequest = new XMLHttpRequest();
			if (httpRequest.overrideMimeType){
				httpRequest.overrideMimeType('text/html');
			}
		}
		else if (window.ActiveXObject){
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		httpRequest.onreadystatechange = function(){
			if ((httpRequest.readyState == 4)&&(httpRequest.status == 200)){
				eval(httpRequest.responseText); //import/execute
			}
		};
		httpRequest.open('GET', url, true);
		httpRequest.send('');
	}
