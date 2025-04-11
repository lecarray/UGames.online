/**
 * 游戏详情页面JavaScript
 * 处理游戏详情页面的各种交互和功能
 */

// 在DOMContentLoaded和load事件中都初始化事件处理程序，确保无论何种情况都能正确绑定
document.addEventListener('DOMContentLoaded', initEventHandlers);
window.addEventListener('load', initEventHandlers);

// 初始化一次，以防上述事件已经触发
initEventHandlers();

/**
 * 初始化所有事件处理函数
 */
function initEventHandlers() {
    // 获取iframe元素
    const gameFrame = document.querySelector('.game-iframe');
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    // 全屏按钮功能
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        // 移除之前可能存在的事件监听器
        fullscreenBtn.removeEventListener('click', handleFullscreen);
        // 添加新的监听器
        fullscreenBtn.addEventListener('click', handleFullscreen);
    }
    
    // 重新开始按钮功能
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        // 移除之前可能存在的事件监听器
        restartBtn.removeEventListener('click', handleRestart);
        // 添加新的监听器
        restartBtn.addEventListener('click', handleRestart);
    }
    
    // 音量滑块功能
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) {
        // 移除之前可能存在的事件监听器
        volumeSlider.removeEventListener('input', handleVolumeChange);
        // 添加新的监听器
        volumeSlider.addEventListener('input', handleVolumeChange);
    }

    // 推荐游戏卡片的"Play Now"按钮功能
    setupGameCardEvents();
    
    // 如果iframe已加载，设置加载完成事件
    if (gameFrame) {
        gameFrame.removeEventListener('load', handleIframeLoad);
        gameFrame.addEventListener('load', handleIframeLoad);
    }
}

/**
 * 设置游戏卡片和"Play Now"按钮的事件
 */
function setupGameCardEvents() {
    // 为所有游戏卡片添加点击事件
    const gameCards = document.querySelectorAll('.similar-game-card');
    gameCards.forEach(card => {
        // 移除之前可能存在的事件监听器
        card.removeEventListener('click', handleGameCardClick);
        // 添加新的监听器
        card.addEventListener('click', handleGameCardClick);
        
        // 获取Play Now按钮
        const playNowBtn = card.querySelector('.play-now-btn');
        if (playNowBtn) {
            // 移除之前可能存在的事件监听器
            playNowBtn.removeEventListener('click', handlePlayNowClick);
            // 添加新的监听器
            playNowBtn.addEventListener('click', handlePlayNowClick);
        }
    });
}

/**
 * 处理全屏按钮点击
 */
function handleFullscreen() {
    const gameFrame = document.querySelector('.game-iframe');
    if (gameFrame) {
        if (gameFrame.requestFullscreen) {
            gameFrame.requestFullscreen();
        } else if (gameFrame.webkitRequestFullscreen) {
            gameFrame.webkitRequestFullscreen();
        } else if (gameFrame.msRequestFullscreen) {
            gameFrame.msRequestFullscreen();
        }
    }
}

/**
 * 处理重启按钮点击
 */
function handleRestart() {
    const gameFrame = document.querySelector('.game-iframe');
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (gameFrame && loadingOverlay) {
        // 重新加载iframe
        gameFrame.src = gameFrame.src;
        loadingOverlay.style.display = 'flex';
        loadingOverlay.style.opacity = '1';
    }
}

/**
 * 处理音量变化
 */
function handleVolumeChange(e) {
    const volumeValue = document.querySelector('.volume-value');
    if (volumeValue) {
        volumeValue.textContent = e.target.value;
    }
}

/**
 * 处理Play Now按钮点击
 */
function handlePlayNowClick(e) {
    e.preventDefault(); // 阻止默认行为
    e.stopPropagation(); // 阻止事件冒泡到卡片
    
    // 获取游戏标题或数据属性
    const card = e.currentTarget.closest('.similar-game-card');
    const gameTitle = card.getAttribute('data-game') || card.querySelector('.similar-game-title').textContent;
    
    // 导航到相应游戏页面
    navigateToGameByTitle(gameTitle);
}

/**
 * 处理游戏卡片点击
 */
function handleGameCardClick(e) {
    // 确保点击的不是Play Now按钮或其子元素
    if (e.target.closest('.play-now-btn') === null) {
        const gameTitle = this.getAttribute('data-game') || this.querySelector('.similar-game-title').textContent;
        navigateToGameByTitle(gameTitle);
    }
}

/**
 * 根据游戏标题导航到相应页面
 */
function navigateToGameByTitle(gameTitle) {
    console.log('Navigating to game:', gameTitle);
    
    // 游戏路由映射
    const gameRoutes = {
        'Color Block': 'color-block-detail.html',
        'Slice Master': 'slice-master-detail.html',
        'Rope Rescue': 'rope-rescue-detail.html',
        'Teacher Simulator': 'teacher-simulator-detail.html'
    };
    
    // 如果游戏存在于路由映射中，导航到对应页面，否则导航到分类页
    if (gameRoutes[gameTitle]) {
        window.location.href = gameRoutes[gameTitle];
    } else {
        window.location.href = 'category.html';
    }
}

/**
 * 处理iframe加载完成
 */
function handleIframeLoad() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        // 设置延迟，确保游戏内容已加载
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }, 1500);
    }
} 