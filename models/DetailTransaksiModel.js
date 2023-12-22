import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Transaksi from "./TransaksiModel.js";

const { DataTypes } = Sequelize;

const DetailTransaksi = db.define(
  "detailtransaksi",
  {
    idtransaksi: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    idmenu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    namamenu: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    harga: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    status: {
      type: DataTypes.ENUM("aktif", "batal"),
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

DetailTransaksi.belongsTo(Transaksi, {
  foreignKey: "idtransaksi",
  as: "transaksi",
});

export default DetailTransaksi;
