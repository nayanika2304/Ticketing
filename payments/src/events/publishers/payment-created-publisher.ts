import {PaymentCreatedEvent, Publisher, Subjects} from '@nayanika-test/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}
