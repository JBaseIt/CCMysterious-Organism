// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let mutatingIndex = Math.floor(Math.random() * this.dna.length);
      let insertValue = returnRandBase();
      console.log(`The DNA base chosen was ${this.dna[mutatingIndex]} at index ${mutatingIndex}. \nIt will be changed to ${insertValue}.`);
      while (this.dna[mutatingIndex] === insertValue) {
        console.log(`The chosen mutation was: ${insertValue}.`);
        insertValue = returnRandBase();
        console.log(`It has now been changed to: ${insertValue}.`);
      };
      this.dna[mutatingIndex] = insertValue;
      return this.dna;
    },
    compareDna(pAequorObject) {
      let count = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequorObject.dna[i]) {
          count++;
        };
      };
      let percentage = count / this.dna.length * 100
      console.log(`P. aequor specimen #${this.specimenNum} shares ${percentage}% of their DNA with P. aequor specimen #${pAequorObject.specimenNum}.`);
    },
    willLikelySurvive() {
      let count = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          count++;
        };
      };
      if (count >= 9) {
        return true;
      } else {
        return false;
      }
    }
  }
  
};

let mockObject = pAequorFactory(1, mockUpStrand());
let nockObject = pAequorFactory(2, mockUpStrand());
console.log(mockObject.dna);
console.log(nockObject.dna);
console.log(mockObject.compareDna(nockObject));
console.log(mockObject.willLikelySurvive());
console.log(nockObject.willLikelySurvive());

let wLSArr = [] //wLSArr = will Likely Survive Array
let n = 0
while (wLSArr.length < 30 && n < 200) {
  let chSpNus = []; //chSpNu = chosen Specimen Numbers
  let SpNu = Math.floor(Math.random() * 200); //SpecimenNumber to populate wLSArr
  if (chSpNus.indexOf(SpNu) !== -1) { //ensures no two specimens share the same number
    SpNu = Math.floor(Math.random() * 200)
  }
  let SpNa = 'pAequor' + n;
  SpNa = pAequorFactory(SpNu, mockUpStrand());
  if (SpNa.willLikelySurvive() === true) {
    wLSArr.push(SpNa);
  };
  n++;
};
console.log(wLSArr.length,'\n',n);








