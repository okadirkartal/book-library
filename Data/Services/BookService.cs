using BookLibrary.Data.Models;
using BookLibrary.Data.Repositories;

namespace BookLibrary.Data.Services;

public class BookService : IBookService
{
    private readonly IRepository<Book> _repository;

    public BookService(IRepository<Book> repository)
    {
        this._repository = repository;
    }
    public async Task<IReadOnlyCollection<Book>> GetAllBooks()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Book> GetBookById(Guid id)
    {
        return await _repository.GetAsync(id);
    }

    public async Task UpdateBook(Guid id, Book newBook)
    {
        var oldBook = await _repository.GetAsync(id);
        
        if (oldBook != null)
        {
            oldBook.Title = newBook.Title;
            oldBook.Author = newBook.Author;
            oldBook.Description = newBook.Description;
            oldBook.Rate = newBook.Rate;
            oldBook.DateStart = newBook.DateStart;
            oldBook.DateRead = newBook.DateRead;

            await _repository.UpdateAsync(oldBook);
        }
    }

    public async  Task DeleteBook(Guid id)
    {
        await _repository.RemoveAsync(id);
    }

    public async Task AddBook(Book newBook)
    {
        var book = new Book
        {
            Title = newBook.Title,
            Description = newBook.Description,
            Author = newBook.Author,
            Rate = newBook.Rate,
            DateStart = newBook.DateStart,
            DateRead = newBook.DateRead
        };

        await _repository.CreateAsync(book);
    }
}