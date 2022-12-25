export const CONTACT_ITEMS: Partial<Queries.ContentfulContactItem>[] = [
  {
    title: "Phone",
    iconName: "HiPhoneArrowUpRight",
    url: "tel:+972528717475",
    color: "#00a8e8",
    tooltip: "Give me a call - 0528717475",
  },
  {
    title: "WhatsApp",
    iconName: "SiWhatsapp",
    url: "https://api.whatsapp.com/send?phone=972528717475",
    color: "#25d366",
  },
  {
    title: "Telegram",
    iconName: "SiTelegram",
    url: "https://t.me/deddy_xyz",
    color: "#0088cc",
  },
  {
    title: "LinkedIn",
    iconName: "SiLinkedin",
    url: "https://www.linkedin.com/in/davidavikasis/",
    color: "#0077b5",
    tooltip: "Check out my LinkedIn profile",
  },
  {
    title: "Email",
    iconName: "SiGmail",
    url: "david@appandbeyond.com",
    color: "#d93025",
    copyToClipboard: true,
    tooltip: "Copy david@appandbeyond.com to your clipboard",
  },
  {
    title: "CV File",
    iconName: "HiDocumentArrowDown",
    file: {
      title: "David Avikasis - CV",
      url: "https://assets.ctfassets.net/wh2ajes7f2qa/6fEJAVxRoNpSJAGltZ9FVD/34d80b2dc1fcaaa77390faeb1fc01955/DavidAvikasisCV.pdf",
    } as any,
    color: "#d93025",
    // download: true,
    tooltip: "Download my CV as a PDF file",
  },
];

