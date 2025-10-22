import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { defaultFaqs } from "@/utils/faqData";

const FaqSection = ({ faqs }) => {
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
              <tr
                className="bg-linear-to-r from-[#F7D774] to-[#F3B74E]"
                style={{
                  background:
                    "linear-gradient(90deg, #AE8625 0%, #F7EF8A 29.71%, #D2AC47 73.6%, #EDC967 100%)",
                }}
              >
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
          <h2 className="mb-2 md:mb-3">
            <span className="text-[#ffffff]">Frequently Asked </span>
            <span className="text_gradient">Questions</span>
          </h2>
          <h6 className="text-[#ffffff]">
            You may have questions, we have the answers.
          </h6>
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

              <AccordionTrigger className="relative flex w-full items-center justify-between py-3 text-left hover:cursor-pointer transition-colors rounded-lg px-2 -mx-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7D774] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0D10] [&[data-state=open]>div>div]:rotate-45">
                <span className="text-base md:text-lg font-semibold text-[#fffffe] pr-8 group-data-[state=open]:text-[#EDC967] transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex items-center justify-center shrink-0">
                  <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10 transition-all duration-200 group-data-[state=open]:border-[#D2AC47]">
                    <Plus className="h-4 w-4 text-[#fffffe] group-data-[state=open]:text-[#EDC967] transition-colors duration-300" />
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
