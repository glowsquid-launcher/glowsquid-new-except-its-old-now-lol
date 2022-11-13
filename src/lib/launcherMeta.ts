export interface LauncherMeta {
    latest: Latest;
    versions: Version[];
}

export interface Latest {
    release: string;
    snapshot: string;
}

export interface Version {
    id: string;
    type: Type;
    url: string;
    time: Date;
    releaseTime: Date;
    sha1: string;
    complianceLevel: number;
}

export enum Type {
    OldAlpha = "old_alpha",
    OldBeta = "old_beta",
    Release = "release",
    Snapshot = "snapshot",
}

// it takes an option `fetch` argument when called from layout.ts/page.ts
export async function getLauncherMeta(fetch = window.fetch): Promise<LauncherMeta> {
    const response = await fetch("https://launchermeta.mojang.com/mc/game/version_manifest_v2.json");
    return await response.json();
}