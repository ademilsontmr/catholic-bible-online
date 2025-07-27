import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Catholic Bible Online. Learn how we collect, use, and protect your information.',
  keywords: [
    'privacy policy',
    'catholic bible online',
    'data protection',
    'user privacy',
    'information security'
  ],
  openGraph: {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Catholic Bible Online.',
    url: 'https://catholicbibleonline.com/privacy',
  },
  twitter: {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Catholic Bible Online.',
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Privacy Policy
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
              1. Information We Collect
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online is committed to protecting your privacy. We collect minimal information necessary to provide our services:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li><strong>Usage Data:</strong> We may collect anonymous usage statistics to improve our website performance and user experience.</li>
              <li><strong>Cookies:</strong> We use essential cookies to maintain your preferences and improve site functionality.</li>
              <li><strong>Log Files:</strong> Standard web server logs may be collected for security and performance monitoring.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-black mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>To provide and maintain our Catholic Bible reading service</li>
              <li>To improve website functionality and user experience</li>
              <li>To analyze usage patterns and optimize performance</li>
              <li>To ensure website security and prevent abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              3. Information Sharing
            </h2>
            <p className="text-black mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
              <li>With service providers who assist in website operations (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              4. Data Security
            </h2>
            <p className="text-black mb-4">
              We implement appropriate security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Secure HTTPS connections for all data transmission</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Encryption of sensitive data where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              5. Your Rights
            </h2>
            <p className="text-black mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Access any personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of non-essential data collection</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              6. Third-Party Services
            </h2>
            <p className="text-black mb-4">
              Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-black mb-4">
              Catholic Bible Online does not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-black mb-4">
              We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              9. Contact Us
            </h2>
            <p className="text-black mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-black">
                <strong>Email:</strong> privacy@catholicbibleonline.com<br />
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