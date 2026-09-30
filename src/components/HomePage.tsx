import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
import { publications } from '../data/publications';
import PubMedia from './PubMedia';

const ME = 'Guangyi Liu';
const NEWS_VISIBLE = 5;

// Bold my own name in an author list.
function Authors({ text }: { text: string }) {
  const parts = text.split(ME);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <strong className="pub-me">{ME}</strong>}
        </Fragment>
      ))}
    </>
  );
}

export default function HomePage() {
  const [showAllNews, setShowAllNews] = useState(false);

  const socialLinks = [
    { icon: Mail, label: "Email", url: "mailto:guangyiliu.xx@gmail.com" },
    { icon: Github, label: "GitHub", url: "https://github.com/guangyliu" },
    { icon: Twitter, label: "X (Twitter)", url: "https://x.com/guangyi_l" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/guangyi-liu/" },
  ];

  const news = [
    {
      date: "Sep 2026",
      content: (
        <>
          🎉 <a href="https://tingtingliao.github.io/mimix/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all"><em>Character Mixing for Video Generation</em></a> is accepted to <strong>NeurIPS 2026</strong>!
        </>
      )
    },
    {
      date: "Jul 2026",
      content: "Visiting IFM US Lab in Sunnyvale."
    },
    {
      date: "Apr 2026",
      content: (
        <>
          🎉 <a href="https://actioneqa.github.io/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all"><em>ActionEQA: Action Interface for Embodied Question Answering</em></a> is accepted to <strong>TMLR</strong>!
        </>
      )
    },
    {
      date: "Mar 2026",
      content: (
        <>
          Released <a href="https://arxiv.org/abs/2603.25887" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all"><em>World Reasoning Arena</em></a>, a benchmark for evaluating world models on simulation, forecasting, and planning.
        </>
      )
    },
    {
      date: "Nov 2025",
      content: (
        <>
          🚀 Excited to release <strong><em>PAN</em></strong>, a world model for general, interactable, and long-horizon world simulation! Check out interesting demos on the{" "}
          <a href="https://ifm.mbzuai.ac.ae/pan/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">project page</a> and 📰{" "}
          <a href="https://www.forbes.com/sites/patrickmoorhead/2025/11/13/the-pan-world-model-from-mbzuai-aims-to-elevate-ai-simulation/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">Forbes coverage</a>!
        </>
      )
    },
    {
      date: "Oct 2025",
      content: (
        <>
          Released <a href="https://arxiv.org/abs/2510.05093" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all"><em>Character Mixing for Video Generation</em></a>! Check out the{" "}
          <a href="https://tingtingliao.github.io/mimix/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">project page</a>.
        </>
      )
    },
    {
      date: "Aug 2025",
      content: "Visiting IFM US Lab in Sunnyvale."
    },
    {
      date: "Jun 2025",
      content: (
        <>
          Start a new journey at <a href="https://ifm.ai/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">IFM</a> (Institute of Foundation Models), MBZUAI!
        </>
      )
    },
    {
      date: "May 2025",
      content: (
        <>
          <strong><em>Voila</em></strong> is released! a <em>voice-language foundation model for real-time autonomous interaction</em>. Check out{" "}
          <a href="https://voila.maitrix.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">here</a>!
        </>
      )
    },
    {
      date: "May 2024",
      content: (
        <>
          <strong><em>Pandora</em></strong>, a <em>general world model</em>, is released, check out:{" "}
          <a href="https://world-model.ai/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">world-model.ai</a>!
        </>
      )
    }
  ];

  useEffect(() => {
    // Load ClusterMaps script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'clustrmaps';
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=bababa&w=263&t=n&d=qLl9Xkz7YNn9_GFncvBL9hUzVV-_U6mjmKahtDrBhaw&co=1e2327&cmo=bc6161&cmn=358974&ct=ffffff';

    const container = document.getElementById('clustrmaps-container');
    if (container && !document.getElementById('clustrmaps')) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('clustrmaps');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Bio Section */}
      <section className="bio">
        <div className="bio-text space-y-4">
        <h1>Guangyi Liu</h1>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5 text-foreground" />
              </a>
            );
          })}
          <a
            href="https://scholar.google.com/citations?user=CrKPqTMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Google Scholar"
          >
            <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269z"/>
              <circle cx="12" cy="17" r="7"/>
            </svg>
          </a>
        </div>
        <div className="space-y-3 text-foreground">
          <p>
            I'm currently a Senior Research Scientist at{" "}
            <a href="https://ifm.ai/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">IFM</a>{" "}
            (Institute of Foundation Models), MBZUAI, where I build <strong>real-time, interactive world models</strong> — pushing on <strong>long-horizon generation</strong>, <strong>long-term memory</strong>, and <strong>efficient inference</strong> — with the goal of helping models understand how the world works and using that understanding to empower <strong>embodied agents</strong>.
          </p>
          <p className="hiring">
            🚀 <strong>We're hiring!</strong> Our team is looking for{" "}
            <a href="https://jobs.lever.co/ifm-us/7ac9e2ae-7ad2-439f-ba8f-7934a00af1ad" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">Machine Learning Engineers</a> and{" "}
            <a href="https://jobs.lever.co/ifm-us/2c2f5a7a-79f6-40ff-9274-638a047602c5" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">Research Scientists</a> working on world modeling.
            Strong interns are also very welcome — feel free to{" "}
            <a href="mailto:guangyiliu.xx@gmail.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">email me</a>.
          </p>
        </div>
        </div>
        <img className="bio-avatar" src="/avatar.jpg" alt="Guangyi Liu" />
      </section>

      {/* News Section */}
      <section className="space-y-4">
        <h2>News</h2>
        <div className="space-y-3">
          {(showAllNews ? news : news.slice(0, NEWS_VISIBLE)).map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="text-muted-foreground whitespace-nowrap min-w-[120px]">{item.date}</span>
              <p className="text-foreground">{item.content}</p>
            </div>
          ))}
        </div>
        {news.length > NEWS_VISIBLE && (
          <button className="news-toggle" onClick={() => setShowAllNews(!showAllNews)}>
            {showAllNews ? 'Show less' : `Show all (${news.length})`}
          </button>
        )}
      </section>

      {/* Publications */}
      <section className="space-y-4">
        <h2>Publications</h2>
        <p className="text-muted-foreground">* denotes equal contribution</p>
        <div className="pub-list">
          {publications.map((pub) => (
            <div key={pub.title} className="pub">
              <PubMedia image={pub.image} video={pub.video} alt={pub.title} />
              <div className="pub-body">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors"><Authors text={pub.authors} /></p>
                <p className="pub-venue">{pub.venue}</p>
                <div className="pub-links">
                  {pub.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                {pub.tldr && <p className="pub-tldr">{pub.tldr}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Misc */}
      <section className="space-y-4">
        <h2>Misc</h2>
        <p className="text-foreground">
          Apart from my academic pursuits, I have a passion for Powerlifting. To give you a glimpse of my milestones: I've achieved a Squat of 196kg, Bench Press of 120kg, and Deadlift of 204kg, all at a body weight of 80kg. I'm also open for discussing Powerlifting or working-out stuff.
        </p>
      </section>

      {/* Visitor Statistics */}
      <section className="space-y-4">
        <h2>Visitor Statistics</h2>
        <div id="clustrmaps-container" className="flex justify-center"></div>
      </section>
    </div>
  );
}