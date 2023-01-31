let olio = {
  2: 19,
  5.3: "peruna",
  työpöytä: "työpöytä",
  työpöytä123: "toimii",
 }
 //123työpöytä ei voi olla olion ominaisuus

 console.log(olio[2]);
 console.log(olio[5.3]);
 console.log(olio.työpöytä);
 console.log(olio.työpöytä123);

    //vaihtaa olion kentän tarkoituksen
  Object.defineProperty(olio, "kenttä", {writable: true});
 olio.kenttä = "vaihdu";
 console.log(olio.kenttä);

  //Konsruktorilla voit antaa ominaisuuksille montaa eri arvoa, ilman että ne sekoittaa toisiaan.
 function Tyyppi(first, last, age, eye) {
 this.firstName = first;
 this.lastName = last;
 this.age = age;
 this.eyeColor = eye;
}
 const dude = new Tyyppi("Kalle", "Niinistö", 19, "Sininen");
 dude.height = "100cm";
 console.log(dude);

 const dude2 = new Tyyppi("Risto", "Räppääjä", 5, "Vihreät");
 console.log(dude2);

  //Periytymisellä pystyy käyttämään koodia uudelleen, lisätä siihen ja muokata sitä.
 class Puhelin {
   constructor(merkki) {
     this.merkki = merkki;
   }
   malli() {
     return "Minulla on " + this.merkki;
   }
 }

 class Väri extends Puhelin {
   constructor(merkki, väri) {
     super(merkki);
     this.väri = väri;
   }
   vari() {
     return this.malli() + ", se on " + this.väri;
   }
 }

 class Koko extends Väri {
   constructor(merkki, väri, koko) {
     super(merkki, väri);
     this.koko = koko;
   }
   kaikki() {
     return this.malli() + ", se on " + this.väri + ". Sen koko on " + this.koko;
   }
 }

 let kokoPuhelin = new Koko("Samsung", "vihreä", "29cm²");
 console.log(kokoPuhelin.malli());
 console.log(kokoPuhelin.vari());
 console.log(kokoPuhelin.kaikki());





 // Kapselointi
 
  class Auto {
    #age;
    constructor(model, color) {
      this.model = model;
      this.color = color;
      this.#age = this.getYear();
    }
    setColor(color) {
      this.color = color;
    }
    getColor() {
      return this.color;
    }
    getYear() {
      return 2023;
    }

    getAll() {
      console.log(this.model);
      console.log(this.color);
      console.log(this.#age);
    }
  }

  mersu = new Auto("mersu", "green");
  mersu.getAll();

  mersu.color = "white";
  mersu.getAll();

  mersu.age = 1234;
  mersu.getAll();

  const oppilas = {
    nimi: "Jaakko",
    ika: 18,
    silmienvari: "sininen"
  }

  // Lisää ominaisuuden
  oppilas.arvosana = "10";

  // Poistaa ominaisuuden
  delete oppilas.ika

  var teksti = document.getElementById("ominaisuuksia").innerHTML = 
  "Nimi: " + oppilas.nimi + " Ikä: " + oppilas.ika + " Silmienväri: " + oppilas["silmienvari"] + " Arvosana: " + oppilas["arvosana"];









 //testi
 function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

function kysy() {
      etunimi = String(document.getElementsByClassName("etunimi")[0].value);
      sukunimi = String(document.getElementsByClassName("sukunimi")[0].value);
      ika = String(document.getElementsByClassName("ika")[0].value);
      silmavari = String(document.getElementsByClassName("silmanvari")[0].value);

      console.log(etunimi, sukunimi, ika, silmavari)

      var kayttaja = new Person(etunimi, sukunimi, ika, silmavari)

      console.log(kayttaja)

      document.getElementById("tulokset").innerHTML = kayttaja.firstName + ", " + kayttaja.lastName +
      ", " + kayttaja.age + ", " + kayttaja.eyeColor;
}




//
const henkilo = {
nimi: "kalle",
ika: 18,
silmienvari: "siniset"
}
console.log(henkilo)

class Visitor {
constructor(name) {
  this.name = name;
}
present() {
  return 'Name is ' + this.name;
}
}

class Employee extends Visitor {
constructor(name, age) {
  super(name);
  this.age = age;
}
show() {
  return this.present() + ', Age ' + this.age;
}
}

visitor = new Visitor("Jussi");
console.log(visitor.present());

employee = new Employee("Jaska",20);
console.log(employee.show());