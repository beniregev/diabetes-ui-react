import { Link } from "react-router-dom";

export const DataTables = () => {
  return (
    <>
      <h1>DataTables</h1>
      <nav className="nav-2nd">
        <Link to="glucose2hba1c">Glucose To HbA1C</Link>
        <Link to="hba1c2glucose">HbA1C To Glucose</Link>
      </nav>
    </>
  );
};

export default DataTables;
