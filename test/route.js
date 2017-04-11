/**
 * Created by shen on 2017/3/2.
 */
var expect = require('chai').expect
var supertest = require('supertest')
supertest = require('really-need')
var should = require('should')

describe('你好', function () {
    var server
    beforeEach(function () {
        server = require('../app', {bustCache: true})
    })
    afterEach(function (done) {
        server.close(done);
    })
    it('1111', function (done) {
        supertest(server)
            .get('/singlepost')
            .send({
                _id: '58b3e91cc6d16d0843c46f83'
            })
            .expect(200, done)
    })
    it('404 everything else', function testPath(done) {
        supertest(server)
            .get('/foo/bar')
            .expect(404, done)
        })
})