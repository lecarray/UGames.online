// 下载游戏封面图片的脚本
const fs = require('fs');
const https = require('https');
const path = require('path');
const url = require('url');

// 游戏图片URL列表和文件名生成
const gameImages = [
  { url: 'https://www.onlinegames.io/media/posts/970/Survival-Island.jpg', name: 'survival-island' },
  { url: 'https://www.onlinegames.io/media/posts/968/squid-Shooter-online.jpg', name: 'squid-shooter' },
  { url: 'https://www.onlinegames.io/media/posts/969/conquer-kigdoms-online.jpg', name: 'conquer-kingdoms' },
  { url: 'https://www.onlinegames.io/media/posts/966/Mahjong.jpg', name: 'mahjong' },
  { url: 'https://www.onlinegames.io/media/posts/965/nuts-and-bolts-puzzle.jpg', name: 'nuts-and-bolts-puzzle' },
  { url: 'https://www.onlinegames.io/media/posts/962/Race-Clicker-Drift-Max-Play.jpg', name: 'race-clicker-drift-max' },
  { url: 'https://www.onlinegames.io/media/posts/961/Slope-Rolling.jpg', name: 'slope-rolling' },
  { url: 'https://www.onlinegames.io/media/posts/963/Ragdoll-Football-2-Players.jpg', name: 'ragdoll-football-2-players' },
  { url: 'https://www.onlinegames.io/media/posts/959/Supermarket-Simulator-Online.jpg', name: 'supermarket-simulator' },
  { url: 'https://www.onlinegames.io/media/posts/958/Henry-Stikmin-Infiltrating-the-Airship.jpg', name: 'infiltrating-the-airship' },
  { url: 'https://www.onlinegames.io/media/posts/957/Henry-Stikmin-Stealing-the-Diamond.jpg', name: 'stealing-the-diamond' },
  { url: 'https://www.onlinegames.io/media/posts/956/Tank-Arena-Online.jpg', name: 'tank-arena' },
  { url: 'https://www.onlinegames.io/media/posts/955/Henry-Stickmin-Escaping-the-Prison-Online.jpg', name: 'escaping-the-prison' },
  { url: 'https://www.onlinegames.io/media/posts/954/Candy-Bubble.jpg', name: 'candy-bubble' },
  { url: 'https://www.onlinegames.io/media/posts/953/Golf-Orbit-Play-Online.jpg', name: 'golf-orbit' },
  { url: 'https://www.onlinegames.io/media/posts/952/Kings-io.jpg', name: 'kings-io' },
  { url: 'https://www.onlinegames.io/media/posts/951/Stickmin-Breaking-the-Bank.jpg', name: 'breaking-the-bank' },
  { url: 'https://www.onlinegames.io/media/posts/950/squid-race-simulator.jpg', name: 'squid-race-simulator' },
  { url: 'https://www.onlinegames.io/media/posts/949/sparta-hoppers-game.jpg', name: 'spartahoppers' },
  { url: 'https://www.onlinegames.io/media/posts/947/vex-7-online.jpg', name: 'vex-7' },
  { url: 'https://www.onlinegames.io/media/posts/945/soccer-random-pro.jpg', name: 'soccer-random-pro' },
  { url: 'https://www.onlinegames.io/media/posts/946/Squad-Shooter.jpg', name: 'squad-shooter' },
  { url: 'https://www.onlinegames.io/media/posts/944/sprunki-warm-like-fire.jpg', name: 'sprunki-warm-like-fire' },
  { url: 'https://www.onlinegames.io/media/posts/941/Sudoku.jpg', name: 'sudoku' },
  { url: 'https://www.onlinegames.io/media/posts/943/obby-tower-parkour-climb.jpg', name: 'obby-tower-parkour-climb' },
  { url: 'https://www.onlinegames.io/media/posts/942/Monster-survivors.jpg', name: 'monster-survivors' },
  { url: 'https://www.onlinegames.io/media/posts/940/Find-It.jpg', name: 'find-it' },
  { url: 'https://www.onlinegames.io/media/posts/939/tile-match.jpg', name: 'tile-match' },
  { url: 'https://www.onlinegames.io/media/posts/938/wordle.jpg', name: 'wordle' },
  { url: 'https://www.onlinegames.io/media/posts/937/voxel-world.jpg', name: 'voxel-world' },
  { url: 'https://www.onlinegames.io/media/posts/964/Paper-Planets.jpg', name: 'paper-planets' }
];

// 替代图片URL，用于404或403错误
const fallbackImageUrl = 'https://placehold.co/600x400/png?text=';

