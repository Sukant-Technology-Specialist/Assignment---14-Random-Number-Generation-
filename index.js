let func = function(num) {
		var min = 10000000;
        var max = 99999999;
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('p').innerHTML = "<span>8 Digit  Unique Random Number is:</span>" + num;
    return num;
}