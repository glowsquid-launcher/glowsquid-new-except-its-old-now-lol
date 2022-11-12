{
  description = "Glowsquid, the next gen minecraft launcher";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = { self, flake-utils, nixpkgs, rust-overlay }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;

          overlays = [
            rust-overlay.overlays.default
            (self: super: {
              custom-rust = pkgs.rust-bin.stable.latest.default.override {
                extensions = [ "rust-src" "rust-analyzer" "rustfmt" ];
              };
            })
          ];
        };

        libraries = with pkgs; [
          webkitgtk
          gtk3
          cairo
          gdk-pixbuf
          glib.out
          dbus.lib
          openssl_3.out
        ];

        packages = with pkgs; [
          curl
          wget
          pkg-config
          dbus
          openssl_3
          glib
          gtk3
          libsoup
          webkitgtk
          custom-rust
          nodejs-18_x
        ];
      in {
        devShell = pkgs.mkShell {
          buildInputs = packages;

          shellHook = let
            joinLibs = libs:
              builtins.concatStringsSep ":" (builtins.map (x: "${x}/lib") libs);
            libs = joinLibs libraries;
          in ''
            export LD_LIBRARY_PATH=${libs}:$LD_LIBRARY_PATH
          '';
        };
      });
}
