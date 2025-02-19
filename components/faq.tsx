import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What type of services do you offer?",
    answer: (
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <strong>UX/UI Services</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>
              Visionary Design: Elevate your user experience with designs that are as thoughtful as they are beautiful.
            </li>
            <li>
              User-Centric Approach: Building interfaces that resonate with your target audience, fostering engagement
              and loyalty.
            </li>
          </ul>
        </li>
        <li>
          <strong>Application Development</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>
              Front-End and Back-End Development: Expertise in Ruby, Perl, Python, PHP, Scala, Java, Node, C#,
              TypeScript, CoffeeScript, and more.
            </li>
            <li>Modern and Legacy Systems: Maintaining seamless integration between new and existing systems.</li>
          </ul>
        </li>
        <li>
          <strong>AI and ML Solutions</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>Data Science Team: Unlock actionable insights with experienced data scientists.</li>
            <li>AI-Powered Solutions: Automate processes and make data-driven decisions.</li>
          </ul>
        </li>
        <li>
          <strong>IT Infrastructure and Networking Solutions</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>PBX Solutions: Streamline communications with state-of-the-art systems.</li>
            <li>Hyperconverged Infrastructure: Simplify IT environments with agile and scalable solutions.</li>
            <li>Storage and Compute: Enhance data storage and computational power.</li>
            <li>Networking Devices and Services: Build reliable networks fostering connectivity and collaboration.</li>
          </ul>
        </li>
        <li>
          <strong>Freight Hauling Services</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>DOT-Certified Transportation: Reliable and compliant freight hauling across the country.</li>
            <li>
              Diverse Fleet Options: Including power-only, box truck, and hot shot services to meet various shipping
              needs.
            </li>
            <li>Real-Time Tracking: Advanced tracking solutions for full visibility of your shipments.</li>
            <li>Route Optimization: Efficient planning to ensure timely deliveries and cost-effectiveness.</li>
          </ul>
        </li>
        <li>
          <strong>Business Development Services</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>Lead Generation: Targeted strategies to identify and attract potential clients.</li>
            <li>CRM Optimization: Streamline your customer relationship management for improved efficiency.</li>
            <li>Sales Funnel Design: Create effective sales processes to convert leads into customers.</li>
            <li>Market Analysis: In-depth research to identify opportunities and optimize your business strategy.</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    question: "Can you walk me through your discovery process?",
    answer: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Initial Meeting:</strong> We start with an open dialogue to thoroughly understand your unique needs
          and challenges.
        </li>
        <li>
          <strong>Overview of Current Environment:</strong> Our team conducts a comprehensive assessment of your
          existing infrastructure and systems.
        </li>
        <li>
          <strong>Penetration Testing:</strong> We identify potential security vulnerabilities to ensure robust
          protection for your business.
        </li>
        <li>
          <strong>Capabilities Testing:</strong> We evaluate your system's performance and reliability to identify areas
          for improvement.
        </li>
        <li>
          <strong>Proposal and Pricing:</strong> Based on our findings, we provide tailored solutions with transparent
          pricing to meet your specific needs.
        </li>
      </ol>
    ),
  },
  {
    question: "What payment options do you offer?",
    answer: (
      <div>
        <p>We offer several payment methods to suit your preferences:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>ACH (Automated Clearing House)</li>
          <li>Credit Card</li>
          <li>Bank Wire Transfer</li>
          <li>E-invoices</li>
          <li>Checks</li>
        </ul>
        <p className="mt-2">
          <strong>Payment Terms:</strong> We offer Net 30 terms for qualified clients.
        </p>
      </div>
    ),
  },
  {
    question: "How do your contracts work?",
    answer: (
      <div className="space-y-2">
        <p>Our contract process is designed to be clear and comprehensive:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Master Services Agreement (MSA):</strong> This covers the general terms and conditions for all
            projects.
          </li>
          <li>
            <strong>Statement of Work (SOW):</strong> For each specific project, we provide a detailed SOW outlining the
            scope, deliverables, and timelines.
          </li>
        </ul>
        <p>
          We use digital signatures for efficiency, ensuring transparency and mutual accountability throughout our
          partnership.
        </p>
      </div>
    ),
  },
  {
    question: "What sets your freight hauling services apart?",
    answer: (
      <div className="space-y-2">
        <p>Our freight hauling services stand out due to several key factors:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Advanced Technology:</strong> We use state-of-the-art tracking and logistics tools like Motive ELD,
            Project 44, and MacroPoint for real-time shipment visibility.
          </li>
          <li>
            <strong>Versatile Fleet:</strong> Our diverse fleet includes reefer trucks, box trucks, and semi-trucks,
            allowing us to handle a wide range of cargo types and sizes.
          </li>
          <li>
            <strong>Compliance and Safety:</strong> As a DOT-certified carrier, we prioritize safety and regulatory
            compliance in all our operations.
          </li>
          <li>
            <strong>Customized Solutions:</strong> We tailor our services to meet your specific freight needs, whether
            it's temperature-sensitive goods, oversized loads, or time-critical shipments.
          </li>
        </ul>
      </div>
    ),
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4 [&>*]:border-orange-500">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-sm font-medium text-[#000047] bg-[#FF8000] p-4 rounded-lg shadow-md hover:bg-[#FFA500] transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white bg-[#000037] p-4 rounded-b-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

