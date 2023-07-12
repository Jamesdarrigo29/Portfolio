import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from '../assets/animations/animation.json'
import { useRef } from "react";

export default function Main() {
    const animationRef = useRef<LottieRefCurrentProps>(null)
    return (
      <div>
        <section className="w-full text-black">
          <div className=" inline-block items-center pt-0 lg:flex lg:flex-wrap lg:pt-4">
            <div className="lg:w-3/6">
              <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
                Hi!👋 My name is James
              </h2>
  
              <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
                I&apos;m a software developer experienced in architecting &amp; building modern, scalable business solutions
              </p>

            </div>
            <div className="mb-20 mt-44 w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
             <Lottie 
                lottieRef={animationRef}
                animationData={animationData}
                loop={true}
                onComplete={() => {
                  animationRef.current?.goToAndPlay(20, true)
                }} 
              />
            </div>
          </div>
        </section>
      </div>
    );
  }