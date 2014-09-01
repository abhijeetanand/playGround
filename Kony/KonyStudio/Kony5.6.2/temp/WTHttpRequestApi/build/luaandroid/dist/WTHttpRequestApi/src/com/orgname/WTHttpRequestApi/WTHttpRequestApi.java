package com.orgname.WTHttpRequestApi;

import com.konylabs.android.KonyMain;




import android.os.Bundle;

public class WTHttpRequestApi extends KonyMain {
	private static WTHttpRequestApi context;
    public void onCreate(Bundle savedInstanceState) {
		context = this;
        super.onCreate(savedInstanceState);
    }
		
	public static WTHttpRequestApi getActivityContext() {
		return context;
	}
	
	public int getAppSourceLocation(){
		return 1;
	}
	
	
	
}
