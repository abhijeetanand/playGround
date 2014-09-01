package com.konylabs.ffi;

import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.vm.LuaTable;
import com.konylabs.vm.LuaNil;
import com.konylabs.api.js.common.KonyJSErrorNamesCodes;
import com.konylabs.api.js.common.KonyJSLibrary;
import net.rim.device.api.script.ScriptableFunction;
import com.konylabs.api.hybrid.HybridLib;

import com.kony.blackberryffi.SampleFFIBlackberry;



public class N_ffiMethodJS extends LuaTable implements KonyJSLibrary {
 public String keyField; 
	public N_ffiMethodJS(){
	}
	
 
 
	public static final String onClickButtonJSMethod = "onClickButtonJSMethod";
 
 
	public static final String memberRegisterJS = "memberRegisterJS";
 
 
	public static final String asyncmemberRegisterJS = "asyncmemberRegisterJS";
 
	
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "ffiMethodJS";
	}
	
	

 public Object getField(String key) throws Exception {
	
		 keyField = key;
		 return this;
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
 
 

 	public final Object onClickButtonJSMethod( ){
 
		Object ret = null;
 SampleFFIBlackberry.onJSClickActivity( );
 
 return null;
 	}
 
 
 

 	public final Object memberRegisterJS( java.lang.Double inputKey0, java.lang.String inputKey1, java.lang.Boolean inputKey2, java.util.Vector inputKey3 ){
 
		Object ret = null;
 java.lang.String val = SampleFFIBlackberry.memberRegister( inputKey0, inputKey1, inputKey2, inputKey3 );
 
 			 return val;
 	}
 
 
 

 	public final Object asyncmemberRegisterJS( java.lang.Double inputKey0, java.lang.String inputKey1, java.lang.Boolean inputKey2, java.util.Vector inputKey3, com.konylabs.vm.Function inputKey4 ){
 
		Object ret = null;
 SampleFFIBlackberry.asyncmemberRegister( inputKey0, inputKey1, inputKey2, inputKey3, inputKey4 );
 
 return null;
 	}
 
	public Object invoke(Object thiz, Object[] params) throws Exception {
 Object ret = null;
 
 if(keyField.equalsIgnoreCase(onClickButtonJSMethod))
			{
			 try {
				 int paramLen = params.length;
 if (paramLen != 0){ return null; }
 
 ret = ((N_ffiMethodJS)thiz).onClickButtonJSMethod( );
 		}catch (Throwable e){
 e.printStackTrace();
				 //ret = new Object[]{LuaNil.nil, new Double(101), e.getMessage()};
			 }
		 }
	 	
 if(keyField.equalsIgnoreCase(memberRegisterJS))
			{
			 try {
				 int paramLen = params.length;
 if (paramLen != 4){ return null; }
 
 java.lang.Double exper1 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
						 							 							 exper1 = (java.lang.Double)HybridLib.getDoubleObject(params[0])
;
							 }
 java.lang.String nameCandidate1 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
						 							 							 nameCandidate1 = (java.lang.String)params[1]
;
							 }
 java.lang.Boolean isMARRIED1 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
						 							 							 isMARRIED1 = (java.lang.Boolean)HybridLib.getBooleanObject(params[2])
;
							 }
 java.util.Vector ProgLang1 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
						 							 							 ProgLang1 = (java.util.Vector)HybridLib.getJavaType(params[3])
;
							 }
 ret = ((N_ffiMethodJS)thiz).memberRegisterJS( exper1, nameCandidate1, isMARRIED1, ProgLang1 );
 		}catch (Throwable e){
 e.printStackTrace();
				 //ret = new Object[]{LuaNil.nil, new Double(101), e.getMessage()};
			 }
		 }
	 	
 if(keyField.equalsIgnoreCase(asyncmemberRegisterJS))
			{
			 try {
				 int paramLen = params.length;
 if (paramLen != 5){ return null; }
 
 java.lang.Double Experience2 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
						 							 							 Experience2 = (java.lang.Double)HybridLib.getDoubleObject(params[0])
;
							 }
 java.lang.String Name12 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
						 							 							 Name12 = (java.lang.String)params[1]
;
							 }
 java.lang.Boolean iSMarried2 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
						 							 							 iSMarried2 = (java.lang.Boolean)HybridLib.getBooleanObject(params[2])
;
							 }
 java.util.Vector ProgramLang2 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
						 							 							 ProgramLang2 = (java.util.Vector)HybridLib.getJavaType(params[3])
;
							 }
 com.konylabs.vm.Function CallBackJSMethod2 = null;
 if(params[4] != null && params[4] != LuaNil.nil) {
						 							 							 CallBackJSMethod2 = (com.konylabs.vm.Function)HybridLib.getJavaType(params[4])
;
							 }
 ret = ((N_ffiMethodJS)thiz).asyncmemberRegisterJS( Experience2, Name12, iSMarried2, ProgramLang2, CallBackJSMethod2 );
 		}catch (Throwable e){
 e.printStackTrace();
				 //ret = new Object[]{LuaNil.nil, new Double(101), e.getMessage()};
			 }
		 }
	 		 return ret;
	 }



}