export const STACK_ITEMS: Partial<Queries.ContentfulStackItem>[] = [
  {
    title: "Javascript",
    iconName: "SiJavascript",
    color: "#fcdc00",
    metadata: {
      tags: [
        { name: "javascript" } as any,
        { name: "js" },
        { name: "frontend" },
        { name: "backend" },
        { name: "scripts" },
        { name: "scripting" },
        { name: "programming" },
        { name: "language" },
        { name: "code" },
        { name: "coding" },
        { name: "node.js" },
        { name: "node" },
        { name: "ES6" },
        { name: "ECMAScript" },
      ],
    },
  },
  {
    title: "TypeScript",
    iconName: "SiTypescript",
    color: "#007ad3",
    // keywords: [
    //   "javascript",
    //   "typescript",
    //   "ts",
    //   "js",
    //   "frontend",
    //   "scripts",
    //   "scripting",
    //   "programming",
    //   "language",
    //   "code",
    //   "coding",
    //   "node.js",
    //   "node",
    //   "ES6",
    //   "ECMAScript",
    // ],
  },
  {
    title: "HTML",
    iconName: "SiHtml5",
    color: "#f84200",
    // keywords: [
    //   "frontend",
    //   "language",
    //   "code",
    //   "coding",
    //   "html",
    //   "html5",
    //   "www",
    //   "web",
    //   "markup",
    // ],
  },
  {
    title: "CSS",
    iconName: "SiCss3",
    color: "#0074be",
    // keywords: [
    //   "frontend",
    //   "language",
    //   "code",
    //   "coding",
    //   "html",
    //   "css",
    //   "css3",
    //   "www",
    //   "web",
    //   "style",
    //   "styling",
    // ],
  },
  {
    title: "Python",
    iconName: "SiPython",
    color: "#244d6f",
    // keywords: [
    //   "python",
    //   "backend",
    //   "scripts",
    //   "scripting",
    //   "programming",
    //   "language",
    //   "code",
    //   "coding",
    // ],
  },
  {
    title: "Ruby",
    iconName: "SiRuby",
    color: "#df0000",
    // keywords: [
    //   "ruby",
    //   "backend",
    //   "scripts",
    //   "scripting",
    //   "programming",
    //   "language",
    //   "code",
    //   "coding",
    //   "rails",
    //   "rubyonrails",
    // ],
  },
  {
    title: "Ruby on Rails",
    iconName: "SiRubyonrails",
    color: "#df0000",
    // keywords: [
    //   "ruby",
    //   "rails",
    //   "backend",
    //   "scripts",
    //   "scripting",
    //   "rails",
    //   "rubyonrails",
    //   "framework",
    //   "activerecord",
    //   "api",
    //   "orm",
    //   "MVC",
    //   "Model-View-Controller",
    // ],
  },
  {
    title: "React.js",
    iconName: "SiReact",
    color: "#61dafb",
    // keywords: [
    //   "react.js",
    //   "react",
    //   "JavaScript",
    //   "frontend",
    //   "Web",
    //   "single page application",
    //   "spa",
    //   "Virtual DOM",
    //   "Components",
    //   "JSX",
    //   "React Native",
    //   "Redux",
    //   "Flux",
    //   "Webpack",
    //   "node.js",
    //   "ES6",
    //   "Babel",
    //   "Higher-order components",
    //   "HOC",
    //   "framework",
    // ],
  },
  {
    title: "Angular",
    iconName: "SiAngular",
    color: "#dd0031",
    // keywords: [
    //   "JavaScript",
    //   "TypeScript",
    //   "Dependency injection",
    //   "RxJS",
    //   "Observables",
    //   "frontend",
    //   "Web",
    //   "single page application",
    //   "spa",
    //   "Shadow DOM",
    //   "Components",
    //   "Webpack",
    //   "node.js",
    //   "ES6",
    //   "framework",
    // ],
  },
  {
    title: "Apollo GraphQL",
    iconName: "SiApollographql",
    color: "#3f20ba",
    // keywords: [
    //   "JavaScript",
    //   "GraphQL",
    //   "React",
    //   "React Native",
    //   "react.js",
    //   "frontend",
    //   "backend",
    //   "api",
    //   "Web",
    // ],
  },
  {
    title: "Redux",
    iconName: "SiRedux",
    color: "#764abc",
    // keywords: [
    //   "JavaScript",
    //   "React",
    //   "react.js",
    //   "frontend",
    //   "api",
    //   "Web",
    //   "store",
    //   "reducer",
    //   "state management",
    //   "middleware",
    //   "thunk",
    //   "RxJS",
    //   "Observables",
    //   "single source of truth",
    //   "flux",
    // ],
  },
  {
    title: "Gatsby",
    iconName: "SiGatsby",
    color: "#7026b8",
  },
  {
    title: "Tailwind CSS",
    iconName: "SiTailwindcss",
    color: "#06b6d4",
  },
  {
    title: "MySQL",
    iconName: "SiMysql",
    color: "#00758f",
  },
  {
    title: "PostgreSQL",
    iconName: "SiPostgresql",
    color: "#336791",
  },
  {
    title: "MongoDB",
    iconName: "SiMongodb",
    color: "#47a248",
  },
  {
    title: "Redis",
    iconName: "SiRedis",
    color: "#d82c20",
  },
  {
    title: "GraphQL",
    iconName: "SiGraphql",
    color: "#e535ab",
  },
  {
    title: "AWS",
    iconName: "SiAmazonaws",
    color: "#ff9600",
  },
  {
    title: "DigitalOcean",
    iconName: "SiDigitalocean",
    color: "#0080ff",
  },
  {
    title: "Microsoft Azure",
    iconName: "SiMicrosoftazure",
    color: "#0089d6",
  },
];

