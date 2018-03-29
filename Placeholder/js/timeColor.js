function startColorRotation(colorElement, dateElement, rgbElement){
	function componentToHex(value){
		var hex = value.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	}
	function RGBToHex(r, g, b){
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
	function getRandomColorValue(){
		return Math.round(Math.random() * 255);
	}
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var gmt = ["AM", "PM"];

	function rotate(){
		var date = new Date();
		var rootElement = document.getElementsByTagName("html")[0];
		function hour(input){
			if(input === "number"){
				var hours;
				if(date.getHours() > 12){
					return date.getHours() - 12;
				}
				else if(date.getHours() === 0){
					return 12;
				}
				else{
					return date.getHours();
				}
			}
			else if(input === "ap"){
				if(date.getHours() >= 12){
					return 1;
				}
				else{
					return 0;
				}
			}
		}
		function minutes(){
			if(date.getMinutes() < 10){
				return "0" + date.getMinutes();
			}
			else{
				return date.getMinutes();
			}
		}
		function seconds(){
			if(date.getSeconds() < 10){
				return "0"+date.getSeconds();
			}
			else{
				return date.getSeconds();
			}
		}
		var r = getRandomColorValue();
		var g = getRandomColorValue();
		var b = getRandomColorValue();
		if(r + g + b < 383 && g < 175){
			rootElement.style.color = "#ccc";
		}
		else{
			rootElement.style.color = "#000";
		}
		var color = RGBToHex(r, g, b);
		if(colorElement){
			colorElement.innerHTML = color;
		}
		if(dateElement){
			dateElement.innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + hour("number") + ":" + minutes() + ":" + seconds() + " " + gmt[hour("ap")];
		}
		if(rgbElement){
			var rgb = "(rgb: " + r + ", " + g + ", " + b + ")";
			rgbElement.innerHTML = rgb;
		}
		rootElement.style.background = color;
	}

	rotate();
	setInterval(rotate, 1000);
}