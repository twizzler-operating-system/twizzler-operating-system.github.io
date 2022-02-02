initSidebarItems({"fn":[["__stack_chk_fail","We need to provide a basic hook for reporting stack check failure in case we link to a library that assumes stack protections works (libunwind)."],["abort","We need to provide a no-mangled abort() call for things like libunwind."],["ready","Simple callback into twizzler_abi made by the standard library once it has initialized the environment. No panic runtime is available yet."]],"mod":[["alloc","Global allocation. Used by the Rust standard library as the global allocator. Similar to malloc() and friends."],["arch","Architecture-dependent code, will include submodules for the appropriate arch that expose the _start symbol and the raw_syscall symbol."],["aux","When running a new program (and thus, initializing a new runtime), the new program expects to receive some information about how it was started, including arguments, env vars, etc. These are passed to the new program through the _start function as an array of AuxEntries as its only argument."],["exec","Some runtime-available executable information. Mostly used for backtracing."],["object","Low-level object APIs, mostly around IDs and basic things like protection definitions and metadata."],["rt1","Runtime functions for Twizzler userspace. This part of the code is a bit arcane and somewhat tricky, so buckle up."],["simple_mutex","Very simple and unsafe Mutex for internal locking needs. DO NOT USE, USE THE RUST STANDARD LIBRARY MUTEX INSTEAD."],["slot","Manage slots in the address space. Currently not finished."],["syscall","Wrapper functions around for raw_syscall, providing a typed and safer way to interact with the kernel."],["thread",""],["time","Raw time handling, provides a way to get a monotonic timer and the system time. You should use the rust standard library’s time functions instead of these directly."]]});