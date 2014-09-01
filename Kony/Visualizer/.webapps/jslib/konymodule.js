kony.modules = {
    /* Loads specified module and its depended modules recursively. 
    if module is already loaded then that module will not be loaded again.  */
    loadModule: function(moduleid){
        if(kony.modules.preInitCheck(moduleid)) return true;
        var url = $KG.platformver+"appjs/"+moduleid+"_kfm.js";
        $KI.net.loadJSFile(url, false, function(){ kony.modules.moduleCallback(moduleid); });
    },
    
    /* Loads specified module and its depended modules recursively and calls provided callback after loading module.  */
    loadModuleAsync: function(moduleid, callback){
        if(kony.modules.preInitCheck(moduleid)) return true;
        var url = $KG.platformver+"appjs/"+moduleid+"_kfm.js";
        $KI.net.loadJSFile(url, true, function(){ kony.modules.moduleCallback(moduleid); callback(); });
    },
    
    /* Check if loaded is already loaded or not. Recursively load all dependent modules. */
    preInitCheck: function(moduleid){
        var module = $KG.functionalModules[moduleid];
        if(module.loaded == 1) return true; // do not load module if already loaded
        //load dependent modules
        for(var i=0; i<module.depends.length; i++){
            var m = module.depends[i];
            if(typeof $KG.functionalModules[m].loaded == "undefined")
                kony.modules.loadModule(m);
        }
        return false;
    },
    
    /* custom callback for updating loaded mmodules */
    moduleCallback: function(m){
        if(typeof $KG.functionalModules[m] != "undefined")
            $KG.functionalModules[m].loaded = 1;
    }
};