import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";
// Para os modulos funcionarem, precisamos configurar o package.json com o tipo modulo. No terminal usamos o npm init. Depois de passar os parametros, irá criar um arquivo json, e nesse arquivo inserimos a linha "type": "module".


const cliente1 = new Cliente("Vinícius", 43200130857, 26071994);

const contaCorrenteVinicius = new ContaCorrente(cliente1, 413);

// contaCorrenteVinicius._saldo = 1600; não podemos fazer isso, pois o atributo saldo é privado. Também usar a operação abaixo:
contaCorrenteVinicius.depositar(1600);
contaCorrenteVinicius.depositar(-50);

console.log(`O cliente ${cliente1.nome} tinha como saldo R$ ${contaCorrenteVinicius._saldo} \n\n`);

const valorSacado = contaCorrenteVinicius.sacar(600);

console.log(`Foi sacado R$ ${valorSacado} e agora o saldo é de R$ ${contaCorrenteVinicius._saldo}`);

console.log(contaCorrenteVinicius);

const cliente2 = new Cliente("Pedro", 43099988857, 28051998);
const contaCorrentePedro = new ContaCorrente(cliente2, 2805);

contaCorrentePedro.depositar(100);

console.log(contaCorrentePedro);

contaCorrenteVinicius.tranferir(75, contaCorrentePedro);

console.log(contaCorrenteVinicius);
console.log(contaCorrentePedro);

console.log(ContaCorrente.numereDeContas);

console.log("-------------------------------------------------------------------------------------------");
console.log("Criando a conta poupança \n \n");

const contaPoupanca = new ContaPoupanca(cliente1, 413, 50);
console.log(contaPoupanca);
console.log(contaCorrenteVinicius);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);

console.log("-------------------------------------------------------------------------------------------");
console.log("Cadastrando Funcionarios e Senha \n \n");

const diretorVinicius = new Diretor("Vinícius", 43200130857, 10000);
const gerentePedro = new Gerente("Pedro", 25641899950, 5000);

diretorVinicius.CadastrarSenha("915123");
gerentePedro.CadastrarSenha("senha123")
const cliente3 = new Cliente("Vitória", 5857596321, 13101999, "vitoria123456")

const viniciusLogado = SistemaDeAutenticacao.login(diretorVinicius, "915123");
const pedroLogado = SistemaDeAutenticacao.login(gerentePedro, "senha123");
const vitoriaLogado = SistemaDeAutenticacao.login(cliente3, "vitoria123456")

console.log(viniciusLogado, pedroLogado, vitoriaLogado);

const frase = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final'

const fraseAtualizada = frase.replace(/palavra-feia/g, '********')
console.log(fraseAtualizada)