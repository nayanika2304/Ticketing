import { Publisher, Subjects, TicketUpdatedEvent } from '@nayanika-test/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
