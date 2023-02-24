
import {auth} from './modules/firebase_config.js'
import {provider} from './modules/firebase_config.js'

function getWeather(searchquery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchquery+"&units=imperial&APPID="+apikey;
  
  $(".city").text("");
  $(".temp").text("");
  $(".error-message").text("");

  $.ajax(url,
    {success:function(data){        
      $(".city").text(data.name);
      $(".temp").text(data.main.temp);

    }, error: function(error){
      $(".error-message").text("An error occured");
    }})
}

function searchWeather() {
  var searchquery =$(".search").val();
  getWeather(searchquery);
}


function handlesignin(){
  signInWithPopup(auth, provider);
  
}

