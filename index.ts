import { randomUUID } from "node:crypto";

interface FilmeDTO {
  nome: string;
  paisOrigem: string;
  duracao: number;
  genero: string;
}
class Filme {
  id: string;
  nome: string;
  paisOrigem: string;
  duracao: number;
  genero: string;
  elenco: Ator[] = [];
  diretores: Diretor[] = [];
  constructor(
    { duracao, genero, nome, paisOrigem }: FilmeDTO,
    elenco: Ator[],
    diretores: Diretor[]
  ) {
    this.id = randomUUID();
    this.nome = nome;
    this.paisOrigem = paisOrigem;
    this.duracao = duracao;
    this.genero = genero;
    this.elenco = elenco;
    this.diretores = diretores;
  }
}

// atores
class Ator {
  id: string;
  nome: string;
  idade: number;
  personalidade: string;
  constructor(nome: string, idade: number, personalidade: string) {
    this.id = randomUUID();
    this.nome = nome;
    this.idade = idade;
    this.personalidade = personalidade;
  }
}
const bradPitt = new Ator("Brad Pitt", 58, "Versátil e carismático");
const merylStreep = new Ator("Meryl Streep", 73, "Talentosa e versátil");
const leonardoDiCaprio = new Ator(
  "Leonardo DiCaprio",
  48,
  "Versátil e dedicado"
);
const jenniferLawrence = new Ator(
  "Jennifer Lawrence",
  33,
  "Carismática e talentosa"
);
const tomHanks = new Ator("Tom Hanks", 65, "Carismático e versátil");
const cateBlanchett = new Ator("Cate Blanchett", 53, "Elegante e talentosa");
const denzelWashington = new Ator(
  "Denzel Washington",
  68,
  "Carismático e versátil"
);
const nataliePortman = new Ator("Natalie Portman", 41, "Talentosa e dedicada");
const johnnyDepp = new Ator("Johnny Depp", 59, "Extravagante e versátil");
const emmaStone = new Ator("Emma Stone", 35, "Carismática e talentosa");
const spikeLee = new Ator("Spike Lee", 66, "Controverso e influente");
// atores

// diretores
class Diretor {
  ator: Ator;
  constructor(ator: Ator) {
    this.ator = ator;
  }
}
const quentinTarantino = new Diretor(
  new Ator("Quentin Tarantino", 59, "Visionário e ousado")
);
const christopherNolan = new Diretor(
  new Ator("Christopher Nolan", 53, "Intenso e inovador")
);
const martinScorsese = new Diretor(
  new Ator("Martin Scorsese", 80, "Mestre do cinema e apaixonado")
);
const stevenSpielberg = new Diretor(
  new Ator("Steven Spielberg", 75, "Pioneiro e talentoso")
);

// diretores

