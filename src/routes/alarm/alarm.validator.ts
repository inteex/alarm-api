import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";

const schema: ObjectSchema = Joi.object().keys({
  hours: Joi.number().greater(-1).less(24),
  minutes: Joi.number().greater(-1).less(60),
  isActive: Joi.boolean(),
});

export const addAlarm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(422).json({
      message: error.details.map((x) => x.message).join(", "),
    });
  } else {
    req.body = value;
    next();
  }
};
