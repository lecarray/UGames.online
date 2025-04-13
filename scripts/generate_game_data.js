// 生成游戏数据的脚本
const fs = require('fs');
const path = require('path');

// 游戏数据列表
const gamesList = [
  {
    id: "survival-island",
    title: "Survival Island",
    category: "Survival",
    iframe: "https://cloud.onlinegames.io/games/2024/unity2/survival-island/index-og.html",
    image: "survival-island.jpg"
  },
  {
    id: "squid-shooter",
    title: "Squid Shooter",
    category: "Shooting",
    iframe: "https://html5.gamedistribution.com/c0a72373f81d4096a325f9b0dde0d7b9/?gd_sdk_referrer_url=https://www.onlinegames.io/squid-shooter/",
    image: "squid-shooter.jpg"
  },
  {
    id: "conquer-kingdoms",
    title: "Conquer Kingdoms",
    category: "Strategy",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/conquer-kingdoms/index-og.html",
    image: "conquer-kingdoms.jpg"
  },
  {
    id: "mahjong",
    title: "Mahjong",
    category: "Puzzle",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/mahjong/index-og.html",
    image: "mahjong.jpg"
  },
  {
    id: "nuts-and-bolts-puzzle",
    title: "Nuts and Bolts Puzzle",
    category: "Puzzle",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/nuts-and-bolts-puzzle/index-og.html",
    image: "nuts-and-bolts-puzzle.jpg"
  },
  {
    id: "race-clicker-drift-max",
    title: "Race Clicker: Drift Max",
    category: "Clicker",
    iframe: "https://html5.gamedistribution.com/a02de4821afa46c3b69dd95385c314db/?gd_sdk_referrer_url=https://www.onlinegames.io/race-clicker-drift-max/",
    image: "race-clicker-drift-max.jpg"
  },
  {
    id: "slope-rolling",
    title: "Slope Rolling",
    category: "Arcade",
    iframe: "https://html5.gamedistribution.com/0022998ce3c54962be6ffe178229b168/?gd_sdk_referrer_url=https://www.onlinegames.io/slope-rolling/",
    image: "slope-rolling.jpg"
  },
  {
    id: "ragdoll-football-2-players",
    title: "Ragdoll Football 2 Players",
    category: "Sports",
    iframe: "https://html5.gamedistribution.com/d28ab37fbee149289d4c3d92106e2921/?gd_sdk_referrer_url=https://www.onlinegames.io/ragdoll-football-2-players/",
    image: "ragdoll-football-2-players.jpg"
  },
  {
    id: "supermarket-simulator",
    title: "Supermarket Simulator",
    category: "Simulation",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/supermarket-simulator/index-og.html",
    image: "supermarket-simulator.jpg"
  },
  {
    id: "infiltrating-the-airship",
    title: "Infiltrating the Airship",
    category: "Adventure",
    iframe: "https://cloud.onlinegames.io/games/2025/flash/infiltrating-the-airship/index-og.html",
    image: "infiltrating-the-airship.jpg"
  },
  {
    id: "stealing-the-diamond",
    title: "Stealing the Diamond",
    category: "Adventure",
    iframe: "https://cloud.onlinegames.io/games/2025/flash/stealing-the-diamond/index-og.html",
    image: "stealing-the-diamond.jpg"
  },
  {
    id: "tank-arena",
    title: "Tank Arena",
    category: "Action",
    iframe: "https://cloud.onlinegames.io/games/2025/construct/293/tank-arena/index-og.html",
    image: "tank-arena.jpg"
  },
  {
    id: "escaping-the-prison",
    title: "Escaping the Prison",
    category: "Adventure",
    iframe: "https://cloud.onlinegames.io/games/2025/flash/escaping-the-prison/index-og.html",
    image: "escaping-the-prison.jpg"
  },
  {
    id: "candy-bubble",
    title: "Candy Bubble",
    category: "Puzzle",
    iframe: "https://html5.gamedistribution.com/d9201aa9fdb24921b1b832c18762ddf1/?gd_sdk_referrer_url=https://www.onlinegames.io/candy-bubble/",
    image: "candy-bubble.jpg"
  },
  {
    id: "golf-orbit",
    title: "Golf Orbit",
    category: "Sports",
    iframe: "https://html5.gamedistribution.com/02ff01e6e9f7451ba28d889a2a55eec9/?gd_sdk_referrer_url=https://www.onlinegames.io/golf-orbit/",
    image: "golf-orbit.jpg"
  },
  {
    id: "kings-io",
    title: "Kings io",
    category: "IO",
    iframe: "https://cloud.onlinegames.io/games/2025/construct/208/kings-io/index-og.html",
    image: "kings-io.jpg"
  },
  {
    id: "breaking-the-bank",
    title: "Breaking the Bank",
    category: "Adventure",
    iframe: "https://cloud.onlinegames.io/games/2025/flash/breaking-the-bank/index-og.html",
    image: "breaking-the-bank.jpg"
  },
  {
    id: "squid-race-simulator",
    title: "Squid Race Simulator",
    category: "Simulation",
    iframe: "https://www.onlinegames.io/games/2021/unity3/squid-race-simulator/index.html",
    image: "squid-race-simulator.jpg"
  },
  {
    id: "spartahoppers",
    title: "SpartaHoppers",
    category: "Arcade",
    iframe: "https://cloud.onlinegames.io/games/2025/construct/227/spartahoppers/index-og.html",
    image: "spartahoppers.jpg"
  },
  {
    id: "vex-7",
    title: "Vex 7",
    category: "Platformer",
    iframe: "https://html5.gamedistribution.com/0c454c9562d249d28ba3a2b50564042c/?gd_sdk_referrer_url=https://www.onlinegames.io/vex-7/",
    image: "vex-7.jpg"
  },
  {
    id: "soccer-random-pro",
    title: "Soccer Random Pro",
    category: "Sports",
    iframe: "https://cloud.onlinegames.io/games/2024/construct/303/soccer-random-pro/index-og.html",
    image: "soccer-random-pro.jpg"
  },
  {
    id: "squad-shooter",
    title: "Squad Shooter",
    category: "Shooting",
    iframe: "https://cloud.onlinegames.io/games/2024/unity2/squad-shooter/index-og.html",
    image: "squad-shooter.jpg"
  },
  {
    id: "sprunki-warm-like-fire",
    title: "Sprunki Warm Like Fire",
    category: "Adventure",
    iframe: "https://cloud.onlinegames.io/games/2025/more/sprunki-warm-like-fire/index.html",
    image: "sprunki-warm-like-fire.jpg"
  },
  {
    id: "sudoku",
    title: "Sudoku",
    category: "Puzzle",
    iframe: "https://cloud.onlinegames.io/games/2025/html/sudoku/index-og.html",
    image: "sudoku.jpg"
  },
  {
    id: "obby-tower-parkour-climb",
    title: "Obby Tower Parkour Climb",
    category: "Platformer",
    iframe: "https://html5.gamedistribution.com/5532111b774e4ca18238b41c029617e0/?gd_sdk_referrer_url=https://www.onlinegames.io/obby-tower-parkour-climb/",
    image: "obby-tower-parkour-climb.jpg"
  },
  {
    id: "monster-survivors",
    title: "Monster Survivors",
    category: "Action",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
    image: "monster-survivors.jpg"
  },
  {
    id: "find-it",
    title: "Find It",
    category: "Puzzle",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/find-it/index-og.html",
    image: "find-it.jpg"
  },
  {
    id: "tile-match",
    title: "Tile Match",
    category: "Puzzle",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/tile-match/index-og.html",
    image: "tile-match.jpg"
  },
  {
    id: "wordle",
    title: "Wordle",
    category: "Word",
    iframe: "https://cloud.onlinegames.io/games/2025/html/wordle/index-og.html",
    image: "wordle.jpg"
  },
  {
    id: "voxel-world",
    title: "Voxel World",
    category: "Sandbox",
    iframe: "https://cloud.onlinegames.io/games/2025/unity/voxel-world/index-og.html",
    image: "voxel-world.jpg"
  },
  {
    id: "paper-planets",
    title: "Paper Planets",
    category: "Adventure",
    iframe: "https://cloud.onlinegames.io/games/2023/unity3/paper-planets/index-og.html",
    image: "paper-planets.jpg"
  }  
];

