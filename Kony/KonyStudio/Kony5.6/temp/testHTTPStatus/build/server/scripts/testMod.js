function testHTTP() {

try{
         var myhttpheaders={authkey:"myauthkey", authtoken:"myauthtoken"};
         var inputParamTable= {
              appID:"SampleApp",
              serviceID:"accountLogin",
              channel:"rc",
              httpheaders:myhttpheaders
          };
          var connHandle = kony.net.invokeServiceAsync(
              //"http://192.168.1.1", // URL 1  
			   "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139",
              inputParamTable,
              callbackfunction);
// URL 2 with proper JSON : "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo",
            //URL 3 with proper JSON "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139",
      }
      catch(err) {
          kony.print("------ Error in startupTest = " +err);
		}
}
 
function callbackfunction(status, resulttable) {
            kony.print(" ----- in callbackfunction printing status " + status);
            kony.print(" ----- in callbackfunction printing JSON(resulttable) " + JSON.stringify(resulttable));
 
}