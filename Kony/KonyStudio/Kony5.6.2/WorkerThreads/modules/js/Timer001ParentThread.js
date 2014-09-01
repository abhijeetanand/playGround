///header			
		
function test_case_timer_parent_thread_1() {
    //1) 
    try {
        
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('Timer001WorkerThread.js');
        //invoked when worker calls postmessage() from its inner scope
        worker.addEventListener("message", function(event) {
       frmTimer.lbl2.text +=  event.data +'\n';
        });
       
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
    //
    test012();
    //
    function test012() {
       // kony.print("Parent Scope :- kony.timer.schedule - ");
        var timerId = "mytimer12111";
        var i = 0;

        function timerFunc() {
            i++;
            frmTimer.lbl1.text +="Parent Scope :- kony.timer.schedule - In timerFunc() : " + i +'\n';
            if (i > 2) {
                frmTimer.lbl1.text +="Parent Scope :- kony.timer.schedule - Stopping timer : ";
                kony.timer.cancel(timerId);
            }
        };
        //
        kony.timer.schedule(timerId, timerFunc, 1, true);
        //kony.print("Parent Scope :- kony.timer.schedule - Done");
    };
   // kony.print("Parent Scope: Exit test_case_parent_thread()");
};
/*
             * Reference O/P : Chrome

             *  */