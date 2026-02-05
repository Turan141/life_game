import { GameState, PlayerStats, Scenario, AgeRange, Option, Condition } from "@/types"
import { getScenarios } from "@/data/scenarios"

const INITIAL_STATS: PlayerStats = {
	honesty: 50,
	courage: 50,
	empathy: 50,
	ambition: 50
}

export const SCENARIOS_PER_GAME = 10
// Progression thresholds (scenario index 0-based)
// 0, 1: Child
// 2, 3: Teen
// 4, 5, 6: Adult
// 7, 8, 9: Elderly

const getAgeForStep = (stepIndex: number): AgeRange => {
	if (stepIndex < 2) return "child"
	if (stepIndex < 4) return "teen"
	if (stepIndex < 7) return "adult"
	return "elderly"
}

// Check if a result is unlocked based on requirements (for scenarios OR options)
export const isUnlocked = (reqs: Condition[] | undefined, state: GameState): boolean => {
	if (!reqs || reqs.length === 0) return true
	return reqs.every((req) => {
		if (req.stat) {
			if (req.min !== undefined && state.stats[req.stat] < req.min) return false
			if (req.max !== undefined && state.stats[req.stat] > req.max) return false
		}
		// Checking history not strictly required for MVP, but good to have
		return true
	})
}

export const initializeGame = (lang: "en" | "ru" = "en"): GameState => {
	return {
		stats: { ...INITIAL_STATS },
		history: [],
		currentScenario: null,
		isPlaying: true,
		isGameOver: false,
		language: lang
	}
}

export const getNextScenario = (state: GameState): Scenario | null => {
	const stepIndex = state.history.length

	if (stepIndex >= SCENARIOS_PER_GAME) {
		return null
	}

	const currentAge = getAgeForStep(stepIndex)

	const scenarios = getScenarios(state.language)

	// Filter scenarios by age and not already played
	const playedIds = new Set(state.history.map((h) => h.scenarioId))

	// Get all candidates for this age
	let available = scenarios.filter(
		(s) => s.ageRange === currentAge && !playedIds.has(s.id)
	)

	// Separate secrets from normals
	const secrets = available.filter((s) => s.isSecret)
	available = available.filter((s) => !s.isSecret)

	// Check if any secret scenario is triggered
	const triggeredSecret = secrets.find((s) => isUnlocked(s.requirements, state))
	if (triggeredSecret && Math.random() < 0.3) {
		// 30% chance if requirements met
		return triggeredSecret
	}

	// Fallback if we run out of scenarios for an age
	if (available.length === 0) {
		const anyAvailable = scenarios.filter((s) => !playedIds.has(s.id))
		if (anyAvailable.length === 0) return null
		return anyAvailable[Math.floor(Math.random() * anyAvailable.length)]
	}

	// Random selection
	const randomIndex = Math.floor(Math.random() * available.length)
	return available[randomIndex]
}

export const applyOption = (
	state: GameState,
	option: Option,
	scenario: Scenario
): GameState => {
	const newStats = { ...state.stats }

	// Apply changes
	;(Object.keys(option.effects) as (keyof PlayerStats)[]).forEach((stat) => {
		if (option.effects[stat]) {
			newStats[stat] = Math.max(
				0,
				Math.min(100, newStats[stat] + option.effects[stat]! * 5)
			)
		}
	})

	const newHistory = [
		...state.history,
		{
			scenarioId: scenario.id,
			choiceIndex: scenario.options.indexOf(option),
			age: scenario.ageRange
		}
	]

	return {
		...state,
		stats: newStats,
		history: newHistory,
		currentScenario: null // Will be set by next turn logic or UI
	}
}
