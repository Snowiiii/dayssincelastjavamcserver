// Raw source data for Minecraft server/proxy forks and from-scratch projects.
//
// How each entry's `date` is chosen:
//   1. The date of the project's first release/commit, if it has any.
//   2. Otherwise, the date of its announcement or first blog post.
//   3. Otherwise, the date of the earliest known mention in forums or social media.
//
// How each entry's `owner` is chosen:
//   1. If the project isn't hosted under an organization (or the org has a single member), use the individual's name — 
//      following the same first release/commit -> announcement -> earliest mention priority as above.
//   2. If it has multiple members, use the organization name.

const minecraftforks = {
  "1.7.2": [
    { basedOn: "Spigot", owner: "djoveryde", name: "Cauldron", price: 0, date: "2015-05-13", url: "https://github.com/djoveryde/Cauldron", status: "deprecated" },
  ],
  "1.7.3": [
    { basedOn: "CraftBukkit", owner: "RhysB", name: "Project-Poseidon", price: 0, date: "2014-06-10", url: "https://github.com/RhysB/Project-Poseidon", status: "rarely-updated" },
    { basedOn: "Project-Poseidon", owner: "Moresteck", name: "UberBukkit", price: 0, date: "2020-03-06", url: "https://github.com/Moresteck/uberbukkit", status: "abandoned" },
    { basedOn: "CraftBukkit", owner: "Canyon", name: "Canyon", date: "2017-02-01", price: 0, url: "https://github.com/canyonmodded/canyon", status: "abandoned" },
  ],
  "1.7.10": [
    { basedOn: "CraftBukkit", owner: "gcallant", name: "Contigo", price: 0, date: "2016-11-10", url: "https://github.com/gcallant/Contigo", status: "abandoned" },
    { basedOn: "Thermos", owner: "CrucibleMC", name: "Crucible", price: 0, date: "2019-11-17", url: "https://github.com/CrucibleMC/Crucible", status: "abandoned" },
    { basedOn: "KCauldron", owner: "UraniumMC", name: "Uranium", price: 0, date: "2016-05-15", url: "https://github.com/UraniumMC/Uranium", status: "abandoned" },
    { basedOn: "Cauldron", owner: "djoveryde", name: "KCauldron", price: 0, date: "2015-03-22", url: "https://github.com/djoveryde/KCauldron", status: "deprecated" },
  ],
  "1.8": [
    { basedOn: undefined, owner: "Diz", name: "StellarSpigot", price: 150, date: "2019-09-21", url: "https://builtbybit.com/threads/%E2%9C%A8stellarspigot%E2%9C%A8-recoded-tnt-outperforms-wine-entities-hoppers-spawners-etc-150-1-8-8.523827/", status: "abandoned" },
    { basedOn: undefined, owner: "Diz", name: "GemSpigot", price: 500, date: "2020-08-26", url: "https://builtbybit.com/threads/%E2%9C%A7-gemspigot-%E2%9C%A7-the-best-1-8-spigot-explosions-entities-hoppers-spawners-exploit-fixes.621843/", status: "abandoned" },
    { basedOn: undefined, owner: "Diz", name: "BreadSpigot", price: 30, date: "2019-05-03", url: "https://builtbybit.com/threads/%E2%9C%85-breadspigot-%E2%9C%85-skyblock-spigot-optimized-hoppers-entities-redstone-etc-mega-sale-30.475910/", status: "abandoned" },
    { basedOn: "TacoSpigot", owner: "Diz", name: "SpaceDeltaSpigot", price: 0, date: "2020-12-06", url: "https://github.com/StellarDev-org/SpaceDeltaSpigot", status: "abandoned" },
    { basedOn: "TacoSpigot", owner: "CobbleSword", name: "BurritoSpigot", price: 0, date: "2021-10-30", url: "https://github.com/CobbleSword/BurritoSpigot", status: "abandoned" },
    { basedOn: "Paper", owner: "Linux4", name: "CloudSpigot", price: 0, date: "2018-09-09", url: "https://github.com/Linux4/CloudSpigot", status: "abandoned" },
    { basedOn: undefined, owner: "Golfing8", name: "WineSpigot", price: 150, date: "2021-06-23", url: "https://www.mckore.com/", status: "abandoned" },
    { basedOn: "Paper", owner: "arcadiamc-cz", name: "Arcadepaper", price: 0, date: "2021-08-09", url: "https://github.com/arcadiamc-cz/ArcadePaper", status: "abandoned" },
    { basedOn: undefined, owner: "Aarne", name: "RocketSpigot", price: undefined, date: "2023-06-22", url: "https://builtbybit.com/threads/selling-rocketspigot-vortexpearls-resources.715492/#post-5002341", status: "abandoned" },
    { basedOn: undefined, owner: "Aarne", name: "VortexSpigot", price: undefined, date: "2023-06-22", url: "https://builtbybit.com/threads/selling-rocketspigot-vortexpearls-resources.715492/#post-5002341", status: "abandoned" },
    { basedOn: "Paper", owner: "Scalebound", name: "FoxSpigot", price: 15, date: "2021-02-25", url: "https://builtbybit.com/threads/foxspigot-1-8-8-hitdetection-knockback-entityhider-15.678503/", status: "abandoned" },
    { basedOn: "Paper", owner: "MachineBreaker", name: "EvarSpigot", price: undefined, date: "2021-12-13", url: "https://www.youtube.com/watch?v=YgwEJHEeMqg", status: "abandoned" },
    { basedOn: "Paper", owner: "MachineBreaker", name: "SaltSpigot", price: undefined, date: ">2021-12-13", url: "", status: "abandoned" },
    { basedOn: "Paper", owner: "MachineBreaker", name: "InsanePaper", price: undefined, date: "2021-04-11", url: "https://builtbybit.com/threads/1-8-8-insanepaper-heavily-optimized-knockback-profiles-asynchronous-cannoning-jar-40.659811/", status: "abandoned" },
    { basedOn: "Paper", owner: "VictorML11", name: "FluxSpigot", price: 0, date: "2018-04-05", url: "https://github.com/VictorML11/FluxSpigot", status: "abandoned" },
    { basedOn: undefined, owner: "mcprotection", name: "AtomSpigot", price: 30, date: "2021-06-14", url: "https://www.youtube.com/watch?v=keojDc4Dpz4", status: "abandoned" },
    { basedOn: "Purpur", owner: "SharkurMC", name: "Sharkur", price: 0, date: "2022-06-17", url: "https://github.com/SharkurMC/Sharkur", status: "abandoned" },
    { basedOn: undefined, name: "ReliableSpigot", price: undefined, date: "2019-05-28", url: "https://reliableplugins.com/plugins/reliablespigot/index.php", status: "abandoned" },
    { basedOn: undefined, name: "DytanicSpigot", price: undefined, date: "2021-06-11", url: "https://www.reddit.com/r/admincraft/comments/nx7eb7/what_happened_to_dytanicspigot/?tl=es-es", status: "abandoned" },
    { basedOn: "Paper", owner: "hpfxd", name: "PandaSpigot", price: 0, date: "2021-11-05", url: "https://github.com/hpfxd/PandaSpigot", status: "maintained" },
    { basedOn: "Paper", owner: "Wind-Development", name: "WindSpigot", price: 0, date: "2022-02-01", url: "https://github.com/Wind-Development/WindSpigot/commits/master/", status: "maintained" },
    { basedOn: "Paper", owner: "LeeGod", name: "ImanitySpigot", price: { standard: 50, premium: 80, enterprise: "10/month", source: 400 }, date:"2019-05-30", url: "https://builtbybit.com/resources/imanityspigot3-regular.10770/", status: "maintained" },
    { basedOn: "Paper", owner: "LinsaFTW", name: "FlamePaper", price: 6.99, date: "2024-05-07", url: "https://builtbybit.com/resources/flamepaper-high-performance.44405/", status: "maintained" },
    { basedOn: "Paper", owner: "ProjectKig", name: "KigSpigot", price: 0, url: "https://github.com/ProjectKig/KigPaper/tags", status: "rarely-updated" },
    { basedOn: "Paper", owner: "Electroid", name: "SportPaper", price: 0, date: "2018-08-04", url: "https://github.com/Electroid/SportPaper", status: "rarely-updated" },
    { basedOn: "Spigot", owner: "call911", name: "LightSpigot8", price: 10, date: "2021-06-11", url: "https://builtbybit.com/resources/lightspigot-8-made-for-pvp-servers.19876/", status: "migrated" },
    { basedOn: "Spigot", owner: "call911", name: "LightSpigot8 LITE", price: 0, date: "2020-08-14", url: "https://builtbybit.com/resources/lightspigot-8-lite-for-pvp-servers.16933/", status: "migrated" },
    { basedOn: "TacoSpigot", owner: "CobbleSword", name: "NachoSpigot", price: 0, date: "2020-07-12", url: "https://github.com/CobbleSword/NachoSpigot", status: "deprecated" },
    { basedOn: "Paper", owner: "TacoSpigot", name: "TacoSpigot", price: 0, date: "2015-12-07", url: "https://github.com/TacoSpigot/TacoSpigot/releases", status: "deprecated" },
  ],
  "1.11": [
    { basedOn: "Spigot", owner: "softpak", name: "HOSE", date: "2017-05-12", price: 0, url: "https://github.com/softpak/HOSE", status: "abandoned" },
  ],
  "1.12": [
    { basedOn: "Spigot", owner: "KettleFoundation", name: "Kettle", date: "2019-02-21", price: 0, url: "https://github.com/KettleFoundation/Kettle", status: "abandoned" },
    { basedOn: "Spigot", owner: "josephworks", name: "AtomMC", date: "2019-02-22", price: 0, url: "https://github.com/josephworks/AtomMC", status: "abandoned" },
  ],
  "1.16": [
    { basedOn: "Paper", owner: "KR33PYK1NG", name: "Mist", date: "2021-08-25", price: 0, url: "https://github.com/MinecraftMist/Mist", status: "abandoned" },
    { basedOn: "Paper", owner: "jacobp925", name: "NFT-Worlds/Server", date: "2021-02-15", price: 0, url: "https://github.com/NFT-Worlds/Server", status: "abandoned" },
  ],
  "1.18": [
    { basedOn: "Paper", owner: "Titaniumtown", name: "Jettpack", date: "2018-11-15", price: 0, url: "https://gitlab.com/Titaniumtown/JettPack", status: "abandoned" },
    { basedOn: "Spigot", owner: "Luohuayu", name: "CatServer", date: "2023-05-10", price: 0, url: "https://github.com/Luohuayu/CatServer", status: "abandoned" },
  ],
  "1.19": [
    { basedOn: "Paper", owner: "Pearl-Project", name: "Pearl", date: "2022-07-06", price: 0, url: "https://github.com/Pearl-Project/Pearl", status: "abandoned" },
  ],
  "1.20": [
    { basedOn: "Paper", owner: "KaiijuMC", name: "Kaiiju", price: 0, date: "2023-02-10", url: "https://github.com/KaiijuMC/Kaiiju", status: "abandoned" },
  ],
  "1.21": [
    { basedOn: undefined, owner: "Diz", name: "AxolotlSpigot (1.21)", price: 10, date: "2024-05-23", url: "https://discord.com/invite/md34xR6QnK/", status: "abandoned" },
    { basedOn: "Paper", owner: "Cryptite", name: "OldSlice", price: 0, date: "2021-09-21", url: "https://github.com/Cryptite/OldSlice", status: "abandoned" },
    { basedOn: "Paper", owner: "foss-mc", name: "Patina", date: "2020-08-27", price: 0, url: "https://github.com/PatinaMC/Patina", status: "abandoned" },
    { basedOn: "Spigot", owner: "call911", name: "LightSpigot21", price: 20, date: "2020-11-07", url: "https://builtbybit.com/resources/light-spigot-21-lightning-performance.17753/", status: "maintained" },
    { basedOn: "Paper", owner: "MachineBreaker", name: "USpigot", price: { standard: 70 }, date: "2023-04-04", url: "https://www.reddit.com/r/admincraft/comments/19ckasy/anyone_used_universespigot_or_other_performance/", status: "maintained" },
  ],
  "latest": [
    { basedOn: "Vanilla", owner: "Bukkit", name: "Bukkit", price: 0, date: "2010-12-20", url: "https://github.com/Bukkit/Bukkit", status: "deprecated" },
    { basedOn: "Bukkit", owner: "CraftBukkit", name: "CraftBukkit", price: 0, date: "2011-06-21", url: "https://hub.spigotmc.org/stash/projects/CJB/repos/craftbukkit/browse", status: "maintained" },
    { basedOn: "CraftBukkit", owner: "SpigotMC", name: "Spigot", price: 0, date: "2012-12-21", url: "https://www.spigotmc.org/", status: "maintained" },
    { basedOn: "Spigot", owner: "PaperMC", name: "Paper", price: 0, date: "2010-12-21", url: "https://github.com/PaperMC/Paper", status: "maintained" },
    { basedOn: "Paper", owner: "PaperMC", name: "Folia", price: 0, date: "2021-06-12", url: "https://github.com/PaperMC/Folia/", status: "maintained" },
    { basedOn: "Paper", owner: "Winds-Studio", name: "Leaf", price: 0, date: "2022-06-02", url: "https://github.com/Winds-Studio/Leaf", status: "maintained" },
  ],
};

