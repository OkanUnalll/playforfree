// ! ------------- DATA TRANSFER

const sliderDatabase = [
    {
        name : 'Cyberpunk 2077',
        metacritic : '86/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/cyberpunk-2077?ftag=MCD-06-10aaa1f',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
        ],
        categorys : [
            '<div class="categorys__item sale"><h4>İNDİRİM</h4></div>',
        ],
        description : 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis...',
        hrefLink : 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
        store : 'img/logo/platform-logos/steam-logo.png',
        gameCover : 'img/games-img/cyberpunk-2077-1920x1080.jpg',
    },

    {
        name : 'XCOM 2',
        metacritic : '88/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/xcom-2',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/linux-logo-style-2.png" alt=""></li>',
        ],
        categorys : [
            '<div class="categorys__item infinity-free"><h4>ÜCRETSİZ</h4></div>',
        ],
        description : 'XCOM 2 is the sequel to XCOM: Enemy Unknown, the 2012 award-winning strategy game of the year.',
        hrefLink : 'https://store.epicgames.com/tr/p/xcom-2',
        store : 'img/logo/platform-logos/epicgames-logo.png',
        gameCover : 'img/games-img/xcom-2-1920x1080.jpg',
    }
];

// SLIDER DYNAMIC
const btnSliderScrollLeft = document.querySelector('.btn__slider-scroll-left');
const btnSliderScrollRight = document.querySelector('.btn__slider-scroll-right');

var index = 0;
sliderScroll(index);
var settings = {
    duration : '2000',
    move : true
}
var intervar;
init(settings);

btnSliderScrollRight.addEventListener('click', () => {
    index++;
    sliderScroll(index);
});


btnSliderScrollLeft.addEventListener('click', () => {
    index--;
    sliderScroll(index);
});

function sliderScroll(i){
    index = i;
    
    if(index < 0){
        index = sliderDatabase.length - 1;
    }
    if(index >= sliderDatabase.length){
        index = 0;
    }
    
    // game Cover
    document.querySelector('.slider__img').setAttribute('src', sliderDatabase[index].gameCover);
    // game Name
    document.querySelector('.slider__game-name').textContent = sliderDatabase[index].name;
    // store
    document.querySelector('.slider__distributed_platform-img').setAttribute('src', sliderDatabase[index].store);
    // metacritic
    document.querySelector('.slider__metacritic-score__score').textContent = sliderDatabase[index].metacritic;
    // metacritic link
    document.querySelector('.slider__metacritic-score').setAttribute('href', sliderDatabase[index].metacriticLink);
    // platforms
    document.querySelector('.slider__platforms__items').innerHTML = '';
    for(let i = 0; i < sliderDatabase[index].platforms.length; i++){
        document.querySelector('.slider__platforms__items').innerHTML += sliderDatabase[index].platforms[i];
    };
    // categorys
    document.querySelector('.slider1__categorys').innerHTML = '';
    for(let i = 0; i < sliderDatabase[index].categorys.length; i++){
        document.querySelector('.slider1__categorys').innerHTML += sliderDatabase[index].categorys[i];
    }
    // description
    document.querySelector('.slider__game-description').textContent = sliderDatabase[index].description;
    // btn Slider Game Examine
    document.querySelector('.btn__slider-game-examine').setAttribute('href', sliderDatabase[index].hrefLink);
};

// slider set time out
document.querySelector('.slider').addEventListener('mouseenter', () => {
    settings.move = false;
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
    settings.move = true;
});

document.querySelectorAll('.btn__slider-scroll').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        settings.move = false;
    });

    item.addEventListener('mouseleave', () => {
        settings.move = true;
    });
});

function init(settings){
    intervar = setInterval(function(){
        if(settings.move){
            index++;
        }
    }, settings.duration)
}

