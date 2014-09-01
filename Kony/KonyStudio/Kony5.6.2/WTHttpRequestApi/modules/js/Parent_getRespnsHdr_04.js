function test_case_gtRespnshdr_04() 
{
        frm4.lbl1.text +=("\nPS: Init \n");
		try {
        frm4.lbl1.text +=("\nPS: Init \n");
        frm4.lbl1.text +=("PS: In try block\n");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('httpReq_gtRespnsHdr_04.js');
       
        worker.addEventListener("message", function(event) {frm4.lbl2.text +='\nPS:WS1:' + event.data;});

        frm4.lbl1.text +=("PS: Exit()\n");
    } catch (err) {
        frm4.lbl1.text +=("PS: In Catch block\n");
    }
    //frmHome.lbl2.text +='Status=' + event.data;
};