(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SERVICES = [
    "Plumbing",
    "HVAC",
    "Electricity"
];
function Home() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSubmitted(false);
        try {
            const apiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
            const res = await fetch(`${apiUrl}/analyze-lead`, {
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
            await res.json();
            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col items-center justify-start py-14 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center justify-center w-28 h-28 rounded-2xl mb-5 overflow-hidden",
                            style: {
                                background: "linear-gradient(135deg, #f59e0b22, #ea580c22)",
                                border: "2px solid #f59e0b44"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Mike's Every Task logo",
                                width: 112,
                                height: 112,
                                className: "object-contain w-full h-full",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-extrabold tracking-tight text-white",
                            children: "Mike's Every Task"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-base font-medium",
                            style: {
                                color: "#f59e0b"
                            },
                            children: "Plumbing · HVAC · Electricity"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://monbusinessapp.com/business/470/Mikes%20Every%20Task",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-slate-300 hover:text-white transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "border-b border-slate-600 group-hover:border-amber-400 transition-colors",
                                    children: "See our portfolio of services"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-slate-700/60"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-widest text-slate-300",
                            children: "Request a Service"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-px bg-slate-700/60"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "rounded-2xl border border-slate-700/60 p-8 space-y-5 backdrop-blur-sm",
                    style: {
                        background: "rgba(15,23,42,0.7)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-slate-100 mb-1.5",
                                    children: "Your Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-slate-100 mb-1.5",
                                    children: "Service Needed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            style: {
                                                color: "#6b7280"
                                            },
                                            children: "Select a service..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        SERVICES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                style: {
                                                    background: "#1e293b",
                                                    color: "#fff"
                                                },
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-slate-100 mb-1.5",
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full rounded-lg py-3 text-sm font-bold text-white transition disabled:opacity-50 disabled:cursor-not-allowed",
                            style: {
                                background: loading ? "#92400e" : "linear-gradient(135deg, #f59e0b, #ea580c)"
                            },
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "animate-spin h-4 w-4 text-white",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8v8H4z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    "Analyzing your request..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this) : "Submit Request"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-lg border border-red-700/50 bg-red-950/50 px-4 py-3 text-sm text-red-300",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this),
                submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-2xl border border-green-700/50 bg-green-950/50 p-8 text-center space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-bold text-green-300",
                            children: "Request received!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-300",
                            children: "We've got your details and will be in touch shortly."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$CrewAI$2f$Crews$2f$lead_intake_agent$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-10 text-center text-xs text-slate-400",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        "Mike's Every Task. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/CrewAI/Crews/lead_intake_agent/frontend/app/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Home, "ZvT9WT47PirHoC0NPQWUha1CBeU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_CrewAI_Crews_lead_intake_agent_frontend_app_page_tsx_003_u~r._.js.map