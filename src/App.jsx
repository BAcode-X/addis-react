import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from "react";

import ViewEmployee from "./pages/ViewEmployee";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="view-employee/:id" element={<ViewEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
