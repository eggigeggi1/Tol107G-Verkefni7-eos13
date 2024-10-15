/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á
/**
 * Fallið tekur inn streng og skilar lengsta orðinu í strengnum.
 * Skilar tómum streng ef strengurinn er tómur.
 * Skilar null ef strengurinn er ekki strengur
 * @param {string} str Strengur sem skal finna lengsta orðið í 
 */
function longest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str);

  if (words.length == 0) {
    return '';
  }

  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Prófum fallið
console.assert(longest('a aa aaa') === 'aaa', 'longest: skilar aaa eða lengsta orðinu í strengnum');
console.assert(longest(42) === null, 'longest: skilar null fyrir annað en strengi');
console.assert(shortest('') === '', 'longest: skilar tómum streng ef strengurinn er tómur');

/**
 * Fallið tekur inn streng og skilar stysta orðinu í strengnum.
 * Skilar tómum streng ef strengurinn er tómur.
 * Skilar null ef strengurinn er ekki strengur
 * @param {string} str strengur sem skal finna stysta orðið í
 * @returns streng með stysta orðinu
 */
function shortest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str);

  if (words.length == 0) {
    return '';
  }

  let shortestWord = words[0];

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

// Prófum fallið
console.assert(shortest('a aa aaa') === 'a', 'shortest: skilar a eða stysta orðinu í strengnum');
console.assert(shortest(42) === null, 'shortest: skilar null fyrir annað en strengi');
console.assert(shortest('') === '', 'shortest: skilar tómum streng ef strengurinn er tómur');

/**
 * Tekur inn streng og skilar öfugum streng.
 * Skilar tómum streng ef strengurinn er tómur.
 * Skilar null ef strengurinn er ekki strengur
 * @param {string} str strengur sem á að setja afturábak 
 * @returns öfugur strengur
 **/
function reverse(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str);

  if (words.length == 0) {
    return '';
  }

  const string = str.split('').reverse();

  return string.join('');
}

// Prófum fallið
console.assert(reverse('Hallo') === 'ollaH', 'reverse: skilar öfugum streng');
console.assert(reverse(42) === null, 'reverse: skilar null fyrir annað en strengi');
console.assert(reverse('') === '', 'reverse: skilar tómum streng ef strengurinn er tómur');

/**
 * Tekur inn streng og skilar true ef strengurinn er palindrome.
 * Skilar false ef strengurinn er tómur
 * Skilar false ef strengurinn er ekki strengur.
 * @param {String} str strengur sem skal skoða hvort er palindrome
 * @returns true ef strengur er palindrome
 */
function palindrome(str) {
  if (!isString(str)) {
    return false;
  }

  if (str.trim('') == '') {
    return false;
  }

  const lowerString = str.toLowerCase();

  const reverseString = reverse(lowerString);

  return lowerString == reverseString;
}
console.assert(palindrome('Hallo') === false, 'palindrome: skilar false ef strengurinn er ekki palindrome');
console.assert(palindrome('Halloollah') === true, 'palindrome: skilar true ef strengurinn er palindrome');
console.assert(palindrome(42) === false, 'palindrome: skilar false fyrir annað en strengi');
console.assert(palindrome('') === false, 'palindrome: skilar false ef strengurinn er tómur');

/**
 * Skoðar hversu margir sérhljóðar eru í streng
 * Skilar 0 ef strengurinn er tómur eða ekki strengur.
 * @param {String} str strengur sem skal telja sérhljóða í
 * @returns tölu á sérhljóðum
 */
function vowels(str) {
  if (!isString(str)) {
    return 0;
  }

  let count = 0;
  const letters = str.split('');

  for (const letter of letters) {
    if (VOWELS.includes(letter.toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.assert(vowels('Hallo') === 2, 'vowels: skilar tölu á sérhljóðum í streng');
console.assert(vowels(42) === 0, 'vowels: skilar 0 fyrir annað en strengi');
console.assert(vowels('') === 0, 'vowels: skilar 0 ef strengurinn er tómur');

/**
 * Skoðar hversu margir samhljóðar eru í streng.
 * Skilar 0 ef strengurinn er tómur eða ekki strengur.
 * @param {string} str strengur sem skal telja samhljóða í 
 * @returns tölu á samhljóðum
 */
function consonants(str) {
  if (!isString(str)) {
    return 0;
  }

  let count = 0;
  const letters = str.split('');

  for (const letter of letters) {
    if (CONSONANTS.includes(letter.toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.assert(consonants('Hallo') === 3, 'consonants: skilar tölu á sérhljóðum í streng');
console.assert(consonants(42) === 0, 'consonants: skilar 0 fyrir annað en strengi');
console.assert(consonants('') === 0, 'consonants: skilar 0 ef strengurinn er tómur');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Sláðu inn streng, og forritið birtir þér lengsta orðið, stysta orðið, öfugan texta, tölu á sérhljóðum og samhljóðum og hvort textinn sé palindrome(samhverfa)");

  const input = prompt("Sláðu inn streng: ");

  if (input != null && input != '') {
    const longestWord = longest(input);
    const shortestWord = shortest(input);
    const reverseString = reverse(input);
    const vowelCount = vowels(input);
    const consonantCount = consonants(input);
    const isPalindrome = palindrome(input);

    alert(`
      Lengsta orðið: ${longestWord}
      Stysta orðið: ${shortestWord}
      Strengurinn öfugur: ${reverseString}
      Fjöldi sérhljóða: ${vowelCount}
      Fjöldi samhljóða: ${consonantCount}
      Er þetta palindrome(samhverfa)?: ${isPalindrome}
      `);
    
    console.info("Niðurstöður:");
    console.info(`Lengsta orðið: ${longestWord}`);
    console.info(`Stysta orðið: ${shortestWord}`);
    console.info(`Strengurinn snúinn við: ${reverseString}`);
    console.info(`Fjöldi sérhljóða: ${vowelCount}`);
    console.info(`Fjöldi samhljóða: ${consonantCount}`);
    console.info(`Er palindrome? ${isPalindrome}`);

    const again = confirm('Viltu prufa annan streng?');
    
    if(again) {
      start();
    }
  }

  else {
    console.error('Strengur var ekki sleginn inn eða notandi hætti við.');
  }
}
