import { siteConfig } from "@/content/site.config";
import type { ArchiveProject } from "@/types/content";

/** LeetCode-inspired mini games — sample entries, swap for your real repos. */
const github = siteConfig.social.github;

export const leetcodeMiniGames: ArchiveProject[] = [
  {
    id: "snake-game",
    title: "Snake Game",
    description:
      "Classic snake with grid movement, score tracking, and speed ramps — built while practicing queue and simulation patterns.",
    techStack: ["JavaScript", "Canvas", "LeetCode"],
    repoUrl: github,
    liveUrl: github,
  },
  {
    id: "game-2048",
    title: "2048",
    description:
      "Tile-merge puzzle with undo stack and win/lose states — exercises matrix traversal and greedy logic.",
    techStack: ["TypeScript", "React", "LeetCode"],
    repoUrl: github,
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "Two-player board with minimax AI opponent — a compact way to revisit recursion and game trees.",
    techStack: ["JavaScript", "HTML", "LeetCode"],
    repoUrl: github,
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description:
      "Card-flip memory game with shuffle, pairs detection, and move counter — hash map and state machine practice.",
    techStack: ["TypeScript", "CSS", "LeetCode"],
    repoUrl: github,
    liveUrl: github,
  },
  {
    id: "word-guess",
    title: "Word Guess",
    description:
      "Wordle-style guess game with keyboard hints, letter frequency, and daily challenge mode.",
    techStack: ["React", "TypeScript", "LeetCode"],
    repoUrl: github,
  },
  {
    id: "maze-runner",
    title: "Maze Runner",
    description:
      "Grid maze with BFS pathfinding, timer, and procedural generation — algorithms learned from LeetCode grids.",
    techStack: ["JavaScript", "Canvas", "BFS"],
    repoUrl: github,
    liveUrl: github,
  },
];
