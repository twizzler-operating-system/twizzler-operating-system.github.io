initSidebarItems({"enum":[["QueueError","Possible errors for submitting to a queue."]],"struct":[["CallbackQueueReceiver","A receiver-side async-enabled queue abstraction."],["Queue","A single queue, holding two subqueues (sending and completion). Objects of type S are sent across the sending queue, and completions of type C are sent back."],["QueueBase","The base info structure stored in a Twizzler queue object. Used to open Twizzler queue objects and create a [Queue]."],["QueueSender","An async-supported sending-half of a [Queue]. This is to support systems that want to asynchronously send items to a receiver, under the assumption that the receiver sends completions to indicate that a request has been finished, and that the send ID can be reused."],["ReceiveFlags","Flags to control how queue receive works."],["SubmissionFlags","Flags to control how queue submission works."]]});