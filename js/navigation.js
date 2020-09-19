
var seasonIdx = -1;

$(document).keypress(function(e) {
	console.log("key pressed! idx", seasonIdx);

	// get the element that fired the onkeydown function
    let keyCode = e.keyCode;
    console.log(keyCode);

    if (e.keyCode == '110') { // n
        console.log('n!');
    	seasonIdx = (seasonIdx + 1) % 4;
    }

    if (seasonIdx == 0) {
        $('#season1').show();
        $('#season2').hide();
        $('#season3').hide();
        $('#season4').hide();
    }
    if (seasonIdx == 1) {
        $('#season1').hide();
        $('#season2').show();
        $('#season3').hide();
        $('#season4').hide();
    }
    if (seasonIdx == 2) {
        $('#season1').hide();
        $('#season2').hide();
        $('#season3').show();
        $('#season4').hide();
    }
    if (seasonIdx == 3) {
        $('#season1').hide();
        $('#season2').hide();
        $('#season3').hide();
        $('#season4').show();
    }
});
