var assert = require('assert');
var Park = require('../park.js');

describe('Park', function(){

  var park1;

  beforeEach(function(){
    park1 = new Park();
  });

  it('enclosure should start empty', function(){
    assert.strictEqual(park1.enclosure.length, 0);
  });

  //should be able to add dinosaur

  //should be able to remove all dinosaurs of a particular type

  //should get all the dinosaurs with an offspring count of more than 2


});
