var myCountry,myCity;
var url="";

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
function ipApi(){
//"http://ip-api.com/json"  //http://ip-api.com/json Service to find by IP
$.getJSON("http://ip-api.com/json",function(data,status,xhr){
				//arr=data;
				showWeather(data.city+","+data.country);
				showStatusJson(status)});
}
function showWeather(data){
console.log(status+"from showWeather");
console.log(data);
$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+data+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(data,status,xhr){
				console.log(data.query.results.channel[0].item.forecast.text);
				$(".day").text(data.query.results.channel[0].item.forecast.day);
				$(".date").text(data.query.results.channel[0].item.forecast.date);
				//$(".date").append("<span=class="date">27 Aug </span></");
				Materialize.toast("Yahoo weather "+status, 3000);});
				

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
	


	
});
