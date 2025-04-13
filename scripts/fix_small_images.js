// 修复太小的图片文件
const fs = require('fs');
const path = require('path');

// 读取游戏数据文件
const gamesJsonPath = path.join(__dirname, '../data/games.json');
const gamesData = require(gamesJsonPath);

console.log(`找到 ${gamesData.games.length} 个游戏数据`);

// 定义占位图路径 (使用一个已知的好图片作为占位图)
const placeholderImagePath = path.join(__dirname, '../images/screw-out.jpg');
if (!fs.existsSync(placeholderImagePath)) {
  console.error('占位图文件不存在!');
  process.exit(1);
}

// 修复太小的图片
let smallImagesCount = 0;
let fixedImagesCount = 0;

gamesData.games.forEach(game => {
  // 提取图片路径
  const imageRelativePath = game.thumbnailImage;
  const absoluteImagePath = path.join(__dirname, '..', imageRelativePath);
  
  // 检查文件是否存在
  if (!fs.existsSync(absoluteImagePath)) {
    console.log(`[${game.id}] ❌ 图片文件不存在: ${imageRelativePath}`);
    return;
  }
  
  // 检查文件大小
  const stats = fs.statSync(absoluteImagePath);
  const fileSizeKB = stats.size / 1024;
  
  if (fileSizeKB < 10) {
    smallImagesCount++;
    console.log(`[${game.id}] 发现小图片 (${fileSizeKB.toFixed(2)}KB): ${imageRelativePath}`);
    
    // 备份原图片
    const backupPath = absoluteImagePath + '.bak';
    try {
      fs.copyFileSync(absoluteImagePath, backupPath);
      console.log(`[${game.id}] 已备份原图片到: ${backupPath}`);
      
      // 复制占位图到目标位置
      fs.copyFileSync(placeholderImagePath, absoluteImagePath);
      console.log(`[${game.id}] ✅ 已替换为占位图 ${imageRelativePath}`);
      fixedImagesCount++;
    } catch (error) {
      console.error(`[${game.id}] ❌ 复制文件失败: ${error.message}`);
    }
  }
});

console.log('\n修复结果:');
console.log(`发现小图片: ${smallImagesCount}`);
console.log(`成功修复: ${fixedImagesCount}`);

if (smallImagesCount === 0) {
  console.log('\n✅ 没有需要修复的小图片');
} else if (fixedImagesCount === smallImagesCount) {
  console.log('\n✅ 所有小图片已成功修复');
} else {
  console.log('\n⚠️ 部分图片未能修复!');
} 