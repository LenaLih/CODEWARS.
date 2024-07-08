function DNAtoRNA(dna) {
   let rna = dna.replace(/T/g, 'U');
   return rna;
}