var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park', function(){

  var park1;
  var dino1;
  var dino2;

  beforeEach(function(){
    park1 = new Park();
    dino1 = new Dinosaur('Tyrannosaurus', 2);
    dino2 = new Dinosaur('Velociraptor', 4);
    dino3 = new Dinosaur('Velociraptor', 4);
  });

  it('enclosure should start empty', function(){
    assert.strictEqual(park1.enclosure.length, 0);
  });

  it('should be able to add dinosaur', function(){
    park1.addDinosaur(dino1, 1);
    assert.strictEqual(park1.enclosure.length, 1);
  });

  it('can remove all dinosaurs of a particular type', function(){
    park1.addDinosaur(dino1, 1);
    park1.addDinosaur(dino2, 2);
    // park1.addDinosaur(dino3);
    park1.removeDinosaursByType('Velociraptor');
    assert.strictEqual(park1.enclosure.length, 1);
  });

  it('get all dinosaurs with offspring count more than 2', function(){
    park1.addDinosaur(dino1, 1);
    park1.addDinosaur(dino2, 2);
    // park1.addDinosaur(dino3);
    let dinoList = park1.listDinosWithOffspringGreaterThan(2);
    assert.strictEqual(dinoList.length, 2);
  });

  it('get number of dinosaurs after year 1 with 1 dinosaur', function(){
    park1.addDinosaur(dino1, 1);
    park1.reproduce(1);
    assert.strictEqual(park1.enclosure.length, 3);
  });

});
