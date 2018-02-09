const books = [
  {
      title: 'title1',
      author: 'author1',
      isbn: '12345',
      subject: ['cat1', 'cat2'],
      offeredBy: ['user1', 'user2']
  },  
  {
      title: 'title2',
      author: 'author2',
      isbn: '23456',
      subject: ['cat2', 'cat3'],
      offeredBy: ['user2']
  },  
];

module.exports = books;


/*const BooksSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    subject: [String],
    offeredBy: [String]
});
*/