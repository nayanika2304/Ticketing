import {Publisher} from "../../../common/src/events/base-publisher";
import {TicketCreatedEvent} from "../../../common/src/events/ticket-created-event";
import {Subjects} from "../../../common/src/events/subjects";
import {Message} from "node-nats-streaming";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
    queueGroupName = 'payments-service';

    onMessage(data: TicketCreatedEvent['data'], msg: Message){
        console.log('Event data!',data)

        msg.ack()
    }

}
