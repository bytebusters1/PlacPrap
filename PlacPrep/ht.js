const quizData = [ {

    'que': 'What is the purpose of the <!DOCTYPE html> declaration in HTML?',

    'a': 'It defines the document type and version of HTML.',

    'b': 'It is used to link external stylesheets.',

    'c': 'It specifies the character encoding for the HTML document.',

    'd': 'It defines the root element of an HTML document.',

    'correct': 'a'

},

{

    'que': 'Explain the difference between <div> and <span> tags in HTML.',

    'a': '<div> is a block-level element, <span> is an inline element.',

    'b': '<div> is used for grouping content, <span> is used for styling text.',

    'c': 'Both a and b.',

    'd': '<div> is used for text formatting, <span> is used for creating hyperlinks.',

    'correct': 'c'

},

{

    'que': 'What is the purpose of the <meta> tag in HTML?',

    'a': 'It provides metadata about the HTML document.',

    'b': 'It is used for linking external JavaScript files.',

    'c': 'It specifies the documents title.',

    'd': 'It is used for creating forms.',

    'correct': 'a'

},

{

    'que': 'How do you create an unordered list in HTML?',

    'a': 'Using the <ol> tag.',

    'b': 'Using the <ul> tag.',

    'c': 'Using the <li> tag.',

    'd': 'Using the <dl> tag.',

    'correct': 'b'

},

{

    'que': 'What is the purpose of the <header> tag in HTML?',

    'a': 'It defines the header section of a document or section.',

    'b': 'It is used to create a heading.',

    'c': 'It specifies the main content of the document.',

    'd': 'It is used for linking external stylesheets.',

    'correct': 'a'

},

{

    'que': 'Explain the difference between <strong> and <b> tags in HTML.',

    'a': '<strong> is used for strong emphasis, <b> is used for bold text without emphasis.',

    'b': '<strong> is a semantic tag, <b> is a presentational tag.',

    'c': 'Both a and b.',

    'd': '<strong> is used for styling text, <b> is used for creating bold hyperlinks.',

    'correct': 'c'

},

{

    'que': 'How do you create a hyperlink in HTML?',

    'a': 'Using the <link> tag.',

    'b': 'Using the <a> tag.',

    'c': 'Using the <href> tag.',

    'd': 'Using the <nav> tag.',

    'correct': 'b'

},

{

    'que': 'What is the purpose of the <form> tag in HTML?',

    'a': 'It is used for creating interactive forms.',

    'b': 'It is used for embedding multimedia content.',

    'c': 'It is used for defining headings.',

    'd': 'It is used for linking external scripts.',

    'correct': 'a'

},

{

    'que': 'Explain the difference between <table> and <div> tags in HTML.',

    'a': '<table> is used for creating tabular data, <div> is used for grouping content.',

    'b': '<table> is a block-level element, <div> is an inline element.',

    'c': '<table> is used for styling text, <div> is used for creating tables.',

    'd': 'Both a and b.',

    'correct': 'a'

},

{

    'que': 'What is the purpose of the <img> tag in HTML?',

    'a': 'It is used for embedding images.',

    'b': 'It is used for creating interactive forms.',

    'c': 'It is used for linking external stylesheets.',

    'd': 'It is used for defining sections of a document.',

    'correct': 'a'

},

{

    'que': 'How do you specify the character encoding for an HTML document?',

    'a': 'Using the <charset> attribute.',

    'b': 'Using the <meta> tag with the charset attribute.',

    'c': 'Using the <encoding> tag.',

    'd': 'Using the <doctype> declaration.',

    'correct': 'b'

},

{

    'que': 'What is the purpose of the <footer> tag in HTML?',

    'a': 'It defines the footer section of a document or section.',

    'b': 'It is used for creating hyperlinks.',

    'c': 'It specifies the main content of the document.',

    'd': 'It is used for linking external scripts.',

    'correct': 'a'

},

{

    'que': 'Explain the difference between <input> and <textarea> tags in HTML.',

    'a': '<input> is used for single-line input, <textarea> is used for multi-line input.',

    'b': '<input> is used for creating forms, <textarea> is used for creating tables.',

    'c': '<input> is a block-level element, <textarea> is an inline element.',

    'd': 'Both a and b.',

    'correct': 'a'

},

{

    'que': 'What is the purpose of the <nav> tag in HTML?',

    'a': 'It defines a set of navigation links.',

    'b': 'It is used for creating tables.',

    'c': 'It specifies the main content of the document.',

    'd': 'It is used for linking external stylesheets.',

    'correct': 'a'

},

{

    'que': 'How do you create a drop-down list in HTML?',

    'a': 'Using the <dropdown> tag.',

    'b': 'Using the <select> tag.',

    'c': 'Using the <list> tag.',

    'd': 'Using the <form> tag.',

    'correct': 'b'

},

{

    'que': 'What is the purpose of the <section> tag in HTML?',

    'a': 'It defines a section in a document.',

    'b': 'It is used for creating hyperlinks.',

    'c': 'It specifies the documents title.',

    'd': 'It is used for linking external scripts.',

    'correct': 'a'

},

{

    'que': 'Explain the difference between <ol> and <ul> tags in HTML.',

    'a': '<ol> creates an ordered list, <ul> creates an unordered list.',

    'b': '<ol> creates a list with numbers, <ul> creates a list with bullets.',

    'c': 'Both a and b.',

    'd': '<ol> is used for grouping content, <ul> is used for styling text.',

    'correct': 'c'

},

{

    'que': 'How do you create an image map in HTML?',

    'a': 'Using the <map> and <area> tags.',

    'b': 'Using the <img> and <map> tags.',

    'c': 'Using the <map> and <link> tags.',

    'd': 'Using the <image> and <area> tags.',

    'correct': 'a'

},

{

    'que': 'What is the purpose of the <article> tag in HTML?',

    'a': 'It defines an independent, self-contained content.',

    'b': 'It is used for creating forms.',

    'c': 'It specifies the documents metadata.',

    'd': 'It is used for linking external scripts.',

    'correct': 'a'

},

{

    'que': 'Explain the difference between <header> and <footer> tags in HTML.',

    'a': '<header> defines the header section, <footer> defines the footer section.',

    'b': '<header> is used for creating headings, <footer> is used for creating links.',

    'c': 'Both a and b.',

    'd': '<header> is used for defining sections, <footer> is used for defining tables.',

    'correct': 'a'

}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.que}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);