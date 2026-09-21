export default function Hero() {
	return (
		<section className="relative overflow-hidden">

			{/* Background glow */}
			<div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

			<div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 py-32 md:grid-cols-2">

				<div>

					<p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-cyan-400">
						Full-Stack Developer
					</p>

					<h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">

						Backend.
						<br />

						Architecture.
						<br />

						<span className="text-zinc-600">
              DevOps.
            </span>

					</h1>

					<p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

						I build reliable software from database to production.
						APIs, modern web applications, legacy modernization
						and infrastructure.

					</p>

					<div className="mt-10 flex flex-wrap gap-4">

						<a
							href="#work"
							className="rounded-lg bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-cyan-300"
						>
							View my work
						</a>

						<a
							href="https://github.com/vic-23"
							target="_blank"
							rel="noreferrer"
							className="rounded-lg border border-white/10 px-6 py-3 font-medium text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
						>
							GitHub ↗
						</a>

					</div>

					<div className="mt-12 flex flex-wrap gap-3 font-mono text-xs text-zinc-500">

						<span>Node.js</span>
						<span>·</span>
						<span>TypeScript</span>
						<span>·</span>
						<span>PostgreSQL</span>
						<span>·</span>
						<span>Docker</span>
						<span>·</span>
						<span>Linux</span>

					</div>

				</div>

				<Terminal />

			</div>

		</section>
	)
}

function Terminal() {
	return (
		<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-1 shadow-2xl shadow-cyan-950/20">

			<div className="rounded-xl bg-black p-6 font-mono text-sm">

				<div className="mb-8 flex gap-2">

					<span className="h-3 w-3 rounded-full bg-red-400/70" />

					<span className="h-3 w-3 rounded-full bg-yellow-400/70" />

					<span className="h-3 w-3 rounded-full bg-green-400/70" />

				</div>

				<p className="text-zinc-500">
					$ whoami
				</p>

				<p className="mt-2 text-cyan-400">
					victor@developer
				</p>

				<p className="mt-8 text-zinc-500">
					$ focus
				</p>

				<div className="mt-3 space-y-2 text-zinc-300">

					<p>
						<span className="text-cyan-400">→</span> backend
					</p>

					<p>
						<span className="text-cyan-400">→</span> architecture
					</p>

					<p>
						<span className="text-cyan-400">→</span> devops
					</p>

					<p>
						<span className="text-cyan-400">→</span> databases
					</p>

				</div>

				<p className="mt-8 text-zinc-500">
					$ status
				</p>

				<p className="mt-2 text-green-400">
					● building
				</p>

			</div>

		</div>
	)
}