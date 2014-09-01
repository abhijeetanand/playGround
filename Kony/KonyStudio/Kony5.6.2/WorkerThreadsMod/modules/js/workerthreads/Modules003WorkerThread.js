
//worker

//workers inner scope

kony.modules.loadFunctionalModuleAsync('m5',successcallback,failurecallback);

function successcallback()
{
postMessage(worker2a);
func_need_to_be_imported_do_something_in_worker();

func_need_to_be_imported_do_something_in_worker_2();

}

function failurecallback()
{
	postMessage("Failed:module is not loaded properly");
}
