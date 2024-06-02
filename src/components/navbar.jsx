import { useState } from "react";
import { AiFillFileText, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const nav = () => {
  const [toogle, setToogle] = useState(false);

  function openMenu() {
    setToogle(true);
    setTimeout(()=>{
        setToogle(false)
    },500)
  }
  function closeMenu() {
    setToogle(false);
  }
  function click(value){
    switch(value){
        case 1:
            
    }
  }

  const MenuName = {
    1: "Tentang Saya",
    2: "Pengalaman",
    3: "Keahlian",
  };

  return (
    <>
      <div className="text-xl flex flex-row bg-blue-500 justify-between p-4">
        <div className="flex items-center">
          <AiFillFileText size={30} className="mr-3" />
          Portofolio FPB
        </div>
        {/* Mobile View */}
        <div className="ssm:hidden lg:block">
          <div className="flex gap-5">
            <a href="#" className="itemMenu">
              {MenuName[1]}
            </a>
            <a href="#" className="itemMenu">
              {MenuName[2]}
            </a>
            <a href="#" className="itemMenu">
              {MenuName[3]}
            </a>
          </div>
        </div>
        {/* Close Button */}
        <div className="lg:hidden ssm:block flex items-center">
          {toogle ? (
            <AiOutlineClose onClick={closeMenu} size={30} />
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={30} />
          )}
        </div>
      </div>
      {/* Toogle Visible Menu */}
      {toogle ? (
        <div className="lg:hidden ssm:block bg-blue-500">
          <div className="flex flex-col text-center items-center justify-center">
            <ul>
              <li className="itemMenu">{MenuName[1]}</li>
              <li className="itemMenu">{MenuName[2]}</li>
              <li className="itemMenu">{MenuName[3]}</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="lg:hidden ssm:hidden bg-blue-500">
          <div className="flex flex-col text-center items-center justify-center">
            <ul>
              <li className="itemMenu">{MenuName[1]}</li>
              <li className="itemMenu">{MenuName[2]}</li>
              <li className="itemMenu">{MenuName[3]}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default nav;