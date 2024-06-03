import React from "react";
import FPB from "../../public/fpb.png";

const TentangSaya = () => {
  const BioSaya =
    "Seorang adalah seorang pengembang perangkat lunak yang berdedikasi dan memiliki pengetahuan dengan pengetahuan di bidang pengembangan perangkat lunak dan game. Memiliki latar belakang yang solid dalam membangun aplikasi perangkat lunak yang inovatif dan kreatif. Berfokus pada penciptaan aplikasi yang efisien dan ramah pengguna untuk menyelesaikan tantangan teknis. Lulusan Sekolah Menengah Kejuruan (SMK) di bidang Pengembangan Perangkat Lunak dan Gim (PPLG), yang memberikan fondasi yang kokoh dalam pemahaman praktis tentang konsep-konsep pemrograman dan pengembangan perangkat lunak.";
  return (
    <>
      <div className="flex flex-col items-center justify-center ssm:hidden lg:block" id="tentang_saya">
        <div className="flex flex-row justify-center items-center p-5 bg-blue-500 rounded-xl gap-5 w-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl">Hi, Saya Fajar Perdiansyah Budiman</h1>
            <p className="flex text-m">{BioSaya}</p>
          </div>
          <img src={FPB} className="object-scale-down" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ssm:block lg:hidden" id="tentang_saya">
        <div className="flex flex-col justify-center items-center p-5 bg-blue-500 rounded-xl gap-5 w-auto">
        <img src={FPB} width={100} className="object-scale-down" />
          <div className="flex flex-col gap-5">
            <h1 className="text-xl">Hi, Saya Fajar Perdiansyah Budiman</h1>
            <p className="flex text-xs">{BioSaya}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangSaya;
