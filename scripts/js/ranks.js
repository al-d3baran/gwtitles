const ranks = {
    luxon: {
        link: "https://wiki.guildwars.com/wiki/Allegiance_rank",
        titles: [
            "Luxon Supporter",
            "Friend of the Luxons",
            "Companion of the Luxons",
            "Ally of the Luxons",
            "Sentinel of the Luxons",
            "Steward of the Luxons",
            "Defender of the Luxons",
            "Warden of the Luxons",
            "Bastion of the Luxons",
            "Champion of the Luxons",
            "Hero of the Luxons",
            "Savior of the Luxons"
        ]
    },
    kurzick: {
        link: "https://wiki.guildwars.com/wiki/Allegiance_rank",
        titles: [
            "Kurzick Supporter",
            "Friend of the Kurzicks",
            "Companion of the Kurzicks",
            "Ally of the Kurzicks",
            "Sentinel of the Kurzicks",
            "Steward of the Kurzicks",
            "Defender of the Kurzicks",
            "Warden of the Kurzicks",
            "Bastion of the Kurzicks",
            "Champion of the Kurzicks",
            "Hero of the Kurzicks",
            "Savior of the Kurzicks"
        ]
    },
    asura: {
        link: "https://wiki.guildwars.com/wiki/Asura_rank",
        titles: [
            "Not Too Smelly",
            "Not Too Dopey",
            "Not Too Clumsy",
            "Not Too Boring",
            "Not Too Annoying",
            "Not Too Grumpy",
            "Not Too Silly",
            "Not Too Lazy",
            "Not Too Foolish",
            "Not Too Shabby"
        ]
    },
    deldrimor: {
        link: "https://wiki.guildwars.com/wiki/Deldrimor_rank",
        titles: [
            "Delver",
            "Stout Delver",
            "Gutsy Delver",
            "Risky Delver",
            "Bold Delver",
            "Daring Delver",
            "Adventurous Delver",
            "Courageous Delver",
            "Epic Delver",
            "Legendary Delver"
        ]
    },
    ebon_vanguard: {
        link: "https://wiki.guildwars.com/wiki/Ebon_Vanguard_rank",
        titles: [
            "Agent",
            "Covert Agent",
            "Stealth Agent",
            "Mysterious Agent",
            "Shadow Agent",
            "Underground Agent",
            "Special Agent",
            "Valued Agent",
            "Superior Agent",
            "Secret Agent"
        ]
    },
    lightbringer: {
        link: "https://wiki.guildwars.com/wiki/Lightbringer_rank",
        titles: [
            "Lightbringer",
            "Adept Lightbringer",
            "Brave Lightbringer",
            "Mighty Lightbringer",
            "Conquering Lightbringer",
            "Vanquishing Lightbringer",
            "Revered Lightbringer",
            "Holy Lightbringer"
        ]
    },
    norn: {
        link: "https://wiki.guildwars.com/wiki/Norn_rank",
        titles: [
            "Slayer of Imps",
            "Slayer of Beasts",
            "Slayer of Nightmares",
            "Slayer of Giants",
            "Slayer of Wurms",
            "Slayer of Demons",
            "Slayer of Heroes",
            "Slayer of Champions",
            "Slayer of Hordes",
            "Slayer of All"
        ]
    },
    sunspear: {
        link: "https://wiki.guildwars.com/wiki/Sunspear_rank",
        titles: [
            "Sunspear Sergeant",
            "Sunspear Master Sergeant",
            "Second Sunspear",
            "First Sunspear",
            "Sunspear Captain",
            "Sunspear Commander",
            "Sunspear General",
            "Sunspear Castellan",
            "Spearmarshal",
            "Legendary Spearmarshal"
        ]
    },
    cartographer_tyria: {
        link: "https://wiki.guildwars.com/wiki/Cartographer",
        titles: [
            "Tyrian Explorer",
            "Tyrian Pathfinder",
            "Tyrian Trailblazer",
            "Tyrian Cartographer",
            "Tyrian Master Cartographer",
            "Tyrian Grandmaster Cartographer"
        ]
    },
    cartographer_cantha: {
        link: "https://wiki.guildwars.com/wiki/Cartographer",
        titles: [
            "Canthan Explorer",
            "Canthan Pathfinder",
            "Canthan Trailblazer",
            "Canthan Cartographer",
            "Canthan Master Cartographer",
            "Canthan Grandmaster Cartographer"
        ]
    },
    cartographer_elona: {
        link: "https://wiki.guildwars.com/wiki/Cartographer",
        titles: [
            "Elonian Explorer",
            "Elonian Pathfinder",
            "Elonian Trailblazer",
            "Elonian Cartographer",
            "Elonian Master Cartographer",
            "Elonian Grandmaster Cartographer"
        ]
    },
    guardian_tyria: {
        link: "https://wiki.guildwars.com/wiki/Guardian_(title)",
        title: "Guardian of Tyria",
        max: 25
    },
    guardian_cantha: {
        link: "https://wiki.guildwars.com/wiki/Guardian_(title)",
        title: "Guardian of Cantha",
        max: 13
    },
    guardian_elona: {
        link: "https://wiki.guildwars.com/wiki/Guardian_(title)",
        title: "Guardian of Elona",
        max: 20
    },
    protector_tyria: {
        link: "https://wiki.guildwars.com/wiki/Protector",
        title: "Protector of Tyria",
        max: 25
    },
    protector_cantha: {
        link: "https://wiki.guildwars.com/wiki/Protector",
        title: "Protector of Cantha",
        max: 13
    },
    protector_elona: {
        link: "https://wiki.guildwars.com/wiki/Protector",
        title: "Protector of Elona",
        max: 20
    },
    skill_hunter_tyria: {
        link: "https://wiki.guildwars.com/wiki/Skill_Hunter",
        title: "Tyrian Elite Skill Hunter",
        max: 90
    },
    skill_hunter_cantha: {
        link: "https://wiki.guildwars.com/wiki/Skill_Hunter",
        title: "Canthan Elite Skill Hunter",
        max: 120
    },
    skill_hunter_elona: {
        link: "https://wiki.guildwars.com/wiki/Skill_Hunter",
        title: "Elonian Elite Skill Hunter",
        max: 140
    },
    vanquisher_tyria: {
        link: "https://wiki.guildwars.com/wiki/Vanquisher",
        title: "Tyrian Vanquisher",
        max: 54
    },
    vanquisher_cantha: {
        link: "https://wiki.guildwars.com/wiki/Vanquisher",
        title: "Canthan Vanquisher",
        max: 33
    },
    vanquisher_elona: {
        link: "https://wiki.guildwars.com/wiki/Vanquisher",
        title: "Elonian Vanquisher",
        max: 34
    },
    master_of_the_north: {
        link: "https://wiki.guildwars.com/wiki/Master_of_the_North",
        titles: [
            "Adventurer of the North",
            "Pioneer of the North",
            "Veteran of the North",
            "Conqueror of the North",
            "Master of the North",
            "Legendary Master of the North"
        ]
    },
    defender_of_ascalon: {
        link: "https://wiki.guildwars.com/wiki/Defender_of_Ascalon",
        title: "Legendary Defender of Ascalon",
        max: 20
    },
    survivor: {
        link: "https://wiki.guildwars.com/wiki/Survivor",
        titles: [
            "Survivor",
            "Indomitable Survivor",
            "Legendary Survivor"
        ]
    },
    drunkard: {
        link: "https://wiki.guildwars.com/wiki/Drunkard",
        titles: [
            "Drunkard",
            "Incorrigible Ale-Hound"
        ]
    },
    party_animal: {
        link: "https://wiki.guildwars.com/wiki/Party_Animal",
        titles: [
            "Party Animal",
            "Life of the Party"
        ]
    },
    sweet_tooth: {
        link: "https://wiki.guildwars.com/wiki/Sweet_Tooth",
        titles: [
            "Sweet Tooth",
            "Connoisseur of Confectionaries"
        ]
    },
    treasure_hunter: {
        link: "https://wiki.guildwars.com/wiki/Treasure_Hunter",
        titles: [
            "Treasure Hunter",
            "Adept Treasure Hunter",
            "Advanced Treasure Hunter",
            "Expert Treasure Hunter",
            "Elite Treasure Hunter",
            "Master Treasure Hunter",
            "Grandmaster Treasure Hunter"
        ]
    },
    wisdom: {
        link: "https://wiki.guildwars.com/wiki/Wisdom",
        titles: [
            "Seeker of Wisdom",
            "Collector of Wisdom",
            "Devotee of Wisdom",
            "Devourer of Wisdom",
            "Font of Wisdom",
            "Oracle of Wisdom",
            "Source of Wisdom"
        ]
    },
    lucky: {
        link: "https://wiki.guildwars.com/wiki/Lucky_and_Unlucky",
        titles: [
            "Charmed",
            "Lucky",
            "Favored",
            "Prosperous",
            "Golden",
            "Blessed by Fate"
        ]
    },
    unlucky: {
        link: "https://wiki.guildwars.com/wiki/Lucky_and_Unlucky",
        titles: [
            "Hapless",
            "Unlucky",
            "Unfavored",
            "Tragic",
            "Wretched",
            "Jinxed",
            "Cursed by Fate"
        ]
    },
    zaishen: {
        link: "https://wiki.guildwars.com/wiki/Zaishen_rank",
        titles: [
            "Zaishen Supporter",
            "Friend of the Zaishen",
            "Companion of the Zaishen",
            "Ally of the Zaishen",
            "Sentinel of the Zaishen",
            "Steward of the Zaishen",
            "Defender of the Zaishen",
            "Warden of the Zaishen",
            "Bastion of the Zaishen",
            "Champion of the Zaishen",
            "Hero of the Zaishen",
            "Legendary Hero of the Zaishen"
        ]
    },
    champion: {
        link: "https://wiki.guildwars.com/wiki/Champion",
        titles: [
            "Champion",
            "Fierce Champion",
            "Mighty Champion",
            "Deadly Champion",
            "Terrifying Champion",
            "Conquering Champion",
            "Subjugating Champion",
            "Vanquishing Champion",
            "King's Champion",
            "Emperor's Champion",
            "Balthazar's Champion",
            "Legendary Champion"
        ]
    },
    codex: {
        link: "https://wiki.guildwars.com/wiki/Codex_Title",
        titles: [
            "Codex Initiate",
            "Codex Acolyte",
            "Codex Disciple",
            "Codex Zealot",
            "Codex Stalwart",
            "Codex Adept",
            "Codex Exemplar",
            "Codex Prodigy",
            "Codex Champion",
            "Codex Paragon",
            "Codex Master",
            "Codex Grandmaster"
        ]
    },
    commander: {
        link: "https://wiki.guildwars.com/wiki/Commander",
        titles: [
            "Commander",
            "Victorious Commander",
            "Triumphant Commander",
            "Keen Commander",
            "Battle Commander",
            "Field Commander",
            "Lieutenant Commander",
            "Wing Commander",
            "Cobra Commander",
            "Supreme Commander",
            "Master And Commander",
            "Legendary Commander"
        ]
    },
    gladiator: {
        link: "https://wiki.guildwars.com/wiki/Gladiator",
        titles: [
            "Gladiator",
            "Fierce Gladiator",
            "Mighty Gladiator",
            "Deadly Gladiator",
            "Terrifying Gladiator",
            "Conquering Gladiator",
            "Subjugating Gladiator",
            "Vanquishing Gladiator",
            "King's Gladiator",
            "Emperor's Gladiator",
            "Balthazar's Gladiator",
            "Legendary Gladiator"
        ]
    },
    hero: {
        link: "https://wiki.guildwars.com/wiki/Hero_(title)",
        titles: [
            "Hero",
            "Fierce Hero",
            "Mighty Hero",
            "Deadly Hero",
            "Terrifying Hero",
            "Conquering Hero",
            "Subjugating Hero",
            "Vanquishing Hero",
            "Renowned Hero",
            "Illustrious Hero",
            "Eminent Hero",
            "King's Hero",
            "Emperor's Hero",
            "Balthazar's Hero",
            "Legendary Hero"
        ]
    },
    gamer: {
        link: "https://wiki.guildwars.com/wiki/Gamer",
        titles: [
            "Skillz",
            "Pro Skillz",
            "Numchuck Skillz",
            "Mad Skillz",
            "Über Micro Skillz",
            "Gosu Skillz",
            "1337 Skillz",
            "iddqd Skillz",
            "T3h Haxz0rz Skillz",
            "Pure Pwnage Skillz",
            "These skillz go to",
            "Real Ultimate Power Skillz"
        ]
    },
    bonus: {
        cartographer: {
            link: "https://wiki.guildwars.com/wiki/Cartographer",
            name: "Legendary Cartographer",
            requirements: [
                "cartographer_tyria",
                "cartographer_cantha",
                "cartographer_elona"
            ]
        },
        guardian: {
            link: "https://wiki.guildwars.com/wiki/Guardian_(title)",
            name: "Legendary Guardian",
            requirements: [
                "guardian_tyria",
                "guardian_cantha",
                "guardian_elona",
                "protector_tyria",
                "protector_cantha",
                "protector_elona"
            ]
        },
        skill_hunter: {
            link: "https://wiki.guildwars.com/wiki/Skill_Hunter",
            name: "Legendary Skill Hunter",
            requirements: [
                "skill_hunter_tyria",
                "skill_hunter_cantha",
                "skill_hunter_elona"
            ]
        },
        vanquisher: {
            link: "https://wiki.guildwars.com/wiki/Vanquisher",
            name: "Legendary Vanquisher",
            requirements: [
                "vanquisher_tyria",
                "vanquisher_cantha",
                "vanquisher_elona"
            ]
        }
    },
    maxed: {
        offset: 5,
        total: 43,
        link: "https://wiki.guildwars.com/wiki/Kind_of_a_Big_Deal",
        titles: [
            "Invisible Among the Crowd",
            "Kind Of A Big Deal",
            "People Know Me",
            "I'm Very Important",
            "I Have Many Leather-Bound Books",
            "My Guild Hall Smells of Rich Mahogany",
            "God Walking Amongst Mere Mortals"
        ]
    }
}