import './Services.scss';
import Section from './Section';
import Container from './Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import serviceImgOne from '../../images/IMG_8152_min.jpg';
import serviceImgTwo from '../../images/IMG_E0852_.jpg';

const cards = [
  {
    id: 1,
    title: 'Выступление группы под ключ',
    services: [
      'Бронирование коллектива на весь день',
      'Длительность выступления 90 минут',
      'Привезем свое звуковое оборудование',
      'Выполнение организатором бытового райдера',
    ],
    img: serviceImgTwo,
    alt: 'pokerface red',
    price: '115 000',
    riders: [{ type: 'Бытовой райдер', src: '/Pokerface_Bytovoi_Rider.pdf' }],
  },
  {
    id: 2,
    title: 'Выступление группы без звукового оборудования',
    services: [
      'Бронирование коллектива на весь день',
      'Длительность выступления 90 минут',
      'Выполнение организатором бытового и технического райдеров',
    ],
    img: serviceImgOne,
    alt: 'pokerface black',
    price: '100 000',
    riders: [
      {
        type: 'Бытовой райдер',
        src: '/Pokerface_Bytovoi_Rider.pdf',
      },
      {
        type: 'Технический райдер',
        src: '/Pokerface_Tech_Rider.pdf',
      },
    ],
  },
];
// console.log(
//   cards.map((card) => {
//     card.riders.map((rider) => {
//       rider.src;
//     });
//   })
// );
const styles = {
  textStyle: {
    '& .MuiTypography-root': {
      fontFamily: 'IbmLight',
    },
  },
  cardActions: {
    '&.MuiCardActions-root': {
      padding: '16px',
    },
  },
  title: {
    textAlign: 'center',
  },
  priceStyle: {
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontSize: '1.5rem',
    color: '#d32f2f',
  },
  iconColor: 'error',
};
const Services = () => {
  const ama = useMediaQuery('(max-width:450px)');
  return (
    <Section addClass="services" id="prices">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Цены
        </motion.h2>
        <motion.p
          className="paragraph"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Москва / МО
        </motion.p>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {cards.map((card) => {
            return (
              <Card
                sx={ama ? { maxWidth: 280 } : { maxWidth: 470 }}
                key={card.id}
              >
                <CardMedia
                  component="img"
                  alt={card.alt}
                  sx={
                    ama
                      ? { height: 170, objectPosition: 'top' }
                      : { height: 240, objectPosition: 'top' }
                  }
                  image={card.img}
                />
                <CardContent>
                  <h3 style={styles.title}>{card.title}</h3>
                  <List dense>
                    {card.services.map((service) => {
                      return (
                        <ListItem key={service}>
                          <ListItemIcon>
                            <CheckIcon color={styles.iconColor} />
                          </ListItemIcon>
                          <ListItemText
                            primary={service}
                            sx={styles.textStyle}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
                <h3 style={styles.priceStyle}>{card.price} &#8381;</h3>
                <CardActions sx={styles.cardActions} disableSpacing>
                  {card.riders.map((rider, i) => {
                    return (
                      <Button
                        key={i}
                        color="inherit"
                        variant="text"
                        // endIcon={<DownloadIcon />}
                        size="small"
                        href={rider.src}
                        download={rider.src.replace('/', '')}
                      >
                        {rider.type}
                      </Button>
                    );
                  })}
                </CardActions>
              </Card>
            );
          })}
        </Box>

        {/* <Box
          className="raider-wrapper raiders"
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingTop: '2rem',
            gap: '2rem',
          }}
          >
          <TiltParalax>
          <Button
            className="raider-button"
            variant="contained"
            endIcon={<DownloadIcon />}
            size="large"
            color="error"
            href="/Pokerface_Bytovoi_Rider.pdf"
            download="Pokerface_Bytovoi_Rider.pdf"
            >
            Бытовой райдер
          </Button>
          </TiltParalax>
          <TiltParalax>
          <Button
            className="raider-button"
            variant="contained"
            endIcon={<DownloadIcon />}
            color="error"
            size="large"
            href="/Pokerface_Tech_Rider.pdf"
            download="Pokerface_Tech_Rider.pdf"
            >
            Технический райдер
            </Button>
            </TiltParalax>
        </Box> */}
      </Container>
    </Section>
  );
};

export default Services;
