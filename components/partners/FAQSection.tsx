import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const Faqs = [
    {
      value: "item-1",
      trigger: "Will partnering with Therapy Clinics take away from my direct clientele?",
      content:
        "Therapy Clinics only fills your unused spots, so your direct members can still book their favorite times. Our data and real-world results show that we attract a different audience and consistently drive incremental revenue with minimal impact on your direct memberships.",
    },
    {
      value: "item-2",
      trigger: "Will I earn less from Therapy Clinics than from my direct clients?",
      content:
        "While our payouts may be lower than what your direct members pay, this is money you wouldn't have earned otherwise as we only fill your unused spots. It's a powerful way to turn unfilled appointments into profit, without incurring extra costs or spending on ads.",
    },
    {
      value: "item-3",
      trigger: "How does Therapy Clinics manage my schedule?",
      content:
        "We use smart scheduling tools designed to optimize your schedule in real time. It automatically adjusts availability and rates to only fill open spots, optimize revenue and protect availability for your direct members.",
    },
    {
      value: "item-4",
      trigger: "How does the trial work for partners?",
      content:
        "Our trial helps new clients discover your business at no upfront cost. It's a proven way to convert first-time visitors into paying customers, avoiding the high per-client price tag of traditional advertising.",
    },
    {
      value: "item-5",
      trigger: "Is there any cost to join?",
      content:
        "Joining Therapy Clinics is completely free. There are no upfront costs, no monthly fees, and no long-term commitments. You only pay when you earn—we take a small commission on bookings made through our platform.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-arial text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ✅ FIX HERE */}
        <Accordion
          type="multiple"
          defaultValue={["item-1"]}
          className="max-w-3xl mx-auto"
        >
          {Faqs.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="px-2 border-b border-gray-200"
            >
              <AccordionTrigger className="text-lg font-arial text-left">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
