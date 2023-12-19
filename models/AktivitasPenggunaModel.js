import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const AktivitasPengguna = db.define(
  "aktivitaspengguna",
  {
    idaktivitas: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    waktu: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    idpengguna: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    aktivitas: {
      type: DataTypes.ENUM("login", "akses shift", "logout"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default AktivitasPengguna;
