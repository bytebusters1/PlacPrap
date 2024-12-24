const quizData = [   {
    'que': 'Explain RAII and how it is used to manage resources in C++.',
    'a': 'Resource Allocation Is Initialization',
    'b': 'Release And Initiate Instance',
    'c': 'Resource Abstraction Is Indispensable',
    'd': 'Resource Allocation Is Immediate',
    'correct': 'a'
},
{
    'que': 'What is the difference between deep copy and shallow copy?',
    'a': 'Deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields.',
    'b': 'Shallow copy copies all fields, but doesn"t create separate copies of dynamically allocated memory.',
    'c': 'Shallow copy duplicates only the pointers.',
    'd': 'Both a and b',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the mutable keyword in C++?',
    'a': 'It allows a member of an object to be modified even if the object is declared as const.',
    'b': 'It declares a variable that can be modified after initialization.',
    'c': 'It specifies that the variable can be reassigned.',
    'd': 'It makes a pointer mutable.',
    'correct': 'a'
},
{
    'que': 'Explain the concept of copy elision and its benefits.',
    'a': 'Copy elision is a compiler optimization that avoids unnecessary copying of objects.',
    'b': 'Copy elision reduces the number of object constructors and destructors called.',
    'c': 'Copy elision improves performance by eliminating redundant copies.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the difference between override and final in C++11?',
    'a': 'override ensures a method is overriding a base class method.',
    'b': 'final prevents further overriding of a method.',
    'c': 'override prevents further overriding.',
    'd': 'Both a and b',
    'correct': 'd'
},
{
    'que': 'How does the const keyword affect member functions in a class?',
    'a': 'A const member function cannot modify member variables of the class.',
    'b': 'A const member function cannot call non-const member functions.',
    'c': 'Both a and b',
    'd': 'Neither a nor b',
    'correct': 'c'
},
{
    'que': 'What is the difference between std::vector and std::list in the STL?',
    'a': 'std::vector uses contiguous memory allocation, std::list uses linked nodes.',
    'b': 'std::vector has faster random access.',
    'c': 'std::list has faster insertion and deletion.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Describe the Singleton design pattern and its uses.',
    'a': 'Ensures a class has only one instance and provides a global point of access to it.',
    'b': 'Controls concurrent access to a resource.',
    'c': 'Ensures multiple instances of a class share the same data.',
    'd': 'None of the above',
    'correct': 'a'
},
{
    'que': 'Explain the differences between new and malloc in C++.',
    'a': 'new initializes objects, malloc does not.',
    'b': 'new returns a pointer of the correct type, malloc returns a void*.',
    'c': 'new can be overloaded, malloc cannot.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is the purpose of the friend keyword in C++?',
    'a': 'Grants a function or another class access to private and protected members of the class.',
    'b': 'Allows a class to access private members of another class.',
    'c': 'Enables classes to share variables and methods.',
    'd': 'Both a and b',
    'correct': 'd'
},
{
    'que': 'Describe the differences between abstract class and interface in C++.',
    'a': 'An abstract class can have implementations, interfaces cannot.',
    'b': 'An interface cannot have any implementation details.',
    'c': 'C++ does not have interfaces, instead it uses abstract classes.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is std::unique_ptr and how is it different from std::shared_ptr?',
    'a': 'std::unique_ptr provides exclusive ownership of an object.',
    'b': 'std::shared_ptr allows multiple owners of an object.',
    'c': 'std::unique_ptr cannot be copied.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Explain what happens when a C++ exception is thrown but not caught.',
    'a': 'The terminate() function is called.',
    'b': 'The program is terminated.',
    'c': 'The stack unwinds until a matching catch block is found.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What is a virtual destructor and why is it important?',
    'a': 'A virtual destructor ensures the correct destructor is called for a derived class object.',
    'b': 'It prevents memory leaks when deleting derived class objects.',
    'c': 'Both a and b',
    'd': 'None of the above',
    'correct': 'c'
},
{
    'que': 'How do std::set and std::map differ in terms of their underlying data structures?',
    'a': 'std::set uses a balanced binary tree.',
    'b': 'std::map also uses a balanced binary tree.',
    'c': 'Both a and b',
    'd': 'None of the above',
    'correct': 'c'
},
{
    'que': 'Describe how function overloading and function overriding differ.',
    'a': 'Function overloading occurs within the same class, with different parameters.',
    'b': 'Function overriding occurs in derived classes.',
    'c': 'Function overriding requires the virtual keyword.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Explain the concept of "move semantics" in C++11.',
    'a': 'Allows the resources of an rvalue to be moved rather than copied.',
    'b': 'Reduces unnecessary copying of objects.',
    'c': 'Implemented using std::move and move constructors.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'What are the advantages of using std::array over C-style arrays?',
    'a': 'Bounds checking and safety.',
    'b': 'Better integration with STL algorithms.',
    'c': 'Easier to use with range-based for loops.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'Describe the concept of "slicing" in C++.',
    'a': 'When a derived class object is assigned to a base class object.',
    'b': 'Only the base part of the derived object is copied.',
    'c': 'Leads to loss of derived class-specific data.',
    'd': 'All of the above',
    'correct': 'd'
},
{
    'que': 'How do you implement dynamic polymorphism using virtual functions?',
    'a': 'By declaring a function as virtual in the base class.',
    'b': 'Overriding the function in the derived class.',
    'c': 'Using a pointer or reference to the base class to call the overridden function.',
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