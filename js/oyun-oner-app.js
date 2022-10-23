// OYUN VERİLERİ
const games = {
    ortaCag : [
        {
            name : 'Kingdom Come: Deliverance',
            img : '../img/oyun-oner-imgs/kingdom-come-deliverance.png',
            metacritic : '76/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '13 Şub 2018',
            goStore : 'https://store.steampowered.com/app/379430/Kingdom_Come_Deliverance/',
        },
        {
            name : 'Crusader Kings III',
            img : '../img/oyun-oner-imgs/crusader-kings-iii.png',
            metacritic : '91/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/linux-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '1 Eyl 2020',
            goStore : 'https://store.steampowered.com/app/1158310/Crusader_Kings_III/',
        },
        {
            name : 'The Elder Scrolls IV: Oblivion',
            img : '../img/oyun-oner-imgs/elder-scrolls-iv-oblivion.png',
            metacritic : '94/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '11 Eyl 2007',
            goStore : 'https://store.steampowered.com/app/22330/The_Elder_Scrolls_IV_Oblivion_Game_of_the_Year_Edition/',
        },
        {
            name : 'Monster Hunter: World',
            img : '../img/oyun-oner-imgs/monster-hunter-world.png',
            metacritic : '88/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '9 Ağu 2018',
            goStore : 'https://store.steampowered.com/app/582010/Monster_Hunter_World/',
        },
        {
            name : 'Dark Messiah of Might & Magic',
            img : '../img/oyun-oner-imgs/dark-messiah-of-might-magic.png',
            metacritic : '72/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '25 Eki 2006',
            goStore : 'https://store.steampowered.com/app/2100/Dark_Messiah_of_Might__Magic/',
        },
        {
            name : 'Chivalry 2',
            img : '../img/oyun-oner-imgs/chilvary-ii.png',
            metacritic : '82/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '8 Haz 2021',
            goStore : 'https://store.epicgames.com/tr/p/chivalry-2',
        },
        {
            name : 'Lost Ark',
            img : '../img/oyun-oner-imgs/lost-ark.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '12 Şub 2022',
            goStore : 'https://store.steampowered.com/app/1599340/Lost_Ark/',
        },
        {
            name : 'Ryse: Son of Rome',
            img : '../img/oyun-oner-imgs/ryse-son-of-rome.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '10 Eki 2014',
            goStore : 'https://store.steampowered.com/app/302510/Ryse_Son_of_Rome/',
        },
        {
            name : 'Warhammer: Vermintide 2',
            img : '../img/oyun-oner-imgs/warhammer-vermintide-2.png',
            metacritic : '82/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '8 Mar 2018',
            goStore : 'https://store.steampowered.com/app/552500/Warhammer_Vermintide_2/',
        },
        {
            name : 'MORDHAU',
            img : '../img/oyun-oner-imgs/mordhau.png',
            metacritic : '81/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '29 Nis 2019',
            goStore : 'https://store.steampowered.com/app/629760/MORDHAU/',
        },
        {
            name : 'A Plague Tale: Innocence',
            img : '../img/oyun-oner-imgs/a-plague-tale-innocence.png',
            metacritic : '81/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '14 May 2019',
            goStore : 'https://store.steampowered.com/app/752590/A_Plague_Tale_Innocence/',
        },
    ],
    macera : [
        {
            name : 'Wartales',
            img : '../img/oyun-oner-imgs/wartales.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '1 Ara 2021',
            goStore : 'https://store.steampowered.com/app/1527950/Wartales/',
        },
        {
            name : 'Satisfactory',
            img : '../img/oyun-oner-imgs/satisfactory.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '8 Haz 2020',
            goStore : 'https://store.steampowered.com/app/526870/Satisfactory/',
        },
        {
            name : 'STAR WARS™ SHADOWS OF THE EMPIRE',
            img : '../img/oyun-oner-imgs/star-wars-shadows-of-the-empire.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '17 Eyl 1997',
            goStore : 'https://store.steampowered.com/app/560170/STAR_WARS_SHADOWS_OF_THE_EMPIRE/',
        },
        {
            name : 'Alice: Madness Returns',
            img : '../img/oyun-oner-imgs/alice-madness-returns.png',
            metacritic : '75/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '17 Haz 2011',
            goStore : 'https://store.steampowered.com/app/19680/Alice_Madness_Returns/',
        },
        {
            name : 'Marcella Moon: Saboteurs on the River',
            img : '../img/oyun-oner-imgs/marcella-moon.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '29 Eki 2020',
            goStore : 'https://store.steampowered.com/app/1437520/Marcella_Moon_Saboteurs_on_the_River/',
        },
    ],
    aksiyon : [
        {
            name : 'Immortal: Unchained',
            img : '../img/oyun-oner-imgs/immortal-unchained.png',
            metacritic : '63/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '7 Eyl 2018',
            goStore : 'https://store.steampowered.com/app/369440/Immortal_Unchained/',
        },
        {
            name : 'Insurgency: Sandstorm',
            img : '../img/oyun-oner-imgs/insurgency-sandstorm.png',
            metacritic : '78/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '12 Ara 2018',
            goStore : 'https://store.steampowered.com/app/581320/Insurgency_Sandstorm/',
        },
        {
            name : 'Sniper Elite 4',
            img : '../img/oyun-oner-imgs/sniper-elite-4.png',
            metacritic : '76/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '14 Şub 2017',
            goStore : 'https://store.steampowered.com/app/312660/Sniper_Elite_4/',
        },
        {
            name : 'Saints Row IV',
            img : '../img/oyun-oner-imgs/saints-row-iv.png',
            metacritic : '86/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '23 Ağu 2013',
            goStore : 'https://store.steampowered.com/app/206420/Saints_Row_IV/',
        },
        {
            name : 'Katana ZERO',
            img : '../img/oyun-oner-imgs/katana-zero.png',
            metacritic : '83/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '18 Nis 2019',
            goStore : 'https://store.steampowered.com/app/460950/Katana_ZERO/',
        },
        {
            name : 'Remember Me',
            img : '../img/oyun-oner-imgs/remember-me.png',
            metacritic : '65/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '3 Haz 2013',
            goStore : 'https://store.steampowered.com/app/228300/Remember_Me/',
        },
        {
            name : 'Death to Spies: Moment of Truth',
            img : '../img/oyun-oner-imgs/death-to-spies-moment-of-truth.png',
            metacritic : '73/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '8 Ağu 2009',
            goStore : 'https://store.steampowered.com/app/34410/Death_to_Spies_Moment_of_Truth/',
        },
        {
            name : 'Dark Sector',
            img : '../img/oyun-oner-imgs/dark-sector.png',
            metacritic : '66/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '23 Mar 2009',
            goStore : 'https://store.steampowered.com/app/29900/Dark_Sector/',
        },
        {
            name : 'Singularity™',
            img : '../img/oyun-oner-imgs/singularity.png',
            metacritic : '76/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/linux-logo-style-2.png" alt=""></li>',
            ],
            date : '1 Tem 2010',
            goStore : 'https://store.steampowered.com/app/42670/Singularity/',
        },
        {
            name : 'Killer is Dead - Nightmare Edition',
            img : '../img/oyun-oner-imgs/killer-is-dead.png',
            metacritic : '76/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '23 May 2014',
            goStore : 'https://store.steampowered.com/app/261110/Killer_is_Dead__Nightmare_Edition/',
        },
        {
            name : 'Bulletstorm: Full Clip Edition',
            img : '../img/oyun-oner-imgs/bulletstorm.png',
            metacritic : '76/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '7 Nis 2017',
            goStore : 'https://store.steampowered.com/app/501590/Bulletstorm_Full_Clip_Edition/',
        },
        {
            name : 'Ready or Not',
            img : '../img/oyun-oner-imgs/ready-or-not.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '18 Ara 2021',
            goStore : 'https://store.steampowered.com/app/1144200/Ready_or_Not/',
        },
    ],
    yaris : [
        {
            name : 'F1® 2021',
            img : '../img/oyun-oner-imgs/f1-2021.png',
            metacritic : '86/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '15 Tem 2021',
            goStore : 'https://store.steampowered.com/app/1134570/F1_2021/',
        },
        {
            name : 'RIDE 4',
            img : '../img/oyun-oner-imgs/ride-4.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '8 Eki 2020',
            goStore : 'https://store.steampowered.com/app/1259980/RIDE_4/',
        },
        {
            name : 'BeamNG.drive',
            img : '../img/oyun-oner-imgs/beamng-drive.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '29 May 2015',
            goStore : 'https://store.steampowered.com/app/284160/BeamNGdrive/',
        },
    ],
    zenginHikaye : [
        {
            name : 'Pathologic 2',
            img : '../img/oyun-oner-imgs/pathologic-2.png',
            metacritic : '70/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '23 May 2019',
            goStore : 'https://store.steampowered.com/app/505230/Pathologic_2/',
        },
        {
            name : 'SOMA',
            img : '../img/oyun-oner-imgs/soma.png',
            metacritic : '84/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/linux-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
            ],
            date : '22 Eyl 2015',
            goStore : 'https://store.steampowered.com/app/282140/SOMA/',
        },
        {
            name : 'HALO: THE MASTER CHİEF COLLECTİON',
            img : '../img/oyun-oner-imgs/halo-the-master-chief.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
            ],
            date : '3 Ara 2019',
            goStore : 'https://store.steampowered.com/app/976730/Halo_The_Master_Chief_Collection/',
        },
        {
            name : 'We Were Here Together',
            img : '../img/oyun-oner-imgs/we-were-here-together.png',
            metacritic : '77/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '10 Eki 2019',
            goStore : 'https://store.steampowered.com/app/865360/We_Were_Here_Together/',
        },
        {
            name : 'Spec Ops: The Line',
            img : '../img/oyun-oner-imgs/spec-ops-the-line.png',
            metacritic : '77/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/apple-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '29 Haz 2012',
            goStore : 'https://store.steampowered.com/app/50300/Spec_Ops_The_Line/',
        },
    ],
    battleRoyale : [
        {
            name : 'NARAKA: BLADEPOINT',
            img : '../img/oyun-oner-imgs/naraka-bladepoint.png',
            metacritic : '71/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
            ],
            date : '12 Ağu 2021',
            goStore : 'https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/',
        },
        {
            name : 'Spellbreak',
            img : '../img/oyun-oner-imgs/spellbreak.png',
            metacritic : 'none',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '15 Ara 2020',
            goStore : 'https://store.steampowered.com/app/1399780/Spellbreak/',
        },
        {
            name : 'Hunt: Showdown',
            img : '../img/oyun-oner-imgs/hunt-showdown.png',
            metacritic : '81/100',
            platforms : [
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/windows-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/xbox-logo-style-2.png" alt=""></li>',
                '<li class="platforms__item"><img class="platforms__item-icon" src="../img/logo/platform-logos/playstation-logo-style-2.png" alt=""></li>',
            ],
            date : '27 Ağu 2019',
            goStore : 'https://store.steampowered.com/app/594650/Hunt_Showdown/',
        },
    ],
}

