import Hero from '../src/components/Hero';
import ServiceCard from '../src/components/ServiceCard';
import Testimonial from '../src/components/Testimonial';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Your Journey, Our Mission"
        subtitle="Professional career transition and outplacement services designed to guide you through life's most important career decisions."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How We Can Help
            </h2>
            <p className="text-xl text-gray-dark max-w-3xl mx-auto">
              We provide comprehensive career services tailored to your unique situation and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Outplacement Services"
              description="Comprehensive support for individuals and organizations during career transitions. We provide the technical and adaptive guidance needed to navigate change successfully."
              icon="🎯"
              link="/services#outplacement"
            />
            <ServiceCard
              title="Job Search Critique"
              description="Get expert feedback on your resume, LinkedIn profile, and job search strategy. Identify opportunities for improvement and stand out in a competitive market."
              icon="🔍"
              link="/job-search-critique"
            />
            <ServiceCard
              title="Executive Coaching"
              description="One-on-one coaching for leaders seeking to align their careers with their values, develop new skills, and navigate complex workplace challenges."
              icon="💼"
              link="/services#coaching"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Client Success Stories
          </h2>
          <Testimonial
            quote="Working with TRC Transition Services transformed my approach to leadership and career development. The guidance I received was both practical and deeply insightful."
            author="Sarah Johnson"
            role="Senior Director"
            company="Google"
          />
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Latest Resources
            </h2>
            <p className="text-xl text-gray-dark max-w-3xl mx-auto">
              Insights and guidance for your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-light rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-accent font-semibold text-sm mb-2">CAREER DEVELOPMENT</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Navigating Career Transitions with Confidence
              </h3>
              <p className="text-gray-dark mb-4">
                Learn strategies for making successful career transitions and maintaining momentum during change.
              </p>
              <a href="/resources" className="text-accent hover:text-accent-dark font-semibold">
                Read More →
              </a>
            </div>

            <div className="bg-gray-light rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-accent font-semibold text-sm mb-2">JOB SEARCH</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Optimizing Your LinkedIn Profile
              </h3>
              <p className="text-gray-dark mb-4">
                Essential tips for creating a LinkedIn presence that attracts recruiters and opportunities.
              </p>
              <a href="/resources" className="text-accent hover:text-accent-dark font-semibold">
                Read More →
              </a>
            </div>

            <div className="bg-gray-light rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-accent font-semibold text-sm mb-2">LEADERSHIP</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Values-Aligned Career Decisions
              </h3>
              <p className="text-gray-dark mb-4">
                How to ensure your career choices reflect your personal values and long-term goals.
              </p>
              <a href="/resources" className="text-accent hover:text-accent-dark font-semibold">
                Read More →
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/resources"
              className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Resources
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-light mb-8">
            Get career insights, resources, and opportunities delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-dark focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
