(function() {
    var type_impls = Object.fromEntries([["nvme",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CCommandId%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/nvme/ds/queue/mod.rs.html#51-55\">source</a><a href=\"#impl-From%3CCommandId%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nvme/ds/queue/struct.CommandId.html\" title=\"struct nvme::ds::queue::CommandId\">CommandId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nvme/ds/queue/mod.rs.html#52-54\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(x: <a class=\"struct\" href=\"nvme/ds/queue/struct.CommandId.html\" title=\"struct nvme::ds::queue::CommandId\">CommandId</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<CommandId>","nvme::ds::InterruptVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CControllerId%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/nvme/ds/controller/mod.rs.html#14-18\">source</a><a href=\"#impl-From%3CControllerId%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nvme/ds/controller/struct.ControllerId.html\" title=\"struct nvme::ds::controller::ControllerId\">ControllerId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nvme/ds/controller/mod.rs.html#15-17\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(c: <a class=\"struct\" href=\"nvme/ds/controller/struct.ControllerId.html\" title=\"struct nvme::ds::controller::ControllerId\">ControllerId</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ControllerId>","nvme::ds::InterruptVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CQueueId%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/nvme/ds/queue/mod.rs.html#34-38\">source</a><a href=\"#impl-From%3CQueueId%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nvme/ds/queue/struct.QueueId.html\" title=\"struct nvme::ds::queue::QueueId\">QueueId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nvme/ds/queue/mod.rs.html#35-37\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(qi: <a class=\"struct\" href=\"nvme/ds/queue/struct.QueueId.html\" title=\"struct nvme::ds::queue::QueueId\">QueueId</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<QueueId>","nvme::ds::InterruptVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CQueueSize%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/nvme/ds/queue/mod.rs.html#63-67\">source</a><a href=\"#impl-From%3CQueueSize%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nvme/ds/queue/struct.QueueSize.html\" title=\"struct nvme::ds::queue::QueueSize\">QueueSize</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nvme/ds/queue/mod.rs.html#64-66\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(x: <a class=\"struct\" href=\"nvme/ds/queue/struct.QueueSize.html\" title=\"struct nvme::ds::queue::QueueSize\">QueueSize</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<QueueSize>","nvme::ds::InterruptVector"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[5698]}