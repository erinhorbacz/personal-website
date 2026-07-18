import "./projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ExtensionIcon from "@mui/icons-material/Extension";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Footer from "../../components/footer_section/Footer";

const projects = [
  {
    title: "Agentic Synthesis Planner",
    tagline: "Durable multi-agent workflow system",
    description: (
      <>
        A fully durable, agentic workflow in TypeScript that automates chemical
        synthesis planning end to end by chaining together 12 durable
        workflows, 7 LLM agents, and 16 agent tools. A retrosynthesis agent
        generates candidate routes via backwards tree search through known
        reaction patterns, a procedure planner drafts reaction plans for each
        step of the surviving routes, and an optimization agent iteratively
        redesigns individual steps to converge on a Pareto frontier of cost,
        purity, and confidence. The system runs on DBOS, a Postgres-backed
        durable execution engine. The agent loops (Vercel AI SDK + Gemini) are split so each model
        turn and tool effect checkpoints independently, keeping nondeterministic LLM
        turns cleanly separated from deterministic workflow logic. The pipeline streams live
        transcripts to the UI, triggering visual updates.
      </>
    ),
    tech: [
      "DBOS",
      "Large Language Models (LLM)",
      "Deterministic LLM Programming",
      "Redis",
      "SSE",
      "React",
      "Zod",
      "Agent Tools",
    ],
    links: [
      {
        label: "Watch It in Action",
        href: "https://drive.google.com/file/d/1a5WViaroiPi3fjJ7k0hmD9ZYHhadNB8u/view?usp=sharing",
        icon: <OndemandVideoIcon fontSize="small" />,
      },
    ],
  },
  {
    title: "LitBeats",
    tagline: "Group project · Georgia Tech Machine Learning",
    description: (
      <>
        A cross-domain recommender system that turns any book into a matching
        Spotify playlist. Built with a team at Georgia Tech, LitBeats mines a
        dataset of 16,000 books and 400,000 songs, embeds book descriptions and
        song lyrics with NLP vectorization and transformer-based sentence
        embeddings, and ranks songs by cosine similarity with collaborative
        filtering via fast matrix factorization to power the recommendations.
        The web app is built in React with Material UI and D3, and integrates
        the Spotify Web API through a serverless Cloudflare Worker that handles
        the OAuth token flow so no credentials ever ship to the client.
      </>
    ),
    tech: [
      "Python",
      "NLP",
      "Matrix Factorization",
      "React",
      "Material UI",
      "D3.js",
      "Spotify Web API",
      "Cloudflare Workers",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erinhorbacz/litbeats",
        icon: <GitHubIcon fontSize="small" />,
      },
      {
        label: "Live Site",
        href: "https://erinhorbacz.github.io/litbeats/#/",
        icon: <LaunchIcon fontSize="small" />,
      },
    ],
  },
  {
    title: "GitSearch",
    tagline: "Full-stack developer tool",
    description: (
      <>
        GitHub's built-in code search only indexes a repository's default
        branch. GitSearch fixes that: paste a link to any repo and search a
        keyword across every branch at once, then filter the results by branch.
        I built it to close a real workflow gap for enterprise developers
        working across long-lived feature branches. It's full-stack
        JavaScript: a React and Material UI frontend backed by a Node.js and
        Express API that fans search requests out through the GitHub REST API
        using Octokit, with personal-access-token authentication.
      </>
    ),
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Octokit",
      "GitHub REST API",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erinhorbacz/git-search",
        icon: <GitHubIcon fontSize="small" />,
      },
    ],
  },
  {
    title: "YT Music Data",
    tagline: "Full-stack analytics dashboard",
    description: (
      <>
        A stats.fm-style analytics dashboard for your YouTube Music listening
        history. Drop in the watch-history file from Google Takeout and explore
        ranked top charts over any time range, listening trends, a day-by-hour
        heatmap, streak tracking, per-artist and per-song detail pages, and an
        infinite-scroll feed of every play. A Node.js and Express API parses
        and aggregates the raw history while a resumable background job
        enriches it with real track durations and album data via the YouTube
        Data API, caching each lookup so it only ever happens once. The
        frontend is React with Material UI.
      </>
    ),
    tech: [
      "React",
      "Node.js",
      "Express",
      "Material UI",
      "YouTube Data API",
      "Python",
      "Jupyter",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erinhorbacz/YTMusicData",
        icon: <GitHubIcon fontSize="small" />,
      },
      {
        label: "Live Site",
        href: "https://erinhorbacz.github.io/YTMusicData/#/",
        icon: <LaunchIcon fontSize="small" />,
      },
    ],
  },
  {
    title: "React Tree",
    tagline: "Published on the Chrome Web Store as React Tree Injector",
    description: (
      <>
        A Chrome extension that injects an interactive visualization of a live
        React app's component tree into any webpage- a fast way to understand
        unfamiliar codebases and debug deeply nested component hierarchies
        without digging through DevTools. Written in TypeScript with React and
        bundled with Vite into a single injectable script, with the tree itself
        rendered using D3. It's built on Chrome's Manifest V3 extension
        platform: a background service worker uses the scripting and activeTab
        APIs to inject the tool on demand.
      </>
    ),
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "D3.js",
      "Chrome Extensions (Manifest V3)",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erinhorbacz/react-tree",
        icon: <GitHubIcon fontSize="small" />,
      },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/react-tree-injector/nnpcafekamanginofaoilbhmcnklhide",
        icon: <ExtensionIcon fontSize="small" />,
      },
    ],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <div className="background_projects">
        <div className="projects_grid">
          {projects.map((project) => (
            <div className="project_card" key={project.title}>
              <h2 className="banner_title project_title">{project.title}</h2>
              <p className="project_tagline">{project.tagline}</p>
              <p className="project_description">{project.description}</p>
              <div className="project_tech">
                {project.tech.map((tech) => (
                  <span className="tech_chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project_links">
                {project.links.map((link) => (
                  <a
                    className="project_link"
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer color="rgba(74, 47, 55, 0.8)" />
    </>
  );
};

export default ProjectsPage;
