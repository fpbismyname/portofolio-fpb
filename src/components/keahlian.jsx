import React from "react";

const TentangSaya = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ssm:hidden lg:block" id="keahlian">
        <div className="flex flex-col p-24 bg-blue-500 rounded-xl gap-12">
          <h1 className="flex justify-center items-center text-3xl">
            Penguasaan Keahlian
          </h1>
          <div className="flex flex-row items-center justify-center gap-12 ">
            <div className="flex flex-col justify-center items-center bg-yellow-400 rounded-md text-center p-5 gap-5">
              <h1>35%</h1>
              <p>Web Development</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-400 rounded-md text-center p-5 gap-5">
              <h1>25%</h1>
              <p>Desktop Apps Development</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-lime-400 rounded-md text-center p-5 gap-5">
              <h1>50%</h1>
              <p>Game Development</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-orange-400 rounded-md text-center p-5 gap-5">
              <h1>45%</h1>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ssm:block lg:hidden" id="keahlian">
        <div className="flex flex-col p-5 bg-blue-500 rounded-xl gap-12">
          <h1 className="flex justify-center items-center text-xl text-center">
            Penguasaan Keahlian
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <div className="flex flex-col justify-center items-center bg-yellow-400 rounded-md text-center p-2 gap-2 text-xs">
              <h1>35%</h1>
              <p>Web Development</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-400 rounded-md text-center p-2 gap-2 text-xs">
              <h1>25%</h1>
              <p>Desktop Apps Development</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-lime-400 rounded-md text-center p-2 gap-2 text-xs">
              <h1>50%</h1>
              <p>Game Development</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-orange-400 rounded-md text-center p-2 gap-2 text-xs">
              <h1>45%</h1>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangSaya;
