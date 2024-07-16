const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/Register", async (req, res) => {
  const { firstName, lastName, gender, date, email, password, tel } =
    req.body.data;
  console.log(req.body.data);
  if (
    !firstName ||
    !lastName ||
    !gender ||
    !date ||
    !email ||
    !password ||
    !tel
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields.",
    });
  }

  try {
    const result = await prisma.register.create({
      data: {
        firstName,
        lastName,
        gender,
        date,
        email,
        password,
        tel,
      },
    });
    console.log("Data inserted successfully", result);
    res
      .status(200)
      .json({ success: true, message: "Data inserted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to insert data" });
    return;
  }
});

console.log("Register.js is running");

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
