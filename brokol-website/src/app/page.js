"use client";

import Head from "next/head";
import { useState } from "react";
import TopBar from "../app/components/TopBar";
import Image from "next/image";
import Link from "next/link";
import { db } from "../app/firebase";
import { collection, addDoc } from "firebase/firestore";
import projectZeroLogo from "../app/images/projectzero.png";
import eubcologo from "../app/images/eubco.png";
import mitacslogo from "../app/images/mitacs.png";
import benefit1 from "../app/images/benefit1.png";
import benefit2 from "../app/images/benefit2.png";
import benefit3 from "../app/images/benefit3.png";
import benefit4 from "../app/images/benefit4.png";
import step1 from "../app/images/step1.png";
import step2 from "../app/images/step2.png";
import step3 from "../app/images/step3.png";
import user1 from "../app/images/user1.png";
import instagram from "../app/images/instagram.png";
import linkedin from "../app/images/linkedin.png";
import tiktok from "../app/images/tiktok.png";
import threads from "../app/images/threads.png";

async function handleEmailSubmission(email) {
  try {
    await addDoc(collection(db, "emails"), {
      email: email,
      timeStamp: new Date(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("There was an error registering your email.");
  }
}

export default function Home() {
  const [messageTop, setMessageTop] = useState("");
  const [messageBottom, setMessageBottom] = useState("");

  return (
    <div>
      <Head>
        <title>BROKOL Planner</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <TopBar />

      <main className="bg-background-green text-white">
        <section
          id="demo"
          className="relative md:min-h-[50vh] flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 mt-28 md:mt-20">
            Simplified Meal Planning for{" "}
            <span className="text-brokol-green">ADHD</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            Streamline Your Meals and Reduce Overwhelm with Our ADHD-Friendly
            Meal Planner
          </p>
          <div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.email.value; // Get the value from the form input
                await handleEmailSubmission(email);
                e.target.reset(); // Reset the form after submission

                // Set the confirmation message
                setMessageTop(
                  `We will reach out to your email ${email} within 24 hours :)`
                );
              }}
              className="flex flex-col md:flex-row justify-center items-center mb-0 md:mb-8 space-y-4 md:space-y-0 md:space-x-0"
            >
              <input
                type="email"
                name="email"
                placeholder="Type your email ..."
                className="w-11/12 md:w-96 px-4 py-2 text-black rounded-lg md:rounded-l-lg md:rounded-r-none focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-11/12 md:w-auto px-4 py-2 bg-brokol-green hover:bg-gray-700 text-white rounded-lg md:rounded-r-lg md:rounded-l-none"
              >
                End the Overwhelm
              </button>
            </form>
            {/* Display the message if it's set */}
            {messageTop && <p className="text-center text-600">{messageTop}</p>}
          </div>

          {/* Added more margin-bottom to create extra space */}
          <div className="absolute inset-x-0 bottom-[-250px] md:bottom-[-350px] z-10 flex justify-center mt-8 px-4 md:px-0">
            <div className="w-full max-w-[90%] md:max-w-[704px]">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/0tm_YvOIQAk?si=X_-kBOnKLQKhGfjU" // Replace with actual video URL
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                className="rounded-lg aspect-video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section
          id="supported-by"
          className="bg-white text-black py-16 mt-[150px]"
        >
          <div className="container mx-auto text-center mt-[100px] md:mt-[170px] px-4 sm:px-0">
            <h2 className="text-2xl font-bold mb-8">Supported by</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12 md:pr-20 sm:pr-20">
              <div className="mt-2 w-40 sm:w-60 h-auto mx-1">
                <Image
                  src={projectZeroLogo}
                  alt="Project Zero"
                  width={610}
                  height={154}
                />
              </div>
              <div className="w-20 h-auto mx-auto">
                <Image src={eubcologo} alt="eubco" width={200} height={200} />
              </div>
              <div className="mt-6 w-24 sm:w-40 h-auto mx-auto">
                <Image src={mitacslogo} alt="mitacs" width={200} height={200} />
              </div>
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="scroll-offset bg-white text-black pt-4 pb-20"
        >
          <div className="container mx-auto text-center max-w-4xl px-4 sm:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Why Brokol Meal Planner? What benefits you get?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 px-4 sm:px-0">
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-auto w-full sm:w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[90px] sm:min-w-[110px] min-h-[90px] sm:min-h-[110px] mr-4 bg-white rounded-lg">
                  <Image
                    src={benefit1}
                    alt="Reduce Overwhelm"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-lg sm:text-xl font-semibold">
                    Reduce Overwhelm
                  </h3>
                  <p className="pl-3 text-left pr-3 text-sm sm:text-base">
                    Effortlessly manage meal planning and stress with an
                    ADHD-friendly interface.
                  </p>
                </div>
              </div>
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-auto w-full sm:w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[90px] sm:min-w-[110px] h-full mr-4 bg-white rounded-lg">
                  <Image
                    src={benefit2}
                    alt="Personalize Meals"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-lg sm:text-xl font-semibold">
                    Personalize Meals
                  </h3>
                  <p className="pl-3 text-left pr-3 text-sm sm:text-base">
                    Quickly create meal plans with your favorite recipes to fit
                    your preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-auto w-full sm:w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[90px] sm:min-w-[110px] h-full mr-4 bg-white rounded-lg">
                  <Image
                    src={benefit3}
                    alt="Shop Efficiently"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-lg sm:text-xl font-semibold">
                    Shop Efficiently
                  </h3>
                  <p className="pl-3 text-left pr-3 text-sm sm:text-base">
                    Get categorized shopping lists for quick and easy grocery
                    trips.
                  </p>
                </div>
              </div>
              <div className="flex items-stretch p-4 bg-background-green text-white rounded-lg mx-auto w-full sm:w-[400px] md:max-w-md">
                <div className="flex items-center justify-center min-w-[90px] sm:min-w-[110px] h-full mr-4 bg-white rounded-lg">
                  <Image
                    src={benefit4}
                    alt="Simplify Cooking"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
                <div className="flex flex-col justify-center flex-grow gap-3">
                  <h3 className="pl-3 text-left text-lg sm:text-xl font-semibold">
                    Simplify Cooking
                  </h3>
                  <p className="pl-3 text-left pr-3 text-sm sm:text-base">
                    Create easy recipes that make cooking enjoyable and
                    stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-offset bg-background-green text-white py-16"
        >
          <div className="container mx-auto max-w-3xl px-6 md:px-0">
            <h2 className="text-2xl md:text-3xl mb-8 text-left pl-3 md:pl-10">
              BROKOL lets you create your personalized meal plan effortlessly.{" "}
              <span className="font-bold">It just takes 3 simple steps!</span>
            </h2>
            <div className="space-y-8 ">
              <div className="flex flex-col md:flex-row items-center border border-white rounded-lg bg-background-green py-3">
                <div className="md:w-1/2 text-left px-10 md:pl-16 md:pr-28 py-3">
                  <span className="text-white text-2xl font-bold">
                    ( 1 )<br />
                  </span>
                  <span className="text-white text-lg font-normal">
                    <br />
                  </span>
                  <span className="text-white text-lg font-bold">
                    Fill in your preferences{" "}
                  </span>
                  <span className="text-white text-lg font-normal">
                    such as number of meals, dietary restrictions, and others.
                    <br />
                    <br />
                    Include any favorite recipes you might have.
                  </span>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0 mx-4 md:mr-3">
                  <Image src={step1} alt="Step 1" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center border border-white rounded-lg bg-background-green">
                <div className="md:w-1/2 text-left px-10 md:pl-16 md:pr-28 py-3">
                  <span className="text-white text-2xl font-bold">
                    ( 2 )<br />
                  </span>
                  <span className="text-white text-lg font-normal">
                    <br />
                  </span>
                  <span className="text-white text-lg font-bold">
                    Generate your personalized meal plan. <br />
                    <br />{" "}
                  </span>
                  <span className="text-white text-lg font-normal">
                    Customize by deleting or adjusting meals.
                    <br />
                    <br />
                    Don’t forget to keep
                    <br /> your favorite(s)!
                  </span>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 mx-4 md:mr-4">
                  <Image src={step2} alt="Step 2" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center border border-white rounded-lg bg-background-green">
                <div className="md:w-1/2 text-left px-10 md:pl-16 md:pr-28 py-3">
                  <span className="text-white text-2xl font-bold">
                    ( 3 )<br />
                  </span>
                  <span className="text-white text-lg font-normal">
                    <br />
                  </span>
                  <span className="text-white text-lg font-bold">
                    Get your meal plan and categorized shopping list.
                  </span>
                  <span className="text-white text-lg font-normal">
                    <br />
                    <br />
                    Done!
                  </span>
                </div>
                <div className="md:w-1/2 flex justify-center items-center mx-10 md:mt-10 md:mr-10">
                  <Image
                    src={step3}
                    alt="Step 3"
                    className="rounded-t-lg shadow-lg object-cover  md:w-4/5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="scroll-offset bg-white text-black py-16"
        >
          <div className="container mx-auto text-left max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-normal mb-8 px-5">
              Don&apos;t just take our words.{" "}
              <span className="font-bold">
                Read what people with ADHD say about our meal planner.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              <div className="p-6 bg-background-green text-white rounded-lg px-7">
                <div className="flex items-center mb-4">
                  <span className="text-lg font-semibold text-brokol-green">
                    ★★★★★
                  </span>
                </div>
                <p className="text-lg mb-4 pb-6 pt-1">
                  “The meal planner eliminated all controllable overwhelm. Once
                  I had the meals picked, it was really easy to pick out what
                  groceries I need to buy.”
                </p>
                <div className="flex items-center">
                  <div className="text-left">
                    <p className="text-sm font-semibold">
                      - Nicole (20s), living with her partner
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-background-green text-white rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-lg font-semibold text-brokol-green">
                    ★★★★★
                  </span>
                </div>
                <p className="text-lg mb-4">
                  “I love how easy it is to make quick changes, and how I can
                  keep updating it to fit my needs. For example, I was getting
                  too many zucchini recipes, so I just adjusted it, and now
                  it&apos;s perfect for me!”
                </p>
                <div className="flex items-center">
                  <div className="text-left">
                    <p className="text-sm font-semibold">
                      - Laura (50s), living alone
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center bg-white border border-background-green border-2 rounded-lg p-8 shadow-md mx-4">
              <h3 className="text-2xl md:text-3xl font-semibold my-4">
                Join 70+ ADHDers as an early adopter to
                <br /> reduce the overwhelm of meal planning.
              </h3>
              <div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const email = e.target.email.value; // Get the value from the form input
                    await handleEmailSubmission(email);
                    e.target.reset(); // Reset the form after submission

                    // Set the confirmation message
                    setMessageBottom(
                      `We will reach out to your email ${email} within 24 hours :)`
                    );
                  }}
                  className="flex flex-col md:flex-row justify-center items-center my-8 space-y-4 md:space-y-0 md:space-x-0"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Type your email ..."
                    className="w-11/12 md:w-96 px-4 py-2 text-black rounded-lg md:rounded-l-lg md:rounded-r-none border border-background-green focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-11/12 md:w-auto px-4 py-2 bg-brokol-green hover:bg-gray-700 text-white rounded-lg md:rounded-r-lg md:rounded-l-none"
                  >
                    End the Overwhelm
                  </button>
                </form>

                {/* Display the message if it's set */}
                {messageBottom && (
                  <p className="text-center text-600">{messageBottom}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="footer" className="bg-background-green text-white py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* For Mobile View */}
            <div className="flex flex-col md:hidden items-start space-y-6">
              <h3 className="text-4xl font-black text-brokol-green">BROKOL</h3>
              <div>
                <p className="py-1">Have any questions?</p>
                <p>
                  Contact us at{" "}
                  <a href="mailto:hello@brokol.app" className="underline">
                    hello@brokol.app
                  </a>
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/feed.my.adhd/"
                  aria-label="Instagram"
                >
                  <Image src={instagram} alt="Instagram" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/company/brokol/"
                  aria-label="LinkedIn"
                >
                  <Image src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.tiktok.com/@feed.my.adhd"
                  aria-label="TikTok"
                >
                  <Image src={tiktok} alt="TikTok" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.threads.net/@feed.my.adhd?hl=en"
                  aria-label="Threads"
                >
                  <Image src={threads} alt="Threads" className="w-8 h-8" />
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="/about">
                  <span className="hover:underline">About Us</span>
                </Link>
                <a
                  href="https://www.termsfeed.com/live/3e404b75-36de-40c0-9b69-409c2c6d8b42"
                  target="_blank"
                  className="hover:underline"
                >
                  Terms & Conditions
                </a>
                <a
                  href="https://www.termsfeed.com/live/07ace726-7690-4cf3-910f-1cb3fd1e590c"
                  target="_blank"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
                <p>© 2024 BROKOL. All rights reserved.</p>
              </div>
            </div>

            {/* For Desktop View */}
            <div className="hidden md:flex flex-col md:flex-row justify-between items-center w-full">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-4xl font-black mb-4 text-brokol-green">
                  BROKOL
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/feed.my.adhd/"
                    aria-label="Instagram"
                  >
                    <Image
                      src={instagram}
                      alt="Instagram"
                      className="w-8 h-8 mt-1"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/brokol/"
                    aria-label="LinkedIn"
                  >
                    <Image src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@feed.my.adhd"
                    aria-label="TikTok"
                  >
                    <Image src={tiktok} alt="TikTok" className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.threads.net/@feed.my.adhd?hl=en"
                    aria-label="Threads"
                  >
                    <Image src={threads} alt="Threads" className="w-8 h-8" />
                  </a>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <p className="text-center md:text-right py-1">
                  Have any questions?
                </p>
                <p className="text-center md:text-right">
                  Contact us at{" "}
                  <a href="mailto:hello@brokol.app" className="underline">
                    hello@brokol.app
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex container mx-auto mt-8 border-t border-gray-700 pt-4 justify-center space-x-8 text-sm">
            <p>© 2024 BROKOL. All rights reserved.</p>
            <Link href="/about">
              <span className="hover:underline">About Us</span>
            </Link>
            <a
              href="https://www.termsfeed.com/live/3e404b75-36de-40c0-9b69-409c2c6d8b42"
              target="_blank"
              className="hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="https://www.termsfeed.com/live/07ace726-7690-4cf3-910f-1cb3fd1e590c"
              target="_blank"
              className="hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </section>

        {/* Add more sections here */}
      </main>
    </div>
  );
}
