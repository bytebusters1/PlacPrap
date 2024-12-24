// Show Section
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Toggle Mobile Menu
document.getElementById('menu-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Initialize Carousel
document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
    });

    displayCompanies(); // Ensure companies are displayed when the page loads
});

// Company Data
const companies = [
    {
        name: "Google",
        description: "Leading technology company known for search engine and innovative products.",
        requiredSkills: ["JavaScript", "Python", "Java", "Algorithms", "System Design"],
        icon: "bi-google"
    },
    {
        name: "Microsoft",
        description: "Global technology corporation focusing on software and cloud solutions.",
        requiredSkills: ["C#", "JavaScript", "Azure", "SQL", "System Design"],
        icon: "bi-microsoft"
    },
    {
        name: "Amazon",
        description: "E-commerce and cloud computing leader with diverse tech roles.",
        requiredSkills: ["Java", "Python", "AWS", "Distributed Systems", "Algorithms"],
        icon: "bi-amazon"
    },
    {
        name: "TCS (Tata Consultancy Services)",
        description: "One of the largest IT services companies in the world, providing a wide range of IT services.",
        requiredSkills: ["Java", "C#", "Python", "SQL", "System Design"],
        icon: "bi-tcs"
    },
    {
        name: "Accenture",
        description: "Global professional services company providing a broad range of services in strategy and consulting, technology and operations.",
        requiredSkills: ["Java", "Python", "SQL", "System Design", "Project Management"],
        icon: "bi-accenture"
    },
    {
        name: "Infosys",
        description: "Global leader in next-generation digital services and consulting.",
        requiredSkills: ["Java", "Python", "SQL", "System Design", "AI"],
        icon: "bi-infosys"
    },
    {
        name: "IBM",
        description: "Global technology and consulting company known for its innovations in AI, cloud computing, and quantum computing.",
        requiredSkills: ["Java", "Python", "SQL", "System Design", "AI"],
        icon: "bi-ibm"
    },
    {
        name: "Oracle",
        description: "Leading provider of database management systems and enterprise software.",
        requiredSkills: ["Java", "SQL", "Python", "System Design", "Cloud Computing"],
        icon: "bi-oracle"
    },
    {
        name: "SAP",
        description: "Leading provider of enterprise resource planning (ERP) software and related services.",
        requiredSkills: ["Java", "SQL", "Python", "System Design", "ERP"],
        icon: "bi-sap"
    }
];

