export default function Architecture() {
	return (
		<section className="border-y border-white/5 bg-zinc-900/20">

			<div className="mx-auto max-w-6xl px-6 py-32">

				<div className="mb-16">

					<p className="font-mono text-sm text-cyan-400">
						06 / ARCHITECTURE
					</p>

					<h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
						I think in systems.
					</h2>

					<p className="mt-4 max-w-2xl text-zinc-400">
						Software is more than code. I care about how
						applications communicate, store data and reach production.
					</p>

				</div>

				<div className="overflow-x-auto">

					<div className="min-w-[700px] rounded-2xl border border-white/10 bg-black p-8">

						<div className="flex items-center justify-center">

							<ArchitectureBox
								title="React"
								subtitle="Frontend"
							/>

						</div>

						<div className="flex justify-center py-4 text-cyan-400">
							↓ HTTPS
						</div>

						<div className="flex items-center justify-center">

							<ArchitectureBox
								title="Node.js / Express"
								subtitle="REST API"
							/>

						</div>

						<div className="flex justify-center py-4 text-cyan-400">
							↓
						</div>

						<div className="grid grid-cols-2 gap-8">

							<ArchitectureBox
								title="PostgreSQL"
								subtitle="Database"
							/>

							<ArchitectureBox
								title="Docker"
								subtitle="Infrastructure"
							/>

						</div>

					</div>

				</div>

			</div>

		</section>
	)
}

function ArchitectureBox({ title, subtitle }) {
	return (
		<div className="w-full max-w-xs rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-center">

			<p className="font-mono text-sm text-cyan-300">
				{title}
			</p>

			<p className="mt-2 text-xs text-zinc-500">
				{subtitle}
			</p>

		</div>
	)
}