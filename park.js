var Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaursByType = function (dinoType) {
  this.enclosure = this.enclosure.filter(dino => dino.type !== dinoType);
};

module.exports = Park;
