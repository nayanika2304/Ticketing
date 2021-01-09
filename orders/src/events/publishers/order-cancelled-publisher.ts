import { Subjects, Publisher, OrderCancelledEvent } from '@nayanika-test/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
