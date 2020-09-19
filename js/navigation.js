
var seasonIdx = 0;

$(document).keypress(function(e) {
	console.log("key pressed! idx", seasonIdx);

	// get the element that fired the onkeydown function
    let keyCode = e.keyCode;

    if (e.keyCode == '78') { // n
    	seasonIdx = (seasonIdx + 1) % 4;
    }

    seasons = document.getElementsByClassName('season');
    seasons.each()
    for (let i = 0; i < 4; i++) {
    	s = $(`season:nth-child(${i+1})`)
    	console.log(`season:nth-child(${i+1})`, s);
    	if (i != seasonIdx) {
    		s.hide();
    	} else {
    		s.show();
    	}
    }
});
//     seasons[seasonIdx].focus();

//     #haze {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: silver;
//   opacity: 0%;
// }

// #haze:hover {
//   animation: haze 5s ease-in 0s forwards;
// }

// @keyframes haze {
//   0% { opacity: 30% }
//   100% { opacity: 100% }
// }

// });
