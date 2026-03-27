const UITitles = document.getElementById('titles');
const UIProgress = document.getElementById('progress');
const UIMaxed = document.getElementById('maxed');
const UILink = document.getElementById('link');

const activeTitles = new Set();
const bonusTitles = Object.keys(ranks.bonus);
const pageTitle = document.title;

const indexBits = 6;
const rankBits = 8;
const packBits = indexBits + rankBits;
const packSize = 1 << packBits;
const rankMask = (1 << rankBits) - 1;

function updateTitle(item) {
    if (!item._link)
        return;

    const rank = Number(item.dataset.rank);
    const max = Number(item.dataset.max);
    const data = ranks[item.dataset.value];
    const title = !data.titles ? data.title : data.titles[rank - 1];

    const increase = item.querySelector('.increase');
    const decrease = item.querySelector('.decrease');
    const maximize = item.querySelector('.maximize');
    const minimize = item.querySelector('.minimize');

    item.querySelectorAll('button').forEach(button => button.classList.remove('disabled'));

    if (rank === 1) {
        decrease.classList.add('disabled');
        minimize.classList.add('disabled');
    }

    if (rank === max) {
        increase.classList.add('disabled');
        maximize.classList.add('disabled');
    }

    item._link.textContent = `${title} (${rank}/${max})`;
}

function removeBonusTitle(title) {
    if (!activeTitles.has(title.name))
        return;

    activeTitles.delete(title.name);

    for (const child of UIProgress.children)
        if (child.dataset.title === title.name) {
            child.remove();
            break;
        }
}

function addBonusTitle(title) {
    if (activeTitles.has(title.name))
        return;

    const item = document.createElement('li');
    const span = document.createElement('span');
    const link = document.createElement('a');

    item.dataset.title = title.name;
    item.dataset.rank = 1;
    item.dataset.max = 1;

    link.href = title.link;
    link.textContent = title.name;
    link.target = '_blank';

    item._link = link;

    activeTitles.add(title.name);
    span.appendChild(link);
    item.appendChild(span);
    UIProgress.appendChild(item);
}

function getMaxedTitle() {
    let total = 0;

    for (const child of UIProgress.children) {
        const link = child._link;

        if (!link)
            continue;

        link.classList.remove('maxed');

        if (Number(child.dataset.rank) === Number(child.dataset.max)) {
            total++;
            link.classList.add('maxed');
        }
    }

    const index = Math.min(Math.floor(total / ranks.maxed.offset), ranks.maxed.titles.length - 1);
    const title = ranks.maxed.titles[index];

    document.title = `${pageTitle} - ${title}`;
    return `${title} (${total}/${ranks.maxed.total})`;
}

function updateList() {
    const bonus = ranks.bonus;
    const count = Object.fromEntries(bonusTitles.map(k => [k, 0]));

    for (const child of UIProgress.children) {
        if (!child.dataset.value)
            continue;

        const rank = Number(child.dataset.rank);
        const max = Number(child.dataset.max);
        const value = child.dataset.value;

        if (rank !== max)
            continue;

        for (const key of bonusTitles) {
            const title = bonus[key];

            if (title.requirements.includes(value))
                count[key]++;
        }
    }

    for (const key of bonusTitles) {
        const title = bonus[key];

        if (count[key] === title.requirements.length)
            addBonusTitle(title);
        else
            removeBonusTitle(title);
    }

    UITitles.selectedIndex = 0;
    UIMaxed.textContent = getMaxedTitle();

    setLink();
}

function createRankButton(item, type) {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = type;
    button.setAttribute('aria-label', `${type} rank for ${item.dataset.text}`);

    button.addEventListener('click', () => {
        let rank = Number(item.dataset.rank);
        const max = Number(item.dataset.max);

        if (type === 'increase' && rank < max)
            rank++;
        else if (type === 'decrease' && rank > 1)
            rank--;
        else
            return;

        item.dataset.rank = rank;

        updateTitle(item);
        updateList();
    });

    return button;
}

function createValueButton(item, type) {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = type;
    button.setAttribute('aria-label', `${type} rank for ${item.dataset.text}`);

    button.addEventListener('click', () => {
        item.dataset.rank = type === 'minimize' ? 1 : Number(item.dataset.max);

        updateTitle(item);
        updateList();
    });

    return button;
}

