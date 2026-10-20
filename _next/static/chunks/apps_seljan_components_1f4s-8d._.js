(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/seljan/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/lib/analytics/attribution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/lib/analytics/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function emailFallback(formData) {
    const department = String(formData.get("department") ?? "General");
    const subject = encodeURIComponent(`Seljan inquiry — ${department}`);
    const body = encodeURIComponent([
        `Name: ${String(formData.get("name") ?? "").trim()}`,
        `Company: ${String(formData.get("company") ?? "").trim()}`,
        `Email: ${String(formData.get("email") ?? "").trim()}`,
        `Phone: ${String(formData.get("phone") ?? "").trim()}`,
        `Department: ${department}`,
        "",
        String(formData.get("message") ?? "").trim()
    ].join("\n"));
    return `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.email}?subject=${subject}&body=${body}`;
}
function responseError(value) {
    if (typeof value === "object" && value !== null && "error" in value && typeof value.error === "string") {
        return value.error;
    }
    return "We couldn't send your inquiry. Please try again or use the email option below.";
}
function ContactForm() {
    _s();
    const startedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const trackedStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [submission, setSubmission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        kind: "idle"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "contact-form reveal reveal-delay-1",
        id: "contact-form",
        onFocusCapture: ()=>{
            if (startedAt.current === 0) startedAt.current = Date.now();
            if (!trackedStart.current) {
                trackedStart.current = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("contact_start");
            }
        },
        onSubmit: async (event)=>{
            event.preventDefault();
            const form = event.currentTarget;
            if (!form.reportValidity() || submission.kind === "submitting") return;
            const formData = new FormData(form);
            const fallbackHref = emailFallback(formData);
            setSubmission({
                kind: "submitting"
            });
            try {
                const response = await fetch("/api/contact", {
                    body: JSON.stringify({
                        attribution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentInquiryAttribution"])(),
                        company: String(formData.get("company") ?? ""),
                        department: String(formData.get("department") ?? ""),
                        email: String(formData.get("email") ?? ""),
                        message: String(formData.get("message") ?? ""),
                        name: String(formData.get("name") ?? ""),
                        phone: String(formData.get("phone") ?? ""),
                        startedAt: startedAt.current || Date.now(),
                        website: String(formData.get("website") ?? "")
                    }),
                    headers: {
                        "content-type": "application/json"
                    },
                    method: "POST"
                });
                const result = await response.json();
                if (!response.ok) throw new Error(responseError(result));
                if (typeof result !== "object" || result === null || !("reference" in result) || typeof result.reference !== "string") {
                    throw new Error("We couldn't confirm your inquiry. Please contact us directly.");
                }
                const duplicate = "duplicate" in result && result.duplicate === true;
                form.reset();
                startedAt.current = Date.now();
                trackedStart.current = false;
                if (!duplicate && response.status === 201) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("generate_lead", {
                        department: String(formData.get("department") ?? "General")
                    });
                }
                setSubmission({
                    kind: "success",
                    reference: result.reference
                });
            } catch (caught) {
                setSubmission({
                    fallbackHref,
                    kind: "error",
                    message: caught instanceof Error ? caught.message : responseError(caught)
                });
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "name",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "name",
                                name: "name",
                                type: "text",
                                autoComplete: "name",
                                maxLength: 100,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "company",
                                children: "Company"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "company",
                                name: "company",
                                type: "text",
                                autoComplete: "organization",
                                maxLength: 150
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                maxLength: 254,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "phone",
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "phone",
                                name: "phone",
                                type: "tel",
                                autoComplete: "tel",
                                maxLength: 40
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-field full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "department",
                                children: "Department"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "department",
                                name: "department",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Metals",
                                        children: "Metals manufacturing"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Plastics",
                                        children: "Plastics manufacturing"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Tooling",
                                        children: "Tool & die / molds"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "General",
                                        children: "General inquiry"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-field full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "message",
                                children: "Project details"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "message",
                                name: "message",
                                placeholder: "Part type, materials, volume, drawings available...",
                                maxLength: 10_000,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-honeypot",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "website",
                                children: "Website"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "website",
                                name: "website",
                                type: "text",
                                autoComplete: "off",
                                maxLength: 200,
                                tabIndex: -1
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-primary",
                    disabled: submission.kind === "submitting",
                    type: "submit",
                    children: submission.kind === "submitting" ? "Sending…" : "Send inquiry"
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            submission.kind === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-note form-note-success",
                "aria-live": "polite",
                children: [
                    "Thanks — your inquiry is in our shared inbox. Reference: ",
                    submission.reference,
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this) : submission.kind === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-note form-note-error",
                "aria-live": "assertive",
                children: [
                    submission.message,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: submission.fallbackHref,
                        children: [
                            "Open an email to ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-note",
                "aria-live": "polite",
                children: [
                    "We keep submissions for up to two years so we can respond and follow up. Or call ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.phone,
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/ContactForm.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/ContactForm.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "XVWjdHaD3IJ4EeU1E3I4rJ27n2U=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/components/HowWeWork.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowWeWork",
    ()=>HowWeWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const steps = [
    {
        title: "Consultation & Design",
        copy: "We review your specs, volumes, and materials, then design for manufacturability in plastics, metals, or both.",
        image: "/images/team-work.webp",
        alt: "Seljan team reviewing a manufacturing project",
        width: 1600,
        height: 1067
    },
    {
        title: "Prototyping",
        copy: "In-house tooling and sample parts let you validate fit, finish, and function before a production run.",
        image: "/images/cnc-machine.webp",
        alt: "CNC equipment used to build prototype tooling",
        width: 1600,
        height: 990
    },
    {
        title: "Mass Production",
        copy: "Rotational molding, injection molding, and metal fabrication cells scale with your order — plant hours 24/6.",
        image: "/images/factory-floor.webp",
        alt: "Production running on the Seljan factory floor",
        width: 1600,
        height: 1067
    },
    {
        title: "Logistics & Delivery",
        copy: "Finishing, staging, and shipping leave from our Lake Mills campus so parts arrive ready to use.",
        image: "/images/warehouse.webp",
        alt: "Warehouse staging and shipping at Seljan",
        width: 1600,
        height: 1067
    }
];
function HowWeWork() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "process-band",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "How We Work"
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "process-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "process-photo",
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: index === active ? "is-active" : undefined,
                                    src: step.image,
                                    alt: step.alt,
                                    width: step.width,
                                    height: step.height,
                                    sizes: "(max-width: 900px) calc(100vw - 3rem), 42vw"
                                }, step.image, false, {
                                    fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "process-steps",
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: index === active ? "is-active" : undefined,
                                    tabIndex: 0,
                                    onMouseEnter: ()=>setActive(index),
                                    onFocus: ()=>setActive(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Step ",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: step.copy
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.title, true, {
                                    fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/seljan/components/HowWeWork.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(HowWeWork, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c = HowWeWork;
var _c;
__turbopack_context__.k.register(_c, "HowWeWork");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/components/StoryInNumbers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoryInNumbers",
    ()=>StoryInNumbers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/content/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const stats = [
    {
        target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearsInBusiness"])(),
        decimals: 0,
        suffix: "",
        grouping: false,
        label: "Years of Experience",
        copy: "Seljan Company has been a manufacturer since 1967. We are locally family owned and continue to grow through the years."
    },
    {
        target: 99.7,
        decimals: 1,
        suffix: "%",
        grouping: false,
        label: "On-Time Delivery Rate",
        copy: "We make sure our customers are completely satisfied and getting their products on time."
    },
    {
        target: 3000,
        decimals: 0,
        suffix: "+",
        grouping: true,
        label: "Plastic & Metal Parts",
        copy: "Seljan has produced over 1,000 different plastic parts and 400 different metal parts — more than 3,000 in all."
    },
    {
        target: 502,
        decimals: 0,
        suffix: "k",
        grouping: false,
        label: "Sq. Ft. Industrial Space",
        copy: "Our facility is capable of handling large projects. We continue to upgrade our machines and expand to produce more."
    }
];
function formatCount(value, decimals, grouping, suffix) {
    const rounded = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
    const [whole, fraction] = rounded.split(".");
    const grouped = grouping ? Number(whole).toLocaleString("en-US") : whole;
    return `${grouped}${fraction ? `.${fraction}` : ""}${suffix}`;
}
function easeOutCubic(t) {
    return 1 - (1 - t) ** 3;
}
function StoryInNumbers() {
    _s();
    const section = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryInNumbers.useEffect": ()=>{
            reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const node = section.current;
            if (!node) return;
            let frame = 0;
            const observer = new IntersectionObserver({
                "StoryInNumbers.useEffect": ([entry])=>{
                    if (!entry?.isIntersecting) return;
                    observer.disconnect();
                    if (reduceMotion.current) {
                        setProgress(1);
                        return;
                    }
                    const duration = 1600;
                    const start = performance.now();
                    const tick = {
                        "StoryInNumbers.useEffect.tick": (now)=>{
                            const next = Math.min(1, (now - start) / duration);
                            setProgress(easeOutCubic(next));
                            if (next < 1) frame = requestAnimationFrame(tick);
                        }
                    }["StoryInNumbers.useEffect.tick"];
                    frame = requestAnimationFrame(tick);
                }
            }["StoryInNumbers.useEffect"], {
                threshold: 0.35
            });
            observer.observe(node);
            return ({
                "StoryInNumbers.useEffect": ()=>{
                    observer.disconnect();
                    cancelAnimationFrame(frame);
                }
            })["StoryInNumbers.useEffect"];
        }
    }["StoryInNumbers.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: section,
        className: "band-light numbers-band",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Our Story in Numbers"
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "numbers-grid",
                    children: stats.map((stat)=>{
                        const display = formatCount(stat.target * progress, stat.decimals, stat.grouping, stat.suffix);
                        const final = formatCount(stat.target, stat.decimals, stat.grouping, stat.suffix);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "numbers-value",
                                    "aria-label": final,
                                    children: display
                                }, void 0, false, {
                                    fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "numbers-copy",
                                    children: stat.copy
                                }, void 0, false, {
                                    fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/seljan/components/StoryInNumbers.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(StoryInNumbers, "iWUO3Hih5nOpW5W/zuQU1QPvOzI=");
_c = StoryInNumbers;
var _c;
__turbopack_context__.k.register(_c, "StoryInNumbers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_seljan_components_1f4s-8d._.js.map