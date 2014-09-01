function test_case_setReqHdr_02() {
    frm2.lbl1.text += ("\nPS: Init \n");
    try {
        frm2.lbl1.text += ("\nPS: Init \n");
        frm2.lbl1.text += ("PS: In try block\n");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('httpReq_setReqHdr_02.js');
        worker.addEventListener("message", function(event) {
            frm2.lbl2.text += '\nPS:WS1:' + event.data;
        });
        frm2.lbl1.text += ("PS: Exit()\n");
    } catch (err) {
        frm2.lbl1.text += ("PS: In Catch block\n");
    }
    //frmHome.lbl2.text +='Status=' + event.data;
};