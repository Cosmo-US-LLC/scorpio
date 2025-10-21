import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const FaqSection = ({ faqs }) => {
  // Default FAQ data matching the screenshots
  const defaultFaqs = [
    {
      id: "pre-sale",
      question: "What is a pre-sale?",
      type: "text",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Odio tortor quis phasellus montes proin libero senean ac potenti. Cursus tristique aliquam bibendum enim augue. Nibh gravida nullam quis nisl elementum purus. A facilisis sed hac ullamcorper ut diam eget.",
    },
    {
      id: "scorpion-casino",
      question: "What is SCORPION CASINO?",
      type: "text",
      answer:
        "SCORPION CASINO is a revolutionary online gambling platform built on blockchain technology. It combines the excitement of traditional casino gaming with the transparency and security of cryptocurrency. The platform offers a wide range of games including slots, table games, and live dealer experiences, all powered by the $SCORP token.",
    },
    {
      id: "why-pre-sale",
      question: "Why are we doing a pre-sale?",
      type: "text",
      answer:
        "The pre-sale allows early supporters to acquire $SCORP tokens at a discounted rate before the public launch. This helps us build a strong community foundation, raise initial capital for platform development, and reward early believers in our vision. Pre-sale participants benefit from lower entry prices and exclusive bonuses, while also contributing to the project's long-term success.",
    },
    {
      id: "scorp-token",
      question: "What is the $SCORP token?",
      type: "rich",
      content: (
        <div className="space-y-3">
          <p className="text-sm md:text-[15px] leading-6 text-gray-300">
            The $SCORP token is the native utility token of the Scorpion Casino
            ecosystem. It serves multiple purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-[15px] text-gray-300 ml-2">
            <li>Primary currency for all casino games and betting</li>
            <li>Staking rewards and passive income generation</li>
            <li>Governance rights for platform decisions</li>
            <li>Access to exclusive VIP features and bonuses</li>
            <li>Revenue sharing from casino profits</li>
          </ul>
        </div>
      ),
    },
    {
      id: "tokens-protected",
      question: "Are my tokens protected?",
      type: "text",
      answer:
        "Yes, absolutely. All tokens are secured through audited smart contracts on the blockchain. We have implemented multiple security measures including multi-signature wallets, time-locked contracts, and regular third-party audits. Your tokens remain under your complete control in your personal wallet at all times.",
    },
    {
      id: "vesting-period",
      question: "Does it have a vesting period?",
      type: "table",
      rows: [
        { claimer: "Team", percentage: "15%", unlock: "12-24 Months" },
        { claimer: "Advisors", percentage: "5%", unlock: "6-12 Months" },
        { claimer: "Public Sale", percentage: "35%", unlock: "Immediately" },
        { claimer: "Liquidity", percentage: "20%", unlock: "Locked 12 Months" },
        { claimer: "Marketing", percentage: "10%", unlock: "6-18 Months" },
        { claimer: "Development", percentage: "10%", unlock: "12-36 Months" },
        { claimer: "Reserve", percentage: "5%", unlock: "24+ Months" },
      ],
    },
    {
      id: "listing-target",
      question: "What is the token listing target?",
      type: "text",
      answer:
        "Our initial listing target is set for Q2 2024 on major decentralized exchanges (DEXs) and centralized exchanges (CEXs). We are in active discussions with tier-1 exchanges to ensure maximum liquidity and accessibility for our token holders. The exact listing price will be determined by market conditions and pre-sale performance.",
    },
    {
      id: "when-list",
      question: "When will $SCORP list?",
      type: "text",
      answer:
        "$SCORP is scheduled to list within 30-45 days after the pre-sale conclusion. We will announce the exact listing date and exchange partners through our official channels at least 2 weeks in advance. Early pre-sale participants will receive priority access to initial liquidity pools.",
    },
  ];

  const faqsData = faqs || defaultFaqs;

  const renderContent = (faq) => {
    if (faq.type === "text") {
      return (
        <p className="text-sm md:text-[15px] leading-6 text-gray-300">
          {faq.answer}
        </p>
      );
    }

    if (faq.type === "rich") {
      return faq.content;
    }

    if (faq.type === "table") {
      return (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-linear-to-r from-[#F7D774] to-[#F3B74E]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Claimer
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Percentage
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Unlock Period
                </th>
              </tr>
            </thead>
            <tbody>
              {faq.rows.map((row, index) => (
                <tr
                  key={index}
                  className="even:bg-white/3 hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {row.claimer}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {row.percentage}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {row.unlock}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="w-full bg-linear-to-b from-[#0C0D10] to-[#131419] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl md:max-w-5xl mx-auto">
        {/* Heading Block */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
            <span className="text-white">Frequently Asked </span>
            <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-300/80">
            You may have questions, we have the answers.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue={faqsData[0]?.id}
          className="space-y-4"
        >
          {faqsData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="relative overflow-hidden rounded-2xl bg-linear-to-b from-[#14151A] to-[#0F1014] border border-white/5 ring-1 ring-white/5 px-5 md:px-6 py-4 md:py-5 group"
            >
              {/* Subtle inner radial glow */}
              <div className="absolute inset-0 bg-gradient-radial from-white/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <AccordionTrigger className="relative flex w-full items-center justify-between py-3 text-left hover:bg-white/3 transition-colors rounded-lg px-2 -mx-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7D774] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0D10] [&[data-state=open]>div>div]:rotate-45">
                <span className="text-base md:text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex items-center justify-center shrink-0">
                  <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10 transition-transform duration-200">
                    <Plus className="h-4 w-4 text-white" />
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-3 border-t border-white/5 mt-3">
                {renderContent(faq)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
