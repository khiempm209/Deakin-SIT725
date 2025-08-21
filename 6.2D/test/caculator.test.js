const expect = require("chai").expect;
const request = require("request");

const PORT = process.env.PORT || 3000;
const baseUrl = `http://localhost:${PORT}`;

describe("Sum Calculator API", function () {
  it("returns status 200 to check if api works", function (done) {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return correct sum for valid numbers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("15"); 
      done();
    });
  });

  it("should handle missing parameters", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200); 
      done();
    });
  });
  it("should return error for non-numeric input", function (done) {
    request.get(
      `${baseUrl}/add?a=hello&b=world`,
      function (error, response, body) {
        expect(response.statusCode).to.not.equal(200);
        done();
      }
    );
  });
});

describe("Multiplication Calculator API", function () {
  it("should return correct multiplication for valid numbers", function (done) {
    request.get(`${baseUrl}/multiplication?num_a=10&num_b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("50"); 
      done();
    });
  });

  it("should handle missing parameters", function (done) {
    request.get(`${baseUrl}/multiplication?num_a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200); 
      done();
    });
  });
  it("should return error for non-numeric input", function (done) {
    request.get(
      `${baseUrl}/multiplication?num_a=hello&num_b=world`,
      function (error, response, body) {
        expect(response.statusCode).to.not.equal(200);
        done();
      }
    );
  });
  it("should return error for redundant parameters", function (done) {
    request.get(
      `${baseUrl}/multiplication?num_a=5&num_b=10&num_c=20`,
      function (error, response, body) {
        expect(response.statusCode).to.not.equal(200);
        expect(JSON.parse(body).invalidParams).to.include("num_c")
        done();
      }
    );
  });
});
