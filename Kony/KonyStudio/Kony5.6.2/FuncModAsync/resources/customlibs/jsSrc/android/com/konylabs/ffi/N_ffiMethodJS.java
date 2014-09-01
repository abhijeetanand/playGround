package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.andffiJS.SampleffiAnd;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_ffiMethodJS extends JSLibrary {

 
 
	public static final String onClickButtonJSMethod = "onClickButtonJSMethod";
 
 
	public static final String memberRegisterJS = "memberRegisterJS";
 
 
	public static final String asyncmemberRegisterJS = "asyncmemberRegisterJS";
 
	String[] methods = { onClickButtonJSMethod, memberRegisterJS, asyncmemberRegisterJS };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public N_ffiMethodJS(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.onClickButtonJSMethod( );
 
 			break;
 		case 1:
 if (paramLen != 4){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.Double exper1 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 exper1 = (java.lang.Double)params[0];
 }
 java.lang.String nameCandidate1 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 nameCandidate1 = (java.lang.String)params[1];
 }
 java.lang.Boolean isMARRIED1 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
 isMARRIED1 = (java.lang.Boolean)params[2];
 }
 com.konylabs.vm.LuaTable ProgLang1 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
 ProgLang1 = (com.konylabs.vm.LuaTable)params[3];
 }
 ret = this.memberRegisterJS( exper1, nameCandidate1, isMARRIED1, ProgLang1 );
 
 			break;
 		case 2:
 if (paramLen != 5){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.Double Experience2 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 Experience2 = (java.lang.Double)params[0];
 }
 java.lang.String Name12 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 Name12 = (java.lang.String)params[1];
 }
 java.lang.Boolean iSMarried2 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
 iSMarried2 = (java.lang.Boolean)params[2];
 }
 com.konylabs.vm.LuaTable ProgramLang2 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
 ProgramLang2 = (com.konylabs.vm.LuaTable)params[3];
 }
 com.konylabs.vm.Function CallBackJSMethod2 = null;
 if(params[4] != null && params[4] != LuaNil.nil) {
 CallBackJSMethod2 = (com.konylabs.vm.Function)params[4];
 }
 ret = this.asyncmemberRegisterJS( Experience2, Name12, iSMarried2, ProgramLang2, CallBackJSMethod2 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "ffiMethodJS";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] onClickButtonJSMethod( ){
 
		Object[] ret = null;
 com.kony.andffiJS.SampleffiAnd.onClickActivityJS( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] memberRegisterJS( java.lang.Double inputKey0, java.lang.String inputKey1, java.lang.Boolean inputKey2, com.konylabs.vm.LuaTable inputKey3 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.andffiJS.SampleffiAnd.memberRegisterJS( inputKey0
 , inputKey1
 , inputKey2
 , (java.util.Vector)TableLib.convertToList(inputKey3)
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] asyncmemberRegisterJS( java.lang.Double inputKey0, java.lang.String inputKey1, java.lang.Boolean inputKey2, com.konylabs.vm.LuaTable inputKey3, com.konylabs.vm.Function inputKey4 ){
 
		Object[] ret = null;
 com.kony.andffiJS.SampleffiAnd.asyncmemberRegisterJS( inputKey0
 , inputKey1
 , inputKey2
 , (java.util.Vector)TableLib.convertToList(inputKey3)
 , (com.konylabs.vm.Function)inputKey4
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
};