// const PORTFOLIO_ITEMS: Partial<ContentfulPortfolioItem>[] = [
//   {
//     title: "AORIKA - אֵאוֹרִיקָה",
//     subtitle: "Showcase of a local woodworking workshop",
//     liveProjectUrl: "https://aorika.co.il",
//     // repositoryUrl: "https://github.com/david-a/aorika",
//     // repositoryIconName: "SiGithub",
//     previewMediaFile: "https://www.youtube.com/embed/dghs8mvTueQ",
//     description: `AORIKA is a local woodworking workshop, offering various wood workshops and products, for small and medium-sized groups. AORIKA's website showcases the range of workshops and services, a gallery of past workshops, and encourages the user to contact the owner.`,
//     buzzwords: [
//       "Angular 13",
//       "Scully.io (Static Angular)",
//       "Javascript",
//       "TypeScript",
//       "SCSS",
//       "Google Analytics",
//     ],
//     // keywords: [
//     //   "javascript",
//     //   "typescript",
//     //   "js",
//     //   "ts",
//     //   "frontend",
//     //   "angular",
//     //   "angular 13",
//     //   "scully.io",
//     //   "scss",
//     //   "google analytics",
//     // ],
//   },
//   {
//     title: "Headstream",
//     subtitle: "Smart eCommerce Portfolio Management (EPM)",
//     description: `Headstream is an eCommerce Portfolio Management (EPM), which optimizes inventory management and business decisions. We do this by employing stock market trading methods which are based on math, statistics, and advanced computer science algorithms, which allow us to provide real-time inventory insights and enable purchasing automation.`,
//     previewMediaFile: "headstream.png",
//     buzzwords: [
//       "Angular 13",
//       "Scully.io (Static Angular)",
//       "Javascript",
//       "TypeScript",
//       "SCSS",
//       "Google Analytics",
//     ],
//     // keywords: [
//     //   "javascript",
//     //   "typescript",
//     //   "js",
//     //   "ts",
//     //   "frontend",
//     //   "angular",
//     //   "angular 13",
//     //   "scully.io",
//     //   "scss",
//     //   "google analytics",
//     // ],
//   },
//   {
//     title: "Cake DIY - עוּגָה בְּהַרְכָּבָה",
//     subtitle: "Customize your cake",
//     liveProjectUrl: "https://david-a.github.io/kinamon",
//     repositoryUrl: "https://github.com/david-a/kinamon",
//     repositoryIconName: "SiGithub",
//     previewMediaFile: "cakesDIYScreenCapture.mov",
//     description: `Cake DIY is a weekend project, an MVP, which allow cakes customization and orders from a boutique bakery named Or & Kinamon. It is both desktop and mobile ready and easily supports adding more ingredients.`,
//     buzzwords: [
//       "Vanilla JS",
//       "jQuery",
//       "CoffeeScript",
//       "Koala",
//       "FormSpree.io",
//       "SVG manipulation",
//       "Google Analytics",
//     ],
//     // keywords: [
//     //   "javascript",
//     //   "typescript",
//     //   "js",
//     //   "ts",
//     //   "frontend",
//     //   "angular",
//     //   "angular 13",
//     //   "scully.io",
//     //   "scss",
//     //   "google analytics",
//     // ],
//   },
// ];

