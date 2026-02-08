import { getFooterMenu } from "@/lib/getFooterMenu";


export default async function Footer() {
  const footerMenu = await getFooterMenu();
  return (
    <footer className="bg-[var(--color-secondary-900)] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerMenu.map((item: any, index: number) => (
            <div key={index}>
              <h3 className="mb-4 font-semibold text-white">
                {item.title}
              </h3>

              <ul className="space-y-2 text-gray-400">
                {item.footer_links.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-gray-500 text-sm text-center">
          © therapyclinics.co.uk – All rights reserved. therapyclinics.co.uk is a digital publisher and does not offer personal health or medical advice. If you're facing a medical emergency, call your local emergency services immediately, or visit the nearest emergency room or urgent care center. You should consult your healthcare provider before starting any nutrition, diet, exercise, fitness, medical, or wellness program.
        </p>
      </div>
    </footer>
  )
}
