import './App.css';

function App() {
  return (
    <div className="calculator.grid">
      <div className='output'>
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>ÿ</button>
    </div>
  );
}

export default App
