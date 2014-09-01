function loadMod_module1()
{
	kony.modules.loadFunctionalModule("module1");
	frm11.show();
}

function loadMod_module2()
{
	kony.modules.loadFunctionalModule("module2");
	frm11.show();
}

function invokeNotLoadedForm()
{
	try
	{
		frm2.show();
	}
	catch(e)
	{
		alert(e.message);
	}
}

function invokeNotLoadedJSFile()
{
	try
	{
		jsFileNotLoaded();
	}
	catch(e)
	{
		alert(e.message);
	}
}

function initFunctionNotPresent()
{
	try
	{
		a = kony.modules.loadFunctionalModule("module3");
		alert(a);
	}
	catch(e)
	{
		alert(e.message);
	}
}

function invalidLoadOnStartUp()
{
	try
	{
		frm4.show();
	}
	catch(e)
	{
		alert(e.message);
	}
}

function dependentNotPresent()
{
	a = kony.modules.loadFunctionalModule("module5");
	frm5.lbl1.text = a;
}

function invokeFrm6()
{
	try
	{
		frm6.show();
	}
	catch(e)
	{
		alert(e.message);
	}
}