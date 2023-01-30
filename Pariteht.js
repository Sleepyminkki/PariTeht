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
       this.puhelinM = merkki;
     }
     malli() {
       return "Minulla on " + this.puhelinM;
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
 
   let kokoPuhelin = new Koko("Samsung", "vihreä", "18cm");
   console.log(kokoPuhelin.malli());
   console.log(kokoPuhelin.vari());
   console.log(kokoPuhelin.kaikki());