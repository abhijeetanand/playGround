var com = com || { };
com.kony = com.kony || { };
com.kony.customwidget = com.kony.customwidget || { };
com.kony.customwidget.CustomButton = com.kony.customwidget.CustomButton || { };
kony.framework.customwidget = kony.framework.customwidget || { };

com.statichelper_getArguments = function (arg2) 
{

var result = '{';

for (var i = 0; i < arg2.length; ++i) 
{
     if (i > 0)
       result += ', ';

     var element = arg2[i];

     result += jetro.variant.format( element );
}

result += '}';

return result;
}
kony.framework.customwidget.create = function () {
return kony.framework.customwidget.create_variadic(arguments);
}
kony.framework.customwidget.create_variadic = function (arg) {
var formattedArg = com.statichelper_getArguments(arg);

window.external.notify('JetroCallFunction kony.framework.customwidget.create_variadic'
        + ' ' + formattedArg
);

return jetro.returnValue;
}
com.kony.customwidget.CustomButton = function(basicConfigs, layoutConfigs, pspConfigs)
{
this.nativeObjectUid = com.kony.customwidget.CustomButton.static_createNativeObject();

if( this.nativeObjectUid < 0 )
     throw "CustomControl: Failed to create object of class 'CustWidLib.WidgetWrapper' in Assembly 'CustWidLib'";

pspConfigs["uid_customcontrol"] = this.nativeObjectUid; 

if (!jetro.isDefined(this.uid))
        kony.util.createUidProperty(this, kony.framework.customwidget.create(basicConfigs, layoutConfigs, pspConfigs));

if (!jetro.isDefined(this.setupClone))
        this.setupClone = function (clone) { kony.ui.customwidget.call(clone, basicConfigs, layoutConfigs, pspConfigs); };


kony.util.defineProperty_RW(this, "aString", kony.asString);
kony.util.defineProperty_RW(this, "aInt", kony.asNumber);
kony.util.defineProperty_RW(this, "aLong", kony.asNumber);
kony.util.defineProperty_RW(this, "aDouble", kony.asNumber);
kony.util.defineProperty_RW(this, "aBoolean", kony.asBoolean);
kony.util.defineProperty_RW(this, "slideCheck", kony.asFunction);
kony.util.defineProperty_RW(this, "aObject", kony.asObject);
kony.util.defineProperty_RW(this, "aDictionary", kony.asObject);
kony.util.defineProperty_RW(this, "aArray", kony.asArray);
kony.util.defineProperty_RW(this, "aVoid", kony.asString);
kony.ui.Widget.call(this);
}
com.kony.customwidget.CustomButton.static_createNativeObject = function ()
{
    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_createNativeObject'
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getVoid = function ()
{
    return com.kony.customwidget.CustomButton.static_getVoid( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getVoid = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getVoid'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getString = function ()
{
    return com.kony.customwidget.CustomButton.static_getString( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getString = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getString'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getInt = function ()
{
    return com.kony.customwidget.CustomButton.static_getInt( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getInt = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getInt'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getLong = function ()
{
    return com.kony.customwidget.CustomButton.static_getLong( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getLong = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getLong'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getDouble = function ()
{
    return com.kony.customwidget.CustomButton.static_getDouble( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getDouble = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getDouble'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getBoolean = function ()
{
    return com.kony.customwidget.CustomButton.static_getBoolean( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getBoolean = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getBoolean'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getObject = function ()
{
    return com.kony.customwidget.CustomButton.static_getObject( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getObject = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getObject'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getObjectDictionary = function ()
{
    return com.kony.customwidget.CustomButton.static_getObjectDictionary( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getObjectDictionary = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getObjectDictionary'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getHex = function ()
{
    return com.kony.customwidget.CustomButton.static_getHex( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getHex = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getHex'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.InvokeTwoParams = function ()
{
    return com.kony.customwidget.CustomButton.static_InvokeTwoParams( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_InvokeTwoParams = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_InvokeTwoParams'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.InvokeAllParams = function ()
{
    return com.kony.customwidget.CustomButton.static_InvokeAllParams( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_InvokeAllParams = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_InvokeAllParams'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}
com.kony.customwidget.CustomButton.prototype.getArray = function ()
{
    return com.kony.customwidget.CustomButton.static_getArray( this.nativeObjectUid, arguments );
}
com.kony.customwidget.CustomButton.static_getArray = function (arg1, arg2)
{
    var formattedArg1 = arg1.toString();
    var formattedArg2 = com.statichelper_getArguments(arg2);

    window.external.notify( 'JetroCallFunction com.kony.customwidget.CustomButton.static_getArray'
        + ' ' + formattedArg1
        + ' ' + formattedArg2
    );

    return jetro.returnValue;
}

