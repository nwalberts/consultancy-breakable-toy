import { Factory } from "../../../test/factories/Factory.js"
import { Squid } from "../../models/index.js"

export class SquidSeeder {
  static async seed() {
    // eslint-disable-next-line no-console
    console.log("Seeding squids...")

    try {
      await new Factory(Squid).createMany(3)
    } catch(error) {
      // eslint-disable-next-line no-console
      console.log("Error while seeding", error)
    }
  }
}