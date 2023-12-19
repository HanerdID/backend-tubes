import Pengguna from "../models/PenggunaModel.js";

import argon2 from "argon2";
import jwt from "jsonwebtoken";


export const Login = async (req, res) => {
  console.log(req.body.username);
  const user = await Pengguna.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (!user) return res.status(404).json({ msg: "Pengguna tidak ditemukan" });
//   const match = await argon2.verify(user.password, req.body.password);
//   if (!match) return res.status(400).json({ msg: "Wrong password" });

  const penggunaId = user.idpengguna;
  const nama = user.nama;
  const username = user.username;
  const idrole = user.idrole;
  const status = user.status;

  const accessToken = jwt.sign(
    { penggunaId, nama, username, idrole, status },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "6h",
    }
  );

  res.status(200).json({
    accessToken,
    penggunaId,
    nama,
    username,
    idrole,
    status,
    accessToken,
  });
};
