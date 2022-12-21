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
