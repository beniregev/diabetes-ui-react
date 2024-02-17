import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Add a Measurement</h1>
      <div>
        <button onClick={() => navigate("data-received")}>Submit</button>
      </div>
    </>
  );
};

export default Add;
