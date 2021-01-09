import {ExpirationCompleteEvent, Publisher, Subjects} from "@nayanika-test/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
