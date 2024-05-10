
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './component/Header'
import { Controler } from './component/Controler'
function App() {
 

  return (
    <>
     <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Counter Element</h1>
      <div className="col-lg-6 mx-auto">
         <Header></Header>
        <Controler></Controler>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
