"use client"

import { useState, useEffect } from "react"
import { GameState, Scenario } from "@/types"
import {
	initializeGame,
	getNextScenario,
	applyOption,
	SCENARIOS_PER_GAME
} from "@/game/logic"
import { UI_TEXT } from "@/data/ui_text"
import ScenarioView from "./ScenarioView"
import LifeSummary from "./LifeSummary"
import TransitionView from "./TransitionView"

export default function Game() {
	const [gameState, setGameState] = useState<GameState | null>(null)
	const [selectedLang, setSelectedLang] = useState<"en" | "ru">("en")
	const [loading, setLoading] = useState(true)
	const [showTransition, setShowTransition] = useState(false)
	const [transitionNextAge, setTransitionNextAge] = useState("")
	const [pendingState, setPendingState] = useState<{
		state: GameState
		scenario: Scenario
	} | null>(null)

	// Initial load
	useEffect(() => {
		// Check local storage or start new
		// For MVP simplicity, let's just ready the start button
		setLoading(false)
	}, [])

	const startGame = () => {
		const newState = initializeGame(selectedLang)
		const firstScenario = getNextScenario(newState)
		setGameState({ ...newState, currentScenario: firstScenario })
	}

	const handleOptionSelected = (optionIdx: number) => {
		if (!gameState || !gameState.currentScenario) return

		const scenario = gameState.currentScenario
		const option = scenario.options[optionIdx]

		// Apply logic
		const nextState = applyOption(gameState, option, scenario)

		// Get next scenario
		const nextScenario = getNextScenario(nextState)

		if (nextScenario) {
			// Check for age transition
			if (nextScenario.ageRange !== scenario.ageRange) {
				setPendingState({ state: nextState, scenario: nextScenario })
				setTransitionNextAge(nextScenario.ageRange)
				setShowTransition(true)
			} else {
				setGameState({ ...nextState, currentScenario: nextScenario })
			}
		} else {
			setGameState({ ...nextState, isGameOver: true, currentScenario: null })
		}
	}

	const handleTransitionComplete = () => {
		if (pendingState) {
			setGameState({ ...pendingState.state, currentScenario: pendingState.scenario })
			setPendingState(null)
			setShowTransition(false)
		}
	}

	const restartGame = () => {
		startGame()
	}

	if (loading)
		return (
			<div className='min-h-screen bg-neutral-900 text-white flex items-center justify-center'>
				Loading...
			</div>
		)

	if (!gameState) {
		return (
			<div className='w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-sans'>
				{/* Background Noise & Grain */}
				<div
					className='absolute inset-0 opacity-[0.05] pointer-events-none'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
					}}
				></div>

				{/* Ambient Glow */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse duration-[4000ms]'></div>

				<div className='z-10 flex flex-col items-center text-center p-6'>
					<div className='mb-2 text-white/40 text-xs tracking-[0.5em] uppercase animate-fade-in-up'>
						{UI_TEXT[selectedLang].system_ready}
					</div>

					{/* Language Switcher */}
					<div className='absolute top-8 right-8 flex gap-3 z-50'>
						<button
							onClick={() => setSelectedLang("en")}
							className={`text-xs font-bold px-3 py-1 rounded-full transition-all border border-white/20 ${
								selectedLang === "en"
									? "bg-white text-black scale-105 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
									: "text-white/50 hover:text-white hover:bg-white/10"
							}`}
						>
							EN
						</button>
						<button
							onClick={() => setSelectedLang("ru")}
							className={`text-xs font-bold px-3 py-1 rounded-full transition-all border border-white/20 ${
								selectedLang === "ru"
									? "bg-white text-black scale-105 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
									: "text-white/50 hover:text-white hover:bg-white/10"
							}`}
						>
							RU
						</button>
					</div>

					<h1 className='text-6xl md:text-8xl font-black text-white tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-fade-in duration-1000'>
						{UI_TEXT[selectedLang].title}
					</h1>
					<span className='text-xl md:text-2xl font-serif italic text-white/60 mb-12 block animate-slide-up delay-200'>
						{UI_TEXT[selectedLang].subtitle}
					</span>

					<p className='text-neutral-400 mb-12 max-w-md leading-relaxed animate-fade-in delay-500'>
						{UI_TEXT[selectedLang].description}
					</p>

					<button
						onClick={startGame}
						className='group relative px-10 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-fade-in delay-700'
					>
						<span className='relative z-10 flex items-center gap-2'>
							{UI_TEXT[selectedLang].start_btn}
							<svg
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								className='transition-transform group-hover:translate-x-1'
							>
								<path d='M5 12h14m-7-7l7 7l-7 7' />
							</svg>
						</span>
					</button>

					<div className='mt-16 text-white/10 text-xs font-mono'>
						{UI_TEXT[selectedLang].sim_v}
					</div>
				</div>
			</div>
		)
	}

	if (gameState.isGameOver) {
		return <LifeSummary gameState={gameState} onRestart={restartGame} />
	}

	return (
		<div className='min-h-screen bg-neutral-900 text-white flex items-col justify-center relative'>
			{showTransition && gameState && (
				<TransitionView
					gameState={gameState}
					nextAge={transitionNextAge}
					onComplete={handleTransitionComplete}
				/>
			)}

			{gameState.currentScenario && !showTransition && (
				<ScenarioView
					key={gameState.currentScenario.id}
					scenario={gameState.currentScenario}
					onOptionSelect={handleOptionSelected}
					gameState={gameState}
					stepNumber={gameState.history.length + 1}
					totalSteps={SCENARIOS_PER_GAME}
				/>
			)}
		</div>
	)
}
