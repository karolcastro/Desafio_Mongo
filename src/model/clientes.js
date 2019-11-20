// caracteristicas do cliente que estrutura o banco de dados

const mongoose = require('mongoose');// aplicacao que importa a conexao com o banco de dados

//estrutura com as propriedades que estarao no banco de dados, sao os requisitos do projeto
const clientesSchema = new mongoose.Schema({
    nome: { type: String},
    email: { type: String,}, //require: true, é um campo obrigatorio sem ele da erro
    cpf: { type: Number },
    dataNascimento: { type: Date },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
},
    {
        versionKey: false// nao salva a versao no banco de dados
    })

const Clientes = mongoose.model('Clientes', clientesSchema);//informa onde podera ser consumido os dados


module.exports = Clientes;//informa para quem quiser consumir onde esta os dados, neste caso no model
