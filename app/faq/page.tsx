import Link from "next/link"
// Update imports to include our new PageLayout component
import { PageLayout } from "@/components/page-layout"

// Import site data
import { faqContent } from "@/lib/site-data"

// Replace the entire component with:
export default function FAQPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">{faqContent.heading}</h1>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Map through FAQs */}
          {faqContent.faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4 text-primary">{faq.question}</h3>
              <div className="text-gray-700 space-y-4">
                {faq.answer.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">{faqContent.helpSection.heading}</h2>
          <p className="mb-6 text-gray-700">{faqContent.helpSection.text}</p>
          <div className="flex justify-center gap-4">
            {faqContent.helpSection.buttons.map((button, index) => (
              <Link key={index} href={button.href} className={button.isPrimary ? "btn-primary" : "btn-secondary"}>
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

