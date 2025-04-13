/**
 * Central Game Database
 * This file contains all game data used across the website
 * Any changes to game information should only be made here
 */

// Global games database object
let GAMES_DATABASE = {
    "screw-out": {
        "id": "screw-out",
        "title": "Screw Out: Bolts and Nuts",
        "category": "Puzzle",
        "rating": 8.8,
        "releaseDate": "March 2023",
        "description": "Screw Out: Bolts and Nuts is a classic puzzle game where your goal is to unscrew bolts from various shapes and sort them by color into the correct containers. Each level presents a new challenge that requires patience, logic, and careful planning to succeed.<br><br>Be vigilant! The number of additional holes is limited, so you'll need to think a few steps ahead before making a move. Every action counts, and rushing in without a plan could leave you stuck! Once all the bolts are sorted correctly, you'll complete the level and move on to even trickier puzzles. Can you master every challenge and become the ultimate bolt-sorting expert?",
        "thumbnailImage": "images/screw-out.jpg",
        "gameIframeUrl": "https://www.crazygames.com/embed/screw-out-bolts-and-nuts",
        "totalPlays": "42,519",
        "favorites": "5,876",
        "comments": "873",
        "difficulty": "Medium",
        "tags": ["Puzzle", "Brain Teaser", "Logic", "Strategy", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Use left mouse button to unscrew bolts"
            }
        ]
    },
    "slice-master": {
        "id": "slice-master",
        "title": "Slice Master",
        "category": "Puzzle",
        "rating": 8.2,
        "releaseDate": "February 2023",
        "description": "Slice Master is a fast-paced slicing game where you cut various objects that fly across the screen. Test your reflexes and precision as you slice through fruits, vegetables, and special bonus items. Be careful to avoid slicing bombs!",
        "thumbnailImage": "images/MatchVentures.jpeg",
        "gameIframeUrl": "https://www.crazygames.com/embed/slice-master",
        "totalPlays": "35,782",
        "favorites": "4,125",
        "comments": "652",
        "difficulty": "Medium", 
        "tags": ["Puzzle", "Arcade", "Reflex", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Swipe or drag to slice objects"
            }
        ]
    },
    "rope-rescue": {
        "id": "rope-rescue",
        "title": "Rope Rescue",
        "category": "Brain Teaser",
        "rating": 8.9,
        "releaseDate": "March 2023",
        "description": "Rope Rescue is a challenging physics-based puzzle game where you must cut ropes at the right time to free trapped characters. Each level requires creative thinking and precise timing to solve the puzzles.",
        "thumbnailImage": "images/CubeCraft Merge  Battle.jpeg",
        "gameIframeUrl": "https://www.crazygames.com/embed/rope-rescue",
        "totalPlays": "40,125",
        "favorites": "5,230",
        "comments": "815",
        "difficulty": "Hard",
        "tags": ["Brain Teaser", "Physics", "Puzzle", "Strategy", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to cut ropes"
            }
        ]
    },
    "teacher-simulator": {
        "id": "teacher-simulator",
        "title": "Teacher Simulator",
        "category": "Simulation",
        "rating": 7.8,
        "releaseDate": "April 2023",
        "description": "Teacher Simulator puts you in the shoes of a school teacher managing a classroom of students. Handle various situations, plan lessons, and try to maintain order while keeping students engaged and learning.",
        "thumbnailImage": "images/Teacher Simulator.jpeg",
        "gameIframeUrl": "https://www.crazygames.com/embed/teacher-simulator",
        "totalPlays": "28,456",
        "favorites": "3,178",
        "comments": "542",
        "difficulty": "Medium",
        "tags": ["Simulation", "Education", "Role Playing", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to interact with students and objects"
            },
            {
                "icon": "keyboard",
                "description": "WASD keys to move around the classroom"
            }
        ]
    },
    "Vortex-9": {
        "id": "Vortex-9",
        "title": "Vortex 9",
        "category": "Shooting",
        "rating": 9.2,
        "releaseDate": "April 2023",
        "description": "Vortex 9 is a fast-paced shooter packed with stylish heroes, wild weapons, and chaotic battles. Choose from eight quirky characters like Mr. Goodboy or Jess Purrfect, and unleash insane firepower with unconventional guns and melee weapons. Dive into thrilling modes like Team Battle and Capture Point across stunning maps. Team up with friends and dominate the battlefield!",
        "thumbnailImage": "images/Vortex 9.jpeg",
        "gameIframeUrl": "https://www.crazygames.com/embed/vortex-9-ubs",
        "totalPlays": "85,421",
        "favorites": "12,543",
        "comments": "2,187",
        "difficulty": "Easy to Medium",
        "tags": ["Shooting", "Action", "Multiplayer", "Battle", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Left mouse button to shoot"
            },
            {
                "icon": "keyboard",
                "description": "WASD keys to move character"
            },
            {
                "icon": "keyboard",
                "description": "Space bar to jump or use special abilities"
            },
            {
                "icon": "keyboard",
                "description": "R key to reload weapon"
            }
        ]
    },
    "feeling-arrow": {
        "id": "feeling-arrow",
        "title": "Feeling Arrow",
        "category": "Arcade",
        "rating": 8.7,
        "releaseDate": "May 2023",
        "description": "Feeling Arrow is an exciting archery-based arcade game that tests your timing and precision. Shoot arrows through moving targets, overcome obstacles, and unlock new levels as you progress. Perfect your aim and become the ultimate archer in this addictive game!",
        "thumbnailImage": "images/feeling-arrow-cover.avif",
        "gameIframeUrl": "https://www.crazygames.com/embed/feeling-arrow",
        "totalPlays": "32,145",
        "favorites": "4,782",
        "comments": "643",
        "difficulty": "Medium",
        "tags": ["Arcade", "Archery", "Precision", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click and hold to aim, release to shoot arrow"
            },
            {
                "icon": "keyboard",
                "description": "Space bar to reset aim"
            }
        ]
    },
    "words-from-words": {
        "id": "words-from-words",
        "title": "Words from Words",
        "category": "Puzzle",
        "rating": 8.5,
        "releaseDate": "June 2023",
        "description": "Words from Words is a vocabulary game that challenges your word-building skills. Create as many words as possible from a given set of letters to increase your score. The game is easy to learn but requires a rich vocabulary and quick thinking to achieve high scores!",
        "thumbnailImage": "images/words-from-words.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/607f9f304899446aaf075339ba3dff81/?gd_sdk_referrer_url=https://www.onlinegames.io/words-from-words/",
        "totalPlays": "24,756",
        "favorites": "3,214",
        "comments": "425",
        "difficulty": "Medium",
        "tags": ["Puzzle", "Word", "Educational", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click letters to form words"
            }
        ]
    },
    "mafia-getaway-cars": {
        "id": "mafia-getaway-cars",
        "title": "Mafia Getaway Cars",
        "category": "Action",
        "rating": 8.8,
        "releaseDate": "June 2023",
        "description": "Mafia Getaway Cars is an exciting action racing game where you play as a mafia member trying to escape from the police. The game features stunning graphics, simple controls, but requires precise driving skills to successfully escape. Various vehicles and levels await your challenge!",
        "thumbnailImage": "images/mafia-getaway-cars.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/construct/298/mafia-getaway-cars/index-og.html",
        "totalPlays": "38,912",
        "favorites": "5,632",
        "comments": "724",
        "difficulty": "Medium",
        "tags": ["Action", "Racing", "Driving", "Crime", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to control vehicle"
            },
            {
                "icon": "keyboard",
                "description": "Space bar to accelerate"
            }
        ]
    },
    "nova-clicker": {
        "id": "nova-clicker",
        "title": "Nova Clicker",
        "category": "Clicker",
        "rating": 8.3,
        "releaseDate": "July 2023",
        "description": "Nova Clicker is an addictive clicking game where you accumulate resources by continuously clicking on the screen. Unlock various cosmic elements and planets as you progress. The game features beautiful designs, rich upgrade systems and achievements that let you experience the vastness and mystery of the universe through casual clicking.",
        "thumbnailImage": "images/nova-clicker.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2024/construct/314/nova-clicker/index-og.html",
        "totalPlays": "45,321",
        "favorites": "6,789",
        "comments": "932",
        "difficulty": "Easy",
        "tags": ["Clicker", "Idle", "Space", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click the screen to accumulate resources"
            }
        ]
    },
    "motor-tour": {
        "id": "motor-tour",
        "title": "Motor Tour",
        "category": "Racing",
        "rating": 9.0,
        "releaseDate": "July 2023",
        "description": "Motor Tour is a 3D motorcycle racing game where players need to drive motorcycles on various complex and changing tracks. The game features realistic physics engines and beautiful graphics, with multiple racing motorcycles and tracks to choose from, challenging your driving skills and reaction ability!",
        "thumbnailImage": "images/motor-tour.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/635b4ece400845cea372258dee3882b8/?gd_sdk_referrer_url=https://www.onlinegames.io/motor-tour/",
        "totalPlays": "52,678",
        "favorites": "8,123",
        "comments": "1,047",
        "difficulty": "Hard",
        "tags": ["Racing", "Sports", "3D", "Driving", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to control motorcycle"
            },
            {
                "icon": "keyboard",
                "description": "Space bar for acceleration/braking"
            }
        ]
    },
    "fast-food-rush": {
        "id": "fast-food-rush",
        "title": "Fast Food Rush",
        "category": "Time Management",
        "rating": 8.7,
        "releaseDate": "August 2023",
        "description": "Fast Food Rush is a high-paced time management game where you run your own fast food restaurant. Take customer orders, prepare meals, and serve them quickly to earn tips and upgrade your restaurant. Can you handle the pressure when the lunch rush hits?",
        "thumbnailImage": "images/fast-food-rush.jpg",
        "gameIframeUrl": "https://www.crazygames.com/embed/fast-food-rush",
        "totalPlays": "31,527",
        "favorites": "4,189",
        "comments": "503",
        "difficulty": "Medium",
        "tags": ["Time Management", "Restaurant", "Strategy", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to interact with stations and items"
            }
        ]
    },
    "fleeing-the-complex": {
        "id": "fleeing-the-complex",
        "title": "Fleeing the Complex",
        "category": "Adventure",
        "rating": 9.4,
        "releaseDate": "August 2023",
        "description": "Fleeing the Complex is an adventure puzzle game where players need to help the protagonist escape from a high-security prison. The game offers multiple escape routes and choices, with each decision leading to different outcomes. Rich storylines, humorous style, and varied endings make this game full of fun and challenges.",
        "thumbnailImage": "images/fleeing-complex.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/flash/fleeing-the-complex/index-og.html",
        "totalPlays": "68,452",
        "favorites": "12,345",
        "comments": "2,143",
        "difficulty": "Medium",
        "tags": ["Adventure", "Puzzle", "Strategy", "Flash", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click on screen to make choices and interact"
            }
        ]
    },
    "sort-resort": {
        "id": "sort-resort",
        "title": "Sort Resort",
        "category": "Puzzle",
        "rating": 8.7,
        "releaseDate": "September 2023",
        "description": "Sort Resort is a sorting puzzle game where players need to categorize and combine different colored and shaped objects to complete the objectives of each level. The game is simple to understand but difficult to master, with increasing difficulty as levels progress, testing players' logical thinking and strategic planning abilities.",
        "thumbnailImage": "images/sort-resort.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/5a6964fb2e934aa0a8cd594242689092/?gd_sdk_referrer_url=https://www.onlinegames.io/sort-resort/",
        "totalPlays": "34,567",
        "favorites": "4,832",
        "comments": "587",
        "difficulty": "Easy to Medium",
        "tags": ["Puzzle", "Sorting", "Logic", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click and drag items to sort them"
            }
        ]
    },
    "survival-island": {
        "id": "survival-island",
        "title": "Survival Island",
        "category": "Survival",
        "rating": 7.0,
        "releaseDate": "March 2025",
        "description": "Survive against the odds in Survival Island, where resource management and quick thinking are essential. Gather materials, craft tools, and build shelters to protect yourself from dangers that lurk around every corner.",
        "thumbnailImage": "images/survival-island.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2024/unity2/survival-island/index-og.html",
        "totalPlays": "40,684",
        "favorites": "8,965",
        "comments": "1,678",
        "difficulty": "Medium",
        "tags": ["Survival", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "WASD to move character"
            },
            {
                "icon": "mouse",
                "description": "Left click to interact, right click to use items"
            }
        ]
    },
    "squid-shooter": {
        "id": "squid-shooter",
        "title": "Squid Shooter",
        "category": "Shooting",
        "rating": 8.4,
        "releaseDate": "March 2025",
        "description": "Take aim and fire in Squid Shooter, an intense shooting game where precision and quick reflexes are key. Defeat waves of enemies, upgrade your weapons, and become the ultimate marksman in this action-packed game.",
        "thumbnailImage": "images/squid-shooter.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/c0a72373f81d4096a325f9b0dde0d7b9/?gd_sdk_referrer_url=https://www.onlinegames.io/squid-shooter/",
        "totalPlays": "77,789",
        "favorites": "10,204",
        "comments": "504",
        "difficulty": "Medium",
        "tags": ["Shooting", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Move mouse to aim, left click to shoot"
            },
            {
                "icon": "keyboard",
                "description": "WASD to move character"
            }
        ]
    },
    "conquer-kingdoms": {
        "id": "conquer-kingdoms",
        "title": "Conquer Kingdoms",
        "category": "Strategy",
        "rating": 8.1,
        "releaseDate": "March 2025",
        "description": "Conquer Kingdoms challenges your strategic thinking as you plan and execute your moves carefully. Build, expand, and conquer in this engaging strategy game where every decision matters. Develop the perfect strategy to outmaneuver your opponents.",
        "thumbnailImage": "images/conquer-kingdoms.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/unity/conquer-kingdoms/index-og.html",
        "totalPlays": "45,487",
        "favorites": "5,723",
        "comments": "572",
        "difficulty": "Medium",
        "tags": ["Strategy", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to select units and issue commands"
            },
            {
                "icon": "keyboard",
                "description": "Number keys for quick selection"
            }
        ]
    },
    "mahjong": {
        "id": "mahjong",
        "title": "Mahjong",
        "category": "Puzzle",
        "rating": 8.4,
        "releaseDate": "March 2025",
        "description": "Mahjong is an engaging puzzle game that will test your problem-solving skills. Navigate through increasingly challenging levels using logic and strategy. With colorful graphics and intuitive controls, this game is easy to learn but difficult to master.",
        "thumbnailImage": "images/mahjong.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/unity/mahjong/index-og.html",
        "totalPlays": "87,565",
        "favorites": "5,269",
        "comments": "603",
        "difficulty": "Easy",
        "tags": ["Puzzle", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to select and move pieces"
            }
        ]
    },
    "nuts-and-bolts-puzzle": {
        "id": "nuts-and-bolts-puzzle",
        "title": "Nuts and Bolts Puzzle",
        "category": "Puzzle",
        "rating": 7.7,
        "releaseDate": "March 2025",
        "description": "Nuts and Bolts Puzzle is an engaging puzzle game that will test your problem-solving skills. Navigate through increasingly challenging levels using logic and strategy. With colorful graphics and intuitive controls, this game is easy to learn but difficult to master.",
        "thumbnailImage": "images/nuts-and-bolts-puzzle.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/unity/nuts-and-bolts-puzzle/index-og.html",
        "totalPlays": "69,147",
        "favorites": "7,392",
        "comments": "572",
        "difficulty": "Medium",
        "tags": ["Puzzle", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to select and move pieces"
            }
        ]
    },
    "race-clicker-drift-max": {
        "id": "race-clicker-drift-max",
        "title": "Race Clicker: Drift Max",
        "category": "Clicker",
        "rating": 8.1,
        "releaseDate": "March 2025",
        "description": "Race Clicker: Drift Max is an addictive incremental game where you click to earn resources and unlock new features. Watch as your empire grows with each click, and discover new strategies to optimize your progress.",
        "thumbnailImage": "images/race-clicker-drift-max.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/a02de4821afa46c3b69dd95385c314db/?gd_sdk_referrer_url=https://www.onlinegames.io/race-clicker-drift-max/",
        "totalPlays": "87,316",
        "favorites": "5,014",
        "comments": "783",
        "difficulty": "Medium",
        "tags": ["Clicker", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to earn points and resources"
            }
        ]
    },
    "slope-rolling": {
        "id": "slope-rolling",
        "title": "Slope Rolling",
        "category": "Arcade",
        "rating": 8.2,
        "releaseDate": "March 2025",
        "description": "Slope Rolling brings back the classic arcade feeling with simple yet addictive gameplay. Easy to pick up but hard to put down, this game will keep you entertained for hours as you try to beat your high score.",
        "thumbnailImage": "images/slope-rolling.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/0022998ce3c54962be6ffe178229b168/?gd_sdk_referrer_url=https://www.onlinegames.io/slope-rolling/",
        "totalPlays": "39,395",
        "favorites": "4,871",
        "comments": "1,515",
        "difficulty": "Easy to Medium",
        "tags": ["Arcade", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to control"
            },
            {
                "icon": "keyboard",
                "description": "Space for action"
            }
        ]
    },
    "ragdoll-football-2-players": {
        "id": "ragdoll-football-2-players",
        "title": "Ragdoll Football 2 Players",
        "category": "Sports",
        "rating": 8.3,
        "releaseDate": "March 2025",
        "description": "Compete for glory in Ragdoll Football 2 Players! This sports game offers realistic physics, intuitive controls, and exciting gameplay. Challenge yourself in various tournaments and become the champion in this addictive sports experience.",
        "thumbnailImage": "images/ragdoll-football-2-players.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/d28ab37fbee149289d4c3d92106e2921/?gd_sdk_referrer_url=https://www.onlinegames.io/ragdoll-football-2-players/",
        "totalPlays": "41,024",
        "favorites": "2,962",
        "comments": "654",
        "difficulty": "Hard",
        "tags": ["Sports", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to move"
            },
            {
                "icon": "keyboard",
                "description": "Space to perform action"
            }
        ]
    },
    "supermarket-simulator": {
        "id": "supermarket-simulator",
        "title": "Supermarket Simulator",
        "category": "Simulation",
        "rating": 7.8,
        "releaseDate": "March 2025",
        "description": "Experience the thrills of Supermarket Simulator, a realistic simulation that puts you in control. Manage resources, make critical decisions, and watch as your efforts lead to success or failure. How well can you handle the challenges that come your way?",
        "thumbnailImage": "images/supermarket-simulator.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/unity/supermarket-simulator/index-og.html",
        "totalPlays": "73,964",
        "favorites": "3,438",
        "comments": "891",
        "difficulty": "Easy",
        "tags": ["Simulation", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to interact with objects and menus"
            }
        ]
    },
    "infiltrating-the-airship": {
        "id": "infiltrating-the-airship",
        "title": "Infiltrating the Airship",
        "category": "Adventure",
        "rating": 7.8,
        "releaseDate": "March 2025",
        "description": "Embark on an exciting journey in Infiltrating the Airship! Explore mysterious locations, solve intriguing puzzles, and make crucial decisions that affect the outcome of your adventure. With multiple paths and endings, every playthrough offers a unique experience.",
        "thumbnailImage": "images/infiltrating-the-airship.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/flash/infiltrating-the-airship/index-og.html",
        "totalPlays": "47,624",
        "favorites": "2,201",
        "comments": "1,500",
        "difficulty": "Medium to Hard",
        "tags": ["Adventure", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to interact with objects and characters"
            }
        ]
    },
    "stealing-the-diamond": {
        "id": "stealing-the-diamond",
        "title": "Stealing the Diamond",
        "category": "Adventure",
        "rating": 8.3,
        "releaseDate": "March 2025",
        "description": "Embark on an exciting journey in Stealing the Diamond! Explore mysterious locations, solve intriguing puzzles, and make crucial decisions that affect the outcome of your adventure. With multiple paths and endings, every playthrough offers a unique experience.",
        "thumbnailImage": "images/stealing-the-diamond.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/flash/stealing-the-diamond/index-og.html",
        "totalPlays": "22,258",
        "favorites": "8,210",
        "comments": "515",
        "difficulty": "Medium to Hard",
        "tags": ["Adventure", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to interact with objects and characters"
            }
        ]
    },
    "tank-arena": {
        "id": "tank-arena",
        "title": "Tank Arena",
        "category": "Action",
        "rating": 8.6,
        "releaseDate": "March 2025",
        "description": "Tank Arena puts your reflexes to the test in this fast-paced action game. Battle against enemies, dodge obstacles, and collect power-ups to progress through increasingly challenging levels. Can you make it to the end?",
        "thumbnailImage": "images/tank-arena.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/construct/293/tank-arena/index-og.html",
        "totalPlays": "60,213",
        "favorites": "9,815",
        "comments": "1,472",
        "difficulty": "Medium",
        "tags": ["Action", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "WASD or Arrow keys to move"
            },
            {
                "icon": "mouse",
                "description": "Left click to attack"
            }
        ]
    },
    "escaping-the-prison": {
        "id": "escaping-the-prison",
        "title": "Escaping the Prison",
        "category": "Adventure",
        "rating": 8.7,
        "releaseDate": "March 2025",
        "description": "Embark on an exciting journey in Escaping the Prison! Explore mysterious locations, solve intriguing puzzles, and make crucial decisions that affect the outcome of your adventure. With multiple paths and endings, every playthrough offers a unique experience.",
        "thumbnailImage": "images/escaping-the-prison.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/flash/escaping-the-prison/index-og.html",
        "totalPlays": "85,243",
        "favorites": "10,432",
        "comments": "1,743",
        "difficulty": "Medium to Hard",
        "tags": ["Adventure", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to interact with objects and characters"
            }
        ]
    },
    "candy-bubble": {
        "id": "candy-bubble",
        "title": "Candy Bubble",
        "category": "Puzzle",
        "rating": 7.9,
        "releaseDate": "March 2025",
        "description": "Candy Bubble is an engaging puzzle game that will test your problem-solving skills. Navigate through increasingly challenging levels using logic and strategy. With colorful graphics and intuitive controls, this game is easy to learn but difficult to master.",
        "thumbnailImage": "images/candy-bubble.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/d9201aa9fdb24921b1b832c18762ddf1/?gd_sdk_referrer_url=https://www.onlinegames.io/candy-bubble/",
        "totalPlays": "30,216",
        "favorites": "4,571",
        "comments": "398",
        "difficulty": "Easy",
        "tags": ["Puzzle", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to select and move pieces"
            }
        ]
    },
    "golf-orbit": {
        "id": "golf-orbit",
        "title": "Golf Orbit",
        "category": "Sports",
        "rating": 8.0,
        "releaseDate": "March 2025",
        "description": "Compete for glory in Golf Orbit! This sports game offers realistic physics, intuitive controls, and exciting gameplay. Challenge yourself in various tournaments and become the champion in this addictive sports experience.",
        "thumbnailImage": "images/golf-orbit.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/02ff01e6e9f7451ba28d889a2a55eec9/?gd_sdk_referrer_url=https://www.onlinegames.io/golf-orbit/",
        "totalPlays": "57,184",
        "favorites": "6,241",
        "comments": "825",
        "difficulty": "Medium",
        "tags": ["Sports", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to move"
            },
            {
                "icon": "keyboard",
                "description": "Space to perform action"
            }
        ]
    },
    "duck-life-space": {
        "id": "duck-life-space",
        "title": "Duck Life Space",
        "category": "Adventure",
        "rating": 8.7,
        "releaseDate": "January 2024",
        "description": "Duck Life Space is a fun adventure game where you control a cute duck on a space adventure. Train your duck to improve various abilities such as flying, swimming, and running to succeed in different challenges. The game includes multiple levels and mini-games, providing endless entertainment!",
        "thumbnailImage": "images/Duck-Life-Space.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2024/wix/duck-life-space/index.html",
        "totalPlays": "38,520",
        "favorites": "5,432",
        "comments": "824",
        "difficulty": "Easy",
        "tags": ["Adventure", "Animal", "Training", "Space", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click to interact and control"
            },
            {
                "icon": "keyboard",
                "description": "Arrow keys to move"
            }
        ]
    },
    "draw-the-car-path": {
        "id": "draw-the-car-path",
        "title": "Draw the Car Path",
        "category": "Puzzle",
        "rating": 8.5,
        "releaseDate": "October 2021",
        "description": "Draw the Car Path is a creative puzzle game where players need to draw a path for a car to safely reach its destination. Each level has different obstacles and challenges, requiring players to think strategically and plan the best route. The game is easy to learn but later levels become increasingly challenging, testing your logical thinking and creativity!",
        "thumbnailImage": "images/Draw-the-Car-Path.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2021/4/draw-the-car-path/index-og.html",
        "totalPlays": "42,750",
        "favorites": "6,128",
        "comments": "952",
        "difficulty": "Medium",
        "tags": ["Puzzle", "Drawing", "Vehicle", "Logic", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Use mouse to draw paths"
            }
        ]
    },
    "soccer-random": {
        "id": "soccer-random",
        "title": "Soccer Random",
        "category": "Sports",
        "rating": 8.3,
        "releaseDate": "March 2024",
        "description": "Soccer Random is a fun football game that combines random elements and strategy. You'll control a football team competing against opponents, but each match will have random rules and challenges. The game features vibrant graphics and simple gameplay, suitable for players of all ages. Come experience this unique football game!",
        "thumbnailImage": "images/Soccer-Random.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2024/gm/games2/soccer-random/index.html",
        "totalPlays": "35,680",
        "favorites": "4,921",
        "comments": "786",
        "difficulty": "Easy to Medium",
        "tags": ["Sports", "Soccer", "Casual", "Multiplayer", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to move"
            },
            {
                "icon": "keyboard",
                "description": "Space bar to shoot/pass"
            }
        ]
    },
    "run-3d": {
        "id": "run-3d",
        "title": "Run 3D",
        "category": "Action",
        "rating": 8.8,
        "releaseDate": "December 2023",
        "description": "Run 3D is an exciting 3D parkour game where players need to run, jump, and slide in constantly changing environments. The game has beautiful graphics and simple controls, but requires quick reactions and precise operations. As levels progress, the difficulty gradually increases, testing your agility and reaction speed. How far can you run? Challenge your limits!",
        "thumbnailImage": "images/Run-3D.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/e103db40071a4af38aab2061bf799455/?gd_sdk_referrer_url=https://www.onlinegames.io/run-3d/",
        "totalPlays": "58,932",
        "favorites": "8,745",
        "comments": "1,245",
        "difficulty": "Medium",
        "tags": ["Action", "Running", "3D", "Arcade", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to move and jump"
            },
            {
                "icon": "keyboard",
                "description": "Space bar for special actions"
            }
        ]
    },
    "horse-family-animal-simulator": {
        "id": "horse-family-animal-simulator",
        "title": "Horse Family Animal Simulator",
        "category": "Simulation",
        "rating": 8.2,
        "releaseDate": "November 2023",
        "description": "Horse Family Animal Simulator is a realistic horse simulation game that lets you experience life as a wild horse. Explore a vast open world, find food and water sources, interact with other horses, and build your own herd. The game features beautiful graphics and fluid, natural horse movements, providing players with an immersive experience. Perfect for animal and nature lovers!",
        "thumbnailImage": "images/Horse-Family-Animal-Simulator.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/ea2d48ab48d647d0ab5223c2f17759dc/?gd_sdk_referrer_url=https://www.onlinegames.io/horse-family-animal-simulator/",
        "totalPlays": "32,458",
        "favorites": "5,127",
        "comments": "874",
        "difficulty": "Easy",
        "tags": ["Simulation", "Animal", "Open World", "Adventure", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "WASD keys to move"
            },
            {
                "icon": "keyboard",
                "description": "Space bar to jump"
            },
            {
                "icon": "mouse",
                "description": "Mouse to control camera view"
            }
        ]
    },
    "crazy-moto-racing": {
        "id": "crazy-moto-racing",
        "title": "Crazy Moto Racing",
        "category": "Racing",
        "rating": 8.9,
        "releaseDate": "August 2022",
        "description": "Crazy Moto Racing is a thrilling motorcycle racing game where players need to race on various extreme and dangerous tracks. The game offers multiple motorcycles to choose from, each with different characteristics and advantages. Complete various challenges and missions to unlock new motorcycles and tracks. Are you ready to take on these crazy challenges?",
        "thumbnailImage": "images/Crazy-Moto-Racing.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2022/unity3/crazy-moto-racing/index-og.html",
        "totalPlays": "45,762",
        "favorites": "7,231",
        "comments": "1,087",
        "difficulty": "Hard",
        "tags": ["Racing", "Motorcycle", "Speed", "Action", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to control motorcycle"
            },
            {
                "icon": "keyboard",
                "description": "Space bar for acceleration/braking"
            },
            {
                "icon": "keyboard",
                "description": "Z key to use power-ups"
            }
        ]
    },
    "vex-3": {
        "id": "vex-3",
        "title": "Vex 3",
        "category": "Platformer",
        "rating": 9.1,
        "releaseDate": "September 2022",
        "description": "Vex 3 is a highly challenging platform jumping game where players control a stickman character navigating through levels filled with traps and obstacles. The game has a fast pace and requires precise controls and timing. Each level is filled with various hazards such as spikes, lava, and moving platforms. Can you conquer all the levels?",
        "thumbnailImage": "images/Vex-3.jpg",
        "gameIframeUrl": "https://html5.gamedistribution.com/762c932b4db74c6da0c1d101b2da8be6/?gd_sdk_referrer_url=https://www.onlinegames.io/vex-3/",
        "totalPlays": "62,345",
        "favorites": "9,876",
        "comments": "1,543",
        "difficulty": "Hard",
        "tags": ["Platformer", "Action", "Stickman", "Challenge", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to move"
            },
            {
                "icon": "keyboard",
                "description": "Space bar to jump"
            },
            {
                "icon": "keyboard",
                "description": "Z key to slide"
            }
        ]
    },
    "papas-hot-doggeria": {
        "id": "papas-hot-doggeria",
        "title": "Papas Hot Doggeria",
        "category": "Time Management",
        "rating": 8.7,
        "releaseDate": "January 2024",
        "description": "Papas Hot Doggeria is a hot dog stand management simulation game where players need to manage a hot dog stand, serve customers, and make perfect hot dogs and drinks. The game includes taking orders, cooking, preparing ingredients, and serving, requiring players to manage time and sequences efficiently. As the game progresses, you can upgrade equipment, unlock new ingredients and condiments, and attract more customers!",
        "thumbnailImage": "images/Papas-Hot-Doggeria.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2024/flash/papas-hot-doggeria/index-og.html",
        "totalPlays": "36,780",
        "favorites": "5,842",
        "comments": "923",
        "difficulty": "Medium",
        "tags": ["Time Management", "Cooking", "Simulation", "Casual", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click for all operations"
            }
        ]
    },
    "watermelon-game": {
        "id": "watermelon-game",
        "title": "Watermelon Game",
        "category": "Puzzle",
        "rating": 8.6,
        "releaseDate": "February 2025",
        "description": "Watermelon Game is a fun merging game inspired by classic fruit merging gameplay. Players need to merge identical fruits to create larger fruits, with the ultimate goal of creating a watermelon. The game seems simple but requires strategy and planning, as it's easy to fill up the game area and end the game. Can you create the biggest watermelon? Take the challenge!",
        "thumbnailImage": "images/Watermelon-Game.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2025/construct/321/watermelon-game/index-og.html",
        "totalPlays": "41,325",
        "favorites": "6,543",
        "comments": "1,024",
        "difficulty": "Easy to Medium",
        "tags": ["Puzzle", "Merge", "Casual", "Strategy", "HTML5"],
        "controls": [
            {
                "icon": "mouse",
                "description": "Click and drag fruits"
            }
        ]
    },
    "monster-truck-booster": {
        "id": "monster-truck-booster",
        "title": "Monster Truck Booster",
        "category": "Racing",
        "rating": 8.8,
        "releaseDate": "April 2024",
        "description": "Monster Truck Booster is an exciting monster truck driving game where players need to control massive monster trucks on various terrains, jumping and performing stunts. The game features multiple monster trucks to choose from, each with different performance characteristics. Complete various tasks and challenges, collect coins to upgrade your truck, and challenge more extreme tracks!",
        "thumbnailImage": "images/Monster-Truck-Booster.jpg",
        "gameIframeUrl": "https://cloud.onlinegames.io/games/2024/construct/223/monster-truck-booster/index-og.html",
        "totalPlays": "38,925",
        "favorites": "6,123",
        "comments": "925",
        "difficulty": "Medium",
        "tags": ["Racing", "Monster Truck", "Driving", "Stunt", "HTML5"],
        "controls": [
            {
                "icon": "keyboard",
                "description": "Arrow keys to control truck movement"
            },
            {
                "icon": "keyboard",
                "description": "Space bar for acceleration/stunts"
            }
        ]
    }
};

