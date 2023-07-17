/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/


/******************************** Library Configuration ********************************
/***************************************************************************************/
	
	// I. Tailwind Screens In JS
	//_______________________________________

		const customScreens = require('../../../tailwind.config.js').variants.theme.screens;
		const sreensKeys = Object.keys(customScreens);
		const screensValues = Object.values(customScreens);

		let i = 0;
		for ( const property in sreensKeys ) {
			const breakpoint = sreensKeys[i];
			module.exports = { breakpoint };
			let j = 0;
			for(  keys in screensValues ) {
				if (i == j) { 
					size = screensValues[keys];
					const mediaQuery = `( (min-width: ${size['min']}) and (max-width: ${size['max']}) )`;
					module.exports = { mediaQuery };

					if( window.matchMedia(mediaQuery).matches ) {
						window.addEventListener('load', function () {
							addBreakpointElement(breakpoint);
							console.log(breakpoint);
						});
					}
					
					function windowResize() {
						if( window.matchMedia(mediaQuery).matches ) {
							addBreakpointElement(breakpoint);
							console.log(breakpoint);
						}
					}
					window.addEventListener('resize', windowResize);

				}
				j++;
			}
		i++;
		}
		

		function addBreakpointElement(breakpointName) {

			// create a new div element
			const breakpointDiv = document.createElement("div");
			breakpointDiv.className = "breakpointClass";
			breakpointDiv.style.cssText = 'position:fixed;bottom:5px;left:5px;padding:5px;width:100px;height:35px;text-align:center;border-radius:5px;background:black;color:white;border:1px solid #ddd;box-shadow: 0px 0px 8px  #fff;';
			
			// add the newly created element and its content into the DOM
			document.body.appendChild(breakpointDiv);
			
			// and give it some content
			const breakpointNameDiv = document.createTextNode(breakpointName);
			
			// add the text node to the newly created div
			breakpointDiv.appendChild(breakpointNameDiv);
		}

	// 					JQUERY
	//__________________________________________

	jQuery(function () {
	
	}); // [END] JQuery