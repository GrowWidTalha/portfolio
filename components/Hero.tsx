import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { FaLocationArrow } from "react-icons/fa"
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
        </div>
    <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center justify-center flex-col">
            <h2 className="tracking-widest uppercase text-xs text-center text-blue-100 max-w-80 ">Dynamic web magic with next.js</h2>
            <TextGenerateEffect isHero className="text-center" words="Transforming Concepts Into Seamless User Experiences"/>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-xl lg:text-2xl">
              Hi I'm Talha ali. I'm a Software Engineer based in Pakistan.
            </p>
            <a href="#about">
              <MagicButton text="Explore my work" position="right" icon={<FaLocationArrow />} />
            </a>
        </div>
    </div>
    </div>
  )
}

export default Hero

// 38:44