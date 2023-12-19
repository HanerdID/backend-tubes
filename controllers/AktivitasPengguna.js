import AktivitasPengguna from "../models/AktivitasPenggunaModel.js";

export const getAktivitasPengguna = async (req, res) => {
  try {
    const response = await AktivitasPengguna.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