// ! ------------- FREE GAMES DATA
const games = [
    {
        name : 'Insurmountable',
        metacritic : '75/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/insurmountable',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box windowsP',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>ÜCRETSİZ</h4></div>',
        ],
        description : 'Yalnız bir dağcı olarak çeşitli arazilerle yüzleş ve tırmanışın sayısız tehlikesi karşısında hayatta kal! Riskli bir çevrede pek çok zorlu karar seni bekliyor. Dağda tırman ve aşılamaz yüksekliklerin üstesinden gel!',
        hrefLink : 'https://store.epicgames.com/tr/p/insurmountable-b02c31',
        store : 'img/logo/platform-logos/epicgames-logo.png',
        gameCover : 'img/games-img/insurmountable1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 21.04.2022',
    },

    {
        name : 'XCOM 2',
        metacritic : '88/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/xcom-2',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box windowsP',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>ÜCRETSİZ</h4></div>',
        ],
        description : 'Dünyayı uzaylılar yönetiyor ancak şeytani planlarını gizliyorlar. Bir gerilla kuvvetinin lideri olarak, uzaylı tehdidini yok etmek ve insan ırkını kurtarmak için küresel bir direniş başlatmalısın.',
        hrefLink : 'https://store.epicgames.com/tr/p/xcom-2',
        store : 'img/logo/platform-logos/epicgames-logo.png',
        gameCover : 'img/games-img/xcom-2-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 21.04.2022',
    },

    {
        name : 'Elder Scrolls Online',
        metacritic : '80/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/the-elder-scrolls-online-tamriel-unlimited?ftag=MCD-06-10aaa1f',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box windowsP macosP',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>HAFTA BOYU ÜCRETSİZ</h4></div>',
        ],
        description : "Ödüllü çevrimiçi çok oyunculu RYO'da 20 milyondan fazla oyuncuya sen de katıl, yaşayan bir Elder Scrolls dünyasındaki sürekli genişleyen hikâyeyi deneyimle",
        hrefLink : 'https://store.steampowered.com/app/306130/The_Elder_Scrolls_Online/',
        store : 'img/logo/platform-logos/steam-logo.png',
        gameCover : 'img/games-img/the-elder-scroll-online-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 26.04.2022',
    },

    {
        name : 'Tropico 6',
        metacritic : '78/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/tropico-6',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box windowsP xboxP',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>ÜCRETSİZ</h4></div>',
            '<div class="categorys__item infinity-free"><h4>GAME PASS</h4></div>',
        ],
        description : "El Presidente geri döndü! Tropico ada devletinde, demir yumruklu bir diktatör veya barışçı bir devlet adamı olarak oyna ve bu muz cumhuriyetinin geleceğini şekillendir.",
        hrefLink : 'https://www.xbox.com/tr-tr/games/store/tropico-6/c4kbhnhrpln6?rtc=2&activetab=pivot:overviewtab',
        store : 'img/logo/platform-logos/xbox-logo.png',
        gameCover : 'img/games-img/tropico-6-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: belirsiz',
    },

    {
        name : 'HOOD: OUTLAWS & LEGENDS',
        metacritic : '62/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/hood-outlaws-legends',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box playstationP',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>ÜCRETSİZ</h4></div>',
            '<div class="categorys__item infinity-free"><h4>PS PLUS</h4></div>',
        ],
        description : "In a violent, medieval world, outplay rival gangs in intense PvPvE multiplayer heists.",
        hrefLink : 'https://www.playstation.com/tr-tr/ps-plus/this-month-on-ps-plus/',
        store : 'img/logo/platform-logos/playstation-logo.png',
        gameCover : 'img/games-img/hood-outlaws-legends-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: belirsiz',
    },

    {
        name : 'FARMING SIMULATOR 19',
        metacritic : '73/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/farming-simulator-19',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box xboxP',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>ÜCRETSİZ</h4></div>',
            '<div class="categorys__item infinity-free"><h4>GAME PASS</h4></div>',
        ],
        description : "Bir numaralı tarım simülasyonu, grafikleri baştan sona yenilenmiş olarak ve gelmiş geçmiş en kapsamlı tarım deneyimi ile geri dönüyor! Modern bir çiftçi olun ve heyecan verici yeni tarım faaliyetleri, hasat edilecek mahsuller ve ilginizi bekleyen hayvanlarla dolu iki devasa Amerika ve Avrupa yerleşiminde çiftliğinizi geliştirin.",
        hrefLink : 'https://www.xbox.com/tr-tr/games/store/farming-simulator-19/bqw91w950j67?activetab=pivot:overviewtab&rtc=1',
        store : 'img/logo/platform-logos/xbox-logo.png',
        gameCover : 'img/games-img/farming-simulator-19-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: belirsiz',
    },
];

// free games data transfer

