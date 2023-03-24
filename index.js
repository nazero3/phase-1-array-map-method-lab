const tutorials = [
  "what does the this keyword mean?",
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const t = tutorials.map(function (ele) {
    let words = ele.split(" ");
    let capWords = words.map(
      (word) => word.at(0).toUpperCase() + word.substring(1)
    );
    let sentence = '';
    for (let i of capWords){
      sentence += i + ' ';
    }
    console.log(sentence);
    return sentence.substring(0,sentence.length-1);
  });
  console.log(t);
  return t;
};
titleCased(tutorials);
