'use client';

import Head from 'next/head';
import TopBar from '../components/TopBar';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>About Us - BROKOL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <main className="text-black pt-24 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="container mx-auto max-w-4xl">
          <Link href="/" className="flex items-center text-black mb-8">
            <span className="text-2xl mr-2 font-bold">←</span>
          </Link>
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-lg leading-relaxed mb-4">
            We are a team of passionate students and recent graduates from UBC Okanagan, dedicated to building technology that makes a difference. The current project, the Brokol Planner, is a response to the unique challenges faced by the ADHD community. We have developed a website that helps users create customized, simplified meal plans, complete with easy-to-follow recipes and categorized shopping lists.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our journey began with the goal of addressing food waste and promoting sustainable consumption. Through our experiences and feedback from our users, we recognized the intense struggles that individuals with ADHD face when it comes to meal planning and grocery shopping. This insight drove us to pivot our focus and create a tool specifically designed to meet their needs.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            At Brokol, we are committed to continuous improvement and innovation. We believe in the power of constant communication with our users, ensuring that their feedback shapes the evolution of our tool. Our mission is to provide a seamless and supportive meal planning experience that not only reduces food waste but also empowers individuals with ADHD to develop more mindful grocery habits.
          </p>
          <p className="text-lg leading-relaxed">
            Join us in our journey as we strive to make a positive impact on the ADHD community and contribute to a more sustainable future for all.
          </p>
        </div>
      </main>
    </div>
  );
}
