import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Catholic Bible Online. Contact us for questions, feedback, prayer requests, or technical support. We\'re here to help you in your faith journey.',
  keywords: 'contact catholic bible online, prayer requests, bible questions, faith support, catholic resources contact',
  openGraph: {
    title: 'Contact Us | Catholic Bible Online',
    description: 'Get in touch with Catholic Bible Online for questions, prayer requests, or spiritual guidance.',
    type: 'website',
    url: 'https://catholicbibleonline.com/contact',
    siteName: 'Catholic Bible Online'
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Catholic Bible Online',
    description: 'Get in touch with Catholic Bible Online for questions, prayer requests, or spiritual guidance.'
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            We're here to help you in your faith journey. Whether you have questions about the Catholic Bible, 
            need prayer, or want to share feedback, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                >
                  <option value="">Select a subject</option>
                  <option value="prayer-request">Prayer Request</option>
                  <option value="bible-question">Bible Question</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                  placeholder="Please share your message, question, or prayer request..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <p className="text-black">contact@catholicbibleonline.com</p>
                    <p className="text-sm text-gray-600 mt-1">We typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Response Time</h3>
                    <p className="text-black">Monday - Friday</p>
                    <p className="text-sm text-gray-600 mt-1">Prayer requests are prayed for immediately</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Mission</h3>
                    <p className="text-black">Serving Catholics Worldwide</p>
                    <p className="text-sm text-gray-600 mt-1">Bringing the Word of God to every corner of the earth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prayer Request Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">Prayer Requests</h3>
              <p className="text-black mb-4">
                Need prayer? We have a dedicated team that prays for all requests submitted through our contact form. 
                Your prayers will be lifted up during our daily prayer time.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>All prayer requests are kept confidential</span>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black">What Bible translation do you use?</h4>
                  <p className="text-sm text-gray-700">We use the Douay-Rheims Bible, a traditional Catholic translation.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Is this website free to use?</h4>
                  <p className="text-sm text-gray-700">Yes, all our resources are completely free and always will be.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Can I request specific content?</h4>
                  <p className="text-sm text-gray-700">Absolutely! Use our contact form to suggest new features or content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 