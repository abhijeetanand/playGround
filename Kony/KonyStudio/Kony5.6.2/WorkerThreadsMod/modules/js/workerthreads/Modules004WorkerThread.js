
//worker

//workers inner scope

kony.modules.loadFunctionalModuleAsync('mm',successcallback,failurecallback);

function successcallback()
{
postMessage("failed");


}

function failurecallback()
{
	postMessage("passed");
}
