import Image from "next/image";
import bgImage from "@/public/home/Bg.jpg"

export default function Home() {
  return (
    <div>
      <Image className="blur-sm" src={bgImage}
      alt="Background Image"
      fill
      sizes="100vw"
      style={{objectFit:"cover"}}
      >

      </Image>
    </div>
  );
}
