import { Squid } from "../../models/index.js"

export class SquidSeeder {
  static async seed() {
    // WIP until Rosie figured out
    await Squid.query().insert({name: "Bethecca", species: "Japanese Flying Squid", experiencePoints: 10, specialPower: "camouflage" })

    await Squid.query().insert({name: "Jeremy", species: "WereSquid", experiencePoints: 5, specialPower: "ink" })
  }
}