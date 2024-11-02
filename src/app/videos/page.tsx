

// pages/more-videos.tsx

'use client'

import { FC } from "react";
import Link from "next/link"; // Import Link for navigation
import { Merriweather } from "next/font/google"; // Import fonts from next/font
import { Slide } from "react-awesome-reveal"; // Import slide animation from react-awesome-reveal
import { MdPlayCircleOutline } from "react-icons/md"; // Import video icon from react-icons
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load fonts

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"] });

interface VideoItem {
  title: string;
  url: string;
}

const videos: VideoItem[] = [
  {
    title: "be assured, we get you there",
    url: "https://youtube.com/embed/waBUdHnaqd8",
  },
  {
    title: "our customer-based solutions",
    url: "https://youtube.com/embed/1ZQ1pN9Z4II",
  },
  {
    title: "Silent video",
    url: "https://youtube.com/embed/7OEAksqy9qM",
  },
];

const MoreVideos: FC = () => {
  return (
    <>
    <Header />
    <section className={`p-6 ${merriweather.className}`}>
      <div className="flex items-center justify-center text-3xl font-bold text-center mb-8">
        <MdPlayCircleOutline className="mr-2 text-yellow-500" />
        <h2 className={merriweather.className}>More Video Highlights</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <Slide key={index} direction="left">
            <div className="video-item bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className={`text-xl font-semibold p-4 $${merriweather.className}`}>{video.title}</h3>
              <iframe
                className="w-full h-60"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Slide>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline text-lg">
          Back Home
        </Link>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default MoreVideos;
