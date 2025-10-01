import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import PageHero from '@/components/ui/page-hero'

export const metadata: Metadata = {
  title: 'Terms of Service | EMU-WC',
  description: 'Terms of Service and conditions for using EMU-WC products and services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <PageHero 
        title="Terms of Service"
        subtitle="Please read these terms and conditions carefully before using our website or purchasing our products."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Last Updated:</strong> October 2025
            </p>
          </div>

          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Throughout this website, the terms "we", "us" and "our" refer to EMU-WC (emu-wc.com). 
                EMU-WC offers this website, including all information, tools and services available from 
                this site to you, the user, conditioned upon your acceptance of all terms, conditions, 
                policies and notices stated here.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By visiting our site and/or purchasing something from us, you engage in our "Service" 
                and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), 
                including those additional terms and conditions and policies referenced herein and/or 
                available by hyperlink.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please read these Terms of Service carefully before accessing or using our website. 
                By accessing or using any part of the site, you agree to be bound by these Terms of Service. 
                If you do not agree to all the terms and conditions of this agreement, then you may not 
                access the website or use any services.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Online Store Terms</h2>
            <div className="prose prose-gray max-w-none">
              <ul className="space-y-3 text-gray-700">
                <li>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your jurisdiction.</li>
                <li>You may not use our products for any illegal or unauthorized purpose.</li>
                <li>You must not transmit any worms, viruses, or any code of a destructive nature.</li>
                <li>A breach or violation of any of these Terms will result in immediate termination of your Services.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. General Conditions</h2>
            <div className="prose prose-gray max-w-none">
              <ul className="space-y-3 text-gray-700">
                <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                <li>Your content may be transferred unencrypted over various networks. Credit card information is always encrypted during transfer.</li>
                <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission.</li>
                <li>The headings used in this agreement are included for convenience only and will not limit these Terms.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Accuracy</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We are not responsible if information made available on this site is not accurate, complete or current. 
                The material on this site is provided for general information only and should not be relied upon as the 
                sole basis for making decisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify the contents of this site at any time, but we have no obligation to 
                update any information. You agree that it is your responsibility to monitor changes to our site.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Service Modifications and Pricing</h2>
            <div className="prose prose-gray max-w-none">
              <ul className="space-y-3 text-gray-700">
                <li>Prices for our products are subject to change without notice.</li>
                <li>We reserve the right to modify or discontinue the Service without notice at any time.</li>
                <li>We shall not be liable for any modification, price change, suspension or discontinuance of the Service.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Products and Services</h2>
            <div className="prose prose-gray max-w-none">
              <ul className="space-y-3 text-gray-700">
                <li>Certain products may be available exclusively online and may have limited quantities.</li>
                <li>We cannot guarantee that your computer monitor's display of colors will be accurate.</li>
                <li>We reserve the right to limit sales to any person, geographic region or jurisdiction.</li>
                <li>All product descriptions and pricing are subject to change without notice.</li>
                <li>We do not warrant that the quality of products will meet your expectations.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Billing and Account Information</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to refuse any order. We may limit or cancel quantities purchased per person, 
                household or order. We reserve the right to limit orders that appear to be placed by dealers, 
                resellers or distributors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You agree to provide current, complete and accurate purchase information and to promptly update 
                your account information as needed.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Third-Party Tools and Links</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We may provide access to third-party tools "as is" without warranties. Any use of optional tools 
                is at your own risk. We are not responsible for third-party websites or materials.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please review third-party policies carefully before engaging in any transactions. Complaints 
                regarding third-party products should be directed to the third-party.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. User Comments and Feedback</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you send us submissions or comments, you agree that we may use them without restriction, 
                compensation, or obligation to maintain confidentiality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You agree that your comments will not violate any third-party rights or contain unlawful, 
                abusive, or obscene material. You are solely responsible for your comments' accuracy.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Prohibited Uses</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">You are prohibited from using the site:</p>
              <ul className="space-y-2 text-gray-700">
                <li>For any unlawful purpose</li>
                <li>To violate any laws or regulations</li>
                <li>To infringe upon intellectual property rights</li>
                <li>To harass, abuse, or discriminate against others</li>
                <li>To submit false or misleading information</li>
                <li>To upload viruses or malicious code</li>
                <li>To spam or collect personal information of others</li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Disclaimers and Limitation of Liability</h2>
            <div className="prose prose-gray max-w-none">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-yellow-800 font-semibold mb-2">Important Notice:</p>
                <p className="text-yellow-700">
                  The service is provided "as is" without warranties. We do not guarantee uninterrupted, 
                  timely, secure or error-free service.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any direct, indirect, incidental, punitive, special, or consequential 
                damages arising from your use of the service, including lost profits, revenue, or data.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Indemnification</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless EMU-WC and our affiliates, officers, directors, 
                agents, and employees from any claim arising out of your breach of these Terms or violation 
                of any law or third-party rights.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Termination</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                These Terms are effective until terminated by either party. We may terminate this agreement 
                at any time if you fail to comply with any term. Your obligations and liabilities incurred 
                prior to termination shall survive.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Governing Law</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable international 
                commercial law and the laws of the jurisdictions in which we operate.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Questions about these Terms of Service should be sent to us at:
              </p>
              <div className="space-y-2">
                <p className="text-gray-900 font-medium">Email: info@emu-wc.com</p>
                <p className="text-gray-900 font-medium">Phone (Germany): +49 1629366271</p>
                <p className="text-gray-900 font-medium">Phone (International): +86 18850581035</p>
              </div>
            </div>
          </section>

          {/* Changes Notice */}
          <section className="mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Changes to Terms</h3>
              <p className="text-blue-800">
                We reserve the right to update these Terms of Service at any time. Changes will be posted 
                on this page, and your continued use of our website constitutes acceptance of any changes.
              </p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}