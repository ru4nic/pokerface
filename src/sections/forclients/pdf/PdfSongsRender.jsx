import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  // PDFViewer,
  Image,
  Link,
  Font,
} from '@react-pdf/renderer';
import { memo } from 'react';
import fontFam from '../../fonts/source-sans-pro-v21-latin_cyrillic-regular.ttf';
import fontBold from '../../fonts/source-sans-pro-v21-latin_cyrillic-600.ttf';
import myImg from '../../images/PokerFace_logo_for_pdf.png';
Font.register({
  family: 'boty',
  fonts: [
    { src: fontFam, fontWeight: 400 },
    { src: fontBold, fontWeight: 600 },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    color: 'rgba(0,0,0,0.87)',
    fontFamily: 'boty',
    fontWeight: 400,
    padding: '30 30 60 30',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  templateHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { width: '20%' },
  templateBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // gap: 200,
  },
  headRight: {
    textAlign: 'right',
    width: 300,
    fontSize: 13,
  },
  phone: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.87)',
    fontWeight: 600,
  },
  titleFirst: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 600,
    marginBottom: 30,
    letterSpacing: 3,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 600,
    letterSpacing: 2,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  // songList: {
  //   textAlign: 'center',
  // },
  fontAuthor: {
    fontWeight: 600,
  },
  fontSong: {
    color: 'rgba(0,0,0,0.87)',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#777',
  },
});

// Create Document Component
const PdfSongsRender = ({ ruSongs, engSongs }) => (
  // <PDFViewer showToolbar height={800} width="99%">
  <Document pageMode="fullScreen">
    <Page size="A4" style={styles.page} dpi={100} wrap>
      <View style={styles.templateHead} fixed>
        <Image style={styles.logo} src={myImg} />
        <View style={styles.headRight} fixed>
          <Link src="https://pokerfaceband.ru">https://pokerfaceband.ru</Link>
          <Link src="https://www.instagram.com/pokerfacecoverband">
            https://www.instagram.com/pokerfacecoverband
          </Link>
          <Link src="https://vk.com/pokerfacecoverband">
            https://vk.com/pokerfacecoverband
          </Link>
          <Link src="https://t.me/pokerfacecoverband">
            https://t.me/pokerfacecoverband
          </Link>
          <Link src="tel:+79264610236" style={styles.phone}>
            +7 (926)-461-02-36
          </Link>
        </View>
      </View>
      <Text style={styles.titleFirst} break fixed>
        Репертуар
      </Text>
      <View style={styles.templateBody}>
        <View style={{ width: '50%' }} fixed>
          <Text style={styles.title}>Отечественные</Text>
        </View>
        <View style={{ width: '50%' }}>
          {ruSongs.map((song) => {
            return (
              <Text key={song.song}>
                <Text style={styles.fontAuthor}>{song.author}</Text>
                <Text style={styles.fontSong}>
                  {' '}
                  - {song.song}
                  {`\n`}
                </Text>
              </Text>
            );
          })}
        </View>
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    <Page size="A4" style={styles.page} dpi={100} wrap>
      <View style={styles.templateHead} fixed>
        <Image style={styles.logo} src={myImg} />
        <View style={styles.headRight} fixed>
          <Link src="https://pokerfaceband.ru">https://pokerfaceband.ru</Link>
          <Link src="https://www.instagram.com/pokerfacecoverband">
            https://www.instagram.com/pokerfacecoverband
          </Link>
          <Link src="https://vk.com/pokerfacecoverband">
            https://vk.com/pokerfacecoverband
          </Link>
          <Link src="https://t.me/pokerfacecoverband">
            https://t.me/pokerfacecoverband
          </Link>
          <Link src="tel:+79264610236" style={styles.phone}>
            +7 (926)-461-02-36
          </Link>
        </View>
      </View>
      <Text style={styles.titleFirst} break fixed>
        Репертуар
      </Text>
      <View style={styles.templateBody}>
        <View style={{ width: '50%' }} fixed>
          <Text style={styles.title}>Зарубежные</Text>
        </View>
        <View style={{ width: '50%' }}>
          {engSongs.map((song) => {
            return (
              <Text key={song.song}>
                <Text style={styles.fontAuthor}>{song.author}</Text>
                <Text style={styles.fontSong}>
                  {' '}
                  - {song.song}
                  {`\n`}
                </Text>
              </Text>
            );
          })}
        </View>
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
  // </PDFViewer>
);

export default memo(PdfSongsRender);
