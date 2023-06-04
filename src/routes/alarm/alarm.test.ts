import request from "supertest";
import { Express } from "express-serve-static-core";

import expressApp from "../../../src/app";
let server: Express;
let globalIdAlam: number;

beforeAll(async () => {
  server = expressApp;
});

describe("GET alarms", () => {
  it("should return 200", (done) => {
    request(server).get(``).expect(200).end(done);
  });
});

describe("POST /alarms", () => {
  const paylod = {
    hours: 12,
    minutes: 35,
    isActive: true,
  };

  it("should return 201 and match the payload in entry", (done) => {
    request(server)
      .post(`/alarms`)
      .send(paylod)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.hours).toEqual(paylod.hours);
        expect(res.body.minutes).toEqual(paylod.minutes);
        expect(res.body.isActive).toEqual(paylod.isActive ? true : false);
        globalIdAlam = res.body.id;
        done();
      });
  });
});

describe("PUT /alarms", () => {
  const paylod = {
    isActive: false,
  };

  it("should return 200 and return a Truthy value", (done) => {
    request(server)
      .put(`/alarms/${globalIdAlam}`)
      .send(paylod)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeTruthy();
        done();
      });
  });
});
