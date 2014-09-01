package com.konylabs.ffi;

import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.vm.LuaTable;
import com.konylabs.vm.LuaNil;
import com.konylabs.api.js.common.KonyJSErrorNamesCodes;
import com.konylabs.api.js.common.KonyJSLibrary;
import net.rim.device.api.script.ScriptableFunction;
import com.konylabs.api.hybrid.HybridLib;

import com.kony.blackberryffiClasses.SampleFFIBlackberryJS;



public class N_ffiSampleJS extends LuaTable implements KonyJSLibrary {
 public String keyField; 
	public N_ffiSampleJS(){
	}
	
 
	
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "ffiSampleJS";
	}
	
	

 public Object getField(String key) throws Exception {
	
		 keyField = key;
		 return this;
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
	public Object invoke(Object thiz, Object[] params) throws Exception {
 Object ret = null;
 	 return ret;
	 }



}
class SampleTest extends LuaTable {
 Object SampleFFIBlackberryJSInstance = null;
 
 
	public static final String asyncmemberRegister = "asyncmemberRegister";
 
 
	public static final String onClickButtonJS = "onClickButtonJS";
 
 
	public static final String memberRegister = "memberRegister";
 
	public Object construct(Object thiz, Object[] params) throws Exception 
	{
	 	 SampleTest sampletestInstance = new SampleTest();
	 sampletestInstance.SampleFFIBlackberryJSInstance = createInstance(params);
	 return sampletestInstance;
	}

	public Object createInstance(final Object[] params) {
 return new SampleFFIBlackberryJS(
 );
 }

	public Object getField(String key) throws Exception {
		Object ret = null;
 try{
 if (key != null && key.equalsIgnoreCase(asyncmemberRegister))
			 {
				ret = new instanceScriptableasyncmemberRegister0();
			 }
 if (key != null && key.equalsIgnoreCase(onClickButtonJS))
			 {
				ret = new instanceScriptableonClickButtonJS1();
			 }
 if (key != null && key.equalsIgnoreCase(memberRegister))
			 {
				ret = new instanceScriptablememberRegister2();
			 }
 if (ret == LuaNil.nil){
 ret = super.getField(key);
 }
		}catch(Exception e){

		}
		return ret;
	}

	public String getNameSpace() {
		// TODO Auto-generated method stub
				return "ffiSampleJS.SampleTest";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 
 	public final Object asyncmemberRegister( Object self ,java.lang.Double inputKey0
 ,java.lang.String inputKey1
 ,java.lang.Boolean inputKey2
 ,java.util.Vector inputKey3
 ,com.konylabs.vm.Function inputKey4
 ){
 
		Object ret = null;
 ((SampleFFIBlackberryJS)self).asyncmemberRegisterJS( inputKey0, inputKey1, inputKey2, inputKey3, inputKey4 );
 
 return null;
 	}
 
 
 
 	public final Object onClickButtonJS( Object self ){
 
		Object ret = null;
 ((SampleFFIBlackberryJS)self).onJSClassClickActivity( );
 
 return null;
 	}
 
 
 
 	public final Object memberRegister( Object self ,java.lang.Double inputKey0
 ,java.lang.String inputKey1
 ,java.lang.Boolean inputKey2
 ,java.util.Vector inputKey3
 ){
 
		Object ret = null;
 java.lang.String val = ((SampleFFIBlackberryJS)self).memberRegisterJS( inputKey0, inputKey1, inputKey2, inputKey3 );
 
 			 return val;
 	}
 
}

 		class instanceScriptableasyncmemberRegister0 extends ScriptableFunction implements KonyJSErrorNamesCodes{
		 	 public Object invoke(Object thiz, Object[] params) throws Exception {
			 Object ret = null;
			 try {
				 int paramLen = params.length;
				 if (paramLen != 5){ return null; }
				 
 java.lang.Double exp0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
						 							 							 exp0 = (java.lang.Double)HybridLib.getDoubleObject(params[0])
;
							 }
 java.lang.String Name0 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
						 							 							 Name0 = (java.lang.String)params[1]
;
							 }
 java.lang.Boolean isMarried0 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
						 							 							 isMarried0 = (java.lang.Boolean)HybridLib.getBooleanObject(params[2])
;
							 }
 java.util.Vector progLanguage0 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
						 							 							 progLanguage0 = (java.util.Vector)HybridLib.getJavaType(params[3])
;
							 }
 com.konylabs.vm.Function callbackJS0 = null;
 if(params[4] != null && params[4] != LuaNil.nil) {
						 							 							 callbackJS0 = (com.konylabs.vm.Function)HybridLib.getJavaType(params[4])
;
							 }
 ret = ((SampleTest)thiz).asyncmemberRegister(((SampleTest)thiz).SampleFFIBlackberryJSInstance
 ,exp0
 ,Name0
 ,isMarried0
 ,progLanguage0
 ,callbackJS0
 );
 }catch (Throwable e){
 e.printStackTrace();
				 //ret = new Object[]{LuaNil.nil, new Double(101), e.getMessage()};
			 }
			 return ret;
		 }
	 }
	 			class instanceScriptableonClickButtonJS1 extends ScriptableFunction implements KonyJSErrorNamesCodes{
		 	 public Object invoke(Object thiz, Object[] params) throws Exception {
			 Object ret = null;
			 try {
				 int paramLen = params.length;
				 if (paramLen != 0){ return null; }
				 
 ret = ((SampleTest)thiz).onClickButtonJS(((SampleTest)thiz).SampleFFIBlackberryJSInstance
 );
 }catch (Throwable e){
 e.printStackTrace();
				 //ret = new Object[]{LuaNil.nil, new Double(101), e.getMessage()};
			 }
			 return ret;
		 }
	 }
	 			class instanceScriptablememberRegister2 extends ScriptableFunction implements KonyJSErrorNamesCodes{
		 	 public Object invoke(Object thiz, Object[] params) throws Exception {
			 Object ret = null;
			 try {
				 int paramLen = params.length;
				 if (paramLen != 4){ return null; }
				 
 java.lang.Double experience2 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
						 							 							 experience2 = (java.lang.Double)HybridLib.getDoubleObject(params[0])
;
							 }
 java.lang.String name2 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
						 							 							 name2 = (java.lang.String)params[1]
;
							 }
 java.lang.Boolean isMarriedBool2 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
						 							 							 isMarriedBool2 = (java.lang.Boolean)HybridLib.getBooleanObject(params[2])
;
							 }
 java.util.Vector progLang2 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
						 							 							 progLang2 = (java.util.Vector)HybridLib.getJavaType(params[3])
;
							 }
 ret = ((SampleTest)thiz).memberRegister(((SampleTest)thiz).SampleFFIBlackberryJSInstance
 ,experience2
 ,name2
 ,isMarriedBool2
 ,progLang2
 );
 }catch (Throwable e){
 e.printStackTrace();
				 //ret = new Object[]{LuaNil.nil, new Double(101), e.getMessage()};
			 }
			 return ret;
		 }
	 }
	 	