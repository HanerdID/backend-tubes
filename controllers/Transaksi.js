import Transaksi from "../models/TransaksiModel.js";

export const getTransaksi = async (req, res) => {
  try {
    const { shift } = req.query; // Ambil nilai shift dari query parameter
    console.log(shift, "ini shift");
    let whereCondition = {}; // Persiapan kondisi pencarian

    // Jika shift disediakan sebagai query parameter, tambahkan ke kondisi pencarian
    if (shift) {
      whereCondition = {
        ...whereCondition,
        shift: shift, // Sesuaikan dengan nama kolom yang benar
      };
    }

    const response = await Transaksi.findAll({
      where: whereCondition, // Terapkan kondisi pencarian
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailTransaksiById = async (req, res) => {
  try {
    const response = await Transaksi.findOne({
      where: {
        idtransaksi: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//buat agar dapat mencari transaksi berdasarkan inputan shiftnya
