import Link from 'next/link';

export const metadata = {
  title: 'Career Launch Program | TRC Transition Services',
  description: "You don't have to figure this out alone. Expert career coaching, professional documents, and a real support team for a full year. Starting at $599.",
};

export default function CareerLaunchHub() {
  return (
    <>
      {/* HERO */}
      <div className="trc-hero">
        <span className="trc-eyebrow">Tabula Rasa Coaching · Career Launch Program</span>
        <h1>You Don&apos;t Have to Figure This Out <em>Alone.</em></h1>
        <p className="trc-hero-sub">Whether you&apos;re just starting out, starting over, or stepping up — we walk with you every step of the way. Expert coaching, professional career documents, and a real support team in your corner for a full year.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', position: 'relative' }}>
          <div style={{ background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '1rem 1.75rem', textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Students, Career Changers & Mid-Career</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: '#F28D0D', lineHeight: 1 }}>from $599</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>One year · All-inclusive starting package</div>
          </div>
          <div style={{ background: 'rgba(242,141,13,0.15)', border: '0.5px solid rgba(242,141,13,0.4)', borderRadius: 12, padding: '1rem 1.75rem', textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Senior & Executive Professionals</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: '#F28D0D', lineHeight: 1 }}>$1,299</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>Senior-level coaches · Advanced methodology</div>
          </div>
        </div>
      </div>

      {/* KAREN QUOTE */}
      <div className="trc-quote">
        <p>&ldquo;A career transition — at any stage — is one of the most vulnerable and uncertain things a person can navigate. It touches your identity, your security, and your sense of self. My approach has always been to meet people exactly where they are, with compassion, strategy, and a belief in what&apos;s possible for them.&rdquo;</p>
        <cite>— Karen Florence, CPC | Founder, Tabula Rasa Coaching | Nearly 20 years of experience</cite>
      </div>

      {/* WHAT'S INCLUDED */}
      <div className="trc-section">
        <div className="trc-label">The Program</div>
        <div className="trc-title">A complete system of support — not just a resume.</div>
        <p className="trc-body">This isn&apos;t a transactional service. It&apos;s a guided partnership. Everything in this program is designed to work together — so your documents, your story, your strategy, and your confidence all move in the same direction.</p>
        <div className="trc-grid-4">
          <div className="trc-card surface">
            <div className="trc-card-icon blue"><i className="ti ti-file-text"></i></div>
            <h4>Professional Resume</h4>
            <p>Strategically written, ATS-ready — honestly and compellingly representing who you are and where you&apos;re going.</p>
            <div className="card-note">Valid 1 full year</div>
          </div>
          <div className="trc-card surface">
            <div className="trc-card-icon blue"><i className="ti ti-brand-linkedin"></i></div>
            <h4>LinkedIn Profile</h4>
            <p>A complete build or revamp — written to attract the right people and open doors you didn&apos;t know were there.</p>
            <div className="card-note">New or existing profile</div>
          </div>
          <div className="trc-card surface">
            <div className="trc-card-icon blue"><i className="ti ti-heart-handshake"></i></div>
            <h4>Career Coaching</h4>
            <p>3 hours of one-on-one coaching with a Certified Career Coach — to clarify direction, build strategy, and move forward with confidence.</p>
            <div className="card-note">Certified Career Coaches (CPC)</div>
          </div>
          <div className="trc-card surface">
            <div className="trc-card-icon blue"><i className="ti ti-users"></i></div>
            <h4>Resources & Support</h4>
            <p>Full career resource library and a dedicated support person — a real human being in your corner all year long.</p>
            <div className="card-note">Human support · All year</div>
          </div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-note"><strong>Additional coaching packages available.</strong> This is a starting package. For clients who want longer-term professional coaching support, additional packages are available and will be discussed personally with your coach.</div>

      <div className="trc-divider"></div>

      {/* AUDIENCE PATHS */}
      <div className="trc-section">
        <div className="trc-label">Find Your Path</div>
        <div className="trc-title">Where are you right now?</div>
        <p className="trc-body">Every person&apos;s career journey is unique. Choose the path that speaks to where you are — you&apos;ll find information, support, and a program designed specifically for you.</p>

        <div className="trc-grid-2">
          <Link href="/career-launch/students" className="trc-card" style={{ textDecoration: 'none', display: 'block', borderTop: '2px solid var(--blue)' }}>
            <div className="trc-card-icon blue"><i className="ti ti-school"></i></div>
            <h4>Students & New Graduates</h4>
            <p>You&apos;ve worked hard for your degree. Now comes the part they didn&apos;t fully prepare you for. Launch with confidence, clarity, and a professional presence that gets noticed.</p>
            <div className="card-note" style={{ marginTop: '1rem' }}>Starting at $599 → Learn more</div>
          </Link>
          <Link href="/career-launch/career-changers" className="trc-card" style={{ textDecoration: 'none', display: 'block', borderTop: '2px solid var(--blue)' }}>
            <div className="trc-card-icon teal"><i className="ti ti-route"></i></div>
            <h4>Career Changers & Professionals in Transition</h4>
            <p>Something has shifted — a layoff, a calling, a life change. The path forward feels uncertain and enormous. You don&apos;t have to carry that alone.</p>
            <div className="card-note" style={{ marginTop: '1rem' }}>Starting at $699 → Learn more</div>
          </Link>
          <Link href="/career-launch/senior-executive" className="trc-card" style={{ textDecoration: 'none', display: 'block', borderTop: '2px solid var(--orange)' }}>
            <div className="trc-card-icon orange"><i className="ti ti-crown"></i></div>
            <h4>Senior & Executive Professionals</h4>
            <p>Your career has earned real weight and complexity. You deserve a coach and strategy that matches it — someone who understands leadership positioning at the highest levels.</p>
            <div className="card-note orange" style={{ marginTop: '1rem' }}>Starting at $1,299 → Learn more</div>
          </Link>
          <Link href="/career-launch/mid-career" className="trc-card" style={{ textDecoration: 'none', display: 'block', borderTop: '2px solid var(--blue)' }}>
            <div className="trc-card-icon coral"><i className="ti ti-rocket"></i></div>
            <h4>Ambitious Mid-Career & Ready for More</h4>
            <p>You&apos;ve built something real. Now you want to grow — up, across, or into something entirely new. It&apos;s time to make your ambition visible and your next move intentional.</p>
            <div className="card-note" style={{ marginTop: '1rem' }}>Starting at $699 → Learn more</div>
          </Link>
        </div>
      </div>

      <div className="trc-divider"></div>

      {/* TRUST STATS */}
      <div className="trc-section">
        <div className="trc-label">Why Tabula Rasa Coaching</div>
        <div className="trc-stats">
          <div className="trc-stat"><div className="s-num">20</div><div className="s-label">Years guiding careers</div></div>
          <div className="trc-stat"><div className="s-num">CPC</div><div className="s-label">Certified Professional Coaches</div></div>
          <div className="trc-stat"><div className="s-num">12 mo</div><div className="s-label">Of dedicated support</div></div>
          <div className="trc-stat"><div className="s-num">1:1</div><div className="s-label">Personal coaching, always</div></div>
        </div>
      </div>

      {/* CTA */}
      <div className="trc-cta" id="get-started">
        <h2>Ready to take the first step?</h2>
        <p>A conversation costs nothing. Let&apos;s talk about where you are and where you want to go.</p>
        <Link href="/contact" className="trc-cta-btn">Get started today →</Link>
        <p className="trc-cta-foot">TRC Transition Services · Tabula Rasa Coaching · Glenmoore, PA</p>
      </div>
    </>
  );
}
