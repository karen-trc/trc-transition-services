import Link from 'next/link';

export const metadata = {
  title: 'Ambitious Mid-Career & Ready for More | Career Launch Program',
  description: "You've built something real. Now it's time to build more. A strategic relaunch program for ambitious mid-career professionals. Starting at $699.",
};

export default function MidCareerPage() {
  return (
    <>
      <div className="trc-hero">
        <span className="trc-eyebrow">Tabula Rasa Coaching · Ambitious Mid-Career Program</span>
        <h1>You&apos;ve Built Something Real.<br />Now It&apos;s Time to <em>Build More.</em></h1>
        <p className="trc-hero-sub">You&apos;re not starting over — you&apos;re stepping up. Whether you want to move into leadership, pivot to something more meaningful, or simply stop settling for a role that no longer fits who you&apos;ve become, you&apos;ve earned the right to want more. We&apos;re here to help you get it — with strategy, clarity, and a partner who believes in what&apos;s possible for you.</p>
        <div className="trc-chips">
          <span className="trc-chip">Seeking promotion or advancement</span>
          <span className="trc-chip">Ready for a fresh start</span>
          <span className="trc-chip">Moving into leadership</span>
          <span className="trc-chip">Reclaiming momentum</span>
        </div>
      </div>

      <div className="trc-quote">
        <p>&ldquo;Mid-career is one of the most powerful — and most underestimated — moments in a professional&apos;s life. You have real experience, genuine achievements, and a clearer sense of who you are than you did at 25. What you need now isn&apos;t a new start. It&apos;s a strategic relaunch — and someone to help you see the full picture of what you&apos;ve built and where it can take you.&rdquo;</p>
        <cite>— Karen Florence, CPC | Founder, Tabula Rasa Coaching | Nearly 20 years of experience</cite>
      </div>

      <div className="trc-section">
        <div className="trc-label">We see you</div>
        <div className="trc-title">The things that keep you up at night — and hold you back from moving.</div>
        <p className="trc-body">Ambition at mid-career doesn&apos;t always look like urgency. Sometimes it looks like a quiet, growing sense that you&apos;re capable of more than your current role reflects. Here is what we hear most from clients at this stage:</p>
        <div className="trc-grid-3">
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-clock-pause"></i></div><h4>&ldquo;I&apos;ve been here too long&rdquo;</h4><p>You&apos;ve been in the same role or company for years. You&apos;re not unhappy, but you&apos;re not growing. Moving feels risky and the job market feels foreign after so long away from it.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-eye-off"></i></div><h4>&ldquo;I don&apos;t know how to present myself anymore&rdquo;</h4><p>Your resume is years out of date. Your LinkedIn looks like 2018. You&apos;ve accomplished a lot — but you genuinely don&apos;t know how to articulate it for today&apos;s market.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-help"></i></div><h4>&ldquo;I don&apos;t know what I actually want&rdquo;</h4><p>More money? More meaning? More flexibility? A title? A different industry? The ambition is real but the direction is murky — and moving without clarity usually leads to the same frustration somewhere new.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-users"></i></div><h4>&ldquo;My network has gone cold&rdquo;</h4><p>When you were younger, connections happened naturally. Now you feel like you&apos;d be bothering people if you reached out. Strategic networking feels transactional and uncomfortable.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-trending-up"></i></div><h4>&ldquo;I&apos;ve been passed over and I don&apos;t know why&rdquo;</h4><p>You&apos;ve been doing excellent work. Others have been promoted around you. The feedback has been vague. The frustration is real — and it usually has a fixable cause.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-heart"></i></div><h4>&ldquo;I want my work to mean something again&rdquo;</h4><p>The paycheck matters, but so does purpose. Many mid-career professionals reach a point where they need their work to align with who they&apos;ve become — not just what they studied or fell into.</p></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">Our approach</div>
        <div className="trc-title">From where you are to where you want to be — with intention.</div>
        <p className="trc-body">Mid-career coaching isn&apos;t about fixing what&apos;s broken. It&apos;s about clarifying what&apos;s next, building the materials and strategy to pursue it, and giving you the confidence to move with purpose.</p>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-compass trc-chall-icon blue"></i><h4>Getting clear on what you actually want</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Ambition without direction is frustrating and expensive. Moving to a new role for the wrong reasons — more money, escape from a bad boss, status — rarely produces the satisfaction you&apos;re looking for. And without a clear target, your resume, your LinkedIn, and your search have no coherent story to tell.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We start with the deeper work — using a whole-person, psychosynthesis-informed approach to help you get genuinely clear on what you want, what you value, and what kind of contribution feels meaningful to you at this stage. From there, every strategy and document we build is aligned to something real. This is what separates intentional career moves from lateral ones.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-file-description trc-chall-icon blue"></i><h4>A resume that reflects who you are now — not who you were</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Mid-career resumes often suffer from one of two problems: they&apos;re too dense — a decade of everything crammed onto two pages — or they&apos;re too thin, failing to capture the real scope and impact of what you&apos;ve built. Either way, the result is a document that doesn&apos;t do justice to your actual value.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We write you a strategically distilled, achievement-driven resume that tells the story of a professional at the height of their capabilities — not a career archivist. We surface your most compelling wins, quantify your impact where possible, position you clearly for your target role, and make sure the document passes ATS screening and captures a human reader in seconds.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-brand-linkedin trc-chall-icon blue"></i><h4>A LinkedIn presence that reflects your ambition</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Most mid-career professionals have a LinkedIn profile — but few have a LinkedIn presence. There&apos;s a difference. A profile is a resume copy-paste with a photo. A presence is a professional brand that communicates your value, your direction, and your leadership to everyone who finds you — recruiters, peers, potential clients, and future employers.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We transform your LinkedIn from a static record into an active asset — with a headline that positions you where you&apos;re going (not just where you&apos;ve been), a summary that sounds like a real person with real ambitions, a fully optimized experience section, and a strategic approach to your LinkedIn activity that increases your visibility among the right people.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-network trc-chall-icon blue"></i><h4>Reactivating your network — authentically</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">At mid-career, your network is your most powerful asset — and most people aren&apos;t using it. Not because they don&apos;t have one, but because reaching out feels awkward when you want something. The transactional feeling of &ldquo;I&apos;m only contacting you because I need a favor&rdquo; stops most people before they start.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We coach you on how to reactivate and expand your network in a way that feels genuine, not desperate. How to reach out to people you haven&apos;t spoken to in years without it feeling strange. How to have conversations that create real opportunity. How to build a professional community that supports your growth over the long term — not just during a job search.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-microphone trc-chall-icon blue"></i><h4>Interview confidence at a new level</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Mid-career interviews are different from early-career interviews. You&apos;re being assessed not just on skills and experience, but on leadership potential, cultural fit at a higher level, strategic thinking, and whether you&apos;re someone people want to follow. If you haven&apos;t interviewed in years, that&apos;s a real gap to address.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We prepare you for mid-to-senior level interview dynamics — your leadership narrative, how to speak about your achievements without underselling or over-explaining, how to handle &ldquo;why are you leaving&rdquo; and &ldquo;where do you see yourself&rdquo; questions with confidence, and how to close an interview in a way that leaves a lasting, positive impression. You&apos;ll walk in as the professional you actually are.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-coin trc-chall-icon blue"></i><h4>Negotiating compensation that matches your value</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Mid-career professionals often undersell themselves at offer time because they&apos;ve been out of the market long enough to lose track of their actual market value. They accept the first number, negotiate timidly, or fail to consider the full compensation package — and leave significant money behind.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We research your market value and build your negotiation strategy before any offer arrives. We coach you on how to anchor the conversation at the right level, how to respond to an offer confidently and professionally, and how to evaluate and negotiate the full package — including elements most people forget to negotiate. You&apos;ll arrive at your new role knowing you were paid what you&apos;re worth.</p></div>
          </div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">Your journey with us</div>
        <div className="trc-title">A guided path from clarity to your next chapter.</div>
        <div className="trc-journey">
          <div className="trc-step"><div className="trc-step-num">1</div><div className="trc-step-content"><h4>Clarity and direction — the foundation of everything</h4><p>We begin with the most important work: getting genuinely clear on who you are now, what you want next, and what success actually looks like for you at this stage. This conversation changes everything that follows.</p><span className="trc-step-tag">Coaching session 1</span></div></div>
          <div className="trc-step"><div className="trc-step-num">2</div><div className="trc-step-content"><h4>Resume and LinkedIn — a professional brand that matches your ambition</h4><p>We build your career documents to reflect the professional you are today — and position you clearly for where you&apos;re going. Strategic, compelling, and aligned to your target.</p><span className="trc-step-tag">Documents delivered</span></div></div>
          <div className="trc-step"><div className="trc-step-num">3</div><div className="trc-step-content"><h4>Search strategy and network activation</h4><p>We build your job search strategy together — target roles, companies, search channels, and a practical plan to reactivate your network with authenticity and intention.</p><span className="trc-step-tag">Coaching session 2</span></div></div>
          <div className="trc-step"><div className="trc-step-num">4</div><div className="trc-step-content"><h4>Interview preparation — performing at your level</h4><p>When conversations start opening up, we prepare you thoroughly for the interviews ahead — your narrative, your leadership story, your toughest questions, and your strongest close.</p><span className="trc-step-tag">Coaching session 3</span></div></div>
          <div className="trc-step"><div className="trc-step-num">5</div><div className="trc-step-content"><h4>Offer, negotiation, and stepping into what&apos;s next</h4><p>When the right opportunity arrives, we help you evaluate it fully, negotiate confidently, and start your new chapter with the clarity and energy it deserves.</p><span className="trc-step-tag">Ongoing support · Full year</span></div></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">The investment</div>
        <div className="trc-title">One starting package. A full year of support.</div>
        <div className="trc-price-card">
          <div><h3>Ambitious Mid-Career Starting Package</h3><p>Everything you need to move from where you are to where you want to be — resume, LinkedIn, certified career coaching, search strategy, interview prep, negotiation coaching, and a dedicated support person in your corner for twelve months.</p></div>
          <div className="trc-price-badge"><div className="pb-label">Starting at</div><div className="pb-num">$699</div><div className="pb-sub">One full year</div></div>
        </div>
        <div className="trc-includes">
          <div className="trc-inc-row">Professionally written, achievement-driven resume tailored to your target role</div>
          <div className="trc-inc-row">LinkedIn profile revamp — built for where you&apos;re going, not where you&apos;ve been</div>
          <div className="trc-inc-row">3 hours of one-on-one certified career coaching</div>
          <div className="trc-inc-row">Career direction and strategy clarity work</div>
          <div className="trc-inc-row">Job search strategy and network activation plan</div>
          <div className="trc-inc-row">Interview preparation and leadership narrative coaching</div>
          <div className="trc-inc-row">Salary and compensation negotiation coaching</div>
          <div className="trc-inc-row">Full career resource library access</div>
          <div className="trc-inc-row">Dedicated human support person — all year long</div>
        </div>
        <div className="trc-note"><strong>Need longer-term support?</strong> Additional coaching hours and extended packages are available and will be discussed personally with your coach based on your situation and goals.</div>
      </div>

      <div className="trc-cta">
        <h2>Your ambition deserves a real strategy.</h2>
        <p>You&apos;ve done the work to get here. Let&apos;s make sure the next chapter reflects everything you&apos;ve built — and everything you&apos;re still capable of.</p>
        <Link href="/contact" className="trc-cta-btn">Start the conversation →</Link>
        <p className="trc-cta-foot">Tabula Rasa Coaching · Certified Career Coaches (CPC) · Glenmoore, PA</p>
      </div>
    </>
  );
}
