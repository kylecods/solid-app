import { createSignal, Show } from "solid-js";
import { AddBook } from "./AddBook";
import { BookList } from "./BookList";

const initialBooks = [
  {title: "Code Complete", author: "Steve McConnell"},
  {title: "The Hobbit", author: "J.R.R. Tolkien"},
  {title: "Living a Feminist Life", author: "Sarah Ahmed"},
]

function BookShelf(props) {
  const [books, setBooks] = createSignal(initialBooks)
  const [showForm, setShowForm] = createSignal(false)

  const toggleForm = () => setShowForm(!showForm())

  return (
    <>
      <h1>{props.name}'s BookShelf</h1>
      <BookList books={books()}/>

      <Show 
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add a book</button>}
      >
        <AddBook setBooks={setBooks}/>
        <button onClick={toggleForm}>Finished adding books</button>

      </Show>
    </>
  )
}

function App() {
  return (
    <BookShelf name="Frank Sinatra"/>
  );
}

export default App;
