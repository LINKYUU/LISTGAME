// 1. Data mentah dari CSV Anda
const csvData = `
NAMA GAME,SIZE,KETERANGAN
PICO PARK,82.71 MB,Ringan
PICO PARK 2,227.65 MB,Ringan
25 To Life,1.99 GB,Ringan
9 Monkeys of Shaolin,6.94 GB,Sedang
A Plague Tale Innocence,43.58 GB,Berat
A Space for the Unbound,2.45 GB,Ringan
A Way Out,21.64 GB,Agak Berat
ACE COMBAT 7 SKIES UNKNOWN,64.07 GB,Berat
Age of Empires 3 Complete Collection,2.88 GB,Ringan
Age of Empires II Definitive Edition,32.94 GB,Agak Berat
Age of Empires III Definitive Edition,56.17 GB,Berat
Age of Empires IV,78.09 GB,Berat
Age of Mythology: Retold,24.73 GB,Agak Berat
Age of Wonders 4,25.50 GB,Agak Berat
Aircraft Carrier Survival,9.61 GB,Sedang
Alan Wake Remastered,39.67 GB,Agak Berat
Alan Wake 2,112.2 GB,Berat
Albatroz,41.27 GB,Berat
Alien Rogue Incursion Evolved Edition,21.0 GB,Agak Berat
"Altered Beast (En,Fr,De,Es,It)",2.2 GB,Ringan
American Truck Simulator,24.16 GB,Agak Berat
Amnesia Rebirth,36.46 GB,Agak Berat
Among Us,762.88 MB,Ringan
Ancestors The Humankind Odyssey,8.33 GB,Sedang
Animal Crossing,7.12 GB,Sedang
Animal Revolt Battle Simulator,2.34 GB,Ringan
AO International Tennis,13.36 GB,Sedang
AOE 3 Complete Edition,2.0 GB,Ringan
Aragami 2,9.19 GB,Sedang
Assassin Creed Odyssey,103.47 GB,Berat
Assassins Creed,7.0 GB,Sedang
Assassins Creed Unity,47.50 GB,Berat
Assassins Creed Brotherhood,7.50 GB,Sedang
Assassins Creed II Deluxe Edition,4.08 GB,Ringan
Assassins Creed III,16.44 GB,Sedang
Assassins Creed III Remastered,41.64 GB,Berat
Assassins Creed IV Black Flag,18.27 GB,Sedang
Assassins Creed Liberation HD,3.47 GB,Ringan
Assassins Creed Mirage,43.16 GB,Berat
Assassins Creed Revelations,9.44 GB,Sedang
Assassins Creed Rogue,12.24 GB,Sedang
Assassins Creed Syndicate Gold Edition,65.13 GB,Berat
Assassins Creed Valhalla,165.96 GB,Berat
Assetto Corsa,42.17 GB,Berat
Assetto Corsa Competizione,19.87 GB,Sedang
Asterix & Obelix Slap Them All! 2,2.44 GB,Ringan
Asterix & Obelix XXL 3: The Crystal Menhir,2.74 GB,Ringan
Asterix at the Olympic Games,2.08 GB,Ringan
Astral Chain,10.3 GB,Sedang
Atelier Ryza 2,13.58 GB,Sedang
Atelier Ryza 3 Alchemist of the End,31.55 GB,Agak Berat
Atelier Ryza Ever Darkness The Secret Hideout,23.35 GB,Agak Berat
Atelier Sophie 2,20.68 GB,Agak Berat
Attack on Titan,18.52 GB,Sedang
Attack on Titan 2 Final Battle,42.23 GB,Berat
Automaton The Car Company Tycoon Game,29.80 GB,Agak Berat
Avatar The Last Airbender Quest for Balance,9.03 GB,Sedang
AyoDance,19.74 GB,Sedang
Back 4 Blood,52.98 GB,Berat
Baisu,6.56 GB,Sedang
Bakery Shop Simulator,13.72 GB,Sedang
Bakugan Champions of Vestoria,1.78 GB,Ringan
Baldurs Gate 3,167.47 GB,Berat
Basara 2,4.72 GB,Ringan
Basara 3 Utage,12.5 GB,Sedang
Batman Arkham Asylum GOTY,8.41 GB,Sedang
Batman Arkham Origins,18.50 GB,Sedang
Batman Arkham City GOTY,19.49 GB,Sedang
Battle Realms,791.35 KB,Ringan
Battlefield 1,52.15 GB,Ringan
Battlefield 2: Complete Collection,3.89 GB,Ringan
Battlefield 3,16.52 GB,Sedang
Battlefield Bad Company 2,8.60 GB,Sedang
Battlefield 4,75.7 GB,Berat
Battlefield Hardline,51.1 GB,Berat
Battletoads,12.43 GB,Sedang
Bayonetta,12.64 GB,Sedang
Bayonetta 3,13.2 GB,Sedang
Beach Buggy Racing 2,0.6 GB,Ringan
BeamNG drive,56.52 GB,Berat
Bellwright,16.78 GB,Sedang
Beyond Two Souls,45.28 GB,Berat
Biomutant,26.57 GB,Agak Berat
Bioshock Infinite,46.65 GB,Berat
BioShock Remastered,21.76 GB,Agak Berat
Blasphemous 2,3.49 GB,Ringan
BLERCH Rebirth of Souls,75.4 GB,Berat
Bloody Spell,21.76 GB,Agak Berat
Bloons TD 6,1.78 GB,Ringan
BLUE REFLECTION Second Light,16.45 GB,Sedang
Blur,8.23 GB,Sedang
Borderlands 3,145.15 GB,Berat
Borderlands 2 Remastered,35.2 GB,Agak Berat
Bramble The Mountain King,7.59 GB,Sedang
Brigandine The Legend of Runersia,21.09 GB,Agak Berat
Bright Memory,4.34 GB,Ringan
Brothers A Tale of Two Sons,1.45 GB,Ringan
Builder Simulator,11.58 GB,Sedang
Bully Scholarship Edition,5.21 GB,Sedang
Bum Simulator,12.22 GB,Sedang
Burnout Paradise,3.02 GB,Ringan
Bus Simulator 21,16.14 GB,Sedang
C C Red Alert 3,14.95 GB,Sedang
Call of Duty 2,3.66 GB,Ringan
Call of Duty 4 Modern Warfare,6.76 GB,Sedang
Call of Duty Advanced Warfare,38.42 GB,Agak Berat
Call Of Duty Black Ops 4,157.74 GB,Berat
Call of Duty Black Ops III,127.98 GB,Berat
Call of Duty Ghosts,31.14 GB,Agak Berat
Call of Duty Modern Warfare III,60.2 GB,Berat
Call of Duty Modern Warfare Remastered,45.06 GB,Berat
Call of Duty World at War,7.25 GB,Sedang
Call of Duty: Modern Warfare 3,18.19 GB,Sedang
Call to Arms,44.99 GB,Berat
Call of Duty Modern Warfare 2,32.30 GB,Agak Berat
Call of Duty Modern Warfare 2 Remastered,67.9 GB,Berat
Call of Duty Vanguard Campaign,84.9 GB,Berat
Captain Tsubasa Rise of New Champions,49.64 GB,Berat
Car Mechanic Simulator 2021,25.83 GB,Agak Berat
Cars 2 The Video Game,1.73 GB,Ringan
CarX Street,18.09 GB,Sedang
Castle Of Illusion,929.71 KB,Ringan
Chained Together,7.78 GB,Sedang
Chocobo GP,6.66 GB,Sedang
Choo Choo Charles,2.40 GB,Ringan
CHRONO CROSS The Radical Dream,3.78 GB,Ringan
Citadel Forged with Fire,165.30 KB,Ringan
Cities Skylines,17.01 GB,Sedang
Cities Skylines II,66.30 GB,Berat
City Bus Manager,40.2 GB,Berat
Clair Obscur Expedition 33,44.30 GB,Berat
Command and Conquer General,2.89 GB,Ringan
Command And Conquer Remastered,25.44 GB,Agak Berat
Commandos 3 HD Remaster,7.73 GB,Sedang
Commandos Origins,31.40 GB,Agak Berat
Company of Heroes 2: Master Collection,42.98 GB,Berat
Company Of Heroes Complete Edition,9.23 GB,Sedang
Contraband Police,13.07 GB,Sedang
Control Ultimate Edition,44.93 GB,Berat
Cooking Simulator,13.70 GB,Sedang
Coral Island,13.12 GB,Sedang
Counter Strike: Global Offensive (CS:GO),31.02 GB,Agak Berat
Couple Cultivation Saves the World,32.13 GB,Agak Berat
Crash Bandicoot 4: It's About Time,24.40 GB,Agak Berat
Crash Bandicoot N Sane Trilogy,30.5 GB,Agak Berat
Crisis 2 ME,13.1 GB,Sedang
CRISIS CORE FINAL FANTASY VII REUNION,19.0 GB,Sedang
Crysis 1,5.88 GB,Sedang
Crysis 3,10.96 GB,Sedang
Crysis Remastered,21.02 GB,Agak Berat
CTR YUZU,6.28 GB,Sedang
Cult of the Lamb,1.99 GB,Ringan
Cuphead,5.71 GB,Sedang
Dakar Desert Rally,35.4 GB,Agak Berat
Dark Souls 2,18.86 GB,Sedang
Dark Souls III,26.25 GB,Agak Berat
DARK SOULS Prepare To Die Edition,3.92 GB,Ringan
DARK SOULS REMASTERED,7.25 GB,Sedang
Darksiders 2 Deathinitive Edition,13.1 GB,Sedang
Darksiders III,23.5 GB,Agak Berat
Darksiders Warmastered Edition,23.5 GB,Agak Berat
Dating Simulator,4.03 GB,Ringan
Days Gone,65.87 GB,Berat
Dead Island 2,48.23 GB,Berat
Dead Island Riptide DE,9.68 GB,Sedang
Dead Rising 4,64.13 GB,Berat
Dead Space 2,9.79 GB,Sedang
Dead Space 3,11.94 GB,Sedang
Dead Alive 6,57.0 GB,Berat
Dead Cells,4.3 GB,Ringan
Deadpool,6.57 GB,Sedang
Dead Rising 3,25.7 GB,Agak Berat
Dead Space,9.9 GB,Sedang
Death Stranding,67.08 GB,Berat
Def Jam Vendetta,2.30 GB,Ringan
Demon Slayer: Kimetsu no Yaiba,9.60 GB,Sedang
Desperados III,22.08 GB,Agak Berat
Devil May Cry 3: Special Edition,4.74 GB,Ringan
Devil May Cry 4 Special Edition,25.92 GB,Agak Berat
Devil May Cry 5,41.95 GB,Berat
Diablo II,2.0 GB,Ringan
Digimon Story Cyber Sleuth Complete,5.77 GB,Sedang
Digimon Survive,6.92 GB,Sedang
DiRT 3 Complete Edition,14.33 GB,Sedang
DiRT 5,40.69 GB,Berat
Dirt Rally 2 0,11.49 GB,Sedang
DiRT21,6.28 GB,Sedang
Disco Elysium,10.09 GB,Sedang
Disgaea 4 Complete,6.59 GB,Sedang
Disgaea 5,8.46 GB,Sedang
Disgaea 6 Complete,6.0 GB,Sedang
Dishonored 2,41.90 GB,Berat
Disney Pixar Cars Race O Rama,4.26 GB,Ringan
Disney Pixar Up,1.72 GB,Ringan
Disney Planes,7.08 GB,Sedang
Divinity Original Sin Enhanced Edition,11.92 GB,Sedang
Donkey Kong Country Tropical Freeze,7.21 GB,Sedang
DOOM,75.1 GB,Berat
DOOM Eternal,93.2 GB,Berat
Doraemon Story of Seasons,813.91 KB,Ringan
Downhill Domination,2.86 GB,Ringan
Dragon Age Inquisition,39.15 GB,Agak Berat
DRAGON BALL FighterZ,6.29 GB,Sedang
Dragon Ball XenoVerse,10.69 GB,Sedang
DRAGON BALL XENOVERSE 2,31.76 GB,Agak Berat
Dragon Ball Z Budokai 2,4.69 GB,Ringan
Dragon Ball Z: Kakarot,25.59 GB,Agak Berat
DRAGON BALL: SPARKING! ZERO,30.17 GB,Agak Berat
DRAGON QUEST BUILDERS 2,4.20 GB,Ringan
Dragon Age The Veilguard,94.6 GB,Berat
DreadOut,8.95 GB,Sedang
DreadOut 2,17.95 GB,Sedang
Driver San Francisco,6.82 GB,Sedang
Duck Season PC,5.80 GB,Sedang
Dying Light 2 Stay Human,74.04 GB,Berat
Dying Light The Following,47.86 GB,Berat
Dynasty warrior Gundam reborn,12.03 GB,Sedang
DYNASTY WARRIOR ORIGINS Terbaru,53.6 GB,Berat
Dynasty Warriors 6,5.0 GB,Sedang
Dynasty Warriors 7 Xtreme Legends DE,24.60 GB,Agak Berat
Dynasty Warriors 8 Empires,15.29 GB,Sedang
Dynasty Warriors 8 Xtreme Legends,14.33 GB,Sedang
Dynasty Warriors 9,47.00 GB,Berat
Dynasty Warriors 9 Empires,43.16 GB,Berat
Dynasty Warriors Gundam 3,8.65 GB,Sedang
EA Sports FC 25,12.26 GB,Sedang
Earth Defense Force 5,21.08 GB,Agak Berat
EARTH DEFENSE FORCE 6,43.28 GB,Berat
Ebola 2,428.71 MB,Ringan
Echoes of Yi Samsara,24.73 GB,Agak Berat
Pro Evolution Soccer 2021 / PES,80 GB,Berat
ELDEN RING Shadow of the Erdtree,69.40 GB,Berat
Euro Fishing,15.98 GB,Sedang
Euro Truck Simulator 2,34.03 GB,Agak Berat
Europa Universalis IV,9.82 GB,Sedang
Everdream Valley,2.84 GB,Ringan
Expeditions A MudRunner Game,24.22 GB,Agak Berat
Eyuden Chronicle Hundred Heroes,26.1 GB,Agak Berat
F1 2014,15.97 GB,Sedang
F1 2015,23.37 GB,Agak Berat
F1 2017,33.59 GB,Agak Berat
F1 2018 Headline Edition,39.48 GB,Agak Berat
F1 Race Stars,5.18 GB,Sedang
Fae Farm,2.79 GB,Ringan
Fallout 2,736.01 KB,Ringan
Fallout 3,9.0 GB,Sedang
Fallout 4,37.8 GB,Agak Berat
Fallout: New Vegas,9.68 GB,Sedang
Far Cry 3,13.14 GB,Sedang
Far Cry 4,32.57 GB,Agak Berat
FAR CRY 5,97.4 GB,Berat
Far Cry 6,140.68 GB,Berat
Far Cry New Dawn,47.52 GB,Berat
Far Cry Primal,20.65 GB,Agak Berat
Far: Changing Tides,3.51 GB,Ringan
Farm Manager 2021,11.4 GB,Sedang
Farming Simulator 22,39.96 GB,Agak Berat
Farming Simulator 19,15.8 GB,Sedang
Farming Simulator 25,40.8 GB,Berat
Fast Food Manager,4.82 GB,Ringan
Fatal Frame: Mask of the Lunar Eclipse,14.93 GB,Sedang
FATAL FURY City of the Wolves,35.20 GB,Agak Berat
Fate Extella,13.44 GB,Sedang
Feed and Grow Fish,1.47 GB,Ringan
FFXV,102.79 GB,Berat
FIFA 14 Ultimate Edition,22.71 GB,Agak Berat
FIFA 15,9.14 GB,Sedang
FIFA 16,32.78 GB,Agak Berat
FIFA 18,38.98 GB,Agak Berat
FIFA 19,33.53 GB,Agak Berat
FIFA 21 Legacy Edition,14.40 GB,Sedang
FIFA 22 Legacy Edition,13.45 GB,Sedang
FIFA 23 Ultimate Edition,50.89 GB,Berat
Fifa 24,15.82 GB,Sedang
Fifa Street 2,4.73 GB,Ringan
Fight Night Champion,5.67 GB,Sedang
FINAL FANTASY VII REBIRTH,161.0 GB,Berat
Final Fantasy X2 HD Remaster,38.69 GB,Agak Berat
FINAL FANTASY XII: The Zodiac Age,30.69 GB,Agak Berat
Final Fantasy XIII 2,28.94 GB,Agak Berat
FINAL FANTASY XVI,160.67 GB,Berat
Final Fantasy Type 0 HD,25.9 GB,Agak Berat
Final Fantasy VII Remake Intergrade,98.8 GB,Berat
Fire Emblem Three Houses,12.3 GB,Sedang
Fishing North Atlantic,13.88 GB,Sedang
Fita Street,4.73 GB,Ringan
Five Hearts Under One Roof,32.94 GB,Agak Berat
Five Nights at Freddys Help Wanted 2,7.89 GB,Sedang
Five Nights At Freddys Into The Pit,3.73 GB,Ringan
Five Nights at Freddys Security Breach,63.19 GB,Berat
Football Manager 2023,5.11 GB,Sedang
Football Manager 2021,8.7 GB,Sedang
Forza Horizon 3,65.52 GB,Berat
Forza Horizon 5,112.15 GB,Berat
FRONT MISSION 2 Remake,9.50 GB,Sedang
Frostpunk,9.64 GB,Sedang
Gas Station Simulator,15.04 GB,Sedang
Gears Of War,12.83 GB,Sedang
Gears of War 4,128.23 GB,Berat
Ghost Recon Future Soldier,14.89 GB,Sedang
Ghost of Tsushima Directors Cut,56.3 GB,Berat
Ghostwire: Tokyo Deluxe Edition,18.64 GB,Sedang
Goat Simulator 3,11.71 GB,Sedang
GOD EATER 2 Rage Burst,14.60 GB,Sedang
God Eater 3,30.68 GB,Agak Berat
God of War,67.39 GB,Berat
GOD OF WAR 3,23.37 GB,Agak Berat
God of War Ascension,16.47 GB,Sedang
God of War: Ghost of Olympus,1.62 GB,Ringan
God of War Ragnarok,112.0 GB,Berat
Godfall,51.11 GB,Berat
"Good Pizza, Great Pizza",1.73 GB,Ringan
Gran Turismo 4,5.3 GB,Sedang
Grand Theft Auto Vice City,1.5 GB,Ringan
Grand Theft Auto III,1.5 GB,Ringan
Grand Theft Auto San Andreas,4.92 GB,Ringan
Grand Theft Auto The Trilogy,33.38 GB,Agak Berat
Grand Theft Auto V,119.71 GB,Berat
Green Hell,10.33 GB,Sedang
Grid 2 Reloaded,11.08 GB,Sedang
GRID Autosport,16.23 GB,Sedang
Grounded,30.82 GB,Agak Berat
GUILTY GEAR STRIVE,27.41 GB,Agak Berat
Guitar Hero rocks the 80s,2.0 GB,Ringan
Guitar Hero 5,8.5 GB,Sedang
Guitar Hero Indonesia vol 3,2.73 GB,Ringan
Guitar Hero Metallica,8.48 GB,Sedang
GUNDAM BREAKER 4,10.57 GB,Sedang
Gundam Extreme Vs Full Boost,9.00 GB,Sedang
GYLT,6.85 GB,Sedang
HADES,11.63 GB,Sedang
Halo Infinite,48.7 GB,Berat
Halo The Master Chief Collection,140.8 GB,Berat
Harvest Moon One World,989.51 KB,Ringan
Harvest Moon: Light of Hope,890.68 MB,Ringan
Hearts of Iron IV,9.7 GB,Sedang
Hell Is Us,21.5 GB,Agak Berat
Hellblade: Senua's Sacrifice,19.95 GB,Sedang
Hello Neighbor,50.8 GB,Berat
Hitman Absolution,24.76 GB,Agak Berat
Hitman The Complete First Season,68.86 GB,Berat
Hitman 3,75.9 GB,Berat
Hogwarts Legacy Deluxe Edition,76.48 GB,Berat
Hollow Knight: Silksong,7.94 GB,Sedang
Home Sweet Home,11.23 GB,Sedang
Homefront,9.93 GB,Sedang
Horizon Zero Dawn Complete Edition,75.74 GB,Berat
HOT WHEELS UNLEASHED,28.24 GB,Agak Berat
House Builder,29.32 GB,Agak Berat
House Flipper 2,12.67 GB,Sedang
Human Fall Flat,5.26 GB,Sedang
Humaniz,26.73 GB,Agak Berat
HUMANKIND,36.15 GB,Agak Berat
Hunting Simulator 2,15.4 GB,Sedang
Hyrule Warriors: Age of Calamity,11.51 GB,Sedang
I Am Fish,10.78 GB,Sedang
IBILIS,12.09 GB,Sedang
Ice Age 3: Dawn of the Dinosaurs,3.44 GB,Ringan
Immortals Fenyx Rising,56.03 GB,Berat
INDIKA,51.0 GB,Berat
INDORIYIX,23.34 GB,Agak Berat
Internet Cafe Simulator 2,7.01 GB,Sedang
Into The Dead Our Darkest Days,6.01 GB,Sedang
Jackie Chan Adventures,1.6 GB,Ringan
JDM Japanese Drift Master,14.86 GB,Sedang
Judgment,37.7 GB,Agak Berat
Juiced 2 Hot Import Nights,1.68 GB,Ringan
Jujutsu Kaisen CC,13.39 GB,Sedang
Jump Force,46.88 GB,Berat
Jurassic World Evolution 2,12.75 GB,Sedang
Just Cause 4,52.36 GB,Berat
Justice League Heroes,2.65 GB,Ringan
Kamen Rider Climax Scramble,3.04 GB,Ringan
Kena: Bridge of Spirits,26.40 GB,Agak Berat
Kingdom Come Deliverance II,93.76 GB,Berat
Kingdom Hearts HD 2 8 Final Chapter,31.10 GB,Agak Berat
Kingdom Hearts III and Re Mind,50.35 GB,Berat
Kirby and the Forgotten Land,6.25 GB,Sedang
Kirby's Return to Dream Land Deluxe,5.48 GB,Sedang
LA Noire,14.17 GB,Sedang
Le Mans Ultimate,29.75 GB,Agak Berat
Left 4 Dead 2,14.7 GB,Sedang
Legend of Mana,9.62 GB,Sedang
LEGO 2K Drive,10.81 GB,Sedang
LEGO Batman 3 Beyond Gotham,8.38 GB,Sedang
LEGO City Undercover,18.12 GB,Sedang
LEGO DC Super Villains,18.53 GB,Sedang
LEGO Horizon Adventures,14.84 GB,Sedang
LEGO Marvel Avengers,25.33 GB,Agak Berat
LEGO Marvel Super Heroes 2,24.64 GB,Agak Berat
LEGO Star Wars: The Skywalker Saga,39.99 GB,Agak Berat
Lies of P,41.50 GB,Berat
Life is Strange Double Exposure,24.10 GB,Agak Berat
Life is Strange Remastered,43.78 GB,Berat
Little Nightmares II,21.99 GB,Agak Berat
Lords of the Fallen,34.68 GB,Agak Berat
Lost Skies,16.46 GB,Sedang
LUIGI MANSION 3,7.6 GB,Sedang
Luigi's Mansion 2,6.62 GB,Sedang
Mad Max,34.86 GB,Agak Berat
Mafia III Definitive Edition,56.07 GB,Berat
Mafia: Definitive Edition,37.29 GB,Agak Berat
Maneater,18.43 GB,Sedang
Manor Lords 2,12.82 GB,Sedang
Mario Kart 8,7.53 GB,Sedang
Marvel Spider Man Miles Morales,59.65 GB,Berat
Marvels Spider Man Remastered,70.40 GB,Berat
Marvels Avengers,63.7 GB,Berat
Mass Effect Andromeda,49.48 GB,Berat
Max Payne 3,33.02 GB,Agak Berat
Medal Of Honor,7.78 GB,Sedang
Medieval Dynasty,9.61 GB,Sedang
MELTY BLOOD TYPE LUMINA,12.73 GB,Sedang
Metal Gear Rising: Revengeance,25.81 GB,Agak Berat
METAL GEAR SOLID DELTA SNAKE EATER,98.8 GB,Berat
Metaphor Refantazio,85.33 GB,Berat
Metro Exodus Gold Edition,81.8 GB,Berat
Middle Earth Shadow of War,114.99 GB,Berat
Minecraft Dungeons,5.66 GB,Sedang
Minecraft Legends,11.03 GB,Sedang
Mist Survival,25.70 GB,Agak Berat
Monster Hunter Rise,36.17 GB,Agak Berat
Monster Hunter Stories 2,28.0 GB,Agak Berat
Monster Truck Championship,27.61 GB,Agak Berat
Monster Hunter World Iceborne,53.8 GB,Berat
Mortal Kombat XL,38.85 GB,Agak Berat
Mortal Kombat 11,152.9 GB,Berat
MotoGP 23,26.15 GB,Agak Berat
MotoGP 24,25.65 GB,Agak Berat
MotoGP 25,26.00 GB,Agak Berat
Mount & Blade II Bannerlord,49.4 GB,Berat
MX vs ATV Legends,38.22 GB,Agak Berat
MXGP 2022,31.11 GB,Agak Berat
MY HERO ONES JUSTICE 2,12.5 GB,Sedang
My Time at Sandrock,29.3 GB,Agak Berat
NARUTO SHIPPUDEN Ultimate Ninja STORM 4,40.82 GB,Berat
NARUTO TO BORUTO SHINOBI STRIKER,29.99 GB,Agak Berat
NARUTO X BORUTO STORM CONNECTIONS,31.3 GB,Agak Berat
NBA 2K22,121.77 GB,Berat
Need for Speed Heat,32.0 GB,Agak Berat
Need for Speed: Payback,28.71 GB,Agak Berat
NieR Automata,50.46 GB,Berat
NieR Replicant,26.29 GB,Agak Berat
Nioh 2 Complete Edition,80.25 GB,Berat
No Man Sky,23.27 GB,Agak Berat
ONE PIECE PIRATE WARRIORS 4,27.44 GB,Agak Berat
ONE PIECE ODYSSEY,33.0 GB,Agak Berat
ONE PUNCH MAN A HERO NOBODY KNOWS,7.8 GB,Sedang
Outpost Infinity Siege,38.95 GB,Agak Berat
Pacific Drive,20.64 GB,Agak Berat
PAYDAY 2,86.6 GB,Berat
PC Building Simulator 2,29.59 GB,Agak Berat
Persona 5 Royal,34.26 GB,Agak Berat
It Takes Two,50 GB,Berat
Persona 5 Strikers,25.03 GB,Agak Berat
Plants Vs Zombies GOTY,48.07 GB,Berat
Poppy Playtime Chapter 3,38.3 GB,Agak Berat
Project Cars 3,51.85 GB,Berat
Ranch Simulator,21.49 GB,Agak Berat
Ratchet and Clank Rift Apart,40.7 GB,Berat
Ready or Not Dark Waters,68.5 GB,Berat
Resident Evil 2 Remake,25.16 GB,Agak Berat
Resident Evil 3 Remake,24.95 GB,Agak Berat
Resident Evil 4 REMAKE,60.40 GB,Berat
Resident Evil Village,39.19 GB,Agak Berat
RiDE 4,49.10 GB,Berat
Rise of the Tomb Raider,37.67 GB,Agak Berat
Ronin,156.52 GB,Berat
Samurai Warriors 4 DX,22.6 GB,Agak Berat
SCUM,67.0 GB,Berat
Sengoku Dynasty,20.07 GB,Agak Berat
Shadow of the Tomb Raider,39.9 GB,Agak Berat
Sid Meiers Civilization VI,22.50 GB,Agak Berat
SIFU,30.92 GB,Agak Berat
Silent Hill 2 Remake,35.84 GB,Agak Berat
SILENT HILL F,50.5 GB,Berat
Six Days in Fallujah,21.04 GB,Agak Berat
Sniper Elite 3,27.49 GB,Agak Berat
Sniper Ghost Warrior 3,60.25 GB,Berat
Sniper Elite 4 Deluxe Edition,70.6 GB,Berat
Snowrunner,42.55 GB,Berat
STAR WARS Jedi Survivor,136.22 GB,Berat
STAR WARS The Force Unleashed,30.1 GB,Agak Berat
StarCraft II: The Trilogy,20.89 GB,Agak Berat
STAR WARS Jedi Fallen Order,59.4 GB,Berat
State of Decay 2 Juggernaut Edition,21.39 GB,Agak Berat
Street Fighter V,47.83 GB,Berat
Sword and Fairy 7,68.19 GB,Berat
SWORD ART ONLINE Fractured Daydream,44.24 GB,Berat
SWORD ART ONLINE Alicization Lycoris,93.2 GB,Berat
TEKKEN 8,122.09 GB,Berat
TEKKEN 7,85.0 GB,Berat
Terminator Resistance,27.8 GB,Agak Berat
The Elder Scrolls V Skyrim Anniversary,24.83 GB,Agak Berat
The Elder Scrolls V Skyrim Special Edition,49.21 GB,Berat
The Evil Within 2,36.07 GB,Agak Berat
The Last of Us Part 1,83.94 GB,Berat
The Sims 4,78.5 GB,Berat
The Walking Dead Telltale Definitive,47.69 GB,Berat
The Witcher 3 Wild Hunt,93.39 GB,Berat
The Dark Pictures Anthology,65.3 GB,Berat
The Evil Within,57.1 GB,Berat
The Hunter Call of the Wild,83.3 GB,Berat
The Last of Us Part II Remastered,121.4 GB,Berat
The Sims 3,27.6 GB,Agak Berat
Thief 2014,24.72 GB,Agak Berat
Thief Simulator,21.20 GB,Agak Berat
Tintin Reporter,35.65 GB,Agak Berat
TinyHwks Pro1+2,24.2 GB,Agak Berat
Tom Clancys Ghost Recon Wildlands,90.12 GB,Berat
Total War Rome Remastered,55.33 GB,Berat
Total War WARHAMMER,34.90 GB,Agak Berat
Total War Warhammer 2,62.53 GB,Berat
Total War SHOGUN 2,24.2 GB,Agak Berat
TRAIN SIM WORLD Digital Deluxe,67.34 GB,Berat
Train Sim World 6,74.2 GB,Berat
Transport Fever 2,39.9 GB,Agak Berat
Tropico 6,24.09 GB,Agak Berat
UFC Undisputed 2010,43.16 GB,Berat
Ultimate Fishing Simulator 2,21.6 GB,Agak Berat
Uncharted 2 Among Thieves,23.67 GB,Agak Berat
Uncharted 3 Drake's Deception,41.08 GB,Berat
Uncharted Legacy of Thieves,104.11 GB,Berat
Until Dawn,62.32 GB,Berat
Upin and Ipin Universe,5.51 GB,Berat
Valkyrie Elysium,19.6 GB,Sedang
Viking Battle for Asgard,5.6 GB,Sedang
Warhammer 40000 Space Marine 2,71.76 GB,Berat
Warhammer 40000 Dawn of War III,30.0 GB,Agak Berat
WARRIORS OROCHI 3 Ultimate,21.4 GB,Agak Berat
Watch Dogs 2,49.65 GB,Berat
Watch Dogs Legion,111.0 GB,Berat
Way Of The Hunter,23.91 GB,Agak Berat
Wo Long Fallen Dynasty,56.64 GB,Berat
Wolfenstein II The New Colossus,62.18 GB,Berat
Wolfenstein The Old Blood,34.61 GB,Agak Berat
World War Z Aftermath,70.0 GB,Berat
WRC 10 FIA World Rally Championship,38.4 GB,Agak Berat
Wreckfest,33.68 GB,Agak Berat
Wuchang Fallen Feathers,47.67 GB,Berat
WWE 2K15,34.70 GB,Agak Berat
WWE 2K16,46.3 GB,Berat
WWE 2K18,46.1 GB,Berat
WWE 2K19,51.52 GB,Berat
WWE 2K22,50.70 GB,Berat
WWE 2K23,76.79 GB,Berat
WWE 2K24 Bray Wyatt Edition,99.1 GB,Berat
WWE 2K25,101.8 GB,Berat
Yakuza 3 Remastered,26.44 GB,Agak Berat
Yakuza 4 Remastered,35.84 GB,Agak Berat
Yakuza 5 Remastered,32.91 GB,Agak Berat
Yakuza 6 The Song of Life,40.88 GB,Berat
Yakuza Kiwami,21.37 GB,Agak Berat
Yakuza Kiwami 2,43.02 GB,Berat
Yakuza Like a Dragon,59.11 GB,Berat
Yakuza 0,25.7 GB,Agak Berat
Ys VIII Lacrimosa of Dana,29.38 GB,Agak Berat
Zombie Army 4,59.07 GB,Berat
Ninja Gaiden 4,40 GB,Berat
The Crew 2,40 GB,Berat
Little Nightmares 3,15 GB,Agak Berat
DIABLO 2 RESURRETED INFERNAL,30 GB,Berat
Poppy Playtime Chapter 5,30 GB,Berat
REANIMAL,5 GB,Sedang
RIDE 6,40 GB,Berat
STARSAND ISLAND,2 GB,Ringan
TOTAL WAR PHARAOH,40 GB,Berat
NIOH 3,80 GB,Berat
DRAGON QUEAST VII,10 GB,Sedang
COD MW 3 2023,40 GB,Berat
HOLLOW KNIGHT SILKSONG,5 GB,Sedang
HYTALE,3 GB,Sedang
MY HERO ACADEMIA ALL JUSTICE,10 GB,Berat
CAIRN,2 GB,Sedang
STORY OF SEASON GRAND BAZZAR,5 GB,Sedang
`;
