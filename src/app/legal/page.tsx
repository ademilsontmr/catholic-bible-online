import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Legal information for Catholic Bible Online. Copyright, disclaimers, and legal notices.',
  keywords: [
    'legal information',
    'catholic bible online',
    'copyright',
    'disclaimers',
    'legal notices'
  ],
  openGraph: {
    title: 'Legal',
    description: 'Legal information for Catholic Bible Online.',
    url: 'https://catholicbibleonline.com/legal',
  },
  twitter: {
    title: 'Legal',
    description: 'Legal information for Catholic Bible Online.',
  }
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Legal Information
          </h1>
          <p className="text-lg text-black">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Copyright Notice
            </h2>
            <p className="text-black mb-4">
              © {new Date().getFullYear()} Catholic Bible Online. All rights reserved.
            </p>
            <p className="text-black mb-4">
              The content on this website, including but not limited to text, graphics, images, and software, is the property of Catholic Bible Online and is protected by copyright laws. Unauthorized use or reproduction of this content is strictly prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Bible Text Copyright
            </h2>
            <p className="text-black mb-4">
              The Douay-Rheims Bible text presented on this website is in the public domain. However, the formatting, presentation, and additional content (including reflections, prayers, and commentary) are the property of Catholic Bible Online and are protected by copyright.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Trademark Information
            </h2>
            <p className="text-black mb-4">
              "Catholic Bible Online" is a trademark of Catholic Bible Online. All other trademarks, service marks, and trade names used on this website are the property of their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Disclaimer of Warranties
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online provides this website and its content "as is" without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Limitation of Liability
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of this website or its content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              External Links
            </h2>
            <p className="text-black mb-4">
              This website may contain links to external websites. Catholic Bible Online is not responsible for the content, privacy policies, or practices of any external websites. The inclusion of any link does not imply endorsement by Catholic Bible Online.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              DMCA Notice
            </h2>
            <p className="text-black mb-4">
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please contact us with the following information:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>A description of the copyrighted work that you claim has been infringed</li>
              <li>A description of where the material is located on our website</li>
              <li>Your contact information (name, address, phone number, email)</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement that the information is accurate and that you are the copyright owner or authorized to act on their behalf</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Privacy and Data Protection
            </h2>
            <p className="text-black mb-4">
              Our privacy practices are outlined in our Privacy Policy. We are committed to protecting your personal information and complying with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Accessibility
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online is committed to making our website accessible to all users. We strive to comply with accessibility standards and guidelines. If you encounter any accessibility issues, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Governing Law
            </h2>
            <p className="text-black mb-4">
              These legal terms are governed by and construed in accordance with applicable laws. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in the appropriate jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Contact Information
            </h2>
            <p className="text-black mb-4">
              For legal inquiries, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-black">
                <strong>Email:</strong> legal@catholicbibleonline.com<br />
                <strong>Address:</strong> Catholic Bible Online<br />
                [Your Address Here]<br />
                [City, State, ZIP]
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 