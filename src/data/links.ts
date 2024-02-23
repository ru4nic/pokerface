interface Links {
  downloads: { repertoire: string; bytRider: string; techRider: string };
  sections: {
    about: { name: string; href: string };
    portfolio: { name: string; href: string };
    features: { name: string; href: string };
    forClients: { name: string; href: string };
  };
  socials: {
    vk: string;
    youtube: string;
    telegram: string;
    instagram: string;
    whatsapp: string;
    phone: string;
  };
}

const links: Links = {
  downloads: {
    repertoire: '/Pokerface_songs.pdf',
    bytRider: '/Pokerface_Bytovoi_Rider.pdf',
    techRider: '/Pokerface_Tech_Rider.pdf',
  },
  sections: {
    about: { name: 'О группе', href: 'about' },
    portfolio: { name: 'Портфолио', href: 'portfolio' },
    features: { name: 'Приемущества', href: 'features' },
    forClients: { name: 'Заказчикам', href: 'for_clients' },
  },
  socials: {
    vk: 'https://vk.com/pokerfacecoverband',
    youtube: 'https://www.youtube.com/@pokerfacecoverband',
    telegram: 'https://t.me/pokerfacecoverband',
    instagram: 'https://www.instagram.com/pokerfacecoverband/',
    whatsapp: 'https://api.whatsapp.com/send?phone=79264610236',
    phone: 'tel:+79264610236',
  },
};
export default links;
