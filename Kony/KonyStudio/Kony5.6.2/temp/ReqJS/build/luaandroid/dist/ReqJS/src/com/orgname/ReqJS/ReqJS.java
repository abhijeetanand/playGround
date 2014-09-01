package com.orgname.ReqJS;

import com.konylabs.android.KonyMain;




import android.os.Bundle;

public class ReqJS extends KonyMain {
	private static ReqJS context;
    public void onCreate(Bundle savedInstanceState) {
		context = this;
        super.onCreate(savedInstanceState);
    }
		
	public static ReqJS getActivityContext() {
		return context;
	}
	
	public int getAppSourceLocation(){
		return 2;
	}
	
	
	
}
