/**
 * GamePortal - 游戏合集网站主JavaScript文件
 */

// 语言配置
const translations = {
    'zh': {
        // 导航
        'home': '首页',
        'category': '分类',
        'popular': '热门',
        'new_games': '新游戏',
        'rankings': '排行榜',
        'login': '登录',
        
        // 首页
        'hot_games': '热门游戏',
        'new_recommendations': '新游戏推荐',
        'view_more': '查看更多',
        'play_now': '立即游玩',
        
        // 游戏分类
        'all': '全部',
        'action': '动作',
        'adventure': '冒险',
        'rpg': 'RPG',
        'strategy': '策略',
        'competitive': '竞技',
        'casual': '休闲',
        'simulation': '模拟',
        'puzzle': '解谜',
        'racing': '竞速',
        
        // 徽章挑战
        'weekly_badge_challenge': '每周徽章挑战',
        'todays_badge': '今日徽章',
        'badge_task': '完成Space Warriors的第一关以获得这个特别徽章！',
        'start_challenge': '开始挑战',
        'players_completed': '位玩家已完成',
        'weekly_progress': '每周进度',
        'badges_earned': '已获得徽章',
        'reward_progress': '奖励进度',
        'points_until_next': '点数直到下一个奖励',
        'community_rank': '社区排名',
        'top_percent': '本周前10%',
        
        // 登录/注册
        'login_tab': '登录',
        'register_tab': '注册',
        'email': '电子邮箱',
        'email_placeholder': '请输入您的电子邮箱',
        'password': '密码',
        'password_placeholder': '请输入您的密码',
        'remember_me': '记住我',
        'forgot_password': '忘记密码？',
        'login_btn': '登录',
        'or_login_with': '或者使用以下方式登录',
        'continue_as_guest': '还没准备好注册？',
        'guest_link': '以游客身份继续',
        'username': '用户名',
        'username_placeholder': '请创建您的用户名',
        'confirm_password': '确认密码',
        'confirm_password_placeholder': '请再次输入您的密码',
        'agree_terms': '我同意',
        'terms_of_service': '服务条款',
        'and': '和',
        'privacy_policy': '隐私政策',
        'register_btn': '注册',
        'or_register_with': '或者使用以下方式注册',
        
        // 页脚
        'footer_desc': 'GamePortal是一个综合性游戏平台，提供各类精彩游戏，让你随时随地享受游戏乐趣。',
        'navigation': '导航',
        'about_us': '关于我们',
        'about_gameportal': '关于GamePortal',
        'contact_us': '联系我们',
        'terms': '使用条款',
        'privacy': '隐私政策',
        'faq': '常见问题',
        'help': '帮助',
        'support': '用户支持',
        'compatibility': '游戏兼容性',
        'dev_cooperation': '开发者合作',
        'ad_cooperation': '广告合作',
        'report_issue': '举报问题',
        'copyright': '保留所有权利',
        'game_screw_title': 'Screw Out: Bolts and Nuts',
        'game_screw_desc': 'Screw Out: Bolts and Nuts是一款经典的解谜游戏，你的目标是从各种形状中拧出螺栓，并按颜色将它们分类到正确的容器中。每个关卡都提供新的挑战，需要耐心、逻辑思维和仔细规划才能成功。',
        'game_screw_desc2': '要保持警惕！可用的额外孔数量有限，所以在采取行动之前，你需要提前思考几步。每一步都很重要，如果没有计划就冲进去可能会让你陷入困境！当所有螺栓都正确分类后，你将完成关卡并进入更棘手的谜题。你能掌握每个挑战并成为终极螺栓分类专家吗？',
        'game_category': '解谜',
        'game_rating': '评分:',
        'game_released': '发布于:',
        'game_release_date': '2025年3月',
        'game_description': '游戏说明',
        'game_achievements': '游戏成就',
        'achievement_beginner': '新手解谜者',
        'achievement_beginner_desc': '完成第一关',
        'achievement_quick': '快速思考',
        'achievement_quick_desc': '在30秒内完成一关',
        'achievement_master': '分类大师',
        'achievement_master_desc': '一次性正确分类所有螺栓',
        'achievement_locked': '已锁定',
        'achievement_locked_desc': '继续探索解锁更多成就',
        'game_stats': '游戏数据',
        'total_plays': '总游玩次数',
        'favorites': '收藏数',
        'comments': '评论数',
        'difficulty': '难度',
        'difficulty_medium': '中等',
        'player_rating': '玩家评分',
        'based_on': '基于',
        'player_ratings': '位玩家评分',
        'game_tags': '游戏标签',
        'tag_puzzle': '解谜',
        'tag_brainteaser': '益智',
        'tag_logic': '逻辑思维',
        'tag_strategy': '策略',
        'tag_casual': '休闲',
        'tag_html5': 'HTML5',
        'controls': '控制方式',
        'controls_mouse': '使用鼠标左键拧开螺栓',
        'fullscreen': '全屏',
        'restart': '重新开始',
        'back': '返回',
        'favorite': '收藏',
        'share': '分享'
    },
    'en': {
        // Navigation
        'home': 'Home',
        'category': 'Categories',
        'popular': 'Popular',
        'new_games': 'New Games',
        'rankings': 'Rankings',
        'login': 'Login',
        
        // Homepage
        'hot_games': 'Hot Games',
        'new_recommendations': 'New Game Recommendations',
        'view_more': 'View More',
        'play_now': 'Play Now',
        
        // Game Categories
        'all': 'All',
        'action': 'Action',
        'adventure': 'Adventure',
        'rpg': 'RPG',
        'strategy': 'Strategy',
        'competitive': 'Competitive',
        'casual': 'Casual',
        'simulation': 'Simulation',
        'puzzle': 'Puzzle',
        'racing': 'Racing',
        
        // Badge Challenge
        'weekly_badge_challenge': 'Weekly Badge Challenge',
        'todays_badge': 'Today\'s Badge',
        'badge_task': 'Complete the first level of Space Warriors to earn this special badge!',
        'start_challenge': 'Start Challenge',
        'players_completed': 'players completed',
        'weekly_progress': 'Weekly Progress',
        'badges_earned': 'badges earned',
        'reward_progress': 'Reward Progress',
        'points_until_next': 'points until next reward',
        'community_rank': 'Community Rank',
        'top_percent': 'Top 10% this week',
        
        // Login/Register
        'login_tab': 'Login',
        'register_tab': 'Register',
        'email': 'Email',
        'email_placeholder': 'Enter your email',
        'password': 'Password',
        'password_placeholder': 'Enter your password',
        'remember_me': 'Remember me',
        'forgot_password': 'Forgot password?',
        'login_btn': 'Login',
        'or_login_with': 'Or login with',
        'continue_as_guest': 'Not ready to register?',
        'guest_link': 'Continue as guest',
        'username': 'Username',
        'username_placeholder': 'Create your username',
        'confirm_password': 'Confirm Password',
        'confirm_password_placeholder': 'Re-enter your password',
        'agree_terms': 'I agree to the',
        'terms_of_service': 'Terms of Service',
        'and': 'and',
        'privacy_policy': 'Privacy Policy',
        'register_btn': 'Register',
        'or_register_with': 'Or register with',
        
        // Footer
        'footer_desc': 'GamePortal is a comprehensive gaming platform offering various exciting games for you to enjoy anytime, anywhere.',
        'navigation': 'Navigation',
        'about_us': 'About Us',
        'about_gameportal': 'About GamePortal',
        'contact_us': 'Contact Us',
        'terms': 'Terms of Use',
        'privacy': 'Privacy Policy',
        'faq': 'FAQ',
        'help': 'Help',
        'support': 'User Support',
        'compatibility': 'Game Compatibility',
        'dev_cooperation': 'Developer Cooperation',
        'ad_cooperation': 'Advertising',
        'report_issue': 'Report an Issue',
        'copyright': 'All Rights Reserved',
        'game_screw_title': 'Screw Out: Bolts and Nuts',
        'game_screw_desc': 'Screw Out: Bolts and Nuts is a classic puzzle game where your goal is to unscrew bolts from various shapes and sort them by color into the correct containers. Each level presents a new challenge that requires patience, logic, and careful planning to succeed.',
        'game_screw_desc2': 'Be vigilant! The number of additional holes is limited, so you\'ll need to think a few steps ahead before making a move. Every action counts, and rushing in without a plan could leave you stuck! Once all the bolts are sorted correctly, you\'ll complete the level and move on to even trickier puzzles. Can you master every challenge and become the ultimate bolt-sorting expert?',
        'game_category': 'Puzzle',
        'game_rating': 'Rating:',
        'game_released': 'Released:',
        'game_release_date': 'March 2025',
        'game_description': 'Game Description',
        'game_achievements': 'Game Achievements',
        'achievement_beginner': 'Beginner Solver',
        'achievement_beginner_desc': 'Complete the first level',
        'achievement_quick': 'Quick Thinker',
        'achievement_quick_desc': 'Complete a level in 30 seconds',
        'achievement_master': 'Sorting Master',
        'achievement_master_desc': 'Sort all bolts correctly on first try',
        'achievement_locked': 'Locked',
        'achievement_locked_desc': 'Keep exploring to unlock more',
        'game_stats': 'Game Stats',
        'total_plays': 'Total Plays',
        'favorites': 'Favorites',
        'comments': 'Comments',
        'difficulty': 'Difficulty',
        'difficulty_medium': 'Medium',
        'player_rating': 'Player Rating',
        'based_on': 'Based on',
        'player_ratings': 'player ratings',
        'game_tags': 'Game Tags',
        'tag_puzzle': 'Puzzle',
        'tag_brainteaser': 'Brain Teaser',
        'tag_logic': 'Logic',
        'tag_strategy': 'Strategy',
        'tag_casual': 'Casual',
        'tag_html5': 'HTML5',
        'controls': 'Controls',
        'controls_mouse': 'Use left mouse button to unscrew bolts',
        'fullscreen': 'Fullscreen',
        'restart': 'Restart',
        'back': 'Back',
        'favorite': 'Favorite',
        'share': 'Share'
    }
};

