import DetailTransaksi from "../models/DetailTransaksiModel.js";
import Transaksi from "../models/TransaksiModel.js";

export const getDetailTransaksi = async (req, res) => {
  try {
    const response = await DetailTransaksi.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailTransaksiById = async (req, res) => {
  try {
    const response = await DetailTransaksi.findOne({
      where: {
        iddetailtransaksi: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDetailTransaksi = async (req, res) => {
  try {
    const response = await DetailTransaksi.update(req.body, {
      where: {
        iddetailtransaksi: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDetailTransaksi = async (req, res) => {
  try {
    const { id } = req.params;

    // Temukan idtransaksi dari DetailTransaksi yang akan dihapus
    const detailTransaksi = await DetailTransaksi.findOne({
      where: {
        iddetailtransaksi: id,
      },
    });

    if (!detailTransaksi) {
      return res.status(404).json({ message: "Detail Transaksi not found" });
    }

    const idtransaksi = detailTransaksi.idtransaksi;

    // Hapus semua DetailTransaksi yang memiliki idtransaksi yang sama
    await DetailTransaksi.destroy({
      where: {
        idtransaksi: idtransaksi,
      },
    });

    // Hapus transaksi yang memiliki idtransaksi yang sama
    await Transaksi.destroy({
      where: {
        idtransaksi: idtransaksi,
      },
    });

    res
      .status(200)
      .json({ message: "Detail Transaksi and associated Transaksi deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
