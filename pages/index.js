import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const [pricingOption, setPricingOption] = useState('complete');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFormStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    setSending(false);
  };

  return (
    <>
      <Head>
        <title>Night &amp; Day Medical — Physician-Directed Wellness</title>
        <meta name="description" content="Comprehensive physician-directed wellness. 100+ biomarkers. Dedicated clinical advisors. Hormone health, peptide therapy, weight management, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <nav>
        <div className="nav-logo">Night <span>&amp;</span> Day Medical</div>
        <button className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#problem" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="https://ndm-intake.vercel.app" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Start Your Assessment</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge fd1">Physician-Directed &middot; Data-Driven &middot; Human-Led</div>
          <h1 className="fd2">Health Optimization, Built Around You<br/><em>The Night &amp; Day Difference</em></h1>
          <p className="hero-sub fd3">We analyze 100+ biomarkers, assign you a dedicated clinical advisor and a physician who actually takes the time to understand your body. No subscriptions. No rushed visits. No cookie-cutter protocols.</p>
          <div className="hero-actions fd4">
            <a href="https://ndm-intake.vercel.app" className="btn-primary">Take the Assessment &rarr;</a>
            <a href="#contact" className="btn-outline">Talk to Our Team</a>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {['Hormone Health','Peptide Therapy','Weight Management','Age Management','Sexual Wellness','Immune Support','Clinical Supplements','Comprehensive Bloodwork',
            'Hormone Health','Peptide Therapy','Weight Management','Age Management','Sexual Wellness','Immune Support','Clinical Supplements','Comprehensive Bloodwork'
          ].map((item, i) => (
            <div className="marquee-item" key={i}>{item}</div>
          ))}
        </div>
      </div>

      <section className="problem" id="problem">
        <div className="container">
          <div className="section-label fd1">The Problem</div>
          <div className="section-title fd2">Your Doctor Isn&rsquo;t<br/>Looking Deep Enough</div>
          <div className="problem-grid">
            <div className="problem-stats">
              <div className="problem-stat fd2">
                <div className="stat-number">8</div>
                <div className="stat-text"><strong>Minutes.</strong> That&rsquo;s the average primary care visit. Not enough time to understand what&rsquo;s actually happening inside your body.</div>
              </div>
              <div className="problem-stat fd3">
                <div className="stat-number">20</div>
                <div className="stat-text"><strong>Markers tested</strong> in a standard panel. We test over 100 &mdash; hormones, metabolic indicators, inflammatory markers, and more.</div>
              </div>
              <div className="problem-stat fd4">
                <div className="stat-number">&ldquo;</div>
                <div className="stat-text"><strong>&ldquo;Your labs look normal.&rdquo;</strong> Reference ranges are built from the general population &mdash; including people who are sick. Falling in the bottom 10% still reads as &ldquo;normal.&rdquo; But normal isn&rsquo;t optimal, and it isn&rsquo;t where you should be.</div>
              </div>
            </div>
            <div className="problem-narrative fd3">
              <p>You&rsquo;ve been to your primary care doctor. Maybe more than once. They ran a basic panel, told you everything looked fine, and sent you home with advice to <em>sleep more and drink water.</em></p>
              <p>But you know your body. Something shifted. The energy you had is gone. Your focus isn&rsquo;t what it was. Recovery takes twice as long. You don&rsquo;t feel like yourself &mdash; and nobody can tell you why.</p>
              <p>That&rsquo;s because most providers aren&rsquo;t running the right tests, spending enough time, or looking at the complete picture. <em>We do.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-label">What We Evaluate &amp; Treat</div>
          <div className="section-title">What We Test.<br/>What We Treat.</div>
          <div className="section-subtitle">Every recommendation starts with your labs. Your physician evaluates the full picture &mdash; bloodwork, medical history, symptoms, and goals &mdash; before recommending anything.</div>
          <div className="services-grid">
            <div className="service-card"><span className="service-icon">&#9889;</span><div className="service-name">Hormone Health</div><div className="service-desc">When your labs reveal hormonal imbalances in testosterone, estrogen, thyroid, or metabolic hormones, your physician designs a targeted protocol &mdash; for men and women &mdash; with regular monitoring to track your progress.</div></div>
            <div className="service-card"><span className="service-icon">&#129516;</span><div className="service-name">Peptide Therapy</div><div className="service-desc">Physician-selected peptide protocols for recovery, immune function, and cellular repair. Every prescription is based on your labs and clinical history &mdash; not trends.</div></div>
            <div className="service-card"><span className="service-icon">&#9878;&#65039;</span><div className="service-name">Weight Management</div><div className="service-desc">Medically supervised weight loss using FDA-approved medications alongside metabolic evaluation. Lab-informed, physician-monitored throughout &mdash; not a fad diet or subscription box.</div></div>
            <div className="service-card"><span className="service-icon">&#10024;</span><div className="service-name">Age Management</div><div className="service-desc">Targeted protocols to address the markers that decline with age &mdash; hormones, inflammation, metabolic function, and cellular health. Every recommendation is data-driven, not speculative.</div></div>
            <div className="service-card"><span className="service-icon">&#10084;&#65039;</span><div className="service-name">Sexual Wellness</div><div className="service-desc">Confidential evaluation and treatment of concerns related to libido, function, and hormonal contributors &mdash; for men and women. Integrated into your broader health plan, not treated as an isolated issue.</div></div>
            <div className="service-card"><span className="service-icon">&#128138;</span><div className="service-name">Clinical Supplements</div><div className="service-desc">Practitioner-grade supplement recommendations based on identified deficiencies in your bloodwork. Selected by your physician from clinical-quality product lines &mdash; not random store-bought vitamins.</div></div>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="container" style={{textAlign:'center'}}>
          <div className="section-label">How It Works</div>
          <div className="section-title">Four Steps. No Guesswork.</div>
          <div className="section-subtitle" style={{margin:'0 auto'}}>A structured medical process that starts with real data and ends with a plan designed around your body &mdash; not a population average.</div>
          <div className="process-steps">
            <div className="process-step"><div className="step-num">1</div><div className="step-title">Assessment</div><div className="step-desc">Complete a confidential health questionnaire &mdash; about 5 minutes. Tell us what you&rsquo;re experiencing and where you want to be.</div></div>
            <div className="process-step"><div className="step-num">2</div><div className="step-title">Bloodwork</div><div className="step-desc">Visit any Labcorp location nationwide. Our physician-ordered panel evaluates 100+ biomarkers &mdash; far beyond what a standard physical covers.</div></div>
            <div className="process-step"><div className="step-num">3</div><div className="step-title">Consultation</div><div className="step-desc">Your physician reviews your results in detail, explains what your numbers mean, and discusses treatment options. Your clinical advisor handles scheduling and follow-up.</div></div>
            <div className="process-step"><div className="step-num">4</div><div className="step-title">Your Plan</div><div className="step-desc">If treatment is appropriate, prescriptions ship directly to your door. Your clinical advisor checks in regularly and remains your single point of contact.</div></div>
          </div>
        </div>
      </section>

      <section className="different">
        <div className="container">
          <div className="section-label">What Makes Us Different</div>
          <div className="section-title">Not a Subscription.<br/>Not an Algorithm.</div>
          <div className="diff-grid">
            <div className="diff-card-full">
              <div className="diff-icon-lg">&#129309;</div>
              <div><h3>Your Dedicated Clinical Advisor</h3><p>Every patient is assigned a clinical advisor &mdash; your single point of contact from day one. They coordinate your labs, schedule your consultations, answer your questions between visits, and make sure nothing falls through the cracks. Think of them as the person who actually picks up the phone.</p></div>
            </div>
            <div className="diff-card"><div className="diff-icon">&#128300;</div><h3>Testing That Actually Tells You Something</h3><p>We evaluate over 100 biomarkers &mdash; hormones, metabolic health, inflammation, nutrient levels, and more. Most standard panels test a fraction of this. You can&rsquo;t fix what you haven&rsquo;t measured.</p></div>
            <div className="diff-card"><div className="diff-icon">&#128105;&zwj;&#9877;&#65039;</div><h3>A Physician Who Knows You</h3><p>Not a chatbot. Not a rotating roster of providers. One physician who reviews your labs and designs your plan &mdash; supported by a clinical advisor who coordinates your care and is available when you need them.</p></div>
            <div className="diff-card"><div className="diff-icon">&#127919;</div><h3>Everything Working Together</h3><p>Hormones, peptides, supplements, weight management &mdash; evaluated and addressed as one coordinated plan. Not separate providers writing separate prescriptions with no coordination between them.</p></div>
            <div className="diff-card"><div className="diff-icon">&#128230;</div><h3>Delivered. Monitored. Adjusted.</h3><p>If treatment is prescribed, everything ships directly from our pharmacy. Your clinical advisor checks in regularly, coordinates adjustments with your physician, and is your single point of contact.</p></div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container" style={{textAlign:'center'}}>
          <div className="section-label">Get Started</div>
          <div className="section-title">Start With the Evaluation That Fits</div>
          <div className="section-subtitle" style={{margin:'0 auto 40px'}}>Choose the evaluation that fits where you are. Both include access to your dedicated clinical advisor and physician review.</div>
          <div className="pricing-toggle">
            <button className={`toggle-btn ${pricingOption === 'initial' ? 'active' : ''}`} onClick={() => setPricingOption('initial')}>Initial Consultation</button>
            <button className={`toggle-btn ${pricingOption === 'complete' ? 'active' : ''}`} onClick={() => setPricingOption('complete')}>Complete Evaluation</button>
          </div>
          <div className="pricing-card">
            {pricingOption === 'initial' ? (
              <>
                <div className="price-amount">$99</div>
                <div className="price-name">Initial Consultation</div>
                <div className="price-desc">A focused conversation with your clinical advisor and physician to discuss your symptoms, health history, and goals &mdash; and determine next steps.</div>
                <ul className="price-includes"><li>Dedicated clinical advisor assigned</li><li>Physician review of your health history</li><li>Personalized recommendations for evaluation</li><li>No obligation to continue</li></ul>
                <a href="https://ndm-intake.vercel.app" className="btn-primary" style={{width:'100%',justifyContent:'center'}}>Book Initial Consultation &rarr;</a>
              </>
            ) : (
              <>
                <div className="price-amount">$299</div>
                <div className="price-name">Complete Wellness Evaluation</div>
                <div className="price-desc">Our full diagnostic workup &mdash; comprehensive bloodwork, physician consultation, and a complete clinical picture of where your health stands.</div>
                <ul className="price-includes"><li>Dedicated clinical advisor from day one</li><li>100+ biomarker lab panel (hormones, metabolic, thyroid, cardiac, inflammatory)</li><li>Full physician consultation with detailed results review</li><li>Personalized treatment recommendations if clinically appropriate</li></ul>
                <div className="price-popular">Most Popular</div>
                <a href="https://ndm-intake.vercel.app" className="btn-primary" style={{width:'100%',justifyContent:'center'}}>Book Complete Evaluation &rarr;</a>
              </>
            )}
            <p className="price-note">This covers your initial evaluation. If treatment is recommended, your physician will walk you through options and costs during your consultation &mdash; no surprises.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-content">
          <div className="section-label">Ready?</div>
          <h2>See What a <em>Night &amp; Day</em><br/>Difference Looks Like</h2>
          <p className="cta-sub">It starts with a 5-minute confidential assessment. Your clinical advisor takes it from there.</p>
          <div className="contact-grid">
            <div className="contact-call">
              <h3>Call or Text Us</h3>
              <p>Speak directly with our team. No phone trees. No hold music.</p>
              <a href="tel:5618020631" className="btn-gold" style={{width:'100%',justifyContent:'center'}}>&#128222; (561) 802-0631</a>
              <a href="mailto:contact@nightdaymed.net" className="contact-email-link">contact@nightdaymed.net</a>
              <div className="contact-address" style={{marginTop:16,fontSize:13,color:'var(--text-on-dark-dim)',lineHeight:1.6}}>
                <strong style={{color:'var(--text-on-dark)',fontSize:12,letterSpacing:'.06em',textTransform:'uppercase'}}>NYC Office</strong><br/>
                14 E 60th St<br/>New York, NY 10022
              </div>
            </div>
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              <p>We&rsquo;ll get back to you within 24 hours.</p>
              {formStatus === 'success' ? (
                <div className="form-success"><div style={{fontSize:32,marginBottom:12}}>&#10003;</div><strong>Message sent.</strong><br/>Your clinical advisor will be in touch shortly.</div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <input type="tel" placeholder="Phone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  <textarea placeholder="Brief message (optional)" rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center'}} disabled={sending}>{sending ? 'Sending...' : 'Send Message \u2192'}</button>
                  {formStatus === 'error' && <p className="form-error">Something went wrong. Please call us directly at (561) 802-0631.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand"><div className="nav-logo" style={{fontSize:22}}>Night <span>&amp;</span> Day Medical</div><p>Physician-directed evaluation and treatment for people who know something isn&rsquo;t right &mdash; and want real answers.</p></div>
          <div className="footer-col"><h4>Services</h4><a href="#services">Hormone Health</a><a href="#services">Peptide Therapy</a><a href="#services">Weight Management</a><a href="#services">Age Management</a><a href="#services">Sexual Wellness</a><a href="#services">Clinical Supplements</a></div>
          <div className="footer-col"><h4>Get Started</h4><a href="https://ndm-intake.vercel.app">Patient Assessment</a><a href="#process">How It Works</a><a href="#pricing">Pricing</a><a href="tel:5618020631">Call (561) 802-0631</a></div>
          <div className="footer-col"><h4>Contact</h4><a href="mailto:contact@nightdaymed.net">contact@nightdaymed.net</a><a href="tel:5618020631">(561) 802-0631</a><span style={{fontSize:12,color:'var(--text-on-dark-dim)',lineHeight:1.5,marginTop:8,display:'block'}}>14 E 60th St, New York, NY 10022</span></div>
        </div>
        <div className="footer-disclaimer">This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. A consultation does not guarantee a prescription &mdash; treatment is only prescribed when your physician determines it is clinically appropriate based on your individual lab results and medical evaluation. All treatments carry potential risks and side effects, which are discussed during your physician consultation. Not all patients are candidates for all therapies. Individual experiences vary. Night &amp; Day Medical does not guarantee specific health outcomes. Your information is confidential and handled in accordance with applicable privacy laws. Night &amp; Day Medical is not a substitute for emergency medical services &mdash; if you are experiencing a medical emergency, call 911.</div>
        <div className="footer-bottom"><span>&copy; 2026 Night &amp; Day Medical. All rights reserved.</span><span>Physician-directed care &middot; Nationwide</span></div>
      </footer>

      <style jsx global>{`
:root {
  --cream:#F7F3EF;--cream-dark:#EDE7DF;--cream-deep:#E3DCD4;
  --navy:#0F1A2E;--navy-light:#162240;--navy-mid:#1C2A4A;
  --gold:#C9A96E;--gold-bright:#D4B87E;--gold-glow:rgba(201,169,110,0.12);
  --sage:#5B8A72;--sage-bright:#6FA088;--sage-glow:rgba(91,138,114,0.08);
  --mauve:#7D5A5A;--mauve-bright:#8E6B6B;--mauve-glow:rgba(125,90,90,0.10);
  --text-dark:#2D2D2D;--text-mid:#5C544C;--text-light:#8C8279;
  --text-on-dark:#F2EDE8;--text-on-dark-dim:#9AA3B4;
  --border-light:rgba(0,0,0,0.06);--border-light-hover:rgba(0,0,0,0.12);
  --border-dark:rgba(255,255,255,0.08);--border-dark-hover:rgba(255,255,255,0.15);
  --font-display:'Playfair Display',Georgia,serif;--font-body:'DM Sans',system-ui,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
body{font-family:var(--font-body);background:var(--cream);color:var(--text-dark);overflow-x:hidden;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:var(--cream)}::-webkit-scrollbar-thumb{background:var(--mauve);border-radius:3px}
@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse-glow{0%,100%{box-shadow:0 0 12px var(--sage-glow)}50%{box-shadow:0 0 24px rgba(91,138,114,0.15)}}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.fd1{animation:fadeUp .7s ease .1s both}.fd2{animation:fadeUp .7s ease .2s both}.fd3{animation:fadeUp .7s ease .3s both}.fd4{animation:fadeUp .7s ease .4s both}

nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(247,243,239,0.92);backdrop-filter:blur(20px) saturate(1.3);border-bottom:1px solid var(--border-light);padding:0 48px;height:72px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{font-family:var(--font-display);font-size:20px;font-weight:700;color:var(--navy)}.nav-logo span{color:var(--sage)}
.nav-links{display:flex;gap:32px;align-items:center}.nav-links a{font-size:13px;font-weight:500;color:var(--text-mid);text-decoration:none;letter-spacing:.06em;text-transform:uppercase;transition:color .3s}.nav-links a:hover{color:var(--navy)}
.nav-cta{background:var(--mauve)!important;color:#fff!important;padding:10px 24px!important;border-radius:6px;font-weight:700!important;transition:all .3s!important}.nav-cta:hover{background:var(--mauve-bright)!important;transform:translateY(-1px)}

.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 48px 80px;position:relative;overflow:hidden;background:var(--cream)}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 0%,rgba(15,26,46,0.03) 0%,transparent 60%),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(91,138,114,0.04) 0%,transparent 60%),radial-gradient(ellipse 30% 30% at 80% 70%,rgba(201,169,110,0.03) 0%,transparent 60%)}
.hero-content{position:relative;z-index:1;max-width:880px}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 20px;border:1px solid var(--border-light-hover);border-radius:100px;font-size:12px;font-weight:600;color:var(--text-mid);letter-spacing:.1em;text-transform:uppercase;margin-bottom:32px}
.hero-badge::before{content:'';width:6px;height:6px;background:var(--sage);border-radius:50%;animation:pulse-glow 2s infinite}
.hero h1{font-family:var(--font-display);font-size:clamp(40px,5.5vw,72px);font-weight:700;line-height:1.08;letter-spacing:-.02em;margin-bottom:28px;color:var(--navy)}
.hero h1 em{font-style:italic;color:var(--gold)}
.hero-sub{font-size:18px;line-height:1.75;color:var(--text-mid);max-width:620px;margin:0 auto 44px;font-weight:300}
.hero-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}

.btn-primary{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;background:var(--mauve);color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border:none;border-radius:6px;cursor:pointer;text-decoration:none;transition:all .3s;font-family:var(--font-body)}
.btn-primary:hover{background:var(--mauve-bright);transform:translateY(-2px);box-shadow:0 8px 30px rgba(125,90,90,0.2)}
.btn-primary:disabled{opacity:.6;cursor:not-allowed;transform:none}
.btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;background:transparent;color:var(--navy);font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;border:1px solid var(--border-light-hover);border-radius:6px;cursor:pointer;text-decoration:none;transition:all .3s}
.btn-outline:hover{border-color:var(--mauve);color:var(--mauve)}
.btn-gold{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;background:var(--gold);color:var(--navy);font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border:none;border-radius:6px;cursor:pointer;text-decoration:none;transition:all .3s;font-family:var(--font-body)}
.btn-gold:hover{background:var(--gold-bright);transform:translateY(-2px);box-shadow:0 8px 30px rgba(201,169,110,0.25)}

.marquee-wrap{overflow:hidden;background:var(--navy);border-top:1px solid var(--border-dark);border-bottom:1px solid var(--border-dark);padding:18px 0}
.marquee-track{display:flex;gap:48px;animation:marquee 35s linear infinite;width:max-content}
.marquee-item{font-size:13px;font-weight:600;color:var(--text-on-dark-dim);letter-spacing:.1em;text-transform:uppercase;white-space:nowrap;display:flex;align-items:center;gap:12px}
.marquee-item::before{content:'◆';color:var(--gold);font-size:8px}

section{padding:120px 48px}.container{max-width:1140px;margin:0 auto}
.section-label{font-size:12px;font-weight:700;color:var(--gold);letter-spacing:.15em;text-transform:uppercase;margin-bottom:16px}
.section-title{font-family:var(--font-display);font-size:clamp(30px,3.8vw,48px);font-weight:700;line-height:1.12;letter-spacing:-.02em;margin-bottom:20px}
.section-subtitle{font-size:17px;line-height:1.7;color:var(--text-mid);max-width:580px;font-weight:300}

.problem{background:var(--navy);color:var(--text-on-dark);position:relative;overflow:hidden}
.problem .section-label{color:var(--gold)}.problem .section-title{color:var(--text-on-dark)}
.problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;margin-top:48px}
.problem-stats{display:flex;flex-direction:column;gap:32px}
.problem-stat{background:rgba(255,255,255,0.04);border:1px solid var(--border-dark);border-radius:12px;padding:28px 32px;display:flex;align-items:center;gap:24px;transition:all .4s}
.problem-stat:hover{border-color:var(--border-dark-hover);transform:translateX(4px)}
.stat-number{font-family:var(--font-display);font-size:42px;font-weight:700;color:var(--gold);line-height:1;flex-shrink:0;min-width:80px}
.stat-text{font-size:15px;line-height:1.6;color:var(--text-on-dark-dim);font-weight:300}.stat-text strong{color:var(--text-on-dark);font-weight:600}
.problem-narrative{font-size:20px;line-height:1.8;color:var(--text-on-dark-dim);font-weight:300}
.problem-narrative em{font-style:italic;color:var(--gold-bright);font-weight:400}.problem-narrative p{margin-bottom:24px}

.services{background:var(--cream)}.services .section-title{color:var(--navy)}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-top:56px;border-radius:16px;overflow:hidden}
.service-card{background:white;padding:44px 32px;position:relative;overflow:hidden;transition:all .4s;cursor:default}
.service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);opacity:0;transition:opacity .4s}
.service-card:hover{background:var(--cream-dark)}.service-card:hover::before{opacity:1}
.service-icon{font-size:28px;margin-bottom:18px;display:block}
.service-name{font-family:var(--font-display);font-size:20px;font-weight:600;color:var(--navy);margin-bottom:12px}
.service-desc{font-size:14px;line-height:1.7;color:var(--text-mid);font-weight:300}

.process{background:var(--navy);color:var(--text-on-dark)}
.process .section-label{color:var(--gold)}.process .section-title{color:var(--text-on-dark)}.process .section-subtitle{color:var(--text-on-dark-dim)}
.process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:56px;position:relative}
.process-steps::before{content:'';position:absolute;top:40px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,var(--border-dark-hover),var(--border-dark-hover),transparent)}
.process-step{text-align:center;padding:0 18px;position:relative}
.step-num{width:80px;height:80px;border-radius:50%;background:rgba(201,169,110,0.08);border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--gold);position:relative;z-index:1}
.step-title{font-family:var(--font-display);font-size:18px;font-weight:600;color:var(--text-on-dark);margin-bottom:10px}
.step-desc{font-size:13px;line-height:1.7;color:var(--text-on-dark-dim);font-weight:300}

.different{background:var(--cream-dark)}.different .section-title{color:var(--navy)}
.diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:56px}
.diff-card-full{grid-column:1/-1;background:white;border:1px solid rgba(91,138,114,0.15);border-radius:16px;padding:44px 36px;transition:all .4s;display:grid;grid-template-columns:auto 1fr;gap:28px;align-items:center}
.diff-card-full:hover{border-color:var(--sage);transform:translateY(-3px);box-shadow:0 12px 40px rgba(91,138,114,0.08)}
.diff-icon-lg{width:56px;height:56px;border-radius:12px;background:var(--sage-glow);display:flex;align-items:center;justify-content:center;font-size:26px}
.diff-card-full h3{font-family:var(--font-display);font-size:22px;font-weight:600;color:var(--navy);margin-bottom:10px}
.diff-card-full p{font-size:15px;line-height:1.7;color:var(--text-mid);font-weight:300}
.diff-card{background:white;border:1px solid var(--border-light);border-radius:16px;padding:40px 34px;transition:all .4s}
.diff-card:hover{border-color:var(--border-light-hover);transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,0.04)}
.diff-icon{width:42px;height:42px;border-radius:10px;background:var(--gold-glow);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:16px}
.diff-card h3{font-family:var(--font-display);font-size:19px;font-weight:600;color:var(--navy);margin-bottom:10px}
.diff-card p{font-size:14px;line-height:1.7;color:var(--text-mid);font-weight:300}

.pricing{background:var(--cream)}.pricing .section-title{color:var(--navy)}
.pricing-toggle{display:inline-flex;background:white;border:1px solid var(--border-light);border-radius:8px;padding:4px;margin-bottom:32px}
.toggle-btn{padding:12px 28px;font-size:14px;font-weight:600;font-family:var(--font-body);color:var(--text-mid);background:transparent;border:none;border-radius:6px;cursor:pointer;transition:all .3s;letter-spacing:.02em}
.toggle-btn.active{background:var(--mauve);color:#fff}
.pricing-card{max-width:520px;margin:0 auto;background:white;border:1px solid var(--border-light-hover);border-radius:16px;padding:44px 36px;text-align:left;position:relative;box-shadow:0 8px 40px rgba(0,0,0,0.04)}
.price-amount{font-family:var(--font-display);font-size:56px;font-weight:700;color:var(--navy);line-height:1;margin-bottom:8px}
.price-name{font-family:var(--font-display);font-size:22px;font-weight:600;color:var(--navy);margin-bottom:12px}
.price-desc{font-size:15px;line-height:1.7;color:var(--text-mid);font-weight:300;margin-bottom:24px}
.price-includes{list-style:none;padding:0;margin-bottom:28px}.price-includes li{font-size:14px;color:var(--text-mid);padding:6px 0;display:flex;align-items:center;gap:10px}.price-includes li::before{content:'✓';color:var(--sage);font-weight:700;font-size:14px}
.price-popular{position:absolute;top:16px;right:16px;background:var(--gold);color:var(--navy);font-size:11px;font-weight:700;padding:5px 12px;border-radius:4px;letter-spacing:.06em;text-transform:uppercase}
.price-note{font-size:12px;color:var(--text-light);margin-top:20px;line-height:1.6}

.cta-section{background:var(--navy);color:var(--text-on-dark);text-align:center;position:relative;overflow:hidden}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 60% at 50% 30%,rgba(201,169,110,0.05) 0%,transparent 70%)}
.cta-content{position:relative;z-index:1}
.cta-section .section-label{color:var(--gold)}
.cta-section h2{font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:700;line-height:1.1;margin-bottom:16px;color:var(--text-on-dark)}
.cta-section h2 em{font-style:italic;color:var(--gold)}
.cta-sub{font-size:17px;color:var(--text-on-dark-dim);margin-bottom:40px;font-weight:300;max-width:560px;margin-left:auto;margin-right:auto}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;max-width:800px;margin:0 auto;text-align:left}
.contact-call,.contact-form-wrap{background:rgba(255,255,255,0.04);border:1px solid var(--border-dark);border-radius:16px;padding:36px}
.contact-call h3,.contact-form-wrap h3{font-family:var(--font-display);font-size:20px;font-weight:600;color:var(--text-on-dark);margin-bottom:8px}
.contact-call p,.contact-form-wrap p{font-size:14px;color:var(--text-on-dark-dim);margin-bottom:20px;font-weight:300}
.contact-email-link{display:block;text-align:center;margin-top:16px;color:var(--gold);text-decoration:none;font-size:14px;font-weight:500}.contact-email-link:hover{color:var(--gold-bright)}
.contact-form{display:flex;flex-direction:column;gap:12px}
.contact-form input,.contact-form textarea{width:100%;padding:14px 16px;background:rgba(255,255,255,0.06);border:1px solid var(--border-dark);border-radius:8px;color:var(--text-on-dark);font-size:14px;font-family:var(--font-body);outline:none;transition:border-color .3s}
.contact-form input:focus,.contact-form textarea:focus{border-color:var(--gold)}
.contact-form input::placeholder,.contact-form textarea::placeholder{color:var(--text-on-dark-dim)}
.contact-form textarea{resize:vertical;min-height:60px}
.form-success{text-align:center;padding:40px 20px;color:var(--sage-bright);font-size:15px;line-height:1.6}
.form-error{color:#E57373;font-size:13px;margin-top:8px;text-align:center}

footer{padding:60px 48px 32px;border-top:1px solid var(--border-dark);background:var(--navy);color:var(--text-on-dark-dim)}
.footer-inner{max-width:1140px;margin:0 auto;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:48px}
footer .nav-logo{color:var(--text-on-dark)}
.footer-brand p{font-size:13px;color:var(--text-on-dark-dim);line-height:1.6;max-width:280px;margin-top:10px}
.footer-col h4{font-size:11px;font-weight:700;color:var(--text-on-dark);letter-spacing:.1em;text-transform:uppercase;margin-bottom:14px}
.footer-col a{display:block;font-size:14px;color:var(--text-on-dark-dim);text-decoration:none;padding:3px 0;transition:color .3s}.footer-col a:hover{color:var(--gold)}
.footer-disclaimer{max-width:1140px;margin:40px auto 0;padding-top:24px;border-top:1px solid var(--border-dark);font-size:11px;line-height:1.7;color:var(--text-on-dark-dim);opacity:.6}
.footer-bottom{max-width:1140px;margin:16px auto 0;display:flex;justify-content:space-between;font-size:11px;color:var(--text-on-dark-dim);opacity:.5}

@media(max-width:900px){
  nav{padding:0 20px;position:relative}
  .nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:var(--cream);flex-direction:column;align-items:stretch;gap:0;z-index:1001;border-bottom:1px solid var(--border-light);box-shadow:0 8px 30px rgba(0,0,0,0.1)}
  .nav-links.mobile-open{display:flex}
  .nav-links.mobile-open a{font-size:15px;color:var(--navy);padding:16px 24px;border-bottom:1px solid var(--border-light);text-align:left;letter-spacing:.04em}
  .nav-links.mobile-open a:last-child{border-bottom:none}
  .nav-links.mobile-open .nav-cta{background:var(--mauve);color:#fff;margin:12px 20px;padding:14px 24px;border-radius:6px;text-align:center;border-bottom:none}
  .hamburger{display:flex;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:8px;z-index:1002;position:relative}
  .hamburger span{display:block;width:24px;height:2px;background:var(--navy);border-radius:2px;transition:all .3s}
  .hamburger.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
  .hamburger.open span:nth-child(2){opacity:0}
  .hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
  section{padding:60px 20px}
  .hero{padding:100px 20px 40px}
  .hero h1{font-size:30px;line-height:1.15}
  .hero-badge{font-size:10px;letter-spacing:.06em;padding:6px 14px}
  .hero-sub{font-size:15px;line-height:1.7;margin-bottom:32px}
  .hero-actions{flex-direction:column;gap:12px;align-items:stretch}
  .hero-actions a{text-align:center;justify-content:center;padding:14px 24px}
  .problem-grid{grid-template-columns:1fr;gap:36px}
  .problem-stats{gap:16px}
  .problem-stat{padding:20px;gap:16px}
  .stat-number{font-size:32px;min-width:50px}
  .services-grid{grid-template-columns:1fr;gap:16px;border-radius:12px}
  .service-card{padding:28px 20px}
  .process-steps{grid-template-columns:1fr;gap:24px}.process-steps::before{display:none}
  .process-step{padding:28px 20px}
  .step-num{font-size:36px}
  .diff-grid{grid-template-columns:1fr;gap:16px}
  .diff-card-full{grid-template-columns:1fr;text-align:center;padding:32px 20px}
  .diff-card-full .diff-icon-lg{font-size:36px}
  .diff-card{padding:28px 20px}
  .contact-grid{grid-template-columns:1fr;gap:20px}
  .contact-call,.contact-form-wrap{padding:28px 20px}
  .contact-call{text-align:center}
  .section-title{font-size:26px}
  .section-subtitle{font-size:15px}
  .pricing-card{padding:32px 20px}
  .pricing-toggle button{font-size:12px;padding:8px 16px}
  .price-amount{font-size:44px}
  .price-popular{top:12px;right:12px;font-size:10px;padding:4px 10px}
  .cta-section h2{font-size:28px}
  .cta-sub{font-size:14px}
  footer{padding:48px 20px 24px}
  .footer-inner{flex-direction:column;gap:32px}
  .footer-bottom{flex-direction:column;gap:4px;text-align:center}
  .footer-disclaimer{font-size:10px;padding:0 8px}
}
@media(min-width:901px){
  .hamburger{display:none}
}
      `}</style>
    </>
  );
}
