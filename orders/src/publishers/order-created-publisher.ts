import {OrderCreatedEvent, Publisher, Subjects} from "@nayanika-test/common";
import {Message} from "node-nats-streaming";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject : Subjects.OrderCreated = Subjects.OrderCreated

    queueGroupName = 'payments-service';

    onMessage(data: OrderCreatedEvent["data"], message: Message): void {
        message.ack()
    }


}
