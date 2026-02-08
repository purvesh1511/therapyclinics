import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="py-16 px-30 bg-white">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Simple, transparent pricing</h2>
      <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        Choose the plan that works best for your practice
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 my-5 rounded-xl text-center card-hover border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Monthly</h3>
          <div className="text-4xl font-bold text-gray-800 mb-2">£22<span className="text-foreground/60 text-base text-gray-400" >/month</span></div>
          <p className="text-gray-600 mb-6">Rolling monthly plan</p>
          <ul className="list-disc list-inside text-gray-600 mb-6 text-left">
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Full clinic profile</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Patient enquiries</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Price comparison listing</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Cancel anytime with 30 days' notice</span>
            </li>
          </ul>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg w-full transition duration-300">
            Get started
          </button>
        </div>

        <div className="bg-white p-8 py-10 rounded-xl shadow-lg text-center card-hover border-2 border-[var(--color-primary-700)] relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Best Value
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Annual</h3>
          <div className="text-4xl font-bold text-gray-800 mb-2">£220<span className="text-foreground/60 text-base text-gray-400" >/year</span></div>
          <p className="text-gray-600 mb-6">Best overall value</p>
          <ul className="list-disc list-inside text-gray-600 mb-6 text-left">
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Full clinic profile</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Patient enquiries</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Price comparison listing</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Cancel anytime with 30 days' notice</span>
            </li>
          </ul>
          <button className="bg-[var(--color-primary-700)] hover:bg-[var(--color-primary-600)] text-white font-semibold py-3 px-6 rounded-lg w-full transition duration-300">
            Get started →
          </button>
        </div>

        <div className="bg-white p-8  my-5 rounded-xl text-center card-hover border-2 border-gray-200 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Best Balance
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">6 Months</h3>
          <div className="text-4xl font-bold text-gray-800 mb-2">£110<span className="text-foreground/60 text-base text-gray-400" >/6 months</span></div>
          <p className="text-gray-600 mb-6">Pay once for 6 months</p>
          <ul className="list-disc list-inside text-gray-600 mb-6 text-left">
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Full clinic profile</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Patient enquiries</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Price comparison listing</span>
            </li>
            <li  className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Cancel anytime with 30 days' notice</span>
            </li>
          </ul>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg w-full transition duration-300">
            Get started
          </button>
        </div>
      </div>
    </section>
  )
}