// 尝试从data/games.json加载游戏数据，如果失败则使用内置数据
// 这样即使JSON文件加载失败，网站仍然能工作
try {
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            // 确保data.games存在且是数组
            if (data && data.games && Array.isArray(data.games)) {
                // 将游戏数组转换为对象格式
                let gamesObject = {};
                data.games.forEach(game => {
                    if (game && game.id) {
                        gamesObject[game.id] = game;
                    }
                });
                
                // 如果至少有一个游戏，则替换当前数据库
                if (Object.keys(gamesObject).length > 0) {
                    GAMES_DATABASE = gamesObject;
                    console.log('游戏数据库已更新，包含', Object.keys(gamesObject).length, '个游戏');
                }
            }
        })
        .catch(error => {
            console.warn('加载games.json文件失败，使用内置游戏数据:', error);
        });
} catch (e) {
    console.warn('尝试加载游戏数据时出错，使用内置游戏数据:', e);
}

/**
 * Get list of featured games
 * @returns {Array} Array of featured game objects
 */
function getFeaturedGames() {
    try {
        // For now, we'll consider the top 3 highest rated games as featured
        return Object.values(GAMES_DATABASE)
            .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
            .slice(0, 3);
    } catch (error) {
        console.error('获取精选游戏时出错:', error);
        return [];
    }
}

