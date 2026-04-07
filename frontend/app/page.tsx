"use client";

import { useState } from "react";
import Image from "next/image";


const SERVICES = ["Plumbing", "HVAC", "Electricity"] as const;

export default function Home() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(false);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
      const res = await fetch(`${apiUrl}/analyze-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          service_needed: service,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail ?? `Server error (${res.status})`);
      }

      await res.json();
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-14 px-4">
      <div className="w-full max-w-xl">

        {/* Hero header */}
        <div className="mb-10 text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl mb-5 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f59e0b22, #ea580c22)", border: "2px solid #f59e0b44" }}>
            <Image
              src="/logo.png"
              alt="Mike's Every Task logo"
              width={112}
              height={112}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Mike&apos;s Every Task
          </h1>
          <p className="mt-2 text-base font-medium" style={{ color: "#f59e0b" }}>
            Plumbing · HVAC · Electricity
          </p>
          <a
            href="https://monbusinessapp.com/business/470/Mikes%20Every%20Task"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
          >
            <span className="border-b border-slate-600 group-hover:border-amber-400 transition-colors">
              See our portfolio of services
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-slate-700/60" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">Request a Service</span>
          <div className="flex-1 h-px bg-slate-700/60" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-700/60 p-8 space-y-5 backdrop-blur-sm"
          style={{ background: "rgba(15,23,42,0.7)" }}
        >
          <div>
            <label className="block text-sm font-semibold text-slate-100 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full rounded-lg border border-slate-600/60 bg-slate-800/70 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition"
              style={{ "--tw-ring-color": "#f59e0b" } as React.CSSProperties}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f59e0b")}
              onBlur={(e) => (e.target.style.boxShadow = "")}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-100 mb-1.5">
              Service Needed
            </label>
            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-lg border border-slate-600/60 bg-slate-800/70 px-4 py-2.5 text-sm text-white focus:outline-none transition appearance-none cursor-pointer"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.75rem center", backgroundSize: "1.25em 1.25em", paddingRight: "2.5rem" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f59e0b")}
              onBlur={(e) => (e.target.style.boxShadow = "")}
            >
              <option value="" disabled style={{ color: "#6b7280" }}>Select a service...</option>
              {SERVICES.map((s) => (
                <option key={s} value={s} style={{ background: "#1e293b", color: "#fff" }}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-100 mb-1.5">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your situation or what you need help with..."
              className="w-full rounded-lg border border-slate-600/60 bg-slate-800/70 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition resize-none"
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #f59e0b")}
              onBlur={(e) => (e.target.style.boxShadow = "")}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-3 text-sm font-bold text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: loading ? "#92400e" : "linear-gradient(135deg, #f59e0b, #ea580c)" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Analyzing your request...
              </span>
            ) : (
              "Submit Request"
            )}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-4 rounded-lg border border-red-700/50 bg-red-950/50 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Success */}
        {submitted && (
          <div className="mt-6 rounded-2xl border border-green-700/50 bg-green-950/50 p-8 text-center space-y-2">
            <p className="text-lg font-bold text-green-300">Request received!</p>
            <p className="text-sm text-slate-300">
              We&apos;ve got your details and will be in touch shortly.
            </p>
          </div>
        )}

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Mike&apos;s Every Task. All rights reserved.
        </p>
      </div>
    </main>
  );
}
