namespace BookLibrary.Data.Models;

public class Book : IEntity
{
    public string Title { get; set; }
    public string Author { get; set; }
    public string Description { get; set; }
    public double? Rate { get; set; }
    public DateTime? DateStart { get; set; }
    public DateTime? DateRead { get; set; }
    public Guid Id { get; set; }
}