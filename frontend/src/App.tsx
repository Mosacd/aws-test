import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [answer, setAnswer] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/get-latest-answer')
      .then(res => res.json())
      .then(data => setAnswer(data.data))
      .catch(err => console.error(err));
  }, [answer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/create-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: input }),
      });
      const result = await res.json();
      console.log(result);
      setAnswer(result.data);
      setInput('');
    } catch (err) {
      console.error(err);
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
