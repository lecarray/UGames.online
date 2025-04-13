const fs = require('fs');
const path = require('path');

// 读取生成的JSON数据片段
const snippet = fs.readFileSync(path.join(__dirname, 'games-json-snippet.txt'), 'utf8');

// 读取当前的games.json文件
const gamesJsonPath = path.join(__dirname, '..', 'data', 'games.json');
let gamesJsonContent = fs.readFileSync(gamesJsonPath, 'utf8');

// 解析JSON
let gamesJson = JSON.parse(gamesJsonContent);

// 解析数据片段（需要去掉注释并提取JSON数组）
// 首先去掉开头的注释行
const cleanedSnippet = snippet.replace(/\/\/ New games to add to games\.json\s*\n\n/, '');

// 将片段解析为JSON数组
try {
    const newGames = JSON.parse(cleanedSnippet);
    
    // 将新游戏添加到现有游戏数组中
    gamesJson.games = [...gamesJson.games, ...newGames];
    
    // 写回文件
    fs.writeFileSync(gamesJsonPath, JSON.stringify(gamesJson, null, 2), 'utf8');
    
    console.log('成功更新 data/games.json 文件！');
} catch (error) {
    console.error('解析JSON片段时出错:', error);
    process.exit(1);
} 