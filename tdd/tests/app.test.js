const supertest = require("supertest");
const app = require("../app");
const uuid = require("uuid");

describe("GET /task", () => {
  it("should response with a 200 status code", async () => {
    const response = await supertest(app).get("/task");
    expect(response.status).toBe(200);
  });

  it("should response an array", async () => {
    const response = await supertest(app).get("/task");
    expect(response.body).toBeInstanceOf(Array);
  });
})

describe("Post /task", () => {
  it("should return statud code 201", async () => {
    const task = {
      name: "task_1"
    }
    const response = await supertest(app).post("/task", task);
    expect(response.status).toBe(201);
  })

  it("should return content-type application/json", async () => {
    const response = await supertest(app).post("/task").send({a: 1});
    expect(response.header["content-type"]).toContain("application/json");
    expect(response.header["content-type"]).toContain("json");
    expect(response.header["content-type"]).toEqual(expect.stringContaining("json"));
  })

  it("should return and id taks", async () => {
    const body = {
      _id: uuid.v4(),
      name: "task_1"
    }
    const response = await supertest(app).post("/task").send(body);
    expect(response.body._id).toBeDefined();
    expect(response.body.name).toBe("task_1");
  })

  fit("should return 404 if not _id or name", async () => {
    const body = {
      _id: uuid.v4()
    }
    const response = await supertest(app).post("/task").send(body);
    expect(response.status).toBe(404);
  })
})