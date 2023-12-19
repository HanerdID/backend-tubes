const sequelize = require("sequelize");
const seedPengguna = require("./penggunaSeeder");

sequelize.sync()
.then(() => {
    console.log("Sync database success.");
    seedPengguna();
})
.catch((error) => {
    console.log(error);
});