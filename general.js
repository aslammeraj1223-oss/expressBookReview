const axios = require('axios');

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log("All Books:");
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching books:", error.message);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        console.log(`Book with ISBN ${isbn}:`);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching book by ISBN:", error.message);
    }
}

// Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
        console.log(`Books by ${author}:`);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching books by author:", error.message);
    }
}

// Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
        console.log(`Books with title "${title}":`);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching books by title:", error.message);
    }
}

// Call functions (for testing)
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Chinua Achebe");
getBooksByTitle("Things Fall Apart");
