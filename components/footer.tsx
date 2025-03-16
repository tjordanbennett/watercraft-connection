import { Phone, Mail, MapPin } from "lucide-react"
import { CopyToClipboard } from "@/components/copy-to-clipboard"
import { companyInfo } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <div className="text-center">
            <div className="logo-text text-secondary text-3xl font-bold mb-1">ADVENTURE</div>
            <h2 className="text-sm tracking-wider">W A T E R C R A F T</h2>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <CopyToClipboard
            value={companyInfo.contact.phone}
            icon={<Phone className="h-4 w-4" />}
            label="Phone number"
          />
          <CopyToClipboard
            value={companyInfo.contact.email}
            icon={<Mail className="h-4 w-4" />}
            label="Email address"
          />
          <CopyToClipboard value={companyInfo.contact.address} icon={<MapPin className="h-4 w-4" />} label="Address" />
        </div>
        <p className="text-sm">
          © {companyInfo.year} {companyInfo.name}
        </p>
        <p className="text-sm mt-1">
          {companyInfo.designCredit.text}{" "}
          <a
            href={companyInfo.designCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondary transition-colors"
          >
            {companyInfo.designCredit.company}
          </a>
        </p>
      </div>
    </footer>
  )
}

