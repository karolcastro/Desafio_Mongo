const Clientes = require('../model/clientes')

const fs = require('fs');

exports.get = (req, res) => {
  // console.log(req.url)
  // res.status(200).send(alunas)

  Clientes.find(function (err, clientes) {
    console.log(clientes);
    res.status(200).send(clientes);
  })
}

exports.getCompradores = (req, res) => {
  Clientes.find(function (err, cliente) {
    if (err) return res.status(500).send(err);

    const clienteComprador = cliente.filter(cliente => cliente.comprou == true)
    console.log(clienteComprador)
    const cliComprador = clienteComprador.map(({ nome, email }) => ({ nome, email }))// desconstrucao puxa quantos quiserrr
    // console.log(cliComprador)
    // const clienteComprou = cliComprador.map(cliente => cliente.email)
    console.log(cliComprador)
    res.status(200).send(cliComprador)
  }
  )
}

exports.getCpf = (req, res) => {
  const clientecpf = req.params.cpf

  Clientes.find({ cpf: clientecpf }, function (err, cliente) {// faz o filtro dentro do banco de dados
    if (err) return res.status(500).send(err)
    res.status(200).send(cliente)
  })
}


exports.post = (req, res) => {

  let cliente = new Clientes(req.body);// da minha requisicao pegou o body
  cliente.save(function (err) {//funcao de salvar 
    if (err) res.status(500).send(err);

    res.status(201).send({ message: ' Cliente incluido com sucesso' })

  })
}