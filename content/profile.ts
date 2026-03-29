export const profile = {
  name: "Abdiel Marcano",
  tagline:
    "Computer Engineering student building secure full-stack + embedded systems.",
  summary: [
    "I build secure APIs, embedded systems, and full-stack applications.",
    "Targeting Software and Embedded/Firmware roles.",
  ],
  headshot: "/media/headshot.jpg",
  email: "abdielmarcano11@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdiel-marcano/",
  github: "https://github.com/TheBackDimple",
  resume: {
    software: "/media/resume-software.pdf",
    embedded: "/media/resume-embedded.pdf",
  },
  education: {
    school: "University of Central Florida",
    gpa: "3.4",
  },
  organizations: [
    "Knight Hacks",
    "IEEE of UCF",
    "Knights Experimental Rocketry (KXR)",
  ],
  lookingFor:
    "Full-time backend, full-stack, or embedded systems roles starting May 2026. Actively applying now.",
} as const;

export type Profile = typeof profile;