function createRemoveButton(item) {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'remove'
    button.setAttribute('aria-label', `Remove title for ${item.dataset.text}`);

    button.addEventListener('click', () => {
        const groups = Array.from(UITitles.children);
        const group = groups.find(grp => grp.label === item.dataset.group);

        if (!group)
            return;

        const option = Array.from(group.children).find(opt => opt.value === item.dataset.value);

        if (option)
            option.disabled = false;

        item.remove();
        updateList();
    });

    return button;
}

function createItemLink(item) {
    const span = document.createElement('span');
    const link = document.createElement('a');
    const rank = Number(item.dataset.rank);
    const max = Number(item.dataset.max);
    const data = ranks[item.dataset.value];
    const title = !data.titles ? data.title : data.titles[rank - 1];

    link.href = data.link;
    link.target = '_blank';
    link.textContent = `${title} (${rank}/${max})`;

    item._link = link;

    span.appendChild(link);

    return span;
}

function createListItem(option, index, rank = 1) {
    option.disabled = true;

    const item = document.createElement('li');
    const data = ranks[option.value];

    item.dataset.value = option.value;
    item.dataset.text = option.text;
    item.dataset.group = option.parentElement.label;
    item.dataset.index = index;
    item.dataset.rank = rank;
    item.dataset.max = !data.titles ? data.max : data.titles.length;

    const link = createItemLink(item);
    const increase = createRankButton(item, 'increase');
    const decrease = createRankButton(item, 'decrease');
    const maximize = createValueButton(item, 'maximize');
    const minimize = createValueButton(item, 'minimize');
    const remove = createRemoveButton(item);

    item.appendChild(link);
    item.appendChild(increase);
    item.appendChild(maximize);
    item.appendChild(decrease);
    item.appendChild(minimize);
    item.appendChild(remove);
    UIProgress.appendChild(item);

    UITitles.selectedIndex = 0;

    return item;
}

function setHash() {
    const bytes = [];
    let buffer = 0;
    let bits = 0;

    for (const item of UIProgress.querySelectorAll('li')) {
        const data = item.dataset;

        if (data.index === undefined)
            continue;

        const index = Number(data.index);
        const rank = Number(data.rank);
        const value = (index << rankBits) | rank;

        buffer = buffer * packSize + value;
        bits += packBits;

        while (bits >= 8) {
            bits -= 8;
            const byte = Math.floor(buffer / (2 ** bits)) & 0xFF;

            bytes.push(byte);
            buffer = buffer % (2 ** bits);
        }
    }

    if (bits > 0)
        bytes.push((buffer << (8 - bits)) & 0xFF);

    const binary = bytes.map(b => String.fromCharCode(b)).join('');

    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function getHash() {
    const encoded = window.location.hash.slice(1);
    const data = [];

    if (encoded) {
        const len = encoded.length;
        const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/').padEnd(len + (4 - len % 4) % 4, '=');
        const binary = atob(base64);
        const bytes = Array.from(binary, c => c.charCodeAt(0));

        let buffer = 0;
        let bits = 0;

        for (const byte of bytes) {
            buffer = buffer * 256 + byte;
            bits += 8;

            while (bits >= packBits) {
                bits -= packBits;

                const value = Math.floor(buffer / (2 ** bits));
                buffer = buffer % (2 ** bits);

                data.push({
                    index: value >> rankBits,
                    rank: value & rankMask
                });
            }
        }
    }

    return data;
}

function setLink() {
    const hash = setHash();
    const base = location.href.split('#')[0];
    const url = hash ? `${base}#${hash}` : base;

    UILink.href = url;
    UILink.textContent = url;

    history.replaceState(null, '', url);
}

function initialize() {
    const items = getHash();

    items.forEach(data => {
        const option = UITitles.options[data.index];

        if (!option)
            return;

        const item = createListItem(option, data.index, data.rank);
        updateTitle(item);
    });

    updateList();

    UITitles.selectedIndex = 0;
    UIMaxed.textContent = getMaxedTitle();
}

UITitles.addEventListener('change', () => {
    const index = UITitles.selectedIndex;
    const option = UITitles.options[index];

    if (!option || option.disabled)
        return;

    createListItem(option, index);
    updateList();
});

initialize();