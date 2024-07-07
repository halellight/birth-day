import Landing from "./components/Landing";
import { useEffect, useState } from "react";
// import "./index.css";

import Oyin from "./components/Oyin";
import Newyork from "./components/Newyork";
import RevealLinks from "./components/RevealLinks";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Mainnav />
      <Hero /> */}

      <Oyin />
      <RevealLinks />
      {/* <Second /> */}
      {/* <Carousel /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpform />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
