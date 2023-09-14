import knex from "knex";

import { envConfig } from "../configs/envConfig.js";

export default class VectorDatabase {
  async connect() {
    this.pg = knex({
      client: "pg",
      connection: {
        connectionString: envConfig.POSTGRES_URL,
      },
    });
  }

  disconnect() {
    return this.pg.destroy();
  }

  insert(data) {
    return this.pg.insert(data).into("nods_page_section");
  }

  async checksumExists(checksum) {
    return (
      await this.pg
        .select("id")
        .from("nods_page_section")
        .where("checksum", checksum)
    ).length;
  }
}