// 生成游戏数据对象，包含所有必要字段
function generateGameData() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // 使用上个月作为发布日期
  let releaseMonth = currentMonth - 1;
  let releaseYear = currentYear;
  if (releaseMonth < 0) {
    releaseMonth = 11;
    releaseYear--;
  }
  
  const releaseDate = `${months[releaseMonth]} ${releaseYear}`;
  
  // 随机评分和统计数据生成器
  const generateRating = () => (Math.random() * 2 + 7).toFixed(1); // 7.0-9.0
  const generateTotalPlays = () => Math.floor(Math.random() * 70000 + 20000).toLocaleString();
  const generateFavorites = () => Math.floor(Math.random() * 10000 + 2000).toLocaleString();
  const generateComments = () => Math.floor(Math.random() * 1500 + 300).toLocaleString();
  
  // 生成游戏通用标签
  const generateCommonTags = (category) => {
    const allTags = ["Casual", "HTML5"];
    return [category, ...allTags];
  };
  
  // 生成游戏描述
  const generateDescription = (title, category) => {
    const descriptions = {
      "Puzzle": `${title} is an engaging puzzle game that will test your problem-solving skills. Navigate through increasingly challenging levels using logic and strategy. With colorful graphics and intuitive controls, this game is easy to learn but difficult to master.`,
      "Adventure": `Embark on an exciting journey in ${title}! Explore mysterious locations, solve intriguing puzzles, and make crucial decisions that affect the outcome of your adventure. With multiple paths and endings, every playthrough offers a unique experience.`,
      "Action": `${title} puts your reflexes to the test in this fast-paced action game. Battle against enemies, dodge obstacles, and collect power-ups to progress through increasingly challenging levels. Can you make it to the end?`,
      "Shooting": `Take aim and fire in ${title}, an intense shooting game where precision and quick reflexes are key. Defeat waves of enemies, upgrade your weapons, and become the ultimate marksman in this action-packed game.`,
      "Strategy": `${title} challenges your strategic thinking as you plan and execute your moves carefully. Build, expand, and conquer in this engaging strategy game where every decision matters. Develop the perfect strategy to outmaneuver your opponents.`,
      "Simulation": `Experience the thrills of ${title}, a realistic simulation that puts you in control. Manage resources, make critical decisions, and watch as your efforts lead to success or failure. How well can you handle the challenges that come your way?`,
      "Sports": `Compete for glory in ${title}! This sports game offers realistic physics, intuitive controls, and exciting gameplay. Challenge yourself in various tournaments and become the champion in this addictive sports experience.`,
      "Arcade": `${title} brings back the classic arcade feeling with simple yet addictive gameplay. Easy to pick up but hard to put down, this game will keep you entertained for hours as you try to beat your high score.`,
      "IO": `Join the multiplayer action in ${title}, a competitive IO game where you battle against players from around the world. Grow stronger, eliminate opponents, and climb the leaderboard in this addictive online experience.`,
      "Platformer": `Jump, run, and overcome obstacles in ${title}, a challenging platformer that tests your timing and precision. Navigate through carefully designed levels, avoid traps, and collect items as you make your way to the finish.`,
      "Clicker": `${title} is an addictive incremental game where you click to earn resources and unlock new features. Watch as your empire grows with each click, and discover new strategies to optimize your progress.`,
      "Word": `${title} challenges your vocabulary and word-finding skills. Create words, solve puzzles, and expand your lexicon in this educational yet entertaining game that's perfect for word lovers of all ages.`,
      "Sandbox": `Unleash your creativity in ${title}, a sandbox game where you can build, explore, and interact with a dynamic world. With no set objectives, you're free to play however you want and create your own adventures.`,
      "Survival": `Survive against the odds in ${title}, where resource management and quick thinking are essential. Gather materials, craft tools, and build shelters to protect yourself from dangers that lurk around every corner.`
    };
    
    // Use category-specific description or fallback to a generic one
    return descriptions[category] || `${title} offers an engaging gameplay experience with intuitive controls and progressively challenging levels. Play through various stages, unlock new features, and enjoy hours of entertainment in this addictive game.`;
  };
  
  // 生成控制说明
  const generateControls = (category) => {
    const controlTypes = {
      "Puzzle": [{ icon: "mouse", description: "Click to select and move pieces" }],
      "Adventure": [{ icon: "mouse", description: "Click to interact with objects and characters" }],
      "Action": [
        { icon: "keyboard", description: "WASD or Arrow keys to move" },
        { icon: "mouse", description: "Left click to attack" }
      ],
      "Shooting": [
        { icon: "mouse", description: "Move mouse to aim, left click to shoot" },
        { icon: "keyboard", description: "WASD to move character" }
      ],
      "Strategy": [
        { icon: "mouse", description: "Click to select units and issue commands" },
        { icon: "keyboard", description: "Number keys for quick selection" }
      ],
      "Simulation": [
        { icon: "mouse", description: "Click to interact with objects and menus" }
      ],
      "Sports": [
        { icon: "keyboard", description: "Arrow keys to move" },
        { icon: "keyboard", description: "Space to perform action" }
      ],
      "Arcade": [
        { icon: "keyboard", description: "Arrow keys to control" },
        { icon: "keyboard", description: "Space for action" }
      ],
      "IO": [
        { icon: "mouse", description: "Move mouse to control direction" },
        { icon: "mouse", description: "Left click to use ability" }
      ],
      "Platformer": [
        { icon: "keyboard", description: "Arrow keys to move" },
        { icon: "keyboard", description: "Space to jump" }
      ],
      "Clicker": [
        { icon: "mouse", description: "Click to earn points and resources" }
      ],
      "Word": [
        { icon: "mouse", description: "Click letters to form words" },
        { icon: "keyboard", description: "Type letters to input words" }
      ],
      "Sandbox": [
        { icon: "mouse", description: "Click to interact with the world" },
        { icon: "keyboard", description: "WASD to move character" }
      ],
      "Survival": [
        { icon: "keyboard", description: "WASD to move character" },
        { icon: "mouse", description: "Left click to interact, right click to use items" }
      ]
    };
    
    return controlTypes[category] || [{ icon: "mouse", description: "Click to play" }];
  };
  
  // 生成难度
  const generateDifficulty = () => {
    const difficulties = ["Easy", "Medium", "Hard", "Easy to Medium", "Medium to Hard"];
    return difficulties[Math.floor(Math.random() * difficulties.length)];
  };
  
  // 处理每个游戏并生成完整数据
  return gamesList.map(game => ({
    id: game.id,
    title: game.title,
    category: game.category,
    rating: generateRating(),
    releaseDate: releaseDate,
    description: generateDescription(game.title, game.category),
    thumbnailImage: `images/${game.image}`,
    gameIframeUrl: game.iframe,
    totalPlays: generateTotalPlays(),
    favorites: generateFavorites(),
    comments: generateComments(),
    difficulty: generateDifficulty(),
    tags: generateCommonTags(game.category),
    controls: generateControls(game.category)
  }));
}

