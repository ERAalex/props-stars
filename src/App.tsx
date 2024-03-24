import './App.css'
import Stars from './components/Stars/Stars'

function App() { 

  return (
    <>
    Start checking stars:<hr></hr>
    <Stars count={'wrong type'} />1<hr></hr>
    <Stars count={1} />1<hr></hr>
    <Stars count={2} />2<hr></hr>
    <Stars count={5} />5<hr></hr>
    <Stars count={10} />10<hr></hr>
    </>
  )
}

export default App;
