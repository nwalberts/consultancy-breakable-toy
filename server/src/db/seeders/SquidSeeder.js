import { Factory } from "../../../test/factories/Factory.js";
import { Squid } from "../../models/index.js";

export class SquidSeeder {
  static async seed() {
    // eslint-disable-next-line no-console
    console.log("Seeding squids...");

    try {
      await Squid.query().delete();
      await new Factory(Squid).createMany(40);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Error while seeding", error);
    }
  }
}
