const fs = require('fs');
const path = require('path');

// 需要创建占位图像的文件名
const missingImages = [
  'ragdoll-football-2-players.jpg',
  'slope-rolling.jpg',
  'race-clicker-drift-max.jpg'
];

// 图片目标文件夹
const imagesFolder = path.resolve(__dirname, '../images');

// 确保目标文件夹存在
if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder, { recursive: true });
}

/**
 * 创建一个简单的占位图像文件
 * 这里简单复制一个已有的图片作为占位
 */
function createPlaceholderImage(filename) {
  const sourcePath = path.join(imagesFolder, 'screw-out.jpg'); // 使用已存在的图片作为源
  const targetPath = path.join(imagesFolder, filename);
  
  console.log(`为 ${filename} 创建占位图像`);
  
  // 检查源文件是否存在
  if (!fs.existsSync(sourcePath)) {
    console.error(`源文件 ${sourcePath} 不存在，无法创建占位图像`);
    return;
  }
  
  // 检查目标文件是否已存在且有内容
  if (fs.existsSync(targetPath)) {
    const stats = fs.statSync(targetPath);
    if (stats.size > 0) {
      console.log(`文件 ${filename} 已存在且有内容，跳过创建`);
      return;
    }
  }
  
  // 复制文件
  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`成功创建占位图像 ${filename}`);
  } catch (err) {
    console.error(`创建占位图像 ${filename} 失败:`, err.message);
  }
}

// 为所有缺失的图片创建占位图像
console.log('开始创建占位图像...');

// 逐个处理图片，确保每个都被处理
for (let i = 0; i < missingImages.length; i++) {
  createPlaceholderImage(missingImages[i]);
}

console.log('所有占位图像创建完成'); 