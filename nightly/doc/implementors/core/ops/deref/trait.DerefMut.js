(function() {var implementors = {};
implementors["twizzler_kernel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"twizzler_kernel/mutex/struct.LockGuard.html\" title=\"struct twizzler_kernel::mutex::LockGuard\">LockGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["twizzler_kernel::mutex::LockGuard"]},{"text":"impl&lt;T, Relax:&nbsp;<a class=\"trait\" href=\"twizzler_kernel/spinlock/trait.RelaxStrategy.html\" title=\"trait twizzler_kernel::spinlock::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"twizzler_kernel/spinlock/struct.LockGuard.html\" title=\"struct twizzler_kernel::spinlock::LockGuard\">LockGuard</a>&lt;'_, T, Relax&gt;","synthetic":false,"types":["twizzler_kernel::spinlock::LockGuard"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()