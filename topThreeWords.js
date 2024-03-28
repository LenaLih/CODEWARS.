function topThreeWords(text) {
   const wordCounts = {};
     (text.toLowerCase().match(/\b(?:[a-z]+'?)+\b/g) || []).forEach(word => wordCounts[word] = -~wordCounts[word]);
     return Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]).slice(0, 3).filter(word => wordCounts[word] > 0)
 }