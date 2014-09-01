
	

 	var count =1;
	
	addEventListener("message", function(event) 
	 {
	 	
	 	count++;
	 	
	 	if(count>2)
	 	self.close();
	 	postMessage("child hello");
	 });
	 
	 