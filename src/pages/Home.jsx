import React from "react";
import PoweredBy from "../components/PoweredBy";
import FutureSection from "../components/FutureSection";
import ScorpSection from "../components/ScorpSection";
import ExpertTestimonials from "../components/ExpertTestimonials";
import SuccessStories from "../components/SuccessStories";
import CollaborationSection from "../components/CollaborationSection";
import PressMediaSection from "../components/PressMediaSection";
import AmbassadorsSection from "../components/AmbassadorsSection";
import FaqSection from "../components/FaqSection";
import PressReleaseSection from "@/components/PressReleaseSection";
import Herosection from "./herosection";

function Home() {
  return (
    <div className="">
      <Herosection />
      <FutureSection />
      <ScorpSection />
      <ExpertTestimonials />
      <SuccessStories />
      <CollaborationSection />
      <PressMediaSection />
      <PressReleaseSection />
      <AmbassadorsSection />
      <PoweredBy />
      <FaqSection />
    </div>
  );
}

export default Home;
