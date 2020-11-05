const Article = (header = '', text = '', fontStyle = '') => {
    let str = '';
    text = text.split('\n');

    for (let e of text) {
        str += `<div class="section-article-text-row">${e}</div>`
    }

    return `
    
        <div class="section-article">
        
            ${header ? `<div class="section-article-heading">${header}</div>` : ''}
            
            <div class="section-article-text" ${fontStyle ? `style="${fontStyle}"` : ''}>
                ${str}
            </div>
            
        </div>
    
    `
};

export default Article;