const fromScratchMinecraftServer = {
  "1.7.9": [
    { owner: "kangarko", name: "Rush", price: 0, date: "2015-11-15", url: "https://github.com/kangarko/Rush", status: "abandoned", languages: ["Java"] },
    { owner: "GlowstoneMC", name: "Glowstone-Legacy", price: 0, date: "2016-09-04", url: "https://github.com/GlowstoneMC/Glowstone-Legacy", status: "migrated", languages: ["Java"] },
  ],
  "1.8.8": [
    { owner: "Cuberite", name: "Cuberite", price: 0, date: "2010-12-21", url: "https://github.com/Cuberite/Cuberite", status: "rarely-updated", languages: ["C++", "Lua"] },
    { owner: "iChoco_Milk", name: "Go-Server", price: 0, date: "2024-07-09", url: "https://www.youtube.com/watch?v=6Yrv7VQX7Ow", status: "migrated", languages: ["Go"] },
    { owner: "macmv", name: "Bamboo", price: 0, url: "https://github.com/macmv/bamboo", date: "2022-01-27", status: "abandoned", languages: ["Rust"] },
    { owner: "SanderGielisse", name: "Enderstone", price: 0, date: "2015-09-01", url: "https://github.com/SanderGielisse/Enderstone", status: "abandoned", languages: ["Java"] },
    { owner: "Rinny-inc", name: "Coral", price: 0, date: "2026-06-18", url: "https://github.com/Rinny-Inc/Coral", status: "maintained", languages: ["Rust"] },
  ],
  "1.12.2": [
    { owner: "Kek5chen", name: "KittyMC", price: 0, url: "https://github.com/Kek5chen/kittymc", date: "2025-03-29", status: "rarely-updated", languages: ["Rust"] },
  ],
  "1.16.5": [
    { owner: "feather-rs", name: "Feather", price: 0, url: "https://github.com/feather-rs/feather", date: "2019-09-01", status: "deprecated", languages: ["Rust"] },
  ],
  "1.20.1": [
    { owner: "andrewgazelka", name: "Hyperion", price: 0, url: "https://github.com/andrewgazelka/hyperion", date: "2024-03-15", status: "abandoned", languages: ["Rust"] },
  ],
  "1.20.4": [
    { owner: "MCHPR", name: "MCHPRS", price: 0, url: "https://github.com/MCHPR/MCHPRS", date: "2020-06-20", status: "rarely-updated", languages: ["Rust"] },
  ],
  "1.19": [
    { owner: "GlowstoneMC", name: "Glowstone", price: 0, date: "2016-03-02", url: "https://github.com/GlowstoneMC/Glowstone", status: "rarely-updated", languages: ["Java"] },
  ],
  "1.21": [
    { owner: "iChoco_Milk", name: "Reactor", price: 0, date: "2025-02-16", url: "https://github.com/Reactor-Hytale/Reactor-V1-DEPRECATED", status: "migrated", languages: ["Java"] },
    { owner: "Mansitoh", name: "Hexa-Server", price: 0, date: "2025-01-03", url: "https://github.com/Skilled-Development/HexaServer", status: "abandoned", languages: ["Go"] },
    { owner: "sweattypalms", name: "FerrumC", price: 0, date: "2024-09-09", url: "https://github.com/sweattypalms/ferrumc", status: "abandoned", languages: ["Rust"] },
    { owner: "Vulae", name: "PKMC", price: 0, date: "2025-01-21", url: "https://github.com/Vulae/pkmc", status: "abandoned", languages: ["Rust"] },
    { owner: "T-x-T", name: "Oxide", price: 0, date: "2025-03-27", url: "https://github.com/T-x-T/Oxide", status: "rarely-updated", languages: ["Rust"] },
  ],
  "latest": [
    { owner: "PumpkinMC", name: "Pumpkin", price: 0, url: "https://pumpkinmc.org/", date: "2024-07-31", status: "maintained", languages: ["Rust"] },
    { owner: "Quozul", name: "PicoLimbo", price: 0, url: "https://github.com/Quozul/PicoLimbo", date: "2025-05-14", status: "maintained", languages: ["Rust"] },
    { owner: "SteelMC", name: "Steel MC", price: 0, url: "https://steel-foundation.github.io/SteelDocs/", date: "2025-10-16", status: "maintained", languages: ["Rust"] },
    { owner: "TemperMC", name: "Temper", price: 0, url: "https://temper-mc.com/", date: "2026-04-30", status: "maintained", languages: ["Rust"] },
  ],
};

