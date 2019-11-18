const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

router.get("/", controller.get);
router.get("/clientes", controller.get)

// router.get("/compradores", controller.get);
// router.get("/cpf", controller.get);


// router.post("/:id/clientes", controller.post);

module.exports = router