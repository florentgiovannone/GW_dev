export const howToBetItems = [
    {
        id: 1,
        title: "Super Match Game (SMG)",
        description: "In this betting game, the player predicts the winning trap number (from 1 to 6) for each of 6 consecutive greyhound races. The objective is to match as many correct trap numbers as possible in the correct order. If the player gets 2 or more consecutive correct predictions, they start earning a prize:",
        bullets: [
            "Match 2, Match 3, up to Match 6 depending on the length of the correct sequence.",
            "If the player hits multiple qualifying sequences in the same set of 6 races (e.g. two separate runs of 2 or more correct), they win multiple times — once for each matching sequence.(only valid for match2)"
        ]
    },
    {
        id: 2,
        title: "Catch A Match",
        description: "In this market, players try to spot repeating patterns in the trap numbers. The aim is to predict when the same trap number will win again within a sequence of races. The more accurately the player identifies recurring winners, the higher the potential return.",
        table: [
            { name: "Six Going Up", desc: "Traps 1, 2, 3, 4, 5 and 6, in that order" },
            { name: "Six Coming Down", desc: "Traps 6, 5, 4, 3, 2 and 1, in that order" },
            { name: "Crowded House", desc: "Six different trap numbers" },
            { name: "Super Six", desc: "Six of the same" },
            { name: "Super Six Five", desc: "Five of the same" },
            { name: "Full Traps", desc: "Foursome over a pair of traps and vice versa" },
            { name: "Foursome", desc: "Four traps the same" },
            { name: "Half Traps", desc: "Threesome over Threesome" },
            { name: "Three Two", desc: "Threesome over a pair of traps and vice versa" },
            { name: "Threesome", desc: "Three traps the same" }
        ]
    },
    {
        id: 3,
        title: "Trap Numbers Winning Most",
        description: "This game offers three simple prediction options based on the winning trap numbers across the race sequence:",
        columns: [
            {
                header: "High / Low",
                content: "Bet on the winner being High (4,5,6) or Low (1,2,3) or Equal (split equally between High and Low)"
            },
            {
                header: "Odd / Even",
                content: "Bet on the winner being Odd (1,3,5) or Even (2,4,6) or Equal (split equally between Odd and Even)"
            },
            {
                header: "Top Trap",
                content: "Bet on the number that will win most races. Select a number, bet on any number or bet on if no number will have the most wins"
            }
        ]
    },
    {
        id: 4,
        title: "Winning Traps Total",
        description: "In this market, players add together the winning trap numbers from all six races and place a bet based on the final total. There are three ways to play:",
        columns: [
            {
                header: "Traps Total:",
                content: "Add all the winning trap numbers and guess the total:"
            },
            {
                header: "Range:",
                content: "Add all the winning trap numbers and guess the range 7-21 or 22-36"
            },
            {
                header: "Sum:",
                content: "Add all the winning trap numbers and bet on if the sum is Odd or Even"
            }
        ]
    },
    {
        id: 5,
        title: "Play Your Dogs Right",
        description: "In this game, the player predicts whether the next winning trap number will be higher, medium or lower than the previous one across a series of 6 greyhound races.",
        definition: [
            "dog 1–2 are considered Low (L)",
            "dog 3–4 are considered Medium (M)",
            "dog 5–6 are considered High (H)"
        ],
        howItWorks: [
            "Players choose a six-race sequence (e.g., H-M-L-H-M-L).",
            "The aim is to achieve the longest consecutive run of correct predictions (\"Run 2\" to \"Run 6\").",
            "Each \"Run\" has its own dividend."
        ],
        example: {
            title: "5.2. Example",
            lines: [
                "Customer selects \"Run 4.\"",
                "Predictions: H-M-L-L-L-L",
                "Results: H-H-L-L-L-L → Longest run = 4 → \"Run 4\" wins."
            ]
        }
    },
    {
        id: 6,
        title: "Parplays and multi bets",
        description: "A traditional accumulator-style market allowing customers to combine race selections for higher returns.",
        howItWorks: [
            "Customers pick trap winners across the six races to build accumulators.",
            "Bet types include Singles, Doubles, Trebles, 4-Folds, 5-Folds, and 6-Fold Accumulators.",
            "Each \"Run\" has its own dividend.",
            "Total payout = product of individual race dividends for all correct selections."
        ],
        example: {
            title: "6.2. Example",
            lines: [
                "Selecting Trap 2 to win Race 1 (5.00) and Trap 4 to win Race 2 (5.00) as a Double → Payout = 5.00 × 5.00 = 25.00."
            ]
        }
    }
];

