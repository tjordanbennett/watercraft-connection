import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { ContactInfoItem } from "@/components/contact-info-item"
import { YelpIcon } from "@/components/icons"

// Import site data
import { companyInfo, contactContent } from "@/lib/site-data"

// Update imports to include our new PageLayout component
import { PageLayout } from "@/components/page-layout"

// Replace the entire component with:
export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">{contactContent.heading}</h1>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">{contactContent.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.phone.title}</h3>
                  </div>
                  <p className="text-gray-700 pl-7">
                    <ContactInfoItem value={companyInfo.contact.phone} type="phone">
                      {contactContent.sections.phone.value}
                    </ContactInfoItem>
                  </p>
                  <p className="text-sm text-gray-500 pl-7 mt-1">{contactContent.sections.phone.note}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.email.title}</h3>
                  </div>
                  <p className="text-gray-700 pl-7">
                    <ContactInfoItem value={companyInfo.contact.email} type="email">
                      {contactContent.sections.email.value}
                    </ContactInfoItem>
                  </p>
                  <p className="text-sm text-gray-500 pl-7 mt-1">{contactContent.sections.email.note}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.location.title}</h3>
                  </div>
                  <p className="text-gray-700 pl-7">
                    <ContactInfoItem value={companyInfo.contact.address} type="address">
                      {contactContent.sections.location.value}
                    </ContactInfoItem>
                  </p>
                  <p className="text-sm text-gray-500 pl-7 mt-1">{contactContent.sections.location.note}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.hours.title}</h3>
                  </div>
                  <div className="pl-7">
                    <p className="text-gray-700">{contactContent.sections.hours.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{contactContent.sections.hours.note}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold">{contactContent.sections.social.title}</h3>
                  </div>
                  <div className="pl-7 flex space-x-4">
                    <Link
                      href={companyInfo.social.facebook}
                      className="text-primary hover:text-secondary transition-colors"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href={companyInfo.social.instagram}
                      className="text-primary hover:text-secondary transition-colors"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href={companyInfo.social.yelp}
                      className="text-primary hover:text-secondary transition-colors"
                      aria-label="Yelp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YelpIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                {/* Replace this div with actual Google Maps embed */}
                <div className="text-center p-4">
                  <p className="text-gray-600 mb-2">{contactContent.mapPlaceholder.title}</p>
                  <p className="text-sm text-gray-500">{contactContent.mapPlaceholder.description}</p>
                  <p className="text-xs text-gray-400 mt-4">Example: {contactContent.mapPlaceholder.example}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-primary">{contactContent.cta.heading}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {contactContent.cta.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`${
                    button.isPrimary
                      ? "btn-primary"
                      : button.isOutline
                        ? "border border-primary text-primary hover:bg-primary hover:text-white"
                        : "btn-secondary"
                  } transition-colors font-medium py-2.5 px-7 rounded-full`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

