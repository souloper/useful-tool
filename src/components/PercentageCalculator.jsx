import html2canvas from "html2canvas";
import { useState } from "react";
import logo from "../assets/logo.png";
import SEO from "./SEO";

const PercentageCalculator = () => {
  const [cgpa, setCGPA] = useState("");
  const [percentage, setPercentage] = useState("");
  const [imageData, setImageData] = useState(null);

  const calculatePercentage = () => {
    const cgpaFloat = parseFloat(cgpa);
    const calculatedPercentage = (cgpaFloat - 0.75) * 10;
    setPercentage(calculatedPercentage.toFixed(1));
  };

  const generateImage = () => {
    const content = document.getElementById("img-content");
    const link = document.createElement("a");
    let count = 0;

    html2canvas(content, { scale: 2 }).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      setImageData(dataUrl);
    });

    link.href = imageData;
    count++;
    link.download = `CGPA2Percentage${count}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
    className="bg-gray-100 min-h-screen py-12 flex flex-col items-center"
    style={{
      backgroundColor: "#f3f4f6",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bfdbfe' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
    >
    {/* <SEO tit="CGPA Calculator" desc="Calculate CGPA to Percentage" /> */}

      <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-1">
        <div
          id="img-content"
          className="bg-white rounded-xl overflow-hidden shadow-lg border border-t-8 border-t-blue-200 transition-transform transform hover:scale-105"
        >
          <div className="p-8">
            <img
              className="w-20 h-20 mx-auto rounded shadow-lg flex justify-center items-center"
              src={logo}
              alt="Bonnie image"
            />

            <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-3">
              CGPA Converter
            </h2>
            <p className="text-gray-600 mb-6">{`Created for MAKAUT(WBUT)'s CGPA to Percentage conversion.`}</p>
            <div className="flex row-auto items-center mb-6">
              <p className="w-full">Enter CGPA: </p>
              <input
                type="number"
                value={cgpa}
                onChange={(e) => setCGPA(e.target.value)}
                id="cgpa-number"
                autoComplete=""
                className="block ml-3 justify-center w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Enter CGPA"
                maxLength="4"
                size={4}
                required
              />
            </div>
            <div className="flex row-auto items-center">
              <p>Percentage:</p>
              <p className=" ml-6 text-4xl font-bold text-gray-800 mb-2 mr-1">
                {percentage}
              </p>
              {`%`}
            </div>
          </div>
          <div className="flex flex-row justify-center gap-3 p-5">
            <button
              onClick={calculatePercentage}
              className="w-full shadow-lg inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
              // className="w-full bg-emerald-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              <span className="w-full py-2.5 transition-all rounded-full ease-in duration-75 text-black bg-white group-hover:bg-opacity-0 hover:text-white">
                Calculate Percentage
              </span>
            </button>
            <button
              onClick={generateImage}
              className="w-full shadow-lg inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
            >
              <span className="w-full py-2.5 transition-all rounded-full ease-in duration-75 text-black bg-white group-hover:bg-opacity-0 hover:text-white">
                Download Image
              </span>
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full rounded-lg mb-auto sticky top-[100vh]">
        <div className="w-full max-w-screen-xl mx-auto pt-4 pr-4 pl-4 pb-0">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://github.com/souloper" className="hover:underline">
              Developed with 💖 by souloper
            </a>
            .
          </span>
        </div>
      </footer>
    </div>
  );
};

export default PercentageCalculator;
