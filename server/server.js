const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Cargar variables de entorno

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/api/process-payment", (req, res) => {
  const { box, quantity, paymentInfo } = req.body;

  console.log("Received payment request:", req.body); // Log para depuración

  // Configura el transporte de nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Utiliza la variable de entorno
      pass: process.env.EMAIL_PASS, // Utiliza la variable de entorno
    },
  });

  // Configura el contenido del correo
  const mailOptions = {
    from: process.env.EMAIL_USER, // Cambia esto a tu correo
    to: "diegones64@gmail.com", // Cambia esto al correo del cliente
    subject: "Confirmación de Compra",
    text: `Gracias por tu compra. Aquí están los detalles de tu pedido:\n\nProducto: ${box.title}\nCantidad: ${quantity}\nTotal: €${box.price * quantity}\n\nDirección de Envío: ${paymentInfo.address}`,
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo", error);
      return res.status(500).send("Error al procesar el pago");
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).send("Pago procesado con éxito");
    }
  });
});

const PORT = 4242;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