// KATEGORİ BUTTON'LARININ SEÇİLMESİ
const btnOrtaCag = document.querySelector('#orta-cag');
const btnMacera = document.querySelector('#macera');
const btnAksiyon = document.querySelector('#aksiyon');
const btnYaris = document.querySelector('#yaris');
const btnZenginHikaye = document.querySelector('#zenginHikaye');
const btnBattleRoyale = document.querySelector('#battleRoyale');

// GEREKLİ ELEMENTLERİN SEÇİLMESİ
const gameImg = document.querySelector('.game-suggestion__game-cover');
const gameName = document.querySelector('.game-suggestion__game-name');
const metacriticScoreScore = document.querySelector('.metacritic-score__score');
const platformsItems = document.querySelector('.platforms__items');
const gameSuggestionContainerId = document.querySelector('#game-suggestion-container');
const gameSuggestionGameDate = document.querySelector('.game-suggestion__game-date');
const gameSuggestionGameInfoRight = document.querySelector('.game-suggestion__game-info-right');
const gameLink = gameSuggestionGameInfoRight.querySelector('a');
const userSelectCategory = document.querySelector('.game-suggestion__user-select-category');
const totalSuggestion = document.querySelector('.game-suggestion__user-total-suggestion');
const resetGameBtn = document.querySelector('#reset-game');
const loadingMessage = document.querySelector('.loading-message');
const gameSuggestionGameInfoWrapper = document.querySelector('.game-suggestion__game-info-wrapper');

