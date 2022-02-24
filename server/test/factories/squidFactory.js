import { Factory } from "rosie"

import { Squid } from "../../src/models/index.js"

Factory.define("Squid", Squid)
  .sequence("name", (sequence) => `Remi the Squid ${sequence}`)
  .attr("species", "Japanese Flying Squid") 
  .attr("experiencePoints", 5)
  .attr("specialPower", "ink")

export { Factory }