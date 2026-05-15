import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BuiltForOpsProfileCard } from "@/components/home/built-for-ops-profile-card";
import { PracticeAccordion } from "@/components/about/PracticeAccordion";
export const metadata = {
  title: "About — Sam Meske",
  description:
    "AI product strategist with a background in clinical research, healthcare analytics, and production AI engineering. Associate Director of Research at Breastcancer.org.",
  alternates: {
    canonical: "/about",
  },
};

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--tint-1)] px-3 py-1 text-xs ring-1 ring-[color:var(--line)]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="vv-muted mt-5 max-w-4xl text-base leading-8 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-full">
      <SiteHeader />

      <main className="flex-1">
        <section id="opening" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-220px] h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.34),transparent_60%)] blur-2xl" />
            <div className="absolute right-[-240px] top-[180px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.20),transparent_60%)] blur-2xl" />
          </div>

          <div className="vv-container relative py-16 md:py-20">
            <div className="grid items-start gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <SectionTitle
                  eyebrow="AI Product Strategy · Healthcare Research · Systems Engineering"
                  title="I sit at the intersection of research rigor, technical depth, and product strategy — that combination is rare."
                  subtitle="Most AI product leaders come from design, engineering, or business. My path ran through clinical research, population health analytics, and hands-on AI systems engineering. That background shapes everything about how I approach AI products: methodically, with an eye toward governance, and with the operator instincts to know what actually ships."
                />
              </div>
              <div className="md:col-span-5">
                <BuiltForOpsProfileCard />
              </div>
            </div>
          </div>
        </section>

        <section id="narrative" className="vv-container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                The career narrative
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                This is the one section meant to be read, not scanned.
              </p>
            </div>
            <div className="md:col-span-8">
              <details className="group vv-card rounded-3xl p-8 md:p-10">
                <summary className="[&::-webkit-details-marker]:hidden cursor-pointer list-none">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold">Read the narrative</div>
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-sm font-semibold ring-1 ring-white/10">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </div>
                  </div>
                  <p className="vv-muted mt-3 text-sm leading-7">
                    Research foundation → operations &amp; analytics → AI product strategy &amp; systems engineering.
                  </p>
                </summary>

                <div className="mt-6 space-y-7 text-sm leading-8 md:text-base md:leading-8">
                  <p className="vv-muted">
                    I started in life sciences — B.S. in Human Biology at
                    Duquesne, M.S. in Exercise Science at Bloomsburg where my
                    thesis work involved EMG signal analysis across resistance
                    training conditions. That sounds far from AI product
                    strategy, but it built something essential: a deep respect
                    for research methodology, measurement validity, and what it
                    actually means to draw defensible conclusions from data. I
                    learned to design studies, run
                    statistical analyses, and communicate findings. That foundation has never left me.
                  </p>
                  <p className="vv-muted">
                    From there I moved into healthcare operations and clinical
                    research management at Main Line Health — eventually as
                    Project Manager on a Phase III investigator-initiated IND
                    trial, coordinating FDA submissions, managing research
                    staff, and overseeing a portfolio of seventeen resident
                    research projects simultaneously. I added an MBA at night
                    during this period to understand the
                    organizational and strategic layer, not just the operational
                    one. By the time I joined Breastcancer.org in 2022, I could
                    hold a rigorous conversation about study design, budget
                    management, and product prioritization in
                    the same meeting — and increasingly, about what AI could and
                    couldn't safely do inside a patient-facing organization.
                  </p>
                  <p className="vv-muted">
                    At Breastcancer.org I came in as Associate Director of
                    Research — directing the annual patient research program,
                    building analytics infrastructure in AWS, designing survey
                    instruments, and producing the quantitative reporting that
                    feeds board strategy. But the role expanded, and so did the
                    work. I started leading product discovery for AI-enabled
                    digital health tools: defining MVPs, establishing governance
                    guardrails, facilitating alignment between technology,
                    content, and medical review teams, and building the systems
                    that would actually make AI safe to deploy in a context
                    where patients are making treatment decisions. Somewhere in
                    that process I went from planning AI systems to building
                    them — production agents, agentic pipelines, parallel
                    orchestration workflows, MCP integrations. I now do both,
                    and I think that's the point.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="practice" className="vv-container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                What this looks like in practice
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                The combination shows up in consistent patterns.
              </p>
            </div>
            <div className="md:col-span-8">
              <PracticeAccordion
                items={[
                  {
                    title: "I start with the constraint, not the capability",
                    content:
                      "Most AI initiatives fail not because the technology doesn't work, but because no one did the hard work of defining what “working” means in context — including what the system must never do. My research background means I'm wired to start with hypotheses, success criteria, and failure modes before I write a single prompt.",
                  },
                  {
                    title: "I can go from SQL to system design to stakeholder deck",
                    content:
                      "I'm fluent in SQL and Python, work in AWS, and build production AI agents — but I can also write the board-level framing, facilitate the cross-functional alignment meeting, and define the pilot evaluation criteria. Most people who can do one of those things can't do the others. I can move across all three in the same day.",
                  },
                  {
                    title: "I've shipped AI in a trust-sensitive environment",
                    content:
                      "Breastcancer.org reaches millions of patients navigating active treatment. That's not a context where you deploy fast and fix it later. My experience designing AI products there — sourcing transparency requirements, hard guardrails against clinical interpretation, escalation pathways, medical review workflows — is directly applicable anywhere AI is touching something that actually matters.",
                  },
                  {
                    title: "I build to learn, not just to demonstrate",
                    content:
                      "Vision Venture is where I run experiments. The agentic delivery systems, GEO audit intelligence platforms, and content operations pipelines I've built there aren't demos — they're production systems I use and iterate on. It's where the gap between “I understand this conceptually” and “I've debugged this at 11pm” closes.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section id="timeline" className="vv-container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Background at a glance
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">Career timeline.</p>
            </div>
            <div className="md:col-span-8">
              <div className="vv-card overflow-hidden rounded-3xl">
                <div className="grid">
                  {[
                    ["2014", "B.S. Human Biology — Duquesne University"],
                    [
                      "2014—2016",
                      "Graduate Research & Teaching Assistant — Bloomsburg University",
                    ],
                    ["2016", "M.S. Exercise Science — Bloomsburg University"],
                    [
                      "2017—2019",
                      "Program Coordinator, Concussion Research Institute — Bloomsburg University",
                    ],
                    [
                      "2019—2021",
                      "Research Assistant & Project Manager (Phase III IND) — Main Line Health",
                    ],
                    ["2020", "MBA — Bloomsburg University"],
                    [
                      "2021—2022",
                      "Department Business Manager, OB/GYN — Main Line Health",
                    ],
                    [
                      "2022",
                      "Certificate in Full Stack Software Engineering — University of Pennsylvania",
                    ],
                    [
                      "2022—Present",
                      "Associate Director of Research + expanded product strategy & AI innovation — Breastcancer.org",
                    ],
                  ].map(([year, role], idx) => (
                    <div
                      key={`${year}-${role}`}
                      className={`grid grid-cols-12 gap-4 px-6 py-4 ${idx === 0 ? "" : "border-t border-white/10"
                        }`}
                    >
                      <div className="vv-muted col-span-4 text-sm md:col-span-3">
                        {year}
                      </div>
                      <div className="col-span-8 text-sm font-semibold leading-7 md:col-span-9">
                        {role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="next" className="vv-container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                What I'm looking for next
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                Personal direction and fit.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="rounded-3xl bg-white/5 p-1 ring-1 ring-white/10">
                <div className="vv-card rounded-[22px] p-8 md:p-10">
                  <div className="space-y-6 text-sm leading-8 md:text-base md:leading-8">
                    <p className="vv-muted">
                      I'm actively exploring Director and Senior PM roles in AI
                      product, digital health, and innovation strategy —
                      particularly at organizations where the work is genuinely
                      consequential and where someone who can hold both the
                      research rigor and the technical implementation
                      simultaneously is an asset rather than an edge case.
                    </p>
                    <p className="vv-muted">
                      I'm drawn to organizations building AI products where
                      safety and trust are real constraints, not marketing
                      language. Healthcare, clinical decision support, regulated
                      industries, mission-driven orgs. Places where “move fast
                      and fix it later” isn't an option and where thoughtful
                      product governance is a competitive advantage.
                    </p>
                    <p className="vv-muted">
                      If you're evaluating whether my background fits a role
                      you're hiring for, the case studies on this site will tell
                      you more than a resume. They show how I think, what I
                      build, and the tradeoffs I navigate — not just what I've
                      done.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="vv-container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Publications
              </h2>
              <p className="vv-muted mt-3 text-sm leading-7">
                Recent/current research plus selected publications, works in
                preparation, and conference abstracts.
              </p>
            </div>
            <div className="md:col-span-8">
              <details className="group vv-card rounded-3xl p-8 md:p-10">
                <summary className="[&::-webkit-details-marker]:hidden cursor-pointer list-none">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold">
                      View publications list
                    </div>
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-sm font-semibold ring-1 ring-white/10">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </div>
                  </div>
                  <p className="vv-muted mt-3 text-sm leading-7">
                    ResearchGate profile and a curated list of accepted,
                    in-prep, and abstract publications.
                  </p>
                </summary>

                <div className="mt-6 space-y-8 text-sm leading-8 md:text-base md:leading-8">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      Recent / current research
                    </div>
                    <p className="vv-muted mt-2 text-sm leading-7">
                      <a
                        className="vv-link"
                        href="https://www.researchgate.net/profile/Sam-Meske"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ResearchGate: Sam Meske
                      </a>
                    </p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      Publications (accepted)
                    </div>
                    <ul className="vv-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
                      <li>
                        Weiss, M, Hibbs, J, Buckley, M…Meske, S et al. (2021) A
                        Coala-T survey of breast cancer patients use of cannabis
                        before, during and after treatment. <em>Cancer</em>.
                        CNCR-21-0925.R1
                      </li>
                      <li>
                        Beaupre, J, Meske, S, &amp; Buckley, M. (2021) Athletic
                        Training and Population Health Science.{" "}
                        <em>Journal of Athletic Training</em>. Online Ahead of
                        Print.
                      </li>
                      <li>
                        Beaupre, J, Meske, S, &amp; Buckley, M. (2021) Athletic
                        Trainer-reported prevalence of mental health, substance
                        use, and barriers to health in secondary schools.{" "}
                        <em>Journal of Athletic Training</em>. Online Ahead of
                        Print.
                      </li>
                      <li>
                        Meske, S, Hazzard, J, Ni, M, Hanson, T, Van Horn, L,
                        &amp; Smith, J. (2018) The Prevalence of Traumatic Brain
                        Injury and On-Campus Service Utilization Among
                        Undergraduate Students.{" "}
                        <em>Journal of Head Trauma Rehabilitation</em>. Online
                        Ahead of Print.
                      </li>
                      <li>
                        Mookerjee, S, McMahon, M, &amp; Meske, S. (2017)
                        Influence of joint angle and biceps brachii isometric
                        contraction intensity on electromyographic and
                        mechanomyographic responses.{" "}
                        <em>
                          Advances in Skeletal Muscle Function Assessment
                        </em>
                        . 1(2), 21–27.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      Publications (in preparation)
                    </div>
                    <ul className="vv-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
                      <li>
                        Gobern, J, Hartwell, L, Meske S, &amp; Carlson, E. (2020)
                        Management of Amniotic Fluid Embolism in a Community
                        Healthcare System: A Case Series.{" "}
                        <em>American Journal of Obstetrics &amp; Gynecology</em>.
                      </li>
                      <li>
                        Kennard, K, Ciocca, R, Sabol, J, Carp, N, Meske, S.
                        (2020) Use of PECS II Block in Partial Mastectomy for
                        Improving Postoperative Pain Control and Mitigating
                        Narcotic Use — a Randomized Control Trial.{" "}
                        <em>American Journal of Surgery</em>.
                      </li>
                      <li>
                        Hazzard, J, Ni, M, Meske, S, Caccese, Eckner, JT,
                        &amp; Buckley, T. (2019) The effects of sports-related
                        concussion on clinical reaction-time in student-athletes.
                      </li>
                      <li>
                        Buckley, T, Caccese, J, Hazzard, J, Ni, M, Meske, S,
                        &amp; Eckner, JT. (2019) Clinical reaction-time
                        correlation to risk of head injury in student-athletes.
                      </li>
                      <li>
                        Meske, S &amp; Mookerjee, S. (2019) Comparison of EMG
                        responses across handle types during seated row exercise.{" "}
                        <em>Journal of Strength and Conditioning Research</em>.
                      </li>
                      <li>
                        Mookerjee, S, McMahon, M, &amp; Meske, S. (2018) EMG
                        amplitude-to-torque ratios in males and females during
                        isokinetic exercise.{" "}
                        <em>European Journal of Sports Science</em>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      Abstracts
                    </div>
                    <ul className="vv-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
                      <li>
                        Kennard, K, Buckley, M, Meske, S, Larson, S, et al. Use
                        of PECS II Block in Partial Mastectomy for Improving
                        Postoperative Pain Control and Mitigating Narcotic Use:
                        Initial Results from a Randomized Control Trial. Poster
                        presented to the ASBrS virtual conference, June 2020.
                      </li>
                      <li>
                        Sabato, E, Gobern, J, Meske, S, &amp; Buckley, M. (2020).
                        Racial Disparities in Postpartum Hemorrhage in a
                        Community Hospital: A Retrospective Cohort Analysis.{" "}
                        <em>ACOG National Conference</em>.
                      </li>
                      <li>
                        Mezes, C, Meske S, &amp; Gobern, J. (2019). Enhanced
                        Laparoscopic Identification of Peritoneal Endometriosis
                        with Indocyanine Green Contrast: An Educational Video.{" "}
                        <em>AAGL International Conference</em>.
                      </li>
                      <li>
                        Mookerjee, S, Meske, S, Beyer, KS, &amp; Drury, D. (2019).
                        Gender Comparisons of Muscle Activation Patterns Across
                        Handle Types During Seated Row Exercise:{" "}
                        <em>Medicine &amp; Science in Sports &amp; Exercise</em>.
                        51(6):143.
                      </li>
                      <li>
                        Meske, S, Hazzard, J, &amp; Ni, M. (2018). Altered state
                        of consciousness in mild traumatic brain injury in
                        relation to utilization of services. <em>Neurology</em>.
                        91:2.
                      </li>
                      <li>
                        Meske, S, Hazzard Jr., J, Tolan, C, Van Horn, L, Hanson,
                        T, &amp; Smith, J. (2017). Trajectory of recovery from
                        mTBI in an adolescent ice hockey player.{" "}
                        <em>
                          IBIA/IPBIS 2nd International Conference on Pediatric
                          Acquired Brain Injury
                        </em>
                        .
                      </li>
                      <li>
                        Meske, S, Hanson, T, Hazzard Jr., J, Van Horn, L,
                        &amp; Smith, J. (2017). Prevalence of traumatic brain
                        injury and utilization of services in an undergraduate
                        population.{" "}
                        <em>
                          American Academy of Neurology 4th Annual Sports
                          Concussion Conference
                        </em>
                        .
                      </li>
                      <li>
                        Van Horn, L, Hazzard Jr., J, Smith, P, Meske, S, Hanson,
                        T, &amp; Smith, J. (2017). Residual effects of concussion
                        utilizing a dual-task analysis.{" "}
                        <em>
                          American Academy of Neurology 4th Annual Sports
                          Concussion Conference
                        </em>
                        .
                      </li>
                      <li>
                        Van Horn, L, Hazzard Jr., J, Meske, S, Hanson, T,
                        &amp; Smith, J. (2017). Recovery assessment from severe
                        TBI using multiple technologies.{" "}
                        <em>
                          2nd International Conference Pediatric Acquired Brain
                          Injury
                        </em>
                        .
                      </li>
                      <li>
                        Mookerjee, S, Meske, S, &amp; Nocera, V. (2016).
                        Comparison of differences in O2 pulse across upper body
                        resistance exercise.{" "}
                        <em>Medicine &amp; Science in Sports &amp; Exercise</em>,
                        48(5), S278.
                      </li>
                      <li>
                        Nocera, V, Meske, S, &amp; Mookerjee, S. (2015). Gender
                        differences in O2 pulse during single set vs.
                        multiple-set resistance exercise.{" "}
                        <em>
                          Mid-Atlantic Regional Chapter of the American College
                          of Sports Medicine 38th Annual Scientific Meeting
                        </em>
                        .
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="cta" className="vv-container py-12 md:py-16">
          <div className="vv-card rounded-3xl p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="text-xl font-semibold tracking-tight">
                  Want to see the work?
                </div>
                <p className="vv-muted mt-3 text-sm leading-7">
                  The case studies show thinking, structure, governance, and
                  outcomes — more than a resume ever will.
                </p>
              </div>
              <div className="md:col-span-5 md:flex md:justify-end">
                <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                  <a
                    className="vv-focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 hover:bg-white/90 dark:ring-white/10 dark:shadow-none md:w-auto"
                    href="/case-studies"
                  >
                    View case studies 🡢
                  </a>
                  <a
                    className="vv-focus-ring inline-flex h-12 w-full items-center justify-center rounded-xl bg-[color:var(--tint-1)] px-5 text-sm font-semibold ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 hover:bg-[color:var(--tint-2)] dark:bg-white/5 dark:ring-white/10 dark:shadow-none dark:hover:bg-white/10 md:w-auto"
                    href="https://www.linkedin.com/in/sam-meske-ms-mba/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <p className="vv-muted mt-6 text-xs leading-6">
              <a className="vv-link" href="/resume_sam_meske.pdf" target="_blank" rel="noreferrer">
                Download resume (PDF)
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}











