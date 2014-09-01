//worker

//workers inner scope

kony.print("Grand Child Worker Scope: Init");


//global
_jsonOBJ = {
	"value" : "In Grand Child Worker Scope"
};
kony.print("Grand Child Worker Scope: _jsonOBJ['value'] : " + _jsonOBJ['value']);

kony.print("Grand Child Worker Scope: Loading done");


/*
 *  */