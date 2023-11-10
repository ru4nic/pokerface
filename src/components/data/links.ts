interface Links {
  downloads: { repertoire: string; bytRider: string; techRider: string };
  sections: {
    about: string;
    video: string;
    features: string;
    forClients: string;
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
    repertoire: "/Pokerface_songs.pdf",
    bytRider: "/Pokerface_Bytovoi_Rider.pdf",
    techRider: "/Pokerface_Tech_Rider.pdf",
  },
  sections: {
    about: "about",
    video: "video",
    features: "features",
    forClients: "for_clients",
  },
  socials: {
    vk: "https://vk.com/pokerfacecoverband",
    youtube: "https://www.youtube.com/@pokerfacecoverband",
    telegram: "https://t.me/pokerfacecoverband",
    instagram: "https://www.instagram.com/pokerfacecoverband/",
    whatsapp: "https://api.whatsapp.com/send?phone=79264610236",
    phone: "tel:+79264610236",
  },
};
export default links;
