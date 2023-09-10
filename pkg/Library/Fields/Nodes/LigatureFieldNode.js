/**
 * @license
 * Copyright 2023 NeonFlan LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ligatures = [
  "3d rotation",
  "ac unit",
  "access alarm",
  "access alarms",
  "access time",
  "accessibility",
  "accessible",
  "account balance",
  "account balance wallet",
  "account box",
  "account circle",
  "adb",
  "add",
  "add a photo",
  "add alarm",
  "add alert",
  "add box",
  "add circle",
  "add circle outline",
  "add location",
  "add shopping cart",
  "add to photos",
  "add to queue",
  "adjust",
  "airline seat flat",
  "airline seat flat angled",
  "airline seat individual suite",
  "airline seat legroom extra",
  "airline seat legroom normal",
  "airline seat legroom reduced",
  "airline seat recline extra",
  "airline seat recline normal",
  "airplanemode active",
  "airplanemode inactive",
  "airplay",
  "airport shuttle",
  "alarm",
  "alarm add",
  "alarm off",
  "alarm on",
  "album",
  "all inclusive",
  "all out",
  "android",
  "announcement",
  "apps",
  "archive",
  "arrow back",
  "arrow downward",
  "arrow drop down",
  "arrow drop down circle",
  "arrow drop up",
  "arrow forward",
  "arrow upward",
  "art track",
  "aspect ratio",
  "assessment",
  "assignment",
  "assignment ind",
  "assignment late",
  "assignment return",
  "assignment returned",
  "assignment turned in",
  "assistant",
  "assistant photo",
  "attach file",
  "attach money",
  "attachment",
  "audiotrack",
  "autorenew",
  "av timer",
  "backspace",
  "backup",
  "battery alert",
  "battery charging full",
  "battery full",
  "battery std",
  "battery unknown",
  "beach access",
  "beenhere",
  "block",
  "bluetooth",
  "bluetooth audio",
  "bluetooth connected",
  "bluetooth disabled",
  "bluetooth searching",
  "blur circular",
  "blur linear",
  "blur off",
  "blur on",
  "book",
  "bookmark",
  "bookmark border",
  "border all",
  "border bottom",
  "border clear",
  "border color",
  "border horizontal",
  "border inner",
  "border left",
  "border outer",
  "border right",
  "border style",
  "border top",
  "border vertical",
  "brightness 1",
  "brightness 2",
  "brightness 3",
  "brightness 4",
  "brightness 5",
  "brightness 6",
  "brightness 7",
  "brightness auto",
  "brightness high",
  "brightness low",
  "brightness medium",
  "broken image",
  "brush",
  "bug report",
  "build",
  "business",
  "business center",
  "cached",
  "cake",
  "call",
  "call end",
  "call made",
  "call merge",
  "call missed",
  "call missed outgoing",
  "call received",
  "call split",
  "camera",
  "camera alt",
  "camera enhance",
  "camera front",
  "camera rear",
  "camera roll",
  "cancel",
  "card giftcard",
  "card membership",
  "card travel",
  "casino",
  "cast",
  "cast connected",
  "center focus strong",
  "center focus weak",
  "change history",
  "chat",
  "chat bubble",
  "chat bubble outline",
  "check",
  "check box",
  "check box outline blank",
  "check circle",
  "chevron left",
  "chevron right",
  "child care",
  "child friendly",
  "chrome reader mode",
  "class",
  "clear",
  "clear all",
  "close",
  "closed caption",
  "cloud",
  "cloud circle",
  "cloud done",
  "cloud download",
  "cloud off",
  "cloud queue",
  "cloud upload",
  "code",
  "collections",
  "collections bookmark",
  "color lens",
  "colorize",
  "comment",
  "compare",
  "compare arrows",
  "computer",
  "confirmation number",
  "contact mail",
  "contact phone",
  "contacts",
  "content copy",
  "content cut",
  "content paste",
  "control point",
  "control point duplicate",
  "copyright",
  "create",
  "create new folder",
  "credit card",
  "crop",
  "crop 16 9",
  "crop 3 2",
  "crop 5 4",
  "crop 7 5",
  "crop din",
  "crop free",
  "crop landscape",
  "crop original",
  "crop portrait",
  "crop rotate",
  "crop square",
  "dashboard",
  "data usage",
  "date range",
  "dehaze",
  "delete",
  "description",
  "desktop mac",
  "desktop windows",
  "details",
  "developer board",
  "developer mode",
  "device hub",
  "devices",
  "devices other",
  "dialer sip",
  "dialpad",
  "directions",
  "directions bike",
  "directions boat",
  "directions bus",
  "directions car",
  "directions railway",
  "directions run",
  "directions subway",
  "directions transit",
  "directions walk",
  "disc full",
  "dns",
  "do not disturb",
  "do not disturb alt",
  "dock",
  "domain",
  "done",
  "done all",
  "donut large",
  "donut small",
  "drafts",
  "drag handle",
  "drive eta",
  "dvr",
  "edit",
  "edit location",
  "eject",
  "email",
  "enhanced encryption",
  "equalizer",
  "error",
  "error outline",
  "event",
  "event available",
  "event busy",
  "event note",
  "event seat",
  "exit to app",
  "expand less",
  "expand more",
  "explicit",
  "explore",
  "exposure",
  "exposure neg 1",
  "exposure neg 2",
  "exposure plus 1",
  "exposure plus 2",
  "exposure zero",
  "extension",
  "face",
  "fast forward",
  "fast rewind",
  "favorite",
  "favorite border",
  "feedback",
  "fiber dvr",
  "fiber manual record",
  "fiber new",
  "fiber pin",
  "fiber smart record",
  "file download",
  "file upload",
  "filter",
  "filter 1",
  "filter 2",
  "filter 3",
  "filter 4",
  "filter 5",
  "filter 6",
  "filter 7",
  "filter 8",
  "filter 9",
  "filter 9 plus",
  "filter b and w",
  "filter center focus",
  "filter drama",
  "filter frames",
  "filter hdr",
  "filter list",
  "filter none",
  "filter tilt shift",
  "filter vintage",
  "find in page",
  "find replace",
  "fingerprint",
  "fitness center",
  "flag",
  "flare",
  "flash auto",
  "flash off",
  "flash on",
  "flight",
  "flight land",
  "flight takeoff",
  "flip",
  "flip to back",
  "flip to front",
  "folder",
  "folder open",
  "folder shared",
  "folder special",
  "font download",
  "format align center",
  "format align justify",
  "format align left",
  "format align right",
  "format bold",
  "format clear",
  "format color fill",
  "format color reset",
  "format color text",
  "format indent decrease",
  "format indent increase",
  "format italic",
  "format line spacing",
  "format list bulleted",
  "format list numbered",
  "format paint",
  "format quote",
  "format shapes",
  "format size",
  "format strikethrough",
  "format textdirection l to r",
  "format textdirection r to l",
  "format underlined",
  "forum",
  "forward",
  "forward 10",
  "forward 30",
  "forward 5",
  "free breakfast",
  "fullscreen",
  "fullscreen exit",
  "functions",
  "gamepad",
  "games",
  "gavel",
  "gesture",
  "get app",
  "gif",
  "golf course",
  "gps fixed",
  "gps not fixed",
  "gps off",
  "grade",
  "gradient",
  "grain",
  "graphic eq",
  "grid off",
  "grid on",
  "group",
  "group add",
  "group work",
  "hd",
  "hdr off",
  "hdr on",
  "hdr strong",
  "hdr weak",
  "headset",
  "headset mic",
  "healing",
  "hearing",
  "help",
  "help outline",
  "high quality",
  "highlight",
  "highlight off",
  "history",
  "home",
  "hot tub",
  "hotel",
  "hourglass empty",
  "hourglass full",
  "http",
  "https",
  "image",
  "image aspect ratio",
  "import contacts",
  "import export",
  "important devices",
  "inbox",
  "indeterminate check box",
  "info",
  "info outline",
  "input",
  "insert chart",
  "insert comment",
  "insert drive file",
  "insert emoticon",
  "insert invitation",
  "insert link",
  "insert photo",
  "invert colors",
  "invert colors off",
  "iso",
  "keyboard",
  "keyboard arrow down",
  "keyboard arrow left",
  "keyboard arrow right",
  "keyboard arrow up",
  "keyboard backspace",
  "keyboard capslock",
  "keyboard hide",
  "keyboard return",
  "keyboard tab",
  "keyboard voice",
  "kitchen",
  "label",
  "label outline",
  "landscape",
  "language",
  "laptop",
  "laptop chromebook",
  "laptop mac",
  "laptop windows",
  "launch",
  "layers",
  "layers clear",
  "leak add",
  "leak remove",
  "lens",
  "library add",
  "library books",
  "library music",
  "lightbulb outline",
  "line style",
  "line weight",
  "linear scale",
  "link",
  "linked camera",
  "list",
  "live help",
  "live tv",
  "local activity",
  "local airport",
  "local atm",
  "local bar",
  "local cafe",
  "local car wash",
  "local convenience store",
  "local dining",
  "local drink",
  "local florist",
  "local gas station",
  "local grocery store",
  "local hospital",
  "local hotel",
  "local laundry service",
  "local library",
  "local mall",
  "local movies",
  "local offer",
  "local parking",
  "local pharmacy",
  "local phone",
  "local pizza",
  "local play",
  "local post office",
  "local printshop",
  "local see",
  "local shipping",
  "local taxi",
  "location city",
  "location disabled",
  "location off",
  "location on",
  "location searching",
  "lock",
  "lock open",
  "lock outline",
  "looks",
  "looks 3",
  "looks 4",
  "looks 5",
  "looks 6",
  "looks one",
  "looks two",
  "loop",
  "loupe",
  "loyalty",
  "mail",
  "mail outline",
  "map",
  "markunread",
  "markunread mailbox",
  "memory",
  "menu",
  "merge type",
  "message",
  "mic",
  "mic none",
  "mic off",
  "mms",
  "mode comment",
  "mode edit",
  "money off",
  "monochrome photos",
  "mood",
  "mood bad",
  "more",
  "more horiz",
  "more vert",
  "motorcycle",
  "mouse",
  "move to inbox",
  "movie",
  "movie creation",
  "movie filter",
  "music note",
  "music video",
  "my location",
  "nature",
  "nature people",
  "navigate before",
  "navigate next",
  "navigation",
  "near me",
  "network cell",
  "network check",
  "network locked",
  "network wifi",
  "new releases",
  "next week",
  "nfc",
  "no encryption",
  "no sim",
  "not interested",
  "note add",
  "notifications",
  "notifications active",
  "notifications none",
  "notifications off",
  "notifications paused",
  "offline pin",
  "ondemand video",
  "opacity",
  "open in browser",
  "open in new",
  "open with",
  "pages",
  "pageview",
  "palette",
  "pan tool",
  "panorama",
  "panorama fish eye",
  "panorama horizontal",
  "panorama vertical",
  "panorama wide angle",
  "party mode",
  "pause",
  "pause circle filled",
  "pause circle outline",
  "payment",
  "people",
  "people outline",
  "perm camera mic",
  "perm contact calendar",
  "perm data setting",
  "perm device information",
  "perm identity",
  "perm media",
  "perm phone msg",
  "perm scan wifi",
  "person",
  "person add",
  "person outline",
  "person pin",
  "person pin circle",
  "personal video",
  "pets",
  "phone",
  "phone android",
  "phone bluetooth speaker",
  "phone forwarded",
  "phone in talk",
  "phone iphone",
  "phone locked",
  "phone missed",
  "phone paused",
  "phonelink",
  "phonelink erase",
  "phonelink lock",
  "phonelink off",
  "phonelink ring",
  "phonelink setup",
  "photo",
  "photo album",
  "photo camera",
  "photo filter",
  "photo library",
  "photo size select actual",
  "photo size select large",
  "photo size select small",
  "picture as pdf",
  "picture in picture",
  "picture in picture alt",
  "pin drop",
  "place",
  "play arrow",
  "play circle filled",
  "play circle outline",
  "play for work",
  "playlist add",
  "playlist add check",
  "playlist play",
  "plus one",
  "poll",
  "polymer",
  "pool",
  "portable wifi off",
  "portrait",
  "power",
  "power input",
  "power settings new",
  "pregnant woman",
  "present to all",
  "print",
  "public",
  "publish",
  "query builder",
  "question answer",
  "queue",
  "queue music",
  "queue play next",
  "radio",
  "radio button checked",
  "radio button unchecked",
  "rate review",
  "receipt",
  "recent actors",
  "record voice over",
  "redeem",
  "redo",
  "refresh",
  "remove",
  "remove circle",
  "remove circle outline",
  "remove from queue",
  "remove red eye",
  "reorder",
  "repeat",
  "repeat one",
  "replay",
  "replay 10",
  "replay 30",
  "replay 5",
  "reply",
  "reply all",
  "report",
  "report problem",
  "restaurant menu",
  "restore",
  "ring volume",
  "room",
  "room service",
  "rotate 90 degrees ccw",
  "rotate left",
  "rotate right",
  "rounded corner",
  "router",
  "rowing",
  "rv hookup",
  "satellite",
  "save",
  "scanner",
  "schedule",
  "school",
  "screen lock landscape",
  "screen lock portrait",
  "screen lock rotation",
  "screen rotation",
  "screen share",
  "sd card",
  "sd storage",
  "search",
  "security",
  "select all",
  "send",
  "settings",
  "settings applications",
  "settings backup restore",
  "settings bluetooth",
  "settings brightness",
  "settings cell",
  "settings ethernet",
  "settings input antenna",
  "settings input component",
  "settings input composite",
  "settings input hdmi",
  "settings input svideo",
  "settings overscan",
  "settings phone",
  "settings power",
  "settings remote",
  "settings system daydream",
  "settings voice",
  "share",
  "shop",
  "shop two",
  "shopping basket",
  "shopping cart",
  "short text",
  "shuffle",
  "signal cellular 4 bar",
  "signal cellular connected no internet 4 bar",
  "signal cellular no sim",
  "signal cellular null",
  "signal cellular off",
  "signal wifi 4 bar",
  "signal wifi 4 bar lock",
  "signal wifi off",
  "sim card",
  "sim card alert",
  "skip next",
  "skip previous",
  "slideshow",
  "slow motion video",
  "smartphone",
  "smoke free",
  "smoking rooms",
  "sms",
  "sms failed",
  "snooze",
  "sort",
  "sort by alpha",
  "spa",
  "space bar",
  "speaker",
  "speaker group",
  "speaker notes",
  "speaker phone",
  "spellcheck",
  "star",
  "star border",
  "star half",
  "star rate",
  "stars",
  "stay current landscape",
  "stay current portrait",
  "stay primary landscape",
  "stay primary portrait",
  "stop",
  "stop screen share",
  "storage",
  "store",
  "store mall directory",
  "straighten",
  "strikethrough s",
  "style",
  "subdirectory arrow left",
  "subdirectory arrow right",
  "subject",
  "subscriptions",
  "subtitles",
  "supervisor account",
  "surround sound",
  "swap calls",
  "swap horiz",
  "swap vert",
  "swap vertical circle",
  "switch camera",
  "switch video",
  "sync",
  "sync disabled",
  "sync problem",
  "system update",
  "system update alt",
  "tab",
  "tab unselected",
  "tablet",
  "tablet android",
  "tablet mac",
  "tag faces",
  "tap and play",
  "terrain",
  "text fields",
  "text format",
  "textsms",
  "texture",
  "theaters",
  "thumb down",
  "thumb up",
  "thumbs up down",
  "time to leave",
  "timelapse",
  "timeline",
  "timer",
  "timer 10",
  "timer 3",
  "timer off",
  "toc",
  "today",
  "toll",
  "tonality",
  "touch app",
  "toys",
  "track changes",
  "traffic",
  "transform",
  "translate",
  "trending down",
  "trending flat",
  "trending up",
  "tune",
  "turned in",
  "turned in not",
  "tv",
  "unarchive",
  "undo",
  "update",
  "usb",
  "verified user",
  "vertical align bottom",
  "vertical align center",
  "vertical align top",
  "vibration",
  "video library",
  "videocam",
  "videocam off",
  "videogame asset",
  "view agenda",
  "view array",
  "view carousel",
  "view column",
  "view comfy",
  "view compact",
  "view day",
  "view headline",
  "view list",
  "view module",
  "view quilt",
  "view stream",
  "view week",
  "vignette",
  "visibility",
  "visibility off",
  "voice chat",
  "voicemail",
  "volume down",
  "volume mute",
  "volume off",
  "volume up",
  "vpn key",
  "vpn lock",
  "wallpaper",
  "warning",
  "watch",
  "watch later",
  "wb auto",
  "wb cloudy",
  "wb incandescent",
  "wb iridescent",
  "wb sunny",
  "wc",
  "web",
  "web asset",
  "weekend",
  "whatshot",
  "widgets",
  "wifi",
  "wifi lock",
  "wifi tethering",
  "work",
  "wrap text",
  "youtube searched for",
  "zoom in",
  "zoom out",
  "zoom out map"
];

export const LigatureFieldNode = {
  field: {
    type: '$library/Fields/Atoms/LigatureField',
    inputs: ['form', 'label', 'value', 'options'],
    outputs: ['value']
  },
  state: {
    field$options: ligatures
  }
};
