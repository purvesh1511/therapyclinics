import { Button } from "@/components/ui/button"

export default function CTASection() {

  return (
    <section className="py-25 bg-primary from-blue-600 to-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl font-bold mb-6">Ready to Grow Your Practice?</h2>
          <p className="text-xl text-white mb-8">
            Join hundreds of clinics already benefiting from increased visibility and patient <br/> bookings.
          </p>
          <Button className="bg-gray-100 text-secondary-foreground py-6 px-12 rounded-lg hover:bg-gray-200 transition duration-200 text-lg">
            List Your Clinic
          </Button>
        </div>
      </div>
    </section>
  )
}
