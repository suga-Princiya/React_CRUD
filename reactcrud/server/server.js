const express = require("express");
const app = express();
const userRoutes = require("../server/server/Routes/userRoutes.js");
const connecteddb = require("../server/server/dbConnection.js");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);

connecteddb();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
