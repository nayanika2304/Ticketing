import {Publisher, Subjects, TicketUpdatedEvent} from "@nayanika-test/common";
import {Message} from "node-nats-streaming";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject : Subjects.TicketUpdated = Subjects.TicketUpdated

    queueGroupName = 'payments-service';

    onMessage(data: TicketUpdatedEvent['data'], msg: Message){
        console.log('Event data!',data)

        msg.ack()
    }
}




