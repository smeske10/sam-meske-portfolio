import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t vv-line py-10">
      <div className="vv-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="vv-muted text-sm">© {new Date().getFullYear()} Vision Venture</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link className="vv-link" href="/case-studies">
            Case studies
          </Link>
          <Link className="vv-link" href="/#audit">
            Get an AI Ops audit
          </Link>
          <a
            className="vv-link"
            href="/resume_sam_meske.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume (PDF)
          </a>
          <a
            className="vv-link"
            href="https://www.linkedin.com/in/sam-meske-ms-mba/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

