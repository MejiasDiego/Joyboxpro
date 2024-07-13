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
    text: `Gracias por tu compra. Aquí están los detalles de tu pedido:

Producto: ${box.title}
Cantidad: ${quantity}
Total: €${box.price * quantity}

KEYS ECO BOX:
Stardew Valley: 4F67J-87L9K-Q4J2L-7N8D2-H4K9P
Firewatch: 3R6J2-98M4K-Q2N1L-4B7X8-H6M3P
Farming Simulator: 5H7P3-56K2M-QR8N3-L9J4V-H2P9N
Unravel: 6K2J1-78M9K-Q5N2L-8R4J7-H3N6P
The Forest: 7N8J4-43K2L-Q6N5J-2M7B9-H4K5P
Maneater: 8J4K5-23L6M-Q7N3L-5R8J2-H9M1P

Gracias por apostar por nosotros y ayudar a mejorar el mundo!`,
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
