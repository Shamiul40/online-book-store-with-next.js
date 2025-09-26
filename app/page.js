import Image from "next/image";
import bgImage from "@/public/home/Bg.jpg"
import Link from "next/link";

import {SparklesIcon, SpeakerXMarkIcon} from "@heroicons/react/24/solid"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen  relative">
      <Image className="blur-xs" src={bgImage}
      alt="Background Image"
      fill
      sizes="100vw"
      style={{objectFit:"cover"}}
      >
        
      </Image>


      <div className="z-10 p-2 flex flex-col justify-center items-center   rounded-lg bg-purple-100 md:w-2/5 h-2/4">

        <div className="text-purple-800 flex pb-5 mb-5 text-5xl ">
          <SparklesIcon className="w-12 h-12 p-2" />
          <p >LitLoop</p>
        </div>
        <div>
          <Link className="bg-purple-700 p-2 rounded-lg text-white" href="/store">
            Take me to the store
          </Link>
        </div>

      </div>
    </div>
  );
}
