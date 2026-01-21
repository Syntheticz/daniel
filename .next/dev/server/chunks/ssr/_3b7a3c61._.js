module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/data:79e424 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchMembers",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"009b0128b7e890446249707aae392fe62e21a149ad":"fetchMembers"},"lib/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("009b0128b7e890446249707aae392fe62e21a149ad", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchMembers");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkAvc3JjL2dlbmVyYXRlZC9jbGllbnRcIjtcclxuaW1wb3J0IHsgUHJpc21hUGcgfSBmcm9tIFwiQHByaXNtYS9hZGFwdGVyLXBnXCI7XHJcblxyXG5jb25zdCBhZGFwdGVyID0gbmV3IFByaXNtYVBnKHtcclxuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXHJcbn0pO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtcclxuICBhZGFwdGVyLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGlzRm91cnRoU3VuZGF5KGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICBpZiAoZGF0ZS5nZXREYXkoKSAhPT0gMCkgcmV0dXJuIGZhbHNlOyAvLyBTdW5kYXlcclxuXHJcbiAgY29uc3QgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gIHJldHVybiBkYXlPZk1vbnRoID49IDIyICYmIGRheU9mTW9udGggPD0gMjg7XHJcbn1cclxuXHJcbnR5cGUgQXR0ZW5kYW5jZVN0YXR1cyA9IFwiUHJlc2VudFwiIHwgXCJMYXRlXCIgfCBcIkFic2VudFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVN0YXR1cyhzdWJtaXR0ZWRBdD86IHN0cmluZyB8IG51bGwpOiBBdHRlbmRhbmNlU3RhdHVzIHtcclxuICBpZiAoIXN1Ym1pdHRlZEF0KSByZXR1cm4gXCJBYnNlbnRcIjtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN1Ym1pdHRlZEF0KTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuLCAzID0gV2VkXHJcblxyXG4gIGxldCBjdXRvZmY6IERhdGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLy8gV2VkbmVzZGF5ICg3OjMwIEFNKVxyXG4gIGlmIChkYXkgPT09IDMpIHtcclxuICAgIGN1dG9mZiA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgY3V0b2ZmLnNldEhvdXJzKDcsIDMwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIC8vIFN1bmRheVxyXG4gIGlmIChkYXkgPT09IDApIHtcclxuICAgIGN1dG9mZiA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICAgIGlmIChpc0ZvdXJ0aFN1bmRheShkYXRlKSkge1xyXG4gICAgICBjdXRvZmYuc2V0SG91cnMoMTAsIDAsIDAsIDApOyAvLyA0dGggU3VuZGF5XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXRvZmYuc2V0SG91cnMoOSwgMCwgMCwgMCk7IC8vIHJlZ3VsYXIgU3VuZGF5XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBbnkgb3RoZXIgZGF5IGRlZmF1bHRzIHRvIFByZXNlbnRcclxuICBpZiAoIWN1dG9mZikgcmV0dXJuIFwiUHJlc2VudFwiO1xyXG5cclxuICByZXR1cm4gZGF0ZSA+IGN1dG9mZiA/IFwiTGF0ZVwiIDogXCJQcmVzZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1lbWJlcnMoKSB7XHJcbiAgY29uc3QgbWVtYmVycyA9IGF3YWl0IHByaXNtYS5tZW1iZXIuZmluZE1hbnkoe30pO1xyXG4gIHJldHVybiBtZW1iZXJzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluYWxpemVBdHRlbmRhbmNlKFxyXG4gIGRhdGE6IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IHN0cmluZztcclxuICAgIHN1Ym1pdHRlZEF0OiBzdHJpbmcgfCBudWxsO1xyXG4gIH1bXVxyXG4pIHtcclxuICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgZGF0YSkge1xyXG4gICAgICBpZiAobWVtYmVyLnN1Ym1pdHRlZEF0KSB7XHJcbiAgICAgICAgYXdhaXQgdHguYXR0ZW5kYW5jZVRpbWVzdGFtcC5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW1iZXJJZDogbWVtYmVyLmlkLFxyXG4gICAgICAgICAgICBkYXRlOiBtZW1iZXIuc3VibWl0dGVkQXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldEF0dGVuZGFuY2VTdGF0dXMobWVtYmVyLnN1Ym1pdHRlZEF0KTtcclxuICAgICAgICBhd2FpdCBwcmlzbWEubWVtYmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDogbWVtYmVyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgcHJlc2VudDogc3RhdHVzID09PSBcIlByZXNlbnRcIiA/IHsgaW5jcmVtZW50OiAxIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGxhdGU6IHN0YXR1cyA9PT0gXCJMYXRlXCIgPyB7IGluY3JlbWVudDogMSB9IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEubWVtYmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpZDogbWVtYmVyLmlkIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGFic2VudDogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhRQW9Ec0IseUxBQUEifQ==
}),
"[project]/lib/data:396c57 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "finalizeAttendance",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40760cef27c81c6158d83f56ae447a8500d69d020c":"finalizeAttendance"},"lib/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40760cef27c81c6158d83f56ae447a8500d69d020c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "finalizeAttendance");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkAvc3JjL2dlbmVyYXRlZC9jbGllbnRcIjtcclxuaW1wb3J0IHsgUHJpc21hUGcgfSBmcm9tIFwiQHByaXNtYS9hZGFwdGVyLXBnXCI7XHJcblxyXG5jb25zdCBhZGFwdGVyID0gbmV3IFByaXNtYVBnKHtcclxuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXHJcbn0pO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtcclxuICBhZGFwdGVyLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGlzRm91cnRoU3VuZGF5KGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICBpZiAoZGF0ZS5nZXREYXkoKSAhPT0gMCkgcmV0dXJuIGZhbHNlOyAvLyBTdW5kYXlcclxuXHJcbiAgY29uc3QgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gIHJldHVybiBkYXlPZk1vbnRoID49IDIyICYmIGRheU9mTW9udGggPD0gMjg7XHJcbn1cclxuXHJcbnR5cGUgQXR0ZW5kYW5jZVN0YXR1cyA9IFwiUHJlc2VudFwiIHwgXCJMYXRlXCIgfCBcIkFic2VudFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVN0YXR1cyhzdWJtaXR0ZWRBdD86IHN0cmluZyB8IG51bGwpOiBBdHRlbmRhbmNlU3RhdHVzIHtcclxuICBpZiAoIXN1Ym1pdHRlZEF0KSByZXR1cm4gXCJBYnNlbnRcIjtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN1Ym1pdHRlZEF0KTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpOyAvLyAwID0gU3VuLCAzID0gV2VkXHJcblxyXG4gIGxldCBjdXRvZmY6IERhdGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLy8gV2VkbmVzZGF5ICg3OjMwIEFNKVxyXG4gIGlmIChkYXkgPT09IDMpIHtcclxuICAgIGN1dG9mZiA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgY3V0b2ZmLnNldEhvdXJzKDcsIDMwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIC8vIFN1bmRheVxyXG4gIGlmIChkYXkgPT09IDApIHtcclxuICAgIGN1dG9mZiA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICAgIGlmIChpc0ZvdXJ0aFN1bmRheShkYXRlKSkge1xyXG4gICAgICBjdXRvZmYuc2V0SG91cnMoMTAsIDAsIDAsIDApOyAvLyA0dGggU3VuZGF5XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXRvZmYuc2V0SG91cnMoOSwgMCwgMCwgMCk7IC8vIHJlZ3VsYXIgU3VuZGF5XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBbnkgb3RoZXIgZGF5IGRlZmF1bHRzIHRvIFByZXNlbnRcclxuICBpZiAoIWN1dG9mZikgcmV0dXJuIFwiUHJlc2VudFwiO1xyXG5cclxuICByZXR1cm4gZGF0ZSA+IGN1dG9mZiA/IFwiTGF0ZVwiIDogXCJQcmVzZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1lbWJlcnMoKSB7XHJcbiAgY29uc3QgbWVtYmVycyA9IGF3YWl0IHByaXNtYS5tZW1iZXIuZmluZE1hbnkoe30pO1xyXG4gIHJldHVybiBtZW1iZXJzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluYWxpemVBdHRlbmRhbmNlKFxyXG4gIGRhdGE6IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IHN0cmluZztcclxuICAgIHN1Ym1pdHRlZEF0OiBzdHJpbmcgfCBudWxsO1xyXG4gIH1bXVxyXG4pIHtcclxuICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBtZW1iZXIgb2YgZGF0YSkge1xyXG4gICAgICBpZiAobWVtYmVyLnN1Ym1pdHRlZEF0KSB7XHJcbiAgICAgICAgYXdhaXQgdHguYXR0ZW5kYW5jZVRpbWVzdGFtcC5jcmVhdGUoe1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtZW1iZXJJZDogbWVtYmVyLmlkLFxyXG4gICAgICAgICAgICBkYXRlOiBtZW1iZXIuc3VibWl0dGVkQXQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGdldEF0dGVuZGFuY2VTdGF0dXMobWVtYmVyLnN1Ym1pdHRlZEF0KTtcclxuICAgICAgICBhd2FpdCBwcmlzbWEubWVtYmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDogbWVtYmVyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgcHJlc2VudDogc3RhdHVzID09PSBcIlByZXNlbnRcIiA/IHsgaW5jcmVtZW50OiAxIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGxhdGU6IHN0YXR1cyA9PT0gXCJMYXRlXCIgPyB7IGluY3JlbWVudDogMSB9IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEubWVtYmVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpZDogbWVtYmVyLmlkIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGFic2VudDogeyBpbmNyZW1lbnQ6IDEgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQXlEc0IsK0xBQUEifQ==
}),
"[project]/component/attendance-system.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttendanceSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$79e424__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:79e424 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$396c57__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:396c57 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
const STORAGE_KEY = "attendance-records";
function loadRecords() {
    if ("TURBOPACK compile-time truthy", 1) return new Map();
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveRecords(records) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(records.entries())));
}
function generateSpreadsheet(attendees, records) {
    const headers = [
        "Name",
        "Status",
        "Date",
        "Time"
    ];
    const rows = attendees.map((attendee)=>{
        const record = records.get(attendee.id);
        const date = record ? new Date(record.submittedAt) : null;
        return [
            attendee.name,
            record ? "Present" : "Absent",
            date ? date.toLocaleDateString() : "-",
            date ? date.toLocaleTimeString() : "-"
        ];
    });
    const csvContent = [
        headers,
        ...rows
    ].map((row)=>row.join(",")).join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `attendance-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}
function AttendanceSystem() {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [submittedRecords, setSubmittedRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [customTimes, setCustomTimes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: members = [], isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "members"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$79e424__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["fetchMembers"]
    });
    const { mutate: finalize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$396c57__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["finalizeAttendance"]
    });
    const attendees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return members.map((member)=>({
                id: member.id,
                name: `${member.firstName} ${member.lastName}`
            }));
    }, [
        members
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSubmittedRecords(loadRecords());
        setIsLoaded(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded) {
            saveRecords(submittedRecords);
        }
    }, [
        submittedRecords,
        isLoaded
    ]);
    const filteredAttendees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchQuery.trim()) return attendees;
        const query = searchQuery.toLowerCase();
        return attendees.filter((a)=>a.name.toLowerCase().includes(query));
    }, [
        searchQuery,
        attendees
    ]);
    const handleCheckboxChange = (id, checked)=>{
        if (submittedRecords.has(id)) return;
        setSelectedIds((prev)=>{
            const newSet = new Set(prev);
            if (checked) {
                newSet.add(id);
            } else {
                newSet.delete(id);
            }
            return newSet;
        });
    };
    const handleTimeChange = (id, time)=>{
        if (submittedRecords.has(id)) return;
        setCustomTimes((prev)=>{
            const newMap = new Map(prev);
            newMap.set(id, time);
            return newMap;
        });
    };
    const handleFinalizeAttendance = ()=>{
        const finalized = attendees.map((attendee)=>{
            const record = submittedRecords.get(attendee.id);
            return {
                id: attendee.id,
                name: attendee.name,
                status: record ? "Present" : "Absent",
                submittedAt: record?.submittedAt ?? null
            };
        });
        console.log(finalized);
        finalize(finalized);
        alert("Attendance Finalized");
        handleDownloadSpreadsheet();
        handleReset();
    };
    const handleSubmit = ()=>{
        const now = new Date();
        setSubmittedRecords((prev)=>{
            const newMap = new Map(prev);
            selectedIds.forEach((id)=>{
                if (!newMap.has(id)) {
                    const customTime = customTimes.get(id);
                    let submittedAt = now;
                    if (customTime) {
                        const [hours, minutes] = customTime.split(":").map(Number);
                        submittedAt = new Date();
                        submittedAt.setHours(hours, minutes, 0, 0);
                    }
                    newMap.set(id, {
                        id,
                        submittedAt: submittedAt.toISOString()
                    });
                }
            });
            return newMap;
        });
        setSelectedIds(new Set());
    };
    const handleDownloadSpreadsheet = ()=>{
        generateSpreadsheet(attendees, submittedRecords);
    };
    const handleReset = ()=>{
        setSelectedIds(new Set());
        setSubmittedRecords(new Map());
        setCustomTimes(new Map());
    };
    const hasPendingSelections = selectedIds.size > 0;
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[100dvh] items-center justify-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/component/attendance-system.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex h-[100dvh] max-w-md flex-col p-4 pb-safe",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/component/attendance-system.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "Search by name...",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        className: "h-12 pl-10 text-base"
                    }, void 0, false, {
                        fileName: "[project]/component/attendance-system.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/component/attendance-system.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex-1 space-y-2 overflow-y-auto",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center"
                    }, void 0, false, {
                        fileName: "[project]/component/attendance-system.tsx",
                        lineNumber: 207,
                        columnNumber: 23
                    }, this),
                    filteredAttendees.map((attendee)=>{
                        const isSubmitted = submittedRecords.has(attendee.id);
                        const isSelected = selectedIds.has(attendee.id);
                        const isChecked = isSubmitted || isSelected;
                        const record = submittedRecords.get(attendee.id);
                        const recordDate = record ? new Date(record.submittedAt) : null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-3 rounded-lg border p-4 transition-colors ${isSubmitted ? "border-green-500 bg-green-100" : "border-border bg-card"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                    id: attendee.id,
                                    checked: isChecked,
                                    onCheckedChange: (checked)=>handleCheckboxChange(attendee.id, checked === true),
                                    disabled: isSubmitted,
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/component/attendance-system.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: attendee.id,
                                    className: `min-w-0 flex-1 truncate text-base ${isSubmitted ? "cursor-default" : "cursor-pointer"} text-foreground`,
                                    children: attendee.name
                                }, void 0, false, {
                                    fileName: "[project]/component/attendance-system.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 text-sm font-medium text-green-700",
                                    children: recordDate?.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/component/attendance-system.tsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "time",
                                    value: customTimes.get(attendee.id) || "",
                                    onChange: (e)=>handleTimeChange(attendee.id, e.target.value),
                                    className: "h-10 w-[5.5rem] shrink-0 rounded-md border border-border bg-background px-2 text-base"
                                }, void 0, false, {
                                    fileName: "[project]/component/attendance-system.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, attendee.id, true, {
                            fileName: "[project]/component/attendance-system.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this);
                    }),
                    filteredAttendees.length === 0 && !isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-muted-foreground",
                        children: "No attendees found."
                    }, void 0, false, {
                        fileName: "[project]/component/attendance-system.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/component/attendance-system.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleSubmit,
                        disabled: !hasPendingSelections,
                        className: "h-12 w-full text-base sm:flex-1",
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/component/attendance-system.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleReset,
                                variant: "outline",
                                className: "h-12 flex-1 bg-transparent sm:flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/component/attendance-system.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    "Reset"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/component/attendance-system.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleDownloadSpreadsheet,
                                variant: "secondary",
                                className: "h-12 flex-1 sm:flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/component/attendance-system.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    "Spreadsheet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/component/attendance-system.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/component/attendance-system.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleFinalizeAttendance,
                        // disabled={!hasPendingSelections}
                        className: "h-12 w-full text-base sm:flex-1",
                        children: "Finalize Attendance"
                    }, void 0, false, {
                        fileName: "[project]/component/attendance-system.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/component/attendance-system.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/component/attendance-system.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_3b7a3c61._.js.map