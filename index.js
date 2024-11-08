class Heroi{
	constructor(nome, idade, tipo){
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar (){
    let ataque = "";
    	switch (this.tipo) {
      case 'mago':
        ataque = "magia";
        console.log("O " + this.tipo + " atacou usando " + ataque);
        break;
      case 'guerreiro':
        ataque = "espada";
        console.log("O " + this.tipo + " atacou usando " + ataque);
        break;
      case 'monge':
        ataque = "artes marciais";
        console.log("O " + this.tipo + " atacou usando " + ataque);
        break;
      case 'ninja':
        ataque = "shuriken";
        console.log("O " + this.tipo + " atacou usando " + ataque);
        break;
        }
    }

}

let mago = new Heroi ("Harry", 20, "mago");
let guerreiro = new Heroi ("José", 40, "guerreiro");
let monge = new Heroi ("Shin", 90, "monge");
let ninja = new Heroi ("Daniel Sam", 15, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();