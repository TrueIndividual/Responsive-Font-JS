document.onreadystatechange = function() {
	if(document.readyState == 'complete' ) {
		var targetViewWidth = 1920;   // Set this to desired maximum viewport width
		var fontEl = document.getElementById("responsive-font");
		var fontInitSize = window.getComputedStyle(fontEl, null).getPropertyValue('font-size');

		updateFontResponsiveness();

		function updateFontResponsiveness() {
			var viewPortWidth = window.innerWidth;
			var viewPortWidthPercentage = viewPortWidth / ( targetViewWidth / 100 );
			var fontSize;
			
			viewPortWidthPercentage = viewPortWidthPercentage / 100;

			if( fontEl !== undefined && fontEl !== null ) {
				fontSize = fontInitSize;
				fontSize = fontSize.substr(0, fontSize.indexOf('px'));
				fontSize = parseFloat(fontSize);
				fontSize = (fontSize * viewPortWidthPercentage).toString() + 'px';				
				fontEl.style.fontSize = fontSize;
			}
		}
		window.addEventListener('resize', updateFontResponsiveness, false );
	}
};