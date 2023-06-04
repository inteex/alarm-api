import { Knex } from "knex";
import { Alarm } from "../../src/models/alarm";

declare module "knex/types/tables" {
  interface Tables {
    alarms: Alarm;
    users_composite: Knex.CompositeTableType<
      Alarm,
      Pick<Alarm, "hours"> & Partial<Pick<Alarm, "minutes">>,
      Partial<Omit<Alarm, "id">>
    >;
  }
}
