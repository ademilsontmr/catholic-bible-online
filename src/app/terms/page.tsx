import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Catholic Bible Online. Read our terms and conditions for using our website.',
  keywords: [
    'terms of service',
    'catholic bible online',
    'terms and conditions',
    'user agreement',
    'website terms'
  ],
  openGraph: {
    title: 'Terms of Service',
    description: 'Terms of Service for Catholic Bible Online.',
    url: 'https://catholicbibleonline.com/terms',
  },
  twitter: {
    title: 'Terms of Service',
    description: 'Terms of Service for Catholic Bible Online.',
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="text-black mb-4">
              By accessing and using Catholic Bible Online, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              2. Description of Service
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online provides access to the complete Catholic Bible in the Douay-Rheims translation, along with Catholic prayers, novenas, and spiritual resources. Our service is provided free of charge for personal, non-commercial use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              3. Use License
            </h2>
            <p className="text-black mb-4">
              Permission is granted to temporarily access the materials on Catholic Bible Online for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              4. Disclaimer
            </h2>
            <p className="text-black mb-4">
              The materials on Catholic Bible Online are provided on an 'as is' basis. Catholic Bible Online makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              5. Limitations
            </h2>
            <p className="text-black mb-4">
              In no event shall Catholic Bible Online or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Catholic Bible Online, even if Catholic Bible Online or a Catholic Bible Online authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              6. Accuracy of Materials
            </h2>
            <p className="text-black mb-4">
              The materials appearing on Catholic Bible Online could include technical, typographical, or photographic errors. Catholic Bible Online does not warrant that any of the materials on its website are accurate, complete, or current. Catholic Bible Online may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              7. Links
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Catholic Bible Online of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              8. Modifications
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              9. Governing Law
            </h2>
            <p className="text-black mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              10. Contact Information
            </h2>
            <p className="text-black mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-black">
                <strong>Email:</strong> terms@catholicbibleonline.com<br />
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