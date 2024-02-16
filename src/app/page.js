"use client"
import CardSection from "./Components/CardSec";
import Client from "./Components/Client";
import EyeOpening from "./Components/EyeOpeningEnd";
import EyeSection from "./Components/Eyesection";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import GreenSection from "./Components/GreenSection";
import LandingPage from "./Components/LandingPage";
import LightGreen from "./Components/LightGreen";
import Navbar from "./Components/Navbar";
import ReadyStart from "./Components/ReadytoStart";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from "react";
import HiddenComponent from "./Components/TopLoadingPage";
export default function Home() {
  const [blurr, setBlurr] = useState(true)
  // const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    // Check if window is defined (i.e., running in a browser environment)
    if (typeof window !== 'undefined') {
      const locomotiveScroll = new LocomotiveScroll();}
  }, []);

  return (

    <>
      <main className={`w-full  h-screen relative ${blurr && "blur-sm"} `}>
        <Navbar />
        <LandingPage blurr={blurr}/>
      </main>
        <GreenSection />
        <LightGreen />
        <EyeSection />
        <Featured />
        <div className="h-20 w-full bg-zinc-100 "></div>
        <Client />
        <CardSection />
        <ReadyStart />
        <EyeOpening />
        <Footer />
        <HiddenComponent setBlurr={setBlurr} className="overflow-hidden" />

      {/* <Button/> */}
    </>
  );
}
