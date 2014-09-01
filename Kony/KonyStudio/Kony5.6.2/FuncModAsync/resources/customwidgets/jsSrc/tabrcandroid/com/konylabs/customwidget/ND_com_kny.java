package com.konylabs.customwidget;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;

import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;
import com.konylabs.api.ui.KonyCustomWidget;

public class ND_com_kny extends JSLibrary {

 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new cust1();
 return libs;
 }
		
		public ND_com_kny(){
	}
	public String getNameSpace() {
		return "com.kny";
	}

static class cust1 extends JSLibrary {
 
 
	public static final String getVoid = "getVoid";
 
 
	public static final String getInt = "getInt";
 
 
	public static final String getInteger = "getInteger";
 
 
	public static final String getlong = "getlong";
 
 
	public static final String getLong = "getLong";
 
 
	public static final String getfloat = "getfloat";
 
 
	public static final String getFloat1 = "getFloat1";
 
 
	public static final String getdouble = "getdouble";
 
 
	public static final String getDouble1 = "getDouble1";
 
 
	public static final String getVector = "getVector";
 
 
	public static final String getObject = "getObject";
 
 
	public static final String getHash = "getHash";
 
 
	public static final String getboolean = "getboolean";
 
 
	public static final String getBoolean1 = "getBoolean1";
 
 
	public static final String getAll = "getAll";
 
	String[] methods = { getVoid, getInt, getInteger, getlong, getLong, getfloat, getFloat1, getdouble, getDouble1, getVector, getObject, getHash, getboolean, getBoolean1, getAll };
 String[] props = { "low", "high", "slideCheck", "aInt", "aLong", "aFloat", "aDouble", "aBoolean", "aIntList", "aStringList", "aArray", "aObject", "aHash" };
 private static Hashtable<String, Integer> propertyTypeMappings = null;
 public Object createInstance(final Object[] properties, long jsobject) {
 if(propertyTypeMappings == null) {
 propertyTypeMappings = new Hashtable<String, Integer>();
 propertyTypeMappings.put("low",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("high",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("slideCheck",KonyCustomWidget.NATIVE_DATA_TYPE_FUNCTION);
 propertyTypeMappings.put("aInt",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("aLong",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_LONG);
 propertyTypeMappings.put("aFloat",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_FLOAT);
 propertyTypeMappings.put("aDouble",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_DOUBLE);
 propertyTypeMappings.put("aBoolean",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_BOOLEAN);
 propertyTypeMappings.put("aIntList",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("aStringList",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("aArray",KonyCustomWidget.NATIVE_DATA_TYPE_VECTOR);
 propertyTypeMappings.put("aObject",KonyCustomWidget.NATIVE_DATA_TYPE_OBJECT);
 propertyTypeMappings.put("aHash",KonyCustomWidget.NATIVE_DATA_TYPE_HASHTABLE);
 
 }

 KonyCustomWidget widget = new com.example.bar.CustomRange();
 widget.initProperties(properties,jsobject,propertyTypeMappings);
 return widget;
 }
 
	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 0 || paramLen > 1){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 ret = this.getVoid(params[0]
 );
 
 			break;
 		case 1:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 Integer a11 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a11 = ((Double)params[0+inc]).intValue();
 }
 ret = this.getInt(params[0]
 ,a11
 );
 
 			break;
 		case 2:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Integer a2 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a2 = ((Double)params[0+inc]).intValue();
 }
 ret = this.getInteger(params[0]
 ,a2
 );
 
 			break;
 		case 3:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 Long a23 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a23 = ((Double)params[0+inc]).longValue();
 }
 ret = this.getlong(params[0]
 ,a23
 );
 
 			break;
 		case 4:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Long a34 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a34 = ((Double)params[0+inc]).longValue();
 }
 ret = this.getLong(params[0]
 ,a34
 );
 
 			break;
 		case 5:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 Float a45 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a45 = ((Double)params[0+inc]).floatValue();
 }
 ret = this.getfloat(params[0]
 ,a45
 );
 
