import React, { useEffect, useState } from "react";

function Intro() {
  const [innerWidth, setInnerWidth] = useState(1000)
  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [])
  return (
    <>
      <div
        className=" flex flex-column items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url("/img/horizon-intro.jpg")`,
          backgroundSize: "contain",
        }}
      >
        {/* hide image on phone */}
        {/* <div style={{ position: "absolute", left: "3%", top: "55%" }}>
            <img
              src="./img/amongus.png"
              alt="amg"
              width="50px"
              height="60px"
            />
          </div> */}
        <div style={{ position: "absolute", left: "66%" }}>
          <img src="./img/steve.png" alt="steve" width="50%" height="20%" />
        </div>
        {/* <div
            style={{
              zIndex: "4",
              position: "absolute",
              left: "27%",
              top: "60%",
            }}
          >
            <img src="./img/min.png" alt="min" width="40%" height="40%" />
          </div> */}

        <p
          className="z-10 font-semibold italic text-8xl text-yellow-100 pt-16 m-0"
        >
          Ritesh Aggarwal
        </p>
      </div>
    </>
  );
}

export default Intro;
