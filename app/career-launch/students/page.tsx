import Link from 'next/link';

export const metadata = {
  title: 'Students & New Graduates | Career Launch Program',
  description: "Your degree got you here. We'll help you get there. A full-year career launch program for students and recent graduates. Starting at $599.",
};

export default function StudentsPage() {
  return (
    <>
      <div className="trc-hero">
        <span className="trc-eyebrow">Tabula Rasa Coaching · Student & Graduate Launch Program</span>
        <h1>Your Degree Got You Here.<br />We&apos;ll Help You Get <em>There.</em></h1>
        <p className="trc-hero-sub">You&apos;ve worked for years to earn your education. Now comes the part nobody fully prepared you for — entering a competitive job market with real employers, real expectations, and a world that moves fast. You don&apos;t have to figure it out alone. We&apos;ve walked thousands of steps ahead of you, and we know exactly how to help you land.</p>
        <div className="trc-chips">
          <span className="trc-chip">College seniors</span>
          <span className="trc-chip">Recent graduates</span>
          <span className="trc-chip">Internship seekers</span>
          <span className="trc-chip">First career step</span>
          <span className="trc-chip">Graduate students</span>
        </div>
      </div>

      <div className="trc-quote">
        <p>&ldquo;Stepping into the job market for the first time is exhilarating and terrifying in equal measure. You have more to offer than you know — and what you need most is someone to help you see it, shape it, and show it to the world with confidence. That&apos;s exactly what we&apos;re here to do.&rdquo;</p>
        <cite>— Karen Florence, CPC | Founder, Tabula Rasa Coaching | Nearly 20 years of experience</cite>
      </div>

      <div className="trc-section">
        <div className="trc-label">The landscape</div>
        <div className="trc-title">The job market students are walking into right now.</div>
        <p className="trc-body">Today&apos;s graduates are competing in an environment shaped by AI, global talent pools, applicant tracking systems, and employers who receive hundreds of applications for a single role. The students who succeed are the ones who come prepared.</p>
        <div className="trc-stats">
          <div className="trc-stat"><div className="s-num">250+</div><div className="s-label">Applications per corporate job posting on average</div></div>
          <div className="trc-stat"><div className="s-num">75%</div><div className="s-label">Of resumes filtered by ATS before a human sees them</div></div>
          <div className="trc-stat"><div className="s-num">70%</div><div className="s-label">Of jobs filled through networking, not job boards</div></div>
          <div className="trc-stat"><div className="s-num">6 sec</div><div className="s-label">Average recruiter time on a resume at first glance</div></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-parent">
        <div className="pb-eyebrow">A message for parents</div>
        <h3>You&apos;ve invested everything in their education.<br />This is the bridge to their first real opportunity.</h3>
        <p>You&apos;ve watched your son or daughter work hard for years. Now they&apos;re standing at the edge of the professional world — and the gap between a great education and a great first job is real, and it is wide. Most universities simply don&apos;t teach students how to market themselves, navigate interviews, or negotiate an offer. That gap is what we close. Enrolling your graduate in this program is one of the most practical, high-return investments you can make at this stage of their journey — giving them a professional resume, a standout LinkedIn profile, certified career coaching, and a dedicated support person in their corner for an entire year. Not as a crutch, but as a launchpad.</p>
        <div className="trc-parent-reasons">
          <div className="trc-parent-reason"><strong>Protect the investment</strong><p>Years of tuition deserve a strong landing. This ensures their education translates into opportunity.</p></div>
          <div className="trc-parent-reason"><strong>Give them a real head start</strong><p>Most graduates enter the market unprepared. Yours won&apos;t. That difference matters enormously in year one.</p></div>
          <div className="trc-parent-reason"><strong>Support without overstepping</strong><p>We guide them independently and professionally. You get peace of mind. They get ownership of their launch.</p></div>
          <div className="trc-parent-reason"><strong>Real value at $599</strong><p>One negotiated salary improvement often returns this investment many times over in year one alone.</p></div>
        </div>
      </div>

      <div className="trc-section">
        <div className="trc-label">The real challenges</div>
        <div className="trc-title">What students and new graduates are actually up against.</div>
        <div className="trc-grid-3">
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-file-x"></i></div><h4>A resume that doesn&apos;t work</h4><p>Most student resumes are formatted wrong, too long, full of the wrong words, or missing the achievements that actually get noticed. A generic template is not enough.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-brand-linkedin"></i></div><h4>No LinkedIn presence</h4><p>Recruiters search LinkedIn before they search anywhere else. A blank or bare profile signals a candidate isn&apos;t serious. A strong one opens doors before you ever apply.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-network"></i></div><h4>Not knowing how to network</h4><p>Networking feels awkward to most students. Done well, it&apos;s the single most effective job search tool there is — and it&apos;s a skill that can be learned.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-messages"></i></div><h4>Interview unpreparedness</h4><p>A first interview is a high-stakes performance with almost no practice behind it. Behavioral questions, salary conversations, follow-up etiquette — these aren&apos;t instinctive.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-map-question"></i></div><h4>No clear direction</h4><p>Many graduates aren&apos;t sure what they want. Clarifying your direction early saves months of unfocused searching and wrong-fit applications.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-coin"></i></div><h4>Accepting the first offer</h4><p>New graduates almost never negotiate. They&apos;re so relieved to get an offer they say yes — and often leave thousands of dollars on the table on their very first job.</p></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">Internships</div>
        <div className="trc-title">The internship is the new entry-level job — and we&apos;ll help you get one.</div>
        <p className="trc-body">Internships are no longer optional extras on a resume. They are the primary pathway into full-time employment for most industries. Companies use internships to identify and hire their future talent — which means getting the right internship, in the right organization, at the right time, is one of the most important career moves a student can make. We treat your internship search with the same seriousness as a full job search — because it is one.</p>
        <div className="trc-grid-3">
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-file-text"></i></div><h4>Internship-targeted resume</h4><p>A resume written specifically to highlight academic work, projects, skills, and early experience in a way that resonates with internship recruiters.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-brand-linkedin"></i></div><h4>LinkedIn built for internship search</h4><p>Your profile positioned to attract campus recruiters and internship program managers — a headline and summary that reflects your ambition and potential.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-search"></i></div><h4>Where and how to find internships</h4><p>We coach you on exactly where to look — beyond job boards — including company career pages, campus recruiting programs, professional associations, and direct outreach.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-microphone"></i></div><h4>Internship interview preparation</h4><p>Internship interviews are real interviews. We prepare you to show up confidently, speak about your skills compellingly, and leave a lasting impression.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-network"></i></div><h4>Networking for students</h4><p>We teach you how to build professional relationships authentically — reaching out to alumni, attending events, and making connections that lead to opportunities.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-star"></i></div><h4>Making the most of your internship</h4><p>Landing is just the beginning. We coach you on how to show up, stand out, and convert your internship into a full-time offer or a powerful reference.</p></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">Our approach</div>
        <div className="trc-title">Every challenge, addressed step by step.</div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-file-description trc-chall-icon blue"></i><h4>Building a resume that actually gets read</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Most student resumes are ATS-incompatible, incorrectly formatted, or filled with language that doesn&apos;t translate to professional value. Academic achievements, extracurriculars, projects, and part-time work are often undersold.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We write you a professional, ATS-optimized resume from the ground up — using your academic history, projects, internships, campus involvement, and skills to build a document that speaks the language of your target industry. We identify the achievements you&apos;ve overlooked and translate your experience into professional value.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-brand-linkedin trc-chall-icon blue"></i><h4>Creating a LinkedIn presence that works</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Many students have no LinkedIn profile, or one that is a sparse copy of their resume with no photo, no summary, and no strategy. Recruiters use LinkedIn as their primary sourcing tool — a weak profile means you simply don&apos;t exist to them.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We build your LinkedIn presence from scratch or completely revamp it — with a compelling headline, a warm and authentic summary that conveys your personality and direction, and guidance on how to connect with recruiters, alumni, and industry professionals.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-compass trc-chall-icon blue"></i><h4>Clarifying your direction and building your search strategy</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Applying to everything is a strategy that rarely works. Without a clear target, you dilute your energy and your message. Many graduates spend months applying broadly and hearing nothing, when a more focused approach would produce results in weeks.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>In your coaching sessions we work together to clarify your strengths, your interests, and the direction that genuinely fits you. From there, we build a targeted search strategy: the right roles, the right companies, the right avenues. You&apos;ll stop guessing and start moving with purpose.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-microphone trc-chall-icon blue"></i><h4>Interview preparation — turning nerves into confidence</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Most students walk into interviews with almost no rehearsal. They stumble on behavioral questions, undersell their achievements, don&apos;t ask strong questions, and leave without a follow-up plan.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We walk you through the full interview process — common questions, the STAR method for behavioral questions, how to tell your story concisely and compellingly, what to research beforehand, and how to close the conversation professionally. We practice together until it feels confident and natural.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-coin trc-chall-icon blue"></i><h4>Salary and offer negotiation — getting what you deserve from day one</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Almost no new graduate negotiates their first offer. But the decisions made at the first offer compound over years. Starting $5,000 higher at 22 matters more than most people realize.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We coach you on how to evaluate an offer, research what your role should pay, and ask for more — respectfully, confidently, and effectively. We give you the words, the framing, and the confidence to advocate for yourself from the very first offer. It&apos;s a skill that will serve you for your entire career.</p></div>
          </div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">Your journey with us</div>
        <div className="trc-title">From graduation to hired — step by step.</div>
        <div className="trc-journey">
          <div className="trc-step"><div className="trc-step-num">1</div><div className="trc-step-content"><h4>Discovery — who you are and where you&apos;re going</h4><p>We start by getting to know you — your strengths, your interests, your values, and the direction that genuinely excites you. A real conversation that shapes everything we build together.</p><span className="trc-step-tag">Coaching session 1</span></div></div>
          <div className="trc-step"><div className="trc-step-num">2</div><div className="trc-step-content"><h4>Resume and LinkedIn — your professional presence built</h4><p>We craft your resume and LinkedIn profile — two powerful, consistent documents that present you clearly and compellingly to the employers and recruiters you want to reach.</p><span className="trc-step-tag">Documents delivered</span></div></div>
          <div className="trc-step"><div className="trc-step-num">3</div><div className="trc-step-content"><h4>Search strategy — a plan you can actually execute</h4><p>We build your job or internship search strategy together — where to look, how to network, how to approach companies, and how to stay organized and motivated through the process.</p><span className="trc-step-tag">Coaching session 2</span></div></div>
          <div className="trc-step"><div className="trc-step-num">4</div><div className="trc-step-content"><h4>Interview prep — practiced, confident, ready</h4><p>When interviews come in, we prepare you thoroughly. We rehearse, refine your story, work through the hard questions, and send you in ready to make a real impression.</p><span className="trc-step-tag">Coaching session 3</span></div></div>
          <div className="trc-step"><div className="trc-step-num">5</div><div className="trc-step-content"><h4>Offer, negotiation, and your strong start</h4><p>When an offer arrives, we help you evaluate it, negotiate where appropriate, and step into your new role with confidence. Your support team remains available all year.</p><span className="trc-step-tag">Ongoing support · Full year</span></div></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">The investment</div>
        <div className="trc-title">Everything they need for an entire year. $599.</div>
        <div className="trc-price-card">
          <div><h3>Student & Graduate Launch Package</h3><p>A complete first-year career support system — professional resume, LinkedIn, certified career coaching, internship support, interview preparation, salary negotiation coaching, and a dedicated support person for twelve months.</p></div>
          <div className="trc-price-badge"><div className="pb-label">Starting at</div><div className="pb-num">$599</div><div className="pb-sub">One full year</div></div>
        </div>
        <div className="trc-includes">
          <div className="trc-inc-row">Professionally written, ATS-optimized resume tailored to entry-level and internship roles</div>
          <div className="trc-inc-row">LinkedIn profile build — created from scratch or fully revamped</div>
          <div className="trc-inc-row">3 hours of one-on-one certified career coaching</div>
          <div className="trc-inc-row">Internship search strategy and preparation</div>
          <div className="trc-inc-row">Job search direction and activation plan</div>
          <div className="trc-inc-row">Interview preparation and practice</div>
          <div className="trc-inc-row">Salary and offer negotiation coaching</div>
          <div className="trc-inc-row">Full career resource library access</div>
          <div className="trc-inc-row">Dedicated human support person — all year long</div>
        </div>
        <div className="trc-note"><strong>Need more support along the way?</strong> Additional coaching packages are available and will be discussed personally with your coach.</div>
      </div>

      <div className="trc-cta">
        <h2>Give them the start they&apos;ve earned.</h2>
        <p>They worked hard for their degree. Let&apos;s make sure that hard work opens the right doors — with the tools, the coaching, and the support to land confidently in a career they&apos;re proud of.</p>
        <Link href="/contact" className="trc-cta-btn">Get started today →</Link>
        <p className="trc-cta-foot">Tabula Rasa Coaching · Certified Career Coaches (CPC) · Glenmoore, PA</p>
      </div>
    </>
  );
}
