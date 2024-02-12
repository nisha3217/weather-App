let apikey="2dfffef1cac3126020a37b37c3ab60d6";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity=document.getElementById("userText");
let temperature=document.getElementById("temp");
let ct=document.getElementById("city");
let humidity=document.getElementById("humidity-info");
let windInfo=document.getElementById("wind-info");

async function getWeatherData(){
	city=userCity.value;
	let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
	let data=await response.json();
	console.log(data);
	ct.innerHTML=data.name;
	temperature.innerHTML=Math.round(data.main.temp-273.15)+"°C";
	humidity.innerHTML=data.main.humidity+"%";
	windInfo.innerHTML=data.wind.speed+"km/h";

	humidity.innerHTML=data.main.humidity + "%";
	windInfo.innerHTML=data.wind.speed + "km/h";
	userCity.value="";
	if(data.weather[0].main=="Clear"){
		weatherImage.src="Clear.png";
	}else if(data.weather[0].main=="Snow"){
		weatherImage.src=" ";
	}else if(data.weather[0].main=="Clouds"){
		weatherImage.src=" ";
	}else if(data.weather[0].main=="Drizzles"){
		weatherImage.src=" ";
	}else if(data.weather[0].main=="Mist"){
		weatherImage.src=" ";
	}else if(data.weather[0].main=="Rain"){
		weatherImage.src=" ";
	}
}