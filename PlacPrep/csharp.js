const quizData = [ {
    'que': 'Explain the difference between "const" and "readonly" in C#.',
    'a': 'Const is for compile-time constants, readonly is for runtime constants.',
    'b': 'Const can be assigned only at the declaration, readonly can be assigned in the constructor.',
    'c': 'Const is static by default, readonly is not.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What are the different types of inheritance in C#?',
    'a': 'Single, Multiple, Multilevel',
    'b': 'Single, Multilevel, Hierarchical',
    'c': 'Single, Multiple, Hierarchical',
    'd': 'Multilevel, Multiple, Hierarchical',
    'correct': 'b'
},
{
    'que': 'What is the purpose of the "using" statement in C#?',
    'a': 'It ensures the disposal of resources.',
    'b': 'It is used for importing namespaces.',
    'c': 'Both a and b',
    'd': 'None of the above',
    'correct': 'c'
},
{
    'que': 'Explain the concept of Boxing and Unboxing in C#.',
    'a': 'Boxing is converting a value type to an object type.',
    'b': 'Unboxing is converting an object type back to a value type.',
    'c': 'Both a and b',
    'd': 'None of the above',
    'correct': 'c'
},
{
    'que': 'What is the difference between "Array" and "ArrayList" in C#?',
    'a': 'Array is of fixed size, ArrayList can grow dynamically.',
    'b': 'Array can store only specific data types, ArrayList can store any data type.',
    'c': 'Array provides better performance than ArrayList.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Explain the concept of Delegates in C#.',
    'a': 'Delegates are type-safe function pointers.',
    'b': 'Delegates allow methods to be passed as parameters.',
    'c': 'Delegates can be chained together.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "async" and "await" keywords in C#?',
    'a': 'They are used to write asynchronous code.',
    'b': 'They allow the program to run tasks in the background.',
    'c': 'They improve the responsiveness of the application.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What are the differences between an Interface and an Abstract Class in C#?',
    'a': 'An interface cannot have any implementation, while an abstract class can.',
    'b': 'A class can implement multiple interfaces, but only inherit one abstract class.',
    'c': 'Abstract classes can have constructors, interfaces cannot.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is LINQ and why is it used?',
    'a': 'Language Integrated Query.',
    'b': 'Used for querying data from different data sources.',
    'c': 'Provides a consistent query experience.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "Garbage Collection" in C#.',
    'a': 'Garbage collection is the process of reclaiming memory occupied by objects that are no longer in use.',
    'b': 'It helps in managing memory automatically.',
    'c': 'It prevents memory leaks.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the difference between "IEnumerable" and "IQueryable" in C#?',
    'a': 'IEnumerable is used for in-memory querying, IQueryable is used for remote querying.',
    'b': 'IEnumerable executes the query when iterated over, IQueryable executes the query on the server.',
    'c': 'IQueryable supports lazy loading, IEnumerable does not.',
    'd': 'Both a and b',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "Dependency Injection" in C#.',
    'a': 'Dependency Injection is a design pattern used for achieving Inversion of Control.',
    'b': 'It allows the creation of dependent objects outside of a class.',
    'c': 'It helps in making the code more modular and testable.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the difference between "Task" and "Thread" in C#?',
    'a': 'Task is a higher-level abstraction than Thread.',
    'b': 'Task represents an asynchronous operation, Thread represents an actual OS-level thread.',
    'c': 'Tasks can be easily chained and managed, Threads require more manual management.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "Nullable Types" in C#.',
    'a': 'Nullable types allow value types to represent null values.',
    'b': 'They are declared using "?" after the type.',
    'c': 'They provide a way to handle undefined values.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the "yield" keyword used for in C#?',
    'a': 'Yield is used in an iterator block to return each element one at a time.',
    'b': 'It allows the method to be paused and resumed.',
    'c': 'It simplifies the creation of custom iterators.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the difference between "lock" and "Monitor" in C#?',
    'a': 'Lock is a shorthand syntax for Monitor.',
    'b': 'Monitor provides more control over synchronization.',
    'c': 'Lock is easier to use, Monitor offers more advanced features.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "Extension Methods" in C#.',
    'a': 'Extension methods allow adding new methods to existing types without modifying them.',
    'b': 'They are defined as static methods.',
    'c': 'They use the "this" keyword as the first parameter.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What are the differences between "Event" and "Delegate" in C#?',
    'a': 'Delegates are function pointers, events are a way to provide notifications.',
    'b': 'Events are built on delegates.',
    'c': 'Events provide a layer of abstraction over delegates.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Explain the purpose of the "dynamic" keyword in C#.',
    'a': 'The dynamic keyword allows for late binding.',
    'b': 'It defers type checking to runtime.',
    'c': 'It is useful for scenarios where type information is not known at compile time.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "async" and "await" keywords in C#?',
    'a': 'They are used to write asynchronous code.',
    'b': 'They improve the responsiveness of the application.',
    'c': 'They allow the program to run tasks in the background.',
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