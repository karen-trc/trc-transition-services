import Hero from '../../src/components/Hero';

export default function About() {
  return (
    <>
      <Hero
        title="About TRC Transition Services"
        subtitle="Empowering professionals through career transitions with wisdom, compassion, and expertise."
        height="medium"
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-dark leading-relaxed text-center mb-8">
            At TRC Transition Services, we believe that career transitions are opportunities for transformation.
            We provide holistic, values-aligned guidance to help professionals navigate change with confidence
            and clarity.
          </p>
          <p className="text-lg text-gray-dark leading-relaxed">
            Our approach combines technical expertise with adaptive support, recognizing that successful
            career transitions require both practical skills and emotional resilience. We partner with
            individuals and organizations to create pathways toward meaningful, fulfilling work.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Our Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Technical Excellence
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  We provide concrete tools and strategies: resume optimization, LinkedIn profile
                  enhancement, interview preparation, negotiation tactics, and job search methodology.
                  Our expertise ensures you have the practical skills needed to succeed in today's market.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Adaptive Support
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  Career transitions involve more than tactics—they require navigating uncertainty,
                  managing emotions, and maintaining confidence. We provide the emotional support and
                  strategic thinking needed to adapt to change and discover new possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-accent rounded-full">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-gray-dark">
                We operate with transparency, honesty, and a commitment to your best interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-accent rounded-full">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Compassion</h3>
              <p className="text-gray-dark">
                Career transitions are deeply personal. We approach each client with empathy and understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-accent rounded-full">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-gray-dark">
                We are committed to delivering the highest quality guidance and achieving outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-light mb-8">
            Let's discuss how we can support your career transition.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
