"use client"

import { GameState, PlayerStats } from "@/types"
import { getScenarios } from "@/data/scenarios"
import { ARCHETYPES, BADGES } from "@/data/archetypes"
import { UI_TEXT, STATS_RU } from "@/data/ui_text"

interface LifeSummaryProps {
	gameState: GameState
	onRestart: () => void
}

const getArchetype = (stats: PlayerStats, lang: "en" | "ru") => {
	const candidates = ARCHETYPES[lang]
	// Find the first matching archetype (order matters in data file)
	// Special cases first, balanced last
	return (
		candidates.find((c) => c.condition(stats) && c.id !== "balanced") ||
		candidates.find((c) => c.id === "balanced")!
	)
}

const getBadges = (stats: PlayerStats, lang: "en" | "ru") => {
	const b = BADGES[lang]
	const list = []
	if (stats.honesty < 20) list.push(b.liar)
	if (stats.honesty > 85) list.push(b.truth_serum)
	if (stats.courage > 85) list.push(b.lionheart)
	if (stats.courage < 20) list.push(b.mouse)
	if (stats.empathy > 85) list.push(b.big_heart)
	if (stats.empathy < 20) list.push(b.ice_cold)
	if (stats.ambition > 85) list.push(b.visionary)
	if (stats.ambition < 20) list.push(b.couch_potato)
	return list
}

export default function LifeSummary({ gameState, onRestart }: LifeSummaryProps) {
	const lang = gameState.language || "en"
	const { title, desc, color, gradient } = getArchetype(gameState.stats, lang)
	const badges = getBadges(gameState.stats, lang)

	// Calculate score for visual bars
	const getStatWidth = (val: number) => Math.min(100, Math.max(0, val))

	// Resolve scenario descriptions for history
	const historyItems = gameState.history
		.map((h) => {
			const sc = getScenarios(lang).find((s) => s.id === h.scenarioId)
			if (!sc) return null
			const option = sc.options[h.choiceIndex]
			return {
				age: h.age,
				choice: option.text,
				feedback: option.summaryFeedback || option.reaction
			}
		})
		.filter(Boolean)

	return (
		<div
			className={`relative w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-black overflow-hidden font-sans`}
		>
			{/* Background Effects */}
			<div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-40`} />
			<div
				className='absolute inset-0 pointer-events-none opacity-[0.05]'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
				}}
			></div>

			{/* Particles or Stars could go here */}

			<div className='relative z-10 w-full max-w-3xl flex flex-col gap-8 animate-in fade-in zoom-in-95 duration-1000'>
				{/* Header Section */}
				<div className='text-center space-y-4'>
					<p className='text-xs font-mono uppercase tracking-[0.4em] text-white/40'>
						{UI_TEXT[lang].summary_title}
					</p>
					<h1
						className={`text-5xl md:text-7xl font-black tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] ${color}`}
					>
						{title}
					</h1>
					<p className='text-xl md:text-2xl text-white/80 font-serif italic font-light leading-relaxed max-w-2xl mx-auto'>
						"{desc}"
					</p>
				</div>

				{/* Badges Row */}
				{badges.length > 0 && (
					<div className='flex flex-wrap justify-center gap-3 my-4'>
						{badges.map((b) => (
							<span
								key={b}
								className='px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-semibold border border-white/5 shadow-lg text-white'
							>
								{b}
							</span>
						))}
					</div>
				)}

				{/* Stats Grid - Modernized */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm'>
					{Object.entries(gameState.stats).map(([key, val]) => (
						<div key={key} className='flex flex-col gap-2'>
							<div className='flex justify-between items-end'>
								<span className='text-[10px] uppercase tracking-wider font-bold text-white/50'>
									{lang === "ru" && STATS_RU[key] ? STATS_RU[key] : key}
								</span>
								<span className='text-sm font-mono text-white/80'>{val}%</span>
							</div>
							<div className='w-full bg-black/50 h-2 rounded-full overflow-hidden'>
								<div
									className={`h-full rounded-full transition-all duration-[1500ms] ease-out ${
										key === "honesty"
											? "bg-emerald-400 shadow-[0_0_10px_#34d399]"
											: key === "courage"
												? "bg-red-400 shadow-[0_0_10px_#f87171]"
												: key === "empathy"
													? "bg-blue-400 shadow-[0_0_10px_#60a5fa]"
													: "bg-amber-400 shadow-[0_0_10px_#fbbf24]"
									}`}
									style={{ width: `${getStatWidth(val)}%` }}
								/>
							</div>
						</div>
					))}
				</div>

				{/* Timeline - Compact */}
				<div className='bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 max-h-[300px] overflow-y-auto custom-scrollbar'>
					<h3 className='text-white/40 text-xs uppercase tracking-widest mb-6 sticky top-0 bg-black/40 backdrop-blur-sm py-2 w-full'>
						{UI_TEXT[lang].life_path}
					</h3>
					<div className='space-y-6 relative border-l border-white/10 ml-2 pl-6'>
						{historyItems.map(
							(item, idx) =>
								item && (
									<div key={idx} className='relative group'>
										<div className='absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white group-hover:scale-125 transition-all'></div>
										<div className='flex flex-col md:flex-row md:items-baseline md:gap-4'>
											<span className='text-xs font-mono text-white/30 uppercase tracking-widest w-16 mobile:mb-1'>
												{item.age}
											</span>
											<div className='flex-1'>
												<p className='text-white font-medium group-hover:text-blue-300 transition-colors'>
													{item.choice}
												</p>
												<p className='text-white/40 text-sm italic mt-1 font-serif'>
													"{item.feedback}"
												</p>
											</div>
										</div>
									</div>
								)
						)}
					</div>
				</div>

				{/* Action Buttons */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
					<button
						onClick={() => {
							const text = `I lived as ${title} in #LifeIn30Seconds. ${badges.join(" ")} \n\nSee who you become: [Link]`
							navigator.clipboard.writeText(text)
							alert(
								lang === "ru"
									? "Результат скопирован в буфер обмена!"
									: "Copied specific result to clipboard!"
							)
						}}
						className={`py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-neutral-200 hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-2`}
					>
						<span>{UI_TEXT[lang].share_btn}</span>
						<svg
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
						>
							<path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
							<polyline points='16 6 12 2 8 6' />
							<line x1='12' y1='2' x2='12' y2='15' />
						</svg>
					</button>

					<button
						onClick={onRestart}
						className='py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 font-medium text-lg rounded-xl transition-all'
					>
						{UI_TEXT[lang].restart_btn}
					</button>
				</div>

				<div className='text-center text-white/20 text-xs mt-4'>
					{UI_TEXT[lang].footer_version}
				</div>
			</div>
		</div>
	)
}