/**
 * Get list of popular games
 * @returns {Array} Array of popular game objects
 */
function getPopularGames() {
    try {
        // For now, we'll consider games with high play counts as popular
        return Object.values(GAMES_DATABASE)
            .sort((a, b) => {
                const playsA = parseInt(a.totalPlays.replace(/,/g, ''));
                const playsB = parseInt(b.totalPlays.replace(/,/g, ''));
                return playsB - playsA;
            })
            .slice(0, 6);
    } catch (error) {
        console.error('获取热门游戏时出错:', error);
        return [];
    }
}

/**
 * Get a game by ID
 * @param {string} gameId - The ID of the game to retrieve
 * @returns {object|null} Game object or null if not found
 */
function getGameById(gameId) {
    try {
        return GAMES_DATABASE[gameId] || null;
    } catch (error) {
        console.error(`获取ID为 ${gameId} 的游戏时出错:`, error);
        return null;
    }
}

/**
 * Get all games
 * @returns {Array} Array of all game objects
 */
function getAllGames() {
    try {
        return Object.values(GAMES_DATABASE);
    } catch (error) {
        console.error('获取所有游戏时出错:', error);
        return [];
    }
}

/**
 * Get games by category
 * @param {string} category - Category to filter by
 * @returns {Array} Array of games in the specified category
 */
