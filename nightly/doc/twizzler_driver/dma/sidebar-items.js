window.SIDEBAR_ITEMS = {"constant":[["DMA_PAGE_SIZE","Size of a page for this DMA system."]],"enum":[["Access","Intended access direction for DMA memory."],["PinError","Possible failure modes for pinning memory."],["SyncMode","Mode of syncing to apply when calling `sync()`. These sync calls are unnecessary by default, and should only be used with utmost care."]],"struct":[["DmaObject","A handle for an object that can be used to perform DMA, and is most useful directly as a way to perform DMA operations on a specific object. For an allocator-like DMA interface, see [crate::dma::DmaPool]."],["DmaOptions","Options for DMA regions."],["DmaPin","A representation of some pinned memory for a region."],["DmaPool","A pool for allocating DMA regions that all share a common access type and DMA options."],["DmaRegion","A region of DMA memory, represented in virtual memory as type `T`, with a particular access mode and options."],["DmaSliceRegion","A region of DMA memory, represented in virtual memory as type `[T; len]`, with a particular access mode and options."]],"trait":[["DeviceSync","DMA types must implement this trait, which indicates that types can handle untyped updates from the device."]]};