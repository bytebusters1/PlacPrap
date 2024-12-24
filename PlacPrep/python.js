const quizData = [ {
    'que': 'What is the difference between "deep copy" and "shallow copy" in Python?',
    'a': 'A deep copy creates a new object and recursively adds copies of nested objects.',
    'b': 'A shallow copy creates a new object but inserts references into it to the objects found in the original.',
    'c': 'Deep copy uses the deepcopy() function from the copy module.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "list comprehensions" in Python.',
    'a': 'List comprehensions provide a concise way to create lists.',
    'b': 'They consist of brackets containing an expression followed by a for clause.',
    'c': 'Optional if clauses can be included for filtering.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "self" keyword in Python?',
    'a': 'self represents the instance of the class.',
    'b': 'It is used to access variables and methods of the class.',
    'c': 'It is passed as the first parameter to instance methods.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'How does the "with" statement work in Python?',
    'a': 'The "with" statement simplifies exception handling by encapsulating common preparation and cleanup tasks.',
    'b': 'It is used with context managers that support the context management protocol.',
    'c': 'It ensures that resources are properly managed, such as opening and closing files.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the difference between "args" and "kwargs" in Python functions?',
    'a': '"*args" allows passing a variable number of non-keyword arguments.',
    'b': '"**kwargs" allows passing a variable number of keyword arguments.',
    'c': 'Both can be used in function definitions to handle dynamic arguments.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "decorators" in Python.',
    'a': 'Decorators are functions that modify the behavior of other functions or methods.',
    'b': 'They are applied using the "@" symbol above the function definition.',
    'c': 'They can be used to add functionality to existing code in a reusable way.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What are Python generators and how do they work?',
    'a': 'Generators are iterators that yield values one at a time using the "yield" keyword.',
    'b': 'They maintain state between iterations.',
    'c': 'They are more memory-efficient than lists for large datasets.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the Global Interpreter Lock (GIL) in Python?',
    'a': 'The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.',
    'b': 'It simplifies memory management but can be a bottleneck in CPU-bound programs.',
    'c': 'It allows only one thread to execute in the interpreter at any given time.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'How do you handle exceptions in Python?',
    'a': 'Using try-except blocks.',
    'b': 'The "try" block contains code that might raise an exception, and the "except" block handles the exception.',
    'c': 'Optional "else" and "finally" blocks can be used for additional control flow.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the difference between "append" and "extend" methods in a Python list.',
    'a': '"append" adds a single element to the end of the list.',
    'b': '"extend" adds all elements of an iterable to the end of the list.',
    'c': '"append" increases the list length by one, "extend" increases it by the number of elements in the iterable.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "lambda" keyword in Python?',
    'a': 'It is used to create small anonymous functions.',
    'b': 'Lambda functions can have any number of arguments but only one expression.',
    'c': 'They are often used as arguments to higher-order functions like map, filter, and sorted.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'How do you perform file I/O operations in Python?',
    'a': 'Using the "open" function to open a file.',
    'b': 'Reading from a file using methods like "read", "readline", and "readlines".',
    'c': 'Writing to a file using methods like "write" and "writelines".',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "duck typing" in Python.',
    'a': 'Duck typing is a type system where the type of an object is determined by its behavior (methods and properties) rather than its explicit type.',
    'b': 'It is based on the saying "If it looks like a duck and quacks like a duck, it s a duck".',
    'c': 'It allows for more flexible and dynamic code.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What are the different types of sequences in Python?',
    'a': 'Lists',
    'b': 'Tuples',
    'c': 'Strings',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'How do you create and use a dictionary in Python?',
    'a': 'Using curly braces {} with key-value pairs separated by colons.',
    'b': 'Accessing values using keys.',
    'c': 'Modifying dictionaries using methods like "update", "pop", and "clear".',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "iterators" and "iterables" in Python.',
    'a': 'An iterable is an object that can be iterated over (e.g., lists, tuples, strings).',
    'b': 'An iterator is an object that represents a stream of data.',
    'c': 'Iterators implement the iterator protocol with methods "_iter()" and "next_()".',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "pass" statement in Python?',
    'a': 'It is a null operation used as a placeholder in code blocks.',
    'b': 'It allows the code to run without any action being taken.',
    'c': 'It is useful in places where syntax requires a statement but no action is needed.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'How do you create a virtual environment in Python?',
    'a': 'Using the "venv" module: "python -m venv myenv".',
    'b': 'Activating the virtual environment using scripts like "activate" or "activate.bat".',
    'c': 'Deactivating the virtual environment using the "deactivate" command.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "generators" and "generator expressions" in Python.',
    'a': 'Generators are functions that yield values one at a time using the "yield" keyword.',
    'b': 'Generator expressions provide a concise way to create generators.',
    'c': 'They are more memory-efficient than list comprehensions for large datasets.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "zip" function in Python?',
    'a': 'The "zip" function combines multiple iterables into tuples.',
    'b': 'It creates an iterator that aggregates elements from each of the iterables.',
    'c': 'It is useful for parallel iteration over multiple sequences.',
    'd': 'All of the above.',
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