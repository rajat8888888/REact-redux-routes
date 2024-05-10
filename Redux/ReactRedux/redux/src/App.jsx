import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/Header";
import { Display } from "./component/Display";
import { Container } from "./component/Container";
import { Controls } from "./component/Controls";
import { useSelector } from "react-redux";
function App() {
  const hidden=useSelector((store)=>console.log(store))
  console.log(hidden);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center" style={{ margin: "10px" }}>
        <Container>
          <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
          <Header />
          <div className="col-lg-6 mx-auto">
        { !hidden ? <Display />:<h1>Counter is Privacey..</h1>}
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Controls />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
