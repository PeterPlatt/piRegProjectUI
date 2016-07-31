
var uuid = require('uuid');
var config = require('../config');
var supertest = require("supertest");
var server = supertest.agent("http://localhost:3000");
var should = require('should');


//Note thes test fail unless the the app is on. This is a live IT test.
describe('home page displays', function(){
    it('should return home page', function(done){
        var title = "Pi Registration";
        server
            .get("/")
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                console.log("Request body:"+res.text);
                res.text.should.containEql(title);
                done();
            });


    })
});

describe('Post to Registration server', function(){
    var postUUID = uuid.v1();
    var message = "testMessage:"+postUUID;


    it('should return UUID on registration',function (done) {
        //Post to the rest service
        server
            .post('/' + config.piRegistrationEndpoint)
            .send('message='+message)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log("Response From Server :\n"+res.text);
                res.text.should.containEql(message);
                done();
            });

    });

});

