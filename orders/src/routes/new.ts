import express , {Request, Response} from  'express';
import {NotFoundError, requireAuth, validateRequest} from "@nayanika-test/common";
import {body} from 'express-validator';
import {Ticket} from "../models/ticket";
import {Order} from "../models/order"
import mongoose from "mongoose";
const router = express.Router()

router.post('/api/orders',requireAuth,[
    body('ticketId')
        .not()
        .isEmpty()
        .custom((input:string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('Ticket Id must be provides')
],validateRequest,async(req:Request,res:Response) =>{
    const {ticketId} = req.body
    // Find the ticket the user is trying to order in the database
    const ticket = await Ticket.findById(ticketId)
    if(!ticket){
        throw new NotFoundError()
    }
    //Make sure that the ticket is not already reserved

    //Calculate an expiration date for the order

    //Build the order and save it to the database

    //Publish an event saying that the order was created
    res.send({})
})

export {router as newOrderRouter} ;
