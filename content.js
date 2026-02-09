// Slangmaxxer - Looksmaxxing/Brainrot Text Converter
// Stores original text nodes so we can revert
const originalTexts = new Map();

// ---------------------------------------------------------------------------
// SLANG DICTIONARIES (keyed by intensity: 1 = mild, 2 = based, 3 = sigma)
// Each entry: [regex pattern, replacement]
// Replacements are cumulative — level 2 includes level 1, level 3 includes 1+2
// ---------------------------------------------------------------------------

const slangLevels = {
  // Level 1 — Mild: common slang substitutions
  1: [
    [/\bvery good\b/gi, "bussin"],
    [/\bgreat\b/gi, "bussin"],
    [/\bexcellent\b/gi, "bussin fr fr"],
    [/\bamazing\b/gi, "fire"],
    [/\bawesome\b/gi, "fire"],
    [/\bwonderful\b/gi, "fire no cap"],
    [/\bfantastic\b/gi, "goated"],
    [/\bincredible\b/gi, "goated"],
    [/\bbeautiful\b/gi, "aesthetic af"],
    [/\bgood looking\b/gi, "chad-tier"],
    [/\bhandsome\b/gi, "gigachad"],
    [/\battractive\b/gi, "high-tier"],
    [/\bpretty\b/gi, "slay-worthy"],
    [/\bugly\b/gi, "subhuman-tier"],
    [/\bgood\b/gi, "based"],
    [/\bbad\b/gi, "mid"],
    [/\bterrible\b/gi, "down bad"],
    [/\bawful\b/gi, "down horrendous"],
    [/\bcool\b/gi, "sigma"],
    [/\bnice\b/gi, "W"],
    [/\bmean\b/gi, "L behavior"],
    [/\bcruel\b/gi, "villain arc energy"],
    [/\bfriend\b/gi, "gang"],
    [/\bfriends\b/gi, "the squad"],
    [/\bseriously\b/gi, "deadass"],
    [/\bhonestly\b/gi, "no cap"],
    [/\breally\b/gi, "fr fr"],
    [/\btruly\b/gi, "on god"],
    [/\bactually\b/gi, "lowkey"],
    [/\bobviously\b/gi, "highkey"],
    [/\byes\b/gi, "bet"],
    [/\bno\b/gi, "nah fam"],
    [/\bsure\b/gi, "say less"],
    [/\bokay\b/gi, "aight bet"],
    [/\bstop\b/gi, "hold up"],
    [/\brelax\b/gi, "chill fam"],
    [/\bsurprised\b/gi, "shook"],
    [/\bshocked\b/gi, "down catastrophic"],
    [/\bscared\b/gi, "lowkey shook"],
    [/\bhappy\b/gi, "vibing"],
    [/\bsad\b/gi, "in my feels"],
    [/\bangry\b/gi, "pressed"],
    [/\bjealous\b/gi, "straight coping"],
    [/\bconfident\b/gi, "sigma energy"],
    [/\brich\b/gi, "moneymaxed"],
    [/\bpoor\b/gi, "brokie"],
    [/\bexpensive\b/gi, "bougie af"],
    [/\bcheap\b/gi, "brokie-tier"],
    [/\bfamous\b/gi, "main character"],
    [/\bpopular\b/gi, "main character energy"],
    [/\bunpopular\b/gi, "NPC behavior"],
    [/\bboring\b/gi, "NPC-tier"],
    [/\binteresting\b/gi, "lowkey fire"],
    [/\bfunny\b/gi, "got me dead"],
    [/\bhilarious\b/gi, "bruh moment"],
    [/\bstupid\b/gi, "smooth brain"],
    [/\bsmart\b/gi, "galaxy brain"],
    [/\bclever\b/gi, "5head"],
    [/\bwork hard\b/gi, "grind"],
    [/\bworking\b/gi, "grinding"],
    [/\bsuccess\b/gi, "W"],
    [/\bfailure\b/gi, "L"],
    [/\blose\b/gi, "take an L"],
    [/\bwin\b/gi, "catch a W"],
    [/\bfight\b/gi, "throw hands"],
    [/\bargue\b/gi, "beef"],
    [/\bproblem\b/gi, "skill issue"],
    [/\bmistake\b/gi, "skill issue"],
    [/\blie\b/gi, "cap"],
    [/\blying\b/gi, "capping"],
    [/\btruth\b/gi, "no cap"],
    [/\bthink\b/gi, "lowkey think"],
    [/\bbelieve\b/gi, "fr believe"],
    [/\bman\b/gi, "bro"],
    [/\bguy\b/gi, "king"],
    [/\bgirl\b/gi, "queen"],
    [/\bwoman\b/gi, "queen"],
    [/\bpeople\b/gi, "NPCs"],
    [/\beveryone\b/gi, "all the NPCs"],
    [/\bnobody\b/gi, "zero NPCs"],
    [/\bface\b/gi, "mug"],
    [/\bbody\b/gi, "physique"],
    [/\bmuscles\b/gi, "gains"],
    [/\bfat\b/gi, "unmaxxed"],
    [/\bthin\b/gi, "leanmaxxed"],
    [/\btall\b/gi, "heightmaxxed"],
    [/\bshort\b/gi, "heightmogged"],
    [/\bhair\b/gi, "mane"],
    [/\bskin\b/gi, "glow"],
    [/\bclothes\b/gi, "drip"],
    [/\bshoes\b/gi, "kicks"],
    [/\bcar\b/gi, "whip"],
    [/\bhouse\b/gi, "crib"],
    [/\bmoney\b/gi, "bread"],
    [/\bjob\b/gi, "grindset"],
    [/\bexercise\b/gi, "gymmaxx"],
    [/\bworkout\b/gi, "gymmaxx session"],
    [/\bfood\b/gi, "fuel"],
    [/\beat\b/gi, "refuel"],
    [/\bsleep\b/gi, "recovery arc"],
    [/\btired\b/gi, "drained"],
    [/\benergy\b/gi, "aura"],
    [/\bvibe\b/gi, "aura"],
    [/\bstyle\b/gi, "drip"],
    [/\blook\b/gi, "aesthetic"],
    [/\blooks\b/gi, "aesthetics"],
    [/\bimprove\b/gi, "maxx"],
    [/\bimprovement\b/gi, "maxxing"],
    [/\bconfidence\b/gi, "aura"],
    [/\bcharisma\b/gi, "rizz"],
    [/\bcharm\b/gi, "rizz"],
    [/\bflirt\b/gi, "rizz up"],
    [/\bdate\b/gi, "link up"],
    [/\brelationship\b/gi, "situationship"],
    [/\bbreakup\b/gi, "villain origin story"],
    [/\bex\b/gi, "the opp"],
    [/\blove\b/gi, "down bad for"],
    [/\bhate\b/gi, "not rocking with"],
    [/\bignore\b/gi, "ghost"],
    [/\bignoring\b/gi, "ghosting"],
    [/\bwant\b/gi, "fiendin for"],
    [/\bneed\b/gi, "lowkey need"],
    [/\btry\b/gi, "attempt to maxx"],
  ],

  // Level 2 — Based: adds sentence-level transformations & filler words
  2: [
    [/\bI am\b/gi, "ya boy is"],
    [/\bI'm\b/gi, "ya boy's"],
    [/\bI think\b/gi, "ngl I think"],
    [/\bI believe\b/gi, "on god I believe"],
    [/\bIn my opinion\b/gi, "Imo no cap"],
    [/\bTo be honest\b/gi, "Ngl"],
    [/\bfor example\b/gi, "like bruh for example"],
    [/\bhowever\b/gi, "but like"],
    [/\btherefore\b/gi, "so basically"],
    [/\bfurthermore\b/gi, "and on top of that fr"],
    [/\bnevertheless\b/gi, "still tho"],
    [/\bimportant\b/gi, "lowkey crucial"],
    [/\bcritical\b/gi, "absolutely goated-level important"],
    [/\bsignificant\b/gi, "kinda fire"],
    [/\bdifficult\b/gi, "hard af"],
    [/\beasy\b/gi, "free af"],
    [/\bimpossible\b/gi, "not even possible in ohio"],
    [/\bpossible\b/gi, "doable if you lock in"],
    [/\bcompany\b/gi, "organization arc"],
    [/\bteam\b/gi, "the gang"],
    [/\bmanager\b/gi, "the boss NPC"],
    [/\bmeeting\b/gi, "group huddle"],
    [/\bproject\b/gi, "grind"],
    [/\bdeadline\b/gi, "crunch time"],
    [/\bsalary\b/gi, "bag"],
    [/\bpromoted\b/gi, "leveled up"],
    [/\bfired\b/gi, "got the L"],
    [/\bretired\b/gi, "entered the final arc"],
    [/\bcollege\b/gi, "lore building arc"],
    [/\buniversity\b/gi, "the lore institution"],
    [/\bschool\b/gi, "the tutorial level"],
    [/\bteacher\b/gi, "side quest NPC"],
    [/\bstudent\b/gi, "tutorial-level grinder"],
    [/\blearn\b/gi, "absorb the lore"],
    [/\bstudy\b/gi, "grind the books"],
    [/\bknowledge\b/gi, "lore"],
    [/\binformation\b/gi, "intel"],
    [/\bnews\b/gi, "the tea"],
    [/\bgossip\b/gi, "the hot tea"],
    [/\bsecret\b/gi, "hidden lore"],
    [/\bworld\b/gi, "this timeline"],
    [/\bcountry\b/gi, "server"],
    [/\bcity\b/gi, "spawn point"],
    [/\blife\b/gi, "this playthrough"],
    [/\bdeath\b/gi, "game over"],
    [/\bborn\b/gi, "spawned"],
    [/\bchildren\b/gi, "side quests"],
    [/\bparents\b/gi, "the OG players"],
    [/\bfamily\b/gi, "the clan"],
    [/\bmorning\b/gi, "early grind hours"],
    [/\bnight\b/gi, "late sigma hours"],
    [/\bweekend\b/gi, "free roam time"],
    [/\bholiday\b/gi, "bonus XP event"],
    [/\bbirthday\b/gi, "spawn anniversary"],
    [/\byear\b/gi, "season"],
    [/\byears\b/gi, "seasons"],
    [/\bold\b/gi, "veteran"],
    [/\bnew\b/gi, "fresh"],
    [/\bbig\b/gi, "absolute unit of"],
    [/\bsmall\b/gi, "fun-sized"],
    [/\bfast\b/gi, "speedrunning"],
    [/\bslow\b/gi, "lagging"],
    [/\bloud\b/gi, "max volume"],
    [/\bquiet\b/gi, "on mute"],
    [/\bhot\b/gi, "down bad weather"],
    [/\bcold\b/gi, "ohio weather"],
  ],

  // Level 3 — Sigma: adds chaotic sentence endings, emoji-style text, max brainrot
  3: [
    [/\bthe\b/gi, "da"],
    [/\bwhat\b/gi, "wat"],
    [/\bwith\b/gi, "wit"],
    [/\byou\b/gi, "u"],
    [/\byour\b/gi, "ur"],
    [/\bYou're\b/gi, "U r"],
    [/\byou're\b/gi, "u r"],
    [/\bbecause\b/gi, "cuz"],
    [/\bbefore\b/gi, "b4"],
    [/\bforever\b/gi, "4ever"],
    [/\bplease\b/gi, "pls"],
    [/\bprobably\b/gi, "prolly"],
    [/\bthough\b/gi, "tho"],
    [/\bthrough\b/gi, "thru"],
    [/\bright\b/gi, "rite"],
    [/\bnight\b/gi, "nite"],
    [/\babout\b/gi, "bout"],
    [/\bgoing to\b/gi, "finna"],
    [/\bgonna\b/gi, "finna"],
    [/\bwant to\b/gi, "tryna"],
    [/\bwanna\b/gi, "tryna"],
    [/\bkind of\b/gi, "kinda"],
    [/\bsort of\b/gi, "lowkey"],
    [/\ba lot\b/gi, "hella"],
    [/\bvery\b/gi, "hella"],
    [/\bextremely\b/gi, "ong so"],
    [/\bliterally\b/gi, "deadass"],
  ],
};

// Sentence-ending additions for level 3 (randomly appended)
const sentenceEndings = [
  " no cap",
  " fr fr",
  " on god",
  " ong",
  " ngl",
  " respectfully",
  " deadass",
  " skibidi",
  " its giving",
  " slay",
  " periodt",
  " lowkey",
  " sheesh",
  " bussin",
];

// ---------------------------------------------------------------------------
// TEXT REPLACEMENT ENGINE
// ---------------------------------------------------------------------------

function getReplacements(level) {
  let replacements = [];
  for (let i = 1; i <= level; i++) {
    replacements = replacements.concat(slangLevels[i] || []);
  }
  return replacements;
}

function convertText(text, level) {
  const replacements = getReplacements(level);
  let result = text;

  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, (match) => {
      // Preserve capitalization of first letter
      if (match[0] === match[0].toUpperCase() && match[0] !== match[0].toLowerCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }

  // At level 3, randomly append brainrot endings to sentences
  if (level >= 3) {
    result = result.replace(/([.!?])(\s|$)/g, (match, punct, space) => {
      if (Math.random() < 0.4) {
        const ending = sentenceEndings[Math.floor(Math.random() * sentenceEndings.length)];
        return ending + punct + space;
      }
      return match;
    });
  }

  return result;
}

// ---------------------------------------------------------------------------
// DOM TRAVERSAL — walk all text nodes, skip scripts/styles/inputs
// ---------------------------------------------------------------------------

const SKIP_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT", "CODE", "PRE", "SVG",
]);

function getTextNodes(root) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (SKIP_TAGS.has(node.parentElement?.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.textContent.trim().length === 0) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}

function convertPage(level) {
  const textNodes = getTextNodes(document.body);
  for (const node of textNodes) {
    // Store original if we haven't already
    if (!originalTexts.has(node)) {
      originalTexts.set(node, node.textContent);
    }
    // Always convert from the original to avoid double-converting
    const original = originalTexts.get(node);
    node.textContent = convertText(original, level);
  }
}

function revertPage() {
  for (const [node, original] of originalTexts) {
    try {
      node.textContent = original;
    } catch (_) {
      // Node may have been removed from DOM
    }
  }
  originalTexts.clear();
}

// ---------------------------------------------------------------------------
// MESSAGE LISTENER — responds to popup actions
// ---------------------------------------------------------------------------

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "convert") {
    convertPage(message.intensity || 2);
    sendResponse({ status: "converted" });
  } else if (message.action === "revert") {
    revertPage();
    sendResponse({ status: "reverted" });
  }
});

// Auto-convert if extension is enabled
chrome.storage.local.get(["enabled", "intensity"], (data) => {
  if (data.enabled) {
    convertPage(data.intensity || 2);
  }
});
