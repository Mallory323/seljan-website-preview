(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/seljan/components/ProductSlideshow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductSlideshow",
    ()=>ProductSlideshow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PX_PER_SEC = 42;
function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ProductSlideshow({ slides, label, priority = false }) {
    _s();
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const labelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const inViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const holdingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resumeAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const carryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const count = slides.length;
    pausedRef.current = paused;
    inViewRef.current = inView;
    const wrapScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductSlideshow.useCallback[wrapScroll]": (track, next)=>{
            const clone = track.querySelectorAll(".product-slideshow-item")[count];
            const loopAt = clone?.offsetLeft ?? track.scrollWidth / 2;
            if (loopAt <= 0) {
                track.scrollLeft = Math.max(0, next);
                return;
            }
            let left = next;
            while(left >= loopAt)left -= loopAt;
            while(left < 0)left += loopAt;
            track.scrollLeft = left;
        }
    }["ProductSlideshow.useCallback[wrapScroll]"], [
        count
    ]);
    const scrollByCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductSlideshow.useCallback[scrollByCard]": (direction)=>{
            const track = trackRef.current;
            if (!track) return;
            const item = track.querySelector(".product-slideshow-item");
            if (!item) return;
            const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
            const step = item.getBoundingClientRect().width + gap;
            resumeAtRef.current = performance.now() + 1600;
            wrapScroll(track, track.scrollLeft + direction * step);
        }
    }["ProductSlideshow.useCallback[scrollByCard]"], [
        wrapScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductSlideshow.useEffect": ()=>{
            const root = rootRef.current;
            if (!root) return;
            const observer = new IntersectionObserver({
                "ProductSlideshow.useEffect": (entries)=>{
                    const entry = entries[0];
                    if (!entry) return;
                    setInView(entry.isIntersecting);
                }
            }["ProductSlideshow.useEffect"], {
                threshold: 0.35
            });
            observer.observe(root);
            return ({
                "ProductSlideshow.useEffect": ()=>observer.disconnect()
            })["ProductSlideshow.useEffect"];
        }
    }["ProductSlideshow.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductSlideshow.useEffect": ()=>{
            if (count < 2) return;
            if (prefersReducedMotion()) return;
            let frame = 0;
            let last = performance.now();
            const tick = {
                "ProductSlideshow.useEffect.tick": (now)=>{
                    const dt = Math.min(64, now - last);
                    last = now;
                    const track = trackRef.current;
                    const canMove = Boolean(track) && inViewRef.current && !pausedRef.current && !holdingRef.current && now >= resumeAtRef.current;
                    if (track && canMove) {
                        carryRef.current += PX_PER_SEC * dt / 1000;
                        if (carryRef.current >= 0.5) {
                            const pixels = carryRef.current;
                            carryRef.current = 0;
                            wrapScroll(track, track.scrollLeft + pixels);
                        }
                    } else {
                        carryRef.current = 0;
                    }
                    frame = window.requestAnimationFrame(tick);
                }
            }["ProductSlideshow.useEffect.tick"];
            frame = window.requestAnimationFrame(tick);
            return ({
                "ProductSlideshow.useEffect": ()=>window.cancelAnimationFrame(frame)
            })["ProductSlideshow.useEffect"];
        }
    }["ProductSlideshow.useEffect"], [
        count,
        wrapScroll
    ]);
    if (count === 0) return null;
    const copies = count > 1 ? [
        0,
        1
    ] : [
        0
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "product-slideshow",
        role: "region",
        "aria-roledescription": "carousel",
        "aria-labelledby": labelId,
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        onFocusCapture: ()=>setPaused(true),
        onBlurCapture: (event)=>{
            if (!event.currentTarget.contains(event.relatedTarget)) {
                setPaused(false);
            }
        },
        onKeyDown: (event)=>{
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollByCard(-1);
            }
            if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollByCard(1);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: labelId,
                className: "visually-hidden",
                children: [
                    label,
                    " product photos"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: trackRef,
                className: "product-slideshow-track",
                tabIndex: 0,
                onPointerDown: ()=>{
                    holdingRef.current = true;
                },
                onPointerUp: ()=>{
                    holdingRef.current = false;
                    resumeAtRef.current = performance.now() + 1200;
                },
                onPointerCancel: ()=>{
                    holdingRef.current = false;
                },
                children: copies.flatMap((copy)=>slides.map((slide, slideIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "product-slideshow-item",
                            "aria-hidden": copy === 1 ? true : undefined,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: slide.src,
                                alt: copy === 1 ? "" : slide.alt,
                                fill: true,
                                sizes: "(max-width: 700px) 55vw, 26rem",
                                style: {
                                    objectFit: "cover"
                                },
                                priority: priority && copy === 0 && slideIndex < 3
                            }, void 0, false, {
                                fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this)
                        }, `${copy}-${slide.src}`, false, {
                            fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)))
            }, void 0, false, {
                fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            count > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "product-slideshow-nav is-prev",
                        onClick: ()=>scrollByCard(-1),
                        "aria-label": "Previous photos",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "product-slideshow-nav is-next",
                        onClick: ()=>scrollByCard(1),
                        "aria-label": "Next photos",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/seljan/components/ProductSlideshow.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(ProductSlideshow, "Lv9/WnTpFtFPrwFKPMKqCsSgMGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = ProductSlideshow;
var _c;
__turbopack_context__.k.register(_c, "ProductSlideshow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_seljan_components_ProductSlideshow_tsx_1it0eo0._.js.map