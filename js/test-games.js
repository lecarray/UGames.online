/**
 * 测试脚本 - 直接显示所有游戏
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('测试脚本已加载');
    loadAllGames();
    
    // 绑定分类标签点击事件
    const categoryTags = document.querySelectorAll('.category-tag');
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有active类
            categoryTags.forEach(t => t.classList.remove('active'));
            // 为当前标签添加active类
            this.classList.add('active');
            
            // 获取分类名
            const category = this.textContent;
            
            // 按分类加载游戏
            if (category === 'All') {
                loadAllGames();
            } else {
                loadGamesByCategory(category);
            }
        });
    });
});

/**
 * 加载所有游戏
 */
function loadAllGames() {
    fetch('data/games.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('加载到的游戏数据:', data);
            displayGames(data.games);
        })
        .catch(error => {
            console.error('加载游戏数据时出错:', error);
            // 显示错误信息
            const gamesGrids = document.querySelectorAll('.games-grid');
            gamesGrids.forEach(grid => {
                grid.innerHTML = `
                    <div class="error-message">
                        <p>加载游戏数据时出错: ${error.message}</p>
                    </div>
                `;
            });
        });
}

/**
 * 按分类加载游戏
 */
function loadGamesByCategory(category) {
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            // 筛选指定分类的游戏
            const filteredGames = data.games.filter(game => game.category === category);
            displayGames(filteredGames);
        })
        .catch(error => {
            console.error('按分类加载游戏时出错:', error);
        });
}

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
        // 清空现有内容
        grid.innerHTML = '';
        
        // 如果没有找到游戏
        if (games.length === 0) {
            grid.innerHTML = '<p>没有找到符合条件的游戏</p>';
            return;
        }
        
        // 为每个游戏创建卡片
        const gamesToShow = index === 0 ? games : games.slice(0, 3);
        gamesToShow.forEach(game => {
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
        });
    });
} 