export const PORTFOLIO_ART = [
  String.raw`
     ___       ___       ___       ___       ___       ___       ___       ___       ___
    /\  \     /\  \     /\  \     /\  \     /\  \     /\  \     /\__\     /\  \     /\  \
   /::\  \   /::\  \   /::\  \    \:\  \   /::\  \   /::\  \   /:/  /    _\:\  \   /::\  \
  /::\:\__\ /:/\:\__\ /::\:\__\   /::\__\ /::\:\__\ /:/\:\__\ /:/__/    /\/::\__\ /:/\:\__\
  \/\::/  / \:\/:/  / \;:::/  /  /:/\/__/ \/\:\/__/ \:\/:/  / \:\  \    \::/\/__/ \:\/:/  /
     \/__/   \::/  /   |:\/__/   \/__/       \/__/   \::/  /   \:\__\    \:\__\    \::/  /
              \/__/     \|__|                         \/__/     \/__/     \/__/     \/__/  `,
  String.raw`
  ooooooooo.     .oooooo.   ooooooooo.   ooooooooooooo oooooooooooo   .oooooo.   ooooo        ooooo   .oooooo.   
${"`"}888   ${"`"}Y88.  d8P'  ${"`"}Y8b  ${"`"}888   ${"`"}Y88. 8'   888   ${"`"}8 ${"`"}888'     ${"`"}8  d8P'  ${"`"}Y8b  ${"`"}888'        ${"`"}888'  d8P'  ${"`"}Y8b  
 888   .d88' 888      888  888   .d88'      888       888         888      888  888          888  888      888 
 888ooo88P'  888      888  888ooo88P'       888       888oooo8    888      888  888          888  888      888 
 888         888      888  888${"`"}88b.         888       888    "    888      888  888          888  888      888 
 888         ${"`"}88b    d88'  888  ${"`"}88b.       888       888         ${"`"}88b    d88'  888       o  888  ${"`"}88b    d88' 
o888o         ${"`"}Y8bood8P'  o888o  o888o     o888o     o888o         ${"`"}Y8bood8P'  o888ooooood8 o888o  ${"`"}Y8bood8P'`,
  String.raw`                                
,------.  ,-----. ,------. ,--------.,------. ,-----. ,--.   ,--. ,-----.  
|  .--. ''  .-.  '|  .--. ''--.  .--'|  .---''  .-.  '|  |   |  |'  .-.  ' 
|  '--' ||  | |  ||  '--'.'   |  |   |  ${"`"}--, |  | |  ||  |   |  ||  | |  | 
|  | --' '  '-'  '|  |\  \    |  |   |  |${"`"}   '  '-'  '|  '--.|  |'  '-'  ' 
${"`"}--'      ${"`"}-----' ${"`"}--' '--'   ${"`"}--'   ${"`"}--'     ${"`"}-----' ${"`"}-----'${"`"}--' ${"`"}-----'`,
  String.raw`
__/\\\\\\\\\\\\\_________/\\\\\_________/\\\\\\\\\______/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\_______/\\\\\_______/\\\______________/\\\\\\\\\\\_______/\\\\\______        
 _\/\\\/////////\\\_____/\\\///\\\_____/\\\///////\\\___\///////\\\/////__\/\\\///////////______/\\\///\\\____\/\\\_____________\/////\\\///______/\\\///\\\____       
  _\/\\\_______\/\\\___/\\\/__\///\\\__\/\\\_____\/\\\_________\/\\\_______\/\\\_______________/\\\/__\///\\\__\/\\\_________________\/\\\_______/\\\/__\///\\\__      
   _\/\\\\\\\\\\\\\/___/\\\______\//\\\_\/\\\\\\\\\\\/__________\/\\\_______\/\\\\\\\\\\\______/\\\______\//\\\_\/\\\_________________\/\\\______/\\\______\//\\\_     
    _\/\\\/////////____\/\\\_______\/\\\_\/\\\//////\\\__________\/\\\_______\/\\\///////______\/\\\_______\/\\\_\/\\\_________________\/\\\_____\/\\\_______\/\\\_    
     _\/\\\_____________\//\\\______/\\\__\/\\\____\//\\\_________\/\\\_______\/\\\_____________\//\\\______/\\\__\/\\\_________________\/\\\_____\//\\\______/\\\__   
      _\/\\\______________\///\\\__/\\\____\/\\\_____\//\\\________\/\\\_______\/\\\______________\///\\\__/\\\____\/\\\_________________\/\\\______\///\\\__/\\\____  
       _\/\\\________________\///\\\\\/_____\/\\\______\//\\\_______\/\\\_______\/\\\________________\///\\\\\/_____\/\\\\\\\\\\\\\\\__/\\\\\\\\\\\____\///\\\\\/_____ 
        _\///___________________\/////_______\///________\///________\///________\///___________________\/////_______\///////////////__\///////////_______\/////_______`,
  String.raw`
   ________  ________  ________  _________  ________ ________  ___       ___  ________
  |\   __  \|\   __  \|\   __  \|\___   ___\\  _____\\   __  \|\  \     |\  \|\   __  \
   \ \  \|\  \ \  \|\  \ \  \|\  \|___ \  \_\ \  \__/\ \  \|\  \ \  \    \ \  \ \  \|\  \
    \ \   ____\ \  \\\  \ \   _  _\   \ \  \ \ \   __\\ \  \\\  \ \  \    \ \  \ \  \\\  \
     \ \  \___|\ \  \\\  \ \  \\  \|   \ \  \ \ \  \_| \ \  \\\  \ \  \____\ \  \ \  \\\  \
      \ \__\    \ \_______\ \__\\ _\    \ \__\ \ \__\   \ \_______\ \_______\ \__\ \_______\
       \|__|     \|_______|\|__|\|__|    \|__|  \|__|    \|_______|\|_______|\|__|\|_______|`,
];
