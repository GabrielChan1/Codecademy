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

function pAequorFactory(num, dnaArr) {
  return {
    _specimenNum: num,
    _dna: dnaArr,

    mutate() {
      const index = Math.floor(Math.random() * 15);
      const initialStrain = this._dna[index];
      do {
        let newStrain = returnRandBase();
      } while (newStrain === initialStrain);
      this._dna[index] = newStrain;
    },
    compareDNA(pAequor) {
      let matchingDna = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === pAequor._dna[i]) {
          matchingDna++;
        }
      }
      console.log(`Specimens #${this._specimenNum} and #${pAequor._specimenNum} have 
        ${(matchingDna / 15) * 100}% DNA in common`);
    },
    willLikelySurvive() {
      let durableBases = 0;
      for (const base of this._dna) {
        if (base === 'C' || base === 'G') {
          durableBases++;
        }
      }
      return durableBases / 15 >= .6;
    }
  };
}

const pAequorCollection = [];
for (let i = 1; i <= 30; i++) {
  pAequorCollection.push(pAequorFactory(i, mockUpStrand()));
}






