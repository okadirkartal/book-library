using System;
using BookLibrary.Data;
using Microsoft.AspNetCore.Mvc;

namespace BookLibrary.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private IBookService _service;
        public BooksController(IBookService service)
        {
            _service = service;
        }

        //Create/Add a new book
        [HttpPost]
        public IActionResult Post([FromBody] Book book)
        {
            try
            {
                if (book.Author != null && book.Title != null && book.Description != null)
                {
                    _service.AddBook(book);
                    return Ok(book);
                }
                return BadRequest("Book was not added");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        //Read all books
        [HttpGet]
        public IActionResult Get()
        {
            var allBooks = _service.GetAllBooks();
            return Ok(allBooks);
        }

        //Update an existing book
        [HttpPut]
        public IActionResult Put(int id, [FromBody] Book book)
        {
            _service.UpdateBook(id, book);
            return Ok(book);
        }

        //Delete a book
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _service.DeleteBook(id);
            return Ok();
        }

        //Get a single book by id
        [HttpGet("Book/{id}")]
        public IActionResult Get(int id)
        {
            var book = _service.GetBookById(id);
            return Ok(book);
        }
    }
}