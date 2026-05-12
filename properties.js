/**
 * Name as used as title for the main page
 */
var title = 'Automated Web Testing Literature Collection';

/**
 * 路径配置（必须加上 src/ 前缀）
 */
var dataDir = 'src/data/generated/';
var jsDir = 'src/js/';
var stylesDir = 'src/styles/';

/**
 * 这里的 clusters 就是你想要的分类功能！
 */
var clusters = [
    ["C1-Empirical-Studies"],
    ["C2-Structural-Analysis"],
    ["C3-GUI-Testing"],
    ["C4-Reviews-Roadmaps"]
];

/**
 * 标签云设置
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}];

/**
 * 其他设置保持默认
 */
var editable = true;

var paper = {
    html: 'Literature collection for <b>Web Testing with LLMs</b>',
    id: 'WineQuka2026'
};

var extraPages = {
    'about': 'about.html'
};

var customStyle = '';
var citations = null;
