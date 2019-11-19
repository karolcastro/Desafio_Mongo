
//informar as requisicoes e onde ele vai buscar as informacoes 
const Clientes = require('../model/clientes')//faz a consulta no banco de dados ao inves do json

const fs = require('fs');

//modulo Get
exports.getClientes = (req, res) => {
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

// modulos post
exports.postCliente = (req, res) => {//exporta a rota para a route consumir
  let cliente = new Clientes(req.body);// pega as informacoes do body de acordo com o schema
  
  cliente.save(function (err) {//funcao de salvar se estiver tudo ok conforme o schema
    if (err) res.status(500).send(err);//volta erro se nao estiver igual ao schema
    res.status(201).send({ status: true, message: ' Cliente incluido com sucesso' })
  })
}