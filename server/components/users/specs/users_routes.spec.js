const request = require("supertest");
const users_routes = require("../users_routes");

describe("GET /user", () => {
  // esto esta aun demasiado para ti trata algo mas simple sigue el
  // tutorial de la pagina de supertest
  fit("should response with a 200 status code", async () => {
    try {
      const response = await request(users_routes).get("/user");
      console.log('response:', response)
    } catch (error) {
      console.log('error:', error)
    }
  });
});
