const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    books: [
        {
            title: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            rating: {
                type: String,
                required: true
            },
            reading_dates: [
                {
                    date_type: {
                        type: String,
                    },
                    date: {
                        type: Date,
                    }
                }
            ],
            date_added: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Book = mongoose.model("books", BookSchema);
