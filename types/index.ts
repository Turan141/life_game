export type Stat = "honesty" | "courage" | "empathy" | "ambition"

export type PlayerStats = {
	honesty: number
	courage: number
	empathy: number
	ambition: number
}

export type AgeRange = "child" | "teen" | "adult" | "elderly"

export type Condition = {
	stat?: keyof PlayerStats
	min?: number
	max?: number
	requiredScenarioId?: string
	mustNotHavePlayed?: string[]
}

export type Option = {
	text: string
	effects: Partial<PlayerStats>
	reaction?: string // Immediate emotional feedback ("Your heart sinks.")
	summaryFeedback?: string // Summary line ("You chose to run away.")
	requirements?: Condition[] // Rules to unlock this option
	lockedMessage?: string // "Requires Courage 50+"
}

export type Scenario = {
	id: string
	ageRange: AgeRange
	description: string
	options: Option[]
	tags?: string[]
	weight?: number
	requirements?: Condition[] // For secret/rare scenarios
	isSecret?: boolean
}

export type GameState = {
	stats: PlayerStats
	history: {
		scenarioId: string
		choiceIndex: number
		age: AgeRange
	}[]
	currentScenario: Scenario | null
	isPlaying: boolean
	isGameOver: boolean
    language: "en" | "ru"
}
