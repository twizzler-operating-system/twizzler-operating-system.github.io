initSidebarItems({"enum":[["ReceiveError","Possible errors for receiving from a queue."],["SubmissionError","Possible errors for submitting to a queue."]],"struct":[["QueueEntry","A queue entry. All queues must be formed of these, as the queue algorithm uses data inside this struct as part of its operation. The cmd_slot is used internally to track turn, and the info is used by the full queue structure to manage completion. The data T is user data passed around the queue."],["RawQueue","A raw queue, comprising of a header to track the algorithm and a buffer to hold queue entries."],["RawQueueHdr","A raw queue header. This contains all the necessary counters and info to run the queue algorithm."],["ReceiveFlags","Flags to control how queue receive works."],["SubmissionFlags","Flags to control how queue submission works."]]});