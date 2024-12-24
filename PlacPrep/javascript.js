const quizData = [ {
    'que': 'Which of the following is the correct syntax to declare a variable in JavaScript?',
    'a': 'var myVar',
    'b': 'declare myVar',
    'c': 'var = myVar',
    'd': 'let var myVar',
    'correct': 'a'
},
{
    'que': 'What will typeof null return in JavaScript?',
    'a': 'object',
    'b': 'null',
    'c': 'undefined',
    'd': 'error',
    'correct': 'a'
},
{
    'que': 'Which method is used to convert a string to an integer in JavaScript?',
    'a': 'parseInt()',
    'b': 'parseFloat()',
    'c': 'toInt()',
    'd': 'int()',
    'correct': 'a'
},
{
    'que': 'How can you add a comment in JavaScript?',
    'a': '// This is a comment',
    'b': '/* This is a comment */',
    'c': '# This is a comment',
    'd': 'Both a and b',
    'correct': 'd'
},
{
    'que': 'Which operator is used to compare both the value and type in JavaScript?',
    'a': '==',
    'b': '===',
    'c': '!=',
    'd': '==!',
    'correct': 'b'
},
{
    'que': 'Which of the following is NOT a JavaScript data type?',
    'a': 'String',
    'b': 'Boolean',
    'c': 'Character',
    'd': 'Number',
    'correct': 'c'
},
{
    'que': 'What is the correct way to create a function in JavaScript?',
    'a': 'function myFunc()',
    'b': 'create myFunc()',
    'c': 'function:myFunc()',
    'd': 'def myFunc()',
    'correct': 'a'
},
{
    'que': 'Which of the following is used to declare a constant in JavaScript?',
    'a': 'let',
    'b': 'const',
    'c': 'constant',
    'd': 'var',
    'correct': 'b'
},
{
    'que': 'What does the NaN value represent in JavaScript?',
    'a': 'Null',
    'b': 'Not a Number',
    'c': 'Not available',
    'd': 'Not a name',
    'correct': 'b'
},
{
    'que': 'What does the this keyword refer to in JavaScript?',
    'a': 'The global object',
    'b': 'The functions local variable',
    'c': 'The object in which the function is contained',
    'd': 'The parameter of a function',
    'correct': 'c'
},
{
    'que': 'Which loop is guaranteed to execute at least once in JavaScript?',
    'a': 'for',
    'b': 'while',
    'c': 'do-while',
    'd': 'foreach',
    'correct': 'c'
},
{
    'que': 'Which of the following is used to stop a loop in JavaScript?',
    'a': 'stop',
    'b': 'exit',
    'c': 'break',
    'd': 'continue',
    'correct': 'c'
},
{
    'que': 'What is the result of 0 == "0" in JavaScript?',
    'a': 'true',
    'b': 'false',
    'c': 'undefined',
    'd': 'error',
    'correct': 'a'
},
{
    'que': 'Which method is used to remove the last element from an array in JavaScript?',
    'a': 'pop()',
    'b': 'push()',
    'c': 'shift()',
    'd': 'unshift()',
    'correct': 'a'
},
{
    'que': 'Which keyword is used to declare a block-scoped variable in JavaScript?',
    'a': 'var',
    'b': 'let',
    'c': 'const',
    'd': 'block',
    'correct': 'b'
},
{
    'que': 'Which of the following is NOT a valid way to define an object in JavaScript?',
    'a': 'let obj = {}',
    'b': 'let obj = Object()',
    'c': 'let obj = new Object()',
    'd': 'let obj = []',
    'correct': 'd'
},
{
    'que': 'Which method is used to parse a JSON string into a JavaScript object?',
    'a': 'JSON.stringify()',
    'b': 'JSON.parse()',
    'c': 'JSON.objectify()',
    'd': 'JSON.parseObject()',
    'correct': 'b'
},
{
    'que': 'What is the default value of an uninitialized variable in JavaScript?',
    'a': 'undefined',
    'b': 'null',
    'c': 'NaN',
    'd': '0',
    'correct': 'a'
},
{
    'que': 'Which of the following methods is used to add one or more elements to the end of an array in JavaScript?',
    'a': 'append()',
    'b': 'push()',
    'c': 'insert()',
    'd': 'add()',
    'correct': 'b'
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