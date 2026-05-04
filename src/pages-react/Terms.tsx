import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Holy Webs terms of service. Read our terms and conditions for using our website and services." />
        <link rel="canonical" href="https://holywebs.com/terms/" />
      </Helmet>
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Terms of Service</h1>
          <p className="text-white/60">Last updated: April 3, 2026</p>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            By accessing or using the Holy Webs website (holywebs.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Holy Webs provides digital marketing services including web design, search engine optimization (SEO), pay-per-click advertising, social media marketing, and related services for local service businesses. Specific services, deliverables, timelines, and pricing are outlined in individual service agreements between Holy Webs and the client.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            All content on this website — including text, graphics, logos, images, and software — is the property of Holy Webs or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">4. User Conduct</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">When using our website, you agree not to:</p>
          <ul className="text-muted-foreground mb-8 space-y-2 list-disc pl-6">
            <li>Submit false, misleading, or fraudulent information through our forms</li>
            <li>Attempt to gain unauthorized access to our systems or data</li>
            <li>Use automated tools to scrape or collect data from our website</li>
            <li>Engage in any activity that disrupts or interferes with our website's functionality</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our website and services are provided "as is" without warranties of any kind, either express or implied. While we strive to provide accurate information, we do not guarantee specific results from our digital marketing services. Past performance and case studies do not guarantee future results.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Holy Webs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website or services. Our total liability shall not exceed the amount you have paid us in the twelve months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            These terms shall be governed by and construed in accordance with the laws of the State of South Carolina, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website after changes constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about these Terms of Service, please contact us at{" "}
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
