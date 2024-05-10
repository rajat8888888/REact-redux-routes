import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container } from "./component/Container";

function App() {
  return (
    <>
      <Container>

      <h1>This is children of container</h1>

        <p>
          Powerful, extensible, and feature-packed frontend toolkit. Build and
          customize with Sass, utilize prebuilt grid system and components, and
          bring projects to life with powerful JavaScript plugins.
        </p>
      </Container>
      <Container>
      <p>
          Powerful, extensible, and feature-packed frontend toolkit. Build and
          customize with Sass, utilize prebuilt grid system and components, and
          bring projects to life with powerful JavaScript plugins.
        </p>
      </Container>
    </>
  );
}

export default App;
