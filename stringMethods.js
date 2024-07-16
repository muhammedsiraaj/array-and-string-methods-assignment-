// Javascript String methods

// In JavaScript, strings are used to represent text. To work with strings, JavaScript provides many built-in methods. 
// These methods search for parts of a string, extract pieces of a string, change the case of a string, and do other useful things.
//  Knowing these methods is important for handling and processing text in JavaScript.

// topic-1 concat:
// The concat method combines the text of two or more strings and returns a new string.

//example
const str1 = 'Hello'
const str2 = 'Kelvin'
const str3 = str1.concat(' ',str2)
console.log(str3); 

/////////////////////////////////////////////////

// topic-2 includes:
// The includes method checks if a string contains a specified substring and returns true or false.

//example
const str4 = 'Hello World'
const str5 = str4.includes('World')
console.log(str5);

/////////////////////////////////////////////////

// topic-3 indexOf:
// The indexOf method returns the position of the first occurrence of a specified value in a string.
// If the value is not found, it returns -1.

//example
const str6 = 'Hello World'
console.log(str6.indexOf('World'));

/////////////////////////////////////////////////

// topic-4 lastIndexOf:
// The lastIndexOf method returns the position of the last occurrence of a specified value in a string. 
// If the value is not found, it returns -1.

//example
const str7 = 'Welcome to Hello World'
console.log(str7.indexOf('World'));

/////////////////////////////////////////////////

// topic-5 padEnd:
// The padEnd method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. 
// The padding is applied from the end of the current string.

//example
const str8 = 'Hello'
console.log(str8.padEnd(8,'!'));

/////////////////////////////////////////////////

// topic-6 padStart:
// The padStart method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. 
// The padding is applied from the start of the current string.

//example 
const str9 = 'Hello'
console.log(str9.padStart(8,'!'));

/////////////////////////////////////////////////

// topic-7 repeat:
// The repeat method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

//example
const str10 = 'Hello, '
console.log(str10.repeat(3));

// topic-8 replace:
// The replace method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a regular expression, and the replacement can be a string or a function.

//example
const str11 = 'Hello World'
const str12 = str11.replace('World', 'Everyone')
console.log(str12);

/////////////////////////////////////////////////

// topic-9 search:
// The search method executes a search for a match between a regular expression and this String object.

//example
const str13 = 'Hello World'
console.log(str13.search('World'));

/////////////////////////////////////////////////

// topic-10 slice:
// The slice method extracts a section of a string and returns it as a new string,
// without modifying the original string.

//example
const str14 = 'Hello World'
const str15 = str14.slice(0,5)
console.log(str15);

/////////////////////////////////////////////////

// topic-11 split:
// The split method divides a string into an ordered list of substrings,
// puts these substrings into an array, and returns the array. 
// The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

//example
const str16 = 'Hello World'
const str17 = str16.split(' ')
console.log(str17);

/////////////////////////////////////////////////

// topic-12 startsWith:
// The startsWith method determines whether a string begins with the characters of a specified string,
// returning true or false.

//example
const str18 = 'Hello World'
console.log(str18.startsWith('Hello'));

/////////////////////////////////////////////////

// topic-13 substr:
// The substr method returns a portion of the string, 
// starting at the specified index and extending for a given number of characters afterward.

//example
const str19 = 'Hello World'
const str20 = str19.substr(6,5)
console.log(str20);

/////////////////////////////////////////////////

// topic-14 substring:
// The substring method returns the part of the string between the start and end indexes, or to the end of the string.

//example
const str21 = 'Hello World'
const str22 = str21.substring(6,12)
console.log(str22);

/////////////////////////////////////////////////

// topic-15 toLowerCase:
// The toLowerCase method returns the calling string value converted to lower case.

//example
const str23 = 'HELLO WORLD'
console.log(str23.toLowerCase());

/////////////////////////////////////////////////

// topic-16 toUpperCase:
// The toUpperCase method returns the calling string value converted to upper case.

//example
const str24 = 'hello world'
console.log(str24.toUpperCase());

/////////////////////////////////////////////////

// topic-17 trim:
// The trim method removes whitespace from both ends of a string and returns a new string, 
// without modifying the original string.

//example
const str25 ='   hello world   '
console.log(str25.trim());

/////////////////////////////////////////////////

// topic-18 trimEnd:
// The trimEnd (or trimRight) method removes whitespace from the end of a string.

//example 
const str26 = 'hello world    '
console.log(str26.trimEnd());

/////////////////////////////////////////////////

// topic-19 trimStart:
// The trimStart (or trimLeft) method removes whitespace from the beginning of a string.

//example 
const str27 = '   hello world'
console.log(str27.trimStart());

/////////////////////////////////////////////////

// topic-20 charAt:
// The charAt method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

//example
let str28 = "Hello, world!";
let char = str28.charAt(7);
console.log(char);

/////////////////////////////////////////////////

// topic-21 charCodeAt:
// The charCodeAt method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

//example 
let str29 = "Hello, world!";
let code = str29.charCodeAt(7);
console.log(code);

