import Navbar from "../components/navbar";

import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import "../App.css";

ChartJs.register(ArcElement, Tooltip, Legend);

function profile() {
  //use doughnut in form
  const data = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#FBFBFB", "#202430"],
        borderColor: [" #3A4151"],
        radius: 40,
        hoverOffset: 4,
        cutout: 45,
      },
    ],
  };

  const options = {
    aspectRatio: 2,
    maintainAspectRatio: false,
    responsive: true,
  };

  //add text in center of Doughnut chart
  const textCenter = {
    id: "textCenter",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("40%", centerX, centerY);
    },
  };

  return (
    <>
      <div className="bg-fitness-dark h-lvh  text-white flex flex-col">
        <h2 className="text-2xl font-bold my-14 mx-4">Name</h2>
        <div className="relative rounded-full p-16 mx-32  mt-16 gradientBg-blue"></div>
        <a className="flex justify-center mt-4" href="#">
          Profil bearbeiten
        </a>
        <p className="mx-4 my-3 pt-10">Aktueller Trainingsplan</p>
        <main>
          <div className="bg-fitness-medium rounded-3xl flex flex-row justify-start items-center mx-4">
            <div className="relative w-32 h-32">
              <Doughnut
                className=""
                data={data}
                options={options}
                plugins={[textCenter]}
              />
            </div>
            <div>
              <h2 className="flex justify-start text-xl">
                Titel des Programms
              </h2>
              <p className="text-xs flex justify-start">1 von 8 geschafft</p>
            </div>
          </div>
        </main>
        <div className="text-center absolute inset-x-0 bottom-0">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default profile;
