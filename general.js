const axios = require('axios');

const BASE_URL = "http://localhost:5000";

// ✅ Task 10 - Get all books (async/await)
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log("All Books:");
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching books:", error.message);
    }
}

// ✅ Task 11 - Get book by ISBN (Promise .then)
function getBookByISBN(isbn) {
    axios.get(`${BASE_URL}/isbn/${isbn}`)
        .then(response => {
            console.log(`Book with ISBN ${isbn}:`);
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching ISBN:", error.message);
        });
}

// ✅ Task 12 - Get books by Author (async/await)
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
        if (response.data.length === 0) {
            console.log("No books found for this author");
        } else {
            console.log(`Books by ${author}:`);
            console.log(response.data);
        }
    } catch (error) {
        console.error("Error fetching books by author:", error.message);
    }
}

// ✅ Task 13 - Get books by Title (async/await)
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
        if (response.data.length === 0) {
            console.log("No books found for this title");
        } else {
            console.log(`Books with title "${title}":`);
            console.log(response.data);
        }
    } catch (error) {
        console.error("Error fetching books by title:", error.message);
    }
}

// 🔥 Call all functions (important for demonstration)
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Chinua Achebe");
getBooksByTitle("Things Fall Apart");
