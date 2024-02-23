import links from '../../data/links';

interface iScrollLinkSettings {
  spy: boolean;
  smooth: boolean;
  offset: number;
  duration: number;
}

const scrollLinkSettings: iScrollLinkSettings = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 700,
};

interface FooterColumnData {
  header: string;
  items: { name: string; href: string }[];
}
const { about, portfolio, features, forClients } = links.sections;
const footerColumnData: FooterColumnData[] = [
  {
    header: 'Разделы',
    items: [
      { name: about.name, href: about.href },
      { name: portfolio.name, href: portfolio.href },
      { name: features.name, href: features.href },
      { name: forClients.name, href: forClients.href },
    ],
  },
  {
    header: 'Скачать',
    items: [
      {
        name: 'Репертуар',
        href: links.downloads.repertoire,
      },
      {
        name: 'Бытовой райдер',
        href: links.downloads.bytRider,
      },
      {
        name: 'Технический райдер',
        href: links.downloads.techRider,
      },
    ],
  },
  {
    header: 'Партнеры',
    items: [
      { name: 'Recastman studio', href: 'https://vk.com/recastman_studio' },
      {
        name: 'Svetlana Samoletova',
        href: 'https://ru4nic.github.io/s_samoletova/',
      },
    ],
  },
];

export default footerColumnData;
export { scrollLinkSettings };
