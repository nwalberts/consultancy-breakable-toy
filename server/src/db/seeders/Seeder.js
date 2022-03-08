import { connection } from "../../boot.js";
import "../../../test/factories/factories.js";
import { SquidSeeder } from "./SquidSeeder.js";

export class Seeder {
  static async seed() {
    const seederClasses = [SquidSeeder];
    console.log("Seeding...");

    await Promise.all(seederClasses.map((c) => c.seed()));

    if (connection) {
      // eslint-disable-next-line no-console
      console.log("Done!");
      await connection.destroy();
    }
  }
}
