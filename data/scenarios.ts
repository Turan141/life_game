import { Scenario } from "@/types"

const SCENARIOS_EN: Scenario[] = [
	// --- CHILDHOOD ---
	{
		id: "child_toy_theft",
		ageRange: "child",
		description:
			"You see a shiny toy robot in your friend's open backpack. No one is looking.",
		options: [
			{
				text: "Take it secretly",
				effects: { honesty: -2, ambition: 1 },
				reaction: "It's yours. Cold plastic, burning guilt.",
				summaryFeedback: "Stole a toy."
			},
			{
				text: "Tell your friend you like it",
				effects: { honesty: 1, empathy: 1 },
				reaction: "They smiled and let you play.",
				summaryFeedback: "Admired only."
			}
		]
	},
	{
		id: "child_lost_puppy",
		ageRange: "child",
		description: "A lost puppy shivers in the rain. It looks sick.",
		options: [
			{
				text: "Bring it inside",
				effects: { empathy: 2, courage: 1 },
				reaction: "It licked your face. Warmth spreads in your chest.",
				summaryFeedback: "Saved a puppy."
			},
			{
				text: "Ignore it",
				effects: { empathy: -2, ambition: 1 },
				reaction: "You walked away. The whining stopped eventually.",
				summaryFeedback: "Left the puppy."
			}
		]
	},
	{
		id: "child_tree_climb",
		ageRange: "child",
		description: "The big oak. The highest branch looks dangerous.",
		options: [
			{
				text: "Climb to the top",
				effects: { courage: 2, ambition: 1 },
				reaction: "The world looks so small from here!",
				summaryFeedback: "Conquered the oak."
			},
			{
				text: "Stay safe",
				effects: { courage: -1, honesty: 1 },
				reaction: "Safe on the grass. Watching others fly.",
				summaryFeedback: "Stayed grounded."
			}
		]
	},
	{
		id: "child_vase_break",
		ageRange: "child",
		description:
			"CRASH. Mom's favorite vase lies in pieces. She is walking down the hall.",
		options: [
			{
				text: "Hide the pieces",
				effects: { honesty: -2, courage: -1 },
				reaction: "She blamed the cat. You stayed silent.",
				summaryFeedback: "Hid mistake."
			},
			{
				text: "Confess immediately",
				effects: { honesty: 3, courage: 2 },
				reaction: "She was sad, but she hugged you for telling the truth.",
				summaryFeedback: "Confessed mistake."
			}
		]
	},
	{
		id: "child_drawing",
		ageRange: "child",
		description:
			"The teacher asks who drew the funny picture of the principal. The class is giggling.",
		options: [
			{
				text: "Claim it (It wasn't you)",
				effects: { courage: 3, honesty: -1 },
				reaction: "The class cheered. The principal frowned. You felt like a hero.",
				summaryFeedback: "Took the fall."
			},
			{
				text: "Stay quiet",
				effects: { honesty: 1, courage: -1 },
				reaction: "Another kid got detention. You sighed in relief.",
				summaryFeedback: "Stayed silent."
			}
		]
	},
	{
		id: "child_lost_store",
		ageRange: "child",
		description: "The grocery store is huge. You can't see Mom anywhere.",
		options: [
			{
				text: "Cry for help",
				effects: { courage: 2, honesty: 1 },
				reaction: "A stranger helped you find her. You learned to ask.",
				summaryFeedback: "Asked for help."
			},
			{
				text: "Hide in the candy aisle",
				effects: { courage: -1, ambition: 1 },
				reaction: "Security found you eating chocolate. Mom was mad.",
				summaryFeedback: "Hid and snacked."
			}
		]
	},
	{
		id: "child_vegetables",
		ageRange: "child",
		description: "Dinner time. Green slimy broccoli staring at you.",
		options: [
			{
				text: "Eat it",
				effects: { courage: 1, ambition: 1 },
				reaction: "Disgusting. But you feel strong.",
				summaryFeedback: "Ate veggies."
			},
			{
				text: "Feed the dog",
				effects: { honesty: -1, empathy: 1 },
				reaction: "The dog is happy. You are full of lies.",
				summaryFeedback: "Fed the dog."
			}
		]
	},
	{
		id: "child_new_kid",
		ageRange: "child",
		description: "A new kid is sitting alone at lunch. They look sad.",
		options: [
			{
				text: "Sit with them",
				effects: { empathy: 3, courage: 1 },
				reaction: "You made a best friend for life.",
				summaryFeedback: "Welcomed new kid."
			},
			{
				text: "Sit with cool kids",
				effects: { ambition: 1, empathy: -1 },
				reaction: "You fit in. The new kid just stared at their food.",
				summaryFeedback: "Ignored new kid."
			}
		]
	},

	// --- TEEN ---
	{
		id: "teen_bully_standup",
		ageRange: "teen",
		description: "A bully is mocking your friend. Everyone is watching.",
		options: [
			{
				text: "Stand in between",
				effects: { courage: 3, empathy: 1 },
				requirements: [{ stat: "courage", min: 20 }],
				lockedMessage: "Your childhood fear paralyzes you.",
				reaction: "Fist meets face. Pain, but clear eyes.",
				summaryFeedback: "Defended a friend."
			},
			{
				text: "Run for help",
				effects: { courage: -1, empathy: 1 },
				reaction: "You got a teacher. Practical, but cowardly?",
				summaryFeedback: "Got help."
			}
		]
	},
	{
		id: "teen_cheat",
		ageRange: "teen",
		description: "Final exam. The answer key is sticking out of the teacher's bag.",
		options: [
			{
				text: "Snap a photo",
				effects: { honesty: -3, ambition: 2 },
				reaction: "Easy A. The knowledge feels unearned.",
				summaryFeedback: "Cheated on finals."
			},
			{
				text: "Study all night",
				effects: { honesty: 2, ambition: -1 },
				reaction: "Exhausted but proud.",
				summaryFeedback: "Studied hard."
			}
		]
	},
	{
		id: "teen_party",
		ageRange: "teen",
		description: "The cool kids invited you. But your little brother is sick.",
		options: [
			{
				text: "Go to the party",
				effects: { empathy: -2, ambition: 1, honesty: -1 },
				reaction: "Music is loud. Guilt is louder.",
				summaryFeedback: "Partied while bro was sick."
			},
			{
				text: "Stay home",
				effects: { empathy: 3, courage: 1 },
				reaction: "He fell asleep holding your hand.",
				summaryFeedback: "Nursed brother."
			}
		]
	},
	{
		id: "teen_poetry",
		ageRange: "teen",
		description: "You wrote a poem about your feelings. The talent show is tomorrow.",
		options: [
			{
				text: "Read it on stage",
				effects: { courage: 3, empathy: 1 },
				requirements: [{ stat: "courage", min: 30 }],
				lockedMessage: "Stage fright chokes you.",
				reaction: "Silence, then applause. You feel seen.",
				summaryFeedback: "Shared art."
			},
			{
				text: "Throw it away",
				effects: { courage: -2, ambition: -1 },
				reaction: "It rots in the trash. No one will ever know.",
				summaryFeedback: " hid talent."
			}
		]
	},
	{
		id: "teen_shoplift",
		ageRange: "teen",
		description: "Your friends are stealing candy. They dare you to join.",
		options: [
			{
				text: "Do it",
				effects: { honesty: -2, courage: 1 },
				reaction: "Sweet taste, bitter aftertaste.",
				summaryFeedback: "Peer pressured."
			},
			{
				text: "Refuse",
				effects: { honesty: 2, courage: 2 },
				reaction: "They called you boring. You walked home alone, head held high.",
				summaryFeedback: "Resisted pressure."
			}
		]
	},
	{
		id: "teen_crush",
		ageRange: "teen",
		description: "Your crush is standing by the lockers. It's now or never.",
		options: [
			{
				text: "Confess love",
				effects: { courage: 3, honesty: 1 },
				reaction: "Rejection or acceptance, you felt your heart beat.",
				summaryFeedback: "Confessed to crush."
			},
			{
				text: "Walk past",
				effects: { courage: -1, ambition: 1 },
				reaction: "Safe. But you'll wonder 'what if' for years.",
				summaryFeedback: "Hid feelings."
			}
		]
	},
	{
		id: "teen_job_money",
		ageRange: "teen",
		description: "First paycheck from your burger flipping job.",
		options: [
			{
				text: "Buy cool clothes",
				effects: { ambition: 2, empathy: -1 },
				reaction: "You look great. You feel shallow.",
				summaryFeedback: "Spent paycheck."
			},
			{
				text: "Save for car",
				effects: { ambition: 1, courage: 1 },
				reaction: "Delayed gratification. Adulting begins.",
				summaryFeedback: "Saved money."
			}
		]
	},
	{
		id: "teen_gossip",
		ageRange: "teen",
		description: "A juicy rumor about the popular girl is spreading. You know it's fake.",
		options: [
			{
				text: "Spread it",
				effects: { honesty: -2, ambition: 2 },
				reaction: "You gained clout. She went home crying.",
				summaryFeedback: "Spread gossip."
			},
			{
				text: "Defend her",
				effects: { courage: 2, empathy: 2 },
				reaction: "You became a target. But she thanked you.",
				summaryFeedback: "Stopped gossip."
			}
		]
	},

	// --- ADULT ---
	{
		id: "adult_wallet",
		ageRange: "adult",
		description: "Found a wallet. $500 cash inside. Rent is due tomorrow.",
		options: [
			{
				text: "Keep the cash",
				effects: { honesty: -3, ambition: 1 },
				reaction: "Rent is paid. You check over your shoulder.",
				summaryFeedback: "Kept the wallet."
			},
			{
				text: "Return it",
				effects: { honesty: 3, ambition: -1 },
				reaction: "The owner cried. You feel lighter, but poorer.",
				summaryFeedback: "Returned the wallet."
			}
		]
	},
	{
		id: "adult_promotion",
		ageRange: "adult",
		description: "You can get the promotion if you sabotage your colleague's project.",
		options: [
			{
				text: "Sabotage",
				effects: { ambition: 3, honesty: -2, empathy: -2 },
				reaction: "Corner office secured. Silence in the breakroom.",
				summaryFeedback: "Backstabber."
			},
			{
				text: "Compete fairly",
				effects: { honesty: 2, ambition: -1 },
				reaction: "You lost the promotion. But kept your soul.",
				summaryFeedback: "Played fair."
			}
		]
	},
	{
		id: "adult_investment",
		ageRange: "adult",
		description: "A mysterious stranger offers a high-risk deal.",
		options: [
			{
				text: "All in",
				effects: { courage: 2, ambition: 2 },
				requirements: [{ stat: "courage", min: 50 }],
				lockedMessage: "A lifetime of caution has dulled your edge.",
				reaction: "Adrenaline spikes. Fortune favors the bold.",
				summaryFeedback: "Gambled everything."
			},
			{
				text: "Decline",
				effects: { courage: -1, ambition: -1 },
				reaction: "Safe. Predictable. Boring.",
				summaryFeedback: "Played it safe."
			}
		]
	},
	{
		id: "adult_love",
		ageRange: "adult",
		description:
			"Your partner asks you to move to a new city for their dream job. You'd have to quit yours.",
		options: [
			{
				text: "Go with them",
				effects: { empathy: 3, ambition: -2 },
				reaction: "Love over career. A risky bet, but a warm one.",
				summaryFeedback: "Chose love."
			},
			{
				text: "Stay for your career",
				effects: { ambition: 3, empathy: -2 },
				reaction: "Success tastes sweet, but the apartment feels empty.",
				summaryFeedback: "Chose career."
			}
		]
	},
	{
		id: "adult_crisis",
		ageRange: "adult",
		description:
			"You wake up realizing you hate your life path. It's not too late to change.",
		options: [
			{
				text: "Pivot completely",
				effects: { courage: 4, ambition: -1 },
				requirements: [{ stat: "courage", min: 40 }],
				lockedMessage: "You are too settled to break free.",
				reaction: "Terrifying freedom. You start from scratch.",
				summaryFeedback: "Reinvented self."
			},
			{
				text: "Stay the course",
				effects: { courage: -2, ambition: 1 },
				reaction: "Stability is comfortable. Even if it's gray.",
				summaryFeedback: "Stayed settled."
			}
		]
	},
	{
		id: "adult_startup",
		ageRange: "adult",
		description: "Your startup is failing. You can sell user data to save it.",
		options: [
			{
				text: "Sell the data",
				effects: { ambition: 2, honesty: -4 },
				reaction: "The company survives. Your conscience does not.",
				summaryFeedback: "Sold out."
			},
			{
				text: "Let it fail",
				effects: { honesty: 3, ambition: -3 },
				reaction: "Bankruptcy. But you sleep soundly.",
				summaryFeedback: "Accepted failure."
			}
		]
	},
	{
		id: "adult_mistake",
		ageRange: "adult",
		description: "Critical server crash at work. It was your code. No one knows yet.",
		options: [
			{
				text: "Blame the intern",
				effects: { honesty: -3, ambition: 1 },
				reaction: "They got fired. You got a bonus.",
				summaryFeedback: "Blamed intern."
			},
			{
				text: "Own up",
				effects: { honesty: 3, ambition: -2 },
				reaction: "You were reprimanded, but respect grew.",
				summaryFeedback: "Admitted fault."
			}
		]
	},
	{
		id: "adult_homeless",
		ageRange: "adult",
		description: "A homeless person asks for money outside a fancy restaurant.",
		options: [
			{
				text: "Give $20",
				effects: { empathy: 2, ambition: -1 },
				reaction: "They bought food. You felt connected.",
				summaryFeedback: "Helped homeless."
			},
			{
				text: "Ignore",
				effects: { empathy: -2, ambition: 0 },
				reaction: "You ate steak. The world is unfair.",
				summaryFeedback: "Ignored need."
			}
		]
	},
	{
		id: "adult_vacation",
		ageRange: "adult",
		description: "Yearly bonus arrives. How to spend it?",
		options: [
			{
				text: "Solo backpacking",
				effects: { courage: 2, empathy: 1 },
				reaction: "New cultures, new perspectives.",
				summaryFeedback: "Traveled world."
			},
			{
				text: "Luxury resort",
				effects: { ambition: 2, courage: -1 },
				reaction: "Comfortable. Pampered. Isolated.",
				summaryFeedback: "Enjoyed luxury."
			}
		]
	},

	// --- SECRET EVENTS ---
	{
		id: "secret_time_traveler",
		ageRange: "adult",
		description:
			"A ragged man claims to be you from the future. 'Don't take the job,' he begs.",
		isSecret: true,
		requirements: [
			{ stat: "empathy", min: 70 },
			{ stat: "courage", min: 60 }
		],
		options: [
			{
				text: "Believe him",
				effects: { courage: 2, ambition: -2 },
				reaction: "He vanishes. You walk away from the offer.",
				summaryFeedback: "Trust future self."
			},
			{
				text: "Call security",
				effects: { ambition: 1, empathy: -2 },
				reaction: "He screams your name as they drag him away.",
				summaryFeedback: "Rejected warning."
			}
		]
	},

	// --- ELDERLY ---
	{
		id: "elderly_legacy",
		ageRange: "elderly",
		description: "Writing your will. Who gets the family fortune?",
		options: [
			{
				text: "Family",
				effects: { empathy: 2 },
				reaction: "Blood is thicker than water.",
				summaryFeedback: "Supported family."
			},
			{
				text: "Charity",
				effects: { empathy: 3, ambition: -1 },
				reaction: "Helping strangers. A true legacy.",
				summaryFeedback: "Gave to charity."
			}
		]
	},
	{
		id: "elderly_wisdom",
		ageRange: "elderly",
		description: "A grandchild asks: 'What matters most in life?'",
		options: [
			{
				text: "Success and power",
				effects: { ambition: 2 },
				requirements: [{ stat: "ambition", min: 60 }],
				lockedMessage: "You didn't achieve enough to say this.",
				reaction: "They look inspired, but a little cold.",
				summaryFeedback: "Preached success."
			},
			{
				text: "Kindness and love",
				effects: { empathy: 2 },
				reaction: "They hug you. You feel infinite.",
				summaryFeedback: "Preached love."
			}
		]
	},
	{
		id: "elderly_regret",
		ageRange: "elderly",
		description:
			"Sitting alone on a park bench. You see an old friend you betrayed decades ago.",
		options: [
			{
				text: "Apologize",
				effects: { courage: 3, honesty: 2 },
				requirements: [{ stat: "courage", min: 30 }],
				lockedMessage: "Pride seals your lips.",
				reaction: "Tears. Forgiveness. The heavy weight lifts.",
				summaryFeedback: "Made amends."
			},
			{
				text: "Look away",
				effects: { courage: -2, honesty: -1 },
				reaction: "They walk past. The moment is gone forever.",
				summaryFeedback: "Ignored friend."
			}
		]
	},
	{
		id: "elderly_confession",
		ageRange: "elderly",
		description: "On your deathbed. One secret weighs heavy.",
		options: [
			{
				text: "Confess",
				effects: { honesty: 5, courage: 2 },
				requirements: [{ stat: "honesty", min: 40 }],
				lockedMessage: "You've lied too much to stop now.",
				reaction: "Peace at last. The room is silent.",
				summaryFeedback: "Died honest."
			},
			{
				text: "Take it to the grave",
				effects: { honesty: -2 },
				reaction: "Silence is golden. And heavy.",
				summaryFeedback: "Died with secrets."
			}
		]
	},
	{
		id: "elderly_new_habit",
		ageRange: "elderly",
		description:
			"Your doctor says it's never too late to start running. Your knees disagree.",
		options: [
			{
				text: "Start running",
				effects: { courage: 2, ambition: 1 },
				reaction: "Pain. Sweat. But you feel ALIVE.",
				summaryFeedback: "Kept fighting."
			},
			{
				text: "Enjoy the chair",
				effects: { ambition: -1 },
				reaction: "Comfort. Tea. The sun is warm enough.",
				summaryFeedback: "Rested."
			}
		]
	},
	{
		id: "elderly_tech",
		ageRange: "elderly",
		description: "The world has moved to neural implants. Do you augment your brain?",
		options: [
			{
				text: "Get the chip",
				effects: { courage: 3, ambition: 2 },
				reaction: "Thoughts are instant. You are young again, mentally.",
				summaryFeedback: "Augmented self."
			},
			{
				text: "Stay natural",
				effects: { honesty: 1, courage: -1 },
				reaction: "Slow thoughts. But they are YOUR thoughts.",
				summaryFeedback: "Stayed human."
			}
		]
	},
	{
		id: "elderly_letters",
		ageRange: "elderly",
		description:
			"You find a box of old love letters from someone who wasn't your spouse.",
		options: [
			{
				text: "Burn them",
				effects: { honesty: 2, empathy: 1 },
				reaction: "Ashes in the wind. Respect for the dead.",
				summaryFeedback: "Burned past."
			},
			{
				text: "Publish them",
				effects: { ambition: 2, empathy: -2 },
				reaction: "A bestseller. The family is horrified.",
				summaryFeedback: "Sold secrets."
			}
		]
	}
]

