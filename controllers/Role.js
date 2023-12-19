import Role from "../models/RoleModel.js";

export const getRole = async (req, res) => {
  try {
    const response = await Role.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
