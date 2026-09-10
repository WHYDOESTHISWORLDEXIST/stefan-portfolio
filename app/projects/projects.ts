export type Project = {
  slug: string;
  year: string;
  title: string;
  shortDescription: string;
  tools: string;
  role: string;
  overview: string;
  contribution: string[];
  experience: string[];
  currentFocus: string;
  nextStep: string;
  website?: { label: string; href: string };
  source?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: 'deck-deca-practice',
    year: 'In development',
    title: 'DECK — DECA practice app',
    shortDescription: 'A study app with practice tests, a question bank, event vocabulary, daily roleplays, and progress tracking.',
    tools: 'TypeScript · Next.js · Python · Supabase',
    role: 'Software contributor',
    overview: 'DECK is a student-built DECA practice platform. Its Next.js interface turns a large, committed question bank into tests, vocabulary review, daily roleplays, and progress tools, while offline Python utilities generate and check the learning material.',
    contribution: [
      'Improved student-facing explanations, live-roleplay messaging, instructional-area language, and the developers page.',
      'Worked on Python quality tooling that checks question pools, reports content length, verifies the bank, and catches unguarded edge cases.',
      'Helped connect content-generation work to the parts of the interface students actually see.',
    ],
    experience: [
      'Contributing safely to a large shared repository with an established product and workflow.',
      'Tracing issues across Next.js routes, interface copy, JSON data, and Python generation scripts.',
      'Building quality checks around AI-assisted educational content instead of assuming generated material is correct.',
      'Writing clearer product language for students preparing under time pressure.',
    ],
    currentFocus: 'Improving question quality, instructional clarity, and the reliability of generated practice material.',
    nextStep: 'Continue strengthening content validation and make practice feedback more useful to students.',
    source: { label: 'View DECK on GitHub', href: 'https://github.com/9Sura/DECK-APP' },
  },
  {
    slug: 'hydra-robotic-arm-controls',
    year: 'In development',
    title: 'Hydra robotic arm controls',
    shortDescription: 'A Raspberry Pi and Arduino control system for a cable-driven arm with calibration, encoder feedback, clutch control, and safety monitoring.',
    tools: 'Python · Arduino / C++ · Raspberry Pi',
    role: 'Documentation and software contributor',
    overview: 'Hydra is a browser-controlled, cable-driven robotic arm that uses one motor with electronically controlled clutches. A Raspberry Pi runs the high-level interface and control service while an Arduino handles timing and encoder-sensitive hardware work.',
    contribution: [
      'Turned dense project notes and system behavior into a maintained technical README that explains setup, architecture, calibration, controls, and safety.',
      'Mapped the relationship between the browser interface, Flask and Socket.IO service, serial protocol, Arduino firmware, encoders, motor, and solenoids.',
      'Documented operational safeguards such as watchdogs, limits, calibration requirements, and safe shutdown behavior.',
    ],
    experience: [
      'Understanding a mixed hardware-and-software system before changing or explaining it.',
      'Communicating embedded control behavior clearly enough for another builder to set up and troubleshoot the arm.',
      'Seeing how network commands become physical movement through Python, serial messages, C++, GPIO, and feedback sensors.',
      'Treating safety documentation as part of the engineering work, not an afterthought.',
    ],
    currentFocus: 'Making the control stack understandable, reproducible, and safer to operate during development.',
    nextStep: 'Keep the documentation synchronized as control logic, calibration, and hardware behavior evolve.',
    source: { label: 'View Hydra on GitHub', href: 'https://github.com/eberhart441/hydra' },
  },
  {
    slug: 'stackwise-tolerance-calculator',
    year: 'In development',
    title: 'Stackwise tolerance calculator',
    shortDescription: 'A browser-based engineering tool for tolerance stacks, simulation, design guidance, saved projects, and report exports.',
    tools: 'TypeScript · Next.js · Engineering math',
    role: 'Lead developer and product owner',
    overview: 'Stackwise helps engineers explore how part variation affects an assembly. It supports signed tolerance chains, worst-case and RSS analysis, Monte Carlo simulation, mixed units, contribution rankings, capability metrics, saved projects, imports, and exportable reports.',
    contribution: [
      'Set the product direction and developed the interface, analysis workflows, brand, documentation, and supporting product pages.',
      'Designed a progressive workflow that starts with simple stacks and reveals advanced distributions, correlation, yield, sensitivity, and optimization tools when needed.',
      'Built around transparent calculations and clearly labels the tool as a preliminary engineering aid rather than a substitute for a complete GD&T review.',
    ],
    experience: [
      'Translating engineering math into an interface that explains results instead of only displaying numbers.',
      'Managing a growing product across calculations, data import, visualization, reports, persistence, and responsive design.',
      'Designing guardrails and model-health checks for decisions that can affect real manufactured parts.',
      'Owning both technical implementation and the way a product is positioned and communicated.',
    ],
    currentFocus: 'Expanding advanced analysis while keeping the first-use experience approachable.',
    nextStep: 'Validate more real-world workflows and keep improving the path from a result to a practical design decision.',
    website: { label: 'Visit the Stackwise website', href: 'https://stackwise-tolerance-tool.stefan-paranos-cutle.chatgpt.site/' },
    source: { label: 'View Stackwise on GitHub', href: 'https://github.com/WHYDOESTHISWORLDEXIST/stackwise-tol' },
  },
  {
    slug: 'modular-robotic-arm',
    year: 'Research phase',
    title: 'Modular robotic arm',
    shortDescription: 'Research into a lower-cost arm whose software adapts motion and grasp planning to interchangeable hardware.',
    tools: 'Robotics · Machine learning · Mechanical design',
    role: 'Machine-learning and software research',
    overview: 'This concept explores a robotic arm that uses one motor and electromagnetic clutches to control multiple joints. Interchangeable arm sections would change the system geometry, so its software must understand the current configuration and coordinate motion accordingly.',
    contribution: [
      'Researching how control software can sequence one motor and multiple clutches to produce useful multi-joint movement.',
      'Exploring simulation and training approaches that can generalize across different arm lengths, joint counts, and configurations.',
      'Connecting mechanical constraints to the state, actions, rewards, and safety limits an ML control system would need.',
    ],
    experience: [
      'Defining an ML problem from physical requirements rather than beginning with a model.',
      'Thinking about training data, simulation, hardware integration, and testing as one control-system pipeline.',
      'Balancing lower-cost mechanical choices against the added complexity they create in software.',
      'Planning experiments for a project that is still in the research and prototyping phase.',
    ],
    currentFocus: 'Defining the control problem and a simulation strategy before committing to a training approach.',
    nextStep: 'Build a small simulated joint-and-clutch model and use it to compare rule-based and learned control strategies.',
  },
  {
    slug: 'click-beetle-wooden-hopper',
    year: 'Prototype phase',
    title: 'Click-beetle wooden hopper',
    shortDescription: 'A wooden mechanical hopper that translates the click beetle’s fast load, latch, and release motion into a physical prototype.',
    tools: 'Biomimicry · Mechanism design · Wood fabrication',
    role: 'Designer and builder',
    overview: 'This project uses the click beetle as a model for a compact jumping mechanism. Click beetles bend across a thoracic hinge, store elastic energy while latched, and release it rapidly to strike the ground and launch themselves. The wooden prototype turns that biological sequence into a mechanism that can be observed, adjusted, and tested.',
    contribution: [
      'Studying the beetle’s major motion stages and translating biological components into mechanical functions: loading, energy storage, latching, release, impact, and takeoff.',
      'Developing the structure as a wooden prototype so the geometry, joints, and release behavior can be fabricated and revised quickly.',
      'Planning tests around repeatability, jump height, stability, release timing, and how changes in geometry affect the launch.',
    ],
    experience: [
      'Using biological motion as engineering inspiration without simply copying its appearance.',
      'Breaking a fast, complicated movement into a sequence of understandable mechanical states.',
      'Connecting stored elastic energy, ground reaction force, rotation, and takeoff to a buildable mechanism.',
      'Learning through physical iteration, observation, measurement, and failure.',
    ],
    currentFocus: 'Turning the click beetle’s load–latch–release sequence into a simple wooden mechanism that can hop reliably.',
    nextStep: 'Build the first working prototype, record its motion, and use the results to revise the hinge, latch, and energy-storage geometry.',
  },
  {
    slug: 'smart-mirror',
    year: 'Planning phase',
    title: 'Smart mirror',
    shortDescription: 'A two-way mirror with a hidden display for useful daily information, designed around an inexpensive and expandable computer.',
    tools: 'Single-board computers · Linux · Web dashboards · Woodworking',
    role: 'Designer and builder',
    overview: 'The smart mirror combines a two-way mirror, monitor, compact computer, and wooden frame. Bright interface elements show through the reflective surface while dark areas disappear, creating a normal-looking mirror that can also display a clock, weather, calendar information, reminders, news, and simple animations.',
    contribution: [
      'Defining the full physical stack: mirror surface, monitor, computer, power, mounting, ventilation, backing, and wooden frame.',
      'Comparing Raspberry Pi and lower-cost alternatives such as the Orange Pi Zero 3, as well as reused laptops or mini PCs.',
      'Planning a beginner-friendly software setup using Linux, a full-screen dashboard, and an interface that remains legible through the mirror.',
      'Keeping the design expandable for later additions such as sensors, LEDs, voice control, or an Arduino for physical electronics.',
    ],
    experience: [
      'Evaluating a component by total project cost, documentation, performance, and ease of integration—not only its purchase price.',
      'Planning a project that combines woodworking, displays, power, thermal management, Linux, and web software.',
      'Designing interface contrast and information density for an unusual display surface.',
      'Separating a first useful version from optional features that can be added after the basic system works.',
    ],
    currentFocus: 'Choosing the display and low-cost computer, then validating the dashboard on an ordinary monitor before building the mirror enclosure.',
    nextStep: 'Assemble the computer and display, run the dashboard full-screen, and test brightness and readability behind a sample of two-way mirror material.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
