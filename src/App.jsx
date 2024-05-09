import './App.css'



//components
import Navbar from './components/Navbar'
import Title from './components/Title'
import Pagemain from './components/Pagemain'
import ManageEmployeePage from './components/ManageEmployee'
import Productfood from './components/Productfood'
import Contact from './components/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
      <Title />
      <Pagemain />
      <Productfood />
      <ManageEmployeePage />
      <Contact />
      </div>
  )
}

export default App
App.jsx
