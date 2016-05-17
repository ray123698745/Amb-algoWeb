'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sequencesCtrlStub = {
  index: 'sequencesCtrl.index',
  show: 'sequencesCtrl.show',
  create: 'sequencesCtrl.create',
  update: 'sequencesCtrl.update',
  destroy: 'sequencesCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sequencesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './sequences.controller': sequencesCtrlStub
});

describe('Sequences API Router:', function() {

  it('should return an express router instance', function() {
    sequencesIndex.should.equal(routerStub);
  });

  describe('GET /y', function() {

    it('should route to sequences.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sequencesCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /y/:id', function() {

    it('should route to sequences.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sequencesCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /y', function() {

    it('should route to sequences.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sequencesCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /y/:id', function() {

    it('should route to sequences.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'sequencesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /y/:id', function() {

    it('should route to sequences.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'sequencesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /y/:id', function() {

    it('should route to sequences.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sequencesCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
