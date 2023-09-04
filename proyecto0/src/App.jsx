import './styles.css';
import Header from './Header';

function App() {
  function RecorrerDivs() {
    return (
      <main className='main'>
        <div className='card'>card1</div>
        <div className='card'>card1</div>
        <div className='card'>card1</div>
        <div className='card'>card1</div>
        <div className='card'>card1</div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <RecorrerDivs />
    </>
  );
}

export default App;