for(let i = 0; i < games.length; i++){
    // filter content content
    const filterContentContent = document.querySelector('.filter-content__content');
    
    // post box
    const postBox = document.createElement('div');
    postBox.className = games[i].platformClass;

    // post content slot1
    const postContentSlot1 = document.createElement('div');
    postContentSlot1.className = 'post-content__slot1';
    // game img
    const gameImg = document.createElement('img');
    gameImg.className = 'game-img';
    // post content slot1-2
    const postContentSlot1_2 = document.createElement('div');
    postContentSlot1_2.className = 'post-content__slot1-2';
    // game name href
    const gameNameHref = document.createElement('a');
    gameNameHref.className = 'game-name__href';
    gameNameHref.setAttribute('targer', '_blank');
    // game name
    const gameName = document.createElement('h2');
    gameName.className = 'game-name'
    // categorys
    const categorys = document.createElement('div');
    categorys.className = 'categorys costum-margin-1rem';
    
    // post content slot2
    const postContentSlot2 = document.createElement('div');
    postContentSlot2.className = 'post-content__slot2';
    // post content slot2 items
    const postContentSlot2Items = document.createElement('ul');
    postContentSlot2Items.className = 'post-content__slot2-items';
    // post content slot2 item
    const postContentSlot2Item1 = document.createElement('li');
    postContentSlot2Item1.className = 'post-content__slot2-item';
    // metacritic score
    const metacriticScore = document.createElement('a');
    metacriticScore.className = 'metacritic-score';
    metacriticScore.setAttribute('target', '_blank');
    // metacritic score star
    const metacriticScoreStar = document.createElement('i');
    metacriticScoreStar.className = 'fa-solid fa-star metacritic-score__star';
    // metacritic score: score
    const metacriticScoreScore = document.createElement('h3');
    metacriticScoreScore.className = 'metacritic-score__score';
    // post content slot2 item
    const postContentSlot2Item2 = document.createElement('li');
    postContentSlot2Item2.className = 'post-content__slot2-item';
    // platforms
    const platforms = document.createElement('div');
    platforms.className = 'platforms';
    // platforms text
    const platformsText = document.createElement('h3');
    platformsText.textContent = 'Platformlar: ';
    // platforms items
    const platformsItems = document.createElement('ul');
    platformsItems.className = 'platforms__items';
    // post content slot2 item
    const postContentSlot2Item3 = document.createElement('li');
    postContentSlot2Item3.className = 'post-content__slot2-item';
    // last date
    const lastDate = document.createElement('div');
    lastDate.className = 'last-date';
    // last date text
    const lastDateText = document.createElement('p');
    lastDateText.className = 'last-date__text';

    // post content slot3
    const postContentSlot3 = document.createElement('div');
    postContentSlot3.className = 'post-content__slot3';
    // post box distributed platform
    const postBoxDistributedPlatform = document.createElement('div');
    postBoxDistributedPlatform.className = 'post-box__distributed_platform distributed_platform';
    // post box distributed platform img
    const postBoxDistributedPlatformImg = document.createElement('img');
    postBoxDistributedPlatformImg.className = 'post-box__distributed_platform-img distributed_platform-img'

    // APPEND CHILD
    filterContentContent.appendChild(postBox);
    
    postBox.appendChild(postContentSlot1);
    postBox.appendChild(postContentSlot2);
    postBox.appendChild(postContentSlot3);

    postContentSlot1.appendChild(gameImg);
    postContentSlot1.appendChild(postContentSlot1_2);

    postContentSlot1_2.appendChild(gameNameHref);
    postContentSlot1_2.appendChild(categorys);

    gameNameHref.appendChild(gameName);
    
    postContentSlot2.appendChild(postContentSlot2Items);
    postContentSlot2Items.appendChild(postContentSlot2Item1);
    postContentSlot2Items.appendChild(postContentSlot2Item2);
    postContentSlot2Items.appendChild(postContentSlot2Item3);

    postContentSlot2Item1.appendChild(metacriticScore);

    metacriticScore.appendChild(metacriticScoreStar);
    metacriticScore.appendChild(metacriticScoreScore);

    postContentSlot2Item2.appendChild(platforms);
    platforms.appendChild(platformsText);
    platforms.appendChild(platformsItems);

    postContentSlot2Item3.appendChild(lastDate);

    lastDate.appendChild(lastDateText);

    postContentSlot3.appendChild(postBoxDistributedPlatform);

    postBoxDistributedPlatform.appendChild(postBoxDistributedPlatformImg);

    // Data Transfer
    gameImg.setAttribute('src', games[i].gameCover);
    gameNameHref.setAttribute('href', games[i].hrefLink);
    gameNameHref.setAttribute('target', '_blank')
    gameName.textContent = games[i].name;

    for(let a = 0; a < games[i].categorys.length; a++){
        categorys.innerHTML += games[i].categorys[a];
    };

    metacriticScore.setAttribute('href', games[i].metacriticLink);
    metacriticScoreScore.textContent = games[i].metacritic;


    
    for(let e = 0; e < games[i].platforms.length; e++){
        platformsItems.innerHTML += games[i].platforms[e];
    }
    
    lastDateText.textContent = games[i].lastDate;

    postBoxDistributedPlatformImg.setAttribute('src', games[i].store);
}