// 当前语言，默认为中文
let currentLang = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    initMobileMenu();
    
    // 分类标签点击效果
    initCategoryTags();
    
    // 游戏卡片悬停效果
    initGameCards();

    // 初始化主题切换（如果有）
    initThemeToggle();
    
    // 初始化语言切换
    initLanguageSelector();
    
    // 强制应用英文语言
    applyLanguage('en');
    
    // 初始化登录/注册表单切换
    initAuthFormTabs();

    // 游戏加载现在由games-data.js处理
    // 不再调用loadFeaturedGames和loadPopularGames
});

/**
 * 初始化移动端菜单
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

/**
 * 初始化分类标签点击效果
 */
function initCategoryTags() {
    // 注意：主要过滤功能现在由index.html中的代码处理
    const categoryTags = document.querySelectorAll('.category-tag:not(.category-filters .category-tag)');
    
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 如果在同一父元素中，则移除其他标签的active类
            const parentEl = this.closest('.filter-items');
            if (parentEl) {
                parentEl.querySelectorAll('.category-tag').forEach(t => {
                    t.classList.remove('active');
                });
                
                // 为当前点击的标签添加active类
                this.classList.add('active');
            }
        });
    });
}

/**
 * 初始化游戏卡片悬停效果
 */
function initGameCards() {
    // 这个函数会由事件委托在卡片加载后处理
    document.addEventListener('mouseover', function(e) {
        const gameCard = e.target.closest('.game-card');
        if (gameCard) {
            // 如果需要添加特殊的悬停效果，可以在这里实现
        }
    });
}

