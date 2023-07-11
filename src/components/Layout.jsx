export default function Main() {
    return (
      <div>
        <section className="w-full text-black">
          <div className=" inline-block items-center pt-0 lg:flex lg:flex-wrap lg:pt-4">
            <div className="lg:w-3/6">
              <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
                Hi! 👋 My name is James
              </h2>
  
              <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
                I&apos;m a software developer experienced in architecting &amp; building modern, scalable business solutions
              </p>

            </div>
            <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
              <img src="/images/placeholder.png" alt="Hero" />
            </div>
            <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
              <img src="/images/placeholder.png" alt="image" />
            </div>
          </div>
        </section>
      </div>
    );
  }