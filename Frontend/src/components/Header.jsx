import { React, useRef } from 'react'
import { FaGithub as GithubIcon } from "react-icons/fa";
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Stack', href: '#stack' },
    { label: 'Team', href: '#team' },
];



export default function Header() {
    const navLinksRef = useRef(null);

    const toggleNav = () => {
        navLinksRef.current?.classList.toggle('hidden');
    }

    // const closeNav = useCallback(() => {
    //     navLinksRef.current?.classList.remove('open');
    // }, []);


    return (
        <header>
            <div className="mb-6 flex items-center justify-between gap-4 py-2 md:mb-10">
                <a href="#" className="text-lg lg:text-3xl font-semibold tracking-tight ">
                    <span className="text-lg text-cyan-400">~/</span>project-isro
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-6 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-bold text-slate-300 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/heysanzu/projectISRO"
                        target="_blank"
                        className="text-lg inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-medium text-slate-100 transition hover:border-cyan-400 hover:text-white"
                    >
                        <GithubIcon />
                        GitHub
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 md:hidden"
                    aria-label="Toggle navigation"
                    onClick={toggleNav}
                >
                    <HamburgerIcon />
                </button>
            </div>
            {/* Mobile menu when screen size is small */}
            <ul
                ref={navLinksRef}
                className="mb-6 hidden flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-900/95 p-4 text-sm text-slate-200 shadow-xl shadow-slate-950/30 md:hidden"
            >
                {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="block rounded-2xl px-4 py-3 transition hover:bg-slate-800 hover:text-white"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="https://github.com/heysanzu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-2xl bg-slate-800 px-4 py-3 text-slate-100 transition hover:bg-slate-700"
                    >
                        <GithubIcon />
                        GitHub
                    </a>
                </li>
            </ul>
        </header>
    )
}

