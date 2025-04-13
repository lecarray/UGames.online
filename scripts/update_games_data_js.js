const fs = require('fs');
const path = require('path');

// 读取生成的数据片段
const snippet = fs.readFileSync(path.join(__dirname, 'games-data-js-snippet.txt'), 'utf8');

// 读取当前的games-data.js文件
const gamesDataJsPath = path.join(__dirname, '..', 'js', 'games-data.js');
let gamesDataJs = fs.readFileSync(gamesDataJsPath, 'utf8');

// 找到 GAMES_DATABASE 对象的闭合括号
const closingBraceIndex = gamesDataJs.indexOf('};');

// 检查是否找到了正确的位置
if (closingBraceIndex === -1) {
  console.error('无法找到GAMES_DATABASE对象的闭合位置');
  process.exit(1);
}

// 在闭合括号前添加新的游戏数据
// 首先去掉snippet开头的注释行
const cleanedSnippet = snippet.replace(/\/\/ New games to add to games-data\.js\s*\n\n/, '');

// 添加数据
const updatedContent = gamesDataJs.substring(0, closingBraceIndex) + 
  ',\n' + cleanedSnippet + 
  gamesDataJs.substring(closingBraceIndex);

// 写回文件
fs.writeFileSync(gamesDataJsPath, updatedContent, 'utf8');

console.log('成功更新 js/games-data.js 文件！'); 