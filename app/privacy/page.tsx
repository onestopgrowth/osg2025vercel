import EnhancedNavbar from "@/components/enhanced-navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0000f9] text-white">
      <EnhancedNavbar />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="glass-effect rounded-lg p-6 md:p-10 mb-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
              <p className="mb-4">
                At One Stop Growth LLC, we respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we look after your personal data when you visit our website and
                tell you about your privacy rights and how the law protects you.
              </p>
              <p>
                This policy applies to information we collect when you use our website, interact with us regarding our
                services, or when you otherwise provide personal information to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Information We Collect</h2>
              <p className="mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identity Data</strong> includes first name, last name, company name, and title.
                </li>
                <li>
                  <strong>Contact Data</strong> includes email address, telephone numbers, and business address.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version,
                  time zone setting and location, browser plug-in types and versions, operating system and platform, and
                  other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website and services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors, and other third parties who have a business
                need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Cookies</h2>
              <p>
                Our website may use cookies to distinguish you from other users of our website. This helps us to provide
                you with a good experience when you browse our website and also allows us to improve our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
                unless we provide you with advance notice. This does not include website hosting partners and other
                parties who assist us in operating our website, conducting our business, or servicing you, so long as
                those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Rights</h2>
              <p className="mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to request access to your personal data.</li>
                <li>The right to request correction of your personal data.</li>
                <li>The right to request erasure of your personal data.</li>
                <li>The right to object to processing of your personal data.</li>
                <li>The right to request restriction of processing your personal data.</li>
                <li>The right to request transfer of your personal data.</li>
                <li>The right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <div className="mt-4">
                <p>
                  <strong>One Stop Growth LLC</strong>
                </p>
                <p>Email: dispatch@onestopgrowth.com</p>
                <p>Phone: 800-674-3599</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the effective date below.
              </p>
              <p className="mt-4">
                <strong>Effective Date:</strong> April 16, 2024
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