// 确保images目录存在
const imagesDir = path.join(__dirname, '../images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 下载图片函数，带重试逻辑
function downloadImage(imageUrl, fileName, retryCount = 0) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, `${fileName}.jpg`);
    
    // 检查文件是否已存在且大小超过30KB (避免占位图)
    if (fs.existsSync(filePath)) {
      try {
        const stats = fs.statSync(filePath);
        if (stats.size > 30000) { // 30KB
          console.log(`文件已存在且尺寸正常，跳过: ${fileName}.jpg (${stats.size / 1024}KB)`);
          resolve(filePath);
          return;
        } else {
          console.log(`已存在的文件太小 (${stats.size / 1024}KB)，重新下载: ${fileName}.jpg`);
          // 继续下载，替换小文件
        }
      } catch (err) {
        console.error(`检查文件状态出错: ${err.message}`);
      }
    }
    
    console.log(`正在下载: ${imageUrl} 到 ${filePath}`);
    
    // 使用占位符图片作为备用选项
    const useUrl = retryCount >= 2 ? 
      `${fallbackImageUrl}${encodeURIComponent(fileName.replace(/-/g, ' '))}` : 
      imageUrl;
      
    const file = fs.createWriteStream(filePath);
    
    const request = https.get(useUrl, response => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // 处理重定向
        if (response.headers.location) {
          console.log(`重定向到: ${response.headers.location}`);
          file.close();
          fs.unlinkSync(filePath); // 删除未完成的文件
          return downloadImage(response.headers.location, fileName, retryCount)
            .then(resolve)
            .catch(reject);
        }
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath); // 删除未完成的文件
        
        if (retryCount < 3) {
          console.log(`下载失败 (状态码: ${response.statusCode})，尝试重试 ${retryCount + 1}/3`);
          setTimeout(() => {
            downloadImage(imageUrl, fileName, retryCount + 1)
              .then(resolve)
              .catch(reject);
          }, 1000); // 等待1秒再重试
        } else {
          console.log(`尝试使用备用占位图: ${fileName}.jpg`);
          downloadImage(fallbackImageUrl + encodeURIComponent(fileName.replace(/-/g, ' ')), fileName, 999)
            .then(resolve)
            .catch(reject);
        }
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        // 验证文件大小
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.error(`检查文件大小出错 ${fileName}.jpg:`, err.message);
            reject(err);
            return;
          }
          
          const fileSizeKB = stats.size / 1024;
          console.log(`下载完成: ${fileName}.jpg (${fileSizeKB.toFixed(2)}KB)`);
          
          // 如果文件太小并且没有使用备用图，可能是占位图，尝试重新下载
          if (fileSizeKB < 30 && retryCount < 3 && !useUrl.startsWith(fallbackImageUrl)) {
            console.log(`下载的文件太小 (${fileSizeKB.toFixed(2)}KB)，尝试重新下载`);
            fs.unlinkSync(filePath);
            setTimeout(() => {
              downloadImage(imageUrl, fileName, retryCount + 1)
                .then(resolve)
                .catch(reject);
            }, 1000);
          } else {
            resolve(filePath);
          }
        });
      });
    });
    
    request.on('error', err => {
      file.close();
      fs.unlink(filePath, () => {}); // 删除可能部分下载的文件
      
      console.error(`下载失败 ${fileName}.jpg:`, err.message);
      
      if (retryCount < 3) {
        console.log(`网络错误，尝试重试 ${retryCount + 1}/3`);
        setTimeout(() => {
          downloadImage(imageUrl, fileName, retryCount + 1)
            .then(resolve)
            .catch(reject);
        }, 1500); // 等待1.5秒再重试
      } else {
        reject(err);
      }
    });
    
    request.setTimeout(15000, function() {
      request.abort();
      file.close();
      fs.unlink(filePath, () => {});
      
      console.error(`下载超时: ${fileName}.jpg`);
      
      if (retryCount < 3) {
        console.log(`请求超时，尝试重试 ${retryCount + 1}/3`);
        setTimeout(() => {
          downloadImage(imageUrl, fileName, retryCount + 1)
            .then(resolve)
            .catch(reject);
        }, 2000); // 等待2秒再重试
      } else {
        reject(new Error('下载超时'));
      }
    });
  });
}

// 创建简单的占位图函数
function createPlaceholderImage(fileName) {
  return new Promise((resolve) => {
    const filePath = path.join(imagesDir, `${fileName}.jpg`);
    
    // 检查文件是否已存在
    if (fs.existsSync(filePath)) {
      try {
        const stats = fs.statSync(filePath);
        if (stats.size > 1000) { // 1KB以上认为是有效文件
          console.log(`文件已存在，跳过创建占位图: ${fileName}.jpg`);
          resolve(filePath);
          return;
        }
      } catch (err) {
        console.error(`检查文件状态出错: ${err.message}`);
      }
    }
    
    // 从其他游戏图片复制一个作为占位
    const sampleImagePath = path.join(imagesDir, 'screw-out.jpg');
    if (fs.existsSync(sampleImagePath)) {
      fs.copyFile(sampleImagePath, filePath, (err) => {
        if (err) {
          console.error(`创建占位图失败: ${err.message}`);
        } else {
          console.log(`已创建占位图: ${fileName}.jpg`);
        }
        resolve(filePath);
      });
    } else {
      // 如果没有样例图片，创建一个空文件
      fs.writeFile(filePath, '', (err) => {
        if (err) {
          console.error(`创建空占位图失败: ${err.message}`);
        } else {
          console.log(`已创建空占位图: ${fileName}.jpg`);
        }
        resolve(filePath);
      });
    }
  });
}

// 并行下载所有图片（每次3个）
async function downloadAllImages() {
  console.log('开始下载游戏封面图片...');
  
  // 分批次下载，避免同时打开太多连接
  const batchSize = 3;
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < gameImages.length; i += batchSize) {
    const batch = gameImages.slice(i, i + batchSize);
    console.log(`处理批次 ${Math.floor(i/batchSize) + 1}/${Math.ceil(gameImages.length/batchSize)}`);
    
    try {
      const results = await Promise.allSettled(batch.map(image => 
        downloadImage(image.url, image.name).catch(err => {
          console.error(`下载 ${image.name} 失败，创建占位图`, err);
          return createPlaceholderImage(image.name);
        })
      ));
      
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          successCount++;
        } else {
          failCount++;
          console.error(`处理 ${batch[index].name} 失败: ${result.reason}`);
        }
      });
    } catch (error) {
      console.error(`批次处理失败:`, error);
    }
    
    // 每批次间隔一点时间，避免被服务器屏蔽
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log(`所有图片处理完成！成功: ${successCount}, 失败: ${failCount}`);
}

// 开始下载
downloadAllImages().catch(error => {
  console.error('下载过程中发生错误:', error);
}); 