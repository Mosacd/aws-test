import { useEffect, useState } from 'react';
import './App.css';
import { createAnswer, fetchLatestAnswer } from './services/api';
function App() {
  const [answer, setAnswer] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const loadLatestAnswer = async () => {
      try {
        const latest = await fetchLatestAnswer();
        setAnswer(latest);
      } catch (error) {
        throw new Error(`Failed to fetch the latest answer: ${error}`);
      }
    };
    
    loadLatestAnswer();
  }, []); // Empty dependency array means this runs once on mount

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newAnswer = await createAnswer(input);
      setAnswer(newAnswer);
      setInput('');
    } catch (error) {
        throw new Error(`Failed to fetch the latest answer: ${error}`);
    }
  };

  return (
    <>    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new answer"
        />
        <button type="submit">Submit</button>
      </form>

    <div className='wrapper'>
      <h1 className='title'>Latest Answer</h1>
      <p>{answer}</p>
    </div>
</>

  );
}

export default App;
