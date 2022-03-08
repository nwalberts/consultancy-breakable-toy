const Model = require("./Model");

class Squid extends Model {
  static get tableName() {
    return "squids";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "species"],
      properties: {
        name: { type: "string", minLength: 1 },
        species: { type: "string", minLength: 1 },
        experiencePoints: { type: "integer" },
        specialPower: { type: "string", enum: ["ink", "camouflage", "bioluminescence"] },
      },
    };
  }
}

module.exports = Squid;
