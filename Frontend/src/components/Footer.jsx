import React from 'react'

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'GitHub', href: 'https://github.com/heysanzu/projectISRO', external: true },
];

export default function Footer() {
    return (
        <div className="mt-16 border-t border-slate-800 pt-8 text-lg text-slate-400">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div >
                    <p className="font-semibold text-slate-100">Project ISRO — BAH 2026</p>
                    <p className="mt-1 text-slate-500">Finale: August 6-7, 2026 / Registration: July 1, 2026</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {footerLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            className="transition hover:text-white font-bold text-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
