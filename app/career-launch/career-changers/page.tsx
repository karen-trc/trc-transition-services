import Link from 'next/link';

export const metadata = {
  title: 'Career Changers & Professionals in Transition | Career Launch Program',
  description: "The road ahead feels uncertain. You don't have to walk it alone. A full-year career transition program for career changers and laid-off professionals. Starting at $699.",
};

export default function CareerChangersPage() {
  return (
    <>
      <div className="trc-hero">
        <span className="trc-eyebrow">Tabula Rasa Coaching · Career Transition Program</span>
        <h1>The Road Ahead Feels <em>Uncertain.</em><br />You Don&apos;t Have to Walk It Alone.</h1>
        <p className="trc-hero-sub">Whether you&apos;ve been laid off, are pivoting to something new, or have simply outgrown where you are — a career transition is one of the most disorienting and courageous things a person can do. We know. We&apos;ve walked alongside hundreds of people through exactly this. And we&apos;re here to walk with you.</p>
        <div className="trc-chips">
          <span className="trc-chip">Career changers</span>
          <span className="trc-chip">Laid-off professionals</span>
          <span className="trc-chip">Return-to-work</span>
          <span className="trc-chip">Industry pivoters</span>
          <span className="trc-chip">Gap year returners</span>
        </div>
      </div>

      <div className="trc-quote">
        <p>&ldquo;Job searching in today&apos;s world isn&apos;t just hard — it&apos;s a full-time job in itself, layered on top of the grief, uncertainty, and pressure you&apos;re already carrying. My work is to stand beside you, equip you with everything you need, and remind you — at every step — that you have more to offer than you currently believe.&rdquo;</p>
        <cite>— Karen Florence, CPC | Founder, Tabula Rasa Coaching</cite>
      </div>

      <div className="trc-section">
        <div className="trc-label">We see you</div>
        <div className="trc-title">Let&apos;s name what&apos;s really going on.</div>
        <p className="trc-body">Before we talk about solutions, we want to acknowledge the reality. A career transition isn&apos;t just a logistical challenge — it&apos;s an emotional one. Here is what our clients tell us they&apos;re carrying when they first come to us:</p>
        <div className="trc-grid-3">
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-mood-sad"></i></div><h4>Identity shock</h4><p>When your job disappears or no longer fits, it can shake your sense of who you are. That disorientation is real, valid — and it needs to be addressed, not bypassed.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-clock-exclamation"></i></div><h4>The pressure of time</h4><p>Bills don&apos;t wait. The urgency to find something — anything — can lead to accepting less than you deserve. We help you move quickly without moving recklessly.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-maze"></i></div><h4>The sheer complexity</h4><p>Job boards, networking, recruiters, LinkedIn, ATS systems, panel interviews — it&apos;s a labyrinth. Knowing where to start is genuinely hard.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-eye-off"></i></div><h4>Feeling invisible</h4><p>You send applications and hear nothing. That silence is demoralizing — and usually fixable once you know what&apos;s going wrong.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-messages"></i></div><h4>Interview anxiety</h4><p>Even experienced professionals freeze in interviews. Knowing your story, telling it confidently, and handling curveball questions is a skill — and it&apos;s one we practice together.</p></div>
          <div className="trc-card surface"><div className="trc-card-icon blue"><i className="ti ti-cash"></i></div><h4>Salary negotiation fear</h4><p>Most people leave money on the table because they don&apos;t know what to ask for, or are afraid to ask at all. We make sure that doesn&apos;t happen to you.</p></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">Our approach</div>
        <div className="trc-title">Every challenge. Addressed directly.</div>
        <p className="trc-body">Here is how we work through each stage of your transition — not with generic advice, but with a structured, personalized approach rooted in nearly 20 years of career coaching experience.</p>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-file-description trc-chall-icon blue"></i><h4>Your resume isn&apos;t getting you in the door</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Most resumes fail before a human ever reads them. ATS systems filter out candidates who don&apos;t use the right language. A career pivot makes this even harder, because your experience may look like the wrong fit on paper even when it isn&apos;t.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We write you a strategically crafted resume that speaks directly to your target role. We translate your transferable skills into the language of your new direction, surface your most compelling achievements, and ensure your document passes ATS screening and catches the human eye that follows.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-brand-linkedin trc-chall-icon blue"></i><h4>Your LinkedIn profile isn&apos;t working for you</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Recruiters spend seconds on a LinkedIn profile before deciding whether to keep reading. In a career pivot, your LinkedIn needs to actively bridge the gap between what you did and what you want to do next.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We build or completely revamp your LinkedIn profile — with a compelling headline, a human and keyword-rich summary that speaks to where you&apos;re going, and strategic use of LinkedIn&apos;s features to increase your visibility and discoverability.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-route trc-chall-icon blue"></i><h4>You don&apos;t know where to focus your search</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Job boards feel endless. You apply to fifty things and hear back from three. Every day you&apos;re reactive rather than strategic, and the scatter approach is costing you time and energy you can&apos;t afford to waste.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>In your coaching sessions we build a job search strategy together — identifying the right roles, companies, and industries to target; how to leverage your network effectively; when and how to work with recruiters; and how to prioritize your time so every effort counts.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-microphone trc-chall-icon blue"></i><h4>Interview preparation and confidence</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Most people walk in knowing their history but not knowing how to tell it. For career changers there&apos;s an added challenge: addressing the &ldquo;why are you switching?&rdquo; question in a way that builds confidence rather than doubt.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We dedicate real coaching time to interview preparation — your core narrative, compelling answers, behavioral interview practice using the STAR method, powerful closing questions, and a follow-up strategy that keeps you top of mind. You will walk into that room prepared.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-coin trc-chall-icon blue"></i><h4>Salary negotiation — knowing your worth and asking for it</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Candidates in transition who feel grateful just to have an offer routinely accept compensation below market value. Benefits, equity, start dates, titles, remote flexibility — all negotiable, and most people never ask.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>We coach you through the entire offer and negotiation process — market research, your target range, the exact language to use, how to counter gracefully, and how to evaluate the full package. You will advocate for yourself well.</p></div>
          </div>
        </div>

        <div className="trc-chall">
          <div className="trc-chall-header"><i className="ti ti-heart-handshake trc-chall-icon blue"></i><h4>The emotional weight of it all</h4></div>
          <div className="trc-chall-body">
            <p className="trc-chall-problem">Job searching is relentless. Rejection stings. Motivation dips. The longer it takes, the harder it becomes to keep going with the energy and presence that actually gets people hired.</p>
            <div className="trc-approach"><div className="trc-approach-label">How we help</div><p>Our psychosynthesis-rooted coaching approach was made for exactly this. We don&apos;t just coach your strategy — we coach you. We help you stay connected to your purpose and value through the difficult stretches, rebuild confidence after setbacks, and maintain the grounded, forward-moving energy that employers sense and respond to.</p></div>
          </div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">Your journey with us</div>
        <div className="trc-title">From where you are to where you want to be.</div>
        <div className="trc-journey">
          <div className="trc-step"><div className="trc-step-num">1</div><div className="trc-step-content"><h4>Discovery & direction setting</h4><p>We start by getting clear on who you are, what you bring, and where you genuinely want to go. This foundational session shapes everything that follows.</p><span className="trc-step-tag">Coaching session 1</span></div></div>
          <div className="trc-step"><div className="trc-step-num">2</div><div className="trc-step-content"><h4>Resume & LinkedIn build</h4><p>We get to work building your career documents — a targeted resume and a fully revamped LinkedIn profile that positions you clearly and compellingly for your new direction.</p><span className="trc-step-tag">Documents delivered</span></div></div>
          <div className="trc-step"><div className="trc-step-num">3</div><div className="trc-step-content"><h4>Search strategy & activation</h4><p>We build your job search plan together — target roles, companies, networking approach, recruiter strategy, and a realistic timeline. You leave with a clear map and the confidence to execute it.</p><span className="trc-step-tag">Coaching session 2</span></div></div>
          <div className="trc-step"><div className="trc-step-num">4</div><div className="trc-step-content"><h4>Interview preparation & practice</h4><p>When interviews start coming in, we prepare you thoroughly — your story, your answers, your questions, your follow-up. You practice until it feels natural, not rehearsed.</p><span className="trc-step-tag">Coaching session 3</span></div></div>
          <div className="trc-step"><div className="trc-step-num">5</div><div className="trc-step-content"><h4>Offer, negotiation & landing well</h4><p>When the offer arrives, we coach you through evaluation, negotiation, and making a strong start in your new role. You cross the finish line with confidence.</p><span className="trc-step-tag">Ongoing support · Full year</span></div></div>
        </div>
      </div>

      <div className="trc-divider"></div>

      <div className="trc-section">
        <div className="trc-label">The investment</div>
        <div className="trc-title">One starting package. A full year of support.</div>
        <div className="trc-price-card">
          <div><h3>Career Transition Starting Package</h3><p>Everything you need to move from uncertainty to hired — resume, LinkedIn, coaching, resources, and a dedicated support person in your corner for twelve months.</p></div>
          <div className="trc-price-badge"><div className="pb-label">Starting at</div><div className="pb-num">$699</div><div className="pb-sub">One full year</div></div>
        </div>
        <div className="trc-includes">
          <div className="trc-inc-row">Professionally written, ATS-optimized resume tailored to your transition</div>
          <div className="trc-inc-row">LinkedIn profile creation or full revamp</div>
          <div className="trc-inc-row">3 hours of one-on-one certified career coaching</div>
          <div className="trc-inc-row">Interview preparation and practice</div>
          <div className="trc-inc-row">Salary negotiation coaching</div>
          <div className="trc-inc-row">Job search strategy and activation plan</div>
          <div className="trc-inc-row">Full career resource library access</div>
          <div className="trc-inc-row">Dedicated human support person — all year long</div>
        </div>
        <div className="trc-note"><strong>Need longer-term support?</strong> Additional coaching hours and extended packages are available and will be discussed personally with your coach based on your needs.</div>
      </div>

      <div className="trc-cta">
        <h2>Your next chapter is waiting.</h2>
        <p>You&apos;ve already shown courage by getting to this point. Let us walk the rest of this road with you — and make sure you land exactly where you deserve to be.</p>
        <Link href="/contact" className="trc-cta-btn">Start your transition today →</Link>
        <p className="trc-cta-foot">Tabula Rasa Coaching · Certified Career Coaches (CPC) · Glenmoore, PA</p>
      </div>
    </>
  );
}
