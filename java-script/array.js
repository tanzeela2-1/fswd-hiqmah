
 const books = [{
  title:" Introduction to Algorithms",
  author: "Thomas H. Cormen et al.",
  year: "1990",
  available: true
 },
 {
  title:"Artificial Intelligence",
  author:"Stuart Russel",
  year: "	1995",
  available: false
 },
 {
  title: "computer Networks",	
  author:"Andrew S. Tanenbaum, David J. Wetherall",
  year: "1981",
  available: false
 },
 {
  title: "operating System Concepts",
//   author:"Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
  author:"Donald E. Knuth",
  year: "1982",
  available: true
 },
 {
  title:" The Art of Computer Programming",
  author:"Donald E. Knuth",
  year:"1968",
  available: true
 }
 ];
 console.log("Before adding a book:", books.slice());  //The .slice() method creates a shallow copy of part or all of an array without modifying the original array.

  // Add New Book 

  const newBook={
   title: "Structure and Interpretation of Computer Programs",
   author:" Harold Abelson, Gerald Jay Sussman",
   year: "1985",
  available: true
  };
       books.push(newBook);
 console.log ( "After Adding a Book:",books);
  
   //find all books by a specific author 
const booksByAuthor = [];
const searchAuthor = "Donald E. Knuth";
for (let i = 0; i < books.length-1; i++) {
  if (books[i].author === searchAuthor) {
    booksByAuthor.push(books[i]);
  }
}
console.log(booksByAuthor);

 //list of all available books
const  availableBooks=[];
for(let i=0 ;i < books.length; i++){
        if(books[i].available === true){
       availableBooks.push(books[i]);
        }
}

console.log("Available books:", availableBooks);
  //sort

function sortBook(){
  return[...books].sort((a,b) => b.year - a.year);
}
console.log("Books Sorted by Year:",sortBook());



function borrowBook(title){
  for(let i=0 ;i < books.length; i++){
    if(books[i].title ===title){
      if(books[i].available ){
        books[i].available = false;
      console.log(`you borrowed  ${title} ".`);
    
    }else{
      console.log (`"${title} " is already borrowed. `)
    }
    return;
  }
}
  console.log("book not found.")
}
borrowBook("operating System Concepts");
