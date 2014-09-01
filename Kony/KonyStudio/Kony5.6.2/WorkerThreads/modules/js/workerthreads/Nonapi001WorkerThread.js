var count =0;
try
{
   kony.ui.Alert("hi");
   postMessage("kony.ui.alert namespace had failed");
}
catch(err)
{
  count++;
  
}

try
{
  //need to write kony.io apis
   kony.io.FileSystem.browse(browseConfig, browseCallBack);
   
}
catch(err)
{
  count++;
  postMessage("io filesystem msg:"+err.message);
  
}

try
{
   kony.i18n.getCurrentLocale();
   postMessage("kony.i18n.getCurrentLocale namespace had failed");
}
catch(err)
{
  count++;
  
}

try
{
   kony.phone.dial(9440569865);
   postMessage("kony.phone.dial namespace had failed");
}
catch(err)
{
  count++;
  
}
try
{
   kony.application.getCurrentForm();
   postMessage("kony.application.getCurrentForm namespace had failed");
}
catch(err)
{
  count++;
  
}

try
{
   function myCallbackFunction1(status, data, context)
	{
	//Execute the logic here
	}
	kony.stream.setCallback("1",  myCallbackFunction1);

   postMessage("kony.stream.setCallback namespace had failed");
}
catch(err)
{
  count++;
  
}

try
{
	RawBytesHandle = "swathi";
   //need to write camera apis
   kony.camera.releaseRawBytes(RawBytesHandle);
   
}
catch(err)
{
  count++;
  postMessage("catch camera api"+err.message);
  
}


try
{
   kony.theme.getCurrentTheme() 
   postMessage("kony.theme.getCurrentTheme namespace had failed");
}
catch(err)
{
  count++;
  
}

try
{
   kony.location.clearWatch(123);
   postMessage("kony.location.clearWatch namespace had failed");
}
catch(err)
{
  count++;
  
}

try
{
   kony.accelerometer.stopMonitoringAcceleration();
   postMessage("kony.location.clearWatch namespace had failed");
}
catch(err)
{
  count++;
  
}



postMessage("count is:"+count);
