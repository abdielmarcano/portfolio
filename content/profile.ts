export const profile = {
  name: "Abdiel Marcano",
  tagline:
    "University of Central Florida B.S. Computer Engineering graduate (May 2026) — full-stack/backend, embedded systems, electronics, and hardware integration.",
  summary: [
    "I build secure APIs, embedded systems, and full-stack applications that bridge software and hardware.",
    "Pursuing software, embedded, and hardware/systems-integration engineering roles.",
  ],
  headshot: "/media/headshot.jpg",
  email: "abdielmarcano11@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdiel-marcano/",
  github: "https://github.com/abdielmarcano",
  resume: {
    software: "/media/resume-software.pdf",
    embedded: "/media/resume-embedded.pdf",
    hardware: "/media/resume-hardware.pdf",
  },
  education: {
    school: "University of Central Florida",
    degree: "B.S. Computer Engineering",
    graduated: "May 2026",
    gpa: "3.4",
  },
  organizations: [
    "Knight Hacks",
    "IEEE of UCF",
    "Knights Experimental Rocketry (KXR)",
  ],
  lookingFor:
    "Full-time software, embedded, and hardware/systems-integration engineering roles. Actively applying now.",
} as const;

export type Profile = typeof profile;
