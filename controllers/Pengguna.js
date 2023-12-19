import Pengguna from '../models/PenggunaModel.js';

export const getPengguna = async (req, res) => {
    try {
        const response = await Pengguna.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};