export const CONTACT_ITEMS: Partial<Queries.ContentfulContactItem>[] = [
  {
    title: "Phone",
    iconName: "HiPhoneArrowUpRight",
    url: "tel:+972521236748",
    color: "#00a8e8",
    tooltip: "Give me a call - 0521236748",
  },
  {
    title: "WhatsApp",
    iconName: "SiWhatsapp",
    url: "https://api.whatsapp.com/send?phone=972521236748",
    color: "#25d366",
  },
  {
    title: "Telegram",
    iconName: "SiTelegram",
    url: "https://t.me/mytelegram",
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
    url: "my@email.com",
    color: "#d93025",
    copyToClipboard: true,
    tooltip: "Copy my@email.com to your clipboard",
  },
  {
    title: "CV File",
    iconName: "HiDocumentArrowDown",
    file: {
      title: "John Doe - CV",
      url: "https://assets.example.net/myCV.pdf",
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
  },
  {
    title: "HTML",
    iconName: "SiHtml5",
    color: "#f84200",
  },
  {
    title: "CSS",
    iconName: "SiCss3",
    color: "#0074be",
  },
  {
    title: "Python",
    iconName: "SiPython",
    color: "#244d6f",
  },
  {
    title: "Ruby",
    iconName: "SiRuby",
    color: "#df0000",
  },
  {
    title: "Ruby on Rails",
    iconName: "SiRubyonrails",
    color: "#df0000",
  },
  {
    title: "React.js",
    iconName: "SiReact",
    color: "#61dafb",
  },
  {
    title: "Angular",
    iconName: "SiAngular",
    color: "#dd0031",
  },
  {
    title: "Apollo GraphQL",
    iconName: "SiApollographql",
    color: "#3f20ba",
  },
  {
    title: "Redux",
    iconName: "SiRedux",
    color: "#764abc",
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
  {
    title: "Google Cloud",
    iconName: "SiGooglecloud",
    color: "#4285f4",
  },
  {
    title: "Docker",
    iconName: "SiDocker",
    color: "#2496ed",
  },
  {
    title: "Bash",
    iconName: "SiGnubash",
    color: "#4eaa25",
  },
  {
    title: "Elasticsearch",
    iconName: "SiElasticsearch",
    color: "#005571",
  },
];

export const PORTFOLIO_ART = [
  String.raw`
  ooooooooo.     .oooooo.   ooooooooo.   ooooooooooooo oooooooooooo   .oooooo.   ooooo        ooooo   .oooooo.   
${"`"}888   ${"`"}Y88.  d8P'  ${"`"}Y8b  ${"`"}888   ${"`"}Y88. 8'   888   ${"`"}8 ${"`"}888'     ${"`"}8  d8P'  ${"`"}Y8b  ${"`"}888'        ${"`"}888'  d8P'  ${"`"}Y8b  
 888   .d88' 888      888  888   .d88'      888       888         888      888  888          888  888      888 
 888ooo88P'  888      888  888ooo88P'       888       888oooo8    888      888  888          888  888      888 
 888         888      888  888${"`"}88b.         888       888    "    888      888  888          888  888      888 
 888         ${"`"}88b    d88'  888  ${"`"}88b.       888       888         ${"`"}88b    d88'  888       o  888  ${"`"}88b    d88' 
o888o         ${"`"}Y8bood8P'  o888o  o888o     o888o     o888o         ${"`"}Y8bood8P'  o888ooooood8 o888o  ${"`"}Y8bood8P'`,
  String.raw`
     ___       ___       ___       ___       ___       ___       ___       ___       ___
    /\  \     /\  \     /\  \     /\  \     /\  \     /\  \     /\__\     /\  \     /\  \
   /::\  \   /::\  \   /::\  \    \:\  \   /::\  \   /::\  \   /:/  /    _\:\  \   /::\  \
  /::\:\__\ /:/\:\__\ /::\:\__\   /::\__\ /::\:\__\ /:/\:\__\ /:/__/    /\/::\__\ /:/\:\__\
  \/\::/  / \:\/:/  / \;:::/  /  /:/\/__/ \/\:\/__/ \:\/:/  / \:\  \    \::/\/__/ \:\/:/  /
     \/__/   \::/  /   |:\/__/   \/__/       \/__/   \::/  /   \:\__\    \:\__\    \::/  /
              \/__/     \|__|                         \/__/     \/__/     \/__/     \/__/  `,
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
