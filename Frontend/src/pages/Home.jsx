import { useEffect, useRef, useCallback } from 'react';
import Footer from '../components/Footer.jsx';
import { href } from 'react-router-dom';
import { FaGithub as GitHubIcon, FaLayerGroup } from "react-icons/fa";
import { IoMdTv as HollowTv } from "react-icons/io";
import { CiGlobe as Globe } from "react-icons/ci";
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";
import Header from '../components/Header.jsx';


const FEATURE_TILES = [
    {
        title: 'Multi-modal Satellite Fusion',
        description:
            'SAR imagery from RISAT-1 combined with optical data from Cartosat-1/2 provides all-weather road detection where single-sensor methods break down.',
        icon: (
            <Globe size={28} />
        ),
    },
    {
        title: 'Graph-theoretic Criticality',
        description:
            'Road segments are modelled as weighted graph edges. Betweenness centrality identifies which nodes, if removed, cause the greatest disruption to regional connectivity.',
        icon: (
            <FaLayerGroup size={24} />
        ),
    },
    {
        title: 'Pure Software, Cloud-ready',
        description:
            'No hardware dependencies. The full pipeline — ingestion, processing, analysis, and visualisation — runs on standard cloud infrastructure with public ISRO data APIs.',
        icon: (
            <HollowTv size={26} />
        ),
    },
];

const TECH_STACK = [
    'Python 3.11',
    'NumPy / SciPy',
    'NetworkX',
    'GDAL / Rasterio',
    'GeoPandas',
    'Matplotlib / Folium',
    'React',
    'FastAPI',
    'ISRO Bhuvan API',
    'Cartosat-1/2 + RISAT-1',
    'pytest',
];

const TEAM_MEMBERS = [
    { name: 'Krish', role: 'Machine learning and model developer', handle: '@krish', href: 'https://github.com/Kman0908' },
    { name: 'Nitish', role: 'API & Backend', handle: '@nitish', href: 'https://github.com/nitishtech-001' },
    { name: 'Shahnewaz', role: 'Frontend & Integration', handle: '@heysanzu', href: 'https://github.com/heysanzu' },
    { name: 'Shammi', role: 'Frontend Developer', handle: '@shammi', href: 'https://github.com/shammi' }
];

const ARCHITECTURE_FLOW = [
    {
        label: 'Data ingestion',
        description:
            'Raw Bhuvan satellite feeds (SAR + optical) enter via data/. Normalised to common coordinate reference system before processing.',
        badge: 'A',
    },
    {
        label: 'Analytics pipeline',
        description:
            'Pure Python algorithms in src/analytics/ fuse sensor bands, extract road geometry, and compute graph centrality scores.',
        badge: 'B',
    },
    {
        label: 'API layer',
        description:
            'Endpoint controllers in src/api/ expose processed results to the frontend as structured JSON — decoupled from data logic.',
        badge: 'C',
    },
    {
        label: 'Frontend',
        description:
            'React components in src/frontend/ render the interactive road criticality map and analytics dashboard.',
        badge: 'D',
    },
];


const Tag = ({ children }) => (
    <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-200">
        {children}
    </span>
);

const SectionHeader = ({ label, title, description }) => (
    <div className="space-y-2">
        <p className="reveal text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{label}</p>
        <h2 className="reveal text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {description && <p className="reveal max-w-3xl text-base text-slate-300 sm:text-lg">{description}</p>}
    </div>
);

