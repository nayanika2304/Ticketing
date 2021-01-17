import { Publisher, Subjects, TicketCreatedEvent } from '@nayanika-test/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