// filter free games
const filterContentContent = document.querySelector('.filter-content__content');
const filterContentFilterItems = document.querySelector('.filter-content__filter-items');

const allBtn = document.querySelector('#allFG');
const windowsBtn = document.querySelector('#windowsFG');
const macosBtn = document.querySelector('#macosFG');
const playstationBtn = document.querySelector('#playstationFG');
const xboxBtn = document.querySelector('#xboxFG');
const linuxBtn = document.querySelector('#linuxFG');

// content filter
allBtn.addEventListener('click', () => {    
    // ALL ACTIVE
    const postBox = document.getElementsByClassName('post-box');
    for(let i = 0; i < filterContentContent.children.length; i++){
        postBox[i].style.opacity = '1'; 
        setTimeout( () => {
        postBox[i].style.display = 'flex';
        }, 300);
    }

    allBtn.classList.add('active-filter');

    windowsBtn.classList.remove('active-filter');
    macosBtn.classList.remove('active-filter');
    linuxBtn.classList.remove('active-filter');
    playstationBtn.classList.remove('active-filter');
    xboxBtn.classList.remove('active-filter');
})

windowsBtn.addEventListener('click', () => {
    const postBox = document.getElementsByClassName('post-box');
    for(let r = 0; r < postBox.length; r++){
        postBox[r].style.opacity = '0'; 
        setTimeout(() => {
            postBox[r].style.display = 'none'
        }, 300)   
    }
    
    // active
    const windows = document.getElementsByClassName('windowsP');
    for(let w = 0; w < windows.length; w++){
        windows[w].style.opacity = '1';
        setTimeout(() => {
            windows[w].style.display = 'flex';
        }, 300);
    };

    windowsBtn.classList.add('active-filter');

    allBtn.classList.remove('active-filter');
    macosBtn.classList.remove('active-filter');
    linuxBtn.classList.remove('active-filter');
    playstationBtn.classList.remove('active-filter');
    xboxBtn.classList.remove('active-filter');
})