 			break;
 		case 6:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Float a56 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a56 = ((Double)params[0+inc]).floatValue();
 }
 ret = this.getFloat1(params[0]
 ,a56
 );
 
 			break;
 		case 7:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 Double a67 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a67 = (Double)params[0+inc];
 }
 ret = this.getdouble(params[0]
 ,a67
 );
 
 			break;
 		case 8:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Double a78 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a78 = (java.lang.Double)params[0+inc];
 }
 ret = this.getDouble1(params[0]
 ,a78
 );
 
 			break;
 		case 9:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable a109 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a109 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.getVector(params[0]
 ,a109
 );
 
 			break;
 		case 10:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Object a1110 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a1110 = (java.lang.Object)params[0+inc];
 }
 ret = this.getObject(params[0]
 ,a1110
 );
 
 			break;
 		case 11:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable a1211 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a1211 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.getHash(params[0]
 ,a1211
 );
 
 			break;
 		case 12:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 Boolean a1312 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a1312 = (Boolean)params[0+inc];
 }
 ret = this.getboolean(params[0]
 ,a1312
 );
 
 			break;
 		case 13:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.Boolean a1413 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 a1413 = (java.lang.Boolean)params[0+inc];
 }
 ret = this.getBoolean1(params[0]
 ,a1413
 );
 
 			break;
 		case 14:
 if (paramLen < 5 || paramLen > 6){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.String s14 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 s14 = (java.lang.String)params[0+inc];
 }
 Integer i14 = null;
 if(params[1+inc] != null && params[1+inc] != LuaNil.nil) {
 i14 = ((Double)params[1+inc]).intValue();
 }
 java.lang.Float f14 = null;
 if(params[2+inc] != null && params[2+inc] != LuaNil.nil) {
 f14 = ((Double)params[2+inc]).floatValue();
 }
 Double d14 = null;
 if(params[3+inc] != null && params[3+inc] != LuaNil.nil) {
 d14 = (Double)params[3+inc];
 }
 java.lang.Long l14 = null;
 if(params[4+inc] != null && params[4+inc] != LuaNil.nil) {
 l14 = ((Double)params[4+inc]).longValue();
 }
 ret = this.getAll(params[0]
 ,s14
 ,i14
 ,f14
 ,d14
 ,l14
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
		return "cust1";
	}
	public String[] getProperties() {
		// TODO Auto-generated method stub
		return props;
	}
	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] getVoid( Object self ){
 
		Object[] ret = null;
 ((com.example.bar.CustomRange)self).getVoid( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getInt( Object self ,Integer inputKey0
 ){
 
		Object[] ret = null;
 Double val = new Double(((com.example.bar.CustomRange)self).getInt( inputKey0.intValue() ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getInteger( Object self ,java.lang.Integer inputKey0
 ){
 
		Object[] ret = null;
 java.lang.Integer val = ((com.example.bar.CustomRange)self).getInt( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getlong( Object self ,Long inputKey0
 ){
 
		Object[] ret = null;
 Double val = new Double(((com.example.bar.CustomRange)self).getLong( inputKey0.longValue() ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getLong( Object self ,java.lang.Long inputKey0
 ){
 
		Object[] ret = null;
 java.lang.Long val = ((com.example.bar.CustomRange)self).getLong( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getfloat( Object self ,Float inputKey0
 ){
 
		Object[] ret = null;
 Double val = new Double(((com.example.bar.CustomRange)self).getFloat( inputKey0.floatValue() ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getFloat1( Object self ,java.lang.Float inputKey0
 ){
 
		Object[] ret = null;
 java.lang.Float val = ((com.example.bar.CustomRange)self).getFloat( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getdouble( Object self ,Double inputKey0
 ){
 
		Object[] ret = null;
 Double val = new Double(((com.example.bar.CustomRange)self).getDouble( inputKey0.doubleValue() ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getDouble1( Object self ,java.lang.Double inputKey0
 ){
 
		Object[] ret = null;
 java.lang.Double val = ((com.example.bar.CustomRange)self).getDouble( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getVector( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 java.util.Vector retval = ((com.example.bar.CustomRange)self).getVector( (java.util.Vector)TableLib.convertToList(inputKey0)
 );
 LuaTable val = TableLib.convertToLuaTable(retval);
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getObject( Object self ,java.lang.Object inputKey0
 ){
 
		Object[] ret = null;
 java.lang.Object val = ((com.example.bar.CustomRange)self).getObject( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getHash( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 java.util.Hashtable retval = ((com.example.bar.CustomRange)self).getHash( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 LuaTable val = TableLib.convertToLuaTable(retval);
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getboolean( Object self ,Boolean inputKey0
 ){
 
		Object[] ret = null;
 Boolean val = new Boolean(((com.example.bar.CustomRange)self).getBoolean( inputKey0.booleanValue() ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getBoolean1( Object self ,java.lang.Boolean inputKey0
 ){
 
		Object[] ret = null;
 java.lang.Boolean val = ((com.example.bar.CustomRange)self).getBoolean( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getAll( Object self ,java.lang.String inputKey0
 ,Integer inputKey1
 ,java.lang.Float inputKey2
 ,Double inputKey3
 ,java.lang.Long inputKey4
 ){
 
		Object[] ret = null;
 java.lang.String val = ((com.example.bar.CustomRange)self).getAll( inputKey0
 , inputKey1.intValue() , inputKey2
 , inputKey3.doubleValue() , inputKey4
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
}

};
