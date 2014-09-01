function test_case_abort_03() {
    frm3.lbl1.text += ("\nPS: Init \n");
    try {
        frm3.lbl1.text += ("\nPS: Init \n");
        frm3.lbl1.text += ("PS: In try block\n");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('httpReq_abort_03.js');
        worker.addEventListener("message", function(event) {
            frm3.lbl2.text += '\nPS:WS1: Response should not get Displayed as the request is aborted::' + event.data;
        });
        frm3.lbl1.text += ("PS: Exit()\n");
    } catch (err) {
        frm3.lbl1.text += ("PS: In Catch block\n");
    }
    //frmHome.lbl2.text +='Status=' + event.data;
};