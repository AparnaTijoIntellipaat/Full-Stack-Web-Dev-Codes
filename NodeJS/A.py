class Library:
    def __init__(self):
        self.books = []
        self.issued_books = {}

    def add_book(self, book_name):
        self.books.append(book_name)
        print(f'Book "{book_name}" has been added to the library.')

    def issue_book(self, book_name, borrower_name):
        if book_name in self.books:
            self.books.remove(book_name)
            self.issued_books[book_name] = borrower_name
            print(f'Book "{book_name}" has been issued to {borrower_name}.')
        else:
            print(f'Sorry, the book "{book_name}" is not available in the library.')

    def return_book(self, book_name):
        if book_name in self.issued_books:
            borrower_name = self.issued_books.pop(book_name)
            self.books.append(book_name)
            print(f'Book "{book_name}" has been returned by {borrower_name}.')
        else:
            print(f'The book "{book_name}" was not issued.')

    def view_available_books(self):
        print("Available books in the library:")
        for book in self.books:
            print(f'- {book}')



