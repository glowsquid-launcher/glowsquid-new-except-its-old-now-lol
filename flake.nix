{
  description = "Glowsquid, the next gen minecraft launcher";

  inputs.devshell.url = "github:numtide/devshell";
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.rust-overlay.url = "github:oxalica/rust-overlay";

  outputs = { self, flake-utils, devshell, nixpkgs, rust-overlay }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;

          overlays = [
            devshell.overlay
            rust-overlay.overlays.default
            (self: super: {
              custom-rust = pkgs.rust-bin.stable.latest.default.override {
                extensions = [ "rust-src" "rust-analyzer" "rustfmt" ];
              };
            })
          ];
        };
      in {
        devShell = pkgs.devshell.mkShell {
          imports = [ (pkgs.devshell.importTOML ./devshell.toml) ];
        };
      });
}
