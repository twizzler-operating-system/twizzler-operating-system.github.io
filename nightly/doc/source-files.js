var N = null;var sourcesIndex = {};
sourcesIndex["devmgr"] = {"name":"","files":["main.rs"]};
sourcesIndex["image_builder"] = {"name":"","files":["main.rs"]};
sourcesIndex["init"] = {"name":"","files":["main.rs"]};
sourcesIndex["initrd_gen"] = {"name":"","files":["main.rs"]};
sourcesIndex["netmgr"] = {"name":"","dirs":[{"name":"nics","files":["loopback.rs","mod.rs"]}],"files":["arp.rs","endpoint.rs","ethernet.rs","header.rs","icmp.rs","ipv4.rs","layer4.rs","main.rs","nic.rs"]};
sourcesIndex["nettest"] = {"name":"","files":["main.rs"]};
sourcesIndex["twizzler"] = {"name":"","dirs":[{"name":"object","files":["create.rs","mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["twizzler_abi"] = {"name":"","dirs":[{"name":"arch","dirs":[{"name":"x86_64","files":["mod.rs","syscall.rs","upcall.rs"]}],"files":["mod.rs"]},{"name":"device","dirs":[{"name":"bus","files":["mod.rs","pcie.rs"]}],"files":["mod.rs"]},{"name":"llalloc","files":["hole.rs","mod.rs"]}],"files":["alloc.rs","aux.rs","exec.rs","kso.rs","lib.rs","load_elf.rs","object.rs","rt1.rs","simple_idcounter.rs","simple_mutex.rs","slot.rs","syscall.rs","thread.rs","time.rs","upcall.rs","vcell.rs"]};
sourcesIndex["twizzler_async"] = {"name":"","files":["async_source.rs","block_on.rs","event.rs","exec.rs","future.rs","lib.rs","reactor.rs","run.rs","task.rs","thread_local.rs","throttle.rs","timer.rs"]};
sourcesIndex["twizzler_driver"] = {"name":"","dirs":[{"name":"bus","files":["mod.rs","pcie.rs"]}],"files":["device.rs","lib.rs"]};
sourcesIndex["twizzler_kernel"] = {"name":"","dirs":[{"name":"arch","dirs":[{"name":"amd64","files":["acpi.rs","desctables.rs","interrupt.rs","ioapic.rs","lapic.rs","memory.rs","mod.rs","pit.rs","processor.rs","start.rs","syscall.rs","thread.rs"]}],"files":["mod.rs"]},{"name":"machine","dirs":[{"name":"pc","files":["mod.rs","pcie.rs","serial.rs"]}],"files":["mod.rs"]},{"name":"memory","files":["allocator.rs","context.rs","fault.rs","frame.rs","mod.rs"]},{"name":"obj","files":["copy.rs","mod.rs","pages.rs","pagevec.rs","range.rs","thread_sync.rs"]},{"name":"syscall","files":["mod.rs","object.rs","sync.rs","thread.rs"]}],"files":["clock.rs","condvar.rs","device.rs","idcounter.rs","image.rs","initrd.rs","interrupt.rs","log.rs","main.rs","mutex.rs","once.rs","operations.rs","panic.rs","processor.rs","sched.rs","spinlock.rs","thread.rs","utils.rs"]};
sourcesIndex["twizzler_net"] = {"name":"","files":["addr.rs","buffer.rs","lib.rs","nm_handle.rs","req.rs","rx_req.rs","tx_req.rs"]};
sourcesIndex["twizzler_queue"] = {"name":"","files":["async_queue.rs","callback_queue.rs","lib.rs","queue.rs","sender_queue.rs"]};
sourcesIndex["twizzler_queue_raw"] = {"name":"","files":["lib.rs"]};
sourcesIndex["xtask"] = {"name":"","files":["main.rs"]};
createSourceSidebar();
