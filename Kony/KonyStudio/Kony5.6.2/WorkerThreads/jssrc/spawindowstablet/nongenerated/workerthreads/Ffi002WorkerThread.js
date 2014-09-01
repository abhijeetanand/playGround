function invokeFFI() {
    var retVal = FFIWindows.add(10, 11);
    postMessage(retVal);
}
invokeFFI();