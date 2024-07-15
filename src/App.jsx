import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content, author } = response.data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{quote}</div>
        <div id="author">- {author}</div>
        <button id="new-quote" onClick={fetchQuote}>New Quote</button>
        <a id="tweet-quote" href={tweetQuote} target="_blank" rel="noopener noreferrer">Tweet</a>
      </div>
    </div>
  );
};

export default App;
