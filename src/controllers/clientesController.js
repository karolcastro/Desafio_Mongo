
//informar as requisicoes e onde ele vai buscar as informacoes 
const Clientes = require('../model/clientes')//faz a consulta no banco de dados ao inves do json

const fs = require('fs');

//modulos Get
exports.getClientes = (req, res) => {

  Clientes.find(function (err, clientes) {// funcao callback traz todo mundo do banco de dados(err/para erro - clientes/retorna so clientes
    if (err) res.status(500).send(err);
    console.log(clientes);
    res.status(200).send(clientes);
  })
}

exports.getCompradores = (req, res) => {
  // Clientes.find({comprou:true},function(err, clientes)// outra possibilidade
  //if (err) return res.status(500).send(err);
  //const clienteComprador = clientes.map(cliente =>{
  // return
  //nome: cliente.nome,
  //email: cliente.email
  //})
  Clientes.find(function (err, cliente) {
    if (err) return res.status(500).send(err);

    const clienteComprador = cliente.filter(cliente => cliente.comprou == true)// faz o filtro dequem comprou
    console.log(clienteComprador)
    const cliComprador = clienteComprador.map(({ nome, email }) => ({ nome, email }))// desconstrucao puxa quantos quiserrr
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

// modulo post
exports.postCliente = (req, res) => {//exporta a rota para a route consumir
  let cliente = new Clientes(req.body);// pega as informacoes do body de acordo com o schema

  cliente.save(function (err) {//funcao de salvar se estiver tudo ok conforme o schema
    if (err) res.status(500).send(err);//volta erro se nao estiver igual ao schema
    res.status(201).send({ status: true, message: ' Cliente incluido com sucesso' })
  })
}

exports.deleteCliente = (req, res) => {
  const cliente = req.params.cpf;

  Clientes.findById(cliente, function (err, cliente) {
    if (err) return res.status(500).send(err);

    if (!cliente) {
      return res.status(200).send({ message: `${cliente} nao localizado` })
    }
    cliente.remove(function(err){// exclusao do cliente
      if(!err){
        res.status(200).send({message:`${cliente} removido`})
      }
    })
  })
}