macosBtn.addEventListener('click', () => {
    const postBox = document.getElementsByClassName('post-box');
    for(let r = 0; r < postBox.length; r++){
        postBox[r].style.opacity = '0';
        setTimeout(() => {
            postBox[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const macos = document.getElementsByClassName('macosP');
    for(let s = 0; s < macos.length; s++){
        macos[s].style.opacity = '1';
        setTimeout(() => {
            macos[s].style.display = 'flex';
        }, 300)
    };

    macosBtn.classList.add('active-filter');

    allBtn.classList.remove('active-filter');
    windowsBtn.classList.remove('active-filter');
    linuxBtn.classList.remove('active-filter');
    playstationBtn.classList.remove('active-filter');
    xboxBtn.classList.remove('active-filter');
})

linuxBtn.addEventListener('click', () => {
    const postBox = document.getElementsByClassName('post-box');
    for(let r = 0; r < postBox.length; r++){
        postBox[r].style.opacity = '0';
        setTimeout(() => {
            postBox[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const linux = document.getElementsByClassName('linuxP');
    for(let s = 0; s < linux.length; s++){
        linux[s].style.opacity = '1';
        setTimeout(() => {
            linux[s].style.display = 'flex';
        }, 300)
    };

    linuxBtn.classList.add('active-filter');

    allBtn.classList.remove('active-filter');
    macosBtn.classList.remove('active-filter');
    windowsBtn.classList.remove('active-filter');
    playstationBtn.classList.remove('active-filter');
    xboxBtn.classList.remove('active-filter');
})

playstationBtn.addEventListener('click', () => {
    const postBox = document.getElementsByClassName('post-box');
    for(let r = 0; r < postBox.length; r++){
        postBox[r].style.opacity = '0';
        setTimeout(() => {
            postBox[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const playstation = document.getElementsByClassName('playstationP');
    for(let s = 0; s < playstation.length; s++){
        playstation[s].style.opacity = '1';
        setTimeout(() => {
            playstation[s].style.display = 'flex';
        }, 300)
    };

    playstationBtn.classList.add('active-filter');

    allBtn.classList.remove('active-filter');
    macosBtn.classList.remove('active-filter');
    linuxBtn.classList.remove('active-filter');
    windowsBtn.classList.remove('active-filter');
    xboxBtn.classList.remove('active-filter');
})

xboxBtn.addEventListener('click', () => {
    const postBox = document.getElementsByClassName('post-box');
    for(let r = 0; r < postBox.length; r++){
        postBox[r].style.opacity = '0';
        setTimeout(() => {
            postBox[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const xbox = document.getElementsByClassName('xboxP');
    for(let s = 0; s < xbox.length; s++){
        xbox[s].style.opacity = '1';
        setTimeout(() => {
            xbox[s].style.display = 'flex';
        }, 300)
    };

    xboxBtn.classList.add('active-filter');

    allBtn.classList.remove('active-filter');
    macosBtn.classList.remove('active-filter');
    linuxBtn.classList.remove('active-filter');
    playstationBtn.classList.remove('active-filter');
    windowsBtn.classList.remove('active-filter');
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ! ------------- SALE GAMES DATA
const gamesSale = [
    {
        name : "The Witcher 2: Assassin's of kings",
        metacritic : '88/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/the-witcher-2-assassins-of-kings?ftag=MCD-06-10aaa1f',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/linux-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box2 windowsS macosS linuxS',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>İNDİRİM</h4></div>',
        ],
        description : 'The second installment in the RPG saga about professional monster slayer Geralt of Rivia, The Witcher 2: Assassins of Kings spins a mature, thought-provoking tale to produce one of the most elaborate and unique role-playing games ever released on PC.',
        hrefLink : 'https://store.steampowered.com/app/20920/The_Witcher_2_Assassins_of_Kings_Enhanced_Edition/',
        store : 'img/logo/platform-logos/steam-logo.png',
        gameCover : 'img/games-img/the-witcher-2-assassins-of-kings-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 02.05.2022',
        oldPrice : '31 TL',
        newPrice : '4,65 TL',
    },

    {
        name : "Cyberpunk 2077",
        metacritic : '86/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/cyberpunk-2077?ftag=MCD-06-10aaa1f',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box2 windowsS',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>İNDİRİM</h4></div>',
        ],
        description : 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.',
        hrefLink : 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
        store : 'img/logo/platform-logos/steam-logo.png',
        gameCover : 'img/games-img/cyberpunk-2077-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 02.05.2022',
        oldPrice : '249 TL',
        newPrice : '124,50 TL',
    },

    {
        name : "The Witcher 3: Wild Hunt - Game of the Year Edition",
        metacritic : '93/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/the-witcher-3-wild-hunt?ftag=MCD-06-10aaa1f',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box2 windowsS',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>İNDİRİM</h4></div>',
            '<div class="categorys__item infinity-free"><h4>+DLC</h4></div>',
        ],
        description : 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.',
        hrefLink : 'https://store.steampowered.com/sub/124923/',
        store : 'img/logo/platform-logos/steam-logo.png',
        gameCover : 'img/games-img/the-witcher-3-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 02.05.2022',
        oldPrice : '74,99 TL',
        newPrice : '14,99 TL',
    },

    {
        name : "Football Manager 2022",
        metacritic : '85/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/football-manager-2022',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box2 windowsS macosS',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>İNDİRİM</h4></div>',
        ],
        description : 'The second installment in the RPG saga about professional monster slayer Geralt of Rivia, The Witcher 2: Assassins of Kings spins a mature, thought-provoking tale to produce one of the most elaborate and unique role-playing games ever released on PC.',
        hrefLink : 'https://store.steampowered.com/app/1569040/Football_Manager_2022/',
        store : 'img/logo/platform-logos/steam-logo.png',
        gameCover : 'img/games-img/football-manager-2022-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 02.05.2022',
        oldPrice : '499,00 TL',
        newPrice : '334,33 TL',
    },

    {
        name : "Call of Duty®: Black Ops III",
        metacritic : '73/100',
        metacriticLink : 'https://www.metacritic.com/game/pc/call-of-duty-black-ops-iii?ftag=MCD-06-10aaa1f',
        platforms : [
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            '<li class="platforms__item"><img class="platforms__item-icon" src="img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
        ],
        platformClass : 'post-box2 windowsS macosS',
        categorys : [
            '<div class="categorys__item infinity-free"><h4>İNDİRİM</h4></div>',
        ],
        description : 'Call of Duty®: Black Ops III Zombies Chronicles Edition includes the full base game plus the Zombies Chronicles content expansion.',
        hrefLink : 'https://store.steampowered.com/app/311210/Call_of_Duty_Black_Ops_III/',
        store : 'img/logo/platform-logos/steam-logo.png',
        gameCover : 'img/games-img/call-of-duty-black-ops-III-1920x1080.jpg',
        lastDate : 'Geçerlilik tarihi: 22.04.2022',
        oldPrice : '209,00 TL',
        newPrice : '68,97 TL',
    },
];

// sale games data transfer

for(let i = 0; i < gamesSale.length; i++){
    // filter content content
    const filterContentContent2 = document.querySelector('.filter-content__content2');
    
    // post box
    const postBox2 = document.createElement('div');
    postBox2.className = gamesSale[i].platformClass;

    // post content slot1
    const postContentSlot1 = document.createElement('div');
    postContentSlot1.className = 'post-content__slot1';
    // game img
    const gameImg = document.createElement('img');
    gameImg.className = 'game-img';
    // post content slot1-2
    const postContentSlot1_2 = document.createElement('div');
    postContentSlot1_2.className = 'post-content__slot1-2';
    // game name href
    const gameNameHref = document.createElement('a');
    gameNameHref.className = 'game-name__href';
    gameNameHref.setAttribute('targer', '_blank');
    // game name
    const gameName = document.createElement('h2');
    gameName.className = 'game-name'
    // categorys
    const categorys = document.createElement('div');
    categorys.className = 'categorys costum-margin-1rem';
    // game price
    const gamePrice = document.createElement('div');
    gamePrice.className = 'game-price';
    // game price old
    const gamePriceOld = document.createElement('h3');
    gamePriceOld.className = 'game-price__old margin-right-0-3rem';
    // game price new
    const gamePriceNew = document.createElement('h2');
    gamePriceNew.className = 'game-price__new';
    
    // post content slot2
    const postContentSlot2 = document.createElement('div');
    postContentSlot2.className = 'post-content__slot2';
    // post content slot2 items
    const postContentSlot2Items = document.createElement('ul');
    postContentSlot2Items.className = 'post-content__slot2-items';
    // post content slot2 item
    const postContentSlot2Item1 = document.createElement('li');
    postContentSlot2Item1.className = 'post-content__slot2-item';
    // metacritic score
    const metacriticScore = document.createElement('a');
    metacriticScore.className = 'metacritic-score';
    metacriticScore.setAttribute('target', '_blank');
    // metacritic score star
    const metacriticScoreStar = document.createElement('i');
    metacriticScoreStar.className = 'fa-solid fa-star metacritic-score__star';
    // metacritic score: score
    const metacriticScoreScore = document.createElement('h3');
    metacriticScoreScore.className = 'metacritic-score__score';
    // post content slot2 item
    const postContentSlot2Item2 = document.createElement('li');
    postContentSlot2Item2.className = 'post-content__slot2-item';
    // platforms
    const platforms = document.createElement('div');
    platforms.className = 'platforms';
    // platforms text
    const platformsText = document.createElement('h3');
    platformsText.textContent = 'Platformlar: ';
    // platforms items
    const platformsItems = document.createElement('ul');
    platformsItems.className = 'platforms__items';
    // post content slot2 item
    const postContentSlot2Item3 = document.createElement('li');
    postContentSlot2Item3.className = 'post-content__slot2-item';
    // last date
    const lastDate = document.createElement('div');
    lastDate.className = 'last-date';
    // last date text
    const lastDateText = document.createElement('p');
    lastDateText.className = 'last-date__text';

    // post content slot3
    const postContentSlot3 = document.createElement('div');
    postContentSlot3.className = 'post-content__slot3';
    // post box distributed platform
    const postBoxDistributedPlatform = document.createElement('div');
    postBoxDistributedPlatform.className = 'post-box__distributed_platform distributed_platform';
    // post box distributed platform img
    const postBoxDistributedPlatformImg = document.createElement('img');
    postBoxDistributedPlatformImg.className = 'post-box__distributed_platform-img distributed_platform-img'

    // APPEND CHILD
    filterContentContent2.appendChild(postBox2);
    
    postBox2.appendChild(postContentSlot1);
    postBox2.appendChild(postContentSlot2);
    postBox2.appendChild(postContentSlot3);

    postContentSlot1.appendChild(gameImg);
    postContentSlot1.appendChild(postContentSlot1_2);

    postContentSlot1_2.appendChild(gameNameHref);
    postContentSlot1_2.appendChild(categorys);
    postContentSlot1_2.appendChild(gamePrice);

    gameNameHref.appendChild(gameName);

    gamePrice.appendChild(gamePriceOld);
    gamePrice.appendChild(gamePriceNew);
    
    postContentSlot2.appendChild(postContentSlot2Items);
    postContentSlot2Items.appendChild(postContentSlot2Item1);
    postContentSlot2Items.appendChild(postContentSlot2Item2);
    postContentSlot2Items.appendChild(postContentSlot2Item3);

    postContentSlot2Item1.appendChild(metacriticScore);

    metacriticScore.appendChild(metacriticScoreStar);
    metacriticScore.appendChild(metacriticScoreScore);

    postContentSlot2Item2.appendChild(platforms);
    platforms.appendChild(platformsText);
    platforms.appendChild(platformsItems);

    postContentSlot2Item3.appendChild(lastDate);

    lastDate.appendChild(lastDateText);

    postContentSlot3.appendChild(postBoxDistributedPlatform);

    postBoxDistributedPlatform.appendChild(postBoxDistributedPlatformImg);

    // Data Transfer
    gameImg.setAttribute('src', gamesSale[i].gameCover);
    gameNameHref.setAttribute('href', gamesSale[i].hrefLink);
    gameNameHref.setAttribute('target', '_blank')
    gameName.textContent = gamesSale[i].name;
    gamePriceOld.textContent = gamesSale[i].oldPrice;
    gamePriceNew.textContent = gamesSale[i].newPrice;

    for(let a = 0; a < gamesSale[i].categorys.length; a++){
        categorys.innerHTML += gamesSale[i].categorys[a];
    };

    metacriticScore.setAttribute('href', gamesSale[i].metacriticLink);
    metacriticScoreScore.textContent = gamesSale[i].metacritic;


    
    for(let e = 0; e < gamesSale[i].platforms.length; e++){
        platformsItems.innerHTML += gamesSale[i].platforms[e];
    }
    
    lastDateText.textContent = gamesSale[i].lastDate;

    postBoxDistributedPlatformImg.setAttribute('src', gamesSale[i].store);
}



// filter free games
const filterContentContent2 = document.querySelector('.filter-content__content2');
const filterContentFilterItems2 = document.querySelector('.filter-content__filter-items2');

const allBtn2 = document.querySelector('#allSG');
const windowsBtn2 = document.querySelector('#windowsSG');
const macosBtn2 = document.querySelector('#macosSG');
const playstationBtn2 = document.querySelector('#playstationSG');
const xboxBtn2 = document.querySelector('#xboxSG');
const linuxBtn2 = document.querySelector('#linuxSG');

// content filter
allBtn2.addEventListener('click', () => {    
    // ALL ACTIVE
    const postBox2 = document.getElementsByClassName('post-box2');
    for(let i = 0; i < filterContentContent2.children.length; i++){
        postBox2[i].style.opacity = '1';
        setTimeout( () => {
        postBox2[i].style.display = 'flex';
        }, 300);
    }

    allBtn2.classList.add('active-filter');

    windowsBtn2.classList.remove('active-filter');
    macosBtn2.classList.remove('active-filter');
    linuxBtn2.classList.remove('active-filter');
    playstationBtn2.classList.remove('active-filter');
    xboxBtn2.classList.remove('active-filter');
})

windowsBtn2.addEventListener('click', () => {
    const postBox2 = document.getElementsByClassName('post-box2');
    for(let r = 0; r < postBox2.length; r++){
        postBox2[r].style.opacity = '0'; 
        setTimeout(() => {
            postBox2[r].style.display = 'none'
        }, 300)   
    }
    
    // active
    const windows2 = document.getElementsByClassName('windowsS');
    for(let w = 0; w < windows2.length; w++){
        windows2[w].style.opacity = '1';
        setTimeout(() => {
            windows2[w].style.display = 'flex';
        }, 300);
    };

    windowsBtn2.classList.add('active-filter');

    allBtn2.classList.remove('active-filter');
    macosBtn2.classList.remove('active-filter');
    linuxBtn2.classList.remove('active-filter');
    playstationBtn2.classList.remove('active-filter');
    xboxBtn2.classList.remove('active-filter');
})

macosBtn2.addEventListener('click', () => {
    const postBox2 = document.getElementsByClassName('post-box2');
    for(let r = 0; r < postBox2.length; r++){
        postBox2[r].style.opacity = '0';
        setTimeout(() => {
            postBox2[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const macos2 = document.getElementsByClassName('macosS');
    for(let s = 0; s < macos2.length; s++){
        macos2[s].style.opacity = '1';
        setTimeout(() => {
            macos2[s].style.display = 'flex';
        }, 300)
    };

    macosBtn2.classList.add('active-filter');

    allBtn2.classList.remove('active-filter');
    windowsBtn2.classList.remove('active-filter');
    linuxBtn2.classList.remove('active-filter');
    playstationBtn2.classList.remove('active-filter');
    xboxBtn2.classList.remove('active-filter');
})

linuxBtn2.addEventListener('click', () => {
    const postBox2 = document.getElementsByClassName('post-box2');
    for(let r = 0; r < postBox2.length; r++){
        postBox2[r].style.opacity = '0';
        setTimeout(() => {
            postBox2[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const linux2 = document.getElementsByClassName('linuxS');
    for(let s = 0; s < linux2.length; s++){
        linux2[s].style.opacity = '1';
        setTimeout(() => {
            linux2[s].style.display = 'flex';
        }, 300)
    };

    linuxBtn2.classList.add('active-filter');

    allBtn2.classList.remove('active-filter');
    macosBtn2.classList.remove('active-filter');
    windowsBtn2.classList.remove('active-filter');
    playstationBtn2.classList.remove('active-filter');
    xboxBtn2.classList.remove('active-filter');
})

playstationBtn2.addEventListener('click', () => {
    const postBox2 = document.getElementsByClassName('post-box2');
    for(let r = 0; r < postBox2.length; r++){
        postBox2[r].style.opacity = '0';
        setTimeout(() => {
            postBox2[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const playstation2 = document.getElementsByClassName('playstationS');
    for(let s = 0; s < playstation2.length; s++){
        playstation2[s].style.opacity = '1';
        setTimeout(() => {
            playstation2[s].style.display = 'flex';
        }, 300)
    };

    playstationBtn2.classList.add('active-filter');

    allBtn2.classList.remove('active-filter');
    macosBtn2.classList.remove('active-filter');
    linuxBtn2.classList.remove('active-filter');
    windowsBtn2.classList.remove('active-filter');
    xboxBtn2.classList.remove('active-filter');
})

xboxBtn2.addEventListener('click', () => {
    const postBox2 = document.getElementsByClassName('post-box2');
    for(let r = 0; r < postBox2.length; r++){
        postBox2[r].style.opacity = '0';
        setTimeout(() => {
            postBox2[r].style.display = 'none';
        }, 300);
    }
    
    // active
    const xbox2 = document.getElementsByClassName('xboxS');
    for(let s = 0; s < xbox2.length; s++){
        xbox2[s].style.opacity = '1';
        setTimeout(() => {
            xbox2[s].style.display = 'flex';
        }, 300)
    };

    xboxBtn2.classList.add('active-filter');

    allBtn2.classList.remove('active-filter');
    macosBtn2.classList.remove('active-filter');
    linuxBtn2.classList.remove('active-filter');
    playstationBtn2.classList.remove('active-filter');
    windowsBtn2.classList.remove('active-filter');
})

// ! ------------------------------------------------------------


