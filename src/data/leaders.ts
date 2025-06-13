export interface Leader {
  id: string;
  name: string;
  civilization: string;
  uniqueAbility: string;
  description: string;
  perks: string[];
  photo: string;
  tier: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  strategies: {
    direction: string;
    earlyGame: string[];
    midGame: string[];
    lateGame: string[];
    districts: string[];
    governors: string[];
    victory: string[];
  };
  bbgChanges?: string[];
}

export const leaders: Leader[] = [
  {
    id: 'abraham-lincoln',
    name: 'Abraham Lincoln',
    civilization: 'American',
    uniqueAbility: 'Emancipation Proclamation',
    description: 'Industrial zones provide +1 amenity and yield +4 loyalty per turn to cities within 6 tiles. Receives a free melee unit whenever an industrial zone is completed.',
    perks: [
      'Industrial zones provide amenities and loyalty',
      'Free melee units from industrial zones',
      'Strong production capabilities',
      'P-51 Mustang fighter aircraft'
    ],
    photo: '/images/abraham-lincoln.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on rapid industrialization and production. Build industrial zones early and often to gain free units and maintain loyalty in expanded empire.',
      earlyGame: [
        'Prioritize settling cities with good production potential',
        'Rush to Industrial Zone technology',
        'Build campuses for science to reach industrial era quickly',
        'Use free units to expand militarily'
      ],
      midGame: [
        'Build industrial zones in every major city',
        'Use loyalty bonuses to flip enemy cities',
        'Focus on infrastructure and production',
        'Prepare for late game victory push'
      ],
      lateGame: [
        'Dominate with superior production',
        'Use industrial capacity for space race',
        'Deploy P-51 Mustangs for air superiority',
        'Push for science or domination victory'
      ],
      districts: ['Industrial Zone', 'Campus', 'Commercial Hub', 'Encampment'],
      governors: ['Magnus', 'Pingala', 'Victor'],
      victory: ['Science', 'Domination']
    },
    bbgChanges: ['P-51 Mustang combat strength reduced to 95 (from 105)', 'Industrial zone amenity bonus maintained']
  },
  {
    id: 'saladin',
    name: 'Saladin',
    civilization: 'Arabian',
    uniqueAbility: 'Righteousness of the Faith',
    description: 'The last religion founded gains an additional belief. Science, faith, and culture are increased based on foreign followers of Saladin\'s religion. Earns +1 Great Prophet point after researching Astrology.',
    perks: [
      'Extra belief for last religion founded',
      'Bonuses based on foreign religious followers',
      'Enhanced Great Prophet generation',
      'Mamluk unique units'
    ],
    photo: '/images/saladin.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on founding the last religion and spreading it internationally. Use early Great Prophet advantage and religious bonuses for development.',
      earlyGame: [
        'Research Astrology for Great Prophet points',
        'Build faith infrastructure early',
        'Time religion founding to be last',
        'Build Mamluk units for protection'
      ],
      midGame: [
        'Found last religion with extra belief',
        'Spread religion internationally aggressively',
        'Use religious bonuses for development',
        'Build Madrasa districts for science'
      ],
      lateGame: [
        'Push for religious victory',
        'Use international religious bonuses',
        'Leverage enhanced beliefs',
        'Maintain religious dominance globally'
      ],
      districts: ['Campus', 'Holy Site', 'Commercial Hub'],
      governors: ['Moksha', 'Pingala', 'Magnus'],
      victory: ['Religious', 'Science', 'Culture']
    },
    bbgChanges: ['Now earns +1 Great Prophet point after Astrology research', 'Enhanced early religious game potential']
  },
  {
    id: 'qin-shi-huang',
    name: 'Qin Shi Huang',
    civilization: 'Chinese',
    uniqueAbility: 'The First Emperor',
    description: 'Builders can consume a charge to complete 15% of a wonder\'s production. Gains an additional builder charge. Crouching Tiger is a Crossbowman replacement with 2 range.',
    perks: [
      'Builder charges can complete wonders',
      'Extra builder charges',
      'Enhanced Crouching Tiger crossbowmen',
      'Great Wall improvement'
    ],
    photo: '/images/qin-shi-huang.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on wonder construction and ranged warfare. Use builder advantages for rapid wonder completion and Crouching Tigers for military defense.',
      earlyGame: [
        'Build wonders with builder charges',
        'Generate builders efficiently',
        'Build Great Wall improvements',
        'Research Machinery for Crouching Tigers'
      ],
      midGame: [
        'Continue wonder focus',
        'Use Crouching Tiger 2-range advantage',
        'Build strong defensive positions',
        'Use builder advantages for infrastructure'
      ],
      lateGame: [
        'Use wonder advantages for culture victory',
        'Maintain defensive positions',
        'Leverage infrastructure bonuses',
        'Push for culture or science victory'
      ],
      districts: ['Campus', 'Theater Square', 'Commercial Hub'],
      governors: ['Pingala', 'Magnus', 'Liang'],
      victory: ['Culture', 'Science']
    },
    bbgChanges: ['Crouching Tiger now replaces Crossbowman with 2 Range', 'Enhanced defensive capabilities in medieval era']
  },
  {
    id: 'cleopatra',
    name: 'Cleopatra',
    civilization: 'Egyptian',
    uniqueAbility: 'Mediterranean\'s Bride',
    description: 'Gains +4 gold per turn for each trade route to other civilizations. Trading posts increase trade route range by 33%. Sphinx provides +1 Faith/Culture when adjacent to wonders.',
    perks: [
      'Gold bonuses from international trade',
      'Extended trade route range',
      'Enhanced Sphinx improvements',
      'Wonder building bonuses'
    ],
    photo: '/images/cleopatra.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on trade, wonder building, and economic development. Use enhanced Sphinx improvements for culture and faith generation.',
      earlyGame: [
        'Establish international trade routes quickly',
        'Build commercial hubs and harbors',
        'Plan wonder locations for Sphinx adjacency',
        'Focus on meeting other civilizations'
      ],
      midGame: [
        'Build wonders and adjacent Sphinxes',
        'Use gold to purchase units and buildings',
        'Maximize trade route networks',
        'Build cultural infrastructure'
      ],
      lateGame: [
        'Use economic and cultural advantages',
        'Build late-game wonders with Sphinx support',
        'Push for culture victory',
        'Maintain trade dominance'
      ],
      districts: ['Commercial Hub', 'Harbor', 'Theater Square', 'Campus'],
      governors: ['Magnus', 'Pingala', 'Liang'],
      victory: ['Culture', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Sphinx now provides +1 Faith/Culture when adjacent to wonders', 'Enhanced wonder synergy strategy']
  },
  {
    id: 'catherine-de-medici',
    name: 'Catherine de Medici',
    civilization: 'French',
    uniqueAbility: 'Catherine\'s Flying Squadron',
    description: 'Gains one extra level of diplomatic visibility with every civilization she has met. Gains a free spy when researching Castles. Grand Tour ability enhanced.',
    perks: [
      'Enhanced diplomatic visibility',
      'Free spy from Castles technology',
      'Strong espionage capabilities',
      'Enhanced Grand Tour bonuses'
    ],
    photo: '/images/catherine-de-medici.jpg',
    tier: 'C',
    strategies: {
      direction: 'Focus on espionage, diplomacy, and cultural tourism. Use enhanced spy capabilities and Grand Tour for intelligence and cultural advantages.',
      earlyGame: [
        'Meet as many civilizations as possible',
        'Rush to Castles for free spy',
        'Focus on diplomatic technologies',
        'Gather intelligence on competitors'
      ],
      midGame: [
        'Use enhanced spy operations',
        'Build Château unique improvements',
        'Leverage Grand Tour bonuses',
        'Maintain diplomatic relationships'
      ],
      lateGame: [
        'Use espionage for victory conditions',
        'Leverage diplomatic and cultural advantages',
        'Push for culture or diplomatic victory',
        'Use intelligence for strategic decisions'
      ],
      districts: ['Theater Square', 'Commercial Hub', 'Campus'],
      governors: ['Pingala', 'Amani', 'Magnus'],
      victory: ['Culture', 'Diplomatic', 'Science']
    },
    bbgChanges: ['Grand Tour now provides free spy with Castles', 'Enhanced espionage timing and capabilities']
  },
  {
    id: 'sejong',
    name: 'Sejong',
    civilization: 'Korean',
    uniqueAbility: 'Hwarang',
    description: 'Governors provide +3% culture and +3% science per promotion they have. Mines provide +1 science. Seowon has reduced base adjacency but still powerful.',
    perks: [
      'Governor bonuses for culture and science',
      'Science from mines',
      'Seowon unique districts',
      'Hwacha unique units'
    ],
    photo: '/images/sejong.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on scientific development and governor optimization. Adapt to reduced Seowon adjacency with strategic placement.',
      earlyGame: [
        'Build Seowon districts strategically',
        'Promote governors quickly for bonuses',
        'Build mines for science',
        'Focus on scientific infrastructure'
      ],
      midGame: [
        'Use Hwacha units for defense',
        'Continue governor development',
        'Compensate for reduced Seowon adjacency',
        'Build strong science base'
      ],
      lateGame: [
        'Push for science victory',
        'Use technological advantages',
        'Leverage governor bonuses fully',
        'Maintain scientific edge'
      ],
      districts: ['Seowon', 'Commercial Hub', 'Industrial Zone'],
      governors: ['Pingala', 'Magnus', 'Liang'],
      victory: ['Science', 'Culture']
    },
    bbgChanges: ['Seowon base adjacency reduced from +4 to +1', 'Culture from era technology reduced', 'Requires more strategic district placement']
  },
  {
    id: 'mansa-musa',
    name: 'Mansa Musa',
    civilization: 'Malian',
    uniqueAbility: 'Sahel Merchants',
    description: 'Gains +1 trade route capacity for every desert city. International trade routes from desert cities gain +2 gold and +1 faith. Reduced global production penalty.',
    perks: [
      'Extra trade routes from desert cities',
      'Gold and faith from desert trade routes',
      'Reduced production penalties',
      'Suguba unique district'
    ],
    photo: '/images/mansa-musa.jpg',
    tier: 'C',
    strategies: {
      direction: 'Focus on desert settlement and trade networks. Benefit from reduced production penalty while maximizing gold and faith.',
      earlyGame: [
        'Settle in desert areas aggressively',
        'Build Suguba districts early',
        'Establish international trade routes',
        'Compensate for production penalties'
      ],
      midGame: [
        'Build extensive trade networks',
        'Use Mandekalu Cavalry units',
        'Generate massive gold and faith',
        'Build strong economic base'
      ],
      lateGame: [
        'Use economic advantages for any victory',
        'Purchase key infrastructure with gold',
        'Leverage reduced production penalty',
        'Maintain economic dominance'
      ],
      districts: ['Suguba', 'Holy Site', 'Campus'],
      governors: ['Magnus', 'Moksha', 'Pingala'],
      victory: ['Religious', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Global production penalty reduced to -15% (from -30%)', 'More viable for infrastructure development']
  },
  {
    id: 'wilhelmina',
    name: 'Wilhelmina',
    civilization: 'Dutch',
    uniqueAbility: 'Radio Oranje',
    description: 'Retains loyalty when losing a city. Domestic trade routes provide +1 loyalty. Polders now unlock at Feudalism and provide enhanced yields.',
    perks: [
      'Loyalty retention from lost cities',
      'Loyalty from domestic trade routes',
      'Earlier Polder access',
      'De Zeven Provinciën unique ships'
    ],
    photo: '/images/wilhelmina.jpg',
    tier: 'D',
    strategies: {
      direction: 'Focus on coastal development and loyalty management. Use earlier Polder access for improved infrastructure.',
      earlyGame: [
        'Settle coastal cities for Polders',
        'Research Feudalism for Polder access',
        'Build domestic trade routes for loyalty',
        'Focus on naval technologies'
      ],
      midGame: [
        'Build extensive Polder networks',
        'Use De Zeven Provinciën for naval control',
        'Maintain loyalty through trade',
        'Build coastal infrastructure'
      ],
      lateGame: [
        'Use coastal advantages for victory',
        'Leverage Polder yields',
        'Maintain empire loyalty',
        'Push for any victory type'
      ],
      districts: ['Harbor', 'Commercial Hub', 'Campus'],
      governors: ['Magnus', 'Pingala', 'Amani'],
      victory: ['Science', 'Culture', 'Diplomatic']
    },
    bbgChanges: ['Polders now unlock at Feudalism (earlier access)', 'Enhanced early game coastal development']
  },
  {
    id: 'amanitore',
    name: 'Amanitore',
    civilization: 'Nubian',
    uniqueAbility: 'Kandake of Meroë',
    description: 'Receives +20% production towards districts. Districts provide +2 production if they have at least one adjacent district. Ta-Seti bonus extends to naval ranged units.',
    perks: [
      '+20% production towards districts',
      'Districts give production bonuses when adjacent',
      'Enhanced Nubian Pyramid improvements',
      'Naval ranged unit bonuses'
    ],
    photo: '/images/amanitore.jpg',
    tier: 'D',
    strategies: {
      direction: 'Focus on efficient district placement and naval warfare. Use enhanced Ta-Seti bonuses for both land and sea combat.',
      earlyGame: [
        'Plan city layouts for district adjacency',
        'Prioritize early districts for production',
        'Build coastal cities for naval units',
        'Use Pitati Archer bonuses'
      ],
      midGame: [
        'Complete district triangles for bonuses',
        'Use production advantage for wonders',
        'Build naval ranged units with bonuses',
        'Develop coastal infrastructure'
      ],
      lateGame: [
        'Leverage production for any victory',
        'Maintain naval superiority',
        'Use infrastructure advantages',
        'Push for science or culture victory'
      ],
      districts: ['Campus', 'Commercial Hub', 'Industrial Zone', 'Harbor'],
      governors: ['Pingala', 'Magnus', 'Liang'],
      victory: ['Science', 'Culture', 'Domination']
    },
    bbgChanges: ['Ta-Seti bonus now extends to naval ranged units', 'Enhanced naval warfare capabilities']
  },
  {
    id: 'chandragupta',
    name: 'Chandragupta',
    civilization: 'Indian',
    uniqueAbility: 'Arthashastra (Reworked)',
    description: 'Completely reworked ability focusing on religious building bonuses and faith-based infrastructure development.',
    perks: [
      'Enhanced religious building construction',
      'Faith-based development bonuses',
      'Varu unique units with debuffing',
      'Stepwell improvements'
    ],
    photo: '/images/chandragupta.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on religious infrastructure and faith-based development. Use reworked ability for religious expansion.',
      earlyGame: [
        'Build religious infrastructure early',
        'Focus on faith generation',
        'Use new religious building bonuses',
        'Build Stepwell improvements'
      ],
      midGame: [
        'Continue religious development',
        'Use Varu units effectively',
        'Build strong faith-based economy',
        'Spread religion strategically'
      ],
      lateGame: [
        'Push for religious victory',
        'Use faith advantages',
        'Leverage religious infrastructure',
        'Maintain spiritual dominance'
      ],
      districts: ['Holy Site', 'Campus', 'Commercial Hub'],
      governors: ['Moksha', 'Pingala', 'Magnus'],
      victory: ['Religious', 'Science', 'Culture']
    },
    bbgChanges: ['Completely reworked ability focusing on religious buildings', 'New strategic focus on faith-based development']
  },
  {
    id: 'eleanor-aquitaine',
    name: 'Eleanor of Aquitaine',
    civilization: 'French/English',
    uniqueAbility: 'Court of Love (Enhanced)',
    description: 'Great Works in her cities cause -1 loyalty per turn to foreign cities within 9 tiles. Great Works now provide yields based on district type.',
    perks: [
      'Loyalty pressure from Great Works',
      'Enhanced yields from Great Works by district',
      'Can flip cities through loyalty',
      'Flexible civilization choice'
    ],
    photo: '/images/eleanor.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on Great Works generation and district synergy. Use enhanced yields and loyalty pressure for cultural dominance.',
      earlyGame: [
        'Build Theater Squares and other Great Work districts',
        'Generate Great Works quickly',
        'Settle near enemy cities for pressure',
        'Focus on culture technologies'
      ],
      midGame: [
        'Maximize Great Work slots in various districts',
        'Use enhanced district-based yields',
        'Apply strategic loyalty pressure',
        'Build diverse cultural infrastructure'
      ],
      lateGame: [
        'Flip enemy cities through loyalty',
        'Use enhanced Great Work yields',
        'Push for culture victory',
        'Maintain cultural and loyalty dominance'
      ],
      districts: ['Theater Square', 'Campus', 'Holy Site', 'Commercial Hub'],
      governors: ['Pingala', 'Amani', 'Moksha'],
      victory: ['Culture', 'Diplomatic']
    },
    bbgChanges: ['Great Works now provide yields based on district type', 'Enhanced strategic depth and flexibility']
  },
  {
    id: 'kublai-khan',
    name: 'Kublai Khan',
    civilization: 'Chinese/Mongolian',
    uniqueAbility: 'Gerege (Enhanced)',
    description: 'Gains +1 economic policy slot in all governments. International trade routes provide science and culture bonuses.',
    perks: [
      'Extra economic policy slot',
      'Enhanced science and culture from trade',
      'Strong trade network development',
      'Flexible civilization choice'
    ],
    photo: '/images/kublai-khan.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on international trade networks for technological advancement. Use enhanced trade bonuses for science and culture.',
      earlyGame: [
        'Establish international trade routes quickly',
        'Meet other civilizations for trade',
        'Build commercial infrastructure',
        'Use extra policy slot effectively'
      ],
      midGame: [
        'Maximize international trade routes',
        'Use science and culture bonuses',
        'Build strong economic base',
        'Maintain extensive trade networks'
      ],
      lateGame: [
        'Use technological advantages from trade',
        'Push for science victory',
        'Leverage enhanced trade bonuses',
        'Maintain economic and scientific dominance'
      ],
      districts: ['Commercial Hub', 'Campus', 'Harbor'],
      governors: ['Magnus', 'Pingala', 'Amani'],
      victory: ['Science', 'Diplomatic']
    },
    bbgChanges: ['Gerege now provides science/culture for international trade routes', 'Enhanced peaceful development strategy']
  },
  {
    id: 'alexander',
    name: 'Alexander',
    civilization: 'Macedonian',
    uniqueAbility: 'To the World\'s End',
    description: 'Units heal completely after capturing a city. All cities you capture will not lose population. Gains the unique Hypaspist unit and Basilikoi Paides building.',
    perks: [
      'Units fully heal after capturing cities',
      'Captured cities keep full population',
      'Strong unique units for conquest',
      'Aggressive expansion bonuses'
    ],
    photo: '/images/alexander.jpg',
    tier: 'B',
    strategies: {
      direction: 'Aggressive early expansion through conquest. Focus on military might and capturing cities to snowball into victory.',
      earlyGame: [
        'Build military units early',
        'Target nearby civilizations for conquest',
        'Use unit healing to maintain offensive pressure',
        'Don\'t worry about amenities - capture cities instead'
      ],
      midGame: [
        'Continue military expansion',
        'Use Hypaspist units for elite warfare',
        'Build Basilikoi Paides for military bonuses',
        'Maintain large standing army'
      ],
      lateGame: [
        'Use captured empire for any victory type',
        'Leverage large population from intact cities',
        'Consider culture victory from diverse empire',
        'Science victory possible with large empire'
      ],
      districts: ['Encampment', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Magnus', 'Amani'],
      victory: ['Domination', 'Science', 'Culture']
    }
  },
  {
    id: 'frederick-barbarossa',
    name: 'Frederick Barbarossa',
    civilization: 'German',
    uniqueAbility: 'Holy Roman Emperor',
    description: 'Gains an additional military policy slot regardless of government. Gains +7 combat strength when attacking city-states.',
    perks: [
      'Extra military policy slot',
      'Combat bonuses vs city-states',
      'Free Imperial Cities ability',
      'Strong district development'
    ],
    photo: '/images/frederick-barbarossa.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on rapid district development and military expansion. Use extra district capacity and military policies for dominance.',
      earlyGame: [
        'Build extra districts in cities',
        'Target city-states for conquest',
        'Use military policy advantages',
        'Focus on infrastructure'
      ],
      midGame: [
        'Build Hansa districts for production',
        'Use U-Boat unique units',
        'Continue city-state conquest',
        'Develop strong industrial base'
      ],
      lateGame: [
        'Use production advantage for any victory',
        'Maintain military superiority',
        'Push for science or domination victory',
        'Leverage industrial capacity'
      ],
      districts: ['Hansa', 'Campus', 'Commercial Hub', 'Encampment'],
      governors: ['Magnus', 'Pingala', 'Victor'],
      victory: ['Science', 'Domination']
    }
  },
  {
    id: 'hojo-tokimune',
    name: 'Hojo Tokimune',
    civilization: 'Japanese',
    uniqueAbility: 'Divine Wind',
    description: 'Land units in coastal tiles and naval units in shallow water gain +5 combat strength. Districts, improvements, and units are immune to hurricane damage.',
    perks: [
      'Combat bonuses in coastal areas',
      'Hurricane immunity for improvements',
      'Strong coastal defense',
      'Samurai unique units'
    ],
    photo: '/images/hojo-tokimune.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on coastal development and district efficiency. Use adjacency bonuses and quick construction for rapid development.',
      earlyGame: [
        'Settle coastal cities',
        'Build districts with adjacency bonuses',
        'Use Samurai units effectively',
        'Focus on infrastructure'
      ],
      midGame: [
        'Build Electronics Factory unique building',
        'Use adjacency bonuses fully',
        'Maintain coastal defenses',
        'Develop strong industrial base'
      ],
      lateGame: [
        'Use production advantages',
        'Push for any victory type',
        'Maintain technological edge',
        'Leverage coastal bonuses'
      ],
      districts: ['Industrial Zone', 'Campus', 'Theater Square', 'Holy Site'],
      governors: ['Magnus', 'Pingala', 'Liang'],
      victory: ['Science', 'Culture', 'Religious']
    }
  },
  {
    id: 'hammurabi',
    name: 'Hammurabi',
    civilization: 'Babylonian',
    uniqueAbility: 'Ninu Ilu Sirum',
    description: 'Receives the Eureka moment for a technology when the corresponding unique building is constructed in any city for the first time.',
    perks: [
      'Free Eurekas from unique buildings',
      'Accelerated technology development',
      'Strong science generation',
      'Early access to key technologies'
    ],
    photo: '/images/hammurabi.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on rapid technological advancement through building construction. Use free Eurekas to rush key technologies.',
      earlyGame: [
        'Build unique buildings quickly',
        'Focus on science infrastructure',
        'Rush key technologies',
        'Use tech advantages'
      ],
      midGame: [
        'Continue building construction',
        'Use Sabum Kibittum unique unit',
        'Maintain tech leadership',
        'Build Palgum improvements'
      ],
      lateGame: [
        'Use tech advantages for victory',
        'Rush space race technologies',
        'Push for science victory',
        'Maintain technological dominance'
      ],
      districts: ['Campus', 'Commercial Hub', 'Industrial Zone'],
      governors: ['Pingala', 'Magnus', 'Liang'],
      victory: ['Science', 'Domination']
    }
  },
  {
    id: 'gandhi',
    name: 'Gandhi',
    civilization: 'Indian',
    uniqueAbility: 'Satyagraha',
    description: 'Each civilization Gandhi has met that has not declared war on him and follows his religion gains +5 faith per turn. Gandhi gets -20% war weariness, and his opponents get +20% war weariness.',
    perks: [
      'Faith bonuses from peaceful religious followers',
      'Reduced war weariness',
      'Strong religious victory potential',
      'Varu unique units with zone of control'
    ],
    photo: '/images/gandhi.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on peaceful religious expansion. Build faith infrastructure early and spread religion to earn bonus faith from other civilizations.',
      earlyGame: [
        'Build Holy Sites and generate Great Prophets',
        'Found religion with strong beliefs',
        'Focus on meeting other civilizations peacefully',
        'Build Stepwell improvements for growth'
      ],
      midGame: [
        'Spread religion to other civilizations',
        'Use Varu units for defensive purposes',
        'Generate faith from peaceful followers',
        'Build religious infrastructure'
      ],
      lateGame: [
        'Push for religious victory',
        'Use faith advantages for purchases',
        'Maintain peaceful relations for bonuses',
        'Convert remaining civilizations'
      ],
      districts: ['Holy Site', 'Campus', 'Commercial Hub'],
      governors: ['Moksha', 'Pingala', 'Amani'],
      victory: ['Religious', 'Culture', 'Science']
    },
    bbgChanges: ['Faith bonus now +5 per civilization (enhanced)', 'War weariness effects rebalanced for multiplayer']
  },
  {
    id: 'trajan',
    name: 'Trajan',
    civilization: 'Roman',
    uniqueAbility: 'Trajan\'s Column',
    description: 'All cities start with an additional city center building. Each trade route provides +1 gold per trading post in its destination city.',
    perks: [
      'Free Monument in all cities',
      'Enhanced trade route gold yields',
      'Strong early expansion',
      'Legion unique units with fortifications'
    ],
    photo: '/images/trajan.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on rapid expansion and trade network development. Use free monuments for early culture and territory expansion.',
      earlyGame: [
        'Settle cities rapidly with free monuments',
        'Build trade routes early for gold',
        'Use Legion units for road building',
        'Focus on infrastructure development'
      ],
      midGame: [
        'Build extensive trade networks',
        'Use Baths unique building for amenities',
        'Continue expansion and development',
        'Build strong economic base'
      ],
      lateGame: [
        'Use large empire for any victory type',
        'Leverage trade advantages',
        'Push for domination or diplomatic victory',
        'Maintain economic and military strength'
      ],
      districts: ['Commercial Hub', 'Campus', 'Industrial Zone', 'Encampment'],
      governors: ['Magnus', 'Victor', 'Pingala'],
      victory: ['Domination', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Trade route bonuses enhanced', 'Legion fort-building ability maintained for strategic roads']
  },
  {
    id: 'victoria',
    name: 'Victoria',
    civilization: 'English',
    uniqueAbility: 'Sun Never Sets',
    description: 'All cities not on your home continent get +1 loyalty per turn. Gains a free melee unit when you build your first encampment in a city on a foreign continent.',
    perks: [
      'Loyalty bonuses on foreign continents',
      'Free units from overseas encampments',
      'Strong naval expansion capabilities',
      'Redcoat unique units for overseas combat'
    ],
    photo: '/images/victoria.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on overseas expansion and naval dominance. Settle on foreign continents for loyalty bonuses and military advantages.',
      earlyGame: [
        'Build naval units and explore seas',
        'Find foreign continents for settlement',
        'Build harbors in coastal cities',
        'Focus on naval technologies'
      ],
      midGame: [
        'Settle cities on foreign continents',
        'Build encampments overseas for free units',
        'Use Sea Dog unique units for naval warfare',
        'Maintain strong navy'
      ],
      lateGame: [
        'Use global empire for victory',
        'Deploy Redcoat units for overseas combat',
        'Push for domination or diplomatic victory',
        'Maintain naval and overseas advantages'
      ],
      districts: ['Harbor', 'Encampment', 'Commercial Hub', 'Campus'],
      governors: ['Victor', 'Magnus', 'Amani'],
      victory: ['Domination', 'Diplomatic', 'Science']
    },
    bbgChanges: ['Loyalty bonuses enhanced for overseas expansion', 'Royal Navy Dockyard adjacency bonuses maintained']
  },
  {
    id: 'tomyris',
    name: 'Tomyris',
    civilization: 'Scythian',
    uniqueAbility: 'People of the Steppe',
    description: 'When training light cavalry units, also produces a copy of that unit. Light cavalry units get +5 combat strength against wounded units.',
    perks: [
      'Double light cavalry unit production',
      'Combat bonuses against wounded units',
      'Strong early military rushes',
      'Saka Horse Archer unique units'
    ],
    photo: '/images/tomyris.jpg',
    tier: 'C',
    strategies: {
      direction: 'Focus on early military aggression with light cavalry units. Use doubled production to overwhelm enemies quickly.',
      earlyGame: [
        'Build light cavalry units for doubles',
        'Use Saka Horse Archers for early warfare',
        'Target wounded enemies for bonuses',
        'Rush nearby civilizations'
      ],
      midGame: [
        'Continue cavalry-based warfare',
        'Use Kurgan improvements for faith',
        'Maintain military pressure',
        'Expand through conquest'
      ],
      lateGame: [
        'Transition to late-game military units',
        'Use conquered territory for victory',
        'Push for domination victory',
        'Maintain military advantages'
      ],
      districts: ['Encampment', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Magnus', 'Pingala'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Light cavalry doubling maintained', 'Combat strength bonus vs wounded units preserved for aggressive play']
  },
  {
    id: 'teddy-roosevelt',
    name: 'Theodore Roosevelt',
    civilization: 'American',
    uniqueAbility: 'Bull Moose',
    description: 'Breathtaking tiles grant +1 appeal to adjacent tiles. National Parks grants +2 science, culture, and tourism. Units gain +5 combat strength on hills.',
    perks: [
      'Appeal bonuses from breathtaking tiles',
      'Enhanced National Parks yields',
      'Combat bonuses on hills',
      'Strong conservation focus'
    ],
    photo: '/images/teddy-roosevelt.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on natural wonder and National Park development. Use appeal bonuses and conservation for culture victory.',
      earlyGame: [
        'Settle near natural wonders and breathtaking tiles',
        'Build campuses and theater squares',
        'Use hill combat bonuses for defense',
        'Focus on conservation technologies'
      ],
      midGame: [
        'Build Film Studio unique building',
        'Use Rough Rider units on hills',
        'Develop National Parks',
        'Focus on culture and tourism'
      ],
      lateGame: [
        'Push for culture victory with tourism',
        'Use enhanced National Parks',
        'Leverage appeal bonuses',
        'Maintain environmental advantages'
      ],
      districts: ['Theater Square', 'Campus', 'Commercial Hub'],
      governors: ['Pingala', 'Liang', 'Amani'],
      victory: ['Culture', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Bull Moose bonuses enhanced for National Parks', 'Film Studio tourism bonuses maintained for culture victory']
  },
  {
    id: 'peter',
    name: 'Peter',
    civilization: 'Russian',
    uniqueAbility: 'Grand Embassy',
    description: 'Gains science or culture from trade routes to civilizations that are more advanced. Lavra districts provide Great Writer, Artist, and Musician points.',
    perks: [
      'Science and culture from advanced civilizations',
      'Enhanced Great Person generation from faith',
      'Strong tundra development',
      'Cossack unique cavalry units'
    ],
    photo: '/images/peter.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on trade with advanced civilizations and religious infrastructure. Use tundra settling advantages and faith generation.',
      earlyGame: [
        'Build Lavra districts for faith and Great People',
        'Establish trade routes with advanced civs',
        'Settle tundra tiles effectively',
        'Focus on religious technologies'
      ],
      midGame: [
        'Continue trading with advanced civilizations',
        'Use Cossack units for warfare',
        'Build cultural and scientific infrastructure',
        'Generate Great Works from faith'
      ],
      lateGame: [
        'Use accumulated science and culture advantages',
        'Push for culture or religious victory',
        'Leverage Great Person advantages',
        'Maintain trade network benefits'
      ],
      districts: ['Lavra', 'Campus', 'Theater Square', 'Commercial Hub'],
      governors: ['Moksha', 'Pingala', 'Magnus'],
      victory: ['Culture', 'Religious', 'Science']
    },
    bbgChanges: ['Grand Embassy bonuses enhanced', 'Lavra now provides Great Writer/Artist/Musician points for cultural strategy']
  },
  {
    id: 'gilgamesh',
    name: 'Gilgamesh',
    civilization: 'Sumerian',
    uniqueAbility: 'Adventures with Enkidu',
    description: 'When at war alongside an ally, Sumerian units share pillage rewards and combat experience with the closest allied unit within 5 tiles.',
    perks: [
      'Shared combat experience and pillage with allies',
      'Strong early warfare capabilities',
      'War-Cart unique early units',
      'Ziggurat improvements for science and culture'
    ],
    photo: '/images/gilgamesh.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on early alliances and joint warfare. Use shared experience to level units quickly and dominate early game.',
      earlyGame: [
        'Form alliances quickly',
        'Build War-Cart units for early warfare',
        'Engage in joint wars for experience sharing',
        'Build Ziggurat improvements'
      ],
      midGame: [
        'Continue alliance-based warfare',
        'Use experienced units effectively',
        'Build scientific infrastructure',
        'Maintain strong military'
      ],
      lateGame: [
        'Use alliance advantages for victory',
        'Leverage early military advantages',
        'Push for science or domination victory',
        'Maintain diplomatic relationships'
      ],
      districts: ['Campus', 'Encampment', 'Commercial Hub'],
      governors: ['Victor', 'Pingala', 'Amani'],
      victory: ['Science', 'Domination', 'Diplomatic']
    },
    bbgChanges: ['Alliance bonuses maintained for team play', 'War-Cart strength appropriate for ancient era combat']
  },
  {
    id: 'gorgo',
    name: 'Gorgo',
    civilization: 'Greek',
    uniqueAbility: 'Thermopylae',
    description: 'Gains culture from killing enemy units equal to 50% of their combat strength. All units gain +5 combat strength when fighting within 2 tiles of a Greek city.',
    perks: [
      'Culture from combat victories',
      'Defensive combat bonuses near cities',
      'Strong military culture generation',
      'Hoplite unique units with formation bonuses'
    ],
    photo: '/images/gorgo.jpg',
    tier: 'S',
    strategies: {
      direction: 'Focus on defensive warfare and culture generation through combat. Use city proximity bonuses for strong defense.',
      earlyGame: [
        'Build Hoplites for formation combat',
        'Engage in defensive warfare for culture',
        'Build Acropolis districts for culture',
        'Focus on military technologies'
      ],
      midGame: [
        'Continue combat-based culture generation',
        'Use defensive bonuses effectively',
        'Build strong military infrastructure',
        'Focus on civic development'
      ],
      lateGame: [
        'Push for culture victory from combat culture',
        'Use accumulated culture advantages',
        'Maintain strong defensive positions',
        'Leverage military culture synergy'
      ],
      districts: ['Acropolis', 'Encampment', 'Commercial Hub'],
      governors: ['Victor', 'Pingala', 'Magnus'],
      victory: ['Culture', 'Domination']
    },
    bbgChanges: ['Combat culture generation enhanced', 'City proximity combat bonuses maintained for defensive strategy']
  },
  {
    id: 'pericles',
    name: 'Pericles',
    civilization: 'Greek',
    uniqueAbility: 'Surrounded by Glory',
    description: 'Culture bonus based on the number of city-states you are suzerain of. Gain +5% culture towards civics for each city-state you are suzerain of (up to 50%).',
    perks: [
      'Culture bonuses from city-state suzerainty',
      'Enhanced civic development',
      'Strong diplomatic gameplay',
      'Hoplite unique units with formation bonuses'
    ],
    photo: '/images/pericles.jpg',
    tier: 'S',
    strategies: {
      direction: 'Focus on city-state relationships and culture generation. Build diplomatic influence for culture bonuses.',
      earlyGame: [
        'Send envoys to city-states early',
        'Build Acropolis districts for culture',
        'Focus on diplomatic technologies',
        'Establish suzerainty relationships'
      ],
      midGame: [
        'Maintain multiple suzerainties',
        'Use culture bonuses for rapid civic progress',
        'Build strong cultural infrastructure',
        'Continue diplomatic expansion'
      ],
      lateGame: [
        'Push for culture victory with city-state bonuses',
        'Use diplomatic advantages',
        'Maintain cultural dominance',
        'Consider diplomatic victory'
      ],
      districts: ['Acropolis', 'Commercial Hub', 'Campus'],
      governors: ['Amani', 'Pingala', 'Magnus'],
      victory: ['Culture', 'Diplomatic']
    },
    bbgChanges: ['City-state culture bonuses enhanced up to 50%', 'Suzerainty benefits increased for competitive viability']
  },
  {
    id: 'harald-hardrada',
    name: 'Harald Hardrada',
    civilization: 'Norwegian',
    uniqueAbility: 'Thunderbolt of the North',
    description: 'Naval melee units can perform coastal raids. Allows ocean traversal earlier. All units gain +50% production towards naval units.',
    perks: [
      'Coastal raiding with naval melee units',
      'Earlier ocean exploration',
      'Enhanced naval unit production',
      'Berserker unique units with bonus movement'
    ],
    photo: '/images/harald-hardrada.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on naval exploration and coastal raiding. Use early ocean access and raiding for economic advantages.',
      earlyGame: [
        'Build naval units for exploration and raiding',
        'Use coastal raids for gold and faith',
        'Settle coastal and overseas territories',
        'Build Berserker units for land warfare'
      ],
      midGame: [
        'Continue coastal raiding strategies',
        'Use Longship unique units',
        'Build Stave Church improvements',
        'Maintain naval superiority'
      ],
      lateGame: [
        'Use naval advantages for victory',
        'Leverage early expansion benefits',
        'Push for domination or diplomatic victory',
        'Maintain naval control'
      ],
      districts: ['Harbor', 'Campus', 'Commercial Hub'],
      governors: ['Magnus', 'Victor', 'Pingala'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Coastal raiding bonuses enhanced', 'Ocean traversal timing improved for exploration advantage']
  },
  {
    id: 'mvemba-a-nzinga',
    name: 'Mvemba a Nzinga',
    civilization: 'Kongolese',
    uniqueAbility: 'Religious Convert',
    description: 'Cannot build Holy Site districts or earn Great Prophets, but gains all beliefs of any religion established in majority of his cities. Receives bonus yields from sculptures, artifacts, and great works.',
    perks: [
      'Automatic religion adoption with all beliefs',
      'Enhanced Great Work and artifact yields',
      'Strong cultural development',
      'Unique approach to religious gameplay'
    ],
    photo: '/images/mvemba-a-nzinga.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on cultural development and religious conversion through trade and diplomacy. Use Great Work bonuses for culture victory.',
      earlyGame: [
        'Build campuses and commercial hubs',
        'Establish trade routes with religious civs',
        'Focus on meeting civilizations with religions',
        'Build Mbanza unique districts'
      ],
      midGame: [
        'Allow religions to spread naturally',
        'Build cultural infrastructure',
        'Generate Great Works and artifacts',
        'Use Ngao Mbeba units for defense'
      ],
      lateGame: [
        'Push for culture victory with Great Work bonuses',
        'Use all religious beliefs effectively',
        'Generate tourism through artifacts',
        'Maintain cultural dominance'
      ],
      districts: ['Mbanza', 'Theater Square', 'Campus', 'Commercial Hub'],
      governors: ['Pingala', 'Magnus', 'Amani'],
      victory: ['Culture', 'Science']
    },
    bbgChanges: ['Great Work bonuses enhanced', 'Religious conversion mechanics improved for competitive balance']
  },
  {
    id: 'philip-ii',
    name: 'Philip II',
    civilization: 'Spanish',
    uniqueAbility: 'El Escorial',
    description: 'Inquisitors can remove heresy one additional time. Combat units gain +4 combat strength against other religious units. No movement cost for embarking and disembarking.',
    perks: [
      'Enhanced Inquisitor effectiveness',
      'Combat bonuses against religious units',
      'Free embark/disembark movement',
      'Conquistador unique units with religion spread'
    ],
    photo: '/images/philip-ii.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on religious warfare and overseas expansion. Use embark bonuses and religious combat for dominance.',
      earlyGame: [
        'Found religion early',
        'Build religious and military units',
        'Use free embark for coastal expansion',
        'Focus on religious technologies'
      ],
      midGame: [
        'Use Conquistadors for religion spread and warfare',
        'Build Mission improvements',
        'Engage in religious combat',
        'Expand to multiple continents'
      ],
      lateGame: [
        'Push for religious victory',
        'Use enhanced Inquisitors effectively',
        'Maintain religious and military dominance',
        'Leverage overseas empire'
      ],
      districts: ['Holy Site', 'Campus', 'Harbor', 'Encampment'],
      governors: ['Moksha', 'Victor', 'Magnus'],
      victory: ['Religious', 'Domination']
    },
    bbgChanges: ['Religious combat bonuses enhanced', 'Inquisitor effectiveness increased for religious warfare']
  },
  {
    id: 'john-curtin',
    name: 'John Curtin',
    civilization: 'Australian',
    uniqueAbility: 'Citadel of Civilization',
    description: 'Receives +100% production towards district projects, buildings, and units when a civilization has declared war on him or one of his allies, or he has liberated a city in the last 10 turns.',
    perks: [
      'Massive production bonuses when at war',
      'Liberation bonuses for production',
      'Strong defensive capabilities',
      'Digger unique units with bonuses outside home continent'
    ],
    photo: '/images/john-curtin.jpg',
    tier: 'D',
    strategies: {
      direction: 'Use defensive wars and liberation to trigger massive production bonuses. Build strong defensive infrastructure and leverage wartime production.',
      earlyGame: [
        'Build basic infrastructure',
        'Form defensive alliances',
        'Prepare for inevitable wars',
        'Focus on production and military technologies'
      ],
      midGame: [
        'Use wartime production bonuses',
        'Liberate cities for continued bonuses',
        'Build Outback Station improvements',
        'Deploy Digger units overseas'
      ],
      lateGame: [
        'Use production advantages for any victory',
        'Maintain wartime production through liberation',
        'Push for science or domination victory',
        'Leverage defensive strength'
      ],
      districts: ['Campus', 'Industrial Zone', 'Encampment'],
      governors: ['Magnus', 'Pingala', 'Victor'],
      victory: ['Science', 'Domination']
    },
    bbgChanges: ['Wartime production bonus maintained at +100%', 'Liberation mechanics preserved for sustained bonuses']
  },
  {
    id: 'robert-the-bruce',
    name: 'Robert the Bruce',
    civilization: 'Scottish',
    uniqueAbility: 'Bannockburn',
    description: 'Can declare Liberation wars after discovering Defensive Tactics. Gains +2 movement and +5 combat strength for all units for 10 turns after declaring a Liberation war.',
    perks: [
      'Early Liberation war capability',
      'Combat and movement bonuses after Liberation wars',
      'Highlander unique units with defensive bonuses',
      'Golf Course improvements for amenities and gold'
    ],
    photo: '/images/robert-the-bruce.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on Liberation wars for combat bonuses. Use defensive terrain and Highlander units for tactical advantages.',
      earlyGame: [
        'Research Defensive Tactics for Liberation wars',
        'Build military units for warfare',
        'Settle hills and rough terrain',
        'Focus on military technologies'
      ],
      midGame: [
        'Declare Liberation wars for bonuses',
        'Use Highlander units in rough terrain',
        'Build Golf Course improvements',
        'Maintain military pressure'
      ],
      lateGame: [
        'Use Liberation war bonuses effectively',
        'Push for domination victory',
        'Leverage terrain advantages',
        'Maintain military superiority'
      ],
      districts: ['Encampment', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Pingala', 'Magnus'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Liberation war bonuses enhanced', 'Highlander defensive bonuses in hills maintained']
  },
  {
    id: 'wilfrid-laurier',
    name: 'Wilfrid Laurier',
    civilization: 'Canadian',
    uniqueAbility: 'The Last Best West',
    description: 'Can build farms on tundra tiles. Tundra tiles provide +1 food and +1 production with Civil Engineering. Snow, tundra, and hills provide double adjacency bonuses for mines and lumber mills.',
    perks: [
      'Tundra farming capabilities',
      'Enhanced tundra yields with technology',
      'Double adjacency bonuses for extractive improvements',
      'Mountie unique units with national park synergy'
    ],
    photo: '/images/wilfrid-laurier.jpg',
    tier: 'C',
    strategies: {
      direction: 'Focus on tundra development and resource extraction. Use terrain bonuses and National Parks for balanced development.',
      earlyGame: [
        'Settle tundra areas aggressively',
        'Build farms on tundra tiles',
        'Focus on mining and lumber technologies',
        'Build extractive improvements'
      ],
      midGame: [
        'Research Civil Engineering for tundra bonuses',
        'Use Ice Hockey Rink unique building',
        'Build National Parks with Mounties',
        'Leverage resource extraction bonuses'
      ],
      lateGame: [
        'Use tundra advantages fully',
        'Push for any victory type',
        'Leverage National Parks for culture',
        'Maintain resource production advantages'
      ],
      districts: ['Campus', 'Industrial Zone', 'Theater Square'],
      governors: ['Magnus', 'Pingala', 'Liang'],
      victory: ['Science', 'Culture', 'Diplomatic']
    },
    bbgChanges: ['Tundra bonuses enhanced with Civil Engineering', 'Double adjacency bonuses maintained for resource strategy']
  },
  {
    id: 'dido',
    name: 'Dido',
    civilization: 'Phoenician',
    uniqueAbility: 'Founder of Carthage',
    description: 'Cities with a Cothon can move their units from one to another as if they were one continuous city. Settles gain +1 movement and sight. Units can cross mountains after researching Bronze Working.',
    perks: [
      'Teleportation between Cothon cities',
      'Enhanced Settler mobility',
      'Early mountain crossing ability',
      'Bireme unique naval units'
    ],
    photo: '/images/dido.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on rapid expansion and naval control. Use Cothon teleportation and enhanced mobility for strategic advantages.',
      earlyGame: [
        'Build Settlers with enhanced movement',
        'Research Bronze Working for mountain crossing',
        'Establish coastal cities with harbors',
        'Build Bireme units for naval control'
      ],
      midGame: [
        'Build Cothon districts for teleportation',
        'Use unit mobility for strategic positioning',
        'Establish trade networks',
        'Maintain naval superiority'
      ],
      lateGame: [
        'Use teleportation for tactical advantages',
        'Leverage expanded empire',
        'Push for any victory type',
        'Maintain mobility advantages'
      ],
      districts: ['Cothon', 'Campus', 'Commercial Hub'],
      governors: ['Magnus', 'Victor', 'Pingala'],
      victory: ['Domination', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Cothon teleportation preserved for unique tactical gameplay', 'Mountain crossing timing adjusted for balance']
  },
  {
    id: 'shaka',
    name: 'Shaka',
    civilization: 'Zulu',
    uniqueAbility: 'Amabutho',
    description: 'Forming corps and armies is cheaper and unlocked earlier. Corps and armies gain +5 combat strength.',
    perks: [
      'Cheaper and earlier corps/army formation',
      'Combat bonuses for grouped units',
      'Impi unique spearmen with flanking bonuses',
      'Ikanda unique encampments'
    ],
    photo: '/images/shaka.jpg',
    tier: 'C',
    strategies: {
      direction: 'Focus on military unit formations and early warfare. Use corps and army bonuses for overwhelming military power.',
      earlyGame: [
        'Build military units for formation',
        'Research Mercenaries early for corps',
        'Use Impi flanking bonuses',
        'Focus on military technologies'
      ],
      midGame: [
        'Form corps and armies cheaply',
        'Build Ikanda districts for military bonuses',
        'Engage in aggressive warfare',
        'Use formation combat bonuses'
      ],
      lateGame: [
        'Use military advantages for domination',
        'Maintain formation advantages',
        'Push for domination victory',
        'Leverage military infrastructure'
      ],
      districts: ['Ikanda', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Magnus', 'Pingala'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Corps/army formation bonuses maintained', 'Combat strength bonuses preserved for military focus']
  },
  {
    id: 'jadwiga',
    name: 'Jadwiga',
    civilization: 'Polish',
    uniqueAbility: 'Lithuanian Union',
    description: 'Can purchase religious units with faith at a 75% discount. Holy Sites gain adjacency bonuses from districts instead of only other Holy Sites.',
    perks: [
      'Cheap religious unit purchases',
      'Enhanced Holy Site adjacency bonuses',
      'Strong religious gameplay',
      'Winged Hussar unique cavalry with formation bonuses'
    ],
    photo: '/images/jadwiga.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on religious development with enhanced Holy Sites. Use cheap religious units for effective religious warfare.',
      earlyGame: [
        'Build Holy Sites with district adjacency',
        'Purchase religious units cheaply',
        'Found and spread religion early',
        'Focus on faith generation'
      ],
      midGame: [
        'Continue religious expansion',
        'Use Winged Hussar formation bonuses',
        'Build Sukiennice unique markets',
        'Maintain religious dominance'
      ],
      lateGame: [
        'Push for religious victory',
        'Use enhanced Holy Site yields',
        'Maintain military with religious units',
        'Leverage faith advantages'
      ],
      districts: ['Holy Site', 'Campus', 'Commercial Hub'],
      governors: ['Moksha', 'Pingala', 'Magnus'],
      victory: ['Religious', 'Culture', 'Science']
    },
    bbgChanges: ['Religious unit purchase discount maintained', 'Holy Site adjacency mechanics enhanced for competitive viability']
  },
  {
    id: 'tamar',
    name: 'Tamar',
    civilization: 'Georgian',
    uniqueAbility: 'Strength in Unity',
    description: 'Receives envoys faster when at peace. When you are suzerain of a city-state, all Georgian units gain +5 combat strength when fighting on that city-state\'s territory.',
    perks: [
      'Faster envoy generation during peace',
      'Combat bonuses on allied city-state territory',
      'Strong diplomatic gameplay',
      'Khevsur unique units with formation bonuses'
    ],
    photo: '/images/tamar.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on peaceful diplomacy and city-state relationships. Use combat bonuses on allied territory for defensive advantages.',
      earlyGame: [
        'Maintain peace for envoy bonuses',
        'Send envoys to nearby city-states',
        'Build diplomatic infrastructure',
        'Focus on meeting civilizations'
      ],
      midGame: [
        'Establish suzerainty relationships',
        'Use Khevsur formation bonuses',
        'Fight wars on allied city-state territory',
        'Build Tsikhe unique walls'
      ],
      lateGame: [
        'Use diplomatic advantages',
        'Maintain combat bonuses through alliances',
        'Push for diplomatic victory',
        'Leverage city-state relationships'
      ],
      districts: ['Campus', 'Commercial Hub', 'Holy Site'],
      governors: ['Amani', 'Pingala', 'Magnus'],
      victory: ['Diplomatic', 'Culture', 'Science']
    },
    bbgChanges: ['Envoy generation rate enhanced during peacetime', 'City-state combat bonuses maintained for alliance strategy']
  },
  {
    id: 'matthias-corvinus',
    name: 'Matthias Corvinus',
    civilization: 'Hungarian',
    uniqueAbility: 'Raven King',
    description: 'Levied units gain +5 combat strength and +1 movement. Upgrades levied units at no cost.',
    perks: [
      'Enhanced levied unit combat and movement',
      'Free upgrades for levied units',
      'Strong city-state military relationships',
      'Huszár unique cavalry with bonus vs damaged units'
    ],
    photo: '/images/matthias-corvinus.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on city-state relationships and military levies. Use enhanced levied units for cost-effective warfare.',
      earlyGame: [
        'Build relationships with city-states',
        'Focus on generating gold for levies',
        'Send envoys strategically',
        'Build basic military infrastructure'
      ],
      midGame: [
        'Levy city-state units regularly',
        'Use enhanced levied unit bonuses',
        'Build Thermal Bath unique building',
        'Maintain military through levies'
      ],
      lateGame: [
        'Use free upgrades for modern levied units',
        'Push for domination with enhanced armies',
        'Leverage city-state military relationships',
        'Maintain cost-effective military'
      ],
      districts: ['Commercial Hub', 'Encampment', 'Campus'],
      governors: ['Amani', 'Victor', 'Magnus'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Levied unit bonuses enhanced', 'Free upgrade mechanics preserved for cost-effective military strategy']
  },
  {
    id: 'kristina',
    name: 'Kristina',
    civilization: 'Swedish',
    uniqueAbility: 'Minerva of the North',
    description: 'Buildings with at least 3 Great Work slots and wonders with at least 2 Great Work slots are automatically themed when they have Great Works. Gains the Queen\'s Bibliotheque building.',
    perks: [
      'Automatic theming for Great Works',
      'Enhanced Great Work slot buildings',
      'Strong cultural infrastructure',
      'Carolean unique units with bonus after kills'
    ],
    photo: '/images/kristina.jpg',
    tier: 'B',
    strategies: {
      direction: 'Focus on Great Work generation and cultural infrastructure. Use automatic theming for enhanced tourism.',
      earlyGame: [
        'Build cultural districts early',
        'Focus on generating Great People',
        'Plan Great Work infrastructure',
        'Build campuses for Great Scientists'
      ],
      midGame: [
        'Build wonders with Great Work slots',
        'Generate Great Works systematically',
        'Use automatic theming bonuses',
        'Build cultural infrastructure'
      ],
      lateGame: [
        'Push for culture victory with themed works',
        'Use enhanced tourism bonuses',
        'Leverage cultural advantages',
        'Maintain cultural dominance'
      ],
      districts: ['Theater Square', 'Campus', 'Commercial Hub'],
      governors: ['Pingala', 'Magnus', 'Amani'],
      victory: ['Culture', 'Science']
    },
    bbgChanges: ['Automatic theming mechanics preserved', 'Great Work slot requirements maintained for cultural focus']
  },
  {
    id: 'pachacuti',
    name: 'Pachacuti',
    civilization: 'Incan',
    uniqueAbility: 'Qhapaq Ñan',
    description: 'Domestic trade routes gain +1 food and +2 production for every mountain in the origin city. Can build the Qhapaq Ñan improvement on mountains.',
    perks: [
      'Trade route bonuses from mountains',
      'Mountain road improvements',
      'Strong mountain settling capability',
      'Warak\'aq unique recon units'
    ],
    photo: '/images/pachacuti.jpg',
    tier: 'C',
    strategies: {
      direction: 'Focus on mountain settlement and domestic trade. Use terrain advantages and mountain improvements for development.',
      earlyGame: [
        'Settle cities near mountains',
        'Build domestic trade routes',
        'Construct Qhapaq Ñan improvements',
        'Focus on infrastructure technologies'
      ],
      midGame: [
        'Maximize mountain trade bonuses',
        'Use Warak\'aq for exploration',
        'Build Terrace Farm improvements',
        'Develop strong internal economy'
      ],
      lateGame: [
        'Use internal trade advantages',
        'Leverage mountain infrastructure',
        'Push for any victory type',
        'Maintain production advantages'
      ],
      districts: ['Campus', 'Industrial Zone', 'Commercial Hub'],
      governors: ['Magnus', 'Pingala', 'Liang'],
      victory: ['Science', 'Culture', 'Domination']
    },
    bbgChanges: ['Mountain trade bonuses enhanced', 'Qhapaq Ñan mechanics improved for competitive play']
  },
  {
    id: 'lady-six-sky',
    name: 'Lady Six Sky',
    civilization: 'Mayan',
    uniqueAbility: 'Ix Mutal Ahaw',
    description: 'Capital gets +10% yields for each luxury resource. Units within 6 tiles of the capital get +5 combat strength.',
    perks: [
      'Luxury resource bonuses for capital',
      'Combat bonuses near capital',
      'Strong defensive homeland advantage',
      'Hul\'che unique archer units'
    ],
    photo: '/images/lady-six-sky.jpg',
    tier: 'D',
    strategies: {
      direction: 'Focus on capital development and luxury resource acquisition. Use homeland combat bonuses for defensive play.',
      earlyGame: [
        'Develop capital with luxury resources',
        'Build Observatory districts for science',
        'Use combat bonuses for defense',
        'Focus on capital infrastructure'
      ],
      midGame: [
        'Continue capital development',
        'Use Hul\'che for ranged warfare',
        'Build plantation improvements',
        'Maintain strong homeland defense'
      ],
      lateGame: [
        'Use capital advantages for victory',
        'Leverage luxury bonuses fully',
        'Push for science victory',
        'Maintain defensive advantages'
      ],
      districts: ['Observatory', 'Commercial Hub', 'Encampment'],
      governors: ['Pingala', 'Magnus', 'Victor'],
      victory: ['Science', 'Culture']
    },
    bbgChanges: ['Luxury resource bonuses enhanced', 'Combat strength bonuses maintained for defensive homeland strategy']
  },
  {
    id: 'simon-bolivar',
    name: 'Simón Bolívar',
    civilization: 'Gran Colombian',
    uniqueAbility: 'Campaña Admirable',
    description: 'Entering a new era grants a free promotion to all units. Units gain +1 movement on their turn after earning a promotion.',
    perks: [
      'Free promotions each era',
      'Movement bonuses after promotions',
      'Strong unit development over time',
      'Llanero unique cavalry with bonus in floodplains'
    ],
    photo: '/images/simon-bolivar.jpg',
    tier: 'D',
    strategies: {
      direction: 'Focus on era progression and unit promotion. Use movement bonuses and veteran units for military advantages.',
      earlyGame: [
        'Focus on era progression for promotions',
        'Build military units early',
        'Use promotion movement bonuses',
        'Settle near floodplains for Llanero bonuses'
      ],
      midGame: [
        'Continue era advancement',
        'Use veteran units with promotions',
        'Build Hacienda improvements',
        'Maintain military advantages'
      ],
      lateGame: [
        'Use highly promoted veteran units',
        'Push for domination victory',
        'Leverage movement advantages',
        'Maintain military superiority'
      ],
      districts: ['Encampment', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Pingala', 'Magnus'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Free promotion mechanics enhanced', 'Movement bonuses preserved for tactical advantages']
  },
  {
    id: 'ambiorix',
    name: 'Ambiorix',
    civilization: 'Gallic',
    uniqueAbility: 'King of the Eburones',
    description: 'Non-civilian units gain +2 combat strength for each adjacent unit. Culture bomb when building Gaesatae, clearing barbarian camps, or when they are the first to research certain techs.',
    perks: [
      'Combat bonuses from unit adjacency',
      'Culture bombs from various actions',
      'Strong early warfare capabilities',
      'Gaesatae unique warriors with bonus vs cavalry'
    ],
    photo: '/images/ambiorix.jpg',
    tier: 'D',
    strategies: {
      direction: 'Focus on unit formations and cultural expansion. Use culture bombs and formation bonuses for territorial and military advantages.',
      earlyGame: [
        'Build Gaesatae for culture bombs',
        'Clear barbarian camps for territory',
        'Use unit formation bonuses',
        'Focus on early warfare'
      ],
      midGame: [
        'Continue formation-based combat',
        'Use culture bomb expansion',
        'Build Oppidum unique districts',
        'Maintain territorial advantages'
      ],
      lateGame: [
        'Use expanded territory for victory',
        'Leverage cultural advantages',
        'Push for culture or domination victory',
        'Maintain formation combat benefits'
      ],
      districts: ['Oppidum', 'Campus', 'Theater Square'],
      governors: ['Victor', 'Pingala', 'Magnus'],
      victory: ['Culture', 'Domination']
    },
    bbgChanges: ['Formation combat bonuses enhanced', 'Culture bomb mechanics preserved for territorial expansion']
  },
  {
    id: 'ba-trieu',
    name: 'Bà Triệu',
    civilization: 'Vietnamese',
    uniqueAbility: 'Nine Dragon River Delta',
    description: 'Land speciality districts can only be built on rainforest, marsh, or floodplain tiles. Buildings in these districts provide +2 science.',
    perks: [
      'District placement on specific terrain types',
      'Science bonuses from terrain-placed districts',
      'Strong rainforest and marsh development',
      'Voi Chiến unique units with bonus in rainforest'
    ],
    photo: '/images/ba-trieu.jpg',
    tier: 'C',
    strategies: {
      direction: 'Focus on rainforest and marsh settlement. Use terrain-specific districts for enhanced science generation.',
      earlyGame: [
        'Settle cities with rainforest and marsh',
        'Build districts on appropriate terrain',
        'Use Voi Chiến in rainforest combat',
        'Focus on preserving useful terrain'
      ],
      midGame: [
        'Build Thánh districts for culture',
        'Use terrain district bonuses',
        'Continue rainforest development',
        'Build strong science infrastructure'
      ],
      lateGame: [
        'Use science bonuses for victory',
        'Leverage terrain advantages',
        'Push for science victory',
        'Maintain environmental advantages'
      ],
      districts: ['Campus', 'Thánh', 'Commercial Hub'],
      governors: ['Pingala', 'Liang', 'Magnus'],
      victory: ['Science', 'Culture']
    },
    bbgChanges: ['Terrain district requirements maintained', 'Science bonuses enhanced for competitive viability']
  },
  {
    id: 'nader-shah',
    name: 'Nader Shah',
    civilization: 'Persian',
    uniqueAbility: 'Sword of Persia',
    description: 'Declaring surprise wars and conquering cities grants movement to all units. Gain gold and science when killing units with melee and anti-cavalry units.',
    perks: [
      'Movement bonuses from surprise wars and conquest',
      'Gold and science from combat kills',
      'Strong aggressive warfare capabilities',
      'Immortal unique units with bonus healing'
    ],
    photo: '/images/nader-shah.jpg',
    tier: 'A',
    strategies: {
      direction: 'Focus on aggressive surprise warfare and conquest. Use movement bonuses and kill rewards for sustained military campaigns.',
      earlyGame: [
        'Declare surprise wars for movement bonuses',
        'Build melee units for kill rewards',
        'Use Immortal defensive bonuses',
        'Focus on military technologies'
      ],
      midGame: [
        'Continue aggressive conquest',
        'Use movement bonuses for rapid expansion',
        'Build Pairidaeza improvements',
        'Maintain military momentum'
      ],
      lateGame: [
        'Use conquered empire for victory',
        'Leverage accumulated bonuses',
        'Push for domination victory',
        'Maintain aggressive military strategy'
      ],
      districts: ['Encampment', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Magnus', 'Pingala'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Surprise war bonuses enhanced', 'Kill reward mechanics improved for sustained warfare']
  },
  {
    id: 'basil-ii',
    name: 'Basil II',
    civilization: 'Byzantine',
    uniqueAbility: 'Porphyrogennetos',
    description: 'Heavy and light cavalry units deal full damage to cities following the same religion. Tagma replace knights and are stronger when fighting units that follow the player\'s religion.',
    perks: [
      'Cavalry units deal full damage to cities of same religion',
      'Tagma unique knights with religious bonuses',
      'Strong religious warfare capabilities',
      'Hippodrome unique entertainment complex'
    ],
    photo: '/images/basil-ii.png',
    tier: 'B',
    strategies: {
      direction: 'Focus on religious expansion and cavalry warfare. Use religious conversion and cavalry units for effective city conquest.',
      earlyGame: [
        'Found religion early for city damage bonuses',
        'Build religious infrastructure',
        'Focus on cavalry technologies',
        'Spread religion to target civilizations'
      ],
      midGame: [
        'Build Tagma units for religious warfare',
        'Use Hippodrome for amenities and faith',
        'Convert enemy cities before attacking',
        'Build strong cavalry forces'
      ],
      lateGame: [
        'Use cavalry advantages for domination',
        'Leverage religious conversion for easier conquest',
        'Push for domination or religious victory',
        'Maintain cavalry superiority'
      ],
      districts: ['Holy Site', 'Hippodrome', 'Encampment', 'Campus'],
      governors: ['Moksha', 'Victor', 'Magnus'],
      victory: ['Domination', 'Religious']
    },
    bbgChanges: ['Tagma religious bonuses enhanced', 'Cavalry city damage mechanics preserved for religious warfare']
  },
  {
    id: 'cyrus',
    name: 'Cyrus',
    civilization: 'Persian',
    uniqueAbility: 'Fall of Babylon',
    description: 'Surprise war gives +2 movement to all units for 10 turns. Declares war: all units gain +5 combat strength for 10 turns. Gains the Immortal unique unit.',
    perks: [
      'Movement and combat bonuses from surprise wars',
      'Strong early military capabilities',
      'Immortal unique units with defensive bonuses',
      'Pairidaeza improvements for culture and gold'
    ],
    photo: '/images/cyrus.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on aggressive surprise warfare with movement bonuses. Use early military advantages for rapid expansion.',
      earlyGame: [
        'Declare surprise wars for bonuses',
        'Build Immortal units for warfare',
        'Use movement bonuses for rapid strikes',
        'Focus on military technologies'
      ],
      midGame: [
        'Continue aggressive expansion',
        'Build Pairidaeza improvements',
        'Use combat bonuses effectively',
        'Maintain military momentum'
      ],
      lateGame: [
        'Use expanded empire for victory',
        'Leverage early military advantages',
        'Push for domination victory',
        'Maintain aggressive strategy'
      ],
      districts: ['Encampment', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Magnus', 'Pingala'],
      victory: ['Domination', 'Culture']
    },
    bbgChanges: ['Surprise war bonuses balanced for multiplayer', 'Movement and combat bonuses maintained for aggressive play']
  },
  {
    id: 'elizabeth-i',
    name: 'Elizabeth I',
    civilization: 'English',
    uniqueAbility: 'Golden Age',
    description: 'Naval units gain +1 movement. Generating a Great Admiral also generates a free Royal Navy unique unit. Gains the Sea Dog unique naval unit.',
    perks: [
      'Enhanced naval unit movement',
      'Free Royal Navy units from Great Admirals',
      'Sea Dog unique naval raiders',
      'Strong naval exploration and warfare'
    ],
    photo: '/images/elizabeth-i.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on naval dominance and overseas expansion. Use enhanced naval units for exploration and warfare.',
      earlyGame: [
        'Build naval units for exploration',
        'Focus on Great Admiral generation',
        'Settle coastal cities',
        'Build harbors early'
      ],
      midGame: [
        'Use Sea Dog units for naval raids',
        'Generate free Royal Navy units',
        'Build Royal Navy Dockyard districts',
        'Maintain naval superiority'
      ],
      lateGame: [
        'Use naval advantages for victory',
        'Leverage overseas expansion',
        'Push for domination or diplomatic victory',
        'Maintain naval control'
      ],
      districts: ['Royal Navy Dockyard', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Magnus', 'Pingala'],
      victory: ['Domination', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Naval movement bonuses preserved', 'Great Admiral synergy enhanced for naval strategy']
  },
  {
    id: 'genghis-khan',
    name: 'Genghis Khan',
    civilization: 'Mongolian',
    uniqueAbility: 'Mongol Horde',
    description: 'Cavalry class units gain +3 combat strength and have a chance to capture defeated cavalry class units. All units gain +1 movement and +1 combat strength for each level of diplomatic visibility above secret.',
    perks: [
      'Cavalry combat bonuses and unit capture',
      'Diplomatic visibility bonuses for all units',
      'Keshig unique ranged cavalry',
      'Strong mobile warfare capabilities'
    ],
    photo: '/images/genghis-khan.png',
    tier: 'D',
    strategies: {
      direction: 'Focus on cavalry warfare and diplomatic intelligence. Use visibility bonuses and unit capture for military dominance.',
      earlyGame: [
        'Build cavalry units early',
        'Establish diplomatic contacts for visibility',
        'Use Keshig for ranged cavalry warfare',
        'Focus on mobility and raids'
      ],
      midGame: [
        'Capture enemy cavalry units',
        'Use diplomatic visibility bonuses',
        'Build Ordu unique encampments',
        'Maintain mobile army'
      ],
      lateGame: [
        'Use captured units and bonuses for victory',
        'Leverage diplomatic advantages',
        'Push for domination victory',
        'Maintain cavalry superiority'
      ],
      districts: ['Ordu', 'Campus', 'Commercial Hub'],
      governors: ['Victor', 'Amani', 'Magnus'],
      victory: ['Domination', 'Diplomatic']
    },
    bbgChanges: ['Unit capture mechanics balanced', 'Diplomatic visibility bonuses enhanced for competitive play']
  },
  {
    id: 'gitarja',
    name: 'Gitarja',
    civilization: 'Indonesian',
    uniqueAbility: 'Exalted Goddess of the Three Realms',
    description: 'Religious units can enter ocean tiles and ignore movement costs when embarking or disembarking. City centers adjacent to coast gain +0.5 housing per adjacent luxury resource.',
    perks: [
      'Religious units can cross oceans freely',
      'Housing bonuses from coastal luxury resources',
      'Jong unique naval units',
      'Kampung unique improvements on water'
    ],
    photo: '/images/gitarja.png',
    tier: 'F',
    strategies: {
      direction: 'Focus on coastal religious expansion and naval development. Use ocean-crossing religious units for global conversion.',
      earlyGame: [
        'Settle coastal cities near luxury resources',
        'Found religion early for ocean missionaries',
        'Build religious infrastructure',
        'Focus on naval technologies'
      ],
      midGame: [
        'Use religious units for overseas expansion',
        'Build Jong units for naval warfare',
        'Construct Kampung improvements',
        'Spread religion globally'
      ],
      lateGame: [
        'Push for religious victory through ocean expansion',
        'Use housing bonuses for large cities',
        'Leverage naval advantages',
        'Maintain religious dominance'
      ],
      districts: ['Holy Site', 'Harbor', 'Campus'],
      governors: ['Moksha', 'Magnus', 'Pingala'],
      victory: ['Religious', 'Science', 'Culture']
    },
    bbgChanges: ['Ocean movement for religious units preserved', 'Coastal luxury housing bonuses enhanced for island maps']
  },
  {
    id: 'jayavarman-vii',
    name: 'Jayavarman VII',
    civilization: 'Khmer',
    uniqueAbility: 'Grand Barays',
    description: 'Holy Sites provide amenities and housing equal to their adjacency bonus. Aqueducts provide +3 faith and enable irrigation without fresh water.',
    perks: [
      'Holy Sites provide amenities and housing',
      'Aqueducts generate faith and enable irrigation',
      'Domrey unique elephant units',
      'Prasat unique Holy Site building'
    ],
    photo: '/images/jayavarman-vii.png',
    tier: 'C',
    strategies: {
      direction: 'Focus on faith generation and population growth. Use enhanced Holy Sites and aqueducts for sustainable development.',
      earlyGame: [
        'Build Holy Sites with high adjacency',
        'Construct aqueducts for faith and growth',
        'Focus on religious technologies',
        'Plan cities around water and faith'
      ],
      midGame: [
        'Use Domrey units for siege warfare',
        'Build Prasat buildings for relic bonuses',
        'Generate large populations with amenities',
        'Continue faith infrastructure'
      ],
      lateGame: [
        'Push for religious victory with faith advantages',
        'Use large populations for any victory',
        'Leverage amenity and housing bonuses',
        'Maintain religious and cultural strength'
      ],
      districts: ['Holy Site', 'Campus', 'Theater Square'],
      governors: ['Moksha', 'Pingala', 'Magnus'],
      victory: ['Religious', 'Culture', 'Science']
    },
    bbgChanges: ['Holy Site amenity bonuses preserved', 'Aqueduct faith generation enhanced for competitive play']
  },
  {
    id: 'joao-iii',
    name: 'João III',
    civilization: 'Portuguese',
    uniqueAbility: 'Porta do Cerco',
    description: 'International trade routes gain +1 gold for every luxury or bonus resource at the destination. Can build the Feitoria improvement on foreign luxury and bonus resources.',
    perks: [
      'Enhanced gold from international trade routes',
      'Feitoria improvements on foreign resources',
      'Nau unique naval exploration units',
      'Navigation School unique building'
    ],
    photo: '/images/joao-iii.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on international trade and resource exploitation. Use global trade networks and Feitoria for economic dominance.',
      earlyGame: [
        'Establish international trade routes early',
        'Meet civilizations for trade opportunities',
        'Build naval units for exploration',
        'Focus on commercial technologies'
      ],
      midGame: [
        'Build Feitoria on foreign luxury resources',
        'Use Nau units for exploration and trade',
        'Construct Navigation School for Great Admiral points',
        'Maximize trade route efficiency'
      ],
      lateGame: [
        'Use economic advantages for any victory',
        'Leverage global trade network',
        'Push for diplomatic or science victory',
        'Maintain trade dominance'
      ],
      districts: ['Commercial Hub', 'Harbor', 'Campus'],
      governors: ['Magnus', 'Amani', 'Pingala'],
      victory: ['Diplomatic', 'Science', 'Culture']
    },
    bbgChanges: ['Trade route bonuses enhanced', 'Feitoria mechanics preserved for economic strategy']
  },
  {
    id: 'julius-caesar',
    name: 'Julius Caesar',
    civilization: 'Roman',
    uniqueAbility: 'Veni, Vidi, Vici',
    description: 'Gains 200 gold when clearing a barbarian camp. Units gain +2 combat strength for each adjacent friendly unit (maximum +8). Roads built 50% faster.',
    perks: [
      'Gold bonuses from clearing barbarian camps',
      'Combat bonuses from unit adjacency',
      'Faster road construction',
      'Legion unique units with road building'
    ],
    photo: '/images/julius-caesar.png',
    tier: 'C',
    strategies: {
      direction: 'Focus on early expansion and road networks. Use formation combat and barbarian clearing for rapid development.',
      earlyGame: [
        'Clear barbarian camps for gold bonuses',
        'Build roads quickly for connectivity',
        'Use Legion formation bonuses',
        'Focus on early expansion'
      ],
      midGame: [
        'Continue road building for empire connectivity',
        'Use formation combat effectively',
        'Build strong infrastructure',
        'Leverage gold advantages'
      ],
      lateGame: [
        'Use infrastructure advantages for victory',
        'Leverage early economic bonuses',
        'Push for any victory type',
        'Maintain formation combat benefits'
      ],
      districts: ['Commercial Hub', 'Campus', 'Encampment'],
      governors: ['Magnus', 'Victor', 'Pingala'],
      victory: ['Domination', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Formation combat bonuses capped at +8', 'Barbarian camp gold rewards enhanced for early game economy']
  },
  {
    id: 'kupe',
    name: 'Kupe',
    civilization: 'Māori',
    uniqueAbility: 'Kupe\'s Voyage',
    description: 'Starts in the ocean. +2 science and culture per turn before settling first city. Palace provides +3 housing and +1 amenity. Unimproved woods and rainforest provide +1 production.',
    perks: [
      'Ocean start with pre-settlement bonuses',
      'Enhanced palace benefits',
      'Production from unimproved forests',
      'Toa unique warrior units with haka war dance'
    ],
    photo: '/images/kupe.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on delayed settlement and environmental conservation. Use ocean start and forest bonuses for unique development.',
      earlyGame: [
        'Delay first city settlement for bonuses',
        'Explore oceans for optimal settling location',
        'Preserve woods and rainforest for production',
        'Build Toa units with combat bonuses'
      ],
      midGame: [
        'Build Marae unique meeting houses',
        'Use Pa unique forts for defense',
        'Continue forest conservation',
        'Focus on culture and tourism'
      ],
      lateGame: [
        'Push for culture victory with tourism',
        'Leverage environmental bonuses',
        'Use enhanced housing and amenities',
        'Maintain unique development path'
      ],
      districts: ['Marae', 'Campus', 'Harbor'],
      governors: ['Pingala', 'Liang', 'Magnus'],
      victory: ['Culture', 'Science']
    },
    bbgChanges: ['Ocean start mechanics preserved', 'Forest production bonuses enhanced for environmental strategy']
  },
  {
    id: 'lautaro',
    name: 'Lautaro',
    civilization: 'Mapuche',
    uniqueAbility: 'Swift Hawk',
    description: 'Units trained in cities with an established governor gain +25% combat experience. Defeating enemy units in tiles owned by the enemy grants loyalty pressure to nearby enemy cities.',
    perks: [
      'Enhanced combat experience from governors',
      'Loyalty pressure from defeating enemies in their territory',
      'Malón Raider unique recon units',
      'Chemamull improvements for tourism'
    ],
    photo: '/images/lautaro.png',
    tier: 'C',
    strategies: {
      direction: 'Focus on governor development and territorial warfare. Use experience bonuses and loyalty pressure for expansion.',
      earlyGame: [
        'Establish governors in key cities',
        'Build military units with experience bonuses',
        'Use Malón Raider for pillaging',
        'Focus on territorial expansion'
      ],
      midGame: [
        'Fight wars in enemy territory for loyalty pressure',
        'Build Chemamull improvements for culture',
        'Use veteran units effectively',
        'Continue governor development'
      ],
      lateGame: [
        'Use loyalty pressure to flip cities',
        'Leverage tourism from Chemamull',
        'Push for culture or domination victory',
        'Maintain territorial advantages'
      ],
      districts: ['Encampment', 'Theater Square', 'Campus'],
      governors: ['Victor', 'Pingala', 'Magnus'],
      victory: ['Culture', 'Domination']
    },
    bbgChanges: ['Governor experience bonuses enhanced', 'Loyalty pressure mechanics improved for competitive balance']
  },
  {
    id: 'ludwig-ii',
    name: 'Ludwig II',
    civilization: 'German',
    uniqueAbility: 'Fairy Tale King',
    description: 'Can build one more specialty district than the population limit would allow. Swan Lake and Neuschwanstein automatically appear after researching certain techs if requirements are met.',
    perks: [
      'Extra district capacity beyond population limits',
      'Automatic wonder construction when requirements met',
      'Enhanced wonder-building capabilities',
      'Strong infrastructure development'
    ],
    photo: '/images/ludwig-ii.png',
    tier: 'S',
    strategies: {
      direction: 'Focus on infrastructure and wonder construction. Use extra district capacity for comprehensive development.',
      earlyGame: [
        'Plan cities with extra district capacity',
        'Focus on population growth for more districts',
        'Research technologies for automatic wonders',
        'Build comprehensive infrastructure'
      ],
      midGame: [
        'Use extra districts for specialized cities',
        'Trigger automatic wonder construction',
        'Build Hansa districts for production',
        'Continue infrastructure development'
      ],
      lateGame: [
        'Leverage infrastructure advantages for victory',
        'Use wonder bonuses effectively',
        'Push for any victory type',
        'Maintain development lead'
      ],
      districts: ['Hansa', 'Campus', 'Theater Square', 'Commercial Hub'],
      governors: ['Magnus', 'Pingala', 'Liang'],
      victory: ['Science', 'Culture', 'Diplomatic']
    },
    bbgChanges: ['Extra district mechanics preserved', 'Automatic wonder construction balanced for competitive play']
  },
  {
    id: 'menelik-ii',
    name: 'Menelik II',
    civilization: 'Ethiopian',
    uniqueAbility: 'Council of Ministers',
    description: 'Cities founded on hills gain +4 combat strength for all units trained in that city. Units gain +5 combat strength when fighting on hills.',
    perks: [
      'Combat bonuses for units trained in hill cities',
      'Additional combat bonuses when fighting on hills',
      'Oromo Cavalry unique units',
      'Rock-Hewn Church unique building'
    ],
    photo: '/images/menelik-ii.png',
    tier: 'C',
    strategies: {
      direction: 'Focus on hill settlement and defensive warfare. Use terrain advantages and combat bonuses for military superiority.',
      earlyGame: [
        'Settle cities on hills for combat bonuses',
        'Build military units in hill cities',
        'Use terrain advantages effectively',
        'Focus on defensive positioning'
      ],
      midGame: [
        'Use Oromo Cavalry for mobile warfare',
        'Build Rock-Hewn Churches for faith and tourism',
        'Fight battles on hills when possible',
        'Maintain defensive advantages'
      ],
      lateGame: [
        'Use combat advantages for victory',
        'Leverage tourism from Rock-Hewn Churches',
        'Push for domination or culture victory',
        'Maintain terrain superiority'
      ],
      districts: ['Encampment', 'Holy Site', 'Campus'],
      governors: ['Victor', 'Moksha', 'Pingala'],
      victory: ['Domination', 'Culture', 'Religious']
    },
    bbgChanges: ['Hill combat bonuses enhanced', 'Unit training bonuses maintained for defensive strategy']
  },
  {
    id: 'montezuma',
    name: 'Montezuma',
    civilization: 'Aztec',
    uniqueAbility: 'Gifts for the Tlatoani',
    description: 'Luxury resources provide an amenity to 6 cities instead of 4. Military units receive +1 combat strength for each different improved luxury resource.',
    perks: [
      'Enhanced luxury resource amenity distribution',
      'Combat bonuses from diverse luxury resources',
      'Eagle Warrior unique units with unit capture',
      'Tlachtli unique entertainment complex'
    ],
    photo: '/images/montezuma.png',
    tier: 'S',
    strategies: {
      direction: 'Focus on luxury resource acquisition and diversity. Use amenity advantages and combat bonuses for empire management.',
      earlyGame: [
        'Identify and settle near luxury resources',
        'Build Eagle Warriors for unit capture',
        'Focus on diverse luxury acquisition',
        'Plan empire for amenity distribution'
      ],
      midGame: [
        'Build Tlachtli for amenities and faith',
        'Continue luxury resource development',
        'Use combat bonuses from diverse resources',
        'Maintain happy empire'
      ],
      lateGame: [
        'Use amenity advantages for large empire',
        'Leverage combat bonuses for victory',
        'Push for any victory type with happy cities',
        'Maintain luxury diversity'
      ],
      districts: ['Tlachtli', 'Campus', 'Holy Site', 'Encampment'],
      governors: ['Magnus', 'Pingala', 'Moksha'],
      victory: ['Domination', 'Science', 'Religious']
    },
    bbgChanges: ['Luxury amenity distribution enhanced', 'Combat bonus scaling improved for diverse resource strategy']
  },
  {
    id: 'nzinga-mbande',
    name: 'Nzinga Mbande',
    civilization: 'Kongolese',
    uniqueAbility: 'Ndongo and Matamba',
    description: 'Palace provides +2 food, +2 production, +1 faith, +1 gold. Gaining a level on any unit provides +1 loyalty in all cities.',
    perks: [
      'Enhanced palace yields',
      'Loyalty bonuses from unit level gains',
      'Strong early development',
      'Ngao Mbeba unique swordsmen'
    ],
    photo: '/images/nzinga-mbandi.png',
    tier: 'S',
    strategies: {
      direction: 'Focus on military experience and loyalty management. Use enhanced palace and unit leveling for empire stability.',
      earlyGame: [
        'Use enhanced palace for strong start',
        'Build military units and gain experience',
        'Focus on combat for loyalty bonuses',
        'Build basic infrastructure'
      ],
      midGame: [
        'Continue unit leveling for loyalty',
        'Use Ngao Mbeba for strong infantry',
        'Build Mbanza districts for growth',
        'Maintain empire loyalty'
      ],
      lateGame: [
        'Use loyalty advantages for stability',
        'Leverage experienced military',
        'Push for any victory type',
        'Maintain strong empire foundation'
      ],
      districts: ['Mbanza', 'Campus', 'Encampment'],
      governors: ['Victor', 'Magnus', 'Pingala'],
      victory: ['Domination', 'Science', 'Culture']
    },
    bbgChanges: ['Palace bonuses enhanced for early game', 'Loyalty from unit leveling improved for empire management']
  },
  {
    id: 'pedro-ii',
    name: 'Pedro II',
    civilization: 'Brazilian',
    uniqueAbility: 'Magnanimous',
    description: 'Rainforest tiles provide +1 appeal to adjacent tiles. Great Person points are increased by 100% during Golden and Heroic Ages.',
    perks: [
      'Appeal bonuses from rainforest preservation',
      'Enhanced Great Person generation during Golden Ages',
      'Minas Geraes unique battleships',
      'Street Carnival unique carnival building'
    ],
    photo: '/images/pedro-ii.png',
    tier: 'S',
    strategies: {
      direction: 'Focus on Great Person generation and environmental preservation. Use Golden Ages for enhanced development.',
      earlyGame: [
        'Preserve rainforest for appeal bonuses',
        'Build toward Golden Ages',
        'Focus on Great Person infrastructure',
        'Plan cities around rainforest'
      ],
      midGame: [
        'Trigger Golden Ages for Great Person bonuses',
        'Build Street Carnival for amenities',
        'Use Minas Geraes for naval power',
        'Generate Great Works and culture'
      ],
      lateGame: [
        'Use Great Person advantages for victory',
        'Leverage appeal bonuses for tourism',
        'Push for culture victory',
        'Maintain Golden Age benefits'
      ],
      districts: ['Street Carnival', 'Campus', 'Theater Square', 'Harbor'],
      governors: ['Pingala', 'Magnus', 'Amani'],
      victory: ['Culture', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Great Person bonuses during Golden Ages enhanced', 'Rainforest appeal mechanics preserved for environmental strategy']
  },
  {
    id: 'poundmaker',
    name: 'Poundmaker',
    civilization: 'Cree',
    uniqueAbility: 'Favourable Terms',
    description: 'All trade routes provide +1 food and gold for every Camp and Pasture improvement in the origin city. After researching Pottery, may purchase Traders with Faith.',
    perks: [
      'Enhanced trade routes from Camp and Pasture improvements',
      'Faith purchase of Traders',
      'Okihtcitaw unique scouts with free promotions',
      'Mekewap unique improvements'
    ],
    photo: '/images/poundmaker.png',
    tier: 'B',
    strategies: {
      direction: 'Focus on trade networks and resource improvements. Use enhanced trade routes and faith-purchased Traders for economic growth.',
      earlyGame: [
        'Build Camps and Pastures for trade bonuses',
        'Use Okihtcitaw scouts for exploration',
        'Research Pottery for faith Trader purchases',
        'Establish early trade networks'
      ],
      midGame: [
        'Build extensive trade route networks',
        'Construct Mekewap improvements for bonuses',
        'Use faith to purchase additional Traders',
        'Focus on resource development'
      ],
      lateGame: [
        'Use trade advantages for any victory',
        'Leverage economic bonuses',
        'Push for diplomatic or science victory',
        'Maintain trade dominance'
      ],
      districts: ['Commercial Hub', 'Campus', 'Holy Site'],
      governors: ['Magnus', 'Pingala', 'Moksha'],
      victory: ['Diplomatic', 'Science', 'Culture']
    },
    bbgChanges: ['Trade route bonuses from improvements enhanced', 'Faith Trader purchase mechanics preserved for economic strategy']
  },
  {
    id: 'ramses-ii',
    name: 'Ramses II',
    civilization: 'Egyptian',
    uniqueAbility: 'Abu Simbel',
    description: 'Can build Districts and Wonders on Floodplains. Districts, improvements, and wonders on Floodplains are immune to flood damage. Chariot Archers do not require horses.',
    perks: [
      'Districts and wonders on Floodplains without flood damage',
      'Chariot Archers without horse requirement',
      'Enhanced Floodplains development',
      'Sphinx improvements with wonder adjacency'
    ],
    photo: '/images/ramesses-ii.png',
    tier: 'B',
    strategies: {
      direction: 'Focus on Floodplains development and wonder construction. Use protected development and early chariots for advantages.',
      earlyGame: [
        'Settle near Floodplains for development opportunities',
        'Build Chariot Archers without horses',
        'Plan wonder construction on Floodplains',
        'Use flood immunity for safe infrastructure'
      ],
      midGame: [
        'Build wonders and districts on Floodplains',
        'Construct Sphinx improvements near wonders',
        'Use protected infrastructure advantages',
        'Focus on culture and faith development'
      ],
      lateGame: [
        'Leverage wonder and district advantages',
        'Use cultural bonuses from Sphinx improvements',
        'Push for culture or science victory',
        'Maintain infrastructure protection'
      ],
      districts: ['Campus', 'Theater Square', 'Holy Site'],
      governors: ['Pingala', 'Liang', 'Magnus'],
      victory: ['Culture', 'Science', 'Religious']
    },
    bbgChanges: ['Floodplains development enhanced', 'Chariot Archer accessibility improved for early warfare']
  },
  {
    id: 'seondeok',
    name: 'Seondeok',
    civilization: 'Korean',
    uniqueAbility: 'Hwarang',
    description: 'Cities with a Governor provide +3% science and culture per Governor promotion. Mines provide +1 science. Seowon replaces Campus with unique mechanics.',
    perks: [
      'Science and culture bonuses from Governor promotions',
      'Science from mine improvements',
      'Seowon unique campus districts',
      'Hwacha unique siege units'
    ],
    photo: '/images/seondeok.png',
    tier: 'B',
    strategies: {
      direction: 'Focus on Governor development and scientific advancement. Use enhanced Governor bonuses for technological leadership.',
      earlyGame: [
        'Establish Governors in key cities',
        'Build mines for science bonuses',
        'Construct Seowon districts strategically',
        'Focus on Governor promotion'
      ],
      midGame: [
        'Promote Governors for enhanced bonuses',
        'Use Hwacha for siege warfare',
        'Build strong scientific infrastructure',
        'Continue technological advancement'
      ],
      lateGame: [
        'Use technological advantages for victory',
        'Leverage Governor promotion bonuses',
        'Push for science victory',
        'Maintain technological superiority'
      ],
      districts: ['Seowon', 'Commercial Hub', 'Industrial Zone'],
      governors: ['Pingala', 'Magnus', 'Liang'],
      victory: ['Science', 'Culture']
    },
    bbgChanges: ['Governor promotion bonuses enhanced', 'Seowon mechanics balanced for competitive viability']
  },
  {
    id: 'suleiman',
    name: 'Suleiman',
    civilization: 'Ottoman',
    uniqueAbility: 'Grand Vizier',
    description: 'Gain a unique Governor with each age advancement. Different ages provide different unique Governors with distinct abilities.',
    perks: [
      'Unique Governors from age advancement',
      'Age-specific Governor abilities',
      'Janissary unique infantry units',
      'Barbary Corsair unique naval raiders'
    ],
    photo: '/images/suleiman.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on age advancement and Governor utilization. Use unique Governors and Ottoman units for diverse advantages.',
      earlyGame: [
        'Advance through ages for unique Governors',
        'Use first unique Governor effectively',
        'Build Janissary units for warfare',
        'Focus on era progression'
      ],
      midGame: [
        'Utilize multiple unique Governors',
        'Use Barbary Corsairs for naval raids',
        'Build diverse empire with Governor bonuses',
        'Continue age advancement'
      ],
      lateGame: [
        'Leverage all unique Governor abilities',
        'Use accumulated advantages for victory',
        'Push for any victory type',
        'Maintain Governor synergies'
      ],
      districts: ['Encampment', 'Harbor', 'Campus'],
      governors: ['Unique Age Governors', 'Victor', 'Magnus'],
      victory: ['Domination', 'Science', 'Diplomatic']
    },
    bbgChanges: ['Unique Governor mechanics enhanced', 'Age advancement rewards improved for strategic depth']
  },
  {
    id: 'sundiata-keita',
    name: 'Sundiata Keita',
    civilization: 'Malian',
    uniqueAbility: 'Songs of the Jeli',
    description: 'City centers provide +1 faith and +1 food. Palace provides an additional +2 faith and +2 food. Trade routes provide +1 gold and +1 faith per Mansa\'s court in origin city.',
    perks: [
      'Enhanced city center and palace yields',
      'Trade route bonuses from court buildings',
      'Strong early development foundation',
      'Mandekalu Cavalry unique units'
    ],
    photo: '/images/sundiata-keita.png',
    tier: 'B',
    strategies: {
      direction: 'Focus on faith generation and trade networks. Use enhanced yields and trade bonuses for economic and religious development.',
      earlyGame: [
        'Use enhanced palace for strong foundation',
        'Build early faith infrastructure',
        'Establish trade routes for bonuses',
        'Focus on basic development'
      ],
      midGame: [
        'Build Suguba districts for commerce',
        'Use Mandekalu Cavalry for warfare',
        'Expand trade networks',
        'Generate faith for religious victory'
      ],
      lateGame: [
        'Use accumulated faith and trade advantages',
        'Push for religious or diplomatic victory',
        'Leverage economic bonuses',
        'Maintain trade dominance'
      ],
      districts: ['Suguba', 'Holy Site', 'Campus'],
      governors: ['Magnus', 'Moksha', 'Pingala'],
      victory: ['Religious', 'Diplomatic', 'Science']
    },
    bbgChanges: ['City center bonuses enhanced', 'Trade route mechanics improved for economic strategy']
  },
  {
    id: 'theodora',
    name: 'Theodora',
    civilization: 'Byzantine',
    uniqueAbility: 'Basilissa',
    description: 'Holy Sites grant +1 Great Prophet point per turn and +1 Apostle charge. Hippodrome buildings provide faith equal to their amenity value.',
    perks: [
      'Enhanced Great Prophet generation',
      'Extra Apostle charges for religious warfare',
      'Faith from Hippodrome amenity buildings',
      'Tagma unique cavalry with religious bonuses'
    ],
    photo: '/images/theodora.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on religious dominance and Great Prophet generation. Use enhanced religious units and faith generation for victory.',
      earlyGame: [
        'Build Holy Sites for Great Prophet points',
        'Found religion quickly with advantages',
        'Focus on religious infrastructure',
        'Plan Hippodrome construction'
      ],
      midGame: [
        'Use enhanced Apostles for religious warfare',
        'Build Hippodrome buildings for faith',
        'Generate strong religious units',
        'Spread religion aggressively'
      ],
      lateGame: [
        'Push for religious victory with enhanced units',
        'Use faith advantages for purchases',
        'Leverage Great Prophet bonuses',
        'Maintain religious dominance'
      ],
      districts: ['Holy Site', 'Hippodrome', 'Campus'],
      governors: ['Moksha', 'Magnus', 'Pingala'],
      victory: ['Religious', 'Culture']
    },
    bbgChanges: ['Great Prophet bonuses enhanced', 'Apostle charge mechanics improved for religious warfare']
  },
  {
    id: 'tokugawa',
    name: 'Tokugawa',
    civilization: 'Japanese',
    uniqueAbility: 'Bushido',
    description: 'Combat units have +5 combat strength when damaged and +1 movement on their turn after gaining a promotion. Gain the Samurai unique unit.',
    perks: [
      'Combat bonuses when units are damaged',
      'Movement bonuses after promotions',
      'Samurai unique units with combat bonuses',
      'Enhanced military unit development'
    ],
    photo: '/images/tokugawa.png',
    tier: 'S',
    strategies: {
      direction: 'Focus on military development and unit promotions. Use combat bonuses and movement advantages for warfare.',
      earlyGame: [
        'Build military units for promotion',
        'Use combat bonuses when damaged',
        'Focus on military technologies',
        'Build basic infrastructure'
      ],
      midGame: [
        'Build Samurai units for strong infantry',
        'Use promotion movement bonuses',
        'Engage in tactical warfare',
        'Build Electronics Factory for production'
      ],
      lateGame: [
        'Use veteran units for victory',
        'Leverage combat and movement bonuses',
        'Push for domination victory',
        'Maintain military superiority'
      ],
      districts: ['Encampment', 'Industrial Zone', 'Campus'],
      governors: ['Victor', 'Magnus', 'Pingala'],
      victory: ['Domination', 'Science']
    },
    bbgChanges: ['Combat bonuses when damaged enhanced', 'Promotion movement mechanics preserved for tactical gameplay']
  },
  {
    id: 'wu-zetian',
    name: 'Wu Zetian',
    civilization: 'Chinese',
    uniqueAbility: 'Empress of Heaven',
    description: 'Palace generates +1 favor per turn. Wonders provide +1 favor per turn. Trade routes to city-states provide +2 favor.',
    perks: [
      'Enhanced diplomatic favor generation',
      'Favor from wonders and palace',
      'Trade route bonuses with city-states',
      'Strong diplomatic gameplay'
    ],
    photo: '/images/wu-zetian.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on diplomatic favor and wonder construction. Use favor advantages for diplomatic victory.',
      earlyGame: [
        'Build wonders for favor generation',
        'Establish trade routes to city-states',
        'Focus on diplomatic technologies',
        'Build strong infrastructure'
      ],
      midGame: [
        'Continue wonder construction',
        'Maximize city-state trade routes',
        'Use favor for diplomatic advantages',
        'Build cultural infrastructure'
      ],
      lateGame: [
        'Push for diplomatic victory with favor',
        'Use wonder and trade advantages',
        'Leverage diplomatic bonuses',
        'Maintain diplomatic dominance'
      ],
      districts: ['Campus', 'Theater Square', 'Commercial Hub'],
      governors: ['Pingala', 'Amani', 'Magnus'],
      victory: ['Diplomatic', 'Culture', 'Science']
    },
    bbgChanges: ['Diplomatic favor generation enhanced', 'City-state trade bonuses improved for diplomatic strategy']
  },
  {
    id: 'yongle',
    name: 'Yongle',
    civilization: 'Chinese',
    uniqueAbility: 'Treasure Fleet',
    description: 'Land units can enter ocean tiles after researching Cartography. Units in formation gain +7 combat strength. Naval units can enter ocean tiles after researching Sailing.',
    perks: [
      'Early ocean exploration for land and naval units',
      'Formation combat bonuses',
      'Enhanced exploration capabilities',
      'Treasure Ship unique naval units'
    ],
    photo: '/images/yongle.png',
    tier: 'A',
    strategies: {
      direction: 'Focus on early exploration and formation combat. Use ocean access and combat bonuses for expansion.',
      earlyGame: [
        'Research Sailing and Cartography for ocean access',
        'Explore oceans with land and naval units',
        'Use formation combat bonuses',
        'Focus on exploration technologies'
      ],
      midGame: [
        'Build Treasure Ships for naval warfare',
        'Use formation bonuses effectively',
        'Establish overseas settlements',
        'Continue exploration advantages'
      ],
      lateGame: [
        'Use exploration advantages for victory',
        'Leverage formation combat bonuses',
        'Push for any victory type',
        'Maintain exploration superiority'
      ],
      districts: ['Harbor', 'Campus', 'Commercial Hub'],
      governors: ['Magnus', 'Pingala', 'Victor'],
      victory: ['Science', 'Domination', 'Diplomatic']
    },
    bbgChanges: ['Ocean access timing improved', 'Formation combat bonuses enhanced for tactical warfare']
  }
];