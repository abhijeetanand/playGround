 var count= 1;
	addEventListener("message", function(event) 
	 {
	 
	 	var postCount = "PostCommand_" + count;
	 	if(count ==3)
	 	{
	 		close();
	 		postMessage("workerthread closing");
	 		
	 	}
	 	for(i=0;i<=5000;i++)
	 	{
	 	 
	 	kony.print(postCount + " : " + i);
	 	//  if(i== 5000)
	 	 	
	 		postMessage(postCount + " : " + i);
	 	}
	 	count++;
	 });

	   
	 