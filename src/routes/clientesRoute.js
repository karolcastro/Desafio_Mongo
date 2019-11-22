

const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

//rotas definidas para o projeto que sera chamado no controller
router.get("/", controller.getClientes)//vc determina como sera o get desde que na controller tb seja o mesmo nome
router.get("/compradores", controller.getCompradores);
router.get("/:cpf", controller.getCpf);// : é para p parametro

//a rota que inclui o registro no banco de dados
router.post("/", controller.postCliente);//importa a rota para o controller consumir

//delete
router.delete("/:id", controller.deleteCliente);

module.exports = router