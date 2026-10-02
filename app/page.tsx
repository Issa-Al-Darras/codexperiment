const contact = "mailto:issadarras0@gmail.com?subject=Free%20LeakFix%20mini-audit&body=Hi%20LeakFix%2C%0A%0AMy%20website%20is%3A%20%0AMy%20main%20customer%20action%20is%3A%20%0A%0APlease%20send%20the%20free%203-point%20mini-audit.";

export default function Home() {
  return <main>
    <nav><a className="brand" href="#top">Leak<span>Fix</span></a><a className="navCta" href={contact}>Get the free mini-audit</a></nav>
    <section className="hero" id="top">
      <div className="eyebrow"><i /> FOR UAE SERVICE BUSINESSES</div>
      <h1>Your website gets visits.<br/><em>It should get enquiries.</em></h1>
      <p className="lede">In 24 hours, get a plain-English teardown showing exactly where customers hesitate — plus stronger copy you can paste into your site.</p>
      <div className="actions"><a className="primary" href={contact}>Send my free 3-point audit <b>→</b></a><a className="secondary" href="#deliverables">See what you get</a></div>
      <p className="micro">No login. No sales call. Send only your public website URL.</p>
      <div className="scorecard" aria-label="Example audit scorecard">
        <div className="scoreTop"><span>EXAMPLE: HOMEPAGE DIAGNOSIS</span><strong>61<span>/100</span></strong></div>
        <div className="bars">
          <div><label>Offer clarity <span>72</span></label><i><b style={{width:"72%"}} /></i></div>
          <div><label>Trust <span>44</span></label><i><b style={{width:"44%"}} /></i></div>
          <div><label>Call to action <span>58</span></label><i><b style={{width:"58%"}} /></i></div>
        </div>
        <div className="finding"><span>01</span><p><b>Visitors cannot see the outcome fast enough.</b><br/>Lead with the customer result, then explain the service.</p></div>
      </div>
    </section>
    <section className="problem">
      <p className="kicker">THE EXPENSIVE PART IS ALREADY DONE</p>
      <h2>You earned the click.<br/><em>Don’t lose it to confusion.</em></h2>
      <div className="grid3">
        <article><span>01</span><h3>Unclear first screen</h3><p>A visitor should understand who you help and why you are different in five seconds.</p></article>
        <article><span>02</span><h3>Quiet trust gaps</h3><p>Missing proof, specifics, and objection handling make good businesses feel risky.</p></article>
        <article><span>03</span><h3>Weak next steps</h3><p>Vague buttons and long forms create friction at the exact moment intent is highest.</p></article>
      </div>
    </section>
    <section className="deliverables" id="deliverables">
      <div><p className="kicker">THE 24-HOUR TEARDOWN</p><h2>A short report built<br/>to be <em>used.</em></h2><p className="bodycopy">Not a generic SEO export or a 40-page deck. Every observation names the problem, the evidence, and the fix.</p></div>
      <ol>
        <li><span>01</span><div><h3>Conversion scorecard</h3><p>Clarity, trust, offer strength, friction, mobile experience, and calls to action.</p></div></li>
        <li><span>02</span><div><h3>Your top five leaks</h3><p>Ranked by likely impact and effort, so you know what to fix first.</p></div></li>
        <li><span>03</span><div><h3>Rewritten hero section</h3><p>Three headline directions and a complete first-screen rewrite.</p></div></li>
        <li><span>04</span><div><h3>Action-ready recommendations</h3><p>Specific copy and layout changes your team can ship immediately.</p></div></li>
      </ol>
    </section>
    <section className="offer">
      <div><p className="kicker">FOUNDING CLIENT OFFER</p><h2>Find the leaks for less than<br/>the cost of one lost lead.</h2><p>First 5 UAE businesses only. One public website, reviewed end to end.</p></div>
      <div className="price"><p><s>AED 749</s> <small>FOUNDING PRICE</small></p><strong>AED 349</strong><span>one time · delivered in 24 hours</span><a className="primary" href={contact}>Start with the free mini-audit →</a><ul><li>5+ specific, fixable issues</li><li>Hero copy rewritten</li><li>One follow-up round by email</li><li>If we find fewer than 3 real issues, you pay nothing</li></ul></div>
    </section>
    <section className="final"><p className="kicker">NOT READY TO BUY?</p><h2>Let us find <em>three leaks free.</em></h2><p>Send your URL. You’ll get three specific observations by email — no pitch deck, no meeting, no obligation.</p><a className="primary light" href={contact}>Email my website URL →</a></section>
    <footer><a className="brand" href="#top">Leak<span>Fix</span></a><p>Human-reviewed website conversion teardowns · Dubai, UAE</p><a href="mailto:issadarras0@gmail.com">issadarras0@gmail.com</a></footer>
  </main>;
}
