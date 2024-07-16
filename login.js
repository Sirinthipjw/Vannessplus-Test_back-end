const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.register.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ success: false });
    }

    const Match = await bcrypt.compare(password, user.password);
    if (!Match) {
      return res.status(400).json({ message: "false" });
    }

    const token = jwt.sign({ userId: user.idRegister }, "secretkey", {
      expiresIn: "24h",
    });
    res.json({
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        date: user.date,
        gender: user.gender,
        email: user.email,
        tel: user.tel,
        password: user.password,
      },
    });
  } catch (err) {
    res.status(500).send("Error login");
  }
});
