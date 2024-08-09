import Head from 'next/head';
import TopBar from '../app/components/TopBar';
import Image from 'next/image';
import projectZeroLogo from '../app/images/projectzero.png';
import eubcologo from '../app/images/eubco.png';
import mitacslogo from '../app/images/mitacs.png';
import benefit1 from '../app/images/benefit1.png';
import benefit2 from '../app/images/benefit2.png';
import benefit3 from '../app/images/benefit3.png';
import benefit4 from '../app/images/benefit4.png';
import step1 from '../app/images/step1.png';
import step2 from '../app/images/step2.png';
import step3 from '../app/images/step3.png';

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
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
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
  
        <section id="benefits" className="bg-white text-black py-8">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Why Brokol Meal Planner? What benefits you get?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 px-4">
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-4 w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[110px] h-full mr-4 bg-white rounded-lg">
                  <Image src={benefit1} alt="Reduce Overwhelm" width={90} height={90} />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-xl font-semibold">Reduce Overwhelm</h3>
                  <p className="pl-3 text-left pr-3">Effortlessly manage meal planning and stress with an ADHD-friendly interface.</p>
                </div>
              </div>
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-4 w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[110px] h-full mr-4 bg-white rounded-lg">
                  <Image src={benefit2} alt="Personalize Meals" width={90} height={90} />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-xl font-semibold">Personalize Meals</h3>
                  <p className="pl-3 text-left pr-3">Quickly create meal plans with your favorite recipes to fit your preferences.</p>
                </div>
              </div>
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-4 w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[110px] h-full mr-4 bg-white rounded-lg">
                  <Image src={benefit3} alt="Shop Efficiently" width={90} height={90} />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-xl font-semibold">Shop Efficiently</h3>
                  <p className="pl-3 text-left pr-3">Get categorized shopping lists for quick and easy grocery trips.</p>
                </div>
              </div>
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-4 w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[110px] h-full mr-4 bg-white rounded-lg">
                  <Image src={benefit4} alt="Simplify Cooking" width={90} height={90} />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-xl font-semibold">Simplify Cooking</h3>
                  <p className="pl-3 text-left pr-3">Create easy recipes that make cooking enjoyable and stress-free.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="bg-background-green text-white py-16">
          <div className="container mx-auto  max-w-4xl">
            <h2 className="text-3xl mb-8 text-left pl-10">BROKOL lets you create your personalized meal plan effortlessly. <span className="font-bold">It just takes 3 simple steps!</span></h2>
            <div className="grid grid-cols-1 gap-y-8 px-4">
              <div className="flex flex-col md:flex-row items-center p-4 bg-white text-black rounded-lg mx-4 w-full md:max-w-full">
                <div className="flex justify-center items-center w-24 h-24 bg-background-green text-white font-bold rounded-full mb-4 md:mb-0 md:mr-8">
                  (1)
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-left">Fill in your preferences</h3>
                  <p className="text-left mb-3">Such as number of meals, dietary restrictions, and others. Include any favorite recipes you might have.</p>
                  <Image src={step1} alt="Step 1" className="rounded-lg shadow-lg" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center p-4 bg-white text-black rounded-lg mx-4 w-full md:max-w-full">
                <div className="flex justify-center items-center w-24 h-24 bg-background-green text-white font-bold rounded-full mb-4 md:mb-0 md:mr-8">
                  (2)
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-left">Generate your personalized meal plan</h3>
                  <p className="text-left mb-3">Customize by deleting or adjusting meals. Don't forget to keep your favorite(s)!</p>
                  <Image src={step2} alt="Step 2" className="rounded-lg shadow-lg" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center p-4 bg-white text-black rounded-lg mx-4 w-full md:max-w-full">
                <div className="flex justify-center items-center w-24 h-24 bg-background-green text-white font-bold rounded-full mb-4 md:mb-0 md:mr-8">
                  (3)
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-left">Get your meal plan and categorized shopping list</h3>
                  <p className="text-left mb-3">Done!</p>
                  <Image src={step3} alt="Step 3" className="rounded-lg shadow-lg" />
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
