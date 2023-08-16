using BookLibrary.Data.Models;
using BookLibrary.Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookLibrary.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly IBookService _bookService;
    
    public BooksController(IBookService bookService)
    {
        this._bookService = bookService;
    }
    
    //Create/Add a new book
    [HttpPost("AddBook")]
    public async Task<IActionResult> AddBook([FromBody] Book book)
    {
        await _bookService.AddBook(book);
        return Ok();
    }
    
    //Read all books
    [HttpGet("[action]")]
    public async Task<IActionResult> GetBooks()
    {
        var allBooks = await _bookService.GetAllBooks();
        return Ok(allBooks);
    }
    
    //Update an existing book
    [HttpPut("UpdateBook/{id}")]
    public async Task<IActionResult> UpdateBook(Guid id, [FromBody] Book book)
    {
       await _bookService.UpdateBook(id, book);
        return Ok(book);
    }
    
    //Delete a book
    [HttpDelete("DeleteBook/{id}")]
    public async Task<IActionResult> DeleteBook(Guid id)
    {
       await _bookService.DeleteBook(id);
        return Ok();
    }
    
    //Get single book by id
    [HttpGet("SingleBook/{id}")]
    public async Task<IActionResult> GetBookById(Guid id)
    {
        var book = await _bookService.GetBookById(id);
        return Ok(book);
    }
}