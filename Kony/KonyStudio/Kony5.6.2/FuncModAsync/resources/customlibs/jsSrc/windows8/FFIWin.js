var FFIWin = FFIWin || { };

FFIWin.statichelper_getArguments = function (arg2) 
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
FFIWin.add = function ()
{
    return FFIWin.add_variadic(arguments);
}
FFIWin.add_variadic = function (arg)
{
    var formattedArg = FFIWin.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction FFIWin.add_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

