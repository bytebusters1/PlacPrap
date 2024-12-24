const quizData = [  {

    'que': 'What is the difference between class selectors and ID selectors in CSS?',

    'a': 'Class selectors are defined using a dot (.) and can be reused.',

    'b': 'ID selectors are defined using a hash (#) and must be unique.',

    'c': 'Class selectors are for styling multiple elements, ID selectors are for styling a single element.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'Explain the concept of CSS specificity.',

    'a': 'CSS specificity determines which styles are applied to an element.',

    'b': 'Specificity is calculated based on the types of selectors used.',

    'c': 'The more specific a selector, the higher its specificity.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'What is the difference between "display: none" and "visibility: hidden" in CSS?',

    'a': '"display: none" removes an element from the document flow, "visibility: hidden" keeps the element in the flow but makes it invisible.',

    'b': '"display: none" makes the element unclickable, "visibility: hidden" does not.',

    'c': '"display: none" affects the layout of the page, "visibility: hidden" does not.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'How do you create a flexbox container in CSS?',

    'a': 'Using the "display: flex" property.',

    'b': 'Using the "display: block" property.',

    'c': 'Using the "flex-direction" property.',

    'd': 'Using the "display: grid" property.',

    'correct': 'a'

},

{

    'que': 'Explain the difference between "margin" and "padding" in CSS.',

    'a': 'Margin is the space outside an elemen"s border, padding is the space inside the border.',

    'b': 'Margin can collapse, padding cannot.',

    'c': 'Both a and b.',

    'd': 'Margin affects the spacing between elements, padding affects the spacing within an element.',

    'correct': 'c'

},

{

    'que': 'What is the purpose of the "box-sizing" property in CSS?',

    'a': 'It defines how the total width and height of an element are calculated.',

    'b': 'It specifies whether padding and border are included in the elemens width and height.',

    'c': 'Values include "content-box" and "border-box".',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'How do you create a CSS grid container?',

    'a': 'Using the "display: grid" property.',

    'b': 'Using the "grid-template-rows" property.',

    'c': 'Using the "flex-direction" property.',

    'd': 'Using the "display: flex" property.',

    'correct': 'a'

},

{

    'que': 'Explain the concept of "media queries" in CSS.',

    'a': 'Media queries are used for applying styles based on the devic"s characteristics.',

    'b': 'They are used for responsive design.',

    'c': 'Media queries can target width, height, orientation, and resolution.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'What is the difference between "absolute" and "relative"" positioning removes an element from the document flow, "relative" positioning keeps it in the flow.',

    'b': '"absolute" positioning is relative to the nearest positioned ancestor, "relative" positioning is relative to its normal position.',

    'c': 'Both a and b.',

    'd': '"absolute" positioning affects the layout of other elements, "relative" positioning does not.',

    'correct': 'c'

},

{

    'que': 'How do you create a CSS animation?',

    'a': 'Using the "@keyframes" rule to define the animation.',

    'b': 'Applying the "animation" property to the element.',

    'c': 'Specifying the duration, timing function, and other properties.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'Explain the concept of "pseudo-classes" in CSS.',

    'a': 'Pseudo-classes are used to define the special states of an element.',

    'b': 'Examples include ":hover", ":focus", ":first-child".',

    'c': 'Pseudo-classes can be used for styling elements based on their state.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'What is the purpose of the "z-index" property in CSS?',

    'a': 'It controls the stacking order of elements.',

    'b': 'Higher z-index values are stacked above lower values.',

    'c': 'It works only on positioned elements.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'How do you create a responsive layout using CSS?',

    'a': 'Using media queries to apply different styles based on device characteristics.',

    'b': 'Using flexible grid and flexbox layouts.',

    'c': 'Using relative units like percentages and ems.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'Explain the concept of "inheritance" in CSS.',

    'a': 'Inheritance determines how styles are passed from parent elements to child elements.',

    'b': 'Some properties are inherited by default, others are not.',

    'c': 'Inherited properties can be overridden by more specific styles.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'What is the difference between "inline", "inline-block", and "block" display values?',

    'a': '"inline" elements do not start on a new line and cannot have width or height.',

    'b': '"block" elements start on a new line and take up the full width available.',

    'c': '"inline-block" elements do not start on a new line but can have width and height.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'How do you apply a CSS transition to an element?',

    'a': 'Using the "transition" property to specify the duration, timing function, and properties to animate.',

    'b': 'Applying the transition property to the element that will change.',

    'c': 'Using shorthand syntax for multiple properties.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'What is the purpose of the "float" property in CSS?',

    'a': 'It is used to position elements to the left or right of their container.',

    'b': 'Floated elements are removed from the normal document flow.',

    'c': 'It is often used for creating multi-column layouts.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'Explain the concept of "CSS preprocessors".',

    'a': 'CSS preprocessors extend CSS with variables, mixins, and functions.',

    'b': 'Popular preprocessors include Sass, LESS, and Stylus.',

    'c': 'They compile to standard CSS.',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'How do you center an element horizontally and vertically using CSS?',

    'a': 'Using flexbox: "display: flex; justify-content: center; align-items: center;".',

    'b': 'Using grid: "display: grid; place-items: center;".',

    'c': 'Using absolute positioning and "transform: translate(-50%, -50%);".',

    'd': 'All of the above',

    'correct': 'd'

},

{

    'que': 'What is the purpose of the "clip-path" property in CSS?',

    'a': 'It defines a clipping region for an element.',

    'b': 'It can create various shapes like circles, polygons, and more.',

    'c': 'It is used for creating complex visual effects.',

    'd': 'All of the above',

    'correct': 'd'

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