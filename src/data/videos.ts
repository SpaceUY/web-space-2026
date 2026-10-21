/**
 * Videos published on SpaceDev's own YouTube channel.
 *
 * Adding a video is one entry here: if `relatedPost` matches a blog slug, the
 * post embeds it above the article body. Every field
 * comes from YouTube Studio, never estimated: `uploadDate` and `duration` feed
 * the VideoObject schema, and `chapters` must match the timestamps in the
 * video's YouTube description so Google's key moments line up with the player.
 *
 * Newest first.
 */
export interface VideoChapter {
  /** Start of the chapter in seconds. */
  start: number;
  title: string;
}

export interface Video {
  youtubeId: string;
  title: string;
  description: string;
  /** ISO 8601 publish time, as shown in YouTube Studio. */
  uploadDate: string;
  /** ISO 8601 duration, e.g. "PT6M29S". */
  duration: string;
  /** Slug of the blog post that covers the same topic. */
  relatedPost?: string;
  chapters: VideoChapter[];
}

export const videos: Video[] = [
  {
    youtubeId: "Wk4qQvI6oQc",
    title: "Blockchain Trends 2026",
    description:
      "Blockchain stopped trying to replace the banks and started working for them. This video breaks down the 8 blockchain trends for 2026: institutional adoption, RWA tokenization, AI agents with wallets, regulation, DeFi, security, scaling and stablecoins.",
    uploadDate: "2026-10-20T15:17:23+00:00",
    duration: "PT6M29S",
    relatedPost: "blockchain-trends-2026",
    chapters: [
      { start: 0, title: "Intro: blockchain got a job" },
      { start: 38, title: "Institutional adoption" },
      { start: 54, title: "Real-world asset tokenization" },
      { start: 100, title: "AI agents with wallets" },
      { start: 147, title: "Regulation: GENIUS Act and MiCA" },
      { start: 185, title: "DeFi grows up" },
      { start: 231, title: "Smart contract security" },
      { start: 259, title: "Scaling: rollups and modular blockchains" },
      { start: 301, title: "Stablecoins" },
      { start: 362, title: "From selling a story to operating a system" },
    ],
  },
];

export const getVideoForPost = (postSlug: string): Video | undefined =>
  videos.find((video) => video.relatedPost === postSlug);

export const youtubeWatchUrl = (youtubeId: string) => `https://www.youtube.com/watch?v=${youtubeId}`;

export const youtubeThumbnailUrl = (youtubeId: string, quality: "maxresdefault" | "hqdefault" = "maxresdefault") =>
  `https://i.ytimg.com/vi/${youtubeId}/${quality}.jpg`;

/** Same frame as the maxres JPG at about a third of the weight. */
export const youtubeThumbnailWebpUrl = (youtubeId: string) =>
  `https://i.ytimg.com/vi_webp/${youtubeId}/maxresdefault.webp`;
