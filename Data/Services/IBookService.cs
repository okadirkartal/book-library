using BookLibrary.Data.Models;

namespace BookLibrary.Data.Services;

public interface IBookService
{
    Task<IReadOnlyCollection<Book>> GetAllBooks();
    Task<Book> GetBookById(Guid id);
    Task UpdateBook(Guid id, Book newBook);
    Task DeleteBook(Guid id);
    Task AddBook(Book newBook);
}