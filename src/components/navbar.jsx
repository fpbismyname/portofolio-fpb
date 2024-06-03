import { useState } from "react";
import { AiFillFileText, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const nav = () => {
  const [toogle, setToogle] = useState(false);

  function openMenu() {
    setToogle(true);
  }
  function closeMenu() {
    setToogle(false);
  }
  function closing() {
    setTimeout(()=>{
      setToogle(false);
    }, 500)
  }
  function click(value) {
    switch (value) {
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
      <div className="text-xl flex justify-between w-full fixed right-0 p-5 bg-blue-500 select-none">
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
              <a href="#pengalaman" className="itemMenu">
                {MenuName[2]}
              </a>
              <a href="#keahlian" className="itemMenu">
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
        <div className="lg:hidden ssm:block bg-blue-600 fixed z-10 right-0 top-14 rounded-md select-none">
          <div className="flex flex-col">
            <ul onClick={closing}>
              <a href="#" className="itemMenu" >{MenuName[1]}</a>
              <a href="#pengalaman" className="itemMenu" >{MenuName[2]}</a>
              <a href="#keahlian"className="itemMenu" >{MenuName[3]}</a>
            </ul>
          </div>
        </div>
      ) : (null)}
    </>
  );
};

export default nav;
