import { useQuery, gql } from "@apollo/client";

import { useParams } from "react-router-dom";

import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import BtnPrimary from "../components/btnPrimary";

ChartJs.register(ArcElement, Tooltip, Legend);

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

function programName() {
  // samane wie kann erkennen dass href addresse kommt
  const params = useParams();
  const programId = params.id;

  const data = {
    datasets: [
      {
        data: [40, 40, 20, 20],
        backgroundColor: ["#FBFBFB", "#202430"],
        borderColor: [" #3A4151"],
        radius: 70,
        hoverOffset: 4,
        cutout: 0,
      },
    ],
  };

  const options = {
    aspectRatio: 2,
    maintainAspectRatio: false,
    responsive: true,
  };

  const {
    loading,
    error,
    data: apolloData,
  } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { program } = apolloData;
  return (
    <>
      <div className="text-white">
        {/* samaneh i try to change the position with flex but i coouldnt */}
        <div className=" gradientBg-orange">
          <div className="pt-48">
            <div className="flex items-center">
              <p className="text-4xl font-bold text-center">{program.name}</p>
            </div>
            {/* samaneh, chi kar konam ke wochen chon bozorgtare baghiyaro hol nade ye tarafe dige */}
            <div className="flex justify-around pt-44">
              {/* <p>{program.difficulty}</p> */}
              <div>
                <div className="flex justify-center">
                  <div className="bg-fitness-medium h-6 w-6 rounded-full"></div>
                </div>
                <p className="text-sm font-normal py-2">KRAFT</p>
              </div>
              <div>
                <div className="flex justify-center">
                  <div className="bg-fitness-medium h-6 w-6 rounded-full flex justify-center"></div>
                </div>
                <p className="text-sm font-normal py-2">LEICHT</p>
              </div>
              <div>
                <div className="flex justify-center">
                  <div className="bg-fitness-medium h-6 w-6 rounded-full flex justify-center text-sm"></div>
                </div>
                <p className="font-normal py-2">{program.duration} Wochen</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fitness-medium">
          <p className="px-6 py-5">{program.description}</p>
          <div className="flex justify-center z-1 pb-10">
            <BtnPrimary>jetzt starten</BtnPrimary>
          </div>
        </div>
        <div className="bg-fitness-dark p-8">
          <div>
            <h3 className="font-bold text-2xl">
              So ist das Programm aufgeteilt:
            </h3>
            {/* samaneh atrafe chartjs ye faselei hast, chejouri mitounam in fasele ra ay bein bebaram alan w-max neveshtam yakam behtar shod */}
            <div className="flex flex-row w-max justify-around py-16 p">
              <div>
                <Doughnut data={data} options={options} plugins={[]} />
              </div>
              <div>
                <div className="">
                  <li className="py-2">Krafttraining</li>
                  <li className="py-2">Koordinate</li>
                  <li className="py-2">Cardio</li>
                  <li className="py-2">Beweglichkeit</li>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <h3 className="font-bold text-2xl">21 Tage</h3>
            <a>All anzeigen</a>
          </div>
          <div>
            <div className="flex felx-row my-6">
              <div className="gradientBg-orange rounded-l-3xl basis-1/3 "></div>
              <div className="bg-fitness-medium rounded-r-3xl basis-2/3 pl-4">
                <h3 className="mt-1 py-3 font-bold text-2xl">Tag 1</h3>
                <div className="py-3">
                  <p>26 Min.</p>
                  <p>Beweglichkeit</p>
                </div>
              </div>
            </div>
            <div className="flex felx-row my-6">
              <div className="gradientBg-green rounded-l-3xl basis-1/3 "></div>
              <div className="bg-fitness-medium rounded-r-3xl basis-2/3 pl-4">
                <h3 className="mt-1 py-3 font-bold text-2xl">Tag 2</h3>
                <div className="py-3">
                  <p>26 Min.</p>
                  <p>Beweglichkeit</p>
                </div>
              </div>
            </div>
            <div className="flex felx-row my-6">
              <div className="gradientBg-blue rounded-l-3xl basis-1/3 "></div>
              <div className="bg-fitness-medium rounded-r-3xl basis-2/3 pl-4">
                <h3 className="mt-1 py-3 font-bold text-2xl">Tag 3</h3>
                <div className="py-3">
                  <p>26 Min.</p>
                  <p>Beweglichkeit</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href={`/programs`}>programs</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default programName;
