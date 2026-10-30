(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/seljan/components/EmploymentForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmploymentForm",
    ()=>EmploymentForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/content/employment-form.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/content/employment.ts [app-client] (ecmascript)");
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
;
;
function today() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${now.getFullYear()}-${month}-${day}`;
}
function responseError(value, fallback) {
    if (typeof value === "object" && value !== null && "error" in value && typeof value.error === "string") {
        return value.error;
    }
    return fallback;
}
function Field({ children, full = false, label, name }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: full ? "form-field full" : "form-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: `employment-${name}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = Field;
function TextField({ full, label, name, ...input }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
        full: full,
        label: label,
        name: name,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: `employment-${name}`,
            name: name,
            type: "text",
            ...input
        }, void 0, false, {
            fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c1 = TextField;
function YesNo({ label, language, name }) {
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employmentFormCopy"][language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "form-field full form-choice-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-choices",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `employment-${name}-yes`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `employment-${name}-yes`,
                                name: name,
                                type: "radio",
                                value: "yes"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            copy.yes
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `employment-${name}-no`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `employment-${name}-no`,
                                name: name,
                                type: "radio",
                                value: "no"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            copy.no
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c2 = YesNo;
function EducationBlock({ language, prefix, title }) {
    const fields = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employmentFormCopy"][language].fields;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "employment-subblock",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        full: true,
                        label: fields.school,
                        maxLength: 200,
                        name: `${prefix}School`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.course,
                        maxLength: 120,
                        name: `${prefix}Course`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.years,
                        maxLength: 20,
                        name: `${prefix}Years`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        full: true,
                        label: fields.diploma,
                        maxLength: 120,
                        name: `${prefix}Diploma`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c3 = EducationBlock;
function JobBlock({ index, language }) {
    const fields = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employmentFormCopy"][language].fields;
    const prefix = `job${index}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "employment-subblock",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: [
                    index,
                    ". ",
                    fields.employer
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        full: true,
                        label: fields.employer,
                        maxLength: 120,
                        name: `${prefix}Employer`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        full: true,
                        label: fields.address,
                        maxLength: 200,
                        name: `${prefix}Address`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.jobPhone,
                        maxLength: 40,
                        name: `${prefix}Phone`,
                        type: "tel"
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.jobTitle,
                        maxLength: 120,
                        name: `${prefix}Title`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.supervisor,
                        maxLength: 120,
                        name: `${prefix}Supervisor`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.from,
                        maxLength: 40,
                        name: `${prefix}From`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.to,
                        maxLength: 40,
                        name: `${prefix}To`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.startPay,
                        maxLength: 40,
                        name: `${prefix}StartPay`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                        label: fields.finalPay,
                        maxLength: 40,
                        name: `${prefix}FinalPay`
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        full: true,
                        label: fields.workPerformed,
                        name: `${prefix}Work`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: `employment-${prefix}Work`,
                            maxLength: 800,
                            name: `${prefix}Work`,
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        full: true,
                        label: fields.reasonLeaving,
                        name: `${prefix}Reason`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: `employment-${prefix}Reason`,
                            maxLength: 800,
                            name: `${prefix}Reason`,
                            rows: 2
                        }, void 0, false, {
                            fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c4 = JobBlock;
function EmploymentForm() {
    _s();
    const startedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const trackedStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const [submission, setSubmission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        kind: "idle"
    });
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employmentFormCopy"][language];
    const fields = copy.fields;
    const defaultDate = today();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmploymentForm.useEffect": ()=>{
            if (!open) return;
            formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }["EmploymentForm.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "employment-apply-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "employment-apply-open",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "aria-controls": "employment-form",
                    "aria-expanded": open,
                    className: "btn btn-primary",
                    onClick: ()=>setOpen(true),
                    type: "button",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employment"].submitHeading
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "contact-form employment-form",
                id: "employment-form",
                ref: formRef,
                onFocusCapture: ()=>{
                    if (startedAt.current === 0) startedAt.current = Date.now();
                    if (!trackedStart.current) {
                        trackedStart.current = true;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("contact_start", {
                            form: "employment"
                        });
                    }
                },
                onSubmit: async (event)=>{
                    event.preventDefault();
                    const form = event.currentTarget;
                    if (!form.reportValidity() || submission.kind === "submitting") return;
                    const formData = new FormData(form);
                    formData.set("attribution", JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentInquiryAttribution"])()));
                    formData.set("startedAt", String(startedAt.current || Date.now()));
                    setSubmission({
                        kind: "submitting"
                    });
                    try {
                        const response = await fetch("/api/employment", {
                            body: formData,
                            method: "POST"
                        });
                        const result = await response.json();
                        if (!response.ok) throw new Error(responseError(result, copy.errorFallback));
                        if (typeof result !== "object" || result === null || !("reference" in result) || typeof result.reference !== "string") {
                            throw new Error(copy.errorFallback);
                        }
                        const duplicate = "duplicate" in result && result.duplicate === true;
                        form.reset();
                        startedAt.current = Date.now();
                        trackedStart.current = false;
                        if (!duplicate && response.status === 201) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("generate_lead", {
                                department: "Employment"
                            });
                        }
                        setSubmission({
                            kind: "success",
                            reference: result.reference
                        });
                    } catch (caught) {
                        setSubmission({
                            kind: "error",
                            message: caught instanceof Error ? caught.message : responseError(caught, copy.errorFallback)
                        });
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "employment-form-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "employment-submit-heading",
                                        children: copy.heading
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 247,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "employment-submit-help",
                                        children: copy.help
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 248,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 246,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "employment-lang",
                                role: "group",
                                "aria-label": "Application language",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-pressed": language === "en",
                                        className: "btn btn-ghost",
                                        onClick: ()=>setLanguage("en"),
                                        type: "button",
                                        children: "English"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 251,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-pressed": language === "es",
                                        className: "btn btn-ghost",
                                        onClick: ()=>setLanguage("es"),
                                        type: "button",
                                        children: "Español"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 259,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 250,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 245,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "language",
                        type: "hidden",
                        value: language
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 269,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "employment-legal",
                        children: copy.eVerify
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 270,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "employment-legal",
                        children: copy.equalOpportunity
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 271,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "employment-ssn-note",
                        children: copy.ssnNote
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 272,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: copy.sections.position
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 275,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "organization-title",
                                        full: true,
                                        label: fields.position,
                                        maxLength: 120,
                                        name: "position",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 277,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: fields.shift,
                                        maxLength: 120,
                                        name: "shift"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 285,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        defaultValue: defaultDate,
                                        label: fields.applicationDate,
                                        name: "applicationDate",
                                        type: "date"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 286,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 276,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: "form-field full form-choice-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        children: copy.heardHeading
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 294,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-choices",
                                        children: [
                                            [
                                                "heardAdvertisement",
                                                copy.heard.advertisement
                                            ],
                                            [
                                                "heardFriend",
                                                copy.heard.friend
                                            ],
                                            [
                                                "heardWalkIn",
                                                copy.heard.walkIn
                                            ],
                                            [
                                                "heardAgency",
                                                copy.heard.agency
                                            ],
                                            [
                                                "heardRelative",
                                                copy.heard.relative
                                            ],
                                            [
                                                "heardOther",
                                                copy.heard.other
                                            ]
                                        ].map(([name, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: `employment-${name}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: `employment-${name}`,
                                                        name: name,
                                                        type: "checkbox"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 17
                                                    }, this),
                                                    label
                                                ]
                                            }, name, true, {
                                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 295,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 293,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: copy.friendName,
                                        maxLength: 120,
                                        name: "heardFriendName"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 314,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: copy.otherDetail,
                                        maxLength: 120,
                                        name: "heardOtherDetail"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 315,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 313,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 274,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: copy.sections.personal
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 320,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "family-name",
                                        label: fields.lastName,
                                        maxLength: 80,
                                        name: "lastName",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 322,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "given-name",
                                        label: fields.firstName,
                                        maxLength: 80,
                                        name: "firstName",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 329,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "additional-name",
                                        full: true,
                                        label: fields.middleName,
                                        maxLength: 80,
                                        name: "middleName"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 336,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "street-address",
                                        full: true,
                                        label: fields.street,
                                        maxLength: 200,
                                        name: "street"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 343,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "address-level2",
                                        label: fields.city,
                                        maxLength: 120,
                                        name: "city"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 350,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "address-level1",
                                        label: fields.state,
                                        maxLength: 40,
                                        name: "state"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 351,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "postal-code",
                                        label: fields.zip,
                                        maxLength: 20,
                                        name: "zip"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 352,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "tel",
                                        label: fields.phone,
                                        maxLength: 40,
                                        name: "phone",
                                        required: true,
                                        type: "tel"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 353,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "email",
                                        label: fields.email,
                                        maxLength: 254,
                                        name: "email",
                                        required: true,
                                        type: "email"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 361,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "bday",
                                        label: fields.dateOfBirth,
                                        name: "dateOfBirth",
                                        type: "date"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 369,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 321,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 319,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: copy.sections.background
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 374,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesNo, {
                                        label: fields.under18,
                                        language: language,
                                        name: "under18"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 376,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesNo, {
                                        label: fields.appliedBefore,
                                        language: language,
                                        name: "appliedBefore"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 377,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: fields.appliedBeforeDate,
                                        maxLength: 40,
                                        name: "appliedBeforeDate"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 378,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesNo, {
                                        label: fields.employedBefore,
                                        language: language,
                                        name: "employedBefore"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 379,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: fields.employedBeforeDate,
                                        maxLength: 40,
                                        name: "employedBeforeDate"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 380,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesNo, {
                                        label: fields.currentlyEmployed,
                                        language: language,
                                        name: "currentlyEmployed"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 381,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesNo, {
                                        label: fields.contactEmployer,
                                        language: language,
                                        name: "contactEmployer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 382,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: fields.eligibleDate,
                                        name: "eligibleDate",
                                        type: "date"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 383,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "form-field full form-choice-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                children: fields.schedule
                                            }, void 0, false, {
                                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                lineNumber: 385,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-choices",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "employment-schedule-fulltime",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "employment-schedule-fulltime",
                                                                name: "schedule",
                                                                type: "radio",
                                                                value: "fulltime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 17
                                                            }, this),
                                                            fields.fulltime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "employment-schedule-parttime",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "employment-schedule-parttime",
                                                                name: "schedule",
                                                                type: "radio",
                                                                value: "parttime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 17
                                                            }, this),
                                                            fields.parttime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                                lineNumber: 386,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 384,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesNo, {
                                        label: fields.injury,
                                        language: language,
                                        name: "injury"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 397,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        full: true,
                                        label: fields.injuryDescribe,
                                        name: "injuryDescribe",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "employment-injuryDescribe",
                                            maxLength: 800,
                                            name: "injuryDescribe",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                            lineNumber: 399,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 398,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YesNo, {
                                        label: fields.felony,
                                        language: language,
                                        name: "felony"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 401,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        full: true,
                                        label: fields.felonyExplain,
                                        name: "felonyExplain",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "employment-felonyExplain",
                                            maxLength: 800,
                                            name: "felonyExplain",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                            lineNumber: 403,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 402,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 375,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 373,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: copy.sections.emergency
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 409,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: fields.emergencyName,
                                        maxLength: 120,
                                        name: "emergencyName"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 411,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        label: fields.emergencyRelationship,
                                        maxLength: 120,
                                        name: "emergencyRelationship"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 412,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        full: true,
                                        label: fields.emergencyPhone,
                                        maxLength: 40,
                                        name: "emergencyPhone",
                                        type: "tel"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 417,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 410,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 408,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: copy.sections.education
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 428,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EducationBlock, {
                                language: language,
                                prefix: "highSchool",
                                title: fields.highSchool
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 429,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EducationBlock, {
                                language: language,
                                prefix: "college",
                                title: fields.college
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 430,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EducationBlock, {
                                language: language,
                                prefix: "tradeSchool",
                                title: fields.tradeSchool
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 431,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 427,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: copy.sections.experience
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 435,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobBlock, {
                                index: 1,
                                language: language
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 436,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobBlock, {
                                index: 2,
                                language: language
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 437,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobBlock, {
                                index: 3,
                                language: language
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 438,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 434,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "form-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: copy.sections.certify
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 442,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "employment-legal",
                                children: copy.certification
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 443,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-certify",
                                htmlFor: "employment-certify",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "employment-certify",
                                        name: "certify",
                                        required: true,
                                        type: "checkbox"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 445,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: copy.certifyLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 446,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 444,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        autoComplete: "name",
                                        label: fields.signature,
                                        maxLength: 100,
                                        name: "signature",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 449,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
                                        defaultValue: defaultDate,
                                        label: fields.signatureDate,
                                        name: "signatureDate",
                                        type: "date"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 456,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 448,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-field full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "employment-resume",
                                        children: copy.resumeOptional
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 464,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "employment-resume",
                                        name: "resume",
                                        type: "file",
                                        accept: "application/pdf,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 465,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 463,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-honeypot",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "employment-website",
                                        children: "Website"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 473,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "employment-website",
                                        name: "website",
                                        type: "text",
                                        autoComplete: "off",
                                        maxLength: 200,
                                        tabIndex: -1
                                    }, void 0, false, {
                                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                        lineNumber: 474,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 472,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 441,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary",
                            disabled: submission.kind === "submitting",
                            type: "submit",
                            children: submission.kind === "submitting" ? copy.submitting : copy.submit
                        }, void 0, false, {
                            fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                            lineNumber: 486,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 485,
                        columnNumber: 7
                    }, this),
                    submission.kind === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-note form-note-success",
                        "aria-live": "polite",
                        children: copy.success.replace("{reference}", submission.reference)
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this) : submission.kind === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-note form-note-error",
                        "aria-live": "assertive",
                        children: [
                            submission.message,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employmentHrEmail"]}`,
                                children: [
                                    "Email ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$employment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employmentHrEmail"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            " ",
                            "or bring the form to ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.street,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-note",
                        "aria-live": "polite",
                        children: copy.orCall.replace("{phone}", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.phone)
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
                lineNumber: 192,
                columnNumber: 5
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/EmploymentForm.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(EmploymentForm, "BBXmlSlR/oXKQOXnY8kTKOEmNbI=");
_c5 = EmploymentForm;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "TextField");
__turbopack_context__.k.register(_c2, "YesNo");
__turbopack_context__.k.register(_c3, "EducationBlock");
__turbopack_context__.k.register(_c4, "JobBlock");
__turbopack_context__.k.register(_c5, "EmploymentForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/content/employment-form.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * English / Spanish labels for the on-page employment application.
 * Spanish is written for the web form, not copied from the paper PDF's typos.
 */ __turbopack_context__.s([
    "employmentFormCopy",
    ()=>employmentFormCopy
]);
const employmentFormCopy = {
    en: {
        languageName: "English",
        otherLanguage: "Español",
        heading: "Apply online",
        help: "Fill this out here — no need to download a PDF. A resume is optional. We do not collect Social Security numbers on this form.",
        eVerify: "We participate in E-Verify and will provide the federal government with your Form I-9 information to confirm that you are authorized to work in the U.S.",
        equalOpportunity: "We consider applicants for all positions without regard to race, color, religion, creed, gender, national origin, age, disability, marital or veteran status, sexual orientation, or any other legally protected status.",
        ssnNote: "Do not include your Social Security number. If we hire you, HR will collect it separately.",
        submit: "Send application",
        submitting: "Sending…",
        success: "Thanks — your application is in. Reference: {reference}. We will follow up if it is a fit.",
        errorFallback: "We couldn't send your application. Please try again or email HR.",
        orCall: "Or call {phone}.",
        resumeOptional: "Resume (optional)",
        sections: {
            position: "Position",
            personal: "Personal information",
            background: "Background",
            emergency: "Emergency contact",
            education: "Education",
            experience: "Employment experience",
            certify: "Certification"
        },
        heardHeading: "How did you learn about us?",
        heard: {
            advertisement: "Advertisement",
            friend: "Friend",
            walkIn: "Walk-in",
            agency: "Employment agency",
            relative: "Relative",
            other: "Other"
        },
        friendName: "Friend's name",
        otherDetail: "Please specify",
        yes: "Yes",
        no: "No",
        fields: {
            position: "Position applied for",
            shift: "Desired shift",
            applicationDate: "Date of application",
            lastName: "Last name",
            firstName: "First name",
            middleName: "Middle name",
            street: "Street address",
            city: "City",
            state: "State",
            zip: "ZIP code",
            phone: "Phone",
            email: "Email",
            dateOfBirth: "Date of birth",
            under18: "If you are under 18, can you provide proof of eligibility to work?",
            appliedBefore: "Have you ever filed an application with us before?",
            appliedBeforeDate: "If yes, give date",
            employedBefore: "Have you ever been employed with us before?",
            employedBeforeDate: "If yes, give date",
            currentlyEmployed: "Are you currently employed?",
            contactEmployer: "May we contact your current employer?",
            eligibleDate: "On what date would you be eligible for work?",
            schedule: "Would you prefer to work",
            fulltime: "Full-time",
            parttime: "Part-time",
            injury: "Have you ever received compensation for injuries?",
            injuryDescribe: "If yes, describe",
            felony: "Have you been convicted of a felony in the last 7 years?",
            felonyExplain: "If yes, please explain",
            emergencyName: "Name",
            emergencyRelationship: "Relationship",
            emergencyPhone: "Telephone",
            school: "Name and address of school",
            course: "Course of study",
            years: "Years",
            diploma: "Diploma or degree",
            highSchool: "High school",
            college: "College",
            tradeSchool: "Trade school",
            employer: "Employer",
            address: "Address",
            jobPhone: "Telephone",
            jobTitle: "Job title",
            supervisor: "Supervisor",
            from: "From",
            to: "To",
            startPay: "Starting pay",
            finalPay: "Final pay",
            workPerformed: "Work performed",
            reasonLeaving: "Reason for leaving",
            signature: "Type your full name as your signature",
            signatureDate: "Date"
        },
        certification: "The facts set forth above in my application for employment are true and complete. I understand that if employed, false statements on this application shall be considered cause for dismissal. You are hereby authorized to make any investigation of my personal history and financial and credit record through any investigative or credit agencies or bureaus of your choice.",
        certifyLabel: "I agree to the certification above."
    },
    es: {
        languageName: "Español",
        otherLanguage: "English",
        heading: "Solicitar en línea",
        help: "Complete la solicitud aquí — no hace falta descargar un PDF. El currículum es opcional. No pedimos el número de Seguro Social en este formulario.",
        eVerify: "Participamos en E-Verify y proporcionaremos al gobierno federal la información de su Formulario I-9 para confirmar que está autorizado para trabajar en los EE. UU.",
        equalOpportunity: "Consideramos a los aspirantes para todos los puestos sin distinción de raza, color, religión, credo, género, origen nacional, edad, discapacidad, estado civil o de veterano, orientación sexual u otra condición protegida por la ley.",
        ssnNote: "No incluya su número de Seguro Social. Si lo contratamos, Recursos Humanos lo pedirá por separado.",
        submit: "Enviar solicitud",
        submitting: "Enviando…",
        success: "Gracias — recibimos su solicitud. Referencia: {reference}. Nos pondremos en contacto si hay una vacante adecuada.",
        errorFallback: "No pudimos enviar su solicitud. Inténtelo de nuevo o escriba a Recursos Humanos.",
        orCall: "O llame al {phone}.",
        resumeOptional: "Currículum (opcional)",
        sections: {
            position: "Puesto",
            personal: "Información personal",
            background: "Antecedentes",
            emergency: "Contacto de emergencia",
            education: "Educación",
            experience: "Experiencia laboral",
            certify: "Certificación"
        },
        heardHeading: "¿Cómo se enteró de nosotros?",
        heard: {
            advertisement: "Anuncio",
            friend: "Amigo",
            walkIn: "En persona",
            agency: "Agencia de empleo",
            relative: "Familiar",
            other: "Otro"
        },
        friendName: "Nombre del amigo",
        otherDetail: "Especifique",
        yes: "Sí",
        no: "No",
        fields: {
            position: "Puesto que solicita",
            shift: "Turno deseado",
            applicationDate: "Fecha de solicitud",
            lastName: "Apellido",
            firstName: "Nombre",
            middleName: "Segundo nombre",
            street: "Dirección",
            city: "Ciudad",
            state: "Estado",
            zip: "Código postal",
            phone: "Teléfono",
            email: "Correo electrónico",
            dateOfBirth: "Fecha de nacimiento",
            under18: "Si es menor de 18 años, ¿puede comprobar que es elegible para trabajar?",
            appliedBefore: "¿Ha solicitado empleo con nosotros antes?",
            appliedBeforeDate: "Si respondió sí, indique la fecha",
            employedBefore: "¿Ha trabajado con nosotros antes?",
            employedBeforeDate: "Si respondió sí, indique la fecha",
            currentlyEmployed: "¿Está empleado actualmente?",
            contactEmployer: "¿Podemos comunicarnos con su empleador actual?",
            eligibleDate: "¿A partir de qué fecha estaría disponible?",
            schedule: "Preferiría trabajar",
            fulltime: "Tiempo completo",
            parttime: "Medio tiempo",
            injury: "¿Ha recibido alguna vez compensación por lesiones?",
            injuryDescribe: "Si respondió sí, describa",
            felony: "¿Ha sido condenado por un delito grave en los últimos 7 años?",
            felonyExplain: "Si respondió sí, explique",
            emergencyName: "Nombre",
            emergencyRelationship: "Relación",
            emergencyPhone: "Teléfono",
            school: "Nombre y dirección de la escuela",
            course: "Estudios",
            years: "Años",
            diploma: "Diploma o título",
            highSchool: "Escuela secundaria",
            college: "Universidad",
            tradeSchool: "Escuela técnica",
            employer: "Empleador",
            address: "Dirección",
            jobPhone: "Teléfono",
            jobTitle: "Puesto",
            supervisor: "Supervisor",
            from: "Desde",
            to: "Hasta",
            startPay: "Pago inicial",
            finalPay: "Pago final",
            workPerformed: "Trabajo realizado",
            reasonLeaving: "Razón de salida",
            signature: "Escriba su nombre completo como firma",
            signatureDate: "Fecha"
        },
        certification: "Los datos de esta solicitud de empleo son verdaderos y completos. Entiendo que, de ser contratado, las declaraciones falsas en esta solicitud serán causa de despido. Autorizo cualquier investigación de mi historial personal y de crédito a través de las agencias que Seljan elija.",
        certifyLabel: "Acepto la certificación anterior."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/content/employment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Public Employment page copy and the two paper application PDFs
 * (for people who prefer to print and bring a form in).
 */ __turbopack_context__.s([
    "employment",
    ()=>employment,
    "employmentApplications",
    ()=>employmentApplications,
    "employmentHrEmail",
    ()=>employmentHrEmail
]);
const employmentHrEmail = "hr@seljan.com";
const employmentApplications = [
    {
        downloadName: "Seljan-employment-application.pdf",
        href: "/employment/application-english.pdf",
        id: "en",
        label: "English"
    },
    {
        downloadName: "Seljan-solicitud-de-empleo.pdf",
        href: "/employment/application-spanish.pdf",
        id: "es",
        label: "Spanish"
    }
];
const employment = {
    eyebrow: "Careers",
    title: "Work at Seljan",
    whyEyebrow: "Why Seljan",
    whyHeading: "A plant that still belongs here.",
    why: [
        "Seljan has been locally family owned since 1967. We are not a branch of a larger corporation — ownership still sits in Lake Mills, and the people making the calls live with the work.",
        "Most of our management team is from this town. That independence lets us think in decades: we invest in the plant, run metals and plastics on one campus, and treat every part as something we will still be proud of years from now."
    ],
    applyEyebrow: "Apply",
    applyHeading: "Ways to apply",
    applyLede: "Click Apply Online to fill out the application on this page. You can also download a paper copy, complete it, and bring it to the plant.",
    downloadHeading: "Prefer paper?",
    downloadHelp: "Download a blank English or Spanish form, fill it out, and drop it off at the address below.",
    submitHeading: "Apply Online",
    submitHelp: "This is the same application as the paper form. A resume is optional. Do not include your Social Security number — HR will collect that separately if you are hired. We keep submissions for up to two years."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_seljan_139hyhm._.js.map