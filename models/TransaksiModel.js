import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transaksi = db.define(
  "transaksi",
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
    shift: {
      type: DataTypes.ENUM("1", "2"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    idpengguna: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    idpelanggan: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    status: {
      type: DataTypes.ENUM("baru", "diproses", "selesai", "disajikan"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    kodemeja: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    namapelanggan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    total: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    metodepembayaran: {
      type: DataTypes.ENUM("cash", "kartu debit", "kartu kredit", "qris"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    totaldiskon: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    idpromosi: {
      type: DataTypes.INTEGER,
      allowNull: true,
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

Transaksi.hasOne(Transaksi, {
  foreignKey: "idtransaksi",
  as: "transaksi",
});

export default Transaksi;
