import { useEffect } from 'react';

// Tally form that collects applications. Paste the form id from its share link
// (tally.so/r/<id>); while empty the page asks applicants to email instead.
const TALLY_FORM_ID = 'NqDPgN';

const LINK = "text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all";

const positions = [
  { title: 'PhD', body: 'PhD positions at MBZUAI, working on world models with our team.' },
  { title: 'Postdoc', body: 'Postdoctoral positions at MBZUAI, working on world models with our team.' },
  { title: 'Research Intern', body: 'Research internships with our team at IFM, MBZUAI.' },
];

export default function JoinPage() {
  useEffect(() => {
    if (!TALLY_FORM_ID) return;
    const s = document.createElement('script');
    s.src = 'https://tally.so/widgets/embed.js';
    s.async = true;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <section className="space-y-4">
        <h1>Join us</h1>
        <p>
          We build <strong>real-time, interactive world models</strong> at{" "}
          <a href="https://ifm.ai/" target="_blank" rel="noopener noreferrer" className={LINK}>IFM</a>, MBZUAI,
          based in <strong>Abu Dhabi, UAE</strong>, working on long-horizon generation, long-term memory and efficient
          inference. We work closely with{" "}
          <a href="https://www.cs.cmu.edu/~epxing/" target="_blank" rel="noopener noreferrer" className={LINK}>Prof. Eric Xing</a>.
        </p>
        <div className="join-roles">
          {positions.map(p => (
            <div key={p.title} className="join-role">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
        <p className="join-note">
          Looking for a full-time role? See our openings for{" "}
          <a href="https://jobs.lever.co/ifm-us/7ac9e2ae-7ad2-439f-ba8f-7934a00af1ad" target="_blank" rel="noopener noreferrer" className={LINK}>Machine Learning Engineers</a> and{" "}
          <a href="https://jobs.lever.co/ifm-us/2c2f5a7a-79f6-40ff-9274-638a047602c5" target="_blank" rel="noopener noreferrer" className={LINK}>Research Scientists</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Apply</h2>
        {TALLY_FORM_ID ? (
          <iframe
            src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            width="100%"
            height="1400"
            frameBorder={0}
            title="Application form"
            className="join-form"
          />
        ) : (
          <p>
            The application form is coming soon. In the meantime, please{" "}
            <a href="mailto:guangyiliu.xx@gmail.com" className={LINK}>email me</a> your CV, the position you are
            interested in, your research interests and your expected start date.
          </p>
        )}
      </section>
    </div>
  );
}
