import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Add } from "./pages/add/Add";
import { Bulk } from "./pages/bulk/Bulk";
import { DataTables } from "./pages/data-tables/DataTables";
import { About } from "./pages/about/About";
import { DataReceivedSuccessfully } from "./pages/DataReceivedSuccessfully";
import { NoMatch } from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/add" element={<Add />}>
          Add
        </Route>
        <Route path="/bulk" element={<Bulk />}>
          Bulk
        </Route>
        <Route path="/dt" element={<DataTables />}>
          Data Tables
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route
          path="/add/data-received"
          element={<DataReceivedSuccessfully />}
        />
        <Route
          path="/bulk/data-received"
          element={<DataReceivedSuccessfully />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
