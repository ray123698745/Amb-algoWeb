'use strict';

var app = require('../..');
import request from 'supertest';

var newSequences;

describe('Sequences API:', function() {

  describe('GET /y', function() {
    var sequencess;

    beforeEach(function(done) {
      request(app)
        .get('/y')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          sequencess = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      sequencess.should.be.instanceOf(Array);
    });

  });

  describe('POST /y', function() {
    beforeEach(function(done) {
      request(app)
        .post('/y')
        .send({
          name: 'New Sequences',
          info: 'This is the brand new sequences!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSequences = res.body;
          done();
        });
    });

    it('should respond with the newly created sequences', function() {
      newSequences.name.should.equal('New Sequences');
      newSequences.info.should.equal('This is the brand new sequences!!!');
    });

  });

  describe('GET /y/:id', function() {
    var sequences;

    beforeEach(function(done) {
      request(app)
        .get('/y/' + newSequences._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          sequences = res.body;
          done();
        });
    });

    afterEach(function() {
      sequences = {};
    });

    it('should respond with the requested sequences', function() {
      sequences.name.should.equal('New Sequences');
      sequences.info.should.equal('This is the brand new sequences!!!');
    });

  });

  describe('PUT /y/:id', function() {
    var updatedSequences;

    beforeEach(function(done) {
      request(app)
        .put('/y/' + newSequences._id)
        .send({
          name: 'Updated Sequences',
          info: 'This is the updated sequences!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSequences = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSequences = {};
    });

    it('should respond with the updated sequences', function() {
      updatedSequences.name.should.equal('Updated Sequences');
      updatedSequences.info.should.equal('This is the updated sequences!!!');
    });

  });

  describe('DELETE /y/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/y/' + newSequences._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when sequences does not exist', function(done) {
      request(app)
        .delete('/y/' + newSequences._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
