import express from 'express';
import cors from 'cors';
import session from 'express-session';
import PenggunaRoute from './routes/PenggunaRoute.js';
import authRoute from './routes/authRoute.js';
import RoleRoute from './routes/RoleRoute.js';
import TransaksiRoute from './routes/TransaksiRoute.js';
import DetailTransaksiRoute from './routes/DetailTransaksiRoute.js';
import AktivitasPenggunaRoute from './routes/AktivitasPenggunaRoute.js';
import db from './config/Database.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();


const app = express();

// (async () => {
//     await db.sync();
// })();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5432'
}));
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
    console.log('Server started');
    });