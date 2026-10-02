declare const __APP_VERSION__: string;
declare const __BUILD_DATE__: string;
declare const __ASSET_HASHES__: Record<string, string>;

export const VERSION = __APP_VERSION__;
export const BUILD_DATE = new Date(__BUILD_DATE__);

// Cache-busted URL for a file in public/, e.g. "/pubs/loci.mp4" -> "/pubs/loci.mp4?v=1a2b3c4d".
export function asset(path: string): string {
  const h = __ASSET_HASHES__[path];
  return h ? `${path}?v=${h}` : path;
}

// If the server has a newer build than the one running, reload onto it.
// The ?v= query makes the reload bypass any cached copy of index.html.
export async function checkForUpdate(): Promise<void> {
  try {
    const res = await fetch(`/version.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return;
    const { version } = await res.json();
    if (!version || version === VERSION) return;
    const key = `reloaded-for-${version}`;
    if (sessionStorage.getItem(key)) return;   // avoid reload loops
    sessionStorage.setItem(key, '1');
    const url = new URL(window.location.href);
    url.searchParams.set('v', version);
    window.location.replace(url.toString());
  } catch {
    // offline or blocked storage: keep the current page
  }
}