const fromScratchMinecraftProxy = [
  { owner: "PaperMC", name: "Velocity", price: 0, date: "2019-01-15", url: "https://github.com/VelocityPowered/Velocity", status: "maintained", languages: ["Java"] },
  { owner: "SpigotMC", name: "BungeeCord", price: 0, date: "2013-10-04", url: "https://github.com/SpigotMC/BungeeCord", status: "maintained", languages: ["Java"] },
  { owner: "sammwyy", name: "Lure", price: 0, date: "2023-02-23", url: "https://github.com/sammwyy/Lure", status: "abandoned", languages: ["Rust"] },
  { owner: "minekube", name: "Gate", price: 0, date: "2020-08-02", url: "https://github.com/minekube/Gate", status: "maintained", languages: ["Go"] }
];

// Flattens the grouped source objects above into one list of project records.
function normalizeProjects() {
  const list = [];
  let id = 0;

  const push = (obj) => {
    list.push({ id: "p" + id++, ...obj });
  };

  // Forks (based on another project). Bukkit-family forks default to Java.
  for (const [version, forks] of Object.entries(minecraftforks)) {
    for (const f of forks) {
      push({
        name: f.name,
        author: f.owner,
        price: f.price,
        date: f.date,
        version,
        url: f.url,
        basedOn: f.basedOn,
        status: f.status,
        languages: f.languages && f.languages.length ? f.languages : ["Java"],
        origin: "fork",
        category: "server",
      });
    }
  }

  // From-scratch servers.
  for (const [version, projects] of Object.entries(fromScratchMinecraftServer)) {
    for (const p of projects) {
      push({
        name: p.name,
        author: p.owner,
        price: p.price,
        date: p.date,
        version,
        url: p.url,
        basedOn: undefined,
        status: p.status,
        languages: p.languages || [],
        origin: "scratch",
        category: "server",
      });
    }
  }

  // From-scratch proxies (no version bucket in the source data).
  for (const p of fromScratchMinecraftProxy) {
    push({
      name: p.name,
      author: p.owner,
      price: p.price,
      date: p.date,
      version: undefined,
      url: p.url,
      basedOn: undefined,
      status: p.status,
      languages: p.languages || [],
      origin: "scratch",
      category: "proxy",
    });
  }

  return list;
}

