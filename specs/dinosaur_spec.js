var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  var dino1;
  var dino2;

  beforeEach(function(){
    dino1 = new Dinosaur('Tyrannosaurus', 2);
    dino2 = new Dinosaur('Velociraptor', 4);
  });

  it('a dinosaur should have a type', function(){
    assert.strictEqual(dino1.type, 'Tyrannosaurus');
  });

});
