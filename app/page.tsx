import Image from "next/image";

export default function Home() {

  const path = "M42.9922 156.102C52.6891 119.65 57.6067 81.7669 84.7546 55.5799C111.446 29.8334 148.691 24.9225 185.277 18.8539C233.32 10.8848 287.073 -13.9569 325.778 15.6004C365.952 46.2795 372.124 106.058 365 156.102C358.7 200.354 317.465 225.742 290.76 261.585C255.17 309.355 243.156 383.236 185.277 397.329C122.59 412.593 44.6673 385.06 11.8895 329.489C-19.1222 276.912 27.2998 215.092 42.9922 156.102Z"
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-fit h-fit ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 369 403"
          className="border w-[500px] h-[500px] border-black relative"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="369"
              height="403"
              viewBox="0 0 369 403"
              fill="none"
              className=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d={path}
                fill="#FF5733"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50%"
              height="50%"
              x="25%"
              y="25%"
              viewBox="0 0 369 403"
              fill="none"
              className=""
              preserveAspectRatio="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d={path}
                fill="black"
                stroke="black"
                stroke-width="2"
              />
            </svg>
        </svg>
      </div>
    </main>
  );
}
