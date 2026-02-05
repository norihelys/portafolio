export function makeHref(path: string): string {
    const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    if (!path) path = "/";
    if (/^https?:\/\//.test(path)) return path;
    const p = path.startsWith("/") ? path : `/${path}`;
    return BASE + p;
}

export function stripBase(pathname: string): string {
    const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    if (!BASE) return pathname || "/";
    const re = new RegExp(`^${BASE.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}`);
    const raw = (pathname || "").replace(re, "");
    return raw || "/";
}
