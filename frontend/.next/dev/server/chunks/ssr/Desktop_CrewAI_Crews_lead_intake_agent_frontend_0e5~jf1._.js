module.exports = [
"[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const qualityConfig = {
    hot: {
        label: "Hot Lead",
        bg: "bg-red-950/60",
        text: "text-red-300",
        dot: "bg-red-400",
        border: "border-red-700/50",
        glow: "shadow-red-900/40"
    },
    warm: {
        label: "Warm Lead",
        bg: "bg-amber-950/60",
        text: "text-amber-300",
        dot: "bg-amber-400",
        border: "border-amber-700/50",
        glow: "shadow-amber-900/40"
    },
    cold: {
        label: "Cold Lead",
        bg: "bg-blue-950/60",
        text: "text-blue-300",
        dot: "bg-blue-400",
        border: "border-blue-700/50",
        glow: "shadow-blue-900/40"
    }
};
const SERVICES = [
    "Plumbing",
    "HVAC",
    "Electricity"
];
function Home() {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);
        try {
            const res = await fetch("http://localhost:8000/analyze-lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    service_needed: service,
                    message
                })
            });
            if (!res.ok) {
                const data = await res.json().catch(()=>({}));
                throw new Error(data.detail ?? `Server error (${res.status})`);
            }
            const data = await res.json();
            setResult(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally{
            setLoading(false);
        }
    };
    const q = result ? qualityConfig[result.lead_quality] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col items-center justify-start py-14 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5",
                            style: {
                                background: "linear-gradient(135deg, #f59e0b, #ea580c)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-8 h-8 text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-extrabold tracking-tight text-white",
                            children: "Mike's Every Task"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-base font-medium",
                            style: {
                                color: "#f59e0b"
                            },
                            children: "Plumbing · HVAC · Electricity"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-slate-700/60"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-widest text-slate-500",
                            children: "Request a Service"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-slate-700/60"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "rounded-2xl border border-slate-700/60 p-8 space-y-5 backdrop-blur-sm",
                    style: {
                        background: "rgba(15,23,42,0.7)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-slate-300 mb-1.5",
                                    children: "Your Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    placeholder: "e.g. Jane Doe",
                                    className: "w-full rounded-lg border border-slate-600/60 bg-slate-800/70 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition",
                                    style: {
                                        "--tw-ring-color": "#f59e0b"
                                    },
                                    onFocus: (e)=>e.target.style.boxShadow = "0 0 0 2px #f59e0b",
                                    onBlur: (e)=>e.target.style.boxShadow = ""
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-slate-300 mb-1.5",
                                    children: "Service Needed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    required: true,
                                    value: service,
                                    onChange: (e)=>setService(e.target.value),
                                    className: "w-full rounded-lg border border-slate-600/60 bg-slate-800/70 px-4 py-2.5 text-sm text-white focus:outline-none transition appearance-none cursor-pointer",
                                    style: {
                                        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 0.75rem center",
                                        backgroundSize: "1.25em 1.25em",
                                        paddingRight: "2.5rem"
                                    },
                                    onFocus: (e)=>e.target.style.boxShadow = "0 0 0 2px #f59e0b",
                                    onBlur: (e)=>e.target.style.boxShadow = "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            style: {
                                                color: "#6b7280"
                                            },
                                            children: "Select a service..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        SERVICES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                style: {
                                                    background: "#1e293b",
                                                    color: "#fff"
                                                },
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-slate-300 mb-1.5",
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    required: true,
                                    rows: 4,
                                    value: message,
                                    onChange: (e)=>setMessage(e.target.value),
                                    placeholder: "Describe your situation or what you need help with...",
                                    className: "w-full rounded-lg border border-slate-600/60 bg-slate-800/70 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition resize-none",
                                    onFocus: (e)=>e.target.style.boxShadow = "0 0 0 2px #f59e0b",
                                    onBlur: (e)=>e.target.style.boxShadow = ""
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full rounded-lg py-3 text-sm font-bold text-white transition disabled:opacity-50 disabled:cursor-not-allowed",
                            style: {
                                background: loading ? "#92400e" : "linear-gradient(135deg, #f59e0b, #ea580c)"
                            },
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "animate-spin h-4 w-4 text-white",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8v8H4z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this),
                                    "Analyzing your request..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this) : "Submit Request"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-lg border border-red-700/50 bg-red-950/50 px-4 py-3 text-sm text-red-300",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this),
                result && q && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mt-6 rounded-2xl border p-8 space-y-6 ${q.border} backdrop-blur-sm`,
                    style: {
                        background: "rgba(15,23,42,0.75)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${q.bg} ${q.text} ${q.border}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `w-2 h-2 rounded-full ${q.dot}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        q.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-500",
                                    children: "AI Classification"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold uppercase tracking-widest mb-2",
                                    style: {
                                        color: "#f59e0b"
                                    },
                                    children: "Intent Summary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-300 leading-relaxed",
                                    children: result.summary
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold uppercase tracking-widest mb-2",
                                    style: {
                                        color: "#f59e0b"
                                    },
                                    children: "Suggested Response"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg px-4 py-3 border border-slate-700/50 bg-slate-800/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-300 leading-relaxed italic",
                                        children: [
                                            "“",
                                            result.suggested_response,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer text-xs text-slate-500 hover:text-slate-400 select-none",
                                    children: "View raw JSON"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-3 text-xs bg-slate-900/70 border border-slate-700/50 rounded-lg p-4 overflow-auto text-slate-400",
                                    children: JSON.stringify(result, null, 2)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-10 text-center text-xs text-slate-600",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        "Mike's Every Task. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=Desktop_CrewAI_Crews_lead_intake_agent_frontend_0e5~jf1._.js.map