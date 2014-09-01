//worker
//workers inner scope
kony.print("Grand Child Worker Scope: Init");
for (var i = 0; i < 10; i++) {
    kony.print("Grand Child Worker Scope: loop count : " + i);
}
kony.print("Grand Child Worker Scope: Loading done");
/*
 *  */