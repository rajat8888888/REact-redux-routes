import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Display } from './component/Display'
import { Controls } from './component/Controls'
import { useSelector } from 'react-redux'



function App() {
  const privacey=  useSelector((store)=>store.privacey);


  return (
    <>
       <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Counter Element</h1>
      <div className="col-lg-6 mx-auto">
     {  privacey ?<h1>NO Count</h1>: <Display/>}
      </div>
      </div>
       <Controls/>
      </div>
    </>
  )
}

export default App
