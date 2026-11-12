import { Animal } from '../types/game';

export const ANIMALS: Animal[] = [
  {
    id: 'lion',
    name: 'African Lion',
    scientificOrNickname: 'King of the Jungle',
    habitat: 'Savanna',
    emoji: '🦁',
    color: '#D97706',
    accentBg: '#FEF3C7',
    soundType: 'lion',
    soundDescription: 'A mighty, deep, echoing roar that rolls across the grasslands!',
    soundTextSound: 'ROOOAAARRR!',
    clues: [
      'I have a magnificent golden furry mane around my face and strong padded paws.',
      'I live with my family together in a group known as a "pride".',
      'My thunderous roar is so loud it can be heard by animals up to 5 miles (8 km) away!'
    ],
    funFact: 'Lions sleep for up to 20 hours a day to save energy for nighttime hunting!',
    diet: 'Carnivore (Meats)',
    size: 'Up to 250 kg (550 lbs)',
    speedOrSkill: 'Can sprint up to 50 mph (80 km/h)',
    footprintType: 'Big 4-toed padded paw'
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    scientificOrNickname: 'Gentle Giant of the Plain',
    habitat: 'Savanna',
    emoji: '🐘',
    color: '#4B5563',
    accentBg: '#F3F4F6',
    soundType: 'elephant',
    soundDescription: 'A triumphant, brassy trumpet call blasting into the air!',
    soundTextSound: 'PAWOOOOO!',
    clues: [
      'I am the largest walking land animal living on planet Earth today.',
      'I have giant flapping ears shaped like the continent of Africa and long ivory tusks.',
      'My amazing flexible trunk has over 40,000 muscles and can suck up 2 gallons of water at once!'
    ],
    funFact: 'Elephants greet friends by tenderly wrapping their trunks together in an elephant hug!',
    diet: 'Herbivore (Grasses, leaves, bark)',
    size: 'Up to 6,000 kg (13,000 lbs)',
    speedOrSkill: 'Super strong trunk & long-distance memory',
    footprintType: 'Giant round footprint'
  },
  {
    id: 'monkey',
    name: 'Chimpanzee',
    scientificOrNickname: 'Canopy Acrobat',
    habitat: 'Rainforest',
    emoji: '🐒',
    color: '#92400E',
    accentBg: '#FEF3C7',
    soundType: 'monkey',
    soundDescription: 'A cheerful, fast chatter and squeak: ooh-ooh-aah-aah!',
    soundTextSound: 'OOH-OOH-AAH-AAH!',
    clues: [
      'I have opposable thumbs and nimble toes that let me swing gracefully through jungle branches.',
      'I love grooming my family and sharing delicious sweet fruits, nuts, and berries.',
      'I am one of the smartest animals in the world and use sticks as tools to catch termites!'
    ],
    funFact: 'Chimpanzees share about 98.7% of their DNA with human beings!',
    diet: 'Omnivore (Fruits, seeds, insects)',
    size: 'Around 45 kg (100 lbs)',
    speedOrSkill: 'Super agile tree swinging',
    footprintType: 'Hand-shaped footprint with opposable thumb'
  },
  {
    id: 'tiger',
    name: 'Bengal Tiger',
    scientificOrNickname: 'Striped Master of Stealth',
    habitat: 'Rainforest',
    emoji: '🐯',
    color: '#EA580C',
    accentBg: '#FFEDD5',
    soundType: 'tiger',
    soundDescription: 'A deep vibrating growl and ferocious rumble!',
    soundTextSound: 'GRRRR-ROOAAR!',
    clues: [
      'I wear a bright reddish-orange coat decorated with dark, vertical camouflage stripes.',
      'Unlike most other big cats, I adore taking refreshing baths and swimming across deep jungle rivers.',
      'No two tigers on Earth have the exact same stripe pattern; each coat is 100% unique like a fingerprint!'
    ],
    funFact: 'Tigers even have striped skin underneath all their soft fur!',
    diet: 'Carnivore (Deer, wild boar)',
    size: 'Up to 300 kg (660 lbs)',
    speedOrSkill: 'Silent stalker & Olympic swimmer',
    footprintType: 'Heavy 4-toed jungle paw'
  },
  {
    id: 'frog',
    name: 'Red-Eyed Tree Frog',
    scientificOrNickname: 'Jewel of the Rainforest',
    habitat: 'Rainforest',
    emoji: '🐸',
    color: '#16A34A',
    accentBg: '#DCFCE7',
    soundType: 'frog',
    soundDescription: 'A lively, rhythmic croaking: ribbit-ribbit!',
    soundTextSound: 'RIBBIT-RIBBIT!',
    clues: [
      'I start my life swimming underwater as a tiny tadpole with a wiggly tail.',
      'I have vivid green skin, bright ruby-red bulging eyes, and orange suction-cup toes.',
      'I can leap more than 20 times the length of my own body between slippery wet jungle leaves!'
    ],
    funFact: 'Tree frogs flash their startling red eyes to surprise predators while they leap away safely!',
    diet: 'Insectivore (Flies, moths, crickets)',
    size: 'About 6 cm (2.5 inches)',
    speedOrSkill: 'Suction cup climbing & super jumper',
    footprintType: 'Tiny webbed toe-pads'
  },
  {
    id: 'owl',
    name: 'Barn Owl',
    scientificOrNickname: 'Silent Night Flyer',
    habitat: 'Forest & Woods',
    emoji: '🦉',
    color: '#854D0E',
    accentBg: '#FEF9C3',
    soundType: 'owl',
    soundDescription: 'A spooky, melodic, hollow night call: whoo-whoo-hoooo!',
    soundTextSound: 'WHOOO-WHO-HOOO!',
    clues: [
      'I stay awake during the dark night and sleep comfortably inside hollow tree trunks during the day.',
      'I have a lovely heart-shaped face and huge forward-facing eyes that can see in near darkness.',
      'I can rotate my neck up to 270 degrees in a smooth circle without moving my shoulders!'
    ],
    funFact: 'The edges of owl feathers are so soft that their flight through the air makes zero sound!',
    diet: 'Carnivore (Field mice, small rodents)',
    size: 'Wingspan up to 90 cm (35 inches)',
    speedOrSkill: '100% silent flight & night vision',
    footprintType: 'Zygodactyl talons (2 front, 2 back)'
  },
  {
    id: 'wolf',
    name: 'Gray Wolf',
    scientificOrNickname: 'Moonlight Howler',
    habitat: 'Forest & Woods',
    emoji: '🐺',
    color: '#64748B',
    accentBg: '#F1F5F9',
    soundType: 'wolf',
    soundDescription: 'A long, soulful howl that echoes across snowy mountain valleys!',
    soundTextSound: 'AAAWWW-HOOOO!',
    clues: [
      'I look very similar to a large husky dog, with thick silvery-gray winter fur and a bushy tail.',
      'I live and travel in close-knit family groups called "packs" led by an alpha pair.',
      'I tilt my nose up to the sky and howl to communicate with friends miles across the forest.'
    ],
    funFact: 'Wolves have an incredible sense of smell that can detect animals more than a mile away!',
    diet: 'Carnivore (Elk, deer, hares)',
    size: 'Up to 50 kg (110 lbs)',
    speedOrSkill: 'Endurance trotter (runs for hours)',
    footprintType: 'Large canine claw print'
  },
  {
    id: 'dolphin',
    name: 'Bottlenose Dolphin',
    scientificOrNickname: 'Ocean Acrobat',
    habitat: 'River & Ocean',
    emoji: '🐬',
    color: '#0284C7',
    accentBg: '#E0F2FE',
    soundType: 'dolphin',
    soundDescription: 'Playful high-pitched clicks, chuckles, and melodious whistles!',
    soundTextSound: 'EKK-EKK-WHEEE!',
    clues: [
      'Even though I spend my entire life swimming in water, I am a mammal and breathe air with a blowhole.',
      'I love leaping high into the air and surfing inside the waves made by speeding boats.',
      'I use echolocation like a built-in underwater sonar radar to locate fish in murky waters.'
    ],
    funFact: 'Dolphins sleep with one eye open and only half of their brain asleep at a time!',
    diet: 'Carnivore (Fish, squid, shrimp)',
    size: 'Up to 3 meters (10 feet)',
    speedOrSkill: 'High-speed swimming & echolocation',
    footprintType: 'No feet! Streamlined fluke tail'
  },
  {
    id: 'duck',
    name: 'Mallard Duck',
    scientificOrNickname: 'Pond Paddler',
    habitat: 'River & Ocean',
    emoji: '🦆',
    color: '#0D9488',
    accentBg: '#CCFBF1',
    soundType: 'duck',
    soundDescription: 'A funny, nasal, friendly quacking: quack-quack!',
    soundTextSound: 'QUACK-QUACK-QUACK!',
    clues: [
      'I have bright orange webbed paddle feet that help me glide effortlessly across ponds and lakes.',
      'The males of my species have an emerald green head, while females wear spotted brown feathers.',
      'My feathers are coated in special natural oils so water rolls right off my back without soaking me!'
    ],
    funFact: 'Ducks have waterproof coats! The water droplets form beads and slide right off.',
    diet: 'Omnivore (Water plants, insects, snails)',
    size: 'Around 1.2 kg (2.6 lbs)',
    speedOrSkill: 'Waterproofing & pond paddling',
    footprintType: 'Classic 3-toed webbed print'
  },
  {
    id: 'cow',
    name: 'Spotted Dairy Cow',
    scientificOrNickname: 'Gentle Meadow Grazer',
    habitat: 'Farm & Meadow',
    emoji: '🐄',
    color: '#1E293B',
    accentBg: '#F8FAFC',
    soundType: 'cow',
    soundDescription: 'A long, peaceful, warm lowing: mooooo!',
    soundTextSound: 'MOOOOOOO!',
    clues: [
      'I have distinctive black-and-white patches, a swishing tail, and I love chewing sweet green grass.',
      'I produce creamy fresh milk that people turn into cheese, butter, yogurt, and delicious ice cream.',
      'I actually have four stomach compartments to help me digest tough pasture grasses!'
    ],
    funFact: 'Cows have best friends in their herd and become stressed when separated from them!',
    diet: 'Herbivore (Grass, hay, clover)',
    size: 'Around 680 kg (1,500 lbs)',
    speedOrSkill: 'Super grazing & 300-degree panoramic vision',
    footprintType: 'Cloven hoof print'
  },
  {
    id: 'rooster',
    name: 'Morning Rooster',
    scientificOrNickname: 'Sunrise Alarm Clock',
    habitat: 'Farm & Meadow',
    emoji: '🐓',
    color: '#DC2626',
    accentBg: '#FEE2E2',
    soundType: 'rooster',
    soundDescription: 'A bright, loud dawn wake-up call: cock-a-doodle-doo!',
    soundTextSound: 'COCK-A-DOODLE-DOO!',
    clues: [
      'I stand proud on top of wooden fence posts wearing a bright red fleshy comb on my head.',
      'I have shiny iridescent tail feathers that curve upwards in beautiful shades of green and bronze.',
      'Every single morning right before dawn breaks, I crow loudly to wake up the whole barnyard!'
    ],
    funFact: 'Roosters have built-in earplugs! When they open their beaks wide to crow, their ear canals close up.',
    diet: 'Omnivore (Seeds, grains, bugs)',
    size: 'About 3.5 kg (7.7 lbs)',
    speedOrSkill: 'Sunrise crowing & farmyard guardian',
    footprintType: '3 long front toes, 1 back toe'
  },
  {
    id: 'sheep',
    name: 'Woolly Sheep',
    scientificOrNickname: 'Fluffy Cloud of the Meadow',
    habitat: 'Farm & Meadow',
    emoji: '🐑',
    color: '#65A30D',
    accentBg: '#ECFCCB',
    soundType: 'sheep',
    soundDescription: 'A gentle, wavering flutter bleat: baaa-baa-baa!',
    soundTextSound: 'BAAA-BAAA-BAAA!',
    clues: [
      'I am covered from head to toe in thick, cozy curly fleece that keeps me warm in winter.',
      'Farmers shear my soft fluffy wool once a year so people can knit sweaters, socks, and blankets.',
      'I stay close to my buddies in a peaceful flock and follow the wise bellwether everywhere.'
    ],
    funFact: 'Sheep have rectangular pupils in their eyes that give them an incredible 320-degree field of vision!',
    diet: 'Herbivore (Grass, wildflowers)',
    size: 'Around 80 kg (175 lbs)',
    speedOrSkill: 'Natural thermal fleece coat',
    footprintType: 'Small two-toed cloven hoof'
  },
  {
    id: 'bear',
    name: 'Grizzly Bear',
    scientificOrNickname: 'Forest Mountain King',
    habitat: 'Forest & Woods',
    emoji: '🐻',
    color: '#78350F',
    accentBg: '#FEF3C7',
    soundType: 'bear',
    soundDescription: 'A heavy, low, rumble-growl and deep snort!',
    soundTextSound: 'GRRR-HUFF-ROAAR!',
    clues: [
      'I have thick shaggy brown fur, a muscular shoulder hump, and strong curved digging claws.',
      'During the autumn months, I eat lots of sweet berries and river salmon to store fat for winter.',
      'I sleep cozy and warm inside a mountain den for 5 to 7 months during winter hibernation!'
    ],
    funFact: 'A grizzly bear can smell food from over 20 miles away—better than a bloodhound dog!',
    diet: 'Omnivore (Salmon, berries, roots, insects)',
    size: 'Up to 400 kg (880 lbs)',
    speedOrSkill: 'Salmon catching & hibernation',
    footprintType: 'Massive 5-clawed paw print'
  },
  {
    id: 'snake',
    name: 'Emerald Green Snake',
    scientificOrNickname: 'Slithering Vine of the Canopy',
    habitat: 'Rainforest',
    emoji: '🐍',
    color: '#059669',
    accentBg: '#D1FAE5',
    soundType: 'snake',
    soundDescription: 'A sharp, sustained, quiet warning hiss: sssssssss!',
    soundTextSound: 'SS-SSSSSSSSSS!',
    clues: [
      'I have no legs, no arms, and no ears, yet I glide silently through thick green jungle leaves.',
      'I stick out my forked tongue repeatedly to "smell" and taste scent particles floating in the air.',
      'As I grow bigger, I shed my old dry outer skin in one long complete translucent piece.'
    ],
    funFact: 'Snakes do not have eyelids! They sleep with clear protective scales covering their eyes.',
    diet: 'Carnivore (Mice, lizards, frogs)',
    size: 'Up to 2 meters (6.5 feet)',
    speedOrSkill: 'Silent slithering & scent tasting',
    footprintType: 'Smooth wavy track line in sand'
  },
  {
    id: 'zebra',
    name: 'Plains Zebra',
    scientificOrNickname: 'The Striped Sprinter',
    habitat: 'Savanna',
    emoji: '🦓',
    color: '#334155',
    accentBg: '#F8FAFC',
    soundType: 'zebra',
    soundDescription: 'A high-pitched, excited braying yip-bark!',
    soundTextSound: 'KWA-HA! KWA-HA!',
    clues: [
      'I look like a wild pony, but I am covered in striking black and white vertical zebra stripes.',
      'My high-contrast optical stripes confuse biting flies and make it hard for lions to single me out.',
      'I can run shortly after being born and sleep safely standing upright on my strong hooves!'
    ],
    funFact: 'Zebras are actually black with white stripes, confirmed by embryonic testing!',
    diet: 'Herbivore (Tall savanna grasses)',
    size: 'Around 350 kg (770 lbs)',
    speedOrSkill: 'Dazzle camouflage & 40 mph sprint',
    footprintType: 'Single solid curved round hoof'
  },
  {
    id: 'kangaroo',
    name: 'Red Kangaroo',
    scientificOrNickname: 'Australian Bouncing Champion',
    habitat: 'Savanna',
    emoji: '🦘',
    color: '#B45309',
    accentBg: '#FFEDD5',
    soundType: 'kangaroo',
    soundDescription: 'A rhythmic, springy thumping hop and gentle throat chuff!',
    soundTextSound: 'THUMP-THUMP-HOP!',
    clues: [
      'I am a marsupial with huge springy hind feet and a thick, muscular tail used for balance.',
      'Mother kangaroos have a cozy built-in front pouch where their tiny baby "joey" stays warm.',
      'I can bound forward up to 25 feet (8 meters) in a single gigantic, effortless leap!'
    ],
    funFact: 'Kangaroos cannot walk backwards because of their long feet and hefty balancing tail!',
    diet: 'Herbivore (Grass, herbs, shrub foliage)',
    size: 'Up to 90 kg (200 lbs) & 2 meters tall',
    speedOrSkill: 'Super jumping & springy pouch',
    footprintType: 'Long narrow hind foot print'
  },
  {
    id: 'parrot',
    name: 'Scarlet Macaw',
    scientificOrNickname: 'Rainbow of the Canopy',
    habitat: 'Rainforest',
    emoji: '🦜',
    color: '#EF4444',
    accentBg: '#FEE2E2',
    soundType: 'parrot',
    soundDescription: 'A bright, musical jungle screech, whistle, and cheerful squawk!',
    soundTextSound: 'SQUAWWKK-CHIRP!',
    clues: [
      'I have dazzling feathers in brilliant red, sunshine yellow, and vibrant sapphire blue.',
      'I have a strong, hooked bone-cracking beak that easily cracks open tough Brazil nutshells.',
      'I am famously clever and can imitate human words and jungle whistles with astonishing accuracy!'
    ],
    funFact: 'Macaws mate for life and fly side-by-side with their partner so close their wingtips almost touch!',
    diet: 'Herbivore (Nuts, tropical seeds, berries)',
    size: 'Up to 1 meter (3.3 feet) long with tail',
    speedOrSkill: 'Vocal mimicry & nutshell cracking',
    footprintType: 'Clawed climbing perching print'
  },
  {
    id: 'hippo',
    name: 'River Hippopotamus',
    scientificOrNickname: 'Riverbank Heavyweight',
    habitat: 'River & Ocean',
    emoji: '🦛',
    color: '#475569',
    accentBg: '#F1F5F9',
    soundType: 'hippo',
    soundDescription: 'A deep, bubbling water snort and roaring honk!',
    soundTextSound: 'HONK-GRUNT-CHUFF!',
    clues: [
      'My name in ancient Greek means "river horse", though I am actually closely related to whales.',
      'I spend hot daytime hours soaking in cooling muddy rivers with only my eyes and nostrils poking out.',
      'My skin secretes an oily pink-red fluid called "blood sweat" that acts as natural jungle sunscreen!'
    ],
    funFact: 'Hippos cannot actually swim! They trot along the bottom of the riverbed and push off with their toes.',
    diet: 'Herbivore (Nighttime grass grazing)',
    size: 'Up to 3,000 kg (6,600 lbs)',
    speedOrSkill: 'Underwater riverbed trotting',
    footprintType: 'Heavy 4-toed splayed river footprint'
  },
  {
    id: 'crocodile',
    name: 'Nile Crocodile',
    scientificOrNickname: 'Ancient River Dragon',
    habitat: 'River & Ocean',
    emoji: '🐊',
    color: '#15803D',
    accentBg: '#DCFCE7',
    soundType: 'crocodile',
    soundDescription: 'A low, vibrating sub-surface hiss and snap!',
    soundTextSound: 'HISS-SNAP-CHOMP!',
    clues: [
      'I am a cold-blooded armored reptile that has lived on Earth since the age of dinosaurs.',
      'I can float completely still like an old mossy log right near the surface of the river.',
      'I have one of the most powerful biting jaw forces of any creature currently alive on Earth!'
    ],
    funFact: 'Crocodiles often swallow small smooth river stones to help grind up food and serve as ballast to dive!',
    diet: 'Carnivore (Fish, zebras, birds)',
    size: 'Up to 5 meters (16 feet) long',
    speedOrSkill: 'Stealth ambush & armored scutes',
    footprintType: 'Webbed claw print with tail drag mark'
  },
  {
    id: 'cat',
    name: 'Playful House Cat',
    scientificOrNickname: 'Whiskered Companion',
    habitat: 'Farm & Meadow',
    emoji: '🐱',
    color: '#F59E0B',
    accentBg: '#FEF3C7',
    soundType: 'cat',
    soundDescription: 'A sweet, melodious, gentle: mee-oww!',
    soundTextSound: 'MEEE-OWWW!',
    clues: [
      'I have silky soft fur, twitching triangular ears, and long sensitive sensory whiskers on my cheeks.',
      'When I am feeling relaxed, happy, and loved, my throat makes a soothing rhythmic purring vibration.',
      'I have great night vision and almost always twist my body mid-air to land safely on my feet!'
    ],
    funFact: 'Cats only meow to communicate with humans; they use scents and body poses with other cats!',
    diet: 'Carnivore (Fish, poultry, mice)',
    size: 'About 4.5 kg (10 lbs)',
    speedOrSkill: 'Agile acrobatics & night vision',
    footprintType: 'Small round 4-toed paw print'
  },
  {
    id: 'dog',
    name: 'Golden Retriever',
    scientificOrNickname: 'Loyal Best Friend',
    habitat: 'Farm & Meadow',
    emoji: '🐶',
    color: '#CA8A04',
    accentBg: '#FEF9C3',
    soundType: 'dog',
    soundDescription: 'An enthusiastic, happy double bark: woof-woof!',
    soundTextSound: 'WOOF-WOOF-ARF!',
    clues: [
      'I love wagging my cheerful tail, fetching flying tennis balls, and giving slobbery joyful kisses.',
      'My wet, cold nose can detect scents up to 100,000 times better than human noses can.',
      'I am known all around the world as humans’ most loyal and helpful four-legged best friend!'
    ],
    funFact: 'A dog’s sense of smell is so sharp they can even smell when your feelings change!',
    diet: 'Omnivore (Meat, veggies, kibble)',
    size: 'Around 30 kg (65 lbs)',
    speedOrSkill: 'Scent tracking & loyalty',
    footprintType: '4-toed canine paw print with claw marks'
  },
  {
    id: 'horse',
    name: 'Wild Mustang Horse',
    scientificOrNickname: 'Noble Steed of the Plains',
    habitat: 'Savanna',
    emoji: '🐴',
    color: '#9A3412',
    accentBg: '#FFEDD5',
    soundType: 'horse',
    soundDescription: 'A spirited, musical whinny followed by an energetic snort!',
    soundTextSound: 'NEEE-IIIGH-SNORT!',
    clues: [
      'I have a flowing silk mane, a long swishing tail to flick away flies, and strong muscular legs.',
      'I wear sturdy keratin hooves on my feet that are shaped by farriers with special protective shoes.',
      'I can gallop gracefully across open grasslands at speeds over 40 miles per hour!'
    ],
    funFact: 'Horses can sleep both standing up (locking their knees) and lying down for deep REM sleep!',
    diet: 'Herbivore (Hay, grass, apples, carrots)',
    size: 'Around 500 kg (1,100 lbs)',
    speedOrSkill: 'Galloping sprint & majestic jump',
    footprintType: 'Single U-shaped horseshoe mark'
  },
  {
    id: 'bee',
    name: 'Honey Bee',
    scientificOrNickname: 'Little Pollinator Queen',
    habitat: 'Farm & Meadow',
    emoji: '🐝',
    color: '#EAB308',
    accentBg: '#FEF9C3',
    soundType: 'bee',
    soundDescription: 'A warm, continuous, harmonic garden buzz: bzzzzzz!',
    soundTextSound: 'BZZZZZZ-BZZZ!',
    clues: [
      'I have fuzzy yellow-and-black striped fluff, delicate transparent wings, and a tiny stinger.',
      'I flutter busily from flower to flower drinking sweet nectar and collecting yellow pollen dust.',
      'I communicate the exact direction to secret flower patches by performing a special "waggle dance"!'
    ],
    funFact: 'Honey found in ancient Egyptian pharaohs’ tombs from over 3,000 years ago is still completely edible!',
    diet: 'Herbivore (Nectar, pollen)',
    size: 'Only 1.5 cm (0.6 inches)',
    speedOrSkill: 'Waggle dance navigation & honey making',
    footprintType: 'Too tiny for prints! Flower petal dust'
  },
  {
    id: 'penguin',
    name: 'Emperor Penguin',
    scientificOrNickname: 'Tuxedo Ice Swimmer',
    habitat: 'River & Ocean',
    emoji: '🐧',
    color: '#0F172A',
    accentBg: '#F1F5F9',
    soundType: 'penguin',
    soundDescription: 'An upbeat, friendly ocean chirpy honk and trill!',
    soundTextSound: 'AAARK-CHIRP-HONK!',
    clues: [
      'I am a bird that wears what looks like a fancy black-and-white formal evening tuxedo.',
      'I cannot fly in the sky, but I fly like a torpedo through freezing ocean water using flipper wings.',
      'Father penguins balance a single precious egg on their warm feet in blizzard winds for two whole months!'
    ],
    funFact: 'Penguins often slide joyfully across smooth icy snowbanks on their bellies like a toboggan sled!',
    diet: 'Carnivore (Krill, small fish, squid)',
    size: 'Up to 1.1 meters (3.7 feet) tall',
    speedOrSkill: 'Deep sea diving & belly tobogganing',
    footprintType: 'Webbed 3-toed ice track'
  }
];

