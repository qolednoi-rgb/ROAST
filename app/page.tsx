import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [roast, setRoast] = useState('');

  const generateRoast = () => {
    // Simple mock roast logic—replace with real AI call if needed
    const roasts = [
      'You\'re like a smartphone on 1% battery—full of potential but about to crash.',
      'If laziness was an Olympic sport, you\'d come in fourth so you don\'t have to stand on the podium.',
      'Your life is like a software update: always downloading but never installing.',
      'You\'re the human equivalent of Comic Sans—funny, but no one takes you seriously.'
    ];
    setRoast(roasts[Math.floor(Math.random() * roasts.length)]);
  };

  return (
    <div style={{padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto'}}>
      <h1 style={{color: '#ff4444', textAlign: 'center'}}>🔥 ROAST ME 🔥</h1>
      <textarea
        placeholder="Tell me about yourself (or someone else) for a custom roast..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        style={{width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc'}}
      />
      <br /><br />
      <button
        onClick={generateRoast}
        style={{padding: '12px 24px', fontSize: '18px', background: '#ff4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'}}
      >
        Generate Roast
      </button>
      {roast && (
        <div style={{marginTop: '30px', padding: '20px', background: '#111', color: '#ff4444', borderRadius: '8px', minHeight: '100px'}}>
          {roast}
        </div>
      )}
    </div>
  );
}
