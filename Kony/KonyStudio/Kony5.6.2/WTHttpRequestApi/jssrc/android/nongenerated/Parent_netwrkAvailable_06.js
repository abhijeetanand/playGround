function test_case_ntwrkAvailabl_06() {
    frm6.lbl1.text += ("\nPS: Init \n");
    try {
        frm6.lbl1.text += ("\nPS: Init \n");
        frm6.lbl1.text += ("PS: In try block\n");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('httpReq_netwrkAvailable_06.js');
        worker.addEventListener("message", function(event) {
            frm6.lbl2.text += '\nPS:WS1:' + event.data;
        });
        worker.addEventListener("message", function(event) {
            alert(event.data);
        });
        frm6.lbl1.text += ("PS: Exit()\n");
    } catch (err) {
        frm6.lbl1.text += ("PS: In Catch block\n");
    }
    //frmHome.lbl2.text +='Status=' + event.data;
};