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

 
 
	public static final String memberRegisterJS = "memberRegisterJS";
 
	String[] methods = { memberRegisterJS };


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
 if (paramLen != 4){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.Double exper0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 exper0 = (java.lang.Double)params[0];
 }
 java.lang.String nameCandidate0 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 nameCandidate0 = (java.lang.String)params[1];
 }
 java.lang.Boolean isMARRIED0 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
 isMARRIED0 = (java.lang.Boolean)params[2];
 }
 com.konylabs.vm.LuaTable ProgLang0 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
 ProgLang0 = (com.konylabs.vm.LuaTable)params[3];
 }
 ret = this.memberRegisterJS( exper0, nameCandidate0, isMARRIED0, ProgLang0 );
 
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
 
};
