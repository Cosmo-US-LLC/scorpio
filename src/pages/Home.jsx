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
import CaseStudySection from "../components/CaseStudySection";
import BreakingBarriersSection from "../components/BreakingBarriersSection";
import MarketOpportunitySection from "../components/MarketOpportunitySection";
import RoadmapSection from "../components/RoadmapSection";
import WhitepaperSection from "../components/WhitepaperSection";
import ComparisonChartSection from "../components/ComparisonChartSection";
import StakingRewardsSection from "../components/StakingRewardsSection";
import BuyInCompetitionSection from "../components/BuyInCompetitionSection";
import ExtraRewardsSection from "../components/ExtraRewardsSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import HowToBuySection from "@/components/howtobuySection";
import BenefitsSection from "../components/BenefitsSection";
import FutureCryptoSection from "../components/FutureCryptoSection";
import ExchangeLaunchSection from "../components/ExchangeLaunchSection";
import ResultsSection from "../components/ResultsSection";
import FeaturedInSection from "../components/FeaturedInSection";
import SCORPUtilitySection from "../components/SCORPUtilitySection";
import HowDoesItSection from "@/components/HowDoesIt";
import AllocationSection from "@/components/AllocationSection";
import TokenDetailsSection from "@/components/TokenDetailsSection";

function Home() {
  return (
    <div className="">
      {/* <Herosection />
      <FeaturedInSection />
      <ResultsSection />
      <ExchangeLaunchSection />
      <FutureCryptoSection />
      <TrustBadgesSection />
      <BenefitsSection />
      <ExtraRewardsSection />
      <BuyInCompetitionSection />
      <HowToBuySection />
      <StakingRewardsSection />
      <HowDoesItSection />
      <SCORPUtilitySection /> */}
      <ComparisonChartSection />
      <WhitepaperSection />
      <AllocationSection />
      <TokenDetailsSection />
      <RoadmapSection />
      <MarketOpportunitySection />
      <BreakingBarriersSection />
      <CaseStudySection />
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
