(function() {
    var type_impls = Object.fromEntries([["cache_srv",[]],["devmgr_srv",[]],["logboi_srv",[]],["monitor",[]],["monitor_api",[]],["montest_lib",[]],["naming_srv",[]],["pager_srv",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[16,18,18,15,19,19,18,17]}