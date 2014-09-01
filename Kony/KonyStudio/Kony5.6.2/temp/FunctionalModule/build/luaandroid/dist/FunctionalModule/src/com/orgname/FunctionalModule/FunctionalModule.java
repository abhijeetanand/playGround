package com.orgname.FunctionalModule;

import com.konylabs.android.KonyMain;




import android.os.Bundle;

public class FunctionalModule extends KonyMain {
	private static FunctionalModule context;
    public void onCreate(Bundle savedInstanceState) {
		context = this;
        super.onCreate(savedInstanceState);
    }
		
	public static FunctionalModule getActivityContext() {
		return context;
	}
	
	public int getAppSourceLocation(){
		return 2;
	}
	
	
	
}
