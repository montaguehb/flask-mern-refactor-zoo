const app = require("../app")
const request = require("supertest");

const id = 1;

describe("Test for the root path", () => {
  test("Should respond to a GET with a simple h1", async () => {
    const resp = await request(app).get("/");
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toContain("<h1>Zoo app</h1>");
  });
});

describe("Has a resource at '/animal/:id'", () => {
  test("Responds to a GET with a li containing animal information", async () => {
    const resp = await request(app).get(`/animal/${id}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toMatch(/\<li\>+/);
    expect(resp.text).toMatch(/\<ul\>[Nn]ame.+/);
    expect(resp.text).toMatch(/\<ul\>[Ss]pecies.+/);
    expect(resp.text).toMatch(/\<ul\>[Zz]ookeeper.+/);
    expect(resp.text).toMatch(/\<ul\>[Ee]nclosure.+/);
  });
});

describe("Has a resource at '/zookeeper/:id'", () => {
  test("Responds to a GET with a li containing zookeeper information", async () => {
    const resp = await request(app).get(`/zookeeper/${id}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toMatch(/\<li\>+/);
    expect(resp.text).toMatch(/\<ul\>[Nn]ame.+/);
    expect(resp.text).toMatch(/\<ul\>[Aa]nimal.+/);
    expect(resp.text).toMatch(/\<ul\>[Bb]irthday.+/);
  });
});

describe("Has a resource at '/enclosure/:id'", () => {
  test("Responds to a GET with a li containing enclosure information", async () => {
    const resp = await request(app).get(`/enclosure/${id}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toMatch(/\<li\>+/);
    expect(resp.text).toMatch(/\<ul\>[Ee]nvironment.+/);
    expect(resp.text).toMatch(/\<ul\>[Oo]pen\s[Tt]o\s[Vv]isitors.+/);
    expect(resp.text).toMatch(/\<ul\>[Aa]nimal.+/);
  });
});

export {};