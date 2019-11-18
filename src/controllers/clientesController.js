const Clientes = require('../model/clientes')

const fs = require('fs');

exports.get = (req, res) => {
  // console.log(req.url)
  // res.status(200).send(alunas)

  Clientes.find(function (err, clientes) {
    console.log(clientes);
    res.status(200).send(clientes)
  })
}

// exports.getById = (req, res) => {
//   const id = req.params.id//parametro para a requisicao
//   Clientes.findById(id, function (err, cliente) {// 
//     if (err) return res.status(500).send(err);

//     if (!cliente) {
//       return res.status(200).send({ message: `Infelizmente não localizamos este cliente de id: ${id}` })
//     }
//     res.status(200).send(cliente);
//   })
// }






// exports.post = (req, res) => {

//     let cliente = new Clientes(req.body);// da minha requisicao pegou o body
//     cliente.save(function (err) {//funcao de salvar 
//       if (err) res.status(500).send(err);
  
//       res.status(201).send({message: ' Cliente incluido com sucesso'})
  
//     })
// }