//worker

//workers inner scope

kony.print("Worker Scope: Init");


//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
	kony.print('Worker Scope : onmessage : event.data : ' + event.data);
	//call func
	do_something_in_worker();
});

function do_something_in_worker() {
	kony.print('Worker Scope : invoking postMessage()');
	//will invoke Parent worker.onmessage()
	postMessage({
		'message' : "Hello World From Worker "
	});
};


//
test0081();


//
function test0081() {
    kony.print("Worker Scope :- kony.ui.Form2 - ");

    frmMain2 = new kony.ui.Form2({
        "id": "frmMain2",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": null,
        "addWidgets": null
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    
    
	frmMain2.show();


    
    kony.print("Worker Scope :- kony.ui.Form2 - Done");
};



kony.print("Worker Scope: Loading done");

