const request = require("supertest");
require("../app");

describe("Test for the root path", () => {
  test("Should respond to a GET with a simple h1", async () => {
    const resp = await request(app).get("/");
    expect(resp.statusCode).toBe(200);
  });
});