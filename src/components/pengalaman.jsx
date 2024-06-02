import React from "react";
import IndoRental from '../../public/indorental.jpg'

const Pengalaman = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-36 py-10 ssm:hidden lg:block">
        <div className="flex flex-col justify-center items-center p-24 bg-blue-500 rounded-xl gap-16 w-auto">
          <h1 className="text-3xl">Pengalaman</h1>
          <div className="flex flex-row gap-10">
            <img src={IndoRental} className="object-scale-down"/>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl">Magang kerja di PT.IndoRental</h1>
              <p className="text-m">Periode magang kerja bulan <span className="bg-blue-400 p-0.5 rounded-md">Juli 2022 sampai Desember 2022</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-16 py-5 ssm:block lg:hidden">
        <div className="flex flex-col justify-center items-center p-5 bg-blue-500 rounded-xl gap-12 w-auto">
          <h1 className="text-xl">Pengalaman</h1>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={IndoRental} width={100} className="object-scale-down"/>
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-m">Magang kerja di PT.IndoRental</h1>
              <p className="text-m">Periode magang kerja bulan <span className="bg-blue-400 p-0.5 rounded-md">Juli 2022 sampai Desember 2022</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pengalaman;
