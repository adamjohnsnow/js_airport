function Weather() {
  this.forecast = ['Sunny', 'Sunny', 'Sunny', 'Sunny', 'Stormy'];
};


Weather.prototype.condition = function() {
 return this.forecast[Math.floor(Math.random() * 5)];
};
