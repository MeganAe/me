import shotCompressor from "../assets/shot-compressor.jpg";
import shotSendy from "../assets/shot-sendy.jpg";
import shotStrate from "../assets/shot-strate.jpg";
import shotIpa from "../assets/shot-ipa.jpg";
import logoVideo from "../assets/logos/logo-videocompressor.svg";
import logoSendy from "../assets/logos/logo-sendy.svg";
import logoStrate from "../assets/logos/logo-strate.png";
import logoIpa from "../assets/logos/logo-interview.svg";

export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  stack: string;
  platforms: string;
  image: string;
  imageKind: "wide" | "phone";
  alt: string;
  logo: string;
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "videocompressor",
    name: "VideoCompressor",
    tagline: "La vidéo passe, la qualité reste.",
    description:
      "Compresseur de vidéo cross-platform. Glisser-déposer, presets d'encodage, CRF de 0 (lossless) à 51, FastStart pour le streaming web. H.264 et AAC.",
    stack: "C# / .NET / Avalonia / FFmpeg",
    platforms: "Windows / macOS / Linux",
    image: shotCompressor,
    imageKind: "wide",
    alt: "Fenêtre de VideoCompressor : fichier source, paramètres vidéo et audio, CRF 22",
    logo: logoVideo,
    repo: "https://github.com/MeganAe/videoc",
  },
  {
    slug: "sendy",
    name: "Sendy",
    tagline: "Partage sans détour.",
    description:
      "Tes fichiers, tes appareils, tout simplement. Envoyer, recevoir, historique, mes colis. Fichier, dossier, texte, presse-papiers. Les appareils du même réseau Wi-Fi apparaissent dans la liste.",
    stack: "Dart / Flutter / Rust",
    platforms: "Windows / Linux / Android",
    image: shotSendy,
    imageKind: "wide",
    alt: "Fenêtre de Sendy : glisser-déposer des fichiers, appareils à proximité",
    logo: logoSendy,
    repo: "https://github.com/MeganAe/Sendy",
  },
  {
    slug: "strate",
    name: "Strate",
    tagline: "Voyez ce qui pèse. Gardez ce qui compte.",
    description:
      "Mesure ton disque, trouve les gros fichiers et les doublons, nettoie des cibles connues. Démarrage, état des disques, rapport HTML. Rien n'est supprimé sans confirmation.",
    stack: "C# / .NET 10 / WPF",
    platforms: "Windows",
    image: shotStrate,
    imageKind: "wide",
    alt: "Tableau de bord de Strate : disque système à 92,8 %, espace récupérable, liste des volumes",
    logo: logoStrate,
    repo: "https://github.com/MeganAe/strate",
  },
  {
    slug: "interview-prep-ai",
    name: "Interview Prep AI",
    tagline: "Vous avez l'expérience. Trouvez les mots.",
    description:
      "Préparation aux entretiens en français. À partir de ton CV, sans chronomètre, avec des exemples concrets. v5.1, 221 tests réussis.",
    stack: "TypeScript / ASP.NET Core / Supabase",
    platforms: "Web / Docker / Render",
    image: shotIpa,
    imageKind: "wide",
    alt: "Site d'Interview Prep AI : « Vous avez l'expérience. Trouvez les mots. »",
    logo: logoIpa,
    live: "https://interviewprepai-n4u3.onrender.com",
    repo: "https://github.com/MeganAe/interviewprepai",
  },
];

export const alsoOnline = [
  { name: "M3E Canvas", url: "https://lnkiai.github.io/m3e-canvas/" },
  { name: "NetInit", url: "https://netinit.vercel.app" },
  { name: "Amara", url: "https://amara-lilac.vercel.app" },
];

export const github = {
  user: "MeganAe",
  url: "https://github.com/MeganAe",
  repos: 212,
  products: 4,
  platforms: 4,
  tests: 221,
};
