import { appDataDir, join } from "@tauri-apps/api/path"

export interface Settings {
  darkMode: boolean
  defaulInstanceSettings: {
    windowSize: {
      width: number
      height: number
    }
    ram: {
      min: number
      max: number
    }
    javaPath: string | null
    customJavaArgs: string
  }
  clientId: string
  assetPath: string,
  instancesDir: string,
  defaultsComplete: boolean
  sources: string[]
}

export const settings = writable<Settings>(JSON.parse(localStorage.getItem("settings") || "null") || {
  darkMode: true,
  defaultInstanceSettings: {
    windowSize: {
      width: 800,
      height: 600,
    },
    ram: {
      min: 1024 * 4,
      max: 1024 * 4,
    },
    javaPath: null,
    customJavaArgs: "",
  },
  // its recommended to use the default value for this (somehow show this in the UI)
  clientId: "Glowsquid",
  assetPath: "",
  instancesDir: "",
  sources: [],
  defaultsComplete: false,
});

(async () => {
  const currentSettings = get(settings)
  if (currentSettings.defaultsComplete) return

  const dataDir = await appDataDir();
  const instancesDir = await join(dataDir, "instances");
  const assetPath = await join(dataDir, "assets");

  settings.update((settings) => {
    return {
      ...settings,
      defaultsComplete: true,
      instancesDir,
      assetPath
    }
  });
})()

settings.subscribe((settings) => {
  localStorage.setItem("settings", JSON.stringify(settings));
})