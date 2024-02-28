// Search any keywords from multiple words/string
const lyrics = 'Tumi Bondhu Kala Pakhi, Ami jeno Ki';

// string is case sensitive. we need to put exact word inside includes otherwise it will show false
// const doesExist = lyrics.includes('Pakhi');
// console.log(doesExist);

const searchString = 'pakhi';
const lyricsLowerCase = lyrics.toLowerCase();
const sslowercase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
console.log(doesExist);

// ------------------------
// search by indexOf

// console.log(lyrics.indexOf('Kala'));