function getGamesByCategory(category) {
    try {
        if (category.toLowerCase() === "all") {
            return getAllGames();
        }
        return Object.values(GAMES_DATABASE).filter(game => 
            game.category.toLowerCase() === category.toLowerCase());
    } catch (error) {
        console.error(`获取分类为 ${category} 的游戏时出错:`, error);
        return [];
    }
}

/**
 * Create HTML for a game card
 * @param {object} game - Game object
 * @returns {string} HTML string for the game card
 */
function createGameCardHTML(game) {
    try {
        // Add onerror handler for image loading
        return `
        <div class="game-card">
            <div class="game-thumbnail">
                <img src="${game.thumbnailImage}" alt="${game.title}" onerror="this.src='images/1.jpg'">
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-meta">
                    <span class="game-category">${game.category}</span>
                    <div class="game-rating">
                        <i class="fas fa-star"></i>
                        <span>${game.rating}</span>
                    </div>
                </div>
                <a href="game.html?id=${game.id}" class="btn btn-primary play-now">Play Now</a>
            </div>
        </div>
        `;
    } catch (error) {
        console.error('创建游戏卡片HTML时出错:', error);
        return `
        <div class="game-card error-card">
            <div class="game-thumbnail">
                <div class="error-thumbnail">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
            </div>
            <div class="game-info">
                <h3 class="game-title">加载错误</h3>
                <div class="game-meta">
                    <span class="game-category">错误</span>
                </div>
                <a href="index.html" class="btn btn-primary">返回首页</a>
            </div>
        </div>
        `;
    }
}

