/**
 * 游戏文件生成脚本
 * 用于生成游戏页面和下载游戏图片
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// 游戏数据 - 复制自 js/games-data.js
const gamesData = [
    {
        id: "screw-out",
        title: "Screw Out: Bolts and Nuts",
        category: "Puzzle",
        rating: 8.8,
        imageUrl: "https://imgs.crazygames.com/screw-out-bolts-and-nuts_16x9/20250331080423/screw-out-bolts-and-nuts_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/screw-out-bolts-and-nuts"
    },
    {
        id: "street-life",
        title: "Street Life",
        category: "Simulation",
        rating: 8.5,
        imageUrl: "https://imgs.crazygames.com/street-life_16x9/20240927033244/street-life_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/street-life"
    },
    {
        id: "teacher-simulator",
        title: "Teacher Simulator",
        category: "Simulation",
        rating: 7.9,
        imageUrl: "https://imgs.crazygames.com/teacher-simulator/20220907173822/teacher-simulator-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/teacher-simulator"
    },
    {
        id: "sneaker-art",
        title: "Sneaker Art",
        category: "Casual",
        rating: 8.2,
        imageUrl: "https://imgs.crazygames.com/sneaker-art-rvf_16x9/20250331082440/sneaker-art-rvf_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/sneaker-art-rvf"
    },
    {
        id: "airport-security",
        title: "Airport Security",
        category: "Simulation",
        rating: 7.8,
        imageUrl: "https://imgs.crazygames.com/airport-security_16x9/20231010102631/airport-security_16x9-cover?metadata=none&quality=70&width=379",
        iframeUrl: "https://www.crazygames.com/embed/airport-security"
    },
    {
        id: "murder-mafia",
        title: "Murder Mafia",
        category: "Strategy",
        rating: 8.7,
        imageUrl: "https://imgs.crazygames.com/murder-mafia_16x9/20230915113149/murder-mafia_16x9-cover?metadata=none&quality=70&width=379",
        iframeUrl: "https://www.crazygames.com/embed/murder-mafia"
    },
    {
        id: "vortex-9",
        title: "Vortex 9",
        category: "Action",
        rating: 9.1,
        imageUrl: "https://imgs.crazygames.com/vortex-9-ubs_16x9/20250401153731/vortex-9-ubs_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/vortex-9-ubs"
    },
    {
        id: "warzone-armor",
        title: "Warzone Armor",
        category: "Action",
        rating: 8.9,
        imageUrl: "https://imgs.crazygames.com/warzone-armor-gtb_16x9/20241206042622/warzone-armor-gtb_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/warzone-armor-gtb"
    },
    {
        id: "traffic-cop-3d",
        title: "Traffic Cop 3D",
        category: "Simulation",
        rating: 7.6,
        imageUrl: "https://imgs.crazygames.com/traffic-cop-3d/20230504084423/traffic-cop-3d-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/traffic-cop-3d"
    },
    {
        id: "limited-defense",
        title: "Limited Defense",
        category: "Strategy",
        rating: 8.3,
        imageUrl: "https://imgs.crazygames.com/limited-defense_16x9/20250404103637/limited-defense_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/limited-defense"
    },
    {
        id: "matchventures",
        title: "MatchVentures",
        category: "Puzzle",
        rating: 8.0,
        imageUrl: "https://imgs.crazygames.com/matchventures_16x9/20250402094314/matchventures_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/matchventures"
    },
    {
        id: "cubecraft-merge-battle",
        title: "CubeCraft: Merge & Battle",
        category: "Strategy",
        rating: 8.6,
        imageUrl: "https://imgs.crazygames.com/cubecraft-merge-battle-uxw_16x9/20250331062740/cubecraft-merge-battle-uxw_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/cubecraft-merge-battle-uxw"
    },
    {
        id: "worm-hunt",
        title: "Worm Hunt",
        category: "Casual",
        rating: 7.5,
        imageUrl: "https://imgs.crazygames.com/worm-hunt_16x9/20230913105128/worm-hunt_16x9-cover?metadata=none&quality=70&width=488.5",
        iframeUrl: "https://www.crazygames.com/embed/worm-hunt"
    },
    {
        id: "cups-water-sort",
        title: "Cups - Water Sort Puzzle",
        category: "Puzzle",
        rating: 8.4,
        imageUrl: "https://imgs.crazygames.com/cups---water-sort-puzzle_16x9/20230829022932/cups---water-sort-puzzle_16x9-cover?metadata=none&quality=70&width=379",
        iframeUrl: "https://www.crazygames.com/embed/cups---water-sort-puzzle"
    }
];

// 目录配置
const config = {
    gamesDir: path.join(__dirname, '../games'),
    imagesDir: path.join(__dirname, '../images'),
    templatePath: path.join(__dirname, '../games/game-template.html')
};

// 确保目录存在
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// 下载图片
function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        
        https.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download image: ${response.statusCode}`));
                return;
            }
            
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', err => {
            fs.unlink(dest, () => {}); // 删除不完整的图片
            reject(err);
        });
    });
}

// 创建游戏页面
function createGamePage(game) {
    const template = fs.readFileSync(config.templatePath, 'utf8');
    const gameHtml = template
        .replace(/GAME_TITLE/g, game.title)
        .replace(/GAME_IFRAME_URL/g, game.iframeUrl);
    
    fs.writeFileSync(path.join(config.gamesDir, `${game.id}.html`), gameHtml);
    console.log(`Created game page for ${game.title}`);
}

// 主函数
async function main() {
    // 确保目录存在
    ensureDirectoryExists(config.gamesDir);
    ensureDirectoryExists(config.imagesDir);
    
    console.log('Generating game files...');
    
    for (const game of gamesData) {
        // 本地图片路径
        const localImagePath = path.join(config.imagesDir, `${game.id}.jpg`);
        
        // 下载图片
        try {
            console.log(`Downloading image for ${game.title}...`);
            await downloadImage(game.imageUrl, localImagePath);
            console.log(`✓ Downloaded image for ${game.title}`);
        } catch (err) {
            console.error(`✗ Failed to download image for ${game.title}:`, err.message);
        }
        
        // 创建游戏页面
        try {
            createGamePage(game);
            console.log(`✓ Created game page for ${game.title}`);
        } catch (err) {
            console.error(`✗ Failed to create game page for ${game.title}:`, err.message);
        }
    }
    
    console.log('Done!');
}

// 运行主函数
main().catch(err => {
    console.error('An error occurred:', err);
    process.exit(1);
}); 