/**
 * 初始化主题切换
 */
function initThemeToggle() {
    // 这里可以添加暗/亮模式切换的代码
    // 目前网站是深色主题，可以根据需要添加切换功能
}

/**
 * 初始化语言选择器
 */
function initLanguageSelector() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langToggle && langDropdown) {
        // 点击语言图标显示/隐藏下拉菜单
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            langDropdown.classList.toggle('active');
        });
        
        // 点击页面其他位置关闭下拉菜单
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.lang-selector')) {
                langDropdown.classList.remove('active');
            }
        });
        
        // 点击语言选项
        if (langOptions) {
            langOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    
                    // 保存语言设置
                    localStorage.setItem('language', lang);
                    currentLang = lang;
                    
                    // 应用语言
                    applyLanguage(lang);
                    
                    // 关闭下拉菜单
                    langDropdown.classList.remove('active');
                });
            });
        }
    }
}

/**
 * 应用语言到页面
 * @param {string} lang - 语言代码
 */
function applyLanguage(lang) {
    // 强制使用英文
    lang = 'en';
    
    // 存储当前语言设置
    localStorage.setItem('gamePortalLang', lang);
    localStorage.setItem('language', lang);
    currentLang = lang;
    
    // 更新语言选择器显示
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = '<i class="fas fa-globe"></i> EN';
    }
    
    // 遍历所有带有 data-lang 属性的元素并更新内容
    document.querySelectorAll('[data-lang-' + lang + ']').forEach(elem => {
        elem.textContent = elem.getAttribute('data-lang-' + lang);
    });
    
    // 更新各种页面元素的文本内容
    // 导航
    applyTranslation('.nav-link[href="index.html"]', 'home');
    applyTranslation('.nav-link[href="category.html"]', 'category');
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent.trim() === '热门' || link.textContent.trim() === 'Popular') {
            applyTranslation(link, 'popular');
        }
        if (link.textContent.trim() === '新游戏' || link.textContent.trim() === 'New Games') {
            applyTranslation(link, 'new_games');
        }
        if (link.textContent.trim() === '排行榜' || link.textContent.trim() === 'Rankings') {
            applyTranslation(link, 'rankings');
        }
    });
    applyTranslation('.login-btn', 'login', 'innerHTML');
    
    // 首页内容
    applyTranslation('.section-title', 'hot_games', 'first');
    document.querySelectorAll('.section-title').forEach((title, index) => {
        if (index === 1) applyTranslation(title, 'new_recommendations');
    });
    
    applyTranslation('.view-more', 'view_more', 'first');
    document.querySelectorAll('.view-more').forEach(el => {
        if (el.textContent.trim().includes('查看') || el.textContent.trim().includes('View')) {
            el.innerHTML = translations[lang]['view_more'] + ' <i class="fas fa-chevron-right"></i>';
        }
    });
    
    // 分类标签
    applyTranslation('.category-tag.active', 'all');
    document.querySelectorAll('.category-tag').forEach(tag => {
        const currentText = tag.textContent.trim();
        const keys = ['action', 'adventure', 'rpg', 'strategy', 'competitive', 'casual', 'simulation', 'puzzle'];
        const zhValues = ['动作', '冒险', 'RPG', '策略', '竞技', '休闲', '模拟', '解谜'];
        
        const index = zhValues.indexOf(currentText);
        if (index !== -1) {
            tag.textContent = translations[lang][keys[index]];
        }
    });
    
    // 游戏卡片
    document.querySelectorAll('.play-now').forEach(btn => {
        if (btn.tagName === 'A') {
            btn.textContent = translations[lang]['play_now'];
        }
    });
    
    // 游戏卡片覆层播放按钮
    document.querySelectorAll('.game-overlay .play-now').forEach(span => {
        span.textContent = translations[lang]['play_now'];
    });
    
    // 徽章挑战区域
    applyTranslation('.challenge-title', 'weekly_badge_challenge');
    applyTranslation('.badge-name', 'todays_badge');
    applyTranslation('.badge-task', 'badge_task');
    applyTranslation('.challenge-action .btn', 'start_challenge');
    
    const playersCompletedEl = document.querySelector('.players-completed');
    if (playersCompletedEl) {
        const playersCount = playersCompletedEl.textContent.match(/\d+,?\d*/);
        if (playersCount) {
            playersCompletedEl.innerHTML = `<i class="fas fa-users players-icon"></i> ${playersCount[0]} ${translations[lang]['players_completed']}`;
        }
    }
    
    document.querySelectorAll('.progress-section h3').forEach((title, index) => {
        if (index === 0) applyTranslation(title, 'weekly_progress');
        if (index === 1) applyTranslation(title, 'reward_progress');
        if (index === 2) applyTranslation(title, 'community_rank');
    });
    
    const progressTextEl = document.querySelector('.progress-section p:first-of-type');
    if (progressTextEl && progressTextEl.textContent.includes('/')) {
        const badgeCount = progressTextEl.textContent.match(/\d+\/\d+/);
        if (badgeCount) {
            progressTextEl.textContent = `${badgeCount[0]} ${translations[lang]['badges_earned']}`;
        }
    }
    
    const rewardTextEl = document.querySelector('.progress-section:nth-child(2) p');
    if (rewardTextEl) {
        const pointsCount = rewardTextEl.textContent.match(/\d+/);
        if (pointsCount) {
            rewardTextEl.innerHTML = `<i class="fas fa-award reward-icon"></i> ${pointsCount[0]} ${translations[lang]['points_until_next']}`;
        }
    }
    
    const rankTextEl = document.querySelector('.progress-section:nth-child(3) p');
    if (rankTextEl) {
        rankTextEl.innerHTML = `<i class="fas fa-medal community-icon"></i> ${translations[lang]['top_percent']}`;
    }
}

