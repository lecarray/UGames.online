// 验证游戏图片是否存在
const fs = require('fs');
const path = require('path');

// 读取游戏数据文件
const gamesJsonPath = path.join(__dirname, '../data/games.json');
const gamesData = require(gamesJsonPath);

console.log(`找到 ${gamesData.games.length} 个游戏数据`);

// 验证每个游戏的图片文件
let missingImages = 0;
let tooSmallImages = 0;
let validImages = 0;

gamesData.games.forEach(game => {
    // 提取图片路径
    const imageRelativePath = game.thumbnailImage;
    const absoluteImagePath = path.join(__dirname, '..', imageRelativePath);
    
    console.log(`[${game.id}] 检查图片 ${imageRelativePath}`);
    
    // 检查文件是否存在
    if (!fs.existsSync(absoluteImagePath)) {
        console.log(`[${game.id}] ❌ 图片文件不存在: ${imageRelativePath}`);
        missingImages++;
        return;
    }
    
    // 检查文件大小
    const stats = fs.statSync(absoluteImagePath);
    const fileSizeKB = stats.size / 1024;
    
    if (fileSizeKB < 10) {
        console.log(`[${game.id}] ⚠️ 图片文件太小 (${fileSizeKB.toFixed(2)}KB): ${imageRelativePath}`);
        tooSmallImages++;
    } else {
        console.log(`[${game.id}] ✅ 图片有效 (${fileSizeKB.toFixed(2)}KB): ${imageRelativePath}`);
        validImages++;
    }
});

console.log('\n验证结果:');
console.log(`总游戏数: ${gamesData.games.length}`);
console.log(`有效图片: ${validImages}`);
console.log(`图片太小: ${tooSmallImages}`);
console.log(`缺失图片: ${missingImages}`);

if (missingImages > 0 || tooSmallImages > 0) {
    console.log('\n⚠️ 需要修复的问题!');
} else {
    console.log('\n✅ 所有图片文件均有效');
} 