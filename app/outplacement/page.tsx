import Hero from '../../src/components/Hero';

export default function Outplacement() {
  return (
    <>
      <Hero
        title="Outplacement Services"
        subtitle="Comprehensive career transition support for individuals and organizations during change."
        ctaText="Get Started"
        ctaLink="/contact"
        height="medium"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Navigate Career Transitions with Confidence
          </h2>
          <p className="text-xl text-gray-dark leading-relaxed mb-8">
            Our outplacement services provide comprehensive support during career transitions,
            whether you're an individual navigating a job change or an organization supporting
            departing employees. We combine technical expertise with compassionate guidance to
            ensure every transition is handled with dignity and professionalism.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Comprehensive Support Package
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">One-on-one career coaching and strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Resume and LinkedIn profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Interview preparation and practice sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Networking strategies and connections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Salary negotiation guidance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Job search strategy and market research</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Ongoing support until placement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Approach:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2">Technical Excellence</h4>
                  <p className="text-gray-dark">
                    We provide concrete tools and strategies: resume optimization, LinkedIn enhancement,
                    interview preparation, and negotiation tactics. Our expertise ensures you have the
                    practical skills needed to succeed.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2">Adaptive Support</h4>
                  <p className="text-gray-dark">
                    Career transitions involve navigating uncertainty and managing emotions. We provide
                    the emotional support and strategic thinking needed to adapt to change and discover
                    new possibilities.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2">Personalized Service</h4>
                  <p className="text-gray-dark">
                    Every career transition is unique. We customize our approach to your specific situation,
                    industry, and goals, ensuring relevant and actionable guidance throughout your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Outplacement Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Individual Package */}
            <div className="bg-white border-2 border-gray-light rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-cream p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">Individual</h3>
                <p className="text-gray-dark">For professionals in transition</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary mb-2">$2,500</div>
                  <p className="text-gray-dark">3-month program</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Weekly 1-on-1 coaching sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Resume & LinkedIn optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Interview preparation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Email/phone support</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Executive Package */}
            <div className="bg-white border-2 border-accent rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform scale-105">
              <div className="bg-accent p-6 text-center">
                <div className="inline-block bg-white text-accent px-3 py-1 rounded-full text-sm font-bold mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Executive</h3>
                <p className="text-white">For senior-level professionals</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary mb-2">$5,000</div>
                  <p className="text-gray-dark">6-month program</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark font-semibold">Everything in Individual, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Extended 6-month support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Executive branding strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Board positioning support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Priority access & scheduling</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Corporate Package */}
            <div className="bg-white border-2 border-gray-light rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-cream p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">Corporate</h3>
                <p className="text-gray-dark">For organizations</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary mb-2">Custom</div>
                  <p className="text-gray-dark">Volume pricing available</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Tailored program design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Multiple employee support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">HR consultation & support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-dark">Reporting & analytics</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-start mb-4">
              <svg className="w-10 h-10 text-accent mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div>
                <p className="text-gray-dark italic text-lg leading-relaxed mb-4">
                  "The outplacement services provided were exceptional. Not only did I receive
                  practical career guidance, but the emotional support during a difficult transition
                  made all the difference. I landed a better position in just 8 weeks."
                </p>
                <div>
                  <p className="font-semibold text-primary">Jennifer Martinez</p>
                  <p className="text-sm text-gray">VP of Operations, Fortune 500 Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Transition?</h2>
          <p className="text-xl text-gray-light mb-8">
            Let's discuss which outplacement package is right for you.
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
