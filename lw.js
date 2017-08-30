var globalCityCountry;		//code like "US" - this I need to delete as far as I remmember
var globalWeekDay=[];		//String array like "Sun"
var globalDateString=[];	//String array like "23 jun 2017"
var globalTempH=[];			//temperature array
var globalTempL=[];			//temperature array
var cCode;					//code like "US"
var fdataCode=[];			//weather data code(string) like "34" fair (day) 
// - yahoo data acc weather condition like from here https://developer.yahoo.com/weather/documentation.html

//var globalGeoLang;
var bCelsius=[];//For swithing to Celsius and back
var bGeo=[];	//For swithing to multy language and back

function convertPairTemp(h,l,numOfPair) {
    if(bCelsius[numOfPair]==true){
      h=h*1.8+32;
      l=l*1.8+32;
      bCelsius[numOfPair]=false;
      }else{
      h=(h-32)*0.556;
      l=(l-32)*0.556;
      bCelsius[numOfPair]=true;
      }
    var arr=[];
    h=Math.round(h);
    l=Math.round(l);
    arr.push(h);
    arr.push(l);
    
    return arr;
}
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
'oблачно (день)','облачно (ночь)','облачно (день)','ясный (ночной)','солнечный','ни облачка (ночь)',
'ни облачка (день)','смешанный дождь и град','горячие','изолированные грозы','разбросанные грозы','разбросанные грозы',
'рассеянные ливни','сильный снег','разбросанные снежные ливни','сильный снег','облачно','грозы','снежные ливни','изолированные грозы','недоступно'];

var wCodeUkr=['торнадо','тропічний шторм','ураган','сильні грози','грози','змішаний дощ та сніг','змішаний дощ та сніг','змішаний сніг і сніг','замерзаючий дощ','дощ',
'замерзаючий дощ','дощ','дощ','снігові шквалі','легкі снігові дощі','сніг','сніг','град',
'сніг','пил','туман','туман','димка','порывчастий вiтер','вітряний','холодний','хмарний','переважно хмарно (ніч)',
'переважно хмарність(день)','частково хмарно (ніч)','частково хмарно(день)','ясно (ніч)','сонячний','ясна (ніч)',
'сонячний (день)','змішаний дощ та град','жарко','ізольовані грози','розсипані грози','розсипані грози',
'розсипані дощі','важкий сніг','розсипані снігові дощі','важкий сніг','частково хмарно','грози','снігові дощі','ізольовані грози','недоступні'];

