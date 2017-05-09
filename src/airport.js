function Airport(weather = new Weather()) {
  this.hangar = [];
  this.weather = weather
};

Airport.prototype.land = function(plane) {
    if (this.weather.condition() == 'Sunny') {
      this.hangar.push(plane);
    };
};

Airport.prototype.takeoff = function(plane) {
  if (this.weather.condition() == 'Sunny') {
      this.hangar.pop(plane);
  };
};
