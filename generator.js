class Generator {
  constructor(id, position, power, rate) {
    this.id = id;
    this.position = position;
    this.power = power;
    this.rate = rate;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
    return this.id;
  }

  get position() {
    return this.position;
  }

  set position(position) {
    this.position = position;
    return this.position;
  }

  get power() {
    return this.power;
  }

  set power(power) {
    this.power = power;
    return this.power;
  }

  get rate() {
    return this.rate;
  }

  set rate(rate) {
    this.rate = rate;
    return this.rate;
  }
}