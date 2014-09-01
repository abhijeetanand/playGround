function test_case_post_parent_thread7()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Post007WorkerThread.js');
			
	
	 
	worker.addEventListener("message", function(event) {
	frmPost.lbl11.text = "JSON category in array:"+event.data.skills[0].category +'\n'
						+"array tests[0].score :"+ event.data.skills[1].tests[0].score+'\n'
						+"number age:" + event.data.age+'\n'
						+"JSON Key colors:"+event.data.favorites.color +'\n'
						+"string first :"+event.data.first;
											
	
});



	 
};
			
			
			