// random function'u için gerekli değişkenlerin atanması
var exportNumber;
var prev = [-1];
var categoryData;

// button'lara gerekli eventlerin sağlanması :
btnOrtaCag.addEventListener('click', (e) => {
    categorysFx(games.ortaCag.length, games.ortaCag, e);
    categoryData = 'ORTA ÇAĞ';

    // kullanıcının seçtiği kategorinin gösterilmesi
    userSelectCategory.textContent = e.target.textContent;
})

btnMacera.addEventListener('click', (e) => {
    categorysFx(games.macera.length, games.macera, e);
    categoryData = 'MACERA';

    // kullanıcının seçtiği kategorinin gösterilmesi
    userSelectCategory.textContent = e.target.textContent;
})

btnAksiyon.addEventListener('click', (e) => {
    categorysFx(games.aksiyon.length, games.aksiyon, e);
    categoryData = 'AKSİYON';

    // kullanıcının seçtiği kategorinin gösterilmesi
    userSelectCategory.textContent = e.target.textContent;
})

btnYaris.addEventListener('click', (e) => {
    categorysFx(games.yaris.length, games.yaris, e);
    categoryData = 'YARIŞ';

    // kullanıcının seçtiği kategorinin gösterilmesi
    userSelectCategory.textContent = e.target.textContent;
})

