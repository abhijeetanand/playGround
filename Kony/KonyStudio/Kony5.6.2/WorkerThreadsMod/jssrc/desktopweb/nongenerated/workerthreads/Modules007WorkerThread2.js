kony.print("hi");
try {
    postMessage(a + "failed");
} catch (err) {
    postMessage("err message:" + err.message);
}