// import { useLocation, useParams } from "react-router-dom";

export default function program() {
  // samane wie kann erkennen dass href addresse kommt
  //   const location = useLocation();
  //   const params = useParams();
  //   console.log("program location and params", location, params);

  return (
    <div>
      <p>program</p>
      <a href={`/programs`}>programs</a>
      <a href={`/`}>Home</a>
    </div>
  );
}
