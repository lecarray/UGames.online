/**
 * 首页脚本 - 从游戏配置加载游戏卡片
 */

document.addEventListener('DOMContentLoaded', function() {
    // 加载推荐游戏
    loadFeaturedGames();
    // 加载热门游戏
    loadPopularGames();
});

/**
 * 加载推荐游戏（焦点区域）
 */
function loadFeaturedGames() {
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            // 获取评分最高的游戏作为焦点游戏
            const featuredGame = data.games.sort((a, b) => b.rating - a.rating)[0];
            
            if (featuredGame) {
                // 设置焦点游戏内容
                document.querySelector('.hero-img').src = featuredGame.thumbnailImage;
                document.querySelector('.hero-img').alt = featuredGame.title;
                document.querySelector('.hero-title').textContent = featuredGame.title;
                document.querySelector('.category-label').textContent = featuredGame.category;
                document.querySelector('.rating span').textContent = featuredGame.rating;
                
                // 设置游戏描述（截取前100个字符）
                const shortDescription = featuredGame.description.split(' ').slice(0, 20).join(' ') + '...';
                document.querySelector('.hero-description').textContent = shortDescription;
                
                // 设置"开始游戏"按钮链接
                document.querySelector('.hero a.btn').href = `game.html?id=${featuredGame.id}`;
            }
        })
        .catch(error => {
            console.error('加载焦点游戏时出错:', error);
        });
}

/**
 * 加载热门游戏区域
 */
function loadPopularGames() {
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            // 获取所有游戏并随机排序
            const games = [...data.games].sort(() => 0.5 - Math.random());
            
            // 获取游戏网格容器
            const gamesGrids = document.querySelectorAll('.games-grid');
            if (gamesGrids.length === 0) return;
            
            // 为每个游戏网格区域填充游戏卡片
            gamesGrids.forEach((grid, index) => {
                // 清空现有内容
                grid.innerHTML = '';
                
                // 决定显示哪些游戏（第一个网格显示所有游戏，第二个网格只显示最新的3个）
                const displayGames = index === 0 ? games : games.slice(0, 3);
                
                // 为每个游戏创建卡片
                displayGames.forEach(game => {
                    const gameCard = document.createElement('div');
                    gameCard.className = 'game-card';
                    
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
                    
                    grid.appendChild(gameCard);
                });
            });
        })
        .catch(error => {
            console.error('加载热门游戏时出错:', error);
        });
}

/**
 * 按类别过滤游戏
 */
function filterGamesByCategory(category) {
    // 获取所有类别标签
    const categoryTags = document.querySelectorAll('.category-tag');
    
    // 移除所有标签的active类
    categoryTags.forEach(tag => {
        tag.classList.remove('active');
    });
    
    // 为当前选中的类别添加active类
    const selectedTag = Array.from(categoryTags).find(tag => tag.textContent === category);
    if (selectedTag) {
        selectedTag.classList.add('active');
    }
    
    // 如果选择了"全部"，显示所有游戏
    if (category === 'All') {
        fetch('data/games.json')
            .then(response => response.json())
            .then(data => {
                updateGamesGrid(data.games);
            });
        return;
    }
    
    // 否则，按类别过滤游戏
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            const filteredGames = data.games.filter(game => game.category === category);
            updateGamesGrid(filteredGames);
        });
}

/**
 * 更新游戏网格显示
 */
function updateGamesGrid(games) {
    const gamesGrid = document.querySelector('.games-grid');
    if (!gamesGrid) return;
    
    // 清空现有内容
    gamesGrid.innerHTML = '';
    
    // 如果没有游戏，显示提示信息
    if (games.length === 0) {
        gamesGrid.innerHTML = `
            <div class="no-games-message">
                <p>没有找到符合条件的游戏。</p>
            </div>
        `;
        return;
    }
    
    // 为每个游戏创建卡片
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
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
        
        gamesGrid.appendChild(gameCard);
    });
}

// 初始化类别过滤器事件
document.addEventListener('DOMContentLoaded', function() {
    const categoryTags = document.querySelectorAll('.category-tag');
    
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const category = this.textContent;
            filterGamesByCategory(category);
        });
    });
}); 
