import { useNavigate } from "react-router-dom";

export const DataReceivedSuccessfully = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Data Received Successfully</div>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
};

export default DataReceivedSuccessfully;
