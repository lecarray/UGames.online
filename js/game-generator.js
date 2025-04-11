/**
 * 游戏生成器 - 从JSON配置文件自动生成游戏页面
 * 这个脚本让小白用户只需更新JSON文件即可添加新游戏
 */

// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面的游戏ID（从URL参数中获取）
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    if (gameId) {
        // 加载游戏数据
        loadGameData(gameId);
    }
});

/**
 * 加载游戏数据并生成页面内容
 * @param {string} gameId 游戏ID
 */
function loadGameData(gameId) {
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            // 查找匹配的游戏
            const game = data.games.find(g => g.id === gameId);
            
            if (game) {
                // 填充页面内容
                populateGamePage(game);
            } else {
                console.error('游戏未找到:', gameId);
                // 可以添加一个友好的错误提示
                document.querySelector('.game-detail-container').innerHTML = `
                    <div class="error-message">
                        <h2>游戏未找到</h2>
                        <p>抱歉，找不到ID为 "${gameId}" 的游戏。</p>
                        <a href="index.html" class="btn btn-primary">返回首页</a>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('加载游戏数据时出错:', error);
            document.querySelector('.game-detail-container').innerHTML = `
                <div class="error-message">
                    <h2>加载错误</h2>
                    <p>加载游戏数据时出现问题。请稍后再试。</p>
                    <a href="index.html" class="btn btn-primary">返回首页</a>
                </div>
            `;
        });
}

/**
 * 使用游戏数据填充页面内容
 * @param {Object} game 游戏数据对象
 */
function populateGamePage(game) {
    // 设置页面标题
    document.title = `${game.title} | UGames`;
    
    // 填充游戏基本信息
    document.querySelector('.game-title').textContent = game.title;
    document.querySelector('.game-meta-category').textContent = game.category;
    document.querySelector('.game-meta-rating').innerHTML = `<i class="fas fa-star rating-star"></i>${game.rating}`;
    document.querySelector('.game-release-date').textContent = game.releaseDate;
    
    // 设置游戏iframe
    document.querySelector('.game-iframe').src = game.gameIframeUrl;
    
    // 填充游戏描述
    document.querySelector('.description-text').innerHTML = game.description.replace(/\n/g, '<br>');
    
    // 填充游戏统计信息
    document.querySelector('.stat-value:nth-child(1)').textContent = game.totalPlays;
    document.querySelector('.stat-value:nth-child(2)').textContent = game.favorites;
    document.querySelector('.stat-value:nth-child(3)').textContent = game.comments;
    document.querySelector('.stat-value:nth-child(4)').textContent = game.difficulty;
    
    // 填充评分
    document.querySelector('.rating-number').textContent = game.rating;
    updateStars(game.rating);
    
    // 填充游戏标签
    const tagContainer = document.querySelector('.tag-container');
    tagContainer.innerHTML = '';
    game.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'game-tag';
        tagSpan.textContent = tag;
        tagContainer.appendChild(tagSpan);
    });
    
    // 填充游戏控制方式
    const controlList = document.querySelector('.control-list');
    controlList.innerHTML = '';
    game.controls.forEach(control => {
        const controlItem = document.createElement('li');
        controlItem.className = 'control-item';
        controlItem.innerHTML = `
            <div class="control-icon">
                <i class="fas fa-${control.icon}"></i>
            </div>
            <span>${control.description}</span>
        `;
        controlList.appendChild(controlItem);
    });
    
    // 加载相似游戏（从JSON中获取其他游戏）
    loadSimilarGames(game.id);
}

/**
 * 根据评分更新星星显示
 * @param {number} rating 游戏评分
 */
function updateStars(rating) {
    const starsContainer = document.querySelector('.rating-stars');
    starsContainer.innerHTML = '';
    
    // 计算完整星星、半星和空星的数量
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    // 添加完整星星
    for (let i = 0; i < fullStars; i++) {
        starsContainer.innerHTML += '<i class="fas fa-star"></i>';
    }
    
    // 添加半星（如果有）
    if (halfStar) {
        starsContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // 添加空星
    for (let i = 0; i < emptyStars; i++) {
        starsContainer.innerHTML += '<i class="far fa-star"></i>';
    }
}

/**
 * 加载相似游戏
 * @param {string} currentGameId 当前游戏ID
 */
function loadSimilarGames(currentGameId) {
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            // 过滤掉当前游戏，获取其他游戏
            const otherGames = data.games.filter(g => g.id !== currentGameId);
            
            // 随机选择最多4个游戏作为推荐
            const recommendedGames = otherGames
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);
            
            // 填充推荐游戏区域
            const similarGamesGrid = document.querySelector('.similar-games-grid');
            similarGamesGrid.innerHTML = '';
            
            recommendedGames.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'similar-game-card';
                gameCard.setAttribute('data-game', game.title);
                
                gameCard.innerHTML = `
                    <img src="${game.thumbnailImage}" alt="${game.title}" class="similar-game-thumb">
                    <div class="similar-game-info">
                        <h4 class="similar-game-title">${game.title}</h4>
                        <span class="similar-game-category">${game.category}</span>
                    </div>
                    <a href="game.html?id=${game.id}" class="play-now-btn">Play Now</a>
                `;
                
                similarGamesGrid.appendChild(gameCard);
            });
            
            // 重新绑定游戏卡片事件
            setupGameCardEvents();
        })
        .catch(error => {
            console.error('加载相似游戏时出错:', error);
        });
} 