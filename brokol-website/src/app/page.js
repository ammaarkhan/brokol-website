import Head from 'next/head';
import TopBar from '../app/components/TopBar';
import Image from 'next/image';
import projectZeroLogo from '../app/images/projectzero.png';
import eubcologo from '../app/images/eubco.png';
import mitacslogo from '../app/images/mitacs.png';
import bowlIcon from '../app/images/bowl.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BROKOL Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <main className="bg-background-green text-white">
        <section id="hero" className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4 mt-20">
            Simplified Meal Planning for <span className="text-brokol-green">ADHD</span>
          </h1>
          <p className="text-xl mb-8">
            Streamline Your Meals and Reduce Overwhelm with Our ADHD-Friendly Meal Planner
          </p>
          <div className="flex justify-center mb-8">
            <input
              type="email"
              placeholder="Type your email ..."
              className="px-4 py-2 text-black rounded-l-lg focus:outline-none"
            />
            <button className="px-4 py-2 bg-brokol-green hover:bg-gray-700 text-white rounded-r-lg">
              Get Early Access
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-[-330px] z-10 flex justify-center">
            <iframe
              width="704"
              height="396"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>

        <section id="supported-by" className="bg-white text-black py-16 mt-[150px]">
          <div className="container mx-auto text-center mt-[170px]">
            <h2 className="text-2xl font-bold mb-8">Supported by</h2>
            <div className="flex justify-center space-x-20 mr-20">
              <div className="mt-2 w-60 h-auto">
                <Image src={projectZeroLogo} alt="Project Zero" layout="responsive" width={610} height={154} />
              </div>
              <div className="w-20 h-auto">
                <Image src={eubcologo} alt="eubco" layout="responsive" width={200} height={200} />
              </div>
              <div className="mt-6 w-40 h-auto">
                <Image src={mitacslogo} alt="mitacs" layout="responsive" width={200} height={200} />
              </div>
            </div>
          </div>
        </section>
  
        <section id="benefits" className="bg-white text-black py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Brokol Meal Planner? What benefits you get?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              <div className="flex items-center p-4 bg-background-green text-white rounded-lg mx-4 md:mx-auto max-w-sm md:max-w-none">
                <div className="flex items-center justify-center w-16 h-16 mr-4 bg-white rounded-full">
                  
                
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Reduce Overwhelm</h3>
                  <p>Effortlessly manage meal planning and stress with an ADHD-friendly interface.</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-background-green text-white rounded-lg mx-4 md:mx-auto max-w-sm md:max-w-none">
                <div className="flex items-center justify-center w-16 h-16 mr-4 bg-white rounded-full">
                  
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Personalize Meals</h3>
                  <p>Quickly create meal plans with your favorite recipes to fit your preferences.</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-background-green text-white rounded-lg mx-4 md:mx-auto max-w-sm md:max-w-none">
                <div className="flex items-center justify-center w-16 h-16 mr-4 bg-white rounded-full">
                  
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Shop Efficiently</h3>
                  <p>Get categorized shopping lists for quick and easy grocery trips.</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-background-green text-white rounded-lg mx-4 md:mx-auto max-w-sm md:max-w-none">
                <div className="flex items-center justify-center w-16 h-16 mr-4 bg-white rounded-full">
                  
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Simplify Cooking</h3>
                  <p>Create easy recipes that make cooking enjoyable and stress-free.</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Add more sections here */}
      </main>
    </div>
  );
}
