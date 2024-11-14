import { NextResponse } from "next/server";

// simulate a database
const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    available: true,
  },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// GET method: retrieve all books
export async function GET() {
  try {
    return NextResponse.json(books, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Error fetching books" },
      { status: 500 }
    );
  }
}

// POST method: add a new book
export async function POST(req: Request) {
  try {
    const newBook = await req.json();
    newBook.id = books.length ? books[books.length - 1].id + 1 : 1; // auto-increment ID
    books.push(newBook);
    return NextResponse.json(newBook, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Error adding book" },
      { status: 500 }
    );
  }
}

// PUT method: update a book by ID
export async function PUT(req: Request) {
  try {
    const updatedBook = await req.json();
    const index = books.findIndex((book) => book.id === updatedBook.id);

    if (index === -1) {
      return NextResponse.json(
        { message: "Book not found" },
        { status: 404 }
      );
    }

    books[index] = { ...books[index], ...updatedBook };
    return NextResponse.json(books[index], { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Error updating book" },
      { status: 500 }
    );
  }
}

// DELETE method: delete a book by ID
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
      return NextResponse.json(
        { message: "Book not found" },
        { status: 404 }
      );
    }

    books.splice(index, 1);
    return NextResponse.json({ message: "Book deleted successfully" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Error deleting book" },
      { status: 500 }
    );
  }
}
