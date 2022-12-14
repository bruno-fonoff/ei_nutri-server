require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/db.config")();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP_URL }));

const uploadImgRouter = require("./routes/uploadimg.routes");
app.use("/", uploadImgRouter);

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

const adminRouter = require("./routes/admin.routes");
app.use("/admin", adminRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/review", reviewRouter);

app.listen(Number(process.env.PORT), () => {
  console.log("Server up and running at port:", process.env.PORT);
});
