class Panel {
  constructor(id, coverage, rate, inUse, charge, condition) {
    this.id = id;
    this.coverage = coverage;
    this.rate = rate;
    this.inUse = inUse;
    this.charge = charge;
    this.condition = condition;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
    return this.id;
  }

  get weatherCoverage() {
    return this.coverage;
  }

  set weatherCoverage(coverage) {
    this.coverage = coverage;
    return this.coverage;
  }

  get chargeRate() {
    return this.rate;
  }

  set chargeRate(rate) {
    this.rate = rate;
    return this.rate;
  }

  get isInUse() {
    return this.inUse;
  }

  set isInUse(inUse) {
    this.inUse = inUse;
    return this.inUse;
  }

  get charge() {
    return this.charge;
  }

  set charge(charge) {
    this.charge = charge;
    return this.charge;
  }

  get panelCondition() {
    this.condition;
  }

  set panelCondition(condition) {
    this.condition = condition;
    return this.condition;
  }
}
