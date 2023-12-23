import { Sequelize } from "sequelize";

const db = new Sequelize('flutter', 'postgres', 'Kronos86', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});

export default db;