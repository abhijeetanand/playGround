


///header			
app_global_context["registerFunc"]("Timer: - 2  ", 
test_case_timer_parent_thread_2, "nonui");
		
////function follows			




            function test_case_timer_parent_thread_2() {
                //1) 

                try {
                    kony.print("Parent Scope: Init test_case_parent_thread()");
                    kony.print("Parent Scope: In try block");

                    //create new kony.worker.WorkerThread
                    var worker = new kony.worker.WorkerThread('TestCaseTimer002WorkerThread.js');

                    //invoked when worker calls postmessage() from its inner scope
                    worker.addEventListener("message", function(event) {
                        kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
                    });
                    
                    worker.postMessage("Hello from Parent");



                } catch(err) {
                    kony.print("Parent Scope: In Catch block");

                }
                
                
                
                //
test012();


//
function test012() {
    kony.print("Parent Scope :- kony.timer.schedule - ");
    
    var timerId = "mytimer12111";
    var i = 0;
    
    function timerFunc()
    {
        i++;
        kony.print("Parent Scope :- kony.timer.schedule - In timerFunc() : " + i);

        
        if(i > 20) {
            kony.print("Parent Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }

    };
    
    //
    kony.timer.schedule(timerId,timerFunc, 1, true);

    kony.print("Parent Scope :- kony.timer.schedule - Done");

};

  kony.print("Parent Scope: Exit test_case_parent_thread()");
                

            };


            /*
             * Reference O/P : Chrome

             *  */
