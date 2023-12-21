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
        idtransaksi: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDetailTransaksi = async (req, res) => {
  try {
    const detailTransaksi = await DetailTransaksi.findByPk(req.params.id);

    if (!detailTransaksi) {
      return res.status(404).json({ message: "Detail transaksi not found" });
    }

    const currentStatus = detailTransaksi.status;
    const newStatus = currentStatus === "aktif" ? "batal" : "aktif";
    console.log(newStatus);
    const response = await DetailTransaksi.update(
      { status: newStatus },
      {
        where: {
          idtransaksi: req.params.id,
        },
      }
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDetailTransaksi = async (req, res) => {
  try {
    // Temukan idtransaksi dari DetailTransaksi yang akan dihapus
    const detailTransaksi = await DetailTransaksi.findOne({
      where: {
        idtransaksi: req.params.id,
      },
    });

    if (!detailTransaksi) {
      return res.status(404).json({ message: "Detail Transaksi not found" });
    }

    const idtransaksi = detailTransaksi.idtransaksi;

    await DetailTransaksi.destroy({
      where: {
        idtransaksi: idtransaksi,
      },
    });

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
