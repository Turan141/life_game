"use client"

import { useEffect, useState } from "react"
import { Scenario, GameState } from "@/types"
import { isUnlocked } from "@/game/logic"
import { UI_TEXT, AGES_RU } from "@/data/ui_text"

interface ScenarioViewProps {
	scenario: Scenario
	onOptionSelect: (index: number) => void
	stepNumber: number
	totalSteps?: number
	gameState?: GameState
}

const TIMER_DURATION = 15

export default function ScenarioView({
	scenario,
	onOptionSelect,
	stepNumber,
	totalSteps = 10,
	gameState
}: ScenarioViewProps) {
	const lang = gameState?.language || "en"
	const [showOptions, setShowOptions] = useState(false)
	const [timeLeft, setTimeLeft] = useState(TIMER_DURATION)
	const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
	const [showReaction, setShowReaction] = useState(false)
	const [isMounted, setIsMounted] = useState(false) // For mount animation

	// Smooth entry animation
	useEffect(() => {
		// Small delay to ensure browser paints standard state before transitioning
		const t = setTimeout(() => setIsMounted(true), 50)
		return () => clearTimeout(t)
	}, [])

	useEffect(() => {
		setShowOptions(false)
		setSelectedIdx(null)
		setShowReaction(false)
		setTimeLeft(TIMER_DURATION)

		// Check if options should be shown (staggered slightly after mount)
		const timer = setTimeout(() => {
			setShowOptions(true)
		}, 1200)

		return () => clearTimeout(timer)
	}, [scenario])

	useEffect(() => {
		if (!showOptions || selectedIdx !== null) return

		if (timeLeft <= 0) {
			const validOptions = scenario.options
				.map((_, i) => i)
				.filter((i) => {
					const opt = scenario.options[i]
					return (
						!opt.requirements || (gameState && isUnlocked(opt.requirements, gameState))
					)
				})

			const fallback =
				validOptions.length > 0
					? validOptions[Math.floor(Math.random() * validOptions.length)]
					: 0
			handleSelect(fallback, true)
			return
		}

		const interval = setInterval(() => {
			setTimeLeft((prev) => prev - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [showOptions, timeLeft, scenario, selectedIdx, gameState])

	const handleSelect = (index: number, isAuto = false) => {
		if (selectedIdx !== null) return

		const option = scenario.options[index]
		if (
			!isAuto &&
			option.requirements &&
			gameState &&
			!isUnlocked(option.requirements, gameState)
		) {
			return
		}

		setSelectedIdx(index)
		setShowReaction(true)

		setTimeout(() => {
			onOptionSelect(index)
		}, 2500)
	}

	const getAgeGradient = () => {
		switch (scenario.ageRange) {
			case "child":
				return "from-sky-950 via-slate-950 to-indigo-950"
			case "teen":
				return "from-fuchsia-950 via-slate-950 to-purple-950"
			case "adult":
				return "from-emerald-950 via-slate-950 to-cyan-950"
			case "elderly":
				return "from-orange-950 via-slate-950 to-amber-950"
			default:
				return "from-slate-950 to-black"
		}
	}

	return (
		<div className='w-full h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black font-sans selection:bg-white/30'>
			{/* Dynamic Background */}
			<div
				className={`absolute inset-0 bg-gradient-to-br ${getAgeGradient()} transition-colors duration-[2000ms] opacity-60 -z-10`}
			/>

			{/* Grain/Noise Overlay for texture */}
			<div
				className='absolute inset-0 opacity-[0.03] pointer-events-none'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
				}}
			></div>

			{/* Progress Line */}
			<div className='absolute top-8 left-0 w-full px-8 md:px-12 flex items-center gap-2'>
				<div className='text-[10px] font-mono text-white/40 mb-px'>
					{UI_TEXT[lang].life_progress.toUpperCase()}
				</div>
				<div className='h-px bg-white/10 flex-1 relative overflow-hidden'>
					<div
						className='absolute inset-y-0 left-0 bg-white/60 transition-all duration-1000 ease-out'
						style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
					/>
				</div>
				<div className='text-[10px] font-mono text-white/40 mb-px'>
					{stepNumber}/{totalSteps}
				</div>
			</div>

			{/* Main Content Container - Fixed Width for stability */}
			<div className='w-full max-w-3xl px-6 flex flex-col items-center relative z-10 transition-all'>
				{/* Timer & Age - Header */}
				<div
					className={`w-full flex justify-between items-center mb-16 transition-all duration-1000 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
				>
					<div className='flex flex-col'>
						<span className='text-white/30 text-xs font-mono tracking-widest uppercase mb-1'>
							{UI_TEXT[lang].age_label}
						</span>
						<span className='text-white font-light text-2xl tracking-wide capitalize'>
							{lang === "ru" ? AGES_RU[scenario.ageRange] : scenario.ageRange}
						</span>
					</div>

					{/* Timer Minimalist */}
					<div className='relative w-12 h-12 flex items-center justify-center group'>
						<svg className='absolute inset-0 w-full h-full -rotate-90'>
							<circle
								cx='24'
								cy='24'
								r='22'
								stroke='currentColor'
								strokeWidth='1'
								fill='transparent'
								className='text-white/5'
							/>
							<circle
								cx='24'
								cy='24'
								r='22'
								stroke='currentColor'
								strokeWidth='1.5'
								fill='transparent'
								strokeDasharray={138}
								strokeDashoffset={138 * (1 - timeLeft / TIMER_DURATION)}
								className={`transition-all duration-1000 ease-linear ${timeLeft <= 5 ? "text-red-500 shadow-[0_0_10px_red]" : "text-white"}`}
							/>
						</svg>
						<span
							className={`text-sm font-mono ${timeLeft <= 5 ? "text-red-500 font-bold" : "text-white/60"}`}
						>
							{timeLeft}
						</span>
					</div>
				</div>

				{/* Scenario Description - Min height to prevent jump */}
				<div className='w-full min-h-[160px] flex flex-col items-center justify-center mb-12 gap-8'>
					{/* Scenario Image if exists */}
					{scenario.image && (
						<div
							className={`relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl mb-4 border border-white/10
                            transition-all duration-1000 ease-out delay-75
                            ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
						>
							<img
								src={scenario.image}
								alt='Scenario visualization'
								className='w-full h-full object-cover'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
						</div>
					)}
					<h2
						className={`text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed text-slate-200 drop-shadow-lg transition-all duration-1000 delay-100 ease-out fill-mode-forwards max-w-2xl ${isMounted ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-8"}`}
					>
						{scenario.description}
					</h2>
				</div>

				{/* Options Grid */}
				<div
					className={`w-full grid gap-4 relative transition-all duration-1000 ${showReaction ? "opacity-0 blur-lg scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
				>
					{scenario.options.map((option, idx) => {
						const isLocked =
							option.requirements &&
							gameState &&
							!isUnlocked(option.requirements, gameState)
						const isSelected = selectedIdx === idx
						const isOther = selectedIdx !== null && !isSelected

						// Stagger delay based on index
						const delay = showOptions ? idx * 100 : 0
						// If reaction is showing, hide others more aggressively
						const opacityClass = !showOptions
							? "opacity-0 translate-y-8"
							: isOther
								? "opacity-0 blur-sm"
								: "opacity-100 translate-y-0"

						return (
							<button
								key={idx}
								disabled={
									!showOptions || selectedIdx !== null || (!!isLocked && !showReaction)
								}
								onClick={() => handleSelect(idx)}
								style={{ transitionDelay: `${delay}ms` }}
								className={`
                            group relative w-full p-6 md:p-8 
                            border rounded-xl text-left 
                            transition-all duration-700 ease-out
                            ${opacityClass}
                            
                            ${/* Selection State */ ""}
                            ${isSelected ? "bg-white border-white text-black z-20 shadow-[0_0_50px_rgba(255,255,255,0.2)] scale-[1.02]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 text-neutral-200"}
                            
                            ${/* Locked State */ ""}
                            ${isLocked && !isSelected ? "opacity-40 grayscale cursor-not-allowed hover:bg-transparent hover:border-red-900/30" : ""}
                        `}
							>
								<div className='flex items-center justify-between pointer-events-none'>
									<div className='flex flex-col gap-1 w-full'>
										<span
											className={`text-lg md:text-xl font-light transition-colors duration-300 ${isSelected ? "text-black font-normal" : ""}`}
										>
											{option.text}
										</span>
										{isLocked && option.lockedMessage && (
											<span className='text-xs text-red-400/70 uppercase tracking-widest flex items-center gap-1.5 font-bold mt-1'>
												<span className='text-[10px]'>🔒</span> {option.lockedMessage}
											</span>
										)}
									</div>

									{/* Icons/Indicators */}
									<div
										className={`transition-all duration-300 shrink-0 ml-4 ${isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
									>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='black'
											strokeWidth='1.5'
										>
											<path d='M5 12l5 5l10 -10' />
										</svg>
									</div>
								</div>
							</button>
						)
					})}
				</div>

				{/* Cinematic Reaction Overlay - Takes over screen */}
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-1000 ${showReaction ? "bg-black/80 backdrop-blur-xl opacity-100" : "bg-transparent opacity-0"}`}
				>
					<div
						className={`max-w-4xl px-8 transition-all duration-1000 transform ${showReaction ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"}`}
					>
						{showReaction && selectedIdx !== null && (
							<div className='flex flex-col items-center'>
								<div className='mb-6 w-12 h-[1px] bg-white/50'></div>
								<p className='text-2xl md:text-4xl lg:text-5xl text-white font-serif italic text-center leading-relaxed drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]'>
									"
									{scenario.options[selectedIdx].reaction ||
										(lang === "ru" ? "Судьба решена." : "Fate is sealed.")}
									"
								</p>
								<div className='mt-6 w-12 h-[1px] bg-white/50'></div>
							</div>
						)}
					</div>
				</div>

				{/* Thinking Indicator */}
				<div
					className={`mt-8 min-h-[20px] transition-opacity duration-500 ${!showOptions ? "opacity-100" : "opacity-0"}`}
				>
					<div className='flex gap-1 justify-center'>
						<div className='w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-0'></div>
						<div className='w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-100'></div>
						<div className='w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-200'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
