  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/pronostico/',
        url: 'pronostico.html',
      },

      {
        path: '/index/',
        url: 'index.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="pronostico"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
   
    // var url = "https://ws.smn.gob.ar/map_items/forecast/1";
    // app.request.json(url, function (datos){
    //   $$('#texto').html(datos.countryName);
    // });
    var url = "https://ws.smn.gob.ar/map_items/forecast/1";
    app.request.json(url, function (datos){

      localidad = (document).getElementById("selLoc").value;

      for (i=0; i<datos.length; i++) {
        estaLocalidad = datos[i].name;
        if ( estaLocalidad == localidad) {

          ciudad = datos[i].name;
          provincia = datos[i].province;
          mt = datos[i].weather.morning_temp + " C°";
          md = datos[i].weather.morning_desc;
          mimg = datos[i].weather.morning_id;
          tt = datos[i].weather.afternoon_temp + " C°";
          td = datos[i].weather.afternoon_desc;
          timg = datos[i].weather.afternoon_id;

          $$('#ciudad').html(ciudad);
          $$('#provincia').html(provincia);
          $$('#mt').html(mt);
          $$('#mimg').attr('src','https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/'+mimg+'.png');
          $$('#md').html(md);
          $$('#tt').html(tt);
          $$('#timg').attr('src','https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/'+timg+'.png');
          $$('#td').html(td);


        }
        //break;

      }


      
      
    });


    

});

$$(document).on('page:init', '.page[data-name="index"]', function (e) { 
   $$('#inicio').on("click",fnbtn)

  function fnbtn(){
     (document).getElementById("selLoc");
     console.log((document).getElementById("selLoc"))

   }
  
    });