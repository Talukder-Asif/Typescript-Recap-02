{
    // Define a simple book type
    type Book = {
        title: string,
        author: string,
        publicationYear: number
    }

    // Use "KyeOf" to get keys of the book type
    type BookKeys = keyof Book;

    const anotherBook: BookKeys = "author";

    function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K]{
        return book[key];
    }
    
    const myBook: Book ={
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960
    }


    console.log(getBookProperty(myBook, "title"));
    console.log(anotherBook);


}