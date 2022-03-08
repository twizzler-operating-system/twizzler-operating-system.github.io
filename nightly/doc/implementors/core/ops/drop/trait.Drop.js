(function() {var implementors = {};
implementors["netmgr"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"netmgr/nic/struct.NicBuffer.html\" title=\"struct netmgr::nic::NicBuffer\">NicBuffer</a>","synthetic":false,"types":["netmgr::nic::NicBuffer"]}];
implementors["twizzler"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler/object/struct.Object.html\" title=\"struct twizzler::object::Object\">Object</a>&lt;T&gt;","synthetic":false,"types":["twizzler::object::Object"]}];
implementors["twizzler_async"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_async/struct.Async.html\" title=\"struct twizzler_async::Async\">Async</a>&lt;T&gt;","synthetic":false,"types":["twizzler_async::async_source::Async"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_async/struct.AsyncDuplex.html\" title=\"struct twizzler_async::AsyncDuplex\">AsyncDuplex</a>&lt;T&gt;","synthetic":false,"types":["twizzler_async::async_source::AsyncDuplex"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_async/struct.Task.html\" title=\"struct twizzler_async::Task\">Task</a>&lt;T&gt;","synthetic":false,"types":["twizzler_async::task::Task"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_async/struct.Timer.html\" title=\"struct twizzler_async::Timer\">Timer</a>","synthetic":false,"types":["twizzler_async::timer::Timer"]}];
implementors["twizzler_kernel"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_kernel/idcounter/struct.Id.html\" title=\"struct twizzler_kernel::idcounter::Id\">Id</a>&lt;'a&gt;","synthetic":false,"types":["twizzler_kernel::idcounter::Id"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_kernel/mutex/struct.LockGuard.html\" title=\"struct twizzler_kernel::mutex::LockGuard\">LockGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["twizzler_kernel::mutex::LockGuard"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_kernel/once/struct.Once.html\" title=\"struct twizzler_kernel::once::Once\">Once</a>&lt;T&gt;","synthetic":false,"types":["twizzler_kernel::once::Once"]},{"text":"impl&lt;T, Relax:&nbsp;<a class=\"trait\" href=\"twizzler_kernel/spinlock/trait.RelaxStrategy.html\" title=\"trait twizzler_kernel::spinlock::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_kernel/spinlock/struct.LockGuard.html\" title=\"struct twizzler_kernel::spinlock::LockGuard\">LockGuard</a>&lt;'_, T, Relax&gt;","synthetic":false,"types":["twizzler_kernel::spinlock::LockGuard"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_kernel/thread/struct.Thread.html\" title=\"struct twizzler_kernel::thread::Thread\">Thread</a>","synthetic":false,"types":["twizzler_kernel::thread::Thread"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_kernel/thread/struct.CriticalGuard.html\" title=\"struct twizzler_kernel::thread::CriticalGuard\">CriticalGuard</a>&lt;'a&gt;","synthetic":false,"types":["twizzler_kernel::thread::CriticalGuard"]}];
implementors["twizzler_net"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_net/buffer/struct.ManagedBuffer.html\" title=\"struct twizzler_net::buffer::ManagedBuffer\">ManagedBuffer</a>&lt;'a&gt;","synthetic":false,"types":["twizzler_net::buffer::ManagedBuffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_net/struct.NmHandle.html\" title=\"struct twizzler_net::NmHandle\">NmHandle</a>","synthetic":false,"types":["twizzler_net::nm_handle::NmHandle"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"twizzler_net/struct.NmHandleManager.html\" title=\"struct twizzler_net::NmHandleManager\">NmHandleManager</a>&lt;T&gt;","synthetic":false,"types":["twizzler_net::nm_handle::NmHandleManager"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()