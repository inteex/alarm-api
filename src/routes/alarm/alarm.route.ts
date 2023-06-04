import { Router } from "express";
import { Alarm } from "../../../src/models/alarm";
import { db } from "../../server";
import * as validator from "./alarm.validator";

export const basePath = "/alarms";

const alarmRouter = Router();

alarmRouter.get("/", async (req, res, next) => {
  const alarms: Alarm[] = await db.select().table("alarms");

  return res.status(200).json(alarms);
});

alarmRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const alarm: Alarm = await db("alarms").select().where("id", id).first();

  return res.json(alarm);
});

alarmRouter.post("/", validator.addAlarm, async (req, res, next) => {
  const alarm = req.body;

  const [id] = await db("alarms").insert(alarm);

  return res.status(201).json({
    id,
    ...alarm,
  });
});

alarmRouter.put("/:id", async (req, res, next) => {
  const alarm = req.body;
  const { id } = req.params;

  const updated = await db("alarms").where("id", id).update(alarm);

  return res.status(200).json(updated);
});

alarmRouter.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  const deleted = await db("alarms").where("id", id).delete();

  return res.status(201).json(deleted);
});

export default alarmRouter;
