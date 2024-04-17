import express from "express";
import { router } from "./router";
import cookie from "cookie-parser";

const app = express();
 
app.set("view engine", "hbs");
app.set("views", __dirname + "/../view");

app.use(express.static("public"));
app.use(express.json());
app.use(cookie());
app.use(router);

app.listen(1500, "0.0.0.0");