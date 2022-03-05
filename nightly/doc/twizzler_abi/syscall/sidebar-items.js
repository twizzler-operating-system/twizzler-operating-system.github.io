initSidebarItems({"enum":[["BackingType","The backing memory type for this object. Currently doesn’t do anything."],["ClockSource",""],["HandleType",""],["KernelConsoleReadBufferError","Possible errors returned by reading from the kernel console’s buffer."],["KernelConsoleReadError","Possible errors returned by reading from the kernel console’s input."],["KernelConsoleReadSource","Possible sources for a kernel console read syscall."],["LifetimeType","The base lifetime type of the object. Note that this does not ensure that the object is stored in a specific type of memory, the kernel is allowed to migrate objects with the Normal [BackingType] as it sees fit. For more information on object lifetime, see the book."],["NewHandleError","Possible error values for [sys_read_clock_info]."],["ObjectCreateError","Possible error returns for [sys_object_create]."],["ObjectMapError","Possible error values for [sys_object_map]."],["ReadClockInfoError","Possible error values for [sys_read_clock_info]."],["Syscall","All possible Synchronous syscalls into the Twizzler kernel."],["ThreadControl","Possible Thread Control operations"],["ThreadSpawnError","Possible error values for [sys_spawn]."],["ThreadSync","Either a sleep or wake request. The syscall comprises of a number of either sleep or wake requests."],["ThreadSyncError","Possible error returns for [sys_thread_sync]."],["ThreadSyncOp","Possible operations the kernel can perform when looking at the supplies reference and the supplied value. If the operation `*reference OP value` evaluates to true (or false if the INVERT flag is passed), then the thread is put to sleep."],["ThreadSyncReference","A reference to a piece of data. May either be a non-realized persistent reference or a virtual address."]],"fn":[["sys_info","Get a SysInfo struct from the kernel."],["sys_kaction",""],["sys_kernel_console_read","Read from the kernel console input, placing data into `buffer`."],["sys_kernel_console_read_buffer","Read from the kernel console buffer, placing data into `buffer`."],["sys_kernel_console_write","Write to the kernel console."],["sys_new_handle",""],["sys_object_create","Create an object, returning either its ID or an error."],["sys_object_map","Map an object into the address space with the specified protections."],["sys_read_clock_info","Read information about a give clock, as specified by clock source."],["sys_spawn","Spawn a new thread, returning the ObjID of the thread’s handle or an error."],["sys_thread_exit","Exit the thread. arg1 and arg2 should be code and location respectively, where code contains a 64-bit value to write into *location, followed by the kernel performing a thread-wake event on the memory word at location. If location is null, the write and thread-wake do not occur."],["sys_thread_set_upcall",""],["sys_thread_settls","Set the current kernel thread’s TLS pointer. On x86_64, for example, this changes user’s FS segment base to the supplies TLS value."],["sys_thread_sync","Perform a number of [ThreadSync] operations, either waking of threads waiting on words of memory, or sleeping this thread on one or more words of memory (or both). The order these requests are processed in is undefined."],["sys_thread_yield","Yield the thread’s CPU time now. The actual effect of this is unspecified, but it acts as a hint to the kernel that this thread does not need to run right now. The kernel, of course, is free to ignore this hint."]],"struct":[["ClockFlags","Flags about a given clock or clock read."],["ClockInfo","Information about a given clock source, including precision and current clock value."],["CreateTieFlags","Flags controlling how a particular object tie operates."],["CreateTieSpec","A specification of ties to create. (see the book for more information on ties)."],["KernelConsoleReadBufferFlags","Flags to pass to [sys_kernel_console_read_buffer]."],["KernelConsoleReadFlags","Flags to pass to [sys_kernel_console_read]."],["KernelConsoleWriteFlags","Flags to pass to [sys_kernel_console_write]."],["MapFlags","Flags to pass to [sys_object_map]."],["NewHandleFlags",""],["ObjectCreate","Full object creation specification, minus ties."],["ObjectCreateFlags","Flags to pass to the object create system call."],["ObjectSource","Specifications for an object-copy from a source object. The specified ranges are source:[src_start, src_start + len) copied to :[dest_start, dest_start + len). Each range must start within an object, and end within the object."],["ReadClockFlags","Flags to pass to [sys_read_clock_info]."],["SysInfo","Information about the system."],["ThreadSpawnArgs","Arguments to pass to [sys_spawn]."],["ThreadSpawnFlags","Flags to pass to [sys_spawn]."],["ThreadSyncFlags","Flags to pass to sys_thread_sync."],["ThreadSyncSleep","Specification for a thread sleep request."],["ThreadSyncWake","Specification for a thread wake request."]],"type":[["ThreadSyncResult",""]]});