import app from "./app";
import knex from "knex";

export const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./alarmdb.sqlite",
  },
});

//create alarms table if not exists
db.schema.hasTable("alarms").then((exists) => {
  if (!exists) {
    db.schema
      .createTable("alarms", (table) => {
        table.increments("id", {
          primaryKey: true,
        });
        table.integer("hours");
        table.integer("minutes");
        table.boolean("isActive");
      })
      .then(() => {
        app.listen(3001);
      });
  } else app.listen(3001);
});
