var FFIWindows = FFIWindows || { };

FFIWindows.statichelper_getArguments = function (arg2) 
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
FFIWindows.add = function ()
{
    return FFIWindows.add_variadic(arguments);
}
FFIWindows.add_variadic = function (arg)
{
    var formattedArg = FFIWindows.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction FFIWindows.add_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

