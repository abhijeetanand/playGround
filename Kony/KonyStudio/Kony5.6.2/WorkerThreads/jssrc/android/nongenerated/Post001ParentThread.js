function test_case_post_parent_thread1() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Post001WorkerThread.js');
    //will invoke worker's inner scope message event handler
    worker.postMessage("passed");
    //will invoke when worker post message is called 
    worker.addEventListener("message", function(event) {
        frmPost.lbl1.text += event.data;
    });
};