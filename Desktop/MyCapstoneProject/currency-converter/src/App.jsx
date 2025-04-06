import './App.css'
import CurrencyConverter from './components/Currency-Converter';

function App() {
  return (
    <div className='min-h-screen bg-violet-500 flex flex-col items-center justify-center text-black p-4'>
      <div className='container max-w-md w-full md:max-w-2xl'> 
      <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
