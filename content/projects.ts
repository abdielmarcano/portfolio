export type ProjectTag =
  | "Software"
  | "Embedded"
  | "Security"
  | "CV"
  | "Hackathon"
  | "PCB"
  | "Analog"
  | "Game"
  | "AI"
  | "Unreal Engine"
  | "Hardware"
  | "Firmware"
  | "In Progress";

export interface ProjectLink {
  github?: string;
  devpost?: string;
  video?: string;
  download?: string;
  slides?: string;
  demoVideo?: string;
  presentationVideo?: string;
  sampleReport?: string;
}

export interface ProjectLocalVideo {
  src: string;
  poster?: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  dates: string;
  tags: ProjectTag[];
  stack: string[];
  impact: string;
  metrics?: { label: string; value: string }[];
  links: ProjectLink;
  media: { src: string; alt: string }[];
  thumbnail: string;
  heroImage?: string;
  /** Optional inline HTML5 video (no autoplay) */
  localVideo?: ProjectLocalVideo;
  /** Private repo: show badge and "Code samples available upon request" */
  privateRepo?: boolean;
  /** No repo link at all (e.g. contract work) */
  noRepo?: boolean;
  /** Include in featured list on home page */
  featured?: boolean;
  /** ISO date for sorting (e.g. "2025-08-01"); does not replace display dates */
  startDate?: string;
  /** ISO date or null for ongoing; used for sort only */
  endDate?: string | null;
  /** Ongoing project; used for sort (current first in Recent) */
  current?: boolean;
  sections: {
    problem?: string;
    solution: string;
    myRole?: string;
    architecture?: string;
    results?: string;
    learned?: string;
  };
  /** Resume-style bullet points (optional) */
  resumeBullets?: string[];
  /** Architecture flow steps (optional) */
  architectureSteps?: string[];
  /** Confidentiality / code samples note (optional) */
  confidentialityNote?: string;
}

