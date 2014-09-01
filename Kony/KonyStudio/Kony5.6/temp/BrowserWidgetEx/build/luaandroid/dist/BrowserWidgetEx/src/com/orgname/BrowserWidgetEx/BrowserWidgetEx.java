package com.orgname.BrowserWidgetEx;

import com.konylabs.android.KonyMain;




import android.os.Bundle;

public class BrowserWidgetEx extends KonyMain {
	private static BrowserWidgetEx context;
    public void onCreate(Bundle savedInstanceState) {
		context = this;
        super.onCreate(savedInstanceState);
    }
		
	public static BrowserWidgetEx getActivityContext() {
		return context;
	}
	
	public int getAppSourceLocation(){
		return 1;
	}
	
	
	
}