export const ACHIEVEMENTS = [
  {
    id: 'first_mystery',
    title: 'First Clue Solved!',
    description: 'Guessed your very first animal correctly.',
    icon: '🔍',
    unlocked: false
  },
  {
    id: 'sound_sleuth',
    title: 'Sound Sleuth',
    description: 'Guessed an animal on your first try after listening to its sound!',
    icon: '👂',
    unlocked: false
  },
  {
    id: 'jungle_master',
    title: 'Jungle Master',
    description: 'Achieved a perfect 3-star rating on any game difficulty.',
    icon: '🌟',
    unlocked: false
  },
  {
    id: 'eagle_eye',
    title: 'Eagle Eye Detective',
    description: 'Completed a full round without using a single hint!',
    icon: '🦅',
    unlocked: false
  },
  {
    id: 'super_streak',
    title: 'Safari Superstar',
    description: 'Scored 5 correct answers in a row!',
    icon: '🔥',
    unlocked: false
  },
  {
    id: 'expert_badge',
    title: 'Master Detective',
    description: 'Conquered the Expert difficulty challenge!',
    icon: '🎓',
    unlocked: false
  },
  {
    id: 'field_explorer',
    title: 'Field Guide Explorer',
    description: 'Discovered all animals in the interactive Animal Soundbook.',
    icon: '📖',
    unlocked: false
  }
];

export const DIFFICULTY_SETTINGS: Record<string, { questionsCount: number; title: string; subtitle: string; initialClues: number; hintsAllowed: number; pointMultiplier: number }> = {
  easy: {
    questionsCount: 5,
    title: 'Cub Detective',
    subtitle: '5 friendly mysteries · 3 clues always ready · 2 hints',
    initialClues: 3,
    hintsAllowed: 2,
    pointMultiplier: 1.0,
  },
  medium: {
    questionsCount: 7,
    title: 'Jungle Scout',
    subtitle: '7 animal mysteries · Sound + 2 clues · 1 hint',
    initialClues: 2,
    hintsAllowed: 1,
    pointMultiplier: 1.5,
  },
  hard: {
    questionsCount: 10,
    title: 'Safari Tracker',
    subtitle: '10 questions · Sound + 1 clue · Unlock clues as you go',
    initialClues: 1,
    hintsAllowed: 1,
    pointMultiplier: 2.0,
  },
  expert: {
    questionsCount: 12,
    title: 'Master Detective',
    subtitle: '12 tough mysteries · Sound first · Maximum score bonus!',
    initialClues: 1,
    hintsAllowed: 0,
    pointMultiplier: 2.5,
  }
};
