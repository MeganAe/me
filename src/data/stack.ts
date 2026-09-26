import csharpSvg from "../assets/logos/skill-csharp.svg?raw";
import dartSvg from "../assets/logos/skill-dart.svg?raw";
import tsSvg from "../assets/logos/skill-typescript.svg?raw";
import jsSvg from "../assets/logos/skill-javascript.svg?raw";
import javaSvg from "../assets/logos/skill-java.svg?raw";
import pySvg from "../assets/logos/skill-python.svg?raw";
import rustSvg from "../assets/logos/skill-rust.svg?raw";
import flutterSvg from "../assets/logos/skill-flutter.svg?raw";
import avaloniaSvg from "../assets/logos/skill-avalonia.svg?raw";
import ffmpegSvg from "../assets/logos/skill-ffmpeg.svg?raw";
import dockerSvg from "../assets/logos/skill-docker.svg?raw";
import pgSvg from "../assets/logos/skill-postgresql.svg?raw";
import supabaseSvg from "../assets/logos/skill-supabase.svg?raw";
import htmlSvg from "../assets/logos/skill-html.svg?raw";
import cssSvg from "../assets/logos/skill-css.svg?raw";

export type StackItem = { name: string; svg: string };

export const languages: StackItem[] = [
  { name: "C# / .NET", svg: csharpSvg },
  { name: "Dart", svg: dartSvg },
  { name: "TypeScript", svg: tsSvg },
  { name: "JavaScript", svg: jsSvg },
  { name: "Java", svg: javaSvg },
  { name: "Python", svg: pySvg },
  { name: "Rust", svg: rustSvg },
];

export const tools: StackItem[] = [
  { name: "Flutter", svg: flutterSvg },
  { name: "Avalonia", svg: avaloniaSvg },
  { name: "FFmpeg", svg: ffmpegSvg },
  { name: "Docker", svg: dockerSvg },
  { name: "PostgreSQL", svg: pgSvg },
  { name: "Supabase", svg: supabaseSvg },
  { name: "HTML", svg: htmlSvg },
  { name: "CSS", svg: cssSvg },
];

export type Capability = {
  icon: "app" | "mobile" | "web" | "network" | "film" | "ai";
  title: string;
  text: string;
};

export const capabilities: Capability[] = [
  { icon: "app", title: "Logiciels desktop", text: "Windows, macOS, Linux" },
  { icon: "mobile", title: "Applications mobiles", text: "Android, Java, Flutter" },
  { icon: "web", title: "Web & API", text: "TypeScript, ASP.NET Core" },
  { icon: "network", title: "Réseau", text: "transfert local, proxy, VPN" },
  { icon: "film", title: "Vidéo & codecs", text: "FFmpeg, H.264, presets" },
  { icon: "ai", title: "Intégration IA", text: "entraînement, conversation" },
];

export const githubData = {
  user: "MeganAe",
  url: "https://github.com/MeganAe",
  repos: 212,
  products: 4,
  platforms: 4,
  tests: 221,
};
