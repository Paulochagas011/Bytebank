import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Paulo";
cliente1.cpf = 11122233309;

//const cliente2 = new Cliente();
//cliente2.nome = "maria";
//cliente2.cpf = 88822233309;


const contaCorrentePaulo = new ContaCorrente();
contaCorrentePaulo.agencia = 1001;
contaCorrentePaulo.cliente = cliente1;
contaCorrentePaulo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "maria";
conta2.cliente.cpf = 88822233309;
conta2.agencia = 102;

let valor = 200;
contaCorrentePaulo.tranferir(valor, conta2);

console.log("valor: ", valor)
console.log(conta2);