export const PROJECTS = normalizeProjects();

function buildForkIndex(projects) {
  const childrenByParent = {};
  for (const p of projects) {
    if (p.basedOn) {
      (childrenByParent[p.basedOn] = childrenByParent[p.basedOn] || []).push(p);
    }
  }
  return childrenByParent;
}

export const FORK_INDEX = buildForkIndex(PROJECTS);

// True if any known project is forked from this one.
export function hasForks(projectName) {
  return Boolean(FORK_INDEX[projectName] && FORK_INDEX[projectName].length);
}

// Counts every descendant fork of a project, recursively.
export function countDescendants(name, seen = new Set()) {
  if (seen.has(name)) return 0;
  seen.add(name);
  const children = FORK_INDEX[name] || [];
  let total = 0;
  for (const child of children) {
    if (child.name === name) continue;
    total += 1 + countDescendants(child.name, seen);
  }
  return total;
}

// Builds a hierarchical tree ({ name, project, children[] }) rooted at a project name.
export function buildForkTree(projectName, seen = new Set()) {
  if (seen.has(projectName)) return { name: projectName, project: null, children: [] };
  seen.add(projectName);

  const self = PROJECTS.find((p) => p.name === projectName) || null;
  const children = (FORK_INDEX[projectName] || [])
    .filter((c) => c.name !== projectName)
    .map((c) => buildForkTree(c.name, seen));

  return { name: projectName, project: self, children };
}
