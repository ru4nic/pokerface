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
import fontFam from '../../../assets/fonts/source-sans-pro-v21-latin_cyrillic-regular.ttf';
import fontBold from '../../../assets/fonts/source-sans-pro-v21-latin_cyrillic-600.ttf';
import myImg from '../../../assets/images/PokerFace_logo_for_pdf.png';
import { ISong } from '../../../slices/songsSlice';

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
    padding: '20 60 80 60',
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
  logo: { width: '17%' },
  templateBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headRight: {
    textAlign: 'right',
    width: 300,
    fontSize: 12,
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
    margin: '30 0',
    letterSpacing: 3,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 600,
    letterSpacing: 2,
  },
  fontAuthor: {
    fontWeight: 600,
    fontSize: 14,
  },
  fontSong: {
    color: 'rgba(0,0,0,0.75)',
    fontSize: 14,
    fontWeight: 400,
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

type PdfSongsRenderProps = {
  ruSongs: ISong[];
  engSongs: ISong[];
};
// Create Document Component
const PdfSongsRender = ({ ruSongs, engSongs }: PdfSongsRenderProps) => {
  return (
    // <PDFViewer height={1000} width={1100}>
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
          <View style={{ width: '50%' }}>
            {ruSongs.map((song) => (
              <Text key={song.title}>
                <Text style={styles.fontAuthor}>{song.author}</Text>
                <Text style={styles.fontSong}>
                  {' '}
                  - {song.title}
                  {`\n`}
                </Text>
              </Text>
            ))}
          </View>
          <View style={{ width: '50%' }}>
            {engSongs.map((song) => (
              <Text key={song.title}>
                <Text style={styles.fontAuthor}>{song.author}</Text>
                <Text style={styles.fontSong}>
                  {' '}
                  - {song.title}
                  {`\n`}
                </Text>
              </Text>
            ))}
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
    // </PDFViewer>
  );
};

export default PdfSongsRender;
