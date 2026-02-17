import Hero from '../../src/components/Hero';

export default function Resources() {
  const articles = [
    {
      category: 'CAREER DEVELOPMENT',
      title: 'Navigating Career Transitions with Confidence',
      description: 'Learn strategies for making successful career transitions and maintaining momentum during change.',
      date: 'February 15, 2026',
    },
    {
      category: 'JOB SEARCH',
      title: 'Optimizing Your LinkedIn Profile',
      description: 'Essential tips for creating a LinkedIn presence that attracts recruiters and opportunities.',
      date: 'February 10, 2026',
    },
    {
      category: 'LEADERSHIP',
      title: 'Values-Aligned Career Decisions',
      description: 'How to ensure your career choices reflect your personal values and long-term goals.',
      date: 'February 5, 2026',
    },
    {
      category: 'INTERVIEW PREP',
      title: 'Mastering the Behavioral Interview',
      description: 'Framework and examples for answering common behavioral interview questions effectively.',
      date: 'January 28, 2026',
    },
    {
      category: 'NETWORKING',
      title: 'Building Authentic Professional Relationships',
      description: 'Strategies for networking that feel genuine and lead to meaningful connections.',
      date: 'January 20, 2026',
    },
    {
      category: 'RESUME TIPS',
      title: 'Quantifying Your Impact on Your Resume',
      description: 'How to use metrics and data to demonstrate your accomplishments and value.',
      date: 'January 15, 2026',
    },
  ];

  return (
    <>
      <Hero
        title="Career Resources & Insights"
        subtitle="Expert guidance, practical tips, and inspiration for your career journey."
        height="medium"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-cream rounded-lg overflow-hidden shadow-lg">
              <div className="p-8 md:p-12">
                <div className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  FEATURED
                </div>
                <h2 className="text-4xl font-bold text-primary mb-4">
                  The Power of Career Transitions: Embracing Change as an Opportunity
                </h2>
                <p className="text-xl text-gray-dark mb-6 leading-relaxed">
                  Career transitions can feel overwhelming, but they also present unique opportunities
                  for growth, learning, and alignment with your values. Discover how to approach
                  transitions with confidence and clarity.
                </p>
                <a
                  href="#"
                  className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <h2 className="text-3xl font-bold text-primary mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white border border-gray-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="text-accent font-semibold text-sm mb-2">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-dark mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray">{article.date}</span>
                    <a
                      href="#"
                      className="text-accent hover:text-accent-dark font-semibold text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Career Tools Section */}
      <section id="career" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Career Tools & Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Resume Template</h3>
              <p className="text-sm text-gray-dark mb-4">Professional format</p>
              <a href="#" className="text-accent hover:text-accent-dark font-semibold text-sm">
                Download
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Interview Prep</h3>
              <p className="text-sm text-gray-dark mb-4">Common questions</p>
              <a href="#" className="text-accent hover:text-accent-dark font-semibold text-sm">
                Download
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Networking Guide</h3>
              <p className="text-sm text-gray-dark mb-4">Build connections</p>
              <a href="#" className="text-accent hover:text-accent-dark font-semibold text-sm">
                Download
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Career Assessment</h3>
              <p className="text-sm text-gray-dark mb-4">Find your path</p>
              <a href="#" className="text-accent hover:text-accent-dark font-semibold text-sm">
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-light mb-8">
            Get new articles and resources delivered to your inbox.
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
