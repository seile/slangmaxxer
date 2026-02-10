// Slangmaxxer - Looksmaxxing / PSL Text Converter
// Converts webpage text into authentic looksmaxxing community slang
const originalTexts = new Map();

// ---------------------------------------------------------------------------
// LOOKSMAXXING SLANG DICTIONARY
// Level 1 — Softmaxxed: core PSL/lookism vocabulary
// Level 2 — Hardmaxxed: deeper community jargon, -cel/-pilled/-fraud terms
// Level 3 — GIGAMOGGED: full schizo-tier looksmaxxing, ALL CAPS outbursts,
//           random PSL analysis injections, unhinged sentence endings
// ---------------------------------------------------------------------------

const slangLevels = {
  // ---- LEVEL 1: SOFTMAXXED ----
  1: [
    // People / identity
    [/\bpeople\b/gi, "normies"],
    [/\beveryone\b/gi, "every normie on this server"],
    [/\bnobody\b/gi, "not a single soul on this PSL tier"],
    [/\bman\b/gi, "mog"],
    [/\bmen\b/gi, "mogs"],
    [/\bguy\b/gi, "chadlite"],
    [/\bguys\b/gi, "chadlites"],
    [/\bgirl\b/gi, "stacy"],
    [/\bgirls\b/gi, "stacys"],
    [/\bwoman\b/gi, "stacy"],
    [/\bwomen\b/gi, "stacys"],
    [/\bboy\b/gi, "youngcel"],
    [/\bboys\b/gi, "youngcels"],
    [/\bfriend\b/gi, "gymcel buddy"],
    [/\bfriends\b/gi, "the lookism crew"],
    [/\benemy\b/gi, "moggER"],
    [/\benemies\b/gi, "moggERs"],
    [/\bboss\b/gi, "alpha chad"],
    [/\bleader\b/gi, "top-tier mogger"],
    [/\bcelebrity\b/gi, "PSL god"],
    [/\bcelebrities\b/gi, "PSL gods"],
    [/\bteam\b/gi, "lookism crew"],
    [/\bgroup\b/gi, "mog squad"],
    [/\bperson\b/gi, "specimen"],
    [/\bpersonality\b/gi, "cope-tier trait"],
    [/\bstranger\b/gi, "random NPC"],

    // Face / bone structure
    [/\bface\b/gi, "facial structure"],
    [/\bfaces\b/gi, "facial structures"],
    [/\bjaw\b/gi, "mandible"],
    [/\bjawline\b/gi, "gonial angle"],
    [/\bcheekbones\b/gi, "zygomatic arches"],
    [/\bcheekbone\b/gi, "zygomatic arch"],
    [/\bchin\b/gi, "mental protuberance"],
    [/\bnose\b/gi, "nasal bridge"],
    [/\beyes\b/gi, "canthal tilt"],
    [/\beye\b/gi, "orbital structure"],
    [/\bforehead\b/gi, "frontal bone"],
    [/\bhead\b/gi, "skull"],
    [/\bskull\b/gi, "cranial structure"],
    [/\bneck\b/gi, "neck circumference"],
    [/\blips\b/gi, "vermilion border"],
    [/\bteeth\b/gi, "maxillary dentition"],
    [/\bsmile\b/gi, "maxilla exposure"],
    [/\bsmiling\b/gi, "maxilla-exposing"],
    [/\bbrow\b/gi, "brow ridge"],
    [/\bhairline\b/gi, "Norwood status"],
    [/\bbald\b/gi, "Norwood 7"],
    [/\bbalding\b/gi, "receding to Norwood territory"],
    [/\bhair\b/gi, "follicular status"],
    [/\bbeard\b/gi, "facial hair density"],
    [/\bwrinkles\b/gi, "collagen degradation"],
    [/\bwrinkle\b/gi, "collagen bleed"],
    [/\bskin\b/gi, "dermal layer"],
    [/\bacne\b/gi, "dermal inflammation"],

    // Body
    [/\bbody\b/gi, "frame"],
    [/\bshoulders\b/gi, "clavicular width"],
    [/\bshoulder\b/gi, "clavicle"],
    [/\bchest\b/gi, "pectoral insertions"],
    [/\barms\b/gi, "arm proportions"],
    [/\bwaist\b/gi, "adonis belt region"],
    [/\bhips\b/gi, "hip-to-shoulder ratio zone"],
    [/\blegs\b/gi, "femur-to-tibia proportions"],
    [/\bmuscles\b/gi, "lean mass"],
    [/\bmuscle\b/gi, "lean mass"],
    [/\babs\b/gi, "rectus abdominis visibility"],
    [/\bweight\b/gi, "body composition"],
    [/\bfat\b/gi, "subcutaneous adipose tissue"],
    [/\boverweight\b/gi, "bloatmaxxed"],
    [/\bthin\b/gi, "leanmaxxed"],
    [/\bskinny\b/gi, "auschwitz-mode"],
    [/\bfit\b/gi, "aesthetically optimized"],
    [/\bstrong\b/gi, "compound-lift-pilled"],
    [/\bweak\b/gi, "dyel-tier"],

    // Height
    [/\btall\b/gi, "heightmaxxed"],
    [/\bshort\b/gi, "heightmogged"],
    [/\bheight\b/gi, "vertical SMV multiplier"],

    // Attractiveness / appearance
    [/\bhandsome\b/gi, "high PSL"],
    [/\bbeautiful\b/gi, "PSL 7+"],
    [/\battractive\b/gi, "high SMV"],
    [/\bgood.looking\b/gi, "high-tier PSL"],
    [/\bpretty\b/gi, "facially harmonious"],
    [/\bcute\b/gi, "neotenous"],
    [/\bugly\b/gi, "subhuman-tier PSL"],
    [/\bunpleasant\b/gi, "negatively-canthal-tilted"],
    [/\baverage\b/gi, "normie-tier"],
    [/\bnormal\b/gi, "normie-tier"],
    [/\blooks\b/gi, "PSL rating"],
    [/\blook\b/gi, "aesthetic"],
    [/\bappearance\b/gi, "phenotype"],
    [/\bstyle\b/gi, "looksmaxxed aesthetic"],
    [/\bfashion\b/gi, "stylemaxxing"],
    [/\bclothes\b/gi, "softmaxx gear"],
    [/\boutfit\b/gi, "softmaxx loadout"],
    [/\bglasses\b/gi, "orbital-framing devices"],
    [/\bsunglasses\b/gi, "UV dodgemaxxing shields"],

    // Core looksmaxxing verbs
    [/\bimprove\b/gi, "maxx"],
    [/\bimproving\b/gi, "maxxing"],
    [/\bimprovement\b/gi, "maxxing gains"],
    [/\boptimize\b/gi, "looksmaxx"],
    [/\benhance\b/gi, "ascend"],
    [/\bchange\b/gi, "softmaxx"],
    [/\bsurgery\b/gi, "hardmaxxing procedure"],
    [/\bplastic surgery\b/gi, "hardmaxx"],
    [/\bexercise\b/gi, "gymmaxx"],
    [/\bworkout\b/gi, "gymmaxx session"],
    [/\bworking out\b/gi, "gymmaxxing"],
    [/\bgym\b/gi, "the iron temple"],
    [/\bdiet\b/gi, "leanmaxxing protocol"],
    [/\bskincare\b/gi, "skinmaxxing routine"],
    [/\bgrooming\b/gi, "groommaxxing"],
    [/\btan\b/gi, "melaninmaxx"],
    [/\btanning\b/gi, "melaninmaxxing"],
    [/\bsunscreen\b/gi, "UV dodgemaxxing cream"],

    // Comparisons / competition
    [/\bbetter than\b/gi, "mogging"],
    [/\bworse than\b/gi, "mogged by"],
    [/\boutshine\b/gi, "brutally mog"],
    [/\bbeat\b/gi, "AMOG"],
    [/\bcompete\b/gi, "mog-battle"],
    [/\bcompetition\b/gi, "mog-off"],
    [/\bdominate\b/gi, "brutalMOG"],
    [/\bdominated\b/gi, "brutally mogged"],
    [/\bintimidate\b/gi, "framemog"],
    [/\bintimidating\b/gi, "framemogging"],
    [/\bsuperior\b/gi, "mogger-tier"],
    [/\binferior\b/gi, "mogged-tier"],
    [/\bcompared to\b/gi, "PSL-benchmarked against"],

    // Cope / delusion
    [/\bexcuse\b/gi, "cope"],
    [/\bexcuses\b/gi, "copes"],
    [/\bdenial\b/gi, "maximum cope"],
    [/\bdelusional\b/gi, "full-cope-mode"],
    [/\bpretend\b/gi, "fraud"],
    [/\bpretending\b/gi, "frauding"],
    [/\bfake\b/gi, "frauded"],
    [/\bfaking\b/gi, "fraudmaxxing"],
    [/\blie\b/gi, "cope-narrative"],
    [/\blying\b/gi, "copemaxxing"],
    [/\bgiving up\b/gi, "LDAR"],
    [/\bgave up\b/gi, "went full LDAR"],
    [/\bhopeless\b/gi, "it's over"],
    [/\bhope\b/gi, "cope"],
    [/\bdoubt\b/gi, "blackpilled uncertainty"],
    [/\bwish\b/gi, "cope-wish"],

    // Value / status
    [/\bvalue\b/gi, "SMV"],
    [/\bworth\b/gi, "sexual market value"],
    [/\bstatus\b/gi, "social proof"],
    [/\breputation\b/gi, "statusmaxx level"],
    [/\bfamous\b/gi, "high-status"],
    [/\bpopular\b/gi, "statusmaxxed"],
    [/\brich\b/gi, "wealthmaxxed"],
    [/\bmoney\b/gi, "betabux"],
    [/\bwealth\b/gi, "betabux reserves"],
    [/\bsalary\b/gi, "monthly betabux"],
    [/\bconfidence\b/gi, "stabilized aura"],
    [/\bcharisma\b/gi, "dark triad energy"],
    [/\bcharm\b/gi, "NT-maxxed rizz"],
    [/\bpersonable\b/gi, "NT-pilled"],
    [/\bsocial\b/gi, "NT"],
    [/\bsocially\b/gi, "in an NT-pilled way"],
    [/\bconfident\b/gi, "aura-stabilized"],
    [/\binsecure\b/gi, "low-inhibition-deficient"],

    // Emotions / states
    [/\bhappy\b/gi, "ascension-pilled"],
    [/\bsad\b/gi, "blackpilled"],
    [/\bangry\b/gi, "cortisol-spiked"],
    [/\bstressed\b/gi, "cortisol-nuked"],
    [/\brelaxed\b/gi, "low-cortisol"],
    [/\bcalm\b/gi, "cortisol-stabilized"],
    [/\bnervous\b/gi, "high-inhibition"],
    [/\bbrave\b/gi, "low-inhibition"],
    [/\bscared\b/gi, "high-inhib-locked"],
    [/\btired\b/gi, "sleep-deprived-coping"],
    [/\benergetic\b/gi, "adrenal-maxxed"],
    [/\bmotivated\b/gi, "locked-in"],
    [/\bunmotivated\b/gi, "LDAR-adjacent"],
    [/\bfocused\b/gi, "DEEPLOCKED IN"],
    [/\bbored\b/gi, "ropecel-adjacent"],
    [/\bjealous\b/gi, "mega-coping"],
    [/\benvious\b/gi, "seething"],

    // Relationships
    [/\bgirlfriend\b/gi, "LTR stacy"],
    [/\bboyfriend\b/gi, "chad BF"],
    [/\brelationship\b/gi, "LTR"],
    [/\bdating\b/gi, "plate-spinning"],
    [/\bdate\b/gi, "IOI opportunity"],
    [/\bflirt\b/gi, "run game on"],
    [/\bflirting\b/gi, "running game"],
    [/\bmarried\b/gi, "pair-bonded"],
    [/\bmarriage\b/gi, "pair-bonding contract"],
    [/\bdivorce\b/gi, "betabux extraction event"],
    [/\bbreakup\b/gi, "branch-swing"],
    [/\bsingle\b/gi, "unmatched on the market"],
    [/\bcrush\b/gi, "oneitis"],
    [/\bin love\b/gi, "oneitis-locked"],
    [/\blove\b/gi, "pair-bonding instinct"],
    [/\bsex\b/gi, "ascension"],
    [/\brejected\b/gi, "IOI-denied"],
    [/\brejection\b/gi, "IOI denial"],
    [/\bignored\b/gi, "sub-perception-thresholded"],
    [/\battention\b/gi, "IOIs"],

    // Quality / degree
    [/\bvery\b/gi, "brutally"],
    [/\bextremely\b/gi, "PEAK"],
    [/\bincredibly\b/gi, "catastrophically"],
    [/\breally\b/gi, "genuinely"],
    [/\btruly\b/gi, "unironically"],
    [/\babsolutely\b/gi, "irreversibly"],
    [/\bcompletely\b/gi, "maxed-out"],
    [/\bslightly\b/gi, "sub-clinically"],
    [/\bsomewhat\b/gi, "quasi-"],
    [/\bseriously\b/gi, "unironically"],
    [/\bliterally\b/gi, "clinically"],

    // Good / bad
    [/\bgood\b/gi, "high-tier"],
    [/\bgreat\b/gi, "elite-tier"],
    [/\bexcellent\b/gi, "mogger-tier"],
    [/\bamazing\b/gi, "GOAT-tier"],
    [/\bperfect\b/gi, "PSL 9"],
    [/\bbad\b/gi, "sub-5"],
    [/\bterrible\b/gi, "sub-3"],
    [/\bawful\b/gi, "truecel-tier"],
    [/\bhuge\b/gi, "frame-filling"],
    [/\bbig\b/gi, "frame-mog-tier"],
    [/\bsmall\b/gi, "wristcel-tier"],
    [/\btiny\b/gi, "micro-tier"],

    // Misc
    [/\bproblem\b/gi, "fatal flaw"],
    [/\bmistake\b/gi, "irreversible PSL bleed"],
    [/\bsolution\b/gi, "surgical intervention"],
    [/\bresult\b/gi, "ascension outcome"],
    [/\bresults\b/gi, "ascension outcomes"],
    [/\bsecret\b/gi, "blackpilled truth"],
    [/\btruth\b/gi, "blackpill"],
    [/\bfact\b/gi, "blackpill data point"],
    [/\bopinion\b/gi, "cope-take"],
    [/\badvice\b/gi, "looksmaxxing protocol"],
    [/\btip\b/gi, "PSL tip"],
    [/\btips\b/gi, "softmaxx protocols"],
    [/\blife\b/gi, "genetic lottery outcome"],
    [/\blucky\b/gi, "genetically gifted"],
    [/\bunlucky\b/gi, "genetically cursed"],
    [/\bgenetics\b/gi, "genetic lottery"],
    [/\bnatural\b/gi, "unfrauded"],
    [/\bnaturally\b/gi, "without frauding"],
    [/\bsun\b/gi, "UV radiation source"],
    [/\bwater\b/gi, "hydration fluid"],
    [/\bsleep\b/gi, "recovery protocol"],
    [/\bfood\b/gi, "macros"],
    [/\bbreakfast\b/gi, "first macro intake"],
    [/\blunch\b/gi, "midday macro intake"],
    [/\bdinner\b/gi, "evening macro intake"],
    [/\bcoffee\b/gi, "cortisol-spike fluid"],
    [/\balcohol\b/gi, "collagen-destroying poison"],
    [/\bdrink\b/gi, "hydrationmaxx"],
    [/\bsmoking\b/gi, "skin-destruction protocol"],
    [/\bage\b/gi, "wall proximity"],
    [/\baging\b/gi, "wall-approaching"],
    [/\byoung\b/gi, "pre-wall"],
    [/\bold\b/gi, "post-wall"],
    [/\bphoto\b/gi, "PSL audit"],
    [/\bphotos\b/gi, "PSL audits"],
    [/\bpicture\b/gi, "fraudcheck material"],
    [/\bselfie\b/gi, "self-PSL-audit"],
    [/\bmirror\b/gi, "cope-reflector"],
    [/\bcamera\b/gi, "lens distortion device"],
  ],

  // ---- LEVEL 2: HARDMAXXED ----
  2: [
    // Sentence-level transformations
    [/\bI think\b/gi, "after running the PSL analytics I conclude"],
    [/\bI believe\b/gi, "the blackpill data confirms"],
    [/\bIn my opinion\b/gi, "Per my cranial assessment"],
    [/\bTo be honest\b/gi, "After careful mog-analysis"],
    [/\bfor example\b/gi, "as demonstrated in this mog-comparison"],
    [/\bhowever\b/gi, "BUT HERE'S THE BRUTAL MOGPILL"],
    [/\btherefore\b/gi, "and thus the mog hierarchy dictates"],
    [/\bfurthermore\b/gi, "stacking this on the PSL chart"],
    [/\bnevertheless\b/gi, "despite the brutal mogging"],
    [/\baccording to\b/gi, "the PSL database confirms"],
    [/\bI am\b/gi, "this specimen is"],
    [/\bI'm\b/gi, "this specimen's"],
    [/\bI was\b/gi, "this specimen was"],
    [/\bI have\b/gi, "this specimen has"],
    [/\bmy\b/gi, "this specimen's"],

    // -cel compounds
    [/\bvirgin\b/gi, "truecel"],
    [/\bnerd\b/gi, "STEMcel"],
    [/\bworker\b/gi, "wagecell"],
    [/\bworkers\b/gi, "wagecels"],
    [/\bloser\b/gi, "subhuman-tier cel"],
    [/\blosers\b/gi, "sub-5 cels"],
    [/\bloner\b/gi, "mentalcel"],
    [/\bshy\b/gi, "high-inhib"],
    [/\boutgoing\b/gi, "low-inhib NT-maxxed"],
    [/\blazy\b/gi, "LDAR-pilled"],
    [/\bambitious\b/gi, "grindset-locked"],

    // -pilled compounds
    [/\baware\b/gi, "blackpilled"],
    [/\bunaware\b/gi, "bluepilled"],
    [/\boptimistic\b/gi, "whitepilled"],
    [/\bpessimistic\b/gi, "blackpill-overdosed"],
    [/\brealistic\b/gi, "PSL-calibrated"],
    [/\bdelusional\b/gi, "bluepill-maxed"],
    [/\binformed\b/gi, "lore-pilled"],
    [/\beducated\b/gi, "knowledge-pilled"],

    // -fraud compounds
    [/\bmakeup\b/gi, "fakeup (fraudmaxxing)"],
    [/\bfilter\b/gi, "digital fraud"],
    [/\bfilters\b/gi, "digital fraud stack"],
    [/\bphotoshop\b/gi, "pixel-level frauding"],
    [/\bedited\b/gi, "frauded"],
    [/\blifts\b/gi, "height-frauding devices"],
    [/\bheels\b/gi, "height-fraud platforms"],
    [/\bpadding\b/gi, "frame-frauding material"],
    [/\bwig\b/gi, "Norwood-fraud system"],
    [/\bhair transplant\b/gi, "Norwood reversal surgery"],
    [/\bcontacts\b/gi, "iris-frauding lenses"],

    // -maxxing compounds
    [/\bstudying\b/gi, "IQmaxxing"],
    [/\blearning\b/gi, "knowledgemaxxing"],
    [/\breading\b/gi, "loremaxxing"],
    [/\bmeditating\b/gi, "cortisolmaxxing"],
    [/\bmeditation\b/gi, "cortisol stabilization protocol"],
    [/\brunning\b/gi, "cardiomaxxing"],
    [/\bswimming\b/gi, "aquamaxxing"],
    [/\blifting\b/gi, "compound-lift-maxxing"],
    [/\bstretching\b/gi, "flexibilitymaxxing"],
    [/\bsinging\b/gi, "voicemaxxing"],
    [/\bcooking\b/gi, "macromaxxing"],
    [/\bcleaning\b/gi, "hygienemaxxing"],
    [/\btraveling\b/gi, "geomaxxing"],
    [/\btravel\b/gi, "geomaxx"],
    [/\bmoving\b/gi, "geolocation-maxxing"],

    // PSL terminology
    [/\bsymmetry\b/gi, "facial harmony coefficient"],
    [/\bsymmetrical\b/gi, "harmonically balanced"],
    [/\basymmetrical\b/gi, "harmony-deficient"],
    [/\bproportion\b/gi, "golden ratio alignment"],
    [/\bproportional\b/gi, "golden-ratio-compliant"],
    [/\bbone structure\b/gi, "skeletal framework PSL base"],
    [/\bfeatures\b/gi, "facial thirds distribution"],
    [/\bmasculine\b/gi, "dimorphism-maxxed"],
    [/\bfeminine\b/gi, "neotenous-featured"],
    [/\bandrogynous\b/gi, "dimorphism-neutral"],
    [/\byouthful\b/gi, "collagen-rich"],
    [/\bmature\b/gi, "collagen-depleted"],

    // Life / context in lookism terms
    [/\bschool\b/gi, "social hierarchy arena"],
    [/\bcollege\b/gi, "peak SMV testing ground"],
    [/\buniversity\b/gi, "the SMV proving grounds"],
    [/\bwork\b/gi, "betabux grind"],
    [/\bjob\b/gi, "betabux source"],
    [/\bcareer\b/gi, "statusmaxx trajectory"],
    [/\bparty\b/gi, "IOI farming event"],
    [/\bbar\b/gi, "mog-arena"],
    [/\bclub\b/gi, "nighttime mog-arena"],
    [/\bbeach\b/gi, "frame-exposure zone"],
    [/\bpool\b/gi, "frame-audit zone"],
    [/\bmall\b/gi, "softmaxx supply depot"],
    [/\bhospital\b/gi, "hardmaxx facility"],
    [/\bdoctor\b/gi, "potential hardmaxx consultant"],

    // Misc deep lore
    [/\bDNA\b/gi, "genetic source code"],
    [/\bgenetic\b/gi, "hereditary RNG"],
    [/\binherited\b/gi, "genetically loaded"],
    [/\brandom\b/gi, "RNG-determined"],
    [/\bchance\b/gi, "genetic lottery probability"],
    [/\bsuccessful\b/gi, "ascended"],
    [/\bfailed\b/gi, "LDAR'd"],
    [/\bwinning\b/gi, "ascending"],
    [/\blosing\b/gi, "descending the PSL chart"],
    [/\bfight\b/gi, "frame-check encounter"],
    [/\bhit\b/gi, "frame-checked"],
    [/\bran into\b/gi, "got brutally mogged by"],
    [/\bsaw\b/gi, "CLOCKED"],
    [/\bseen\b/gi, "CLOCKED"],
    [/\bnoticed\b/gi, "CLOCKED"],
    [/\bstared\b/gi, "DEEPLOCKED on"],
    [/\bstaring\b/gi, "DEEPLOCKING on"],
    [/\blooked at\b/gi, "ran a PSL audit on"],
    [/\bwalking\b/gi, "frame-displaying"],
    [/\bwalked\b/gi, "frame-displayed"],
    [/\bstanding\b/gi, "holding frame"],
    [/\bsat down\b/gi, "collapsed frame"],
    [/\bmorning\b/gi, "AM cortisol window"],
    [/\bevening\b/gi, "PM cortisol window"],
    [/\bnight\b/gi, "melatonin production phase"],
    [/\btoday\b/gi, "current cortisol cycle"],
    [/\byesterday\b/gi, "previous cortisol cycle"],
    [/\btomorrow\b/gi, "next cortisol cycle"],
    [/\bweather\b/gi, "UV index conditions"],
    [/\brain\b/gi, "zero-UV window"],
    [/\bsunny\b/gi, "high UV exposure risk"],
  ],

  // ---- LEVEL 3: GIGAMOGGED (full unhinged mode) ----
  3: [
    // Intensifiers / text style mutations
    [/\bthe\b/gi, "DA"],
    [/\bthis\b/gi, "DIS"],
    [/\bthat\b/gi, "DAT"],
    [/\bwhat\b/gi, "WAT"],
    [/\bwhy\b/gi, "Y"],
    [/\bhow\b/gi, "HOW TF"],
    [/\bwho\b/gi, "WHICH SPECIMEN"],
    [/\bwhere\b/gi, "in WHICH mog-arena"],
    [/\bwhen\b/gi, "at WHICH cortisol cycle point"],
    [/\bbecause\b/gi, "due to IRREVERSIBLE genetic factors"],
    [/\bbut\b/gi, "BUT HOLD ON—"],
    [/\band\b/gi, "AND ON TOP OF THAT"],
    [/\bso\b/gi, "AND SO after careful PSL analysis"],
    [/\bvery\b/gi, "CATASTROPHICALLY"],
    [/\bjust\b/gi, "LITERALLY"],
    [/\bonly\b/gi, "BY A MILLIMETER of PSL"],
    [/\bmaybe\b/gi, "pending further mog-analysis"],
    [/\bprobably\b/gi, "almost CERTAINLY per the blackpill"],
    [/\bsure\b/gi, "PSL-CONFIRMED"],
    [/\byes\b/gi, "CONFIRMED MOG"],
    [/\bno\b/gi, "DENIED—cope harder"],
    [/\bok\b/gi, "acknowledged, specimen"],
    [/\balso\b/gi, "FURTHERMORE in this mog-hierarchy"],
    [/\bactually\b/gi, "UPON DEEPER PSL INSPECTION"],
  ],
};

// Sentence endings for level 3 — authentic lookism forum energy
const sentenceEndings = [
  " — BRUTAL mogpill",
  " it's OVER",
  " COPE or ROPE",
  " and that's the blackpill",
  " — irreversible PSL bleed",
  " absolute FRAME CHECK",
  " CLOCKED PEAK COPE 😳",
  " the mog was CATASTROPHIC",
  " mogger-tier outcome",
  " — cortisol NUKED",
  " DEEPLOCKED IN stabilized AURA",
  " the gonial angle doesn't lie",
  " BY A MILLIMETER",
  " just run [trait]maxxing bro",
  " — the mandible has spoken",
  " brutal heightmog detected",
  " SMV in FREEFALL",
  " genetic lottery = RIGGED",
  " PSL chart = DECIMATED",
  " — this is what PEAK COPE looks like",
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
      // At level 3 we keep the chaotic casing from the dictionary
      if (level >= 3) return replacement;
      // Preserve capitalization of first letter for levels 1-2
      if (match[0] === match[0].toUpperCase() && match[0] !== match[0].toLowerCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }

  // At level 2+, randomly CAPS-lock some words for emphasis
  if (level >= 2) {
    result = result.replace(/\b[a-z]{5,}\b/g, (word) => {
      return Math.random() < 0.06 ? word.toUpperCase() : word;
    });
  }

  // At level 3, append unhinged sentence endings
  if (level >= 3) {
    result = result.replace(/([.!?])(\s|$)/g, (match, punct, space) => {
      if (Math.random() < 0.35) {
        const ending =
          sentenceEndings[Math.floor(Math.random() * sentenceEndings.length)];
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
    if (!originalTexts.has(node)) {
      originalTexts.set(node, node.textContent);
    }
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
// MESSAGE LISTENER
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

chrome.storage.local.get(["enabled", "intensity"], (data) => {
  if (data.enabled) {
    convertPage(data.intensity || 2);
  }
});
