"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

export function AiOpsAuditForm() {
  const router = useRouter();
  const [status, setStatus] = React.useState<"idle" | "submitting" | "error">(
    "idle",
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      router.push("/thanks");
    } catch {
      setStatus("error");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input type="hidden" name="form-name" value="ai-ops-audit" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="vv-muted">Name</span>
          <input
            className="vv-focus-ring h-12 rounded-xl bg-[color:var(--card)] px-4 ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 dark:bg-black/20 dark:ring-white/10 dark:shadow-none"
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="vv-muted">Email</span>
          <input
            className="vv-focus-ring h-12 rounded-xl bg-[color:var(--card)] px-4 ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 dark:bg-black/20 dark:ring-white/10 dark:shadow-none"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="vv-muted">Company</span>
          <input
            className="vv-focus-ring h-12 rounded-xl bg-[color:var(--card)] px-4 ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 dark:bg-black/20 dark:ring-white/10 dark:shadow-none"
            name="company"
            autoComplete="organization"
            required
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="vv-muted">Role</span>
          <select
            className="vv-focus-ring h-12 rounded-xl bg-[color:var(--card)] px-4 ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 dark:bg-black/20 dark:ring-white/10 dark:shadow-none"
            name="role"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select
            </option>
            <option>Owner / Operator</option>
            <option>VP / Director of Ops</option>
            <option>Founder</option>
            <option>Executive</option>
            <option>Manager</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="vv-muted">What are you trying to automate?</span>
        <textarea
          className="vv-focus-ring min-h-28 rounded-xl bg-[color:var(--card)] px-4 py-3 ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 dark:bg-black/20 dark:ring-white/10 dark:shadow-none"
          name="automation_goal"
          required
        />
      </label>

      <fieldset className="grid gap-2 text-sm">
        <legend className="vv-muted">Systems in use</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {[
            "Google Workspace",
            "Microsoft 365",
            "Slack",
            "HubSpot",
            "Salesforce",
            "QuickBooks",
            "Notion",
            "Airtable",
          ].map((label) => (
            <label
              key={label}
              className="flex items-center gap-2 rounded-xl bg-[color:var(--tint-1)] px-3 py-2 ring-1 ring-[color:var(--line)] dark:bg-black/10 dark:ring-white/10"
            >
              <input
                className="accent-cyan-300"
                type="checkbox"
                name="systems"
                value={label}
              />
              <span className="vv-muted">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm">
        <span className="vv-muted">Timeline</span>
        <select
          className="vv-focus-ring h-12 rounded-xl bg-[color:var(--card)] px-4 ring-1 ring-[color:var(--line)] shadow-sm shadow-black/10 dark:bg-black/20 dark:ring-white/10 dark:shadow-none"
          name="timeline"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select
          </option>
          <option>ASAP</option>
          <option>Within 30 days</option>
          <option>Within 90 days</option>
          <option>Exploring / not sure</option>
        </select>
      </label>

      <button
        className="vv-focus-ring mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black ring-1 ring-[color:var(--line)] shadow-md shadow-black/15 hover:bg-white/90 dark:ring-white/10 dark:shadow-none disabled:opacity-60"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Request audit"}
      </button>

      {status === "error" ? (
        <p className="text-xs text-red-200">
          Something went wrong. Please try again, or message me on LinkedIn.
        </p>
      ) : null}

      <p className="vv-muted text-xs leading-6">
        By submitting, you agree to be contacted about this request. No spam.
      </p>
    </form>
  );
}
