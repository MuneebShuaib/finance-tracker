import './index.css';
import AddTransaction from './components/AddTransaction'


function App() {
  return (
    <div className='container'>
        <div className ='left-side-bar'>
        </div>
        <div className = 'main-content'>
          <section className = 'graphs-section'>

          </section>

          <section className = 'transaction-section'>
            <AddTransaction />
          </section>
        </div>
    </div>
  );
}


export default App;
