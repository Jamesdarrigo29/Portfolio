import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from '../assets/animations/animation.json'
import { useRef } from "react";

export default function Main() {
  const animationRef = useRef();
    return (
      <div>
        <section className="w-full h-full h-screen text-black">
          <div className=" inline-block items-center pt-0 lg:flex lg:flex-wrap lg:pt-4">
            <div className="lg:w-3/6">
              <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
                Hi!👋 My name is James
              </h2>
  
              <p className="mt-6 max-w-2xl text-xl font-semibold">
                I&apos;m a software developer experienced in architecting &amp; building modern, scalable business solutions
              </p>

            </div>
            <div id="lottie-hero" className="mb-20 mt-0 sm:mt-20 w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
             <Lottie 
                lottieRef={animationRef}
                animationData={animationData}
                loop={true}
                onComplete={() => {
                  // animationRef.current.goToAndStop(30, true)
                }} 
              />
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-12 h-screen w-full">
            <div className="col-span-12 md:col-span-6 order-last md:order-first flex items-center text-center">
              <h1 className="w-full text-center">
                Some of my favorite technologies!
              </h1>
            </div>
            <div className="col-span-12 md:col-span-6 text-center flex items-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere molestias unde ullam delectus labore voluptatibus rerum quod reprehenderit nostrum modi vel, alias ab excepturi id odit beatae officia dolore ipsam?
              Possimus voluptates nam cum perspiciatis, suscipit dolorum doloremque modi quas vero dolores odio explicabo, enim tempora consequuntur! Debitis ullam ad dolore accusamus odio vero. Quod ipsam perspiciatis consequuntur dolor animi.
            </div>
            <div className="col-span-12 md:col-span-6 order-last md:order-last flex items-center text-center">
              <h1 className="w-full text-center">
                Some of my favorite technologies!
              </h1>
            </div>
            <div className="col-span-12 md:col-span-6 text-center flex items-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere molestias unde ullam delectus labore voluptatibus rerum quod reprehenderit nostrum modi vel, alias ab excepturi id odit beatae officia dolore ipsam?
              Possimus voluptates nam cum perspiciatis, suscipit dolorum doloremque modi quas vero dolores odio explicabo, enim tempora consequuntur! Debitis ullam ad dolore accusamus odio vero. Quod ipsam perspiciatis consequuntur dolor animi.
            </div>
          </div>
        </section>
      </div>
    );
  }