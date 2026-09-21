export default function Navbar() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">

			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

				<a
					href="#"
					className="font-mono text-lg font-bold tracking-tight"
				>
					VM<span className="text-cyan-400">.</span>
				</a>

				<div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">

					<a
						href="#work"
						className="transition hover:text-white"
					>
						Work
					</a>

					<a
						href="#about"
						className="transition hover:text-white"
					>
						About
					</a>

					<a
						href="#stack"
						className="transition hover:text-white"
					>
						Stack
					</a>

					<a
						href="https://github.com/vic-23"
						target="_blank"
						rel="noreferrer"
						className="transition hover:text-white"
					>
						GitHub ↗
					</a>

					<a
						href="#contact"
						className="rounded-lg border border-white/10 px-4 py-2 text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
					>
						Contact
					</a>

				</div>

				<a
					href="#contact"
					className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white md:hidden"
				>
					Contact
				</a>

			</nav>

		</header>
	)
}