export const projects: Project[] = [
  {
    slug: "pwnboxer",
    title: "PwnBoxer",
    dates: "Aug 2025 - May 2026",
    tags: ["Software", "Security", "Embedded"],
    featured: true,
    impact:
      "Secure device-to-cloud reporting platform with authenticated uploads, report generation, admin device management, and downloadable security artifacts. Won Best Electrical and Computer Engineering Project at the UCF Spring 2026 Senior Design Showcase.",
    stack: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "JWT",
      "RBAC",
      "API Keys",
      "Raspberry Pi",
      "ESP32",
    ],
    metrics: [
      { label: "Award", value: "Best ECE Project — UCF Spring 2026 Senior Design Showcase" },
      { label: "REST Endpoints", value: "~12" },
      { label: "Prisma Models", value: "~4" },
      { label: "Concurrent Uploads Tested", value: "10" },
      { label: "Generation Time", value: "Varies by upload size; sample artifact completed in 4m 46s" },
    ],
    links: {
      demoVideo: "https://youtu.be/EZH5D5jLriI",
      presentationVideo: "https://youtu.be/li2bjjIsUJ4",
      sampleReport: "/media/pwnboxer-sample-report.pdf",
    },
    privateRepo: true,
    noRepo: true,
    media: [
      { src: "/media/pwnboxer-report.png", alt: "Generated PwnBoxer report view" },
      { src: "/media/pwnboxer-dashboard.png", alt: "PwnBoxer dashboard with uploaded reports" },
      { src: "/media/pwnboxer-admin.png", alt: "PwnBoxer admin device management screen" },
      { src: "/media/pwnboxer-login.png", alt: "PwnBoxer login screen" },
      { src: "/media/pwnboxer-esp32.jpg", alt: "ESP32 development board used for device-side prototyping and communication testing" },
      { src: "/media/pwnboxer-cm4.jpg", alt: "Raspberry Pi CM4 setup used for embedded integration and device workflow testing" },
      { src: "/media/pwnboxer-integration-prototype.jpg", alt: "Early Pi and ESP32 prototype setup used during communication and display integration experiments" },
    ],
    thumbnail: "/media/pwnboxer-report.png",
    heroImage: "/media/pwnboxer-report.png",
    sections: {
      problem:
        "We needed a secure workflow for handling uploads from users and authenticated devices, generating structured reports, and managing device identities without mixing data across users or report runs.",
      solution:
        "I built a Node.js and Express backend with PostgreSQL and Prisma to support authenticated uploads, report lifecycle tracking, downloadable artifacts, and admin-managed device keys. The platform uses JWT auth, role-based access control, and revocable API keys for device identity.",
      myRole:
        "I primarily owned the full-stack security reporting platform (API, auth, report lifecycle, and portal workflows) and contributed to Raspberry Pi CM4 / ESP32-S3 communication prototyping. The project was completed for senior design and is not a public production deployment.",
      architecture:
        "The system combines a web portal, backend API, and edge-device workflow. Users and admins interact through the portal, uploads are processed through authenticated endpoints, reports are persisted in PostgreSQL via Prisma, and admin tooling manages per-user device identities and revocable API keys. I also contributed to early Raspberry Pi CM4 and ESP32-S3 integration by setting up the Kali-based Pi environment and prototyping device communication from the ESP32 using Arduino-based firmware.",
      results:
        "The platform was tested with 10 concurrent uploads, maintained correct report attribution across runs, and generated downloadable artifacts with timing dependent on upload size and analysis scope. The sample report included on this site completed in 4 minutes 46 seconds. The team won Best Electrical and Computer Engineering Project at the UCF Spring 2026 Senior Design Showcase.",
      learned:
        "This project strengthened my experience with secure API design, RBAC, device authentication, concurrent upload handling, artifact generation, and building software that bridges cloud workflows with embedded systems.",
    },
    resumeBullets: [
      "Built a secure Node.js and Express backend for authenticated uploads, report lifecycle tracking, and downloadable security artifacts.",
      "Implemented JWT auth, RBAC, and revocable API-key-per-device identity to support secure user and device workflows.",
      "Validated report attribution under 10 concurrent uploads and benchmarked report generation at roughly 1:45-2:00 per report in Docker.",
    ],
    architectureSteps: [
      "Users and admins authenticate through the web portal using role-based access control.",
      "Authenticated users or devices submit uploads through secure API endpoints.",
      "The backend stores report metadata and lifecycle state in PostgreSQL via Prisma.",
      "Admins manage per-user device identities and revocable API keys through the admin panel.",
      "Generated reports are exposed as downloadable artifacts through the portal.",
    ],
    confidentialityNote:
      "This repository is private due to team project constraints. Code samples and deeper implementation discussion are available upon request.",
    startDate: "2025-08-01",
    endDate: "2026-05-31",
    current: false,
  },
  {
    slug: "cyclops",
    title: "Cyclops",
    dates: "Oct 2025",
    tags: ["CV", "Embedded", "Hackathon"],
    stack: ["YOLO", "DeepSORT", "OpenCV", "Arduino", "ultrasonic sensing"],
    impact:
      "Real-time personal space awareness system built in 36 hours at a UCF hackathon, fusing ultrasonic sensing with computer vision to detect proximity violations and fire multi-modal alerts.",
    metrics: [
      { label: "Build Time", value: "36 hours (Hackathon)" },
      { label: "Alert Triggers", value: "2 (distance-based + time-based)" },
      { label: "Proximity Threshold", value: "< 5 inches" },
      { label: "Dwell Time Threshold", value: "> 60 seconds same tracked person" },
      { label: "Alert Channels", value: "2 (phone vibration + audible alarm)" },
      { label: "CV Models Used", value: "YOLO + DeepSORT" },
    ],
    links: {
      github: "https://github.com/KevinTTO5/KHVIII-Personal_Bubble",
      devpost: "https://devpost.com/software/cyclops-xgf2qb",
      demoVideo: "https://www.youtube.com/watch?v=osBvoKVQrD4",
    },
    media: [
      { src: "/media/cyclops-demo-collage.png", alt: "Cyclops CV detection demo with bounding boxes" },
      { src: "/media/cyclops-arduino-ultrasonic.png", alt: "Cyclops ultrasonic sensor wired to Arduino on breadboard" },
      { src: "/media/cyclops-backpack-closeup.png", alt: "Cyclops wearable backpack mounting for hardware" },
      { src: "/media/cyclops_code.png", alt: "Cyclops computer vision and sensor integration code" },
    ],
    thumbnail: "/media/cyclops-demo-collage.png",
    sections: {
      problem:
        "Tourists and travelers in crowded environments are frequent targets for pickpocketers who approach from behind or linger unusually close, and by the time you notice, it is often too late to react.",
      solution:
        "Cyclops is a wearable-integrated system that monitors the user's personal space using an ultrasonic sensor and a YOLO-based computer vision pipeline. If someone moves within 5 inches or the same tracked individual lingers behind the user for over 60 seconds, the system triggers a phone vibration and audible alarm to give a discreet early warning.",
      architecture:
        "The system runs two parallel detection tracks that feed a shared alert layer. An Arduino + ultrasonic sensor continuously measures distance and flags proximity breaches under 5 inches. In parallel, a YOLO + DeepSORT + OpenCV pipeline detects and tracks people in frame, assigning persistent IDs to monitor dwell time. Alert logic evaluates both inputs: a distance breach triggers immediately, or a time-based alert fires after 60 seconds of the same tracked ID remaining behind the user, with both cases driving phone vibration and an audible alarm.",
      results:
        "Delivered a functional, wearable-ready prototype within the 36-hour UCF hackathon window. The system reliably triggered multi-modal alerts under both proximity and time-based conditions, with real-time bounding box overlays confirming stable person tracking across multiple subjects in frame.",
      learned:
        "Reinforced how to bridge embedded hardware and computer vision into a single coherent alert system under tight time constraints, including sensor calibration, model selection, and serial communication between Arduino and the CV pipeline.",
    },
    startDate: "2025-10-01",
    endDate: "2025-10-31",
    current: false,
  },
  {
    slug: "ultrasonic-range-finder",
    title: "Custom Ultrasonic Range Finder",
    dates: "May 2025 - Jul 2025",
    tags: ["PCB", "Firmware", "Embedded"],
    stack: [
      "Autodesk Fusion 360",
      "HC-SR04",
      "LM324",
      "signal conditioning",
      "16x2 LCD",
      "C (MSP microcontroller firmware)",
      "PCB design",
      "firmware",
    ],
    impact:
      "Full hardware lifecycle project-from schematic and custom PCB layout in Autodesk Fusion 360 to fabricated board, stencil soldering, and MSP microcontroller firmware written in C-delivering an ultrasonic range finder with live LCD readout and potentiometer-controlled LED brightness. Stable measurement reached approximately 2000 mm.",
    metrics: [
      { label: "Stable Range Tested", value: "Approximately 2000 mm" },
      { label: "Display Outputs", value: "Distance (mm + in) + LED Brightness %" },
      { label: "Sensor", value: "HC-SR04" },
      { label: "Signal Conditioning", value: "LM324 Op-Amp" },
      { label: "PCB CAD", value: "Autodesk Fusion 360" },
      { label: "PCB", value: "Custom Designed, Fabricated, and Assembled" },
      { label: "Firmware", value: "C on MSP microcontroller" },
      { label: "Prototyping Stages", value: "Breadboard -> Custom PCB" },
    ],
    links: {},
    media: [
      { src: "/media/ultrasonic-schematic.png", alt: "Schematic" },
      { src: "/media/ultrasonic-pcb-layout.png", alt: "PCB layout board render designed in Autodesk Fusion 360" },
      { src: "/media/ultrasonic-assembled.jpg", alt: "Assembled board with LCD distance readout" },
      { src: "/media/ultrasonic-wiring-closeup.jpg", alt: "Breadboard prototype / wiring closeup" },
      { src: "/media/regulator_schematic.png", alt: "Supplemental schematic capture from sensor project" },
      { src: "/media/regulator_after_soldering.jpg", alt: "Sensor project board after soldering" },
      { src: "/media/regulator_pcb.png", alt: "Sensor project PCB layout screenshot" },
      { src: "/media/tested_regulator.jpg", alt: "Sensor project hardware tested and powered on" },
      { src: "/media/initial_sensor_pcb.jpg", alt: "Initial sensor PCB prototype photo" },
    ],
    thumbnail: "/media/ultrasonic-assembled.jpg",
    sections: {
      problem:
        "Designing a hardware system from scratch requires more than writing code-it demands understanding signal conditioning, PCB layout constraints, component tolerancing, and the gap between a breadboard prototype and a fabricated board. This project was built to demonstrate that full engineering pipeline end-to-end.",
      solution:
        "Designed and built a custom ultrasonic range finder using an HC-SR04 sensor and an LM324-based signal conditioning circuit. Firmware on an MSP microcontroller, written in C, measures distance in real time, displays readings in both millimeters and inches on a 16x2 LCD, and adjusts LED brightness dynamically via a potentiometer-with the brightness percentage also shown on the display.",
      architecture:
        "The system is built around three functional blocks wired through a custom PCB: sensing (HC-SR04 time-of-flight distance measurement), signal conditioning (LM324 op-amp stage to stabilize the signal), and output (C firmware on an MSP microcontroller computes distance in mm/in, maps potentiometer input to 0-100% LED brightness, and writes the values to the LCD in real time). Build pipeline: schematic -> PCB layout in Autodesk Fusion 360 -> board fabrication -> solder stencil application -> assembly -> firmware flashing -> validation testing.",
      results:
        "Delivered a fully fabricated, soldered, and firmware-flashed range finder that produced stable distance readings of approximately 2000 mm with live LCD output. Potentiometer-controlled LED dimming worked across the full 0-100% brightness range, with percentage feedback displayed alongside the distance readout.",
      learned:
        "Going from breadboard to fabricated PCB exposed real constraints that simulation and prototyping don't-trace routing, component placement for solderability, and stencil alignment during assembly. This project strengthened my hands-on ability to deliver the complete hardware development lifecycle from schematic to a board I could demo.",
    },
    architectureSteps: [
      "Schematic design for the sensing, conditioning, and display/control circuitry.",
      "PCB layout in Autodesk Fusion 360, then board fabrication and stencil preparation.",
      "Assembled the board (stencil + hand soldering) and validated electrical connections.",
      "MSP microcontroller firmware written in C reads HC-SR04 distance, computes mm/in, reads potentiometer input, and drives LED brightness with a 0-100% percentage readout on the LCD.",
      "Validation testing confirmed stable distance readings of approximately 2000 mm with live display output.",
    ],
    featured: true,
    startDate: "2025-05-01",
    endDate: "2025-07-31",
    current: false,
  },
  {
    slug: "fuzz-circuit",
    title: "Analog Guitar Fuzz Effect Circuit",
    dates: "Nov 2025",
    tags: ["Analog", "Hardware"],
    stack: ["op-amp design", "breadboard prototyping"],
    impact:
      "Analog guitar fuzz effect circuit built and validated on breadboard for UCF IEEE's Guitar Hero club - using an LM741 op-amp, verified with multimeter and oscilloscope, and confirmed working on a real guitar amp.",
    metrics: [
      { label: "Op-Amp", value: "LM741" },
      { label: "Prototype", value: "Breadboard" },
      { label: "Verification", value: "Multimeter + Oscilloscope" },
      { label: "Audio Test", value: "Real Guitar Amplifier" },
      { label: "Result", value: "Clear Fuzz Effect Confirmed" },
      { label: "Context", value: "UCF IEEE Guitar Hero Club" },
    ],
    links: {},
    media: [
      { src: "/media/fuzz-schematic.png", alt: "Fuzz effect circuit schematic" },
      { src: "/media/fuzz-breadboard.png", alt: "Fuzz effect breadboard prototype with multimeter" },
    ],
    thumbnail: "/media/fuzz-breadboard.png",
    sections: {
      problem:
        "Building analog audio effects requires understanding op-amp gain stages, biasing, and signal clipping at the component level. The goal was to prototype a working fuzz pedal circuit from a reference schematic and verify it produced a real, audible effect on a guitar amp.",
      solution:
        "Built an analog fuzz effect circuit on breadboard using an LM741 op-amp following a reference schematic. The circuit clips and saturates the guitar signal to produce a fuzz distortion effect. Verified the circuit behavior with a multimeter and oscilloscope before connecting to a guitar amp, where it produced a clear, audible fuzz effect.",
      architecture:
        "The circuit is organized into three functional stages: an input stage where the guitar signal enters through a 1/4\" jack into the op-amp input network, a gain and clipping stage where the LM741 op-amp is configured for high gain to push the signal into saturation and generate fuzz distortion, and an output stage where the clipped signal is routed through a volume control and out to the amplifier via a second 1/4\" jack.",
      results:
        "The breadboard prototype produced a clear, audible fuzz distortion effect when connected to a guitar amplifier. Signal behavior on the oscilloscope matched expected clipping characteristics before audio testing.",
      learned:
        "Analog audio circuits are sensitive to component values and layout even on a breadboard - small changes in biasing or gain resistors noticeably affect the character of the distortion. This project reinforced hands-on analog debugging skills and the importance of verifying signal behavior with instruments before testing in a real audio context.",
    },
    startDate: "2025-11-01",
    endDate: "2025-11-30",
    current: false,
  },
  {
    slug: "fitopia",
    title: "Fitopia",
    dates: "Jan 2025 - May 2025",
    tags: ["Software", "AI"],
    impact:
      "Gamified fitness web app with MongoDB Atlas persistence; I focused on backend/database wiring for auth, quests/progression, leaderboards, weekly routines, and a working Gemini workout assistant.",
    stack: [
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Mongoose",
      "React",
      "Gemini",
    ],
    metrics: [
      { label: "MongoDB Collections Used", value: "5" },
      { label: "Users Stored", value: "31 records shown" },
      { label: "Quests Stored", value: "35 records shown" },
      { label: "Weekly Routines Stored", value: "17 records shown" },
      { label: "Core Flows Demonstrated", value: "Auth, quests, leaderboard, routines, achievements, AI assistant" },
    ],
    links: {
      github: "https://github.com/abdielmarcano/fitopia",
      slides: "/media/fitopia-presentation.pdf",
    },
    media: [
      { src: "/media/fitopia-presentation-cover.png", alt: "Fitopia project presentation cover" },
      { src: "/media/fitopia-login.png", alt: "Fitopia login screen" },
      { src: "/media/fitopia-register.png", alt: "Fitopia registration screen" },
      { src: "/media/fitopia-forgot-password.png", alt: "Fitopia forgot password flow" },
      { src: "/media/fitopia-dashboard-daily-quests.png", alt: "Fitopia dashboard with daily quests" },
      { src: "/media/fitopia-modal-daily-quests.png", alt: "Daily quests detail modal" },
      { src: "/media/fitopia-dashboard-leaderboard.png", alt: "Leaderboard view in Fitopia" },
      { src: "/media/fitopia-modal-leaderboard.png", alt: "Leaderboard detail modal" },
      { src: "/media/fitopia-dashboard-settings.png", alt: "Settings view for weekly routine configuration" },
      { src: "/media/fitopia-modal-weekly-routine.png", alt: "Weekly routine editor modal" },
      { src: "/media/fitopia-dashboard-chat.png", alt: "Gemini workout partner entry point from the dashboard" },
      { src: "/media/fitopia-modal-workout-partner-working.png", alt: "Working Gemini workout assistant chat modal" },
      { src: "/media/fitopia-dashboard-achievements.png", alt: "Achievements view showing progression and unlocks" },
      { src: "/media/fitopia-modal-achievements.png", alt: "Achievements detail modal" },
      { src: "/media/fitopia-mongodb-overview.png", alt: "MongoDB Atlas overview (fitgame) showing collections and record counts" },
    ],
    thumbnail: "/media/fitopia-dashboard-daily-quests.png",
    sections: {
      problem:
        "Traditional fitness tracking can feel repetitive and low-engagement. The project aimed to make progress tracking more motivating through persistent routines, gamified quests, progression, and social comparison features.",
      solution:
        "Fitopia is a gamified fitness web app backed by MongoDB Atlas. My primary contribution was building and wiring backend + database functionality for core app features: authentication/account flows, quest/progression logic, leaderboard/social data, weekly routine persistence, and a now-working Gemini workout assistant integrated into the app’s chat flow.",
      architecture:
        "Full-stack MERN-style application with persistent MongoDB Atlas collections (fitgame) for Users, Quests, weeklyroutines, workouts, and Fitness Data Table. Backend routes and data modeling support key flows like login/register/password reset, quest state/progression, leaderboard reads, and routine editing; the Gemini assistant is connected as an app feature that reads/writes through the same authenticated application flow.",
      results:
        "Demonstrated end-to-end app flows with persistent data: auth (login/register/password reset), dashboard quests, leaderboard views, weekly routine editing, achievements, and a working Gemini workout partner. Database proof is visible in MongoDB Atlas (fitgame) with Users (31), Quests (35), and weeklyroutines (17) records shown in screenshots.",
      learned:
        "Backend feature wiring across a full-stack app, MongoDB Atlas data modeling/persistence, authentication-linked data flows, and integrating AI-generated functionality (Gemini) into an existing product workflow without overpromising frontend ownership.",
    },
    startDate: "2025-01-01",
    endDate: "2025-05-31",
    current: false,
  },
  {
    slug: "burnt-out",
    title: "Burnt Out",
    dates: "Jul 2025",
    tags: ["Game", "AI", "Unreal Engine"],
    stack: ["Unreal Engine 5", "Blueprints", "C++", "Behavior Trees"],
    impact:
      "First-person horror game built in UE5 over 4-5 weeks for a UCF game jam - featuring multi-state AI, two playable levels with original puzzle mechanics, and a full player system. Won the Most Complete award.",
    metrics: [
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Build Time", value: "4-5 Weeks" },
      { label: "Team Size", value: "4 People" },
      { label: "Playable Levels", value: "2 + Hub" },
      { label: "AI States", value: "3 (Patrol, Chase, Attack)" },
      { label: "Award", value: "Most Complete - UCF AI for Game Programming" },
      { label: "Cutscenes", value: "Written, Voiced, and Edited" },
      { label: "Endings", value: "2" },
    ],
    links: {
      github: "https://github.com/KevinTTO5/Burnt-Out",
      video: "https://www.youtube.com/watch?v=B6Qiu-UxQJM",
      download:
        "https://drive.google.com/file/d/1l_ncYswWHcSyKinCwPuLZgPnxyy3KuGB/view?usp=sharing",
    },
    media: [
      { src: "/media/burntout_title_screen.png", alt: "Burnt Out title screen" },
      { src: "/media/burntout_hub1.png", alt: "Hub area - first view" },
      { src: "/media/burntout_level1_1.png", alt: "Level 1 - dark office environment" },
      { src: "/media/burntout_level1_4.png", alt: "Level 1 - hallway and atmosphere" },
      { src: "/media/burntout_level2_5.png", alt: "Level 2 - final area" },
      { src: "/media/burntout_level2_1.png", alt: "Level 2 - maze office environment" },
      { src: "/media/burntout_level2_4.png", alt: "Level 2 - alternate camera angle" },
      { src: "/media/burntout_credit_screen.png", alt: "Burnt Out credit screen" },
    ],
    thumbnail: "/media/burntout-gameplay.png",
    sections: {
      problem:
        "Building a complete, playable game under a tight deadline requires more than design ideas - it demands working gameplay systems, functional AI behavior, and a level structure that actually ships. Many short-deadline game projects fail to reach a complete, playable state.",
      solution:
        "Built a first-person horror game in Unreal Engine 5 where the player escapes a haunted house and navigates two increasingly complex levels - a dark office and a maze-like office - while being stalked by an AI boss with patrol, chase, and attack states. Each level requires solving puzzles to progress, with the house acting as a safe hub between levels. I also wrote, voice acted, and edited the in-game cutscenes - atmospheric black screen sequences with original audio that set the tone between levels. I also designed and built the title screen and credits screen, including the cinematic camera sequence that plays in the background of the title screen. The game features two distinct endings depending on how the player performs.",
      architecture:
        "The game is structured around three core systems: player systems (character controller handling movement, interaction, and state; HUD/UI; built in Blueprints and C++), AI system (boss enemy with patrol, chase, and attack states implemented with Unreal's behavior tree system), and level structure (hub safe house -> Level 1 dark office with puzzle -> Level 2 maze office with puzzle). Levels gate progression behind completion conditions to ensure the build ships as a playable end-to-end experience.",
      results:
        "Shipped a fully playable build within the jam window with two complete levels, functional AI, and working puzzle mechanics. Won the Most Complete award out of submitted projects in the UCF AI for Game Programming course.",
      learned:
        "Shipping a game under a deadline means making fast, pragmatic decisions about scope - cutting what doesn't serve the core loop and doubling down on what makes the game feel complete. This project sharpened my ability to work across Blueprints and C++ simultaneously, coordinate with teammates on shared systems, and deliver something fully playable under pressure.",
    },
    architectureSteps: [
      "Player systems implement movement, interaction, and state handling, with HUD/UI for feedback and progression.",
      "A boss enemy uses behavior trees to transition between patrol, chase, and attack states based on player detection.",
      "A hub safe house serves as a reset/safe zone between Level 1 (dark office puzzle) and Level 2 (maze office puzzle).",
      "Puzzle completion conditions gate progression between the hub and each level.",
      "Shared state and triggers wire gameplay systems together to keep the experience shippable end-to-end.",
    ],
    startDate: "2025-07-01",
    endDate: "2025-07-31",
    current: false,
  },
  {
    slug: "crown-reserve-systems-portal",
    title: "Crown Reserve Systems Portal",
    dates: "Nov 2025 - Present",
    tags: ["Software"],
    featured: false,
    impact:
      "Contract Lead Full-Stack work: privately tested multi-tenant client portal with inventory, CRM, reminders, marketing, and funnel workflows (Next.js, Supabase, PostgreSQL).",
    stack: [
      "Next.js",
      "Supabase (Postgres)",
      "RLS",
      "RBAC",
      "Vercel",
      "Sentry",
    ],
    thumbnail: "/media/velmora-dashboard-selective-blur.png",
    heroImage: "/media/velmora-dashboard-selective-blur.png",
    privateRepo: true,
    noRepo: true,
    metrics: [
      { label: "Dev/Test Tenant Accounts", value: "3 (development/test only — not paying customers)" },
      { label: "Dev/Test Users", value: "9 users across those test tenants" },
      { label: "Portal Modules Built", value: "6" },
      { label: "Security Model", value: "RLS + RBAC" },
      { label: "Status", value: "Private testing only" },
    ],
    links: {},
    sections: {
      problem:
        "The client needed a centralized portal to manage inventory, client relationships, reminders, marketing workflows, and funnel tracking across tenant-separated business operations.",
      solution:
        "As Lead Full-Stack Developer under contract, I built a multi-tenant portal using Next.js and Supabase with Postgres row-level security, role-based access control, reusable admin workflows, and modular tools for inventory, CRM, reminders, marketing, and funnel tracking.",
      architecture:
        "The platform uses a Next.js frontend with Supabase/Postgres as the data layer, enforcing tenant isolation with RLS and organizing workflows into modular views for inventory, CRM, reminders, marketing, funnel analytics, and settings.",
      results:
        "The portal is in private testing. Development/test coverage included 3 tenant accounts and 9 users used for validation — these are not paying customers or public adoption metrics. Monitoring, modular workflows, and tenant-isolated access controls were exercised across multiple business functions.",
      learned:
        "This project deepened my experience with multi-tenant architecture, secure data partitioning, role-based systems, and designing workflow-heavy interfaces for real users.",
    },
    media: [
      {
        src: "/media/velmora-dashboard-selective-blur.png",
        alt: "Blurred analytics dashboard view of the Crown Reserve Systems portal",
      },
      {
        src: "/media/velmora-inventory-selective-blur.png",
        alt: "Blurred inventory management view with filters and table workflows",
      },
      {
        src: "/media/velmora-marketing-selective-blur.png",
        alt: "Blurred marketing workflow view showing campaign and content tools",
      },
    ],
    resumeBullets: [
      "Built a multi-tenant client portal using Next.js and Supabase (Postgres), enforcing tenant isolation with Row Level Security (RLS).",
      "Implemented role-based access control, reusable admin workflows, and tenant-aware modules for inventory, CRM, reminders, marketing, and funnel operations.",
      "Validated the portal in private testing across development/test tenant accounts, and deployed production-style monitoring with Sentry and Vercel.",
    ],
    architectureSteps: [
      "Tenant-authenticated users access the portal through role-based routes.",
      "Requests are handled by the Next.js frontend and securely scoped to tenant data.",
      "Supabase/Postgres enforces tenant isolation with Row Level Security.",
      "Modules like Inventory, Clients, Reminders, Marketing, and Funnel operate on shared but tenant-partitioned data.",
    ],
    confidentialityNote:
      "This project was built under contract and the repository remains private. Only approved blurred screenshots are shown. Code samples and deeper implementation discussion are available upon request.",
    startDate: "2025-11-01",
    endDate: null,
    current: true,
  },
  {
    slug: "car-hud-pi",
    title: "Car HUD Pi",
    dates: "Nov 2025 - May 2026",
    tags: ["Embedded", "Software"],
    featured: true,
    stack: [
      "Python",
      "FastAPI",
      "WebSockets",
      "React",
      "Vite",
      "TypeScript",
      "Kotlin",
      "Raspberry Pi",
      "OBD-II",
      "Bash",
    ],
    impact:
      "Completed and tested Raspberry Pi vehicle HUD — FastAPI backend, WebSocket pipeline, React HUD UI, and Kotlin Android companion — with verified live OBD-II vehicle data (including speed and RPM) from a real vehicle. Built for IEEE UCF's internal project competition.",
    metrics: [
      { label: "Backend", value: "Python · FastAPI · WebSockets" },
      { label: "Frontend", value: "React · Vite · TypeScript" },
      { label: "Android App", value: "Kotlin" },
      { label: "Hardware", value: "Raspberry Pi + LCD" },
      { label: "Vehicle Data", value: "Live OBD-II (speed, RPM) from a real vehicle" },
      { label: "Scripts", value: "Bash setup and start scripts" },
      {
        label: "Status",
        value: "Completed & tested · IEEE UCF Internal Project Competition",
      },
    ],
    links: {
      github: "https://github.com/abdielmarcano/car-hud-pi",
    },
    media: [
      {
        src: "/media/carhud-night-display.jpeg",
        alt: "Car HUD Pi night display showing the HUD interface photographed in low light",
      },
      {
        src: "/media/carhud-dashboard-prototype.jpeg",
        alt: "Car HUD Pi browser/dashboard prototype running on a laptop during development",
      },
      {
        src: "/media/carhud-navigation-monitor.jpeg",
        alt: "Car HUD Pi navigation and map view running on a monitor during testing",
      },
      {
        src: "/media/carhud-lcd-hardware.jpeg",
        alt: "Car HUD Pi LCD hardware setup/test photo — screen shows Phone Disconnected status during interface testing",
      },
      {
        src: "/media/carhud_prototype1.jpg",
        alt: "Earlier Car HUD Pi browser HUD prototype UI for windshield projection",
      },
      {
        src: "/media/carhud_appmenu.png",
        alt: "Car HUD Pi Android companion app main menu in Android Studio",
      },
      {
        src: "/media/carhud_appbd2.png",
        alt: "Car HUD Pi Android companion app secondary UI screen in Android Studio",
      },
      {
        src: "/media/carhud_apppresets.png",
        alt: "Car HUD Pi Android companion app presets configuration",
      },
    ],
    thumbnail: "/media/carhud-night-display.jpeg",
    heroImage: "/media/carhud-night-display.jpeg",
    localVideo: {
      src: "/media/carhud-in-car-demo-landscape.mp4",
      caption:
        "In-car demonstration of the HUD prototype (landscape), including the live display pipeline used with OBD-II vehicle data.",
    },
    sections: {
      problem:
        "Older vehicles lack modern smart displays that show real-time driving data like speed and RPM. Aftermarket solutions are expensive, vehicle-specific, or require permanent modifications. The goal was to build a low-cost, universal add-on HUD that works across vehicle models.",
      solution:
        "I led full system architecture and implementation: a Python FastAPI backend, WebSocket real-time data pipeline, React + Vite HUD frontend, Android companion app in Kotlin, and Bash setup and start scripts for the Pi environment. The Raspberry Pi is the central compute unit. Live vehicle telemetry is read through OBD-II and streamed over WebSockets to a browser-based React HUD designed for windshield projection. An Android companion app provides configuration and monitoring. No permanent vehicle modifications are required.",
      architecture:
        "The system is built around four components. OBD-II input reads live vehicle telemetry (including speed and RPM) from a real vehicle and passes it to the Pi backend. The FastAPI backend in Python processes vehicle data and broadcasts it over WebSockets. The React HUD frontend in TypeScript is a browser-based display optimized for windshield projection, consuming the WebSocket stream in real time. The Android companion app in Kotlin provides remote configuration and system monitoring.",
      results:
        "Completed and tested end-to-end: FastAPI backend, WebSocket pipeline, React HUD frontend, Android companion app, and LCD/hardware display. Successfully connected to a real vehicle through OBD-II and read live vehicle data including speed and RPM. Photos and the in-car demo video document the HUD UI and hardware setup; the LCD setup photo correctly captions a Phone Disconnected interface-test state and is not presented as phone-link proof.",
      learned:
        "Building a real-time data pipeline that stays low-latency enough for driver-facing feedback requires careful WebSocket management and minimal processing overhead between OBD-II input and display output. This project sharpened skills across full-stack development, embedded Linux, vehicle interfaces, and Android.",
    },
    startDate: "2025-11-01",
    endDate: "2026-05-31",
    current: false,
  },
  {
    slug: "analog-distortion-pedal",
    title: "Analog Distortion Pedal",
    dates: "Jan 2026 - May 2026",
    tags: ["Analog", "Hardware", "PCB"],
    stack: [
      "KiCad",
      "op-amp gain staging",
      "diode clipping",
      "tone shaping",
      "true bypass",
      "breadboard prototyping",
      "PCB design",
    ],
    impact:
      "Completed and tested fully analog guitar distortion pedal for UCF IEEE's Guitar Hero club — custom PCB with op-amp gain staging, diode clipping, tone shaping, true bypass switching, and low-noise power supply filtering. Photos show bare and populated PCBs (not a finished enclosure).",
    metrics: [
      { label: "Circuit Type", value: "Fully analog" },
      { label: "Clipping", value: "Diode-based" },
      { label: "Tone Control", value: "Passive filter network" },
      { label: "Bypass", value: "True bypass footswitch" },
      { label: "Prototype", value: "Breadboard -> Custom PCB" },
      { label: "PCB", value: "Designed in KiCad, fabricated, and populated" },
      { label: "Context", value: "UCF IEEE Guitar Hero Club" },
      { label: "Status", value: "Completed & tested" },
    ],
    links: {},
    media: [
      {
        src: "/media/distortion-pedal-populated-pcb.jpeg",
        alt: "Populated/assembled custom analog distortion pedal PCB (not a finished enclosure)",
      },
      {
        src: "/media/distortion-pedal-bare-pcb.jpeg",
        alt: "Bare fabricated analog distortion pedal PCB before component population",
      },
      {
        src: "/media/distortionpedal_schematic.png",
        alt: "Analog distortion pedal circuit schematic",
      },
      {
        src: "/media/distortionpedal_pcb.png",
        alt: "Analog distortion pedal PCB design render in KiCad",
      },
      {
        src: "/media/distortionpedal_prototype.png",
        alt: "Analog distortion pedal breadboard prototype",
      },
    ],
    thumbnail: "/media/distortion-pedal-populated-pcb.jpeg",
    heroImage: "/media/distortion-pedal-populated-pcb.jpeg",
    sections: {
      problem:
        "Designing a guitar distortion pedal from scratch requires understanding analog signal processing at the component level - gain staging, waveform clipping, frequency shaping, and noise management. The goal was to build a fully functional, PCB-based distortion pedal through the complete design and build lifecycle.",
      solution:
        "Designed and built a fully analog distortion pedal circuit with op-amp gain staging, diode-based clipping for harmonic distortion, a tone control network for frequency shaping, true bypass switching via footswitch, and low-noise power supply filtering. Work progressed from breadboard prototyping through custom PCB fabrication and population.",
      myRole:
        "Solo design and build - I selected the circuit topology, researched and selected components (op-amps, diodes, resistors, capacitors), designed the schematic, prototyped on breadboard for early signal testing, designed the PCB layout in KiCad, and assembled/populated the fabricated board. The project was completed and tested; photos document the bare and populated PCBs rather than a finished enclosure.",
      architecture:
        "The pedal is built around four signal stages. The input and gain stage uses an op-amp configured for variable gain, driving the signal into clipping. The clipping stage uses a diode clipping network to produce harmonic distortion with controlled character. Tone control is a passive filter network that shapes the frequency response of the distorted signal. The output and bypass stage uses a true bypass footswitch to route the signal through the circuit or directly to the output. Low-noise power supply filtering prevents audio artifacts.",
      results:
        "Completed and tested the distortion circuit through breadboard validation, KiCad PCB design, fabrication, and board population. Attached photos show the bare fabricated PCB and the populated/assembled board — not a finished pedal enclosure.",
      learned:
        "Analog pedal design exposes the direct relationship between component values and sonic character - small changes in clipping diode selection or gain resistor values produce noticeably different distortion textures. This project deepened understanding of audio signal processing at the component level and the full PCB design-to-fabrication pipeline.",
    },
    startDate: "2026-01-01",
    endDate: "2026-05-31",
    current: false,
  },
  {
    slug: "vision-tracked-interactive-turret",
    title: "Vision-Tracked Interactive Turret",
    dates: "July 2026",
    tags: ["CV", "Embedded", "Hardware"],
    featured: true,
    stack: [
      "XIAO ESP32-S3 Sense",
      "Python",
      "OpenCV",
      "Haar cascade",
      "MJPEG",
      "USB serial",
      "MG996R servo",
    ],
    impact:
      "Working face-tracking / servo-control prototype for a proposed Star Wars-inspired prop — PC-side OpenCV face detection drives an MG996R servo over USB serial from an XIAO ESP32-S3 Sense camera stream.",
    metrics: [
      { label: "Camera", value: "XIAO ESP32-S3 Sense" },
      { label: "Vision", value: "OpenCV Haar cascade (PC/laptop)" },
      { label: "Stream", value: "MJPEG camera server" },
      { label: "Actuator", value: "MG996R servo" },
      { label: "Link", value: "USB serial" },
      { label: "Status", value: "Working face-tracking servo prototype" },
    ],
    links: {
      github: "https://github.com/abdielmarcano/vision-tracked-interactive-turret",
    },
    media: [
      {
        src: "/media/turret-servo-prototype.jpg",
        alt: "Vision-tracked interactive turret servo prototype hardware",
      },
      {
        src: "/media/turret-hardware-wiring.jpg",
        alt: "Turret hardware wiring and ESP32-S3 Sense camera setup",
      },
      {
        src: "/media/turret-demo-preview.jpg",
        alt: "Still preview from the face-tracking servo demonstration",
      },
    ],
    thumbnail: "/media/turret-servo-prototype.jpg",
    heroImage: "/media/turret-servo-prototype.jpg",
    localVideo: {
      src: "/media/turret-demonstration.mp4",
      poster: "/media/turret-demo-preview.jpg",
      caption:
        "Working demo: PC-side face detection tracks a face and drives the MG996R servo. Family photos in frame are blurred.",
    },
    sections: {
      problem:
        "A proposed Star Wars-inspired interactive prop needed a practical way to detect a nearby face and aim a servo-mounted turret. The goal for this stage was a working vision-to-servo prototype — not a finished room installation.",
      solution:
        "Built a working face-tracking / servo-control prototype. An XIAO ESP32-S3 Sense provides the camera MJPEG stream. A PC/laptop runs Python OpenCV face detection (Haar cascade), computes servo position, and sends commands over USB serial to drive an MG996R servo. Face inference runs on the PC, not on the ESP32.",
      architecture:
        "Camera capture starts on the XIAO ESP32-S3 Sense and is served as an MJPEG stream (building on Seeed Studio / Espressif camera-server examples — see the repository ATTRIBUTION docs; the upstream example server was not authored from scratch). The PC consumes the stream, runs OpenCV Haar-cascade face detection, maps face position to a servo angle, and transmits commands over USB serial to the servo controller. PIR triggering and a complete room installation were not fully integrated in this prototype stage.",
      results:
        "Delivered a working demonstration where the servo tracks a detected face. The included video shows the tracking behavior with family photos blurred for privacy.",
      learned:
        "Separating camera streaming on the ESP32-S3 from PC-side vision keeps the prototype bring-up fast while keeping latency and detection quality manageable. Crediting and extending vendor camera-server examples is a practical path versus rewriting low-level camera plumbing from scratch.",
    },
    startDate: "2026-07-01",
    endDate: "2026-07-31",
    current: false,
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    dates: "Jan 2026 - Present",
    tags: ["Software"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    impact:
      "Custom developer portfolio built from scratch in Next.js — structured around technical credibility with project writeups, key metrics, architecture sections, and media galleries. Deployed on Vercel and actively maintained.",
    metrics: [
      { label: "Framework", value: "Next.js · React · TypeScript" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Deployment", value: "Live on Vercel" },
      { label: "Projects Featured", value: "11" },
      { label: "Status", value: "Deployed · actively maintained" },
    ],
    links: {
      github: "https://github.com/abdielmarcano/portfolio",
    },
    media: [
      {
        src: "/media/portfolio_projects.png",
        alt: "Portfolio projects listing page with search and tag filters",
      },
      {
        src: "/media/portfolio_crown.png",
        alt: "Portfolio project detail page for Crown Reserve Systems Portal",
      },
      {
        src: "/media/portfolio_pwnboxer.png",
        alt: "Portfolio project detail page for PwnBoxer",
      },
    ],
    thumbnail: "/media/portfolio_projects.png",
    heroImage: "/media/portfolio_projects.png",
    sections: {
      problem:
        "Most developer portfolios are either template-based or lack the technical depth to show engineering quality. The goal was to build a custom portfolio from scratch that demonstrates full-stack ownership and presents projects with the same rigor as real engineering documentation.",
      solution:
        "Built a fully custom portfolio site in Next.js and React with TypeScript. Each project page follows a consistent structure - impact summary, problem, solution, my role, architecture, key metrics, results, and media. Designed to be recruiter-readable while still showing real technical depth.",
      myRole:
        "Solo design and development - architected the project data structure, built all page components, designed the layout system, and implemented the full project page format from scratch.",
      architecture:
        "The site is built as a Next.js app with a centralized project data layer. Each project is defined as a structured data object and rendered through shared page components - keeping content and presentation cleanly separated.",
      results:
        "Live portfolio deployed on Vercel with project pages, consistent formatting, and media galleries with proof of work. Continuously updated as projects and career details change.",
      learned:
        "Building a portfolio from scratch forces you to think about information architecture - how to present technical work clearly to someone who has 30 seconds to evaluate it. This project sharpened my ability to document engineering work concisely and structure content for a non-technical audience without losing technical credibility.",
    },
    startDate: "2026-01-01",
    endDate: null,
    current: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedSlugs(): string[] {
  return [
    "pwnboxer",
    "vision-tracked-interactive-turret",
    "car-hud-pi",
    "ultrasonic-range-finder",
  ];
}