btnZenginHikaye.addEventListener('click', (e) => {
    categorysFx(games.zenginHikaye.length, games.zenginHikaye, e);
    categoryData = 'ZENGİN HİKAYE';

    // kullanıcının seçtiği kategorinin gösterilmesi
    userSelectCategory.textContent = e.target.textContent;
})

btnBattleRoyale.addEventListener('click', (e) => {
    categorysFx(games.battleRoyale.length, games.battleRoyale, e);
    categoryData = 'BATTLE ROYALE';

    // kullanıcının seçtiği kategorinin gösterilmesi
    userSelectCategory.textContent = e.target.textContent;
})

const scrollToSettings = {
    topSetting : 1050
}

// category button'larından herhangi birine 'click' yapıldığında çalıştırılacak fonksiyon :
function categorysFx(categoryLength, category, event){
    // platforms item'lerinin sıfırlanması
    platformsItems.innerHTML = '';

    console.log(categoryData);

    // random oyunun verilmesi
    var randomNumber = getRandom(categoryLength);
    
    // verilen random oyununun değerlere atanması ve index kontrolünün yapılması
    if(categoryLength === 0){
        // verilerin seçilmesi
        const notSelectedYet = document.querySelector('.not-selected-yet');
        const gameSuggestionContainer = document.querySelector('.game-suggestion__container');

        // verilerin kaybolması ve diğer verilerin gösterilmesi
        opacityDontShow(gameSuggestionContainer);
        opacityShow(notSelectedYet);
        notSelectedYet.querySelector('h2').textContent =  `Şimdilik size bu kategoride önerebileceğimiz başka oyun kalmadı. Diğer kategoriler ile devam edebilirsiniz. ${categoryData} kategorisdeki listeyi tekrar başlatmak için sayfayı yenileyiniz.` 

        // window scroll konumunun gerekli konuma getirilmesi
        window.scrollTo({
            top : scrollToSettings.topSetting,
        })
    } else{
        // verilen random oyununun değerlere atanması
        setRandomNumber(category[randomNumber]);
        
        // yükleme animasyonunun başlaması
        loadAnimation();

        // user verileri :  
        // seçilen kategorinin eşleştirilmesi
        userDataShow(event)
    }
    
    // bir önceki oyunun gelme olasılığının engellenmesi
    // ! prev = exportNumber
    category.splice(randomNumber, 1)
}

// random sayının üretilmesi
function getRandom(categoryLength){
    exportNumber = Math.floor(Math.random()*categoryLength);

    return exportNumber
}

