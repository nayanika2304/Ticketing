import { Publisher, OrderCreatedEvent, Subjects } from '@nayanika-test/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
