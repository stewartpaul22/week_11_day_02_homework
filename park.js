var Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur, quantity) {
  for (var i = 0; i < quantity; i++) {
    this.enclosure.push(dinosaur);
  }
};

Park.prototype.removeDinosaursByType = function (dinoType) {
  this.enclosure = this.enclosure.filter(dino => dino.type !== dinoType);
};

Park.prototype.listDinosWithOffspringGreaterThan = function (offspringCount) {
  let dinoList = this.enclosure.filter(dino => dino.yearlyOffspring > offspringCount);
  return dinoList;
};

Park.prototype.reproduce = function (numberOfYears) {
  let total = 0;
  for (let i = 0; i < numberOfYears; i++) {
    for (let dino of this.enclosure) {
      total += (dino.yearlyOffspring + 1);
    }
  }

};

module.exports = Park;
