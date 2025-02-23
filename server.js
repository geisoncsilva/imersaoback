import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Esta linha importa o módulo Express, que é fundamental para criar um servidor web.
const app = express();
app.use(express.static("uploads"));
routes(app)
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => {
  console.log("Servidor Escutando...");
});