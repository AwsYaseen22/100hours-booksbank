const Book = require("../models/Book");
const { formatDate } = require("../helpers/ejs");

exports.allBooks = (request, response) => {
  response.redirect("/books");
};

// Login page
exports.showLogin = (request, response) => {
  response.render("pages/login.ejs");
};

// if the user logged in show him/her the dashboard instead and they cannot go to login page
exports.showDashboard = async (request, response) => {
  try {
    // lean get the data as plain object without the ability to edit or any other methods on mongoose document
    const books = await Book.find({ user: request.user.id }).lean();
    response.render("pages/dashboard.ejs", {
      user: request.user,
      books: books,
      formatDate: formatDate,
    });
  } catch (error) {
    console.error(error);
    res.render("error/500");
  }
};
