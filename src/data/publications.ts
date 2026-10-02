// Publication list shown on the homepage.
//
// Media for each entry (files live in /public, paths are relative to site root):
//   image: thumbnail / poster, 16:10 (e.g. 800x500 jpg). Always set this.
//   video: optional short loop (3–8s, ~640px wide, muted, < 2MB mp4).
//          When set, it autoplays muted & looped once scrolled into view,
//          and `image` is used as the poster while it loads.
//
// Compress a clip for the homepage with:
//   ffmpeg -i in.mp4 -ss 0 -t 6 -vf "scale=640:-2,fps=24" -an \
//     -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart public/pubs/xxx.mp4

export interface PubLink {
  label: string;
  url?: string;   // omit for links that are not out yet ("coming soon")
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  tldr?: string;
  image: string;
  video?: string;
  links: PubLink[];
}

export const publications: Publication[] = [
  {
    title: "Memorizon: Training World Models Beyond Their Context Window",
    authors: "Tingting Liao, Xuezhi Liang, Hao Li, Guangyi Liu",
    venue: "Preprint, 2026",
    tldr: "Trains world models on minutes-long spans that contain both visits to a place, while each chunk attends only to a small bank of retrieved frames — so revisited places stay consistent at bounded cost.",
    image: "/pubs/memorizon.jpg",
    video: "/pubs/memorizon.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2610.00544" },
      { label: "website", url: "https://tingtingliao.github.io/memorizon/" },
      { label: "code", url: "https://github.com/TingtingLiao/memorizon" },
      { label: "weights", url: "https://huggingface.co/Luffuly/memorizon" }
    ]
  },
  {
    title: "LOCI: Spatial Linear Memory for Streaming World Models",
    authors: "Ji Xia, Tingting Liao, Xuezhi Liang, Hao Li, Guangyi Liu",
    venue: "Preprint, 2026",
    tldr: "A hybrid spatial memory for video world models — camera-conditioned recurrent linear memory plus a cache of past observations — that reproduces revisited places more faithfully and streams long videos at constant memory.",
    image: "/pubs/loci.jpg",
    video: "/pubs/loci.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2609.40222" },
      { label: "website", url: "https://xiaji2021.github.io/LOCI/" },
      { label: "code", url: "https://github.com/xiaji2021/LOCI" },
      { label: "dataset", url: "https://huggingface.co/datasets/sum0214/LOCI-revisit-data" }
    ]
  },
  {
    title: "Mind the RefGAP: Correcting Reference Attention in Diffusion-Based Visual Editing",
    authors: "Yanan Wang, Shengcai Liao, Guangyi Liu, Xiaodan Liang",
    venue: "Preprint, 2026",
    tldr: "Diffusion editors give the reference image surprisingly little attention; RefGAP is a training-free correction of reference attention that improves reference fidelity across seven image/video editors.",
    image: "/pubs/refgap.jpg",
    video: "/pubs/refgap.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2609.35708" },
      { label: "website", url: "https://yanan-wang-cs.github.io/RefGAP/" }
    ]
  },
  {
    title: "DirectSwap: Paired, Mask-Free Video Head Swapping with Full-Reference Evaluation",
    authors: "Yanan Wang, Shengcai Liao, Panwen Hu, Xin Li, Fan Yang, Guangyi Liu, Xiaodan Liang",
    venue: "Preprint, 2026",
    tldr: "Builds HeadSwapBench, the first cross-identity paired dataset for video head swapping, and trains a mask-free model that replaces the whole head while keeping pose, expression and scene.",
    image: "/pubs/directswap.jpg",
    video: "/pubs/directswap.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2512.09417" },
      { label: "website", url: "https://yanan-wang-cs.github.io/DirectSwap/" },
      { label: "code", url: "https://github.com/Yanan-Wang-cs/DirectSwap" }
    ]
  },
  {
    title: "Character Mixing for Video Generation",
    authors: "Tingting Liao, Chongjian Ge, Guangyi Liu, Hao Li, Yi Zhou",
    venue: "NeurIPS 2026",
    tldr: "Lets characters from different worlds (e.g. cartoon and live-action) interact naturally in one generated video while keeping their identity and style.",
    image: "/pubs/mimix.jpg",
    video: "/pubs/mimix.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2510.05093" },
      { label: "code", url: "https://github.com/TingtingLiao/mimix" },
      { label: "website", url: "https://tingtingliao.github.io/mimix/" }
    ]
  },
  {
    title: "ActionEQA: Action Interface for Embodied Question Answering",
    authors: "Tianwei Bao, Qineng Wang, Kangrui Wang, Mingkai Deng, Guangyi Liu, Jiayuan Mao, Lawrence Birnbaum, Zhiting Hu, Eric P. Xing, Zhaoran Wang, Manling Li",
    venue: "TMLR 2026",
    tldr: "An embodied QA benchmark probing whether VLMs can bridge high-level instructions and low-level physical actions.",
    image: "/pubs/actioneqa.jpg",
    video: "/pubs/actioneqa.mp4",
    links: [
      { label: "OpenReview", url: "https://openreview.net/forum?id=HY2ruqdMt4" },
      { label: "website", url: "https://actioneqa.github.io/" }
    ]
  },
  {
    title: "World Reasoning Arena",
    authors: "PAN Team: Qiyue Gao, Kun Zhou, Jiannan Xiang, Zihan Liu, Dequan Yang, Junrong Chen, Arif Ahmad, Cong Zeng, Ganesh Bannur, Xinqi Huang, Zheqi Liu, Yi Gu, Yichi Yang, Guangyi Liu, Zhiting Hu, Zhengzhong Liu, Eric P. Xing",
    venue: "Technical Report, 2026",
    tldr: "A benchmark that evaluates world models on action-following fidelity, long-horizon forecasting, and simulative reasoning & planning — beyond next-frame visual quality.",
    image: "/pubs/wr-arena.jpg",
    video: "/pubs/wr-arena.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2603.25887" },
      { label: "code", url: "https://github.com/MBZUAI-IFM/WR-Arena" }
    ]
  },
  {
    title: "PAN: A World Model for General, Interactable, and Long-Horizon World Simulation",
    authors: "PAN Team",
    venue: "Technical Report, 2025",
    tldr: "A general world model that simulates how the world evolves under natural-language actions, staying coherent over long horizons.",
    image: "/pubs/pan.jpg",
    video: "/pubs/pan.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2511.09057" },
      { label: "website", url: "https://ifm.mbzuai.ac.ae/pan/" },
      { label: "X (Twitter)", url: "https://x.com/guangyi_l/status/1989450577127117179?s=20" },
      { label: "Forbes", url: "https://www.forbes.com/sites/patrickmoorhead/2025/11/13/the-pan-world-model-from-mbzuai-aims-to-elevate-ai-simulation/" }
    ]
  },
  {
    title: "Voila: Voice-Language Foundation Models for Real-Time Autonomous Interaction and Voice Role-Play",
    authors: "Yemin Shi*, Yu Shu*, Siwei Dong*, Guangyi Liu*, Jaward Sesay, Jingwen Li, Zhiting Hu",
    venue: "Technical Report, 2025",
    tldr: "End-to-end voice-language models for full-duplex, low-latency spoken conversation and voice role-play.",
    image: "/pubs/voila.jpg",
    video: "/pubs/voila.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2505.02707" },
      { label: "code", url: "https://github.com/maitrix-org/Voila" },
      { label: "website", url: "https://voila.maitrix.org/" },
      { label: "demo", url: "https://hf.co/spaces/maitrix-org/Voila-demo" }
    ]
  },
  {
    title: "Unified Generation, Reconstruction, and Representation: Generalized Diffusion with Adaptive Latent Encoding-Decoding",
    authors: "Guangyi Liu, Yu Wang, Zeyu Feng, Qiyu Wu, Liping Tang, Yuan Gao, Zhen Li, Shuguang Cui, Julian McAuley, Eric P. Xing, Zichao Yang, Zhiting Hu",
    venue: "ICML 2024",
    tldr: "Generalizes diffusion with learnable encoders/decoders so one model handles generation, reconstruction, and representation across text, images, and proteins.",
    image: "/pubs/gdm.jpg",
    video: "/pubs/gdm.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2402.19009" },
      { label: "code", url: "https://github.com/guangyliu/EDDPM" }
    ]
  },
  {
    title: "Pandora: Towards General World Model with Natural Language Actions and Video States",
    authors: "Jiannan Xiang*, Guangyi Liu*, Yi Gu*, Qiyue Gao, Yuting Ning, Yuheng Zha, Zeyu Feng, Tianhua Tao, Shibo Hao, Yemin Shi, Zhengzhong Liu, Eric P. Xing, Zhiting Hu",
    venue: "Technical Report, 2024",
    tldr: "A hybrid autoregressive-diffusion world model that generates video states and can be controlled with free-text actions at any time.",
    image: "/pubs/pandora.jpg",
    video: "/pubs/pandora.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2406.09455" },
      { label: "code", url: "https://github.com/maitrix-org/Pandora" },
      { label: "website", url: "https://world-model.ai" },
      { label: "gallery", url: "https://world-model.maitrix.org/gallery.html" }
    ]
  },
  {
    title: "Composable Text Controls in Latent Space with ODEs",
    authors: "Guangyi Liu, Zeyu Feng, Yuan Gao, Zichao Yang, Xiaodan Liang, Junwei Bao, Xiaodong He, Shuguang Cui, Zhen Li, Zhiting Hu",
    venue: "EMNLP 2023 (Oral Presentation)",
    image: "/pubs/latentops.jpg",
    video: "/pubs/latentops.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2208.00638" },
      { label: "code", url: "https://github.com/guangyliu/LatentOps" }
    ]
  },
  {
    title: "Don't Take It Literally: An Edit-Invariant Sequence Loss for Text Generation",
    authors: "Guangyi Liu, Zichao Yang, Tianhua Tao, Xiaodan Liang, Junwei Bao, Zhen Li, Xiaodong He, Shuguang Cui, Zhiting Hu",
    venue: "NAACL 2022 (Oral Presentation)",
    image: "/pubs/eisl.jpg",
    video: "/pubs/eisl.mp4",
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
    image: "/pubs/medical-vlbert.jpg",
    video: "/pubs/medical-vlbert.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2108.05067" },
      { label: "project", url: "https://covid19ct.github.io/" }
    ]
  },
  {
    title: "Learning to Decouple Relations: Few-Shot Relation Classification with Entity-Guided Attention and Confusion-Aware Training",
    authors: "Yingyao Wang, Junwei Bao, Guangyi Liu, Youzheng Wu, Xiaodong He, Bowen Zhou, Tiejun Zhao",
    venue: "COLING 2020",
    image: "/pubs/fewshot-rc.jpg",
    video: "/pubs/fewshot-rc.mp4",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2010.10894" }
    ]
  }
];

// Where clicking a paper's title or thumbnail goes: its website if it has one,
// otherwise the paper itself.
export function primaryUrl(pub: Publication): string {
  const find = (labels: string[]) => pub.links.find((l) => labels.includes(l.label.toLowerCase()));
  const withUrl = (l?: PubLink) => (l && l.url ? l : undefined);
  return (withUrl(find(["website", "project"])) ?? withUrl(find(["arxiv", "paper", "openreview"])) ??
    pub.links.find((l) => l.url))!.url!;
}
