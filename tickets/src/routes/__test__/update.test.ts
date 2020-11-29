import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('returns a 404 if the provided id does not exist', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie', global.signin())
        .send({
            title: 'aslkdfj',
            price: 20,
        })
        .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: 'aslkdfj',
            price: 20,
        })
        .expect(401);
});

it('returns a 401 if the user does not on the ticket ', async () =>{
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie',global.signin())
        .send({
            title : 'jjhkh',
            price : 20
        })

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',global.signin())
        .send({
        title : 'iuyihkj',
            price : 30
    })
        .expect(401)
})

it('returns a 400 if the user provides invalid title and price ', async () =>{
    const cookie = global.signin()
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie',cookie)
        .send({
            title : 'jjhkh',
            price : 20
        })

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title : '',
            price : 20
        })
        .expect(400)

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title : 'kjkjk',
            price :-10
        })
        .expect(400)
})


it('updates the ticket provided valid inputs', async () =>{
    const cookie = global.signin()
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie',cookie)
        .send({
            title : 'jjhkh',
            price : 20
        })

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title : 'new Title',
            price : 100
        })
        .expect(200)

    const ticketResponse = await request(app)
        .get(`/api/tickets/${response.body.id}`)
        .send()

    expect(ticketResponse.body.title).toEqual('new Title')
    expect(ticketResponse.body.price).toEqual(100)
})