// Display Companies
function displayCompanies() {
    const container = document.querySelector('#companies > div');
    container.innerHTML = companies.map(company => `
        <div class="company-card bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
            <img src="images/${company.name.toLowerCase()}.png" alt="${company.name} logo" class="w-12 h-12 mb-4">
            <h3 class="text-xl font-bold mt-4">${company.name}</h3>
            <p class="text-gray-600 mt-2">${company.description}</p>
            <div class="mt-4">
                <h4 class="font-semibold">Required Skills:</h4>
                <div class="flex flex-wrap gap-2 mt-2">
                    ${company.requiredSkills.map(skill =>
        `<span class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">${skill}</span>`
    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Quiz Questions
const quizData = {
    javascript: [
        {
            question: "What is closure in JavaScript?",
            options: [
                "A function with access to its outer scope",
                "A loop structure",
                "A data type",
                "An object method"
            ],
            correct: 0
        },
        {
            question: "Which company developed JavaScript?",
            options: [
                "Microsoft",
                "Netscape",
                "Google",
                "Apple"
            ],
            correct: 1
        },
        {
            question: "What does the `typeof` operator return for `null`?",
            options: [
                "null",
                "object",
                "undefined",
                "string"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the `map` function in JavaScript?",
            options: [
                "Iterate over an array and return a new array",
                "Modify an object",
                "Sort an array",
                "Find the maximum value in an array"
            ],
            correct: 0
        },
        {
            question: "What does the `bind` method do in JavaScript?",
            options: [
                "Binds an event to an element",
                "Creates a new function with a specific `this` value",
                "Executes a function immediately",
                "Defines a new variable"
            ],
            correct: 1
        },
        {
            question: "What will `console.log(1 + '2')` output?",
            options: [
                "3",
                "12",
                "NaN",
                "undefined"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of `Promise` in JavaScript?",
            options: [
                "To handle asynchronous operations",
                "To define a new variable",
                "To create synchronous functions",
                "To iterate over arrays"
            ],
            correct: 0
        },
        {
            question: "What does the `===` operator do?",
            options: [
                "Compares both value and type",
                "Compares only value",
                "Converts types before comparison",
                "Checks memory location"
            ],
            correct: 0
        },
        {
            question: "What does the `filter` method do?",
            options: [
                "Iterates over an array and filters elements based on a condition",
                "Sorts an array",
                "Removes duplicate elements",
                "Finds the first matching element in an array"
            ],
            correct: 0
        },
        {
            question: "What is an Immediately Invoked Function Expression (IIFE)?",
            options: [
                "A function that is defined and called immediately",
                "A function declared inside another function",
                "A function with no parameters",
                "A function that does not return anything"
            ],
            correct: 0
        }
        //Add more questions here
    ],
    
        python: [
            {
                question: "What is a decorator in Python?",
                options: [
                    "A design pattern",
                    "A function that modifies another function",
                    "A class method",
                    "A variable type"
                ],
                correct: 1
            },
            {
                question: "Which keyword is used to define a function in Python?",
                options: [
                    "func",
                    "function",
                    "def",
                    "declare"
                ],
                correct: 2
            },
            {
                question: "What is the purpose of the `self` parameter in Python classes?",
                options: [
                    "To define a static method",
                    "To refer to the current instance of the class",
                    "To declare a class-level variable",
                    "To access private methods"
                ],
                correct: 1
            },
            {
                question: "What does the `len()` function do?",
                options: [
                    "Returns the last element of a list",
                    "Calculates the sum of a list",
                    "Returns the length of an object",
                    "Checks if an object is empty"
                ],
                correct: 2
            },
            {
                question: "Which of the following is a mutable data type in Python?",
                options: [
                    "Tuple",
                    "String",
                    "List",
                    "Integer"
                ],
                correct: 2
            },
            {
                question: "What does the `@staticmethod` decorator do?",
                options: [
                    "Defines a static method that doesn't use the class or instance",
                    "Defines a method that only works with instances",
                    "Defines a method that modifies another function",
                    "Defines a private method"
                ],
                correct: 0
            },
            {
                question: "What is the output of `print(type([]))` in Python?",
                options: [
                    "<class 'list'>",
                    "<class 'tuple'>",
                    "<class 'dict'>",
                    "<class 'set'>"
                ],
                correct: 0
            },
            {
                question: "What is the purpose of the `__init__` method in Python?",
                options: [
                    "To initialize a class instance",
                    "To define a static method",
                    "To declare a private variable",
                    "To create a class-level attribute"
                ],
                correct: 0
            },
            {
                question: "Which module in Python is used for regular expressions?",
                options: [
                    "regex",
                    "re",
                    "regexp",
                    "expression"
                ],
                correct: 1
            },
            {
                question: "What is the output of `print(2 ** 3)` in Python?",
                options: [
                    "6",
                    "8",
                    "9",
                    "16"
                ],
                correct: 1
            } //Add more questions here
        ],
        java: [
            {
                question: "What is polymorphism in Java?",
                options: [
                    "Multiple inheritance",
                    "Multiple forms of a method",
                    "Multiple classes",
                    "Multiple objects"
                ],
                correct: 1
            },
            {
                question: "Which of the following is used to define a class in Java?",
                options: [
                    "define",
                    "class",
                    "object",
                    "className"
                ],
                correct: 1
            },
            {
                question: "What is the size of an `int` data type in Java?",
                options: [
                    "4 bytes",
                    "8 bytes",
                    "2 bytes",
                    "1 byte"
                ],
                correct: 0
            },
            {
                question: "What is the purpose of the `final` keyword in Java?",
                options: [
                    "To declare a constant variable",
                    "To define an abstract class",
                    "To override a method",
                    "To handle exceptions"
                ],
                correct: 0
            },
            {
                question: "Which method is used to start a thread in Java?",
                options: [
                    "execute()",
                    "start()",
                    "run()",
                    "begin()"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of the `this` keyword in Java?",
                options: [
                    "To refer to the current object",
                    "To declare a static method",
                    "To define a private method",
                    "To create a new instance of a class"
                ],
                correct: 0
            },
            {
                question: "Which exception is thrown when a division by zero occurs in Java?",
                options: [
                    "ArithmeticException",
                    "NullPointerException",
                    "ArrayIndexOutOfBoundsException",
                    "NumberFormatException"
                ],
                correct: 0
            },
            {
                question: "What is an abstract class in Java?",
                options: [
                    "A class with no methods",
                    "A class that cannot be instantiated",
                    "A class that only contains static methods",
                    "A class used to define constants"
                ],
                correct: 1
            },
            {
                question: "What is the output of `System.out.println(10 + 20 + \"30\");`?",
                options: [
                    "3030",
                    "102030",
                    "30",
                    "50"
                ],
                correct: 0
            },
            {
                question: "Which keyword is used to inherit a class in Java?",
                options: [
                    "inherits",
                    "extends",
                    "implements",
                    "super"
                ],
                correct: 1
            } //Add more questions here
        ],
        cpp: [
            {
                question: "What is a constructor in C++?",
                options: [
                    "A function used to construct loops",
                    "A special member function to initialize objects",
                    "A function that must be manually called",
                    "A destructor for objects"
                ],
                correct: 1
            },
            {
                question: "Which of the following is the correct way to declare a pointer in C++?",
                options: [
                    "int &ptr;",
                    "int ptr*;",
                    "int *ptr;",
                    "int pointer;"
                ],
                correct: 2
            },
            {
                question: "What is polymorphism in C++?",
                options: [
                    "Ability of a class to define multiple variables",
                    "Ability to process objects differently based on their type",
                    "Ability to use multiple inheritance",
                    "Ability to store multiple data types in one variable"
                ],
                correct: 1
            },
            {
                question: "What is the output of `sizeof(char)` in C++?",
                options: [
                    "1 byte",
                    "2 bytes",
                    "4 bytes",
                    "Depends on the system"
                ],
                correct: 0
            },
            {
                question: "Which of the following access specifiers is the default for class members in C++?",
                options: [
                    "private",
                    "public",
                    "protected",
                    "none of the above"
                ],
                correct: 0
            },
            {
                question: "What is a virtual function in C++?",
                options: [
                    "A function defined in the base class that can be overridden in derived classes",
                    "A function used for memory management",
                    "A function without a return type",
                    "A function that cannot be inherited"
                ],
                correct: 0
            },
            {
                question: "What does the `new` operator do in C++?",
                options: [
                    "Creates a new variable",
                    "Allocates memory dynamically",
                    "Returns a pointer to a variable",
                    "Initializes an object"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of a destructor in C++?",
                options: [
                    "To delete objects from memory",
                    "To deallocate memory and clean up resources",
                    "To construct an object",
                    "To override methods"
                ],
                correct: 1
            },
            {
                question: "What is the output of `std::cout << 10 / 3;` in C++ (with integer division)?",
                options: [
                    "3.33",
                    "3",
                    "4",
                    "Error"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of the `friend` keyword in C++?",
                options: [
                    "To allow a function or class to access private members of another class",
                    "To declare a global function",
                    "To define a nested class",
                    "To create inheritance"
                ],
                correct: 0
            }
        ],
        csharp: [
            {
                question: "What is the purpose of the `using` directive in C#?",
                options: [
                    "To include namespaces in the program",
                    "To declare a variable",
                    "To import external libraries",
                    "To initialize an object"
                ],
                correct: 0
            },
            {
                question: "Which keyword is used to define a class in C#?",
                options: [
                    "class",
                    "define",
                    "new",
                    "struct"
                ],
                correct: 0
            },
            {
                question: "What is polymorphism in C#?",
                options: [
                    "A feature that allows one method to have multiple implementations",
                    "A way to inherit from multiple classes",
                    "A type of loop in C#",
                    "A method that cannot be overridden"
                ],
                correct: 0
            },
            {
                question: "What does the `static` keyword mean in C#?",
                options: [
                    "The method or variable belongs to the class rather than instances of the class",
                    "The method or variable is read-only",
                    "The method or variable is temporary",
                    "The method or variable can only be used in loops"
                ],
                correct: 0
            },
            {
                question: "What is the default access specifier for class members in C#?",
                options: [
                    "public",
                    "private",
                    "protected",
                    "internal"
                ],
                correct: 1
            },
            {
                question: "What is the `Main()` method in C#?",
                options: [
                    "A user-defined method",
                    "The entry point of a C# application",
                    "A method for exception handling",
                    "A predefined class"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of the `abstract` keyword in C#?",
                options: [
                    "To define a method that must be implemented in derived classes",
                    "To declare a private variable",
                    "To create an interface",
                    "To make a method static"
                ],
                correct: 0
            },
            {
                question: "Which of the following is used to handle exceptions in C#?",
                options: [
                    "try-catch",
                    "if-else",
                    "switch-case",
                    "loop"
                ],
                correct: 0
            },
            {
                question: "What is the output of `Console.WriteLine(10 / 3);` in C#?",
                options: [
                    "3.33",
                    "3",
                    "4",
                    "Error"
                ],
                correct: 1
            },
            {
                question: "What is a delegate in C#?",
                options: [
                    "A type that defines a method signature",
                    "A variable that holds data",
                    "A class that manages exceptions",
                    "A feature for multithreading"
                ],
                correct: 0
            }
        ],
         AIML : [
            {
                question: "What is supervised learning in machine learning?",
                options: [
                    "Learning with labeled data",
                    "Learning with unlabeled data",
                    "Learning from interactions with the environment",
                    "Learning without feedback"
                ],
                correct: 0
            },
            {
                question: "Which of the following algorithms is used in classification problems?",
                options: [
                    "Linear regression",
                    "K-means clustering",
                    "Decision tree",
                    "PCA"
                ],
                correct: 2
            },
            {
                question: "What is the purpose of the activation function in a neural network?",
                options: [
                    "To add noise to the model",
                    "To introduce non-linearity",
                    "To reduce overfitting",
                    "To normalize the input data"
                ],
                correct: 1
            },
            {
                question: "What is the main difference between regression and classification?",
                options: [
                    "Regression predicts categorical values, while classification predicts continuous values",
                    "Regression predicts continuous values, while classification predicts categorical values",
                    "Regression uses decision trees, while classification uses linear models",
                    "There is no difference"
                ],
                correct: 1
            },
            {
                question: "What is overfitting in machine learning?",
                options: [
                    "When the model is too simple to capture patterns",
                    "When the model fits the training data too closely and fails on new data",
                    "When the model has too few parameters",
                    "When the model performs equally on training and test data"
                ],
                correct: 1
            },
            {
                question: "What does the term 'bias' refer to in machine learning?",
                options: [
                    "A systematic error introduced by the model",
                    "The variance of the model's predictions",
                    "The model’s sensitivity to the input data",
                    "The model's ability to generalize"
                ],
                correct: 0
            },
            {
                question: "What is the purpose of the 'cross-validation' technique?",
                options: [
                    "To improve the accuracy of the model",
                    "To evaluate the performance of the model on unseen data",
                    "To increase the model complexity",
                    "To reduce the training time"
                ],
                correct: 1
            },
            {
                question: "What is a support vector machine (SVM)?",
                options: [
                    "A linear classifier that aims to find the hyperplane that best separates the classes",
                    "A type of decision tree",
                    "A regression technique",
                    "A clustering algorithm"
                ],
                correct: 0
            },
            {
                question: "Which of the following is an example of unsupervised learning?",
                options: [
                    "Linear regression",
                    "K-means clustering",
                    "Decision tree",
                    "Logistic regression"
                ],
                correct: 1
            },
            {
                question: "What is deep learning?",
                options: [
                    "A type of reinforcement learning",
                    "A neural network with multiple hidden layers",
                    "A supervised learning technique",
                    "An unsupervised learning algorithm"
                ],
                correct: 1
            }
        ]
        
};

// Learning Resources
const resources = {
    javascript: [
        { title: "JavaScript Fundamentals", url: "https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW" },
        { title: "Advanced JS Concepts", url: "https://www.youtube.com/watch?v=IUFJzLlf2cE&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG" }
    ],
    python: [
        { title: "Python for Beginners", url: "https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" },
        { title: "Python DSA", url: "https://www.youtube.com/watch?v=_t2GVaQasRY&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12" }
    ],
    java: [
        { title: "Java Programming", url: "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" },
        { title: "Java Advanced Topics", url: "https://www.youtube.com/watch?v=k7YFy3qIF0M&list=PLN4C-bCgnnU0Vj1brODaJFi5z1m25XYjq" }
    ],
    cpp: [
        { title: "cpp Programming", url: "https://www.youtube.com/watch?v=bL-o2xBENY0&list=PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd" },
        { title: "cpp DSA Topics", url: "https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt" }
    ],
    csharp: [
        { title: "csharp Programming", url: "https://www.youtube.com/watch?v=SuLiu5AK9Ps" },
        { title: "csharp Advanced Topics", url: "https://www.youtube.com/watch?v=3cfVmcAkR2w&list=PL4LFuHwItvKaOi-bN1E2WUVyZbuRhVokL" }
    ],
    AIML: [
        { title: "AIML roadmap", url: "https://www.youtube.com/watch?v=AMxtGWcMYd4" }
    ],
};

// Start Quiz
function startQuiz(language) {
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    quizContainer.classList.remove('hidden');

    let currentQuestion = 0;
    let score = 0;

    function displayQuestion() {
        const question = quizData[language][currentQuestion];
        questionContainer.innerHTML = `
            <div class="mb-4">
                <h3 class="text-lg font-semibold">${question.question}</h3>
                <div class="space-y-2 mt-4">
                    ${question.options.map((option, index) => `
                        <div>
                            <input type="radio" name="answer" value="${index}" id="option${index}">
                            <label for="option${index}" class="ml-2">${option}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            <button onclick="submitAnswer()" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105">Submit</button>
        `;
    }

    displayQuestion();

    window.submitAnswer = function () {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) return;

        const correct = quizData[language][currentQuestion].correct;
        if (parseInt(selected.value) === correct) score++;

        currentQuestion++;

        if (currentQuestion < quizData[language].length) {
            displayQuestion();
        } else {
            showResult();
        }
    };

    function showResult() {
        const resultDiv = document.getElementById('result');
        resultDiv.classList.remove('hidden');
        const percentage = (score / quizData[language].length) * 100;
        let emoji = '😐';
        let emojiClass = 'animate__fadeIn';
        if (percentage >= 80) {
            emoji = '🎉';
            emojiClass = 'animate__bounceIn';
        } else if (percentage >= 50) {
            emoji = '😊';
            emojiClass = 'animate__fadeIn';
        } else {
            emoji = '😢';
            emojiClass = 'animate__shakeX';
        }

        resultDiv.innerHTML = `
            <div class="animate__animated animate__fadeIn">
                <h3 class="text-xl font-bold">Quiz Completed! <span class="animate__animated ${emojiClass}">${emoji}</span></h3>
                <p class="mt-2">Your score: ${score}/${quizData[language].length} (${percentage.toFixed(2)}%)</p>
                <div class="mt-4">
                    <h4 class="font-semibold">Recommended Resources:</h4>
                    <ul class="list-disc ml-6 mt-2">
                        ${resources[language].map(resource => `
                            <li><a href="${resource.url}" target="_blank" class="text-blue-600 hover:underline">${resource.title}</a></li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function () {
    displayCompanies();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    const languageSelect = document.getElementById('programmingLanguage');
    languageSelect.addEventListener('change', function () {
        if (this.value) {
            startQuiz(this.value);
        }
    });
}
