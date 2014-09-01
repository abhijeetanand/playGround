function test_case_gtAllRespnshdr_05() {
    frm5.lbl1.text += ("\nPS: Init \n");
    try {
        frm5.lbl1.text += ("\nPS: Init \n");
        frm5.lbl1.text += ("PS: In try block\n");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('httpReq_gtAllRespnsHdr_05.js');
        worker.addEventListener("message", function(event) {
            frm5.lbl2.text += '\nPS:WS1:' + event.data;
        });
        frm5.lbl1.text += ("PS: Exit()\n");
    } catch (err) {
        frm5.lbl1.text += ("PS: In Catch block\n");
    }
    //frmHome.lbl2.text +='Status=' + event.data;
};