// 生成所有游戏数据
const gameData = generateGameData();

// 生成games-data.js的代码片段
let gamesDataJsContent = "// New games to add to games-data.js\n\n";
gameData.forEach(game => {
  gamesDataJsContent += `"${game.id}": {
    "id": "${game.id}",
    "title": "${game.title}",
    "category": "${game.category}",
    "rating": ${game.rating},
    "releaseDate": "${game.releaseDate}",
    "description": "${game.description}",
    "thumbnailImage": "${game.thumbnailImage}",
    "gameIframeUrl": "${game.gameIframeUrl}",
    "totalPlays": "${game.totalPlays}",
    "favorites": "${game.favorites}",
    "comments": "${game.comments}",
    "difficulty": "${game.difficulty}",
    "tags": [${game.tags.map(tag => `"${tag}"`).join(", ")}],
    "controls": [
        ${game.controls.map(control => `{
            "icon": "${control.icon}",
            "description": "${control.description}"
        }`).join(",\n        ")}
    ]
},\n\n`;
});

// 生成games.json的代码片段
let gamesJsonContent = "// New games to add to games.json\n\n[\n";
gameData.forEach((game, index) => {
  gamesJsonContent += `  {
    "id": "${game.id}",
    "title": "${game.title}",
    "category": "${game.category}",
    "rating": ${game.rating},
    "releaseDate": "${game.releaseDate}",
    "description": "${game.description}",
    "thumbnailImage": "${game.thumbnailImage}",
    "gameIframeUrl": "${game.gameIframeUrl}",
    "totalPlays": "${game.totalPlays}",
    "favorites": "${game.favorites}",
    "comments": "${game.comments}",
    "difficulty": "${game.difficulty}",
    "tags": [${game.tags.map(tag => `"${tag}"`).join(", ")}],
    "controls": [
      ${game.controls.map(control => `{
        "icon": "${control.icon}",
        "description": "${control.description}"
      }`).join(",\n      ")}
    ]
  }${index < gameData.length - 1 ? "," : ""}\n`;
});
gamesJsonContent += "]\n";

// 写入生成的数据到文件
fs.writeFileSync(path.join(__dirname, 'games-data-js-snippet.txt'), gamesDataJsContent);
fs.writeFileSync(path.join(__dirname, 'games-json-snippet.txt'), gamesJsonContent);

console.log('游戏数据生成完成！');
console.log(`生成了 ${gameData.length} 个游戏的数据`);
console.log('games-data.js 片段已保存到 scripts/games-data-js-snippet.txt');
console.log('games.json 片段已保存到 scripts/games-json-snippet.txt'); 