function PartyAnimal() {
  this.x = 0;
  this.party = function () {
    this.x = this.x + 1;
    console.log("so far " + this.x);
  };
}
an = new PartyAnimal();
an.party();
an.party();
an.party();
