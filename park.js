var Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaursByType = function (dinoType) {
  this.enclosure = this.enclosure.filter(dino => dino.type !== dinoType);
};

Park.prototype.listDinosWithOffspringGreaterThan = function (offspringCount) {
  let dinoList = this.enclosure.filter(dino => dino.yearlyOffspring > offspringCount);
  return dinoList;
};

module.exports = Park;
