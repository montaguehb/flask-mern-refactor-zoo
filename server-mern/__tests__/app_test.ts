const request = require("supertest");
const app = require("../app")

// describe('Test the addLike method', () => {
//   beforeAll(() => {
//       mongoDB.connect();
//   });

//   afterAll((done) => {
//       mongoDB.disconnect(done);
//   });
// }

describe("Test for the root path", () => {
  test("Should respond to a GET with a simple h1", async () => {
    const resp = await request(app).get("/");
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toContain("<h1>Zoo app</h1>")
  });
});

describe("Has a resource at '/animal/:id'", () => {
  test("Responds to a get with a li containing animal information", async () => {
    const resp = await request(app).get(`/animal/${1}`)
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toMatch(/\<li\>+/)
    expect(resp.text).toMatch(/\<ul\>[Nn]ame.+/)
    expect(resp.text).toMatch(/\<ul\>[Ss]pecies.+/)
    expect(resp.text).toMatch(/\<ul\>[Zz]ookeeper.+/)
    expect(resp.text).toMatch(/\<ul\>[Ee]nclosure.+/)
  })
});