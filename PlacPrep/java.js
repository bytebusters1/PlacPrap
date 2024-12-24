const quizData = [  {
    'que': 'What is the difference between JDK, JRE, and JVM?',
    'a': 'JDK is the Java Development Kit, JRE is the Java Runtime Environment, and JVM is the Java Virtual Machine.',
    'b': 'JDK includes JRE and development tools, JRE includes JVM and libraries, JVM executes Java bytecode.',
    'c': 'JDK is used for development, JRE is used for execution, JVM runs Java programs.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "polymorphism" in Java.',
    'a': 'Polymorphism allows methods to perform different tasks based on the object that invokes them.',
    'b': 'It is achieved through method overriding and method overloading.',
    'c': 'Polymorphism allows one interface to be used for a general class of actions.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the difference between "String", "StringBuilder", and "StringBuffer" in Java?',
    'a': 'String is immutable, StringBuilder and StringBuffer are mutable.',
    'b': 'StringBuilder is not synchronized, StringBuffer is synchronized.',
    'c': 'StringBuffer is thread-safe, StringBuilder is not.',
    'd': 'All of the above.',
    'correct': 'd'
},

{
    'que': 'Explain the concept of "inheritance" in Java.',
    'a': 'Inheritance allows one class to inherit the properties and methods of another class.',
    'b': 'It supports code reusability and method overriding.',
    'c': 'Java supports single inheritance through classes and multiple inheritance through interfaces.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the difference between "abstract class" and "interface" in Java?',
    'a': 'An abstract class can have method implementations, an interface cannot.',
    'b': 'A class can implement multiple interfaces but can extend only one abstract class.',
    'c': 'Abstract classes can have constructors, interfaces cannot.',
    'd': 'All of the above.',
    'correct': 'd'
} ,   
{
    'que': 'How does the "finally" block work in Java?',
    'a': 'The "finally" block is used for code that must always execute after a try-catch block.',
    'b': 'It executes even if an exception is thrown.',
    'c': 'It is typically used for resource cleanup.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "serialization" in Java.',
    'a': 'Serialization is the process of converting an object into a byte stream.',
    'b': 'It is used to save an object"s state to a file or send it over a network.',
    'c': 'It requires the class to implement the Serializable interface.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the difference between "checked" and "unchecked" exceptions?',
    'a': 'Checked exceptions are checked at compile-time, unchecked exceptions are checked at runtime.',
    'b': 'Checked exceptions must be handled with a try-catch block or declared with a throws clause.',
    'c': 'Unchecked exceptions are subclasses of RuntimeException.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "synchronized" keyword in Java?',
    'a': 'It is used to control access to a block of code or method by multiple threads.',
    'b': 'It ensures that only one thread can execute the synchronized block or method at a time.',
    'c': 'It helps prevent thread interference and consistency problems.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "method overloading" in Java.',
    'a': 'Method overloading allows multiple methods to have the same name but different parameters.',
    'b': 'It is achieved by changing the number of parameters or the type of parameters.',
    'c': 'It allows a class to provide multiple methods that perform similar tasks.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the difference between "ArrayList" and "LinkedList" in Java?',
    'a': 'ArrayList uses a dynamic array, LinkedList uses a doubly linked list.',
    'b': 'ArrayList provides faster random access, LinkedList provides faster insertion and deletion.',
    'c': 'ArrayList has a fixed size, LinkedList does not.',
    'd': 'Both a and b.',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "transient" keyword in Java?',
    'a': 'It is used to prevent a variable from being serialized.',
    'b': 'It ensures that the variable is not included in the serialized state of an object.',
    'c': 'It is used with instance variables.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "autoboxing" and "unboxing" in Java.',
    'a': 'Autoboxing is the automatic conversion of primitive types to their corresponding wrapper classes.',
    'b': 'Unboxing is the automatic conversion of wrapper classes to their corresponding primitive types.',
    'c': 'Both autoboxing and unboxing are done automatically by the compiler.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the "final" keyword in Java?',
    'a': 'It is used to declare constants (variables that cannot be changed).',
    'b': 'It prevents a method from being overridden.',
    'c': 'It prevents a class from being subclassed.',
    'd': 'All of the above.',
    'correct': 'd'
},
    {
    'que': 'What is the difference between "HashMap" and "TreeMap" in Java?',
    'a': 'HashMap is backed by a hash table, TreeMap is backed by a red-black tree.',
    'b': 'HashMap does not guarantee any order of elements, TreeMap maintains a sorted order.',
    'c': 'HashMap is faster for insertions and lookups, TreeMap provides ordered traversal.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "reflection" in Java.',
    'a': 'Reflection allows inspecting and manipulating classes, methods, and fields at runtime.',
    'b': 'It is used for accessing private members and methods.',
    'c': 'Reflection can be used to create instances of classes dynamically.',
    'd': 'All of the above.',
    'correct': 'd'
},
{
    'que': 'What is the difference between "wait" and "sleep" methods in Java?',
    'a': 'wait is used for inter-thread communication, sleep pauses the execution of the current thread.',
    'b': 'wait must be called from a synchronized context, sleep does not require synchronization.',
    'c': 'wait releases the lock on the object, sleep does not.',
    'd': 'All of the above.',
    'correct': 'd'
},
    {
    'que': 'What is the purpose of the "default" keyword in Java interfaces?',
    'a': 'It is used to provide a default implementation for a method in an interface.',
    'b': 'It allows interfaces to have concrete methods.',
    'c': 'It enables backward compatibility for existing interfaces.',
    'd': 'All of the above.',
    'correct': 'd'
},
    {
    'que': 'Explain the concept of "lambda expression" in Java.',
    'a': 'Lambda expressions provide a way to represent anonymous functions.',
    'b': 'They enable functional programming by allowing you to pass behavior as an argument.',
    'c': 'Lambda expressions are used primarily to define the behavior of functional interfaces.',
    'd': 'All of the above.',
    'correct': 'd'
},
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