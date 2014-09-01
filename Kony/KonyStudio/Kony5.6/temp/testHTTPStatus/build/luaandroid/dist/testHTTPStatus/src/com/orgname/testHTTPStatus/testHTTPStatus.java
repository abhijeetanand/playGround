package com.orgname.testHTTPStatus;

import com.konylabs.android.KonyMain;




import android.os.Bundle;

public class testHTTPStatus extends KonyMain {
	private static testHTTPStatus context;
    public void onCreate(Bundle savedInstanceState) {
		context = this;
        super.onCreate(savedInstanceState);
    }
		
	public static testHTTPStatus getActivityContext() {
		return context;
	}
	
	public int getAppSourceLocation(){
		return 1;
	}
	
	
	
}
