import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Holy Webs privacy policy. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://holywebs.com/privacy-policy/" />
      </Helmet>
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last updated: April 3, 2026</p>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            When you fill out a form on our website (contact forms, audit requests, or resource downloads), we collect personal information you voluntarily provide, including your name, email address, phone number, business name, website URL, and any additional details you share about your business.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We also automatically collect certain technical information when you visit our site, including your IP address, browser type, device type, pages visited, and referring URL. This data is collected through cookies and similar technologies.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">We use the information we collect to:</p>
          <ul className="text-muted-foreground mb-8 space-y-2 list-disc pl-6">
            <li>Respond to your inquiries and provide the services you've requested</li>
            <li>Send you relevant information about our services (you can opt out at any time)</li>
            <li>Improve our website, marketing, and service offerings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Services</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We use third-party tools to help run our business, including GoHighLevel (CRM and marketing automation), Google Analytics (website analytics), and Google/Meta advertising platforms. These services may collect and process data according to their own privacy policies. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our website uses cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at hello@holywebs.com. We will respond to your request within 30 days.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:hello@holywebs.com" className="text-primary hover:text-primary/80 transition-colors">
              hello@holywebs.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:843-847-0181" className="text-primary hover:text-primary/80 transition-colors">
              (843) 847-0181
            </a>.
          </p>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
