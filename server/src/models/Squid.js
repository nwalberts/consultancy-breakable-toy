const Model = require("./Model")

class Squid extends Model {
  static get tableName(){
    return "squids"
  }

  static get jsonSchema(){
    return {
       type: "object",
       required: ["name", "species"], 
       properties: {
         name: { type: "string", minLength: 1 },
         species: { type: "string", minLength: 1 },
         experiencePoints: { type: "integer" },
         specialPower: {type: "string"}
        //  array of possible values, maybe rails enum
       }
    }
  }
}

module.exports = Squid