const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// 缺失的图片及其URL
const missingImages = [
  {
    name: 'ragdoll-football-2-players.jpg',
    url: 'https://img.gamedistribution.com/d28ab37fbee149289d4c3d92106e2921-512x512.jpeg'
  },
  {
    name: 'slope-rolling.jpg',
    url: 'https://img.gamedistribution.com/0022998ce3c54962be6ffe178229b168-512x512.jpeg'
  },
  {
    name: 'race-clicker-drift-max.jpg',
    url: 'https://img.gamedistribution.com/a02de4821afa46c3b69dd95385c314db-512x512.jpeg'
  }
];

// 图片目标文件夹
const imagesFolder = path.resolve(__dirname, '../images');

// 确保目标文件夹存在
if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder, { recursive: true });
}

// 下载单个图片的函数
function downloadImage(imageInfo) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesFolder, imageInfo.name);
    
    // 如果文件存在且大小不为0，则跳过
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      if (stats.size > 0) {
        console.log(`文件 ${imageInfo.name} 已存在且大小正常，跳过下载`);
        resolve();
        return;
      }
    }
    
    console.log(`开始下载 ${imageInfo.name} 从 ${imageInfo.url}`);
    
    // 根据URL选择使用http或https模块
    const client = imageInfo.url.startsWith('https') ? https : http;
    
    // 创建请求
    const request = client.get(imageInfo.url, (response) => {
      // 处理重定向
      if (response.statusCode === 301 || response.statusCode === 302) {
        console.log(`正在跟随重定向到 ${response.headers.location}`);
        imageInfo.url = response.headers.location;
        downloadImage(imageInfo).then(resolve).catch(reject);
        return;
      }
      
      // 检查状态码
      if (response.statusCode !== 200) {
        reject(new Error(`下载失败，状态码: ${response.statusCode}`));
        return;
      }
      
      // 创建文件写入流
      const file = fs.createWriteStream(filePath);
      
      // 将响应数据写入文件
      response.pipe(file);
      
      // 处理完成事件
      file.on('finish', () => {
        file.close();
        console.log(`成功下载 ${imageInfo.name}`);
        resolve();
      });
      
      // 处理错误
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // 删除失败的文件
        reject(err);
      });
    });
    
    // 处理请求错误
    request.on('error', (err) => {
      reject(err);
    });
    
    // 设置请求超时
    request.setTimeout(30000, () => {
      request.abort();
      reject(new Error(`请求超时: ${imageInfo.url}`));
    });
  });
}

// 批量下载所有缺失的图片
async function downloadAllMissingImages() {
  console.log('开始下载缺失的图片...');
  
  for (const imageInfo of missingImages) {
    try {
      await downloadImage(imageInfo);
    } catch (error) {
      console.error(`下载 ${imageInfo.name} 失败:`, error.message);
    }
  }
  
  console.log('所有缺失图片下载任务完成');
}

// 开始下载
downloadAllMissingImages(); 