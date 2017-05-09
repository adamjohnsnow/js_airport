describe("Plane", function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it("not be landed", function() {
    expect(plane.status).toEqual('inFlight')
  });

  it("be landed", function() {
    plane.land()
    expect(plane.status).toEqual('landed')
  });

  it("be in flight again", function() {
    plane.land()
    plane.takeoff()
    expect(plane.status).toEqual('inFlight')
  });
});
