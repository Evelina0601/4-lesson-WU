const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
        if (!tabs.children[i].children.length)
            el.classList.add('active')
    }
}

const openSubmenu = () => {
    document.getElementById('subname').style.display = 'none'
    document.getElementById('subtabs').style.display = 'flex'
}

const closeSubmenu = () => {
    document.getElementById('subname').style.display = 'block'
    document.getElementById('subtabs').style.display = 'none'
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn
    if(e.target.children.length)
        openSubmenu()
    changeClass(e.target)
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active')
        if(content[i].dataset.content === currTab)
            content[i].classList.add('active')
    }
})
