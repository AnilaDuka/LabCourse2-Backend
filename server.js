const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/usersRoutes");
const supplierRoutes = require("./routes/suppliersRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", supplierRoutes);
app.use("/api", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});