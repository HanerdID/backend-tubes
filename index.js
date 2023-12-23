import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import AktivitasPenggunaRoute from "./routes/AktivitasPenggunaRoute.js";
import DetailTransaksiRoute from "./routes/DetailTransaksiRoute.js";
import PenggunaRoute from "./routes/PenggunaRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import TransaksiRoute from "./routes/TransaksiRoute.js";
import authRoute from "./routes/authRoute.js";
dotenv.config();

const app = express();

// (async () => {
//     await db.sync();
// })();


app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5432",
  })
);

app.use(express.json());

app.use(PenggunaRoute);
app.use(authRoute);
app.use(RoleRoute);
app.use(TransaksiRoute);
app.use(DetailTransaksiRoute);
app.use(AktivitasPenggunaRoute);

// db.sync({
//   force: true,
//   alter: true,
// }).then(() => {
//   console.log('🔄 User Model synced');
//  });

app.listen(process.env.APP_PORT, () => {
  console.log("Server listening on port 3000");
});
