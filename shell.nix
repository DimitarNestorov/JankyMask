{ pkgs ? import <nixpkgs> { } }: with pkgs;
let
  node = nodejs-14_x;
in
mkShell {
  buildInputs = [
    node
    (yarn.override { nodejs = node; })
  ];
}
