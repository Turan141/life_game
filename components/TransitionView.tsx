"use client"

import { useEffect, useState } from "react"
import { GameState } from "@/types"
import { UI_TEXT, AGES_RU, TRANSITION_MESSAGES } from "@/data/ui_text"

interface TransitionViewProps {
	gameState: GameState
	nextAge: string
	onComplete: () => void
}

export default function TransitionView({
	gameState,
	nextAge,
	onComplete
}: TransitionViewProps) {
	const [show, setShow] = useState(false)

	useEffect(() => {
		// Fade in
		setShow(true)
		// Wait and exit
		const timer = setTimeout(() => {
			setShow(false)
			setTimeout(onComplete, 1000) // Allow fade out
		}, 3500)
		return () => clearTimeout(timer)
	}, [onComplete])

	// Determine the dominant stat so far
	const getDominantVibe = () => {
		const stats = gameState.stats
		const entries = Object.entries(stats)
		if (entries.length === 0) return "Possibility"

		// Find highest
		return entries.reduce((a, b) => (a[1] > b[1] ? a : b))[0]
	}

	const getMessage = () => {
		const vibe = getDominantVibe()
		const lang = gameState.language || "en"
		// Customized messages based on transition
		const messages = TRANSITION_MESSAGES[lang] as Record<string, string>

		return messages[vibe] || messages.default
	}

	const lang = gameState.language || "en"

	return (
		<div
			className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${show ? "opacity-100" : "opacity-0"}`}
		>
			<div className='max-w-2xl px-8 text-center flex flex-col items-center gap-8'>
				<span className='text-neutral-500 text-xs tracking-[0.3em] uppercase'>
					{UI_TEXT[lang].transition_title}
				</span>
				<h2 className='text-3xl md:text-5xl font-serif text-white italic leading-tight'>
					{getMessage()}
				</h2>
				<div className='h-px w-24 bg-white/20 mt-4'></div>
				<span className='text-white/40 text-sm font-mono mt-2 capitalize'>
					{UI_TEXT[lang].enter_age} {lang === "ru" ? AGES_RU[nextAge] : nextAge} ...
				</span>
			</div>
		</div>
	)
}
