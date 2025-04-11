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
    }
};

// 尝试从data/games.json加载游戏数据，如果失败则使用内置数据
// 这样即使JSON文件加载失败，网站仍然能工作
try {
    fetch('data/games.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('从服务器成功加载游戏数据');
            if (data && data.games && Array.isArray(data.games) && data.games.length > 0) {
                // 将数组转换为对象格式，以ID为键
                const gamesObject = {};
                data.games.forEach(game => {
                    if (game.id) {
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