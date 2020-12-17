import {OrderCancelledEvent, Publisher, Subjects} from "@nayanika-test/common";
import {Message} from "node-nats-streaming";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject : Subjects.OrderCancelled = Subjects.OrderCancelled

    queueGroupName = 'payments-service';

    onMessage(data: OrderCancelledEvent["data"], message: Message): void {
        message.ack()
    }


}
