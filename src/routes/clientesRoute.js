

const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")
const authMiddleware = require("../middlewares/auth")


//apidoc -i src/ -o public/apidoc
/**
 * @api {get} /clientes
 *
 * @apiGroup Clientes
 *
 * 
 *
 * @apiSuccess {Object[]} clients Lista de Clientes.
 * @apiSuccess {json} Sucesso
 *  HTTP/1.1 200 OK
 *   [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 *   }];
*/



//rotas definidas para o projeto que sera chamado no controller
router.get("/", controller.getClientes)//vc determina como sera o get desde que na controller tb seja o mesmo nome
//a rota que inclui o registro no banco de dados
router.post("/", controller.postCliente);//importa a rota para o controller consumir
router.use(authMiddleware);
router.get("/compradores", controller.getCompradores);
router.get("/:cpf", controller.getCpf);// : é para p parametro

// a rota que atualiza os dados do cliente
router.put("/:cpf", controller.updateClientes)

//delete
router.delete("/:cpf", controller.deleteCliente);

module.exports = router