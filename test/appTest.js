const chai = require('chai')

const chaiHttp = require('chai-http')
const server = require('../index')

chai.should()
chai.use(chaiHttp)

describe('Unit Testing of TODO-LIST application', function () {
    describe('GET API TEST', () => {
        it('GET all todo items', (done) => {
            chai.request(server).get('/api/item').end((err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    response.should.have.status(200);
                    response.body.should.be.a('array')
                    // response.body.length.should.be.eq(6)
                }
            })
            done()
        })
        it('GET a single todo item', (done) => {
            const todoId = '63e0ea9fe5561cff97260849'
            chai.request(server).get('/api/item/' + todoId).end((err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    response.should.have.status(200);
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id')
                    response.body.should.have.property('content')
                    response.body.should.have.property('todoStatus')
                    response.body.should.have.property('date')
                }
            })
            done();
        })
    })
    describe('POST API TEST', () => {
        it('POST save todo items', (done) => {
            const data = {
                "content": "New Todo Added"
            }
            chai.request(server).post('/api/item/').send(data).end((err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    response.should.have.status(200);
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id')
                    response.body.should.have.property('content')
                    response.body.should.have.property('todoStatus')
                    response.body.should.have.property('date')
                }
            })
            done();
        })
    })
    describe('DELETE API TEST', () => {
        it('DELETE a todo item', (done) => {
            const todoId = '63e1311d1c4e224ee57ca319'
            chai.request(server).delete('/api/item/' + todoId).end((err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    response.should.have.status(200);
                }
            })
            done();
        })
    })
    describe('UPDATE API TEST', () => {
        it('UPDATE todo item', (done) => {
            const data = {
                "content": "Updated Todo"
            }
            chai.request(server).put('/api/item/' + '63e0ea9fe5561cff97260849').send(data).end((err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    response.should.have.status(200);
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id')
                    response.body.should.have.property('content')
                    response.body.should.have.property('todoStatus')
                    response.body.should.have.property('date')
                }
            })
            done();
        })
    })
})