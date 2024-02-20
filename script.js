//sidebar 
const menuItmes = document.querySelectorAll(".menu-item");

const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector(".messages")
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
// sidebar
//for remove active class all menu items 
const changeActiveItems = () => {
    menuItmes.forEach(item => {
        item.classList.remove('active')
    })
}
menuItmes.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItems()
        item.classList.add('active')
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = "none"
        }
    })
})
// messages

// search messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = "none"
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messagesNotification.querySelector('.notification-count').style.display = "none"
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})

// theme customization 

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme")
// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid'
}
// close modal 
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = "none"
    }
}
themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);

// for changing the fonts 
const fontSizes = document.querySelectorAll(".choose-size")
fontSizes.forEach(size => {
    let fontSizes;
})