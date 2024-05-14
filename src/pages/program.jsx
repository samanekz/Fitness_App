import BtnPrimary from "../components/btnPrimary";
import { useQuery, gql } from "@apollo/client";

import { useLocation, useParams } from "react-router-dom";

const GET_PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      difficulty
      description
      duration
    }
  }
`;

function program() {
  // samane wie kann erkennen dass href addresse kommt
  const params = useParams();
  const programId = params.id;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { program } = data;
  console.log(data);
  return (
    <>
      <div className="flex-col justify-center h-96 gradientBg-orange">
        <div className="flex justify-center">
          <p>{program.name}</p>
        </div>
        <div className="flex items-end justify-around">
          <p>{program.difficulty}</p>
          <p>{program.duration} Wochen</p>
        </div>
      </div>
      <div>
        <p>{program.description}</p>
        <BtnPrimary>jetzt starten</BtnPrimary>
      </div>
      <div>
        <a href={`/programs`}>programs</a>
      </div>
    </>
  );
}

export default program;