// verilen random oyununun değerlere atanması
function setRandomNumber(categoryNumber){
    gameImg.setAttribute('src', categoryNumber.img);
    gameName.textContent = categoryNumber.name;
    metacriticScoreScore.textContent = categoryNumber.metacritic;
    gameName.textContent = categoryNumber.name;
    for(var i = 0; i < categoryNumber.platforms.length; i++){
        platformsItems.innerHTML += categoryNumber.platforms[i];
    };
    gameSuggestionGameDate.textContent = categoryNumber.date;
    gameLink.setAttribute('href', categoryNumber.goStore);
}

// verilerin kaybolması ve yeni verirnin tekrar yüklenmesi animasyonu :
function loadAnimation(){
    // yükleme animasyonunun başlaması
    // aşama 1 : verilerin seçilmesi
    const notSelectedYet = document.querySelector('.not-selected-yet');
    const gameSuggestionContainer = document.querySelector('.game-suggestion__container');
    const gameSuggestionGameInfoLeft = document.querySelector('.game-suggestion__game-info-left');

    // aşama 2 : window scroll konumunun gerekli konuma getirilmesi
    window.scrollTo({
        top : scrollToSettings.topSetting,
    })

    // aşama 3 : önceki verilerin kaybolması
    opacityDontShow(gameImg);
    opacityDontShow(gameSuggestionGameInfoLeft);
    opacityDontShow(gameSuggestionGameInfoRight);
    opacityDontShow(notSelectedYet);
    opacityShow(gameSuggestionContainer);
    gameSuggestionGameInfoWrapper.setAttribute('style', 'animation-name: loading-info-wrapper;');

    // load message'in anlık görülmesi
    loadingMessage.style.display = 'inline'

    // aşama 4 : verilerin tekrar load edilmesi
    setTimeout(() => {
        opacityShow(gameImg);
        opacityShow(gameSuggestionGameInfoLeft);
        opacityShow(gameSuggestionGameInfoRight);
        loadingMessage.style.display = 'none';
        gameSuggestionGameInfoWrapper.removeAttribute('style')
    }, 1000)
}

// opacity = 0 
function opacityDontShow(elementName){
    elementName.style.opacity = '0';
}

// opacity = 1
function opacityShow(elementName){
    elementName.style.opacity = '1';
}

// kullanıcı verilerini göster
function userDataShow(event){
    // önerilen toplam oyun sayısının gösterilmesi
    totalSuggestion.textContent++; 

    // reset game button
    resetGameBtn.setAttribute('data-category', event.target.dataset.category)
}

// reset game button'unun çalıştırılması
resetGameBtn.addEventListener('click', (e) => {
    runResetGameBtn(btnOrtaCag, games.ortaCag, e,'ORTA ÇAĞ');
    runResetGameBtn(btnMacera, games.macera, e, 'MACERA');
    runResetGameBtn(btnAksiyon, games.aksiyon, e, 'AKSİYON')
    runResetGameBtn(btnYaris, games.yaris, e, 'YARIŞ');
    runResetGameBtn(btnZenginHikaye, games.zenginHikaye, e, 'ZENGİN HİKAYE');
    runResetGameBtn(btnBattleRoyale, games.battleRoyale, e, 'BATTLE ROYALE');
})

// reset game button'unun koşullarının sağlanması
function runResetGameBtn(btnName, category, e, text){
    if(resetGameBtn.dataset.category == btnName.dataset.category){
        categorysFx(category.length,category, e);
        categoryData = text
    }
}

// HEADER AREA
// GEREKLİ ELEMENTLERİN SEÇİLMESİ
const btnHeader = document.querySelector('.btn__header');

// button işleminin sağlanması
btnHeader.addEventListener('click', () => {
    window.scrollTo({
        top : 597
    })
    
})

// NAVBAR
const navLogoImg = document.querySelector('.nav__logo-img'); 
const navContainer = document.querySelector('.nav__container');

window.addEventListener('scroll', () => {
    const moveScrollY = window.scrollY;
    
    if(moveScrollY > 0){
        navLogoImg.setAttribute('src', '../img/logo/play-for-free-logos/logo-style-1.png');
        navLogoImg.style.height = '50px';

        navContainer.style.padding = '.6rem';
    } else if(moveScrollY <= 0){
        navLogoImg.setAttribute('src', '../img/logo/play-for-free-logos/nav-logo.png');
        navLogoImg.style.height = '70px';

        navContainer.style.padding = '1rem';
    }
})