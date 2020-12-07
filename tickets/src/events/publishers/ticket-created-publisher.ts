import {Publisher, Subjects, TicketCreatedEvent} from "@nayanika-test/common";
import {Message} from "node-nats-streaming";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject : Subjects.TicketCreated = Subjects.TicketCreated

    queueGroupName = 'payments-service';

    onMessage(data: TicketCreatedEvent['data'], msg: Message){
        console.log('Event data!',data)

        msg.ack()
    }
}