const filmes: Filme[] = [
  new Filme(
    {
      nome: "Pulp Fiction",
      paisOrigem: "Estados Unidos",
      duracao: 154,
      genero: "Crime",
    },
    [bradPitt, merylStreep, leonardoDiCaprio],
    [quentinTarantino]
  ),
  new Filme(
    {
      nome: "Inception",
      paisOrigem: "Estados Unidos",
      duracao: 148,
      genero: "Ficção científica",
    },
    [leonardoDiCaprio, tomHanks, cateBlanchett],
    [christopherNolan]
  ),
  new Filme(
    {
      nome: "The Departed",
      paisOrigem: "Estados Unidos",
      duracao: 151,
      genero: "Crime",
    },
    [bradPitt, jenniferLawrence, nataliePortman],
    [martinScorsese]
  ),
  new Filme(
    {
      nome: "Jurassic Park",
      paisOrigem: "Estados Unidos",
      duracao: 127,
      genero: "Aventura",
    },
    [tomHanks, cateBlanchett, denzelWashington],
    [stevenSpielberg]
  ),
  new Filme(
    {
      nome: "Do the Right Thing",
      paisOrigem: "Estados Unidos",
      duracao: 120,
      genero: "Drama",
    },
    [spikeLee, nataliePortman, johnnyDepp],
    [new Diretor(spikeLee)]
  ),
  new Filme(
    {
      nome: "The Godfather",
      paisOrigem: "Estados Unidos",
      duracao: 175,
      genero: "Crime",
    },
    [bradPitt, merylStreep, leonardoDiCaprio],
    [quentinTarantino]
  ),
  new Filme(
    {
      nome: "Schindler's List",
      paisOrigem: "Estados Unidos",
      duracao: 195,
      genero: "Biografia",
    },
    [leonardoDiCaprio, tomHanks, cateBlanchett],
    [christopherNolan]
  ),
  new Filme(
    {
      nome: "Forrest Gump",
      paisOrigem: "Estados Unidos",
      duracao: 142,
      genero: "Drama",
    },
    [bradPitt, jenniferLawrence, nataliePortman],
    [martinScorsese]
  ),
  new Filme(
    {
      nome: "The Dark Knight",
      paisOrigem: "Estados Unidos",
      duracao: 152,
      genero: "Ação",
    },
    [tomHanks, cateBlanchett, denzelWashington],
    [stevenSpielberg]
  ),
  new Filme(
    {
      nome: "The Shawshank Redemption",
      paisOrigem: "Estados Unidos",
      duracao: 142,
      genero: "Drama",
    },
    [spikeLee, nataliePortman, johnnyDepp],
    [new Diretor(spikeLee)]
  ),
  new Filme(
    {
      nome: "The Matrix",
      paisOrigem: "Estados Unidos",
      duracao: 136,
      genero: "Ação",
    },
    [bradPitt, merylStreep, leonardoDiCaprio],
    [quentinTarantino]
  ),
  new Filme(
    {
      nome: "Goodfellas",
      paisOrigem: "Estados Unidos",
      duracao: 146,
      genero: "Crime",
    },
    [leonardoDiCaprio, tomHanks, cateBlanchett],
    [christopherNolan]
  ),
  new Filme(
    {
      nome: "The Silence of the Lambs",
      paisOrigem: "Estados Unidos",
      duracao: 118,
      genero: "Crime",
    },
    [bradPitt, jenniferLawrence, nataliePortman],
    [martinScorsese]
  ),
  new Filme(
    {
      nome: "Saving Private Ryan",
      paisOrigem: "Estados Unidos",
      duracao: 169,
      genero: "Guerra",
    },
    [tomHanks, cateBlanchett, denzelWashington],
    [stevenSpielberg]
  ),
  new Filme(
    {
      nome: "The Green Mile",
      paisOrigem: "Estados Unidos",
      duracao: 189,
      genero: "Drama",
    },
    [spikeLee, nataliePortman, johnnyDepp],
    [new Diretor(spikeLee)]
  ),
  new Filme(
    {
      nome: "The Pianist",
      paisOrigem: "Estados Unidos",
      duracao: 150,
      genero: "Drama",
    },
    [bradPitt, merylStreep, leonardoDiCaprio],
    [quentinTarantino]
  ),
  new Filme(
    {
      nome: "Gladiator",
      paisOrigem: "Estados Unidos",
      duracao: 155,
      genero: "Ação",
    },
    [leonardoDiCaprio, tomHanks, cateBlanchett],
    [christopherNolan]
  ),
  new Filme(
    {
      nome: "American History X",
      paisOrigem: "Estados Unidos",
      duracao: 119,
      genero: "Drama",
    },
    [bradPitt, jenniferLawrence, nataliePortman],
    [martinScorsese]
  ),
  new Filme(
    {
      nome: "The Usual Suspects",
      paisOrigem: "Estados Unidos",
      duracao: 106,
      genero: "Crime",
    },
    [spikeLee, nataliePortman, johnnyDepp],
    [new Diretor(spikeLee)]
  ),
  new Filme(
    {
      nome: "The Green Book",
      paisOrigem: "Estados Unidos",
      duracao: 130,
      genero: "Biografia",
    },
    [bradPitt, merylStreep, leonardoDiCaprio],
    [quentinTarantino]
  ),
  new Filme(
    {
      nome: "Schindler's List",
      paisOrigem: "Estados Unidos",
      duracao: 195,
      genero: "Drama",
    },
    [leonardoDiCaprio, tomHanks, cateBlanchett],
    [christopherNolan]
  ),
];

function MapReduce() {
  const map: Record<string, string[]> = {};
  // mapeia os diretores por genero
  for (const filme of filmes) {
    const diretores = filme.diretores.map((x) => x.ator.nome);
    if (map[filme.genero] === undefined) map[filme.genero] = [];
    map[filme.genero].push(...diretores);
  }
  const map2: Record<string, Record<string, number>> = {};
  // mapeia a quantidade de filmes por diretor
  for (const [key, diretores] of Object.entries(map)) {
    if (map2[key] === undefined) map2[key] = {};
    for (const diretor of diretores) {
      if (map2[key][diretor] === undefined) map2[key][diretor] = 0;
      map2[key][diretor]++;
    }
  }
  console.log(map)
  console.log(map2)
}
MapReduce();