// 创建全局GameDatabase对象，提供游戏数据访问方法
window.GameDatabase = {
    getGameById,
    getAllGames,
    getGamesByCategory,
    getFeaturedGames,
    getPopularGames,
    createGameCardHTML
};

/**
 * Get all unique game categories
 * @returns {Array} Array of unique category names
 */
function getAllCategories() {
    try {
        // 从所有游戏中提取类别并去重
        const uniqueCategories = [...new Set(
            Object.values(GAMES_DATABASE).map(game => game.category)
        )].sort();
        return uniqueCategories;
    } catch (error) {
        console.error('获取所有游戏类别时出错:', error);
        return [];
    }
}

/**
 * 获取最新发布的游戏
 * @param {number} limit - 返回的游戏数量限制
 * @returns {Array} 最新发布的游戏数组
 */
function getNewestGames(limit = 3) {
    try {
        // 将日期字符串转换为可比较的数值
        const parseReleaseDate = (dateStr) => {
            const months = {
                'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
                'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
            };
            
            // 格式例如: "March 2023"
            const parts = dateStr.split(' ');
            if (parts.length === 2) {
                const month = months[parts[0]];
                const year = parseInt(parts[1]);
                if (!isNaN(month) && !isNaN(year)) {
                    return new Date(year, month, 1).getTime();
                }
            }
            return 0; // 解析失败返回0
        };
        
        // 根据发布日期对游戏进行排序（从新到旧）
        return Object.values(GAMES_DATABASE)
            .sort((a, b) => {
                const dateA = parseReleaseDate(a.releaseDate);
                const dateB = parseReleaseDate(b.releaseDate);
                return dateB - dateA; // 降序排列（最新的在前）
            })
            .slice(0, limit);
    } catch (error) {
        console.error('获取最新游戏时出错:', error);
        return [];
    }
}

// 更新GameDatabase对象，添加getAllCategories方法
window.GameDatabase = {
    getGameById,
    getAllGames,
    getGamesByCategory,
    getFeaturedGames,
    getPopularGames,
    createGameCardHTML,
    getAllCategories,
    getNewestGames
}; 