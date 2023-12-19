import jwt from "jsonwebtoken";

export function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    console.log(token, "ini token");

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }

      req.user = user;

      console.log(user, "ini user");
      next();
    });
  } else {
    res
      .sendStatus(401)
      .json({ message: "Token tidak valid. Silahkan login kembali" });
  }
}
