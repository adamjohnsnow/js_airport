function Plane() {
  this.status = 'inFlight';
};

Plane.prototype.land = function() {
  this.status = 'landed';
};

Plane.prototype.takeoff = function() {
  this.status = 'inFlight';
};
