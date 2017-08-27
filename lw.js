var cCode="";
function yWeatherCodes(codeNum,countryCode){
var wCode=['tornado','tropical storm','hurricane','severe thunderstorms','thunderstorms',
'mixed rain and snow', 'mixed rain and sleet','mixed snow and sleet','freezing drizzle','drizzle',
'freezing rain','showers','showers','snow flurries','light snow showers','blowing snow','snow','hail',
'sleet','dust','foggy','haze','smoky','blustery','windy','cold','cloudy','mostly cloudy (night)',
'mostly cloudy (day)','partly cloudy (night)','partly cloudy (day)','clear (night)','sunny','fair (night)',
'fair (day)','mixed rain and hail','hot','isolated thunderstorms','scattered thunderstorms','scattered thunderstorms',
'scattered showers','heavy snow','scattered snow showers','heavy snow',
'partly cloudy','thundershowers','snow showers','isolated thundershowers','not available'];

var wCodeRus=['торнадо','тропический шторм','ураган','сильные грозы','грозы','cмешанный дождь и снег','смешанный дождь и мокрый снег','смешанный снег и мокрый снег','замораживание моросящего дождя','дождь',
'замерзающий дождь','ливни','ливни','снежные бури','снежные ливни','снег','снег','град',
'снег','пыль','туманность','туман','дымчатый','сильные порывы','ветреный','холодный','облачный','облачно (ночь)',
'oблачно (день)','облачно (ночь)','облачно (день)','ясный (ночной)','солнечный','честный (ночь)',
'справедливый (день)','смешанный дождь и град','горячие','изолированные грозы','разбросанные грозы','разбросанные грозы',
'рассеянные ливни','сильный снег','разбросанные снежные ливни','сильный снег','облачно','грозы','снежные ливни','изолированные грозы','недоступно'];

var wCodeUkr=['торнадо','тропічний шторм','ураган,сильні грози','грози,змішаний дощ та сніг','змішаний дощ та сніг','змішаний сніг і сніг','замерзаючий дощ','дощ',
'замерзаючий дощ','дощ','дощ','снігові шквалі','легкі снігові дощі','сніг','сніг','град',
'сніг','пил','туман','туман','димка','порывчастий вiтер','вітряний','холодний','хмарний','переважно хмарно (ніч)',
'переважно хмарність(день)','частково хмарно (ніч)','частково хмарно(день)','ясно (ніч)','сонячний','ярмарок (ніч)',
'ярмарок (день)','змішаний дощ та град','жарко','ізольовані грози','розсипані грози','розсипані грози',
'розсипані дощі','важкий сніг','розсипані снігові дощі','важкий сніг','частково хмарно','грози','снігові дощі','ізольовані грози','недоступні'];
//console.log(codeNum+countryCode+"GGggggggg");
//$(".code").text(wCode[codeNum.])
	
	
	console.log(codeNum+countryCode+"GGggggggg");
	console.log(wCodeRus[codeNum]+"wCodeRus[codeNum]");
	console.log(wCodeUkr[codeNum]+"wCodeUkr[codeNum]");
	console.log(wCode[codeNum]+"wCode[codeNum]");
	
	if(lang="RU"){
		return wCodeRus[codeNum];
	}else if(lang="UA"){
		return wCodeUkr[codeNum];
	}else{
		return wCode[codeNum];
	}

}
function showStatusJson(status){
//update HTML view and show is "success", "notmodified", "error", "timeout", or "parsererror"
console.log(status+"from showStatus");
var userText;
	switch(status){
		case"success":userText="Found your location";
		break;
		case"notmodified":
		break;
		case"error":userText="Location services unavailable, put city manualy";
		break;
		case"timeout":userText="Waiting server responce";
		break;
		case"parsererror":userText="Critical Error";
		break;
	}
	//$(htmlElement).text=userText;
	Materialize.toast(userText, 3000);//show message via Materialize CSS
	//return userText;
}

function gcpOK(){
Materialize.toast("Get your GPS position", 3000);
//position.coords.latitude +","+ position.coords.longitude;
/*position.coords.latitude+","+position.coords.longitude*/
$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+"46.487798, 30.548871",function(data,status,xhr){
				showWeather(data.results[1].address_components[2].long_name);
				//arr=data.results.formatted_address;
				//console.log(arr);
				showStatusJson(status)});
}
function gcpError(){
Materialize.toast("GPS position fail", 3000);
Materialize.toast("Start IP Service", 3000);
ipApi();
}
function altPosition(){
Materialize.toast("Geo service unsupported", 3000);
Materialize.toast("Start alternative IP location service", 3000);
ipApi();
}
function getCountryCode(code){
	cCode=code;
	console.log(cCode);
}
function ipApi(){
//"http://ip-api.com/json"  //http://ip-api.com/json Service to find by IP

$.getJSON("http://ip-api.com/json",function(data,status,xhr){
				//arr=data;
			
				showWeather(data.city+","+data.country);
				Materialize.toast(data.city+","+data.country, 3000);
				getCountryCode(data.countryCode);
				showStatusJson(status)});
}
function showWeather(data){
console.log(status+"from showWeather");
//console.log(data);
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+data+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data,status,xhr){
				//console.log(data.query.results.channel[0].item.forecast.text);
				$(".day").text(data.query.results.channel[0].item.forecast.day);
				$(".date").text(data.query.results.channel[0].item.forecast.date);
				//$(".date").append("<span=class="date">27 Aug </span></");
				
				//console.log();
				$(".code").text(yWeatherCodes(data.query.results.channel[0].item.forecast.code,cCode));
				Materialize.toast("Yahoo weather "+status, 3000);
				});
				
				//console.log(x);
				//console.log(yWeatherCodes(data.query.results.channel[0].item.forecast.code,cCode));
				//$(".code").text(x);
				

}
$(document).ready(function(){
	if ("geolocation" in navigator) {// if browser can find GPS position
		//calling firstarg=success_function secondarg=unsucsess_function
		//options: maximumAge Is a positive long value indicating the maximum age in milliseconds of a possible cached position 0-infinity
		navigator.geolocation.getCurrentPosition(gcpOK, gcpError);
		showWeather();
	} else {
		altPosition();//Alternative service find by IP
		showDialogueWindow();//if Alternative service OK user click OK, if not, enter City and country manualy 
		showWeather();								
	}
	console.log(cCode);


	
});
