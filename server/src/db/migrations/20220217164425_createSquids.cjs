/**
 * @typedef {import("knex")} Knex 
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("squids", (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable();
    table.string("species").notNullable();
    table.string("experiencePoints").defaultTo(0).notNullable();
    table.enu("specialPower", ["ink", "bioluminescence", "camouflage"]);
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("squids");
};
