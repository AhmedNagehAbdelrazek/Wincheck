const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mainRoute = require("./Routes/index");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// main system route
app.use("/api", mainRoute);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});