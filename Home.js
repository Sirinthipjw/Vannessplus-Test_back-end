const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/Home", async (req, res) => {
  try {
    const result = await prisma.patient.findFirst({
      where: {
        email: {
          not: null,
        },
      },
      select: {
        firstName: true,
        lastName: true,
        date: true,
        gender: true,
        email: true,
        tel: true,
        password: true,
      },
    });
    res.send(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});
