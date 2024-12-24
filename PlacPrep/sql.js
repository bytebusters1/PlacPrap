const quizData = [   {

    "que": "What is the difference between DELETE and TRUNCATE commands?",

    "a": "DELETE removes rows one at a time and can be rolled back.",

    "b": "TRUNCATE removes all rows and cannot be rolled back.",

    "c": "DELETE can have conditions, TRUNCATE cannot.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "Explain the concept of normalization and its importance in databases.",

    "a": "Normalization reduces redundancy and improves data integrity.",

    "b": "Normalization organizes data into logical groupings.",

    "c": "Normalization involves dividing large tables into smaller tables.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What are the different types of JOIN operations in SQL?",

    "a": "INNER JOIN",

    "b": "LEFT JOIN",

    "c": "RIGHT JOIN",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "How do you create an index in SQL and what is its purpose?",

    "a": "CREATE INDEX index_name ON table_name (column_name);",

    "b": "Indexes improve the speed of data retrieval operations.",

    "c": "Indexes are created on columns used frequently in search conditions.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is the difference between UNION and UNION ALL?",

    "a": "UNION removes duplicate records.",

    "b": "UNION ALL includes duplicate records.",

    "c": "UNION performs a distinct operation.",

    "d": "Both a and b",

    "correct": "d"

},

{

    "que": "Explain the ACID properties in the context of a database transaction.",

    "a": "Atomicity, Consistency, Isolation, Durability",

    "b": "Ensure reliable processing of database transactions.",

    "c": "Prevent data corruption and ensure data integrity.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is a subquery and when would you use one?",

    "a": "A query nested inside another query.",

    "b": "Used to perform operations that require multiple steps.",

    "c": "Subqueries can be used in SELECT, INSERT, UPDATE, and DELETE statements.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "How do you handle NULL values in SQL?",

    "a": "Using IS NULL and IS NOT NULL operators.",

    "b": "Using COALESCE() function to provide default values.",

    "c": "Using NVL() function in some SQL dialects.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is the difference between a PRIMARY KEY and a UNIQUE KEY?",

    "a": "PRIMARY KEY uniquely identifies each record in a table.",

    "b": "UNIQUE KEY ensures all values in a column are unique.",

    "c": "PRIMARY KEY cannot be NULL.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "Explain the concept of a foreign key and its role in database relationships.",

    "a": "A foreign key is a field in one table that uniquely identifies a row of another table.",

    "b": "Establishes a link between the data in the two tables.",

    "c": "Ensures referential integrity of the data.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is a stored procedure and what are its advantages?",

    "a": "A precompiled collection of SQL statements.",

    "b": "Improves performance and reduces network traffic.",

    "c": "Encapsulates logic, making the database more secure.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is the difference between HAVING and WHERE clauses?",

    "a": "WHERE filters rows before aggregation.",

    "b": "HAVING filters rows after aggregation.",

    "c": "HAVING can be used with aggregate functions.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "Explain the concept of indexing and its types.",

    "a": "Indexes improve data retrieval speed.",

    "b": "Clustered index, non-clustered index, and full-text index.",

    "c": "Indexes can be created on single or multiple columns.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is a view in SQL and when would you use one?",

    "a": "A virtual table based on the result-set of an SQL query.",

    "b": "Used to simplify complex queries.",

    "c": "Provides a level of abstraction and security.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "How do you optimize a query in SQL?",

    "a": "Use indexes wisely.",

    "b": "Avoid unnecessary columns in SELECT statements.",

    "c": "Use JOINs instead of subqueries.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is the difference between the GROUP BY and ORDER BY clauses?",

    "a": "GROUP BY groups rows that have the same values into summary rows.",

    "b": "ORDER BY sorts the result set of a query.",

    "c": "GROUP BY is used with aggregate functions.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "Explain the concept of window functions in SQL.",

    "a": "Perform calculations across a set of table rows related to the current row.",

    "b": "Used for ranking, running totals, and moving averages.",

    "c": "Includes functions like ROW_NUMBER(), RANK(), and NTILE().",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "What is a trigger in SQL and when would you use one?",

    "a": "A set of actions automatically invoked by the database engine.",

    "b": "Triggered by INSERT, UPDATE, or DELETE statements.",

    "c": "Used for enforcing business rules and data validation.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "How do you ensure data integrity in a database?",

    "a": "Using primary keys and foreign keys.",

    "b": "Using constraints like UNIQUE and CHECK.",

    "c": "Using triggers and stored procedures.",

    "d": "All of the above",

    "correct": "d"

},

{

    "que": "Explain the concept of a transaction in SQL and its properties.",

    "a": "A sequence of one or more SQL operations treated as a single unit.",

    "b": "Follows the ACID properties.",

    "c": "Ensures data consistency and integrity.",

    "d": "All of the above",

    "correct": "d"

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