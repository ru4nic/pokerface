import links from "../../data/links";

interface FooterColumnData {
  header: string;
  items: { name: string; link: string }[];
}

const footerColumnData: FooterColumnData[] = [
  {
    header: "Разделы",
    items: [
      { name: "О группе", link: links.sections.about },
      { name: "Видео", link: links.sections.video },
      { name: "Приемущства", link: links.sections.features },
      { name: "Заказчикам", link: links.sections.forClients },
    ],
  },
  {
    header: "Скачать",
    items: [
      {
        name: "Репертуар",
        link: links.downloads.repertoire,
      },
      {
        name: "Бытовой райдер",
        link: links.downloads.bytRider,
      },
      {
        name: "Технический райдер",
        link: links.downloads.techRider,
      },
    ],
  },
  {
    header: "Партнеры",
    items: [
      { name: "Recastman studio", link: "https://vk.com/recastman_studio" },
      { name: "Svetlana Samoletova", link: "https://vk.com/s_samoletova" },
    ],
  },
];

export default footerColumnData;
