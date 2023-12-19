const Pengguna = require('../models/PenggunaModel.js');

const penggunaData = [
    {
        username: "admin",
        password: "admin",
        namapengguna: "Administrator",
        idrole: 1,
        status: "Aktif",
        foto: "admin.jpg"
    },
    {
        username: "user",
        password: "user",
        namapengguna: "User",
        idrole: 2,
        status: "Aktif",
        foto: "user.jpg"
    }
];

async function seedPengguna() {
    try {
        await Pengguna.bulkCreate(penggunaData);
        console.log("Pengguna seeding successful.");
    } catch (error) {
        console.log(error);
    }
}

module.exports = seedPengguna;