//$(".code").text(wCode[codeNum.])
//console.log(codeNum+countryCode+"GGggggggg");
//console.log(wCodeRus[codeNum]+"wCodeRus[codeNum]");
//console.log(wCodeUkr[codeNum]+"wCodeUkr[codeNum]");
//console.log(wCode[codeNum]+"wCode[codeNum]");
	
	if(countryCode=="RU"){
		return wCodeRus[codeNum];
	}else if(countryCode=="UA"){
		return wCodeUkr[codeNum];
	}else{
		return wCode[codeNum];
	}

}
function yDay(dayString,dateString,countryCode){
	console.log(dateString);
	console.log(typeof(dateString));
var engShortDay=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
var engDay=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var ruShortDay=['Пон','Вто','Сре','Чет','Пят','Суб','Вос'];
var ruDay=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
var uaShortDay=['Пон','Вiв','Сер','Чет','П’ят','Суб','Нед'];
var uaDay=['Понеділок','Вівторок','Середа','Четвер','П\'ятниця','Субота','Неділя'];

var enShortMonth=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var enMonth=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var ruMonth=['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август','Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var uaMonth=['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
var dateArr;
dateArr=dateString.split(' ');
console.log(dateArr);
  for(var i=0;i<=enShortMonth.length;i++){
    //console.log(enShortMonth[i]);
      if(enShortMonth[i]==dateArr[1]){
        if(countryCode=="RU"){
		      dateArr[1]=ruMonth[i];
	        }else if(countryCode=="UA"){
		      dateArr[1]=uaMonth[i];
	        }else{
		      dateArr[1]=enMonth[i];
	        }
      }
  }
  for(var i=0;i<= engShortDay.length;i++){
    //console.log(enShortMonth[i]);
      if(engShortDay[i]==dayString){
        if(countryCode=="RU"){
		      dayString=ruShortDay[i];
	        }else if(countryCode=="UA"){
		      dayString=uaShortDay[i];
	        }else{
		      dayString=engShortDay[i];
	        }
      }
  }
  dateArr=dateArr.join(' ');
 return dayString+" "+dateArr;
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
$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+","+position.coords.longitude,function(data,status,xhr){
				globalCityCountry=data.results[1].address_components[2].long_name;
				cCode=data.results[1].address_components[3].short_name;
				showWeather(globalCityCountry);
				showStatusJson(status);	
				});
}
function ipApi(){
//http://ip-api.com/json Service to find by IP
$.getJSON("http://ip-api.com/json",function(data,status,xhr){
				globalCityCountry=data.city+","+data.country;
				cCode=data.countryCode;
				showWeather(globalCityCountry);
				//Materialize.toast(data.city+","+data.country, 3000);
				showStatusJson(status);});
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
function showWeather(pos){
//console.log(status+"from showWeather");
//console.log(data);

$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+pos+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data,status,xhr){
				//console.log(data.query.results.channel.length+" get_JASON");
				var json=data.query.results.channel;
				var elcount=0;
				json.forEach(function(val){
				//console.log(val.item.forecast+"FUUUUCK!!");
				//creating globall arrays with all data
				globalWeekDay.push(val.item.forecast.day);
				globalDateString.push(val.item.forecast.date);
				globalTempH.push(val.item.forecast.high);
				globalTempL.push(val.item.forecast.low);
				fdataCode.push(val.item.forecast.code);
				makeGlobals(globalDateString);
				if(elcount<5){
					bGeo.push(false);
					bCelsius.push(false);
					putElements(elcount++);
				}
				
				});
				//console.log(data.query.results.channel[0].item.forecast.text);
				Materialize.toast("Yahoo weather "+status, 3000);
				});
			
}
$(document).ready(function(){
	if ("geolocation" in navigator) {// if browser can find GPS position
		//calling firstarg=success_function secondarg=unsucsess_function
		//options: maximumAge Is a positive long value indicating the maximum age in milliseconds of a possible cached position 0-infinity
		navigator.geolocation.getCurrentPosition(gcpOK, gcpError);
		showWeather(globalCityCountry);
	} else {
		altPosition();//Alternative service find by IP
		//showDialogueWindow();//if Alternative service OK user click OK, if not, enter City and country manualy 
		showWeather(globalCityCountry);								
	}
});
function putElements(elNum){
	//showWeather(globalCityCountry);
	
	$(".containerX").append('<div class="blue sqr">\
							<div class="date vblock"></div>\
								<div class="bsqr">\
									<div class="icon"></div>\
								</div>\
						<div class="loc hblock">City,Country</div>\
						<div class="hblock">max =</div><div class="t_high hblock"></div><div class="hblock x">F&deg;</div>\
						<div class="hblock">min =</div><div class="t_low hblock"></div><div class="hblock xx">F&deg;</div>\
						<div class="code hinfoblock"></div>\
						<div class="hblock k"></div>\
						</div>');
	//console.log(globalDateString[elNum]);
	var today=new Date();
	var h=today.getHours();
	if(h<=20&&h<6){
		switch (parseInt(fdataCode[elNum])) {
		case 19:
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 44:
		$(".icon:eq("+elNum+")").addClass('partly-cloudy'); 
		break;
		case 17:
		case 18:
		$(".icon:eq("+elNum+")").addClass('clouds');
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 40:
		case 45:
		$(".icon:eq("+elNum+")").addClass('rain'); 
		break;
		case 37:
		case 38:
		case 39:
		case 47:
		$(".icon:eq("+elNum+")").addClass('thunder-storm'); 
		break;
		case 7:
		case 13:
		case 14:
		case 15:
		case 16:
		case 41:
		case 42:
		case 43:
		case 46:
		$(".icon:eq("+elNum+")").addClass('snow');
		break; 
		default:$(".icon:eq("+elNum+")").addClass('sun'); 
		}
	}else{
		switch (parseInt(fdataCode[elNum])) {
		case 19:
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 44:
		$(".icon:eq("+elNum+")").addClass('clouds'); 
		break;
		case 17:
		case 18:
		$(".icon:eq("+elNum+")").addClass('clouds');
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 40:
		case 45:
		$(".icon:eq("+elNum+")").addClass('rainy-night'); 
		break;
		case 37:
		case 38:
		case 39:
		case 47:
		$(".icon:eq("+elNum+")").addClass('thunder-night'); 
		break;
		case 7:
		case 13:
		case 14:
		case 15:
		case 16:
		case 41:
		case 42:
		case 43:
		case 46:
		$(".icon:eq("+elNum+")").addClass('snowy-night');
		break; 
		default:$(".icon:eq("+elNum+")").addClass('night'); 
		}
	}
	
	$(".date:eq("+elNum+")").text(yDay(globalWeekDay[elNum],globalDateString[elNum],cCode));
	$(".loc:eq("+elNum+")").text(globalCityCountry);
	$(".t_high:eq("+elNum+")").text(globalTempH[elNum]);
	$(".t_low:eq("+elNum+")").text(globalTempL[elNum]);
	$(".x:eq("+elNum+")").addClass('inactive_button');
	$(".code:eq("+elNum+")").text(yWeatherCodes(fdataCode[elNum],cCode));
	
	console.log(bCelsius+"console.log(bCelsius);");
	console.log(bGeo+"console.log(bGeo);");
	
	
	$(".x:eq("+elNum+")").addClass('inactive_button');
	$(".xx:eq("+elNum+")").addClass('inactive_button2');
	$(".x:eq("+elNum+")").click(function(){
					//bCelsius=false;
					if(bCelsius[elNum]==false){
					var tempArr=convertPairTemp(globalTempH[elNum],globalTempL[elNum],elNum);
					console.log(tempArr);
					$(".x:eq("+elNum+")").html('<span>C&deg;</span>');
					$(".xx:eq("+elNum+")").html('<span>C&deg;</span>');
					$(".t_high:eq("+elNum+")").text(tempArr[0]);
					$(".t_low:eq("+elNum+")").text(tempArr[1]);
					$(".x:eq("+elNum+")").addClass('active_button');
					$(".x:eq("+elNum+")").removeClass('inactive_button');
								
	console.log(bCelsius+"console.log(bCelsius);");
	console.log(bGeo+"console.log(bGeo);");
	
					Materialize.toast("Temp switched to C&deg;", 3000);
					bCelsius[elNum]=true;	
					}else{
					$(".x:eq("+elNum+")").html('<span>F&deg;</span>');
					$(".xx:eq("+elNum+")").html('<span>F&deg;</span>');
					$(".t_high:eq("+elNum+")").text(globalTempH[elNum]);
					$(".t_low:eq("+elNum+")").text(globalTempL[elNum]);
					$(".x:eq("+elNum+")").addClass('inactive_button');
					$(".x:eq("+elNum+")").removeClass('active_button');
					
	console.log(bCelsius+"console.log(bCelsius);");
	console.log(bGeo+"console.log(bGeo);");
		
					Materialize.toast("Temp switched to F&deg;", 3000);
					bCelsius[elNum]=false;
				}
				});
	$(".k:eq("+elNum+")").html('<span>'+cCode+'</span>');
	$(".k:eq("+elNum+")").addClass('inactive_button');			
	$(".k:eq("+elNum+")").click(function(){
					if(bGeo[elNum]==true){
					$(".k:eq("+elNum+")").html('<span>'+cCode+'</span>');
					$(".k:eq("+elNum+")").addClass('active_button');
					$(".k:eq("+elNum+")").removeClass('inactive_button');
					$(".code:eq("+elNum+")").text(yWeatherCodes(fdataCode[elNum],cCode));
					$(".date:eq("+elNum+")").text(yDay(globalWeekDay[elNum],globalDateString[elNum],cCode));
					Materialize.toast("Language code Geoconfig", 3000);
					bGeo[elNum]=false;	
					}else{
					$(".k:eq("+elNum+")").html('<span>EN</span>');
					$(".k:eq("+elNum+")").addClass('inactive_button');
					$(".k:eq("+elNum+")").removeClass('active_button');
					Materialize.toast("English language selected", 3000);
					$(".code:eq("+elNum+")").text(yWeatherCodes(fdataCode[elNum],"EN"));
					$(".date:eq("+elNum+")").text(yDay(globalWeekDay[elNum],globalDateString[elNum],"EN"));
					bGeo[elNum]=true;
					}		
	});

}
function makeGlobals(olo){
globalDateString=olo;	
}
