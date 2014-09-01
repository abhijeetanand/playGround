//worker
//workers inner scope
kony.print("Worker Scope: Init");
for (var i = 0; i < 10; i++) {
    kony.print("Worker Scope: loop count : " + i);
}
kony.print("Worker Scope: Loading done");