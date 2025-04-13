# Game Addition Documentation

## Adding New Games to UGames.online

This document outlines the process for adding new games to the UGames.online platform. Follow these steps to ensure consistency between the data files.

**Important:** All game content (descriptions, instructions, etc.) must be in English to maintain consistency across the platform.

### Step 1: Prepare Game Assets

1. Place game thumbnail images in the `images/` directory
2. Use consistent image naming conventions (hyphenated lowercase, e.g., `game-name.jpg`)
3. Ensure images are optimized for web (recommended size around 40-60KB)

### Step 2: Update Data Files

You need to update two files when adding a new game:

1. `data/games.json` - Contains the main game database in JSON format
2. `js/games-data.js` - Contains the JavaScript object version of the same data

#### File Structure Overview

**games.json**:
```json
{
  "games": [
    {
      "id": "game-id",
      "title": "Game Title",
      ...
    },
    // Additional games
  ]
}
```

**games-data.js**:
```javascript
let GAMES_DATABASE = {
  "game-id": {
    "id": "game-id",
    "title": "Game Title",
    ...
  },
  // Additional games
}
```

### Step 3: Game Data Template

Use this template to create data for new games:

```json
{
  "id": "game-id",
  "title": "Game Title",
  "category": "Game Category",
  "rating": 8.5,
  "releaseDate": "Month Year",
  "description": "Detailed game description explaining the gameplay, features, and objectives. Must be in English.",
  "thumbnailImage": "images/game-id.jpg",
  "gameIframeUrl": "https://embed-url-for-game",
  "totalPlays": "45,000",
  "favorites": "5,000",
  "comments": "600",
  "difficulty": "Easy/Medium/Hard",
  "tags": [
    "Primary Category",
    "Secondary Category",
    "Feature1",
    "Feature2",
    "HTML5"
  ],
  "controls": [
    {
      "icon": "mouse",
      "description": "How to use mouse"
    },
    {
      "icon": "keyboard",
      "description": "How to use keyboard"
    }
  ]
}
```

### Step 4: Adding to games.json

1. Open `data/games.json`
2. Find the last game entry (before the closing `]` of the "games" array)
3. Add a comma `,` after the last game's closing brace `}`
4. Paste your new game JSON data
5. Ensure proper JSON formatting is maintained

### Step 5: Adding to games-data.js

1. Open `js/games-data.js`
2. Find the last game entry (before any functions in the file)
3. Add a comma `,` after the last game's closing brace `}`
4. Paste your new game JavaScript object data
5. Ensure proper JavaScript syntax is maintained

### Step 6: Important Notes

1. The `id` value must be the same in both files and should match the image filename
2. Keep data consistent between the two files
3. In games.json, use regular JSON format with double quotes for all keys and string values
4. In games-data.js, keys don't need quotes, but string values still need quotes
5. Description in games-data.js can use HTML tags with `<br>` for line breaks
6. Valid difficulty values: "Easy", "Medium", "Hard", or combinations like "Easy to Medium"
7. Common control icons: "mouse", "keyboard", "touch"
8. **All text content must be in English** - this includes game descriptions, control descriptions, and any other text fields

### Step 7: Example Game Entries

#### Example 1: Cookie Clicker Pro

**games.json entry:**
```json
{
  "id": "cookie-clicker-pro",
  "title": "Cookie Clicker Pro",
  "category": "Clicker",
  "rating": 8.6,
  "releaseDate": "October 2023",
  "description": "Cookie Clicker Pro is a casual clicking game where players earn points by continuously clicking on cookies on the screen. As points accumulate, players can unlock auto-clickers, cookie factories, and other upgrades to increase cookies per second. Simple gameplay but highly addictive, perfect for passing time!",
  "thumbnailImage": "images/Cookie-Clicker-Pro.jpg",
  "gameIframeUrl": "https://www.crazygames.com/embed/cookie-clicker-pro",
  "totalPlays": "56,782",
  "favorites": "7,523",
  "comments": "943",
  "difficulty": "Easy",
  "tags": [
    "Clicker",
    "Idle",
    "Casual",
    "Cookie",
    "HTML5"
  ],
  "controls": [
    {
      "icon": "mouse",
      "description": "Click the screen to earn cookies"
    }
  ]
}
```

**games-data.js entry:**
```javascript
"cookie-clicker-pro": {
  "id": "cookie-clicker-pro",
  "title": "Cookie Clicker Pro",
  "category": "Clicker",
  "rating": 8.6,
  "releaseDate": "October 2023",
  "description": "Cookie Clicker Pro is a casual clicking game where players earn points by continuously clicking on cookies on the screen. As points accumulate, players can unlock auto-clickers, cookie factories, and other upgrades to increase cookies per second. Simple gameplay but highly addictive, perfect for passing time!",
  "thumbnailImage": "images/Cookie-Clicker-Pro.jpg",
  "gameIframeUrl": "https://www.crazygames.com/embed/cookie-clicker-pro",
  "totalPlays": "56,782",
  "favorites": "7,523",
  "comments": "943",
  "difficulty": "Easy",
  "tags": ["Clicker", "Idle", "Casual", "Cookie", "HTML5"],
  "controls": [
    {
      "icon": "mouse",
      "description": "Click the screen to earn cookies"
    }
  ]
}
```

#### Example 2: Global Guesser

**games.json entry:**
```json
{
  "id": "global-guesser",
  "title": "Global Guesser",
  "category": "Educational",
  "rating": 8.9,
  "releaseDate": "November 2023",
  "description": "Global Guesser is a geography knowledge test game where players are transported to random locations around the world and must guess which country or region they are in based on what they see. The game has rich geographical knowledge points and is both fun and educational. From famous landmarks to remote villages, each round is a new exploration!",
  "thumbnailImage": "images/Global-Guesser.jpg",
  "gameIframeUrl": "https://www.crazygames.com/embed/global-guesser",
  "totalPlays": "48,932",
  "favorites": "6,821",
  "comments": "784",
  "difficulty": "Medium",
  "tags": [
    "Educational",
    "Geography",
    "Quiz",
    "Casual",
    "HTML5"
  ],
  "controls": [
    {
      "icon": "mouse",
      "description": "Click on map to select location"
    },
    {
      "icon": "keyboard",
      "description": "Arrow keys to move view"
    }
  ]
}
```

**games-data.js entry:**
```javascript
"global-guesser": {
  "id": "global-guesser",
  "title": "Global Guesser",
  "category": "Educational",
  "rating": 8.9,
  "releaseDate": "November 2023",
  "description": "Global Guesser is a geography knowledge test game where players are transported to random locations around the world and must guess which country or region they are in based on what they see. The game has rich geographical knowledge points and is both fun and educational. From famous landmarks to remote villages, each round is a new exploration!",
  "thumbnailImage": "images/Global-Guesser.jpg",
  "gameIframeUrl": "https://www.crazygames.com/embed/global-guesser",
  "totalPlays": "48,932",
  "favorites": "6,821",
  "comments": "784",
  "difficulty": "Medium",
  "tags": ["Educational", "Geography", "Quiz", "Casual", "HTML5"],
  "controls": [
    {
      "icon": "mouse",
      "description": "Click on map to select location"
    },
    {
      "icon": "keyboard",
      "description": "Arrow keys to move view"
    }
  ]
}
```

### Step 8: Verification

After adding a new game:
1. Validate JSON syntax in games.json
2. Check JavaScript syntax in games-data.js
3. Verify the game appears correctly on the website
4. Test game functionality within the iframe

By following this documentation, you can consistently add new games to the UGames.online platform while maintaining data integrity across all files. 