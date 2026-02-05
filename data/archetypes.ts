export const ARCHETYPES = {
    en: [
        {
            id: 'guardian',
            condition: (s: any) => s.empathy > 75 && s.courage > 75,
            title: "The Guardian",
            desc: "You lived to protect others. Your own dreams sometimes took a backseat, but your legacy is one of love and safety.",
            color: "text-blue-400",
            gradient: "from-blue-900/40 to-black"
        },
        {
            id: 'tycoon',
            condition: (s: any) => s.ambition > 80 && s.empathy < 40,
            title: "The Tycoon",
            desc: "You conquered the world but walked alone. The view from the top is beautiful, yet quiet.",
            color: "text-amber-400",
            gradient: "from-amber-900/40 to-black"
        },
        {
            id: 'saint',
            condition: (s: any) => s.honesty > 80 && s.ambition < 50,
            title: "The Saint",
            desc: "You never told a lie, even when it cost you. People trusted you with their lives, but you often finished last.",
            color: "text-emerald-400",
            gradient: "from-emerald-900/40 to-black"
        },
        {
            id: 'maverick',
            condition: (s: any) => s.courage > 80 && s.ambition > 70,
            title: "The Maverick",
            desc: "Risks were your fuel. You crashed and burned a few times, but you truly LIVED.",
            color: "text-red-400",
            gradient: "from-red-900/40 to-black"
        },
        {
            id: 'healer',
            condition: (s: any) => s.empathy > 70 && s.honesty > 70,
            title: "The Healer",
            desc: "Your touch mended wounds. You left the world softer than you found it.",
            color: "text-rose-400",
            gradient: "from-rose-900/40 to-black"
        },
        {
            id: 'drifter',
            condition: (s: any) => s.empathy < 30 && s.honesty < 30 && s.ambition < 30,
            title: "The Drifter",
            desc: "You floated through life like a leaf in the wind. No heavy burdens, but no deep roots either.",
            color: "text-neutral-400",
            gradient: "from-neutral-800/40 to-black"
        },
        {
            id: 'schemer',
            condition: (s: any) => s.ambition > 60 && s.honesty < 40,
            title: "The Schemer",
            desc: "You played the game and you played it well. Morals were just guidelines to you.",
            color: "text-purple-400",
            gradient: "from-purple-900/40 to-black"
        },
        {
             id: 'balanced',
             condition: () => true, // Fallback
             title: "The Balanced Soul",
             desc: "You walked the middle path. A life of moderate choices, moderate wins, and moderate regrets.",
             color: "text-white",
             gradient: "from-gray-900/40 to-black"
        }
    ],
    ru: [
        {
            id: 'guardian',
            condition: (s: any) => s.empathy > 75 && s.courage > 75,
            title: "Защитник",
            desc: "Ты жил, чтобы защищать других. Твои мечты иногда отходили на второй план, но твое наследие — это любовь и безопасность.",
            color: "text-blue-400",
            gradient: "from-blue-900/40 to-black"
        },
        {
            id: 'tycoon',
            condition: (s: any) => s.ambition > 80 && s.empathy < 40,
            title: "Магнат",
            desc: "Ты покорил мир, но остался один. Вид с вершины прекрасен, но там очень тихо.",
            color: "text-amber-400",
            gradient: "from-amber-900/40 to-black"
        },
        {
            id: 'saint',
            condition: (s: any) => s.honesty > 80 && s.ambition < 50,
            title: "Святой",
            desc: "Ты никогда не лгал, даже если это стоило тебе дорого. Люди доверяли тебе жизни, но ты часто приходил к финишу последним.",
            color: "text-emerald-400",
            gradient: "from-emerald-900/40 to-black"
        },
        {
            id: 'maverick',
            condition: (s: any) => s.courage > 80 && s.ambition > 70,
            title: "Бунтарь",
            desc: "Риск был твоим топливом. Ты падал и сгорал несколько раз, но ты по-настоящему ЖИЛ.",
            color: "text-red-400",
            gradient: "from-red-900/40 to-black"
        },
        {
             id: 'healer',
            condition: (s: any) => s.empathy > 70 && s.honesty > 70,
            title: "Целитель",
            desc: "Твое прикосновение исцеляло раны. Ты оставил этот мир добрее, чем он был.",
            color: "text-rose-400",
            gradient: "from-rose-900/40 to-black"
        },
        {
             id: 'drifter',
            condition: (s: any) => s.empathy < 30 && s.honesty < 30 && s.ambition < 30,
            title: "Скиталец",
            desc: "Ты плыл по жизни, как лист по ветру. Никаких тяжких грузов, но и никаких глубоких корней.",
            color: "text-neutral-400",
            gradient: "from-neutral-800/40 to-black"
        },
        {
             id: 'schemer',
            condition: (s: any) => s.ambition > 60 && s.honesty < 40,
            title: "Интриган",
            desc: "Ты играл в игру и играл хорошо. Мораль была для тебя лишь рекомендацией.",
            color: "text-purple-400",
            gradient: "from-purple-900/40 to-black"
        },
        {
            id: 'balanced',
            condition: () => true, // Fallback
            title: "Гармоничная душа",
            desc: "Ты шел срединным путем. Жизнь умеренных выборов, умеренных побед и умеренных сожалений.",
            color: "text-white",
            gradient: "from-gray-900/40 to-black"
        }
    ]
}

export const BADGES = {
    en: {
        liar: "🤥 Liar",
        truth_serum: "😇 Truth Serum",
        lionheart: "🦁 Lionheart",
        mouse: "🐭 Mouse",
        big_heart: "❤️ Big Heart",
        ice_cold: "🧊 Ice Cold",
        visionary: "🚀 Visionary",
        couch_potato: "🛋️ Couch Potato"
    },
    ru: {
        liar: "🤥 Лжец",
        truth_serum: "😇 Сыворотка правды",
        lionheart: "🦁 Львиное сердце",
        mouse: "🐭 Мышь",
        big_heart: "❤️ Большое сердце",
        ice_cold: "🧊 Ледяной",
        visionary: "🚀 Визионер",
        couch_potato: "🛋️ Домосед"
    }
}
