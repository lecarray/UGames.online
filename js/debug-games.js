/**
 * 调试脚本 - 用于测试游戏数据加载和显示功能
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('调试脚本已加载');
    
    // 尝试加载游戏数据
    fetch('data/games.json')
        .then(response => {
            console.log('Fetch 响应状态:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('成功加载游戏数据:', data);
            console.log('游戏数量:', data.games.length);
            
            // 检查页面上的游戏卡片容器
            const gamesGrids = document.querySelectorAll('.games-grid');
            console.log('找到游戏网格容器数量:', gamesGrids.length);
            
            // 手动填充游戏卡片
            displayGames(data.games);
        })
        .catch(error => {
            console.error('加载或处理游戏数据时出错:', error);
        });
});

/**
 * 显示游戏卡片
 */
function displayGames(games) {
    console.log('准备显示游戏:', games.length);
    
    // 获取所有游戏网格容器
    const gamesGrids = document.querySelectorAll('.games-grid');
    if (gamesGrids.length === 0) {
        console.error('未找到游戏网格容器');
        return;
    }
    
    // 为每个网格容器填充游戏卡片
    gamesGrids.forEach((grid, index) => {
        console.log(`处理网格容器 ${index+1}`);
        
        // 清空现有内容
        grid.innerHTML = '';
        
        // 如果没有找到游戏
        if (games.length === 0) {
            grid.innerHTML = '<p>没有找到符合条件的游戏</p>';
            return;
        }
        
        // 为每个游戏创建卡片
        const gamesToShow = index === 0 ? games : games.slice(0, 3);
        console.log(`网格 ${index+1} 将显示 ${gamesToShow.length} 个游戏`);
        
        gamesToShow.forEach((game, gameIndex) => {
            console.log(`正在处理游戏 ${gameIndex+1}: ${game.title}`);
            
            // 创建游戏卡片元素
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            // 填充游戏卡片内容
            gameCard.innerHTML = `
                <div class="game-thumbnail">
                    <img src="${game.thumbnailImage}" alt="${game.title}">
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
            `;
            
            // 添加到网格中
            grid.appendChild(gameCard);
            console.log(`已添加游戏卡片 ${gameIndex+1}`);
        });
    });
    
    console.log('所有游戏卡片处理完成');
} 