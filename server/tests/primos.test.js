const request = require("supertest");

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request("localhost:3005").post("/falabella/primos/primosByNumber").send({
      number: 7,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ primos: [7, 5, 3, 2], result: 1 });
  });
});

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request("localhost:3005").post("/falabella/primos/primosByNumber").send({
      number: 9,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ primos: [7, 5, 3, 2], result: 1 });
  });
});
