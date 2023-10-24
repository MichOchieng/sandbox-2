import Image from "next/image";

export default function Home() {
  const path =
    "M42.9922 156.102C52.6891 119.65 57.6067 81.7669 84.7546 55.5799C111.446 29.8334 148.691 24.9225 185.277 18.8539C233.32 10.8848 287.073 -13.9569 325.778 15.6004C365.952 46.2795 372.124 106.058 365 156.102C358.7 200.354 317.465 225.742 290.76 261.585C255.17 309.355 243.156 383.236 185.277 397.329C122.59 412.593 44.6673 385.06 11.8895 329.489C-19.1222 276.912 27.2998 215.092 42.9922 156.102Z";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-fit h-fit border-2 border-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="369"
          height="403"
          viewBox="0 0 369 403"
          fill="none"
          className="flex items-center justify-center overflow-hidden"
        >
          <defs>
            <clipPath id="mask">
              <path fill="#FFFFFF" d={path} stroke="black" stroke-width="2" />
            </clipPath>
          </defs>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 369 403"
            clip-path="url(#mask)"
          >
            <foreignObject clip-path="url(#mask)" className="h-full w-full">
              <div className="relative h-full w-full border overflow-hidden">
                <video className="object-cover h-full w-full" muted preload="auto" autoPlay loop playsInline>
                  <source
                    src="https://download-video.akamaized.net/v2-1/playback/bdb3a683-9706-4177-8ca4-48dfe2703fac/c72af10b?__token__=st=1697869406~exp=1697883806~acl=%2Fv2-1%2Fplayback%2Fbdb3a683-9706-4177-8ca4-48dfe2703fac%2Fc72af10b%2A~hmac=963665c137465c1b6dce05c041899613a62201e2d5b92420aa308b93f292c69d&r=dXMtd2VzdDE%3D"
                    type="video/mp4"
                  />
                </video>
              </div>
            </foreignObject>
          </svg>
        </svg>
      </div>
    </main>
  );
}
