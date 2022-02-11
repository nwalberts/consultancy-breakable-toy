const Model = requre("./Model")

class Squid extends Model {
  static get tableName(){
    return "squids"
  }

  statis get jsonSchema(){
    return {
       type: "object",
       required: ["name", "species", "victories"], 
       properties: {
         name: { type: "string", minLength: 1 },
         species: { type: "string", minLength: 1 },
         victories: { type: "string" },
         specialPower: {type: "string"}
        //  array of possible values, maybe rails enum
       }
    }
  }
}

module.exports = Squid