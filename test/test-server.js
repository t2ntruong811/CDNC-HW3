var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server/app");
var should = chai.should();
chai.use(chaiHttp);

describe("Unit Test", function () {
  //test case 1
  it("API POST /sum  2 + 3 = 5", function (done) {
    chai
      .request(server)
      .post("/sum")
      .send({ x: 2, y: 3 })
      .end(function (err, res) {
        res.should.have.status(201);
        res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.have.property('msg');
				res.body.msg.should.have.equal('OK');
				res.body.should.have.property('sum');
				
				res.body.sum.should.have.equal(5);
        done();
      });
  });

	//test case 2
	it("API POST /sum 2 + '3' = throw", function (done) {
		chai
		.request(server)
		.post("/sum")
		.send({ x: 2, y: '3' })
		.end(function (err, res) {
			res.should.have.status(500);
			res.should.be.throw;
			done();
		});
	})
});
