#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_copper::init(
            "2aa32806-92e3-4242-babc-392ac0f0fd30".to_owned(),
        ))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
