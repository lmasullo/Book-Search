import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState({ hits: [] });

  const [books, setBooks] = useState({ books: [] });


  useEffect(() => {
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    async function fetchBooks() {
      // You can await here
      const response = await fetch('/api/books');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message) 
      }

      setBooks(response.data);
    }
    fetchBooks();
  }, []);




  useEffect(() => {
    async function fetchData() {
      // You can await here
      const result = await Axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      // ...
      setData(result.data);
    }
    fetchData();
  }, []);


  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