const FeatureCard = ({ title, description, icon }) => (
    <article className="reveal rounded-2xl border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/20">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
            {icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-300 sm:text-base">{description}</p>
    </article>
);

const TeamCard = ({ name, role, handle, href }) => (
    <article className="reveal rounded-[1.75rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/20">
        <p className="text-xl font-semibold text-white">{name}</p>
        <p className="mt-1 text-slate-400">{role}</p>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
        >
            <GitHubIcon />
            {handle}
        </a>
    </article>
);

const StackPill = ({ tech }) => (
    <span className="stack-pill inline-flex items-center gap-2 rounded-3xl border border-slate-800 bg-slate-900/95 px-3 py-2.5 text-sm text-slate-200">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        {tech}
    </span>
);

const ArchitectureItem = ({ label, description, badge }) => (
    <div className="flow-item flex gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-semibold text-slate-950">
            {badge}
        </span>
        <div>
            <p className="text-base font-semibold text-white">{label}</p>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    </div>
);


export default function Home() {

    return (
        <div className="flex min-h-screen w-full flex-col bg-slate-950 text-slate-100">
            <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-1 space-y-20 md:space-y-28">
                    {/* Hero Section */}
                    <section className="hero rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg shadow-slate-950/40 sm:p-10">
                        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
                            Bharatiya Antariksh Hackathon 2026 — Challenge 4
                        </p>
                        <h1 id="heroHeadline" className="hero-headline mb-4 text-4xl font-semibold leading-[1.15] text-white sm:text-5xl md:text-6xl">
                            <span className="block">
                                <span className="word">Route</span> <span className="word">Resilience</span>
                            </span>
                            <span className="block">
                                <span className="word">From</span> <span className="word">Space.</span>
                            </span>
                        </h1>
                        <p id="heroSub" className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                            A pure-software platform that fuses SAR and optical satellite imagery to compute road network
                            criticality — no hardware, built for cloud, backed by ISRO Bhuvan data.
                        </p>
                        <div id="heroMeta" className="mt-6 flex flex-wrap items-center gap-2.5">
                            {['Python', 'Graph Theory', 'SAR Fusion', 'ISRO Bhuvan', 'Cartosat-1/2', 'RISAT-1'].map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="space-y-5">
                        <SectionHeader
                            label="What it solves"
                            title="Critical infrastructure, seen from orbit."
                            description='When roads fail — flood, disaster, conflict — the question is never "did it fail" but "which failure matters most." Project ISRO answers that with betweenness centrality computed over satellite-verified road graphs.'
                        />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {FEATURE_TILES.map((feature) => (
                                <FeatureCard key={feature.title} {...feature} />
                            ))}
                        </div>
                    </section>

                    {/* Architecture Section */}
                    <section id="architecture" className="space-y-5">
                        <SectionHeader label="Architecture" title="How the codebase is structured." />
                        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="reveal rounded-2xl border border-slate-800 bg-slate-900/95 p-5 text-slate-300 shadow-xl shadow-slate-950/20 sm:p-6">
                                <pre className="whitespace-pre-wrap text-xs leading-6 text-slate-300 sm:text-sm">
                                    <span className="text-cyan-300">projectISRO/</span>
                                    {'\n'}│
                                    {'\n'}├── <span className="text-white">data/</span> {'\n'}│    └── sample geospatial logs, GeoTIFFs
                                    {'\n'}│
                                    {'\n'}├── <span className="text-white">src/</span>
                                    {'\n'}│   ├── <span className="text-white">analytics/</span> {'\n'}│   │   └── centrality, fusion, graph models
                                    {'\n'}│   ├── <span className="text-white">api/</span> {'\n'}│   │   └── endpoint controllers, data bridge
                                    {'\n'}│   └── <span className="text-white">frontend/</span> {'\n'}│       └── React interface, map views
                                    {'\n'}│
                                    {'\n'}├── <span className="text-white">tests/</span> {'\n'}│   └── unit suites for data verification
                                    {'\n'}│
                                    {'\n'}├── README.md
                                    {'\n'}└── requirements.txt
                                </pre>
                            </div>
                            <div className="reveal grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/95 p-5 shadow-xl shadow-slate-950/20">
                                {ARCHITECTURE_FLOW.map((item) => (
                                    <ArchitectureItem key={item.badge} {...item} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Stack Section */}
                    <section id="stack" className="space-y-5">
                        <SectionHeader
                            label="Technology"
                            title="Built entirely in software."
                            description="No proprietary hardware. The full pipeline is reproducible on any cloud instance with public satellite data access."
                        />
                        <div className="reveal grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                            {TECH_STACK.map((tech) => (
                                <StackPill key={tech} tech={tech} />
                            ))}
                        </div>
                    </section>

                    {/* Team Section */}
                    <section id="team" className="space-y-5">
                        <SectionHeader
                            label="Team"
                            title="Four people, one submission."
                            description="Built independently over weeks alongside coursework — no institutional lab, no pre-existing codebase."
                        />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {TEAM_MEMBERS.map((member) => (
                                <TeamCard key={member.name} {...member} />
                            ))}
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}