const assert = require("assert");
const controller = require("../../../api/controllers/UserController");
const { mockAsync, RESPONSE, USER, FILE } = require("../../util/");
const Users = require("../../../api/models/Users"); // Ensure this path is correct

describe("UserController", function() {
  this.timeout(10000); // Increase timeout to 10000ms

  it("Deve criar usuário com sucesso", async function() {
    const databaseStub = mockAsync(Users, "create", USER); // Mock the return value
    const req = {
      body: USER,
      file: FILE,
    };

    const result = await controller.create(req, RESPONSE);

    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, { success: true });
  });

  it("Deve criar usuário com sucesso", async function() {
    const findOneStub = mockAsync(Users, "findOne", USER); // Mock the return value
    const req = {
      body: {
        email: "joão.s@gmail.com",
        password: "password123",
      },
    };

    const result = await controller.login(req, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);

    assert.ok(result.access_t
