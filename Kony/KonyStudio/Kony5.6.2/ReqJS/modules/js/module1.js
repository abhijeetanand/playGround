function sameFileInvoke()
{
	kony.modules.loadFunctionalModuleAsync(
		"sameFile",
		successCall,
		errorCall
	);
	
	kony.modules.loadFunctionalModuleAsync(
		"sameFileOne",
		successCall,
		errorCall
	);
}

function oneDependentInvoke()
{
	kony.modules.loadFunctionalModuleAsync(
		"oneDependent",
		successCall,
		errorCall
	);
}

function twoDependentInvoke()
{
	kony.modules.loadFunctionalModuleAsync(
		"twoDependent",
		successCall,
		errorCall
	);
}

function checkoutInvoke()
{
	kony.modules.loadFunctionalModuleAsync(
		"checkout",
		successCall,
		errorCall
	);
}

function checkoutDependentInvoke()
{
	kony.modules.loadFunctionalModuleAsync(
		"checkoutDependent",
		successCall,
		errorCall
	);
}

function dependentNotLoadedInvoke()
{
	kony.modules.loadFunctionalModuleAsync(
		"dependentNotLoaded",
		successCall,
		errorCall
	);
}

function successCall()
{
	
}

function errorCall(modulename,error)
{
	alert("Could not load Functional Module, error code: " + error + " in module: " + modulename );
}