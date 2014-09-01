package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.sampleffi.SampleFFIAndroid;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_ffiSampleJS extends JSLibrary {

 
	String[] methods = { };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new SampleTest();
 return libs;
 }



	public N_ffiSampleJS(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
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
		return "ffiSampleJS";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 


class SampleTest extends JSLibrary {

 
 
	public static final String asyncmemberRegister = "asyncmemberRegister";
 
 
	public static final String onClickButtonJS = "onClickButtonJS";
 
 
	public static final String memberRegister = "memberRegister";
 
	String[] methods = { asyncmemberRegister, onClickButtonJS, memberRegister };

	public Object createInstance(final Object[] params) {
 return new com.kony.sampleffi.SampleFFIAndroid(
 );
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 5 || paramLen > 6){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Double exp0 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 exp0 = (java.lang.Double)params[0+inc];
 }
 java.lang.String Name0 = null;
 if(params[1+inc] != null && params[1+inc] != LuaNil.nil) {
 Name0 = (java.lang.String)params[1+inc];
 }
 java.lang.Boolean isMarried0 = null;
 if(params[2+inc] != null && params[2+inc] != LuaNil.nil) {
 isMarried0 = (java.lang.Boolean)params[2+inc];
 }
 com.konylabs.vm.LuaTable progLanguage0 = null;
 if(params[3+inc] != null && params[3+inc] != LuaNil.nil) {
 progLanguage0 = (com.konylabs.vm.LuaTable)params[3+inc];
 }
 com.konylabs.vm.Function callbackJS0 = null;
 if(params[4+inc] != null && params[4+inc] != LuaNil.nil) {
 callbackJS0 = (com.konylabs.vm.Function)params[4+inc];
 }
 ret = this.asyncmemberRegister(params[0]
 ,exp0
 ,Name0
 ,isMarried0
 ,progLanguage0
 ,callbackJS0
 );
 
 			break;
 		case 1:
 if (paramLen < 0 || paramLen > 1){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 ret = this.onClickButtonJS(params[0]
 );
 
 			break;
 		case 2:
 if (paramLen < 4 || paramLen > 5){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Double experience2 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 experience2 = (java.lang.Double)params[0+inc];
 }
 java.lang.String name2 = null;
 if(params[1+inc] != null && params[1+inc] != LuaNil.nil) {
 name2 = (java.lang.String)params[1+inc];
 }
 java.lang.Boolean isMarriedBool2 = null;
 if(params[2+inc] != null && params[2+inc] != LuaNil.nil) {
 isMarriedBool2 = (java.lang.Boolean)params[2+inc];
 }
 com.konylabs.vm.LuaTable progLang2 = null;
 if(params[3+inc] != null && params[3+inc] != LuaNil.nil) {
 progLang2 = (com.konylabs.vm.LuaTable)params[3+inc];
 }
 ret = this.memberRegister(params[0]
 ,experience2
 ,name2
 ,isMarriedBool2
 ,progLang2
 );
 
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
		return "SampleTest";
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] asyncmemberRegister( Object self ,java.lang.Double inputKey0
 ,java.lang.String inputKey1
 ,java.lang.Boolean inputKey2
 ,com.konylabs.vm.LuaTable inputKey3
 ,com.konylabs.vm.Function inputKey4
 ){
 
		Object[] ret = null;
 ((com.kony.sampleffi.SampleFFIAndroid)self).asyncmemberRegister( inputKey0
 , inputKey1
 , inputKey2
 , (java.util.Vector)TableLib.convertToList(inputKey3)
 , (com.konylabs.vm.Function)inputKey4
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] onClickButtonJS( Object self ){
 
		Object[] ret = null;
 ((com.kony.sampleffi.SampleFFIAndroid)self).onJSClickActivity( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] memberRegister( Object self ,java.lang.Double inputKey0
 ,java.lang.String inputKey1
 ,java.lang.Boolean inputKey2
 ,com.konylabs.vm.LuaTable inputKey3
 ){
 
		Object[] ret = null;
 java.lang.String val = ((com.kony.sampleffi.SampleFFIAndroid)self).memberRegister( inputKey0
 , inputKey1
 , inputKey2
 , (java.util.Vector)TableLib.convertToList(inputKey3)
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
}

};