/**
 * 应用翻译到指定元素
 * @param {string} selector - CSS选择器
 * @param {string} text - 翻译文本
 * @param {string} mode - 模式（normal或append-icon）
 */
function applyTranslation(selector, text, mode = 'normal') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        if (mode === 'append-icon' && el.querySelector('i')) {
            // 保留图标，只替换文本
            const icon = el.querySelector('i').outerHTML;
            el.innerHTML = icon + ' ' + text;
        } else {
            el.textContent = text;
        }
    });
}

/**
 * 初始化登录/注册表单选项卡切换
 */
function initAuthFormTabs() {
    const tabs = document.querySelectorAll('.auth-tab');
    
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 移除所有选项卡的活动状态
                tabs.forEach(t => t.classList.remove('active'));
                
                // 为点击的选项卡添加活动状态
                this.classList.add('active');
                
                // 切换表单显示
                const tabType = this.getAttribute('data-tab');
                if (tabType === 'login') {
                    document.getElementById('login-form').style.display = 'flex';
                    document.getElementById('register-form').style.display = 'none';
                } else {
                    document.getElementById('login-form').style.display = 'none';
                    document.getElementById('register-form').style.display = 'flex';
                }
            });
        });
    }
}

// 暴露游戏API供全局使用
window.GamePortal = {
    // 保留必要的API
    applyLanguage: applyLanguage
}; 