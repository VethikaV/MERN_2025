import { useContext } from "react";


const StudentResults = () => {
  const result = useContext(ResPub);
  console.log(result);
  return (
    <div>
      <h1>Result:</h1>
      <h2>SGPA:{result.sgpa}</h2>
      <h3>CGPA:{result.cgpa}</h3>
    </div>
  );
};
export default StudentResults;