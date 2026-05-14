export function BuiltForOpsProfileCard() {
  return (
    <div className="vv-card w-full overflow-hidden rounded-3xl">
      <div className="relative h-32 w-full overflow-hidden">
        <img
          src="/banner-placeholder.svg"
          alt="Profile banner placeholder"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative px-6 pb-6 pt-12">
        <div className="absolute left-6 top-0 -translate-y-1/2">
          <div className="h-20 w-20 overflow-hidden rounded-full ring-4 ring-black/60">
            <img
              src="https://ik.imagekit.io/i6kon7cps/image%20(1).png"
              alt="Sam Meske headshot placeholder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <div className="text-xl font-semibold leading-tight">Sam Meske</div>
            <div className="vv-muted mt-1 text-sm">
              AI product strategy • systems engineering • research
            </div>
          </div>


          <div className="mt-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <p className="vv-muted text-sm leading-7">
              As a naturally curious researcher and problem solver, I've led research and program development, built products, and shipped AI integrations that streamline workflows and improve outcomes. My goal is simple: empower teams to use data and AI to solve real-world problems.
            </p>



            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="vv-focus-ring inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-white/5 px-5 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
                href="/case-studies"
              >
                View case studies
              </a>
              <a
                className="vv-focus-ring inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90"
                href="https://www.linkedin.com/in/sam-meske-ms-mba/"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