const SCENARIOS_RU: Scenario[] = [
	// --- ДЕТСТВО ---
	{
		id: "child_toy_theft",
		ageRange: "child",
		description:
			"Ты видишь блестящего робота в открытом рюкзаке друга. Никто не смотрит.",
		options: [
			{
				text: "Взять незаметно",
				effects: { honesty: -2, ambition: 1 },
				reaction: "Он твой. Холодный пластик, жгучая вина.",
				summaryFeedback: "Украл игрушку."
			},
			{
				text: "Сказать, что он тебе нравится",
				effects: { honesty: 1, empathy: 1 },
				reaction: "Друг улыбнулся и дал поиграть.",
				summaryFeedback: "Восхитился."
			}
		]
	},
	{
		id: "child_lost_puppy",
		ageRange: "child",
		description: "Потерянный щенок дрожит под дождем. Выглядит больным.",
		options: [
			{
				text: "Забрать домой",
				effects: { empathy: 2, courage: 1 },
				reaction: "Он лизнул твое лицо. Тепло разливается в груди.",
				summaryFeedback: "Спас щенка."
			},
			{
				text: "Пройти мимо",
				effects: { empathy: -2, ambition: 1 },
				reaction: "Ты ушел. Скулеж вскоре затих.",
				summaryFeedback: "Бросил щенка."
			}
		]
	},
	{
		id: "child_tree_climb",
		ageRange: "child",
		description: "Большой дуб. Самая высокая ветка выглядит опасно.",
		options: [
			{
				text: "Залезть на самый верх",
				effects: { courage: 2, ambition: 1 },
				reaction: "Мир отсюда кажется таким маленьким!",
				summaryFeedback: "Покорил дуб."
			},
			{
				text: "Остаться в безопасности",
				effects: { courage: -1, honesty: 1 },
				reaction: "Безопасно на траве. Смотришь, как летают другие.",
				summaryFeedback: "Остался внизу."
			}
		]
	},
	{
		id: "child_vase_break",
		ageRange: "child",
		description: "БАХ. Любимая мамина ваза лежит в осколках. Она идет по коридору.",
		options: [
			{
				text: "Спрятать осколки",
				effects: { honesty: -2, courage: -1 },
				reaction: "Она обвинила кота. Ты промолчал.",
				summaryFeedback: "Скрыл ошибку."
			},
			{
				text: "Признаться",
				effects: { honesty: 3, courage: 2 },
				reaction: "Она расстроилась, но обняла тебя за честность.",
				summaryFeedback: "Признался."
			}
		]
	},
	{
		id: "child_drawing",
		ageRange: "child",
		description:
			"Учитель спрашивает, кто нарисовал смешную картинку директора. Класс хихикает.",
		options: [
			{
				text: "Взять на себя (Это был не ты)",
				effects: { courage: 3, honesty: -1 },
				reaction: "Класс ликует. Директор хмурится. Ты герой.",
				summaryFeedback: "Взял вину."
			},
			{
				text: "Промолчать",
				effects: { honesty: 1, courage: -1 },
				reaction: "Наказали другого. Ты вздохнул с облегчением.",
				summaryFeedback: "Промолчал."
			}
		]
	},
	{
		id: "child_lost_store",
		ageRange: "child",
		description: "Супермаркет огромный. Мамы нигде нет.",
		options: [
			{
				text: "Звать на помощь",
				effects: { courage: 2, honesty: 1 },
				reaction: "Незнакомец помог найти ее. Ты научился просить.",
				summaryFeedback: "Попросил помощи."
			},
			{
				text: "Спрятаться в отделе сладостей",
				effects: { courage: -1, ambition: 1 },
				reaction: "Охрана нашла тебя за поеданием шоколада. Мама была зла.",
				summaryFeedback: "Спрятался."
			}
		]
	},
	{
		id: "child_vegetables",
		ageRange: "child",
		description: "Ужин. Зеленая склизкая брокколи смотрит на тебя.",
		options: [
			{
				text: "Съесть это",
				effects: { courage: 1, ambition: 1 },
				reaction: "Геркулесов подвиг. Ты чувствуешь силу.",
				summaryFeedback: "Съел овощи."
			},
			{
				text: "Скормить собаке",
				effects: { honesty: -1, empathy: 1 },
				reaction: "Пес счастлив. Ты полон лжи.",
				summaryFeedback: "Скормил псу."
			}
		]
	},
	{
		id: "child_new_kid",
		ageRange: "child",
		description: "Новенький сидит один за обедом. Он выглядит грустным.",
		options: [
			{
				text: "Сесть с ним",
				effects: { empathy: 3, courage: 1 },
				reaction: "Ты нашел лучшего друга на всю жизнь.",
				summaryFeedback: "Принял новенького."
			},
			{
				text: "Сесть с крутыми",
				effects: { ambition: 1, empathy: -1 },
				reaction: "Ты свой в доску. Новенький просто смотрел в тарелку.",
				summaryFeedback: "Проигнорировал."
			}
		]
	},

	// --- ЮНОСТЬ ---
	{
		id: "teen_bully_standup",
		ageRange: "teen",
		description: "Хулиган издевается над твоим другом. Все смотрят.",
		options: [
			{
				text: "Встать между ними",
				effects: { courage: 3, empathy: 1 },
				requirements: [{ stat: "courage", min: 20 }],
				lockedMessage: "Детские страхи парализуют тебя.",
				reaction: "Кулак в лицо. Боль, но помыслы чисты.",
				summaryFeedback: "Защитил друга."
			},
			{
				text: "Побежать за помощью",
				effects: { courage: -1, empathy: 1 },
				reaction: "Ты привел учителя. Практично, но трусливо?",
				summaryFeedback: "Позвал помощь."
			}
		]
	},
	{
		id: "teen_cheat",
		ageRange: "teen",
		description: "Финальный экзамен. Ответы торчат из сумки учителя.",
		options: [
			{
				text: "Сфотографировать",
				effects: { honesty: -3, ambition: 2 },
				reaction: "Легкая пятерка. Знания чувствуются незаслуженными.",
				summaryFeedback: "Списал."
			},
			{
				text: "Учить всю ночь",
				effects: { honesty: 2, ambition: -1 },
				reaction: "Измотан, но горд собой.",
				summaryFeedback: "Учил честно."
			}
		]
	},
	{
		id: "teen_party",
		ageRange: "teen",
		description: "Крутые ребята позвали на тусовку. Но твой младший брат заболел.",
		options: [
			{
				text: "Пойти на вечеринку",
				effects: { empathy: -2, ambition: 1, honesty: -1 },
				reaction: "Музыка громкая. Чувство вины громче.",
				summaryFeedback: "Бросил брата."
			},
			{
				text: "Остаться дома",
				effects: { empathy: 3, courage: 1 },
				reaction: "Он уснул, держа тебя за руку.",
				summaryFeedback: "Ухаживал за братом."
			}
		]
	},
	{
		id: "teen_poetry",
		ageRange: "teen",
		description: "Ты написал стих о своих чувствах. Завтра шоу талантов.",
		options: [
			{
				text: "Прочитать со сцены",
				effects: { courage: 3, empathy: 1 },
				requirements: [{ stat: "courage", min: 30 }],
				lockedMessage: "Страх сцены душит тебя.",
				reaction: "Тишина, затем аплодисменты. Тебя услышали.",
				summaryFeedback: "Поделился творчеством."
			},
			{
				text: "Выбросить в мусор",
				effects: { courage: -2, ambition: -1 },
				reaction: "Он гниет в урне. Никто никогда не узнает.",
				summaryFeedback: "Скрыл талант."
			}
		]
	},
	{
		id: "teen_shoplift",
		ageRange: "teen",
		description: "Друзья воруют конфеты. Они подначивают тебя.",
		options: [
			{
				text: "Сделать это",
				effects: { honesty: -2, courage: 1 },
				reaction: "Сладкий вкус с горечью стыда.",
				summaryFeedback: "Поддался давлению."
			},
			{
				text: "Отказаться",
				effects: { honesty: 2, courage: 2 },
				reaction: "Тебя назвали занудой. Ты шел домой один, но с гордо поднятой головой.",
				summaryFeedback: "Устоял."
			}
		]
	},
	{
		id: "teen_crush",
		ageRange: "teen",
		description: "Твоя любовь стоит у шкафчиков. Сейчас или никогда.",
		options: [
			{
				text: "Признаться",
				effects: { courage: 3, honesty: 1 },
				reaction: "Отказ или согласие, главное — ты жив.",
				summaryFeedback: "Признался в любви."
			},
			{
				text: "Пройти мимо",
				effects: { courage: -1, ambition: 1 },
				reaction: "Безопасно. Но ты будешь гадать 'а что если' годами.",
				summaryFeedback: "Скрыл чувства."
			}
		]
	},
	{
		id: "teen_job_money",
		ageRange: "teen",
		description: "Первая зарплата в бургерной.",
		options: [
			{
				text: "Купить шмотки",
				effects: { ambition: 2, empathy: -1 },
				reaction: "Выглядишь отлично. Чувствуешь себя пустым.",
				summaryFeedback: "Потратил всё."
			},
			{
				text: "Отложить на машину",
				effects: { ambition: 1, courage: 1 },
				reaction: "Взрослая жизнь началась.",
				summaryFeedback: "Сэкономил."
			}
		]
	},
	{
		id: "teen_gossip",
		ageRange: "teen",
		description: "Сочный (но ложный) слух о популярной девочке разлетается по школе.",
		options: [
			{
				text: "Распространить",
				effects: { honesty: -2, ambition: 2 },
				reaction: "Ты популярен. Она ушла домой в слезах.",
				summaryFeedback: "Сплетничал."
			},
			{
				text: "Защитить её",
				effects: { courage: 2, empathy: 2 },
				reaction: "Ты стал мишенью. Но она сказала спасибо.",
				summaryFeedback: "Остановил слух."
			}
		]
	},

	// --- ВЗРОСЛЫЙ ---
	{
		id: "adult_wallet",
		ageRange: "adult",
		description: "Нашел кошелек. Внутри $500. Завтра платить за аренду.",
		options: [
			{
				text: "Оставить деньги",
				effects: { honesty: -3, ambition: 1 },
				reaction: "Аренда оплачена. Ты оглядываешься через плечо.",
				summaryFeedback: "Оставил кошелек."
			},
			{
				text: "Вернуть владельцу",
				effects: { honesty: 3, ambition: -1 },
				reaction: "Владелец расплакался. Ты чувствуешь легкость, но бедность.",
				summaryFeedback: "Вернул кошелек."
			}
		]
	},
	{
		id: "adult_promotion",
		ageRange: "adult",
		description: "Ты можешь получить повышение, если подставишь коллегу.",
		options: [
			{
				text: "Подставить",
				effects: { ambition: 3, honesty: -2, empathy: -2 },
				reaction: "Кабинет твой. Тишина в комнате отдыха.",
				summaryFeedback: "Предатель."
			},
			{
				text: "Конкурировать честно",
				effects: { honesty: 2, ambition: -1 },
				reaction: "Ты упустил повышение. Но сохранил душу.",
				summaryFeedback: "Играл честно."
			}
		]
	},
	{
		id: "adult_investment",
		ageRange: "adult",
		description: "Таинственный незнакомец предлагает рискованную сделку.",
		options: [
			{
				text: "Ва-банк",
				effects: { courage: 2, ambition: 2 },
				requirements: [{ stat: "courage", min: 50 }],
				lockedMessage: "Жизнь в осторожности притупила твою хватку.",
				reaction: "Адреналин зашкаливает. Удача любит смелых.",
				summaryFeedback: "Рискнул всем."
			},
			{
				text: "Отказаться",
				effects: { courage: -1, ambition: -1 },
				reaction: "Безопасно. Предсказуемо. Скучно.",
				summaryFeedback: "Перестраховался."
			}
		]
	},
	{
		id: "adult_love",
		ageRange: "adult",
		description:
			"Партнер зовет переехать в другой город ради его карьеры. Тебе придется все бросить.",
		options: [
			{
				text: "Поехать с ним",
				effects: { empathy: 3, ambition: -2 },
				reaction: "Любовь важнее карьеры. Рискованно, но тепло.",
				summaryFeedback: "Выбрал любовь."
			},
			{
				text: "Остаться ради карьеры",
				effects: { ambition: 3, empathy: -2 },
				reaction: "Успех сладок, но квартира кажется пустой.",
				summaryFeedback: "Выбрал карьеру."
			}
		]
	},
	{
		id: "adult_crisis",
		ageRange: "adult",
		description:
			"Ты просыпаешься и понимаешь, что ненавидишь свой путь. Еще не поздно всё изменить.",
		options: [
			{
				text: "Резко всё поменять",
				effects: { courage: 4, ambition: -1 },
				requirements: [{ stat: "courage", min: 40 }],
				lockedMessage: "Ты слишком привык к комфорту, чтобы вырваться.",
				reaction: "Пугающая свобода. Ты начинаешь с нуля.",
				summaryFeedback: "Переродился."
			},
			{
				text: "Оставить как есть",
				effects: { courage: -2, ambition: 1 },
				reaction: "Стабильность комфортна. Даже если она серая.",
				summaryFeedback: "Смирился."
			}
		]
	},
	{
		id: "adult_startup",
		ageRange: "adult",
		description:
			"Твой стартап гибнет. Можно продать данные пользователей, чтобы спастись.",
		options: [
			{
				text: "Продать данные",
				effects: { ambition: 2, honesty: -4 },
				reaction: "Компания выжила. Твоя совесть — нет.",
				summaryFeedback: "Продался."
			},
			{
				text: "Позволить рухнуть",
				effects: { honesty: 3, ambition: -3 },
				reaction: "Банкротство. Зато ты спишь спокойно.",
				summaryFeedback: "Принял крах."
			}
		]
	},
	{
		id: "adult_mistake",
		ageRange: "adult",
		description: "Критическая ошибка на серверах. Это твой код. Никто пока не знает.",
		options: [
			{
				text: "Свалить на стажера",
				effects: { honesty: -3, ambition: 1 },
				reaction: "Его уволили. Ты получил бонус.",
				summaryFeedback: "Подставил стажера."
			},
			{
				text: "Признаться",
				effects: { honesty: 3, ambition: -2 },
				reaction: "Получил выговор, но тебя зауважали.",
				summaryFeedback: "Признал ошибку."
			}
		]
	},
	{
		id: "adult_homeless",
		ageRange: "adult",
		description: "Бездомный просит мелочь у дорогого ресторана.",
		options: [
			{
				text: "Дать $20",
				effects: { empathy: 2, ambition: -1 },
				reaction: "Он купил еды. Ты почувствовал связь.",
				summaryFeedback: "Помог бездомному."
			},
			{
				text: "Игнорировать",
				effects: { empathy: -2, ambition: 0 },
				reaction: "Ты ел стейк. Мир несправедлив.",
				summaryFeedback: "Проигнорировал нужду."
			}
		]
	},
	{
		id: "adult_vacation",
		ageRange: "adult",
		description: "Пришел годовой бонус. Как потратить?",
		options: [
			{
				text: "Рюкзак и горы",
				effects: { courage: 2, empathy: 1 },
				reaction: "Новые культуры, новые взгляды.",
				summaryFeedback: "Увидел мир."
			},
			{
				text: "Лакшери курорт",
				effects: { ambition: 2, courage: -1 },
				reaction: "Комфорт. Нега. Изоляция.",
				summaryFeedback: "Выбрал роскошь."
			}
		]
	},

	// --- СЕКРЕТНЫЕ СОБЫТИЯ ---
	{
		id: "secret_time_traveler",
		ageRange: "adult",
		description:
			"Оборванный человек утверждает, что он — это ты из будущего. 'Не соглашайся на работу', умоляет он.",
		isSecret: true,
		requirements: [
			{ stat: "empathy", min: 70 },
			{ stat: "courage", min: 60 }
		],
		options: [
			{
				text: "Поверить ему",
				effects: { courage: 2, ambition: -2 },
				reaction: "Он исчезает. Ты отказываешься от предложения.",
				summaryFeedback: "Поверил будущему."
			},
			{
				text: "Вызвать охрану",
				effects: { ambition: 1, empathy: -2 },
				reaction: "Он кричит твое имя, пока его уводят.",
				summaryFeedback: "Отверг знаки."
			}
		]
	},

	// --- СТАРОСТЬ ---
	{
		id: "elderly_legacy",
		ageRange: "elderly",
		description: "Пишешь завещание. Кому достанется семейное состояние?",
		options: [
			{
				text: "Семье",
				effects: { empathy: 2 },
				reaction: "Кровь гуще воды.",
				summaryFeedback: "Поддержал семью."
			},
			{
				text: "Благотворительности",
				effects: { empathy: 3, ambition: -1 },
				reaction: "Помощь незнакомцам. Истинное наследие.",
				summaryFeedback: "Отдал на благо."
			}
		]
	},
	{
		id: "elderly_wisdom",
		ageRange: "elderly",
		description: "Внук спрашивает: 'Что в жизни самое главное?'",
		options: [
			{
				text: "Успех и власть",
				effects: { ambition: 2 },
				requirements: [{ stat: "ambition", min: 60 }],
				lockedMessage: "Ты недостаточно достиг, чтобы так говорить.",
				reaction: "Они вдохновлены, но взгляд холоден.",
				summaryFeedback: "Учил успеху."
			},
			{
				text: "Доброта и любовь",
				effects: { empathy: 2 },
				reaction: "Они обнимают тебя. Ты чувствуешь вечность.",
				summaryFeedback: "Учил любви."
			}
		]
	},
	{
		id: "elderly_regret",
		ageRange: "elderly",
		description:
			"Сидишь один на скамейке в парке. Видишь старого друга, которого предал десятилетия назад.",
		options: [
			{
				text: "Извиниться",
				effects: { courage: 3, honesty: 2 },
				requirements: [{ stat: "courage", min: 30 }],
				lockedMessage: "Гордость запечатала твои губы.",
				reaction: "Слезы. Прощение. Тяжесть уходит.",
				summaryFeedback: "Помирился."
			},
			{
				text: "Отвернуться",
				effects: { courage: -2, honesty: -1 },
				reaction: "Он проходит мимо. Момент потерян навсегда.",
				summaryFeedback: "Проигнорировал."
			}
		]
	},
	{
		id: "elderly_confession",
		ageRange: "elderly",
		description: "На смертном одре. Однона секрет давит тяжким грузом.",
		options: [
			{
				text: "Исповедаться",
				effects: { honesty: 5, courage: 2 },
				requirements: [{ stat: "honesty", min: 40 }],
				lockedMessage: "Ты слишком много лгал, чтобы остановиться.",
				reaction: "Покой наконец-то. В комнате тишина.",
				summaryFeedback: "Умер честным."
			},
			{
				text: "Унести в могилу",
				effects: { honesty: -2 },
				reaction: "Молчание — золото. И тяжкий груз.",
				summaryFeedback: "Умер с тайнами."
			}
		]
	},
	{
		id: "elderly_new_habit",
		ageRange: "elderly",
		description:
			"Врач говорит, что никогда не поздно начать бегать. Твои колени не согласны.",
		options: [
			{
				text: "Начать бегать",
				effects: { courage: 2, ambition: 1 },
				reaction: "Боль. Пот. Но ты чувствуешь себя ЖИВЫМ.",
				summaryFeedback: "Продолжал бороться."
			},
			{
				text: "Наслаждаться креслом",
				effects: { ambition: -1 },
				reaction: "Комфорт. Чай. Солнце греет достаточно.",
				summaryFeedback: "Отдыхал."
			}
		]
	},
	{
		id: "elderly_tech",
		ageRange: "elderly",
		description: "Мир перешел на нейроимпланты. Установишь чип?",
		options: [
			{
				text: "Вживить чип",
				effects: { courage: 3, ambition: 2 },
				reaction: "Мысли мгновенны. Ты снова ментально молод.",
				summaryFeedback: "Киборгизация."
			},
			{
				text: "Остаться собой",
				effects: { honesty: 1, courage: -1 },
				reaction: "Мысли медленные. Зато они ТВОИ.",
				summaryFeedback: "Остался человеком."
			}
		]
	},
	{
		id: "elderly_letters",
		ageRange: "elderly",
		description:
			"Ты нашел коробку старых любовных писем от того, кто не был твоим супругом.",
		options: [
			{
				text: "Сжечь их",
				effects: { honesty: 2, empathy: 1 },
				reaction: "Пепел на ветру. Уважение к прошлому.",
				summaryFeedback: "Сжег прошлое."
			},
			{
				text: "Опубликовать",
				effects: { ambition: 2, empathy: -2 },
				reaction: "Бестселлер. Семья в ужасе.",
				summaryFeedback: "Продал тайны."
			}
		]
	}
]

export const getScenarios = (lang: "en" | "ru" = "en") => {
	return lang === "ru" ? SCENARIOS_RU : SCENARIOS_EN
}

export const scenarios = SCENARIOS_EN // Default export for backwards compatibility checks
