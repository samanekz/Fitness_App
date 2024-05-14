import { useQuery, gql } from "@apollo/client";

import "../App.css";
import Navbar from "../components/navbar";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      description
      focus
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;

// samane wie verwindet mit die pages;
function programs() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  let lastIndex = -1;
  function getColor() {
    const colors = ["gradientBg-orange", "gradientBg-green", "gradientBg-blue"];
    lastIndex = (lastIndex + 1) % colors.length;
    return colors[lastIndex];
  }
  return (
    <>
      <div className="bg-fitness-dark h-lvh  text-white flex flex-col">
        <h2 className="text-2xl font-bold my-14 mx-7">Browse</h2>
        {data.programs.map((program) => (
          <>
            <main
              className={` relative rounded-3xl pt-52 mx-7 my-3 text-center ${getColor()}`}
            >
              <a
                // Samaneh what should i do that text in center for div
                className="absolute inset-24 my-auto font-bold text-2xl mx-auto scroll-auto"
                href={`/program/${program.id}`}
                key={program.id}
              >
                {program.name}
                <br />
              </a>
            </main>
          </>
        ))}
        <div className="text-center absolute inset-x-0 bottom-0">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default programs;
