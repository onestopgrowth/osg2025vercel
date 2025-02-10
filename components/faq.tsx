import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What type of services do you offer?",
    answer: (
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <strong>UX/UI Services</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>Visionary Design: Elevate your user experience with designs that are as thoughtful as they are beautiful.</li>
            <li>User-Centric Approach: Building interfaces that resonate with your target audience, fostering engagement and loyalty.</li>
          </ul>
        </li>
        <li>
          <strong>Application Development</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2">
            <li>Front-End and Back-End Development: Expertise in Ruby, Perl, Python, PHP, Scala, Java, Node, C#, TypeScript, CoffeeScript, and more.</li>
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
      </ul>
    ),
  },
  {
    question: "Can you walk me through your discovery process?",
    answer: (
      <ol className="list-decimal pl-5 space-y-2">
        <li><strong>Initial Meeting:</strong> We start with an open dialogue to thoroughly understand your unique needs and challenges.</li>
        <li><strong>Overview of Current Environment:</strong> Our team conducts a comprehensive assessment of your existing infrastructure and systems.</li>
        <li><strong>Penetration Testing:</strong> We identify potential security vulnerabilities to ensure robust protection for your business.</li>
        <li><strong>Capabilities Testing:</strong> We evaluate your system's performance and reliability to identify areas for improvement.</li>
        <li><strong>Proposal and Pricing:</strong> Based on our findings, we provide tailored solutions with transparent pricing to meet your specific needs.</li>
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
        <p className="mt-2"><strong>Payment Terms:</strong> We offer Net 30 terms for qualified clients.</p>
      </div>
    ),
  },
  {
    question: "How do your contracts work?",
    answer: (
      <div className="space-y-2">
        <p>Our contract process is designed to be clear and comprehensive:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Master Services Agreement (MSA):</strong> This covers the general terms and conditions for all projects.</li>
          <li><strong>Statement of Work (SOW):</strong> For each specific project, we provide a detailed SOW outlining the scope, deliverables, and timelines.</li>
        </ul>
        <p>We use digital signatures for efficiency, ensuring transparency and mutual accountability throughout our partnership.</p>
      </div>
    ),
  },
  {
    question: "How can I learn more about your services?",
    answer: (
      <p>
        The best way to learn more is to give us a call! We'd be happy to discuss your specific needs and how we can help. We can also provide references upon request, depending on the project type (please note that most of our projects are under NDAs).
      </p>
    ),
  },
  {
    question: "Who should I contact for more information?",
    answer: (
      <p>
        You can reach out directly to our CEO, <strong>Michael Morris</strong>, at <strong>610-653-0312</strong>. He'll be happy to discuss how One Stop Growth can help your business thrive.
      </p>
    ),
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-white">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

