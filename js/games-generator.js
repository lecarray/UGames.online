/**
 * GamePortal - 游戏卡片生成器
 * 用于动态生成游戏卡片并展示在页面上
 */

document.addEventListener('DOMContentLoaded', function() {
    // 检查games-data.js是否已加载
    if (typeof gamesData === 'undefined') {
        console.error('Games data is not loaded!');
        return;
    }

    // 初始化游戏卡片
    initializeGameCards();
    
    // 初始化分类筛选
    initializeCategoryFilters();
});

/**
 * 初始化游戏卡片
 */
function initializeGameCards() {
    // 如果不在首页，直接返回
    if (!document.querySelector('.games-grid')) {
        return;
    }
    
    // 按评分排序游戏
    const sortedGames = [...gamesData].sort((a, b) => b.rating - a.rating);
    
    // 生成游戏卡片
    renderGameCards(sortedGames);
}

/**
 * 渲染游戏卡片
 * @param {Array} games - 游戏数据数组
 */
function renderGameCards(games) {
    const gamesGrids = document.querySelectorAll('.games-grid');
    
    if (gamesGrids.length === 0) return;
    
    // 只使用Screw Out游戏数据
    const screwOutGame = games.find(game => game.id === "screw-out");
    if (!screwOutGame) return;
    
    // 创建游戏卡片HTML
    const gameCardHTML = createGameCardHTML(screwOutGame);
    
    // 为每个游戏网格区域添加游戏卡片
    gamesGrids.forEach(grid => {
        // 清空现有内容
        grid.innerHTML = '';
        // 添加Screw Out游戏卡片
        grid.innerHTML = gameCardHTML;
    });
}

/**
 * 创建游戏卡片HTML
 * @param {Object} game - 游戏数据对象
 * @returns {string} - 游戏卡片HTML字符串
 */
function createGameCardHTML(game) {
    // 检测当前语言
    const isZh = document.documentElement.lang === 'zh-CN';
    
    // 根据语言选择合适的标题和分类
    const title = isZh && game.titleZh ? game.titleZh : game.title;
    const category = isZh && game.categoryZh ? game.categoryZh : game.category;
    const playNowText = isZh ? '开始游戏' : 'Play Now';
    
    // 创建游戏卡片HTML
    return `
        <div class="game-card" data-id="${game.id}" data-category="${game.category}">
            <div class="game-thumbnail">
                <img src="${game.thumbnail || 'images/screw-out.jpg'}" alt="${title}">
            </div>
            <div class="game-info">
                <h3 class="game-title">${title}</h3>
                <div class="game-meta">
                    <span class="game-category">${category}</span>
                    <div class="game-rating">
                        <i class="fas fa-star"></i>
                        <span>${game.rating}</span>
                    </div>
                </div>
                <a href="${game.detailUrl}" class="btn btn-primary play-now">${playNowText}</a>
            </div>
        </div>
    `;
}

/**
 * 初始化分类筛选
 */
function initializeCategoryFilters() {
    const categoryTags = document.querySelectorAll('.category-tag');
    if (categoryTags.length === 0) return;
    
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有标签的active类
            categoryTags.forEach(t => t.classList.remove('active'));
            // 为当前点击的标签添加active类
            this.classList.add('active');
            
            // 根据标签过滤游戏
            filterGamesByCategory(this.textContent.trim().toLowerCase());
        });
    });
}

/**
 * 根据分类筛选游戏
 * @param {string} category - 选中的分类
 */
function filterGamesByCategory(category) {
    const gameCards = document.querySelectorAll('.game-card');
    if (gameCards.length === 0) return;
    
    // 处理"全部"分类
    if (category === 'all' || category === '全部') {
        gameCards.forEach(card => card.style.display = 'flex');
        return;
    }
    
    // 其他分类处理 - 对于Screw Out游戏，我们只显示puzzle分类
    gameCards.forEach(card => {
        const gameCategory = card.dataset.category.toLowerCase();
        if (gameCategory === 'puzzle' && (category === 'puzzle' || category === '益智')) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
} 