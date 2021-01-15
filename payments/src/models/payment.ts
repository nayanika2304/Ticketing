import mongoose from "mongoose";
import {updateIfCurrentPlugin} from "mongoose-update-if-current";

interface PaymentAttrs {
   orderId: string;
   stripeId: string;
}

interface PaymentDoc extends mongoose.Document {
    orderId: string;
    stripeId: string;

}

interface PaymentModel extends mongoose.Model<PaymentDoc> {
    build(attrs: PaymentAttrs): PaymentDoc;
}

const PaymentSchema = new mongoose.Schema({
    orderId: {
        required: true,
        type: String
    },
    stripeId: {
        required: true,
        type: String
    }
},{
    toJSON: {
        transform(doc, ret){
            ret.id = ret._id;
            delete ret._id
        }
    }
})
PaymentSchema.set('versionKey','version')
PaymentSchema.plugin(updateIfCurrentPlugin);

PaymentSchema.statics.build = (attrs: PaymentAttrs) => {
    return new Payment(attrs)
}

const Payment = mongoose.model<PaymentDoc, PaymentModel>('Payment', PaymentSchema)

export {Payment}
