import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

export default function HomePage() {
  const publications = [
    {
      title: "PAN: A World Model for General, Interactable, and Long-Horizon World Simulation",
      authors: "PAN Team",
      venue: "Technical Report",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2511.09057" },
        { label: "website", url: "https://ifm.mbzuai.ac.ae/pan/" },
        { label: "X (Twitter)", url: "https://x.com/guangyi_l/status/1989450577127117179?s=20" },
        { label: "Forbes", url: "https://www.forbes.com/sites/patrickmoorhead/2025/11/13/the-pan-world-model-from-mbzuai-aims-to-elevate-ai-simulation/" }
      ]
    },
    {
      title: "Character Mixing for Video Generation",
      authors: "Tingting Liao, Chongjian Ge, Guangyi Liu, Hao Li, Yi Zhou",
      venue: "Preprint",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2510.05093" },
        { label: "code", url: "https://github.com/TingtingLiao/mimix" },
        { label: "website", url: "https://tingtingliao.github.io/mimix/" }
      ]
    },
    {
      title: "Voila: Voice-Language Foundation Models for Real-Time Autonomous Interaction and Voice Role-Play",
      authors: "Yemin Shi*, Yu Shu*, Siwei Dong*, Guangyi Liu*, Jaward Sesay, Jingwen Li, Zhiting Hu",
      venue: "Technical Report",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2505.02707" },
        { label: "code", url: "https://github.com/maitrix-org/Voila" },
        { label: "website", url: "https://voila.maitrix.org/" },
        { label: "demo", url: "https://hf.co/spaces/maitrix-org/Voila-demo" }
      ]
    },
    {
      title: "Pandora: Towards General World Model with Natural Language Actions and Video States",
      authors: "Jiannan Xiang*, Guangyi Liu*, Yi Gu*, Qiyue Gao, Yuting Ning, Yuheng Zha, Zeyu Feng, Tianhua Tao, Shibo Hao, Yemin Shi, Zhengzhong Liu, Eric P. Xing, Zhiting Hu",
      venue: "Technical Report",
      links: [
        { label: "paper", url: "https://world-model.maitrix.org/assets/pandora.pdf" },
        { label: "code", url: "https://github.com/maitrix-org/Pandora" },
        { label: "website", url: "https://world-model.ai" },
        { label: "gallery", url: "https://world-model.maitrix.org/gallery.html" }
      ]
    },
    {
      title: "Generating, Reconstructing, and Representing Discrete and Continuous Data: Generalized Diffusion with Learnable Encoding-Decoding",
      authors: "Guangyi Liu, Yu Wang, Zeyu Feng, Qiyu Wu, Liping Tang, Yuan Gao, Zhen Li, Shuguang Cui, Julian McAuley, Eric P. Xing, Zichao Yang, Zhiting Hu",
      venue: "ICML 2024",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2402.19009" }
      ]
    },
    {
      title: "Composable Text Controls in Latent Space with ODEs",
      authors: "Guangyi Liu, Zeyu Feng, Yuan Gao, Zichao Yang, Xiaodan Liang, Junwei Bao, Xiaodong He, Shuguang Cui, Zhen Li, Zhiting Hu",
      venue: "EMNLP 2023 (Oral Presentation)",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2208.00638" },
        { label: "code", url: "https://github.com/guangyliu/LatentOps" }
      ]
    },
    {
      title: "Don't Take It Literally: An Edit-Invariant Sequence Loss for Text Generation",
      authors: "Guangyi Liu, Zichao Yang, Tianhua Tao, Xiaodan Liang, Junwei Bao, Zhen Li, Xiaodong He, Shuguang Cui, Zhiting Hu",
      venue: "NAACL 2022 (Oral Presentation)",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2106.15078" },
        { label: "code", url: "https://github.com/guangyliu/EISL" },
        { label: "video", url: "https://aclanthology.org/2022.naacl-main.150.mp4" }
      ]
    },
    {
      title: "Medical-VLBERT: Medical Visual Language BERT for COVID-19 CT Report Generation with Alternate Learning",
      authors: "Guangyi Liu, Yinghong Liao, Fuyu Wang, Bin Zhang, Lu Zhang, Xiaodan Liang, Xiang Wan, Shaolin Li, Zhen Li, Shuixing Zhang, Shuguang Cui",
      venue: "IEEE TNNLS 2021",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2108.05067" },
        { label: "project", url: "https://covid19ct.github.io/" }
      ]
    },
    {
      title: "Learning to Decouple Relations: Few-Shot Relation Classification with Entity-Guided Attention and Confusion-Aware Training",
      authors: "Yingyao Wang, Junwei Bao, Guangyi Liu, Youzheng Wu, Xiaodong He, Bowen Zhou, Tiejun Zhao",
      venue: "COLING 2020",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2010.10894" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Mail, label: "Email", url: "mailto:guangyiliu.xx@gmail.com" },
    { icon: Github, label: "GitHub", url: "https://github.com/guangyliu" },
    { icon: Twitter, label: "X (Twitter)", url: "https://x.com/guangyi_l" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/guangyi-liu/" },
  ];

  const news = [
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
          Start a new journey at <a href="https://ifm.mbzuai.ac.ae/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">IFM</a> (Institute of Foundation Models), MBZUAI!
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
      <section className="space-y-4">
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
            <a href="https://ifm.mbzuai.ac.ae/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">IFM</a>{" "}
            (Institute of Foundation Models), MBZUAI. My research focuses on world modeling, particularly through the development of{" "}
            <a href="https://ifm.mbzuai.ac.ae/pan/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all">PAN</a>, a general, interactable, and long-horizon world model that unifies perception, action, and reasoning within a generative latent prediction framework. Broadly, I'm interested in generative modeling, multimodal reasoning, and foundation models for simulation and intelligence.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="space-y-4">
        <h2>News</h2>
        <div className="space-y-3">
          {news.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="text-muted-foreground whitespace-nowrap min-w-[120px]">{item.date}</span>
              <p className="text-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="space-y-4">
        <h2>Research Interests</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-muted rounded-full text-foreground">World Modeling</span>
          <span className="px-3 py-1 bg-muted rounded-full text-foreground">Generative Modeling</span>
          <span className="px-3 py-1 bg-muted rounded-full text-foreground">Multimodal Reasoning</span>
          <span className="px-3 py-1 bg-muted rounded-full text-foreground">Foundation Models</span>
          <span className="px-3 py-1 bg-muted rounded-full text-foreground">Simulation</span>
        </div>
      </section>

      {/* Publications */}
      <section className="space-y-4">
        <h2>Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-foreground">{pub.title}</h3>
              <p className="text-muted-foreground">{pub.authors}</p>
              <p className="text-muted-foreground">{pub.venue}</p>
              <div className="flex flex-wrap gap-3">
                {pub.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-violet-600 underline decoration-emerald-400 decoration-2 underline-offset-2 hover:decoration-violet-400 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
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