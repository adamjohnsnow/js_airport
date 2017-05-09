describe("Sunny Airport", function() {
  var airport
  var plane
  var weather

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
    spy = spyOn(Math, 'random').and.returnValue(0.1);
  });

  it("should land a plane", function() {
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  });

  it("should takeoff a plane", function() {
    airport.hangar.push(plane)
    airport.takeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  });

});

describe("Stormy Airport", function() {
  var airport
  var plane
  var spy

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
    spy = spyOn(Math, 'random').and.returnValue(0.9);
  });

  it("should not takeoff a plane in Stormy weather", function() {
    airport.land(plane)
    expect(airport.hangar).not.toContain(plane)
  });

  it("should not takeoff a plane in Stormy weather", function() {
    airport.hangar.push(plane)
    airport.takeoff(plane)
    expect(airport.hangar).toContain(plane)
  });

});
