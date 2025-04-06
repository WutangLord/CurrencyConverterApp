import './App.css'
import CurrencyConverter from './components/Currency-Converter';

function App() {
  return (
    <div className='min-h-screen bg-red-300 flex flex-col items-center justify-center text-black'>
      <div className='container'>

      <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
