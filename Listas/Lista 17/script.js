//ex 1
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
    mostrarDetalhes() {
        console.log(`${this.titulo} ${this.autor} ${this.paginas}`)
    }
}
const livro1 = new Livro("O pequeno Principe", "Antoine de Saint-Exupéry", 136)
livro1.mostrarDetalhes();

//ex 2 -----------------------------------------------------------------------------
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor;
      }
    
      sacar(valor) {
        if (valor <= this.saldo) {
          this.saldo -= valor;
        } else {
          console.log("Saldo insuficiente.");
        }
      }
    
      verSaldo() {
        console.log(`Saldo de ${this.titular}: R$${this.saldo}`);
      }
    }
    const conta = new ContaBancaria("Maria", 100);
conta.verSaldo();       
conta.depositar(50);
conta.verSaldo();    
conta.sacar(70);
conta.verSaldo();       


//ex 3 -----------------------------------------------------------------------------
class Pet {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  
    falar() {
      if (this.especie = "cachorro") {
        console.log("Au au!");
      } else if (this.especie = "gato") {
        console.log("Miau!");
    }
  }
}
const pet1 = new Pet("Rex", "cachorro", 5);
const pet2 = new Pet("Mimi", "gato", 3);

pet1.falar();  
pet2.falar();  


//ex 4 -----------------------------------------------------------------------------
class Filme {
    constructor(titulo, genero, duracao) {
      this.titulo = titulo;
      this.genero = genero;
      this.duracao = duracao;
    }
  
    assistir() {
      console.log(`Você está assistindo "${this.titulo}", que dura ${this.duracao} minutos.`);
    }
  }
  const filme1 = new Filme("Interestelar", "Ficção Científica", 169);
filme1.assistir();  

//ex 5 ----------------------------------------------------------------------------------------
class Musica {
    constructor(titulo, artista, tempo) {
      this.titulo = titulo;
      this.artista = artista;
      this.tempo = tempo;
    }
  
    tocar() {
      console.log(`Tocando '${this.titulo}' de ${this.artista}.`);
    }
  }
  const musica1 = new Musica("Shape of You", "Ed Sheeran", 240);
musica1.tocar(); 
