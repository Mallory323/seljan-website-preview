(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/seljan/components/AnalyticsPreferencesButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsPreferencesButton",
    ()=>AnalyticsPreferencesButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/lib/analytics/client.ts [app-client] (ecmascript)");
"use client";
;
;
function AnalyticsPreferencesButton() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configuredMeasurementId"])()) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "footer-link-button",
        type: "button",
        onClick: ()=>window.dispatchEvent(new CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_PREFERENCES_EVENT"])),
        children: "Cookie preferences"
    }, void 0, false, {
        fileName: "[project]/apps/seljan/components/AnalyticsPreferencesButton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AnalyticsPreferencesButton;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsPreferencesButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/content/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SiteHeader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const onScroll = {
                "SiteHeader.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["SiteHeader.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    // The original locked the page behind the open menu. Restore on unmount too,
    // or navigating away mid-menu leaves the body unscrollable.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            document.body.style.overflow = menuOpen ? "hidden" : "";
            return ({
                "SiteHeader.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        menuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (!menuOpen || !window.matchMedia("(max-width: 960px)").matches) return;
            const nav = navElement.current;
            const focusable = {
                "SiteHeader.useEffect.focusable": ()=>Array.from(nav?.querySelectorAll("a[href], button:not([disabled])") ?? [])
            }["SiteHeader.useEffect.focusable"];
            focusable()[0]?.focus();
            const onKeyDown = {
                "SiteHeader.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        setMenuOpen(false);
                        menuButton.current?.focus();
                        return;
                    }
                    if (event.key !== "Tab") return;
                    const items = focusable();
                    const first = items[0];
                    const last = items.at(-1);
                    if (!first || !last) return;
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            }["SiteHeader.useEffect.onKeyDown"];
            document.addEventListener("keydown", onKeyDown);
            return ({
                "SiteHeader.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        menuOpen
    ]);
    const closeMenu = ()=>{
        setMenuOpen(false);
        setOpenDropdown(null);
    };
    const isCurrent = (href)=>href === "/" ? pathname === "/" : pathname.startsWith(href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header${scrolled ? " is-scrolled" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "brand",
                    href: "/",
                    "aria-label": "Seljan Company home",
                    onClick: closeMenu,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "brand-logo",
                        src: "/images/seljan-logo.webp",
                        alt: "Seljan — Thinking outside the box · Plastic & Metal Manufacturing",
                        width: 1600,
                        height: 559,
                        sizes: "(max-width: 760px) 180px, 240px",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: menuButton,
                    className: "nav-toggle",
                    type: "button",
                    "aria-expanded": menuOpen,
                    "aria-controls": "site-nav",
                    "aria-label": menuOpen ? "Close menu" : "Open menu",
                    onClick: ()=>setMenuOpen((open)=>!open),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    ref: navElement,
                    className: `nav-links${menuOpen ? " is-open" : ""}`,
                    id: "site-nav",
                    "aria-label": "Primary",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((item)=>item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `nav-item has-dropdown${openDropdown === item.href ? " is-open" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-parent-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "nav-parent",
                                            "aria-current": isCurrent(item.href) ? "page" : undefined,
                                            onClick: closeMenu,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "nav-dropdown-toggle",
                                            "aria-expanded": openDropdown === item.href,
                                            "aria-controls": `submenu-${item.href.slice(1)}`,
                                            "aria-label": `${openDropdown === item.href ? "Close" : "Open"} ${item.label} menu`,
                                            onClick: ()=>setOpenDropdown((open)=>open === item.href ? null : item.href),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nav-caret",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-dropdown",
                                    id: `submenu-${item.href.slice(1)}`,
                                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: child.href,
                                            onClick: closeMenu,
                                            children: child.label
                                        }, child.href, false, {
                                            fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                                            lineNumber: 146,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                            lineNumber: 116,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: item.cta ? "nav-cta" : undefined,
                            "aria-current": isCurrent(item.href) ? "page" : undefined,
                            onClick: closeMenu,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                            lineNumber: 153,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/seljan/components/SiteHeader.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "RcnFBaotmAiuCFpCsjah+KXbaas=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsProvider",
    ()=>AnalyticsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/lib/analytics/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/seljan/lib/analytics/attribution.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const measurementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configuredMeasurementId"])();
function configureGoogleAnalytics(id) {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...arguments_)=>{
        window.dataLayer?.push(arguments_);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, {
        allow_ad_personalization_signals: false,
        allow_google_signals: false,
        cookie_flags: "SameSite=Lax;Secure",
        page_path: window.location.pathname,
        send_page_view: false
    });
}
function removeAnalyticsCookies() {
    for (const item of document.cookie.split(";")){
        const name = item.split("=")[0]?.trim() ?? "";
        if (!name.startsWith("_ga")) continue;
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${window.location.hostname}; SameSite=Lax; Secure`;
    }
}
function AnalyticsProvider() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("unknown");
    const [preferencesOpen, setPreferencesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const previousPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureFirstTouch"])(window.location, document.referrer, window.sessionStorage);
            const consentTimer = window.setTimeout({
                "AnalyticsProvider.useEffect.consentTimer": ()=>{
                    setConsent((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readAnalyticsConsent"])(window.localStorage));
                }
            }["AnalyticsProvider.useEffect.consentTimer"], 0);
            function openPreferences() {
                setPreferencesOpen(true);
            }
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_PREFERENCES_EVENT"], openPreferences);
            return ({
                "AnalyticsProvider.useEffect": ()=>{
                    window.clearTimeout(consentTimer);
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANALYTICS_PREFERENCES_EVENT"], openPreferences);
                }
            })["AnalyticsProvider.useEffect"];
        }
    }["AnalyticsProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsProvider.useEffect": ()=>{
            if (!measurementId || consent !== "accepted" || loaded.current) return;
            loaded.current = true;
            configureGoogleAnalytics(measurementId);
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
            script.dataset.seljanAnalytics = "true";
            document.head.append(script);
        }
    }["AnalyticsProvider.useEffect"], [
        consent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureFirstTouch"])(window.location, document.referrer, window.sessionStorage);
            if (!measurementId || consent !== "accepted" || typeof window.gtag !== "function") return;
            if (previousPage.current === pathname) return;
            previousPage.current = pathname;
            window.gtag("event", "page_view", {
                page_location: `${window.location.origin}${pathname}`,
                page_path: pathname,
                page_title: document.title
            });
            if (pathname === "/contact") (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("contact_view");
            const service = pathname.match(/^\/services\/([^/]+)$/)?.[1];
            if (service) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("service_view", {
                service
            });
        }
    }["AnalyticsProvider.useEffect"], [
        consent,
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsProvider.useEffect": ()=>{
            function trackClick(event) {
                const target = event.target instanceof Element ? event.target.closest("a") : null;
                if (!(target instanceof HTMLAnchorElement)) return;
                const explicit = target.dataset.analyticsDivision;
                if (explicit) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("division_click", {
                        division: explicit
                    });
                } else if (target.href.startsWith("tel:")) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("phone_click");
                } else if (target.href.startsWith("mailto:")) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAnalyticsEvent"])("email_click");
                }
            }
            document.addEventListener("click", trackClick);
            return ({
                "AnalyticsProvider.useEffect": ()=>document.removeEventListener("click", trackClick)
            })["AnalyticsProvider.useEffect"];
        }
    }["AnalyticsProvider.useEffect"], []);
    if (!measurementId) return null;
    function choose(nextConsent) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$seljan$2f$lib$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeAnalyticsConsent"])(window.localStorage, nextConsent);
        setConsent(nextConsent);
        setPreferencesOpen(false);
        if (nextConsent === "declined") {
            window.gtag?.("consent", "update", {
                analytics_storage: "denied"
            });
            removeAnalyticsCookies();
            delete window.gtag;
            window.dataLayer = [];
            document.querySelector('script[data-seljan-analytics="true"]')?.remove();
            loaded.current = false;
            previousPage.current = "";
        }
    }
    if (consent !== "unknown" && !preferencesOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "analytics-consent",
        "aria-label": "Analytics preferences",
        role: "dialog",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Help us improve the Seljan website"
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "With your permission, we use Google Analytics to understand which pages are useful. We do not send your form details to analytics. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy",
                                children: "Privacy details"
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
                                lineNumber: 134,
                                columnNumber: 58
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analytics-consent-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary",
                        type: "button",
                        onClick: ()=>choose("declined"),
                        children: "Decline"
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        type: "button",
                        onClick: ()=>choose("accepted"),
                        children: "Accept analytics"
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/analytics/AnalyticsProvider.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(AnalyticsProvider, "iAX3jH9u1QuDdVVUMTV8KxxTAM4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AnalyticsProvider;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/content/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Everything that appears on more than one page.
 *
 * The hand-written version of this site repeated the header, footer and contact
 * details in all ten pages, and they had already drifted apart. Anything shared
 * belongs here so there is exactly one copy to change.
 */ /**
 * The canonical origin. Metadata, the sitemap and structured data all build on
 * it, so canonical URLs stay correct when the domain is finally pointed here.
 */ __turbopack_context__.s([
    "footerNav",
    ()=>footerNav,
    "isIndexableDeployment",
    ()=>isIndexableDeployment,
    "nav",
    ()=>nav,
    "site",
    ()=>site,
    "siteUrl",
    ()=>siteUrl,
    "yearsInBusiness",
    ()=>yearsInBusiness
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const siteUrl = ("TURBOPACK compile-time value", "http://localhost:3000") ?? "http://localhost:3000";
const isIndexableDeployment = ("TURBOPACK compile-time value", "preview") === "production" && [
    "https://seljan.com",
    "https://www.seljan.com"
].includes(siteUrl);
const site = {
    name: "Seljan Company Inc.",
    shortName: "Seljan",
    tagline: "Thinking outside the box · Plastic & Metal Manufacturing",
    founded: 1967,
    description: "Seljan Company Inc. — precision metals and plastics manufacturing in Lake Mills, Wisconsin since 1967.",
    blurb: "Family-owned manufacturing since 1967. Metals and plastics engineered in Lake Mills, Wisconsin.",
    contact: {
        street: "100 S CP Avenue",
        city: "Lake Mills",
        state: "WI",
        postalCode: "53551",
        country: "US",
        phone: "920-648-2406",
        email: "sales@seljan.com",
        hours: "Office hours Mon–Fri 7:30–4:00 · Plant 24/6",
        weekdayHours: "7:30 am – 4:00 pm",
        weekendHours: "Closed",
        plantHours: "24/6"
    }
};
function yearsInBusiness(at = new Date()) {
    const year = Number(new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        year: "numeric"
    }).format(at));
    return year - site.founded;
}
const nav = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/services",
        label: "Services",
        children: [
            {
                href: "/services",
                label: "All Services"
            },
            {
                href: "/services/metals",
                label: "Metal Manufacturing"
            },
            {
                href: "/services/plastics",
                label: "Plastics Manufacturing"
            },
            {
                href: "/services/tooling",
                label: "Tool & Die"
            },
            {
                href: "/services/graphics",
                label: "Graphics Printing"
            },
            {
                href: "/services/robotics",
                label: "Robotics"
            }
        ]
    },
    {
        href: "/products",
        label: "Our Products"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/qa",
        label: "Q&A"
    },
    {
        href: "/contact",
        label: "Get a Quote",
        cta: true
    }
];
const footerNav = [
    {
        href: "/services",
        label: "Services"
    },
    {
        href: "/products",
        label: "Our Products"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/qa",
        label: "Q&A"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/lib/analytics/attribution.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTRIBUTION_LIMITS",
    ()=>ATTRIBUTION_LIMITS,
    "attributionSource",
    ()=>attributionSource,
    "captureFirstTouch",
    ()=>captureFirstTouch,
    "currentInquiryAttribution",
    ()=>currentInquiryAttribution,
    "emptyAttribution",
    ()=>emptyAttribution,
    "readStoredAttribution",
    ()=>readStoredAttribution
]);
const ATTRIBUTION_LIMITS = {
    landingPath: 300,
    referrerHost: 200,
    service: 80,
    utmCampaign: 200,
    utmContent: 200,
    utmMedium: 100,
    utmSource: 100,
    utmTerm: 200
};
const EMPTY_ATTRIBUTION = {
    landingPath: "",
    referrerHost: "",
    service: "",
    utmCampaign: "",
    utmContent: "",
    utmMedium: "",
    utmSource: "",
    utmTerm: ""
};
const STORAGE_KEY = "seljan:first-touch:v1";
function bounded(value, maximum) {
    return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, maximum);
}
function referrerHost(referrer) {
    if (!referrer) return "";
    try {
        return bounded(new URL(referrer).hostname.toLowerCase(), ATTRIBUTION_LIMITS.referrerHost);
    } catch  {
        return "";
    }
}
function serviceFromPath(pathname) {
    const match = pathname.match(/^\/services\/([^/?#]+)/);
    return match?.[1] ? bounded(match[1], ATTRIBUTION_LIMITS.service) : "";
}
function isAttribution(value) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
    const candidate = value;
    return Object.keys(EMPTY_ATTRIBUTION).every((key)=>typeof candidate[key] === "string");
}
function emptyAttribution() {
    return {
        ...EMPTY_ATTRIBUTION
    };
}
function captureFirstTouch(location, referrer, storage) {
    const existing = readStoredAttribution(storage);
    if (existing) return existing;
    const params = new URLSearchParams(location.search);
    const attribution = {
        landingPath: bounded(location.pathname || "/", ATTRIBUTION_LIMITS.landingPath),
        referrerHost: referrerHost(referrer),
        service: serviceFromPath(location.pathname),
        utmCampaign: bounded(params.get("utm_campaign") ?? "", ATTRIBUTION_LIMITS.utmCampaign),
        utmContent: bounded(params.get("utm_content") ?? "", ATTRIBUTION_LIMITS.utmContent),
        utmMedium: bounded(params.get("utm_medium") ?? "", ATTRIBUTION_LIMITS.utmMedium),
        utmSource: bounded(params.get("utm_source") ?? "", ATTRIBUTION_LIMITS.utmSource),
        utmTerm: bounded(params.get("utm_term") ?? "", ATTRIBUTION_LIMITS.utmTerm)
    };
    try {
        storage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    } catch  {
    // Attribution is helpful context, never a reason to interrupt the website.
    }
    return attribution;
}
function readStoredAttribution(storage) {
    try {
        const stored = storage.getItem(STORAGE_KEY);
        if (!stored) return null;
        const parsed = JSON.parse(stored);
        if (!isAttribution(parsed)) return null;
        return {
            landingPath: bounded(parsed.landingPath, ATTRIBUTION_LIMITS.landingPath),
            referrerHost: bounded(parsed.referrerHost, ATTRIBUTION_LIMITS.referrerHost),
            service: bounded(parsed.service, ATTRIBUTION_LIMITS.service),
            utmCampaign: bounded(parsed.utmCampaign, ATTRIBUTION_LIMITS.utmCampaign),
            utmContent: bounded(parsed.utmContent, ATTRIBUTION_LIMITS.utmContent),
            utmMedium: bounded(parsed.utmMedium, ATTRIBUTION_LIMITS.utmMedium),
            utmSource: bounded(parsed.utmSource, ATTRIBUTION_LIMITS.utmSource),
            utmTerm: bounded(parsed.utmTerm, ATTRIBUTION_LIMITS.utmTerm)
        };
    } catch  {
        return null;
    }
}
function currentInquiryAttribution() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return captureFirstTouch(window.location, document.referrer, window.sessionStorage);
}
function attributionSource(attribution) {
    if (attribution.utmSource) {
        return attribution.utmMedium ? `${attribution.utmSource} / ${attribution.utmMedium}` : attribution.utmSource;
    }
    return attribution.referrerHost || "Direct or unknown";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/seljan/lib/analytics/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANALYTICS_CONSENT_KEY",
    ()=>ANALYTICS_CONSENT_KEY,
    "ANALYTICS_PREFERENCES_EVENT",
    ()=>ANALYTICS_PREFERENCES_EVENT,
    "configuredMeasurementId",
    ()=>configuredMeasurementId,
    "readAnalyticsConsent",
    ()=>readAnalyticsConsent,
    "trackAnalyticsEvent",
    ()=>trackAnalyticsEvent,
    "writeAnalyticsConsent",
    ()=>writeAnalyticsConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use client";
const ANALYTICS_CONSENT_KEY = "seljan:analytics-consent:v1";
const ANALYTICS_PREFERENCES_EVENT = "seljan:analytics-preferences";
function configuredMeasurementId() {
    const value = ("TURBOPACK compile-time value", "")?.trim() ?? "";
    return /^G-[A-Z0-9]+$/i.test(value) ? value.toUpperCase() : null;
}
function readAnalyticsConsent(storage) {
    try {
        const value = storage.getItem(ANALYTICS_CONSENT_KEY);
        return value === "accepted" || value === "declined" ? value : "unknown";
    } catch  {
        return "unknown";
    }
}
function writeAnalyticsConsent(storage, consent) {
    try {
        storage.setItem(ANALYTICS_CONSENT_KEY, consent);
    } catch  {
    // The current page still honors the choice when storage is unavailable.
    }
}
function trackAnalyticsEvent(name, parameters = {}) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", name, parameters);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_seljan_12n0mwu._.js.map