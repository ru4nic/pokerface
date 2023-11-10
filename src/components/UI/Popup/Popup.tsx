import { useState, memo, SyntheticEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { clearCart, removeSong } from "../../../slices/songSlicer";
import { Song as typeSong } from "../../../slices/songSlicer";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Tooltip from "@mui/material/Tooltip";
import DialogTitle from "@mui/material/DialogTitle";

import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import Box from "@mui/material/Box";
import CartIcon from "../CartIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Author } from "../../sections/Repertoire/Song";
import { redTheme } from "../../base_styles/Vars";
import styled from "styled-components";
import { PlayButton, SongName, Length } from "../../sections/Repertoire/Song";
import links from "../../data/links";

const { socials } = links;

const Titles = styled.ul`
  font-size: 0.9rem;
  padding-bottom: 0.3rem;
  color: #777;
  letter-spacing: -1px;
`;
const TitleSong = styled.span`
  padding-left: 5rem;
`;
const TrackItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.hidden {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
`;

const Song = styled(SongName)`
  /* padding-right: 2rem; */
`;

const DeleteButton = styled(PlayButton)`
  margin: 0 0 0 auto;
  min-width: min-content;
  color: ${redTheme};
`;
const SetListLength = styled(Length)`
  margin: 0;
`;
const Total = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-template-areas:
    "header header"
    "songs length";
  width: fit-content;
  margin: 2em auto;
  font-size: 1em;
  font-family: RobotoRegular;
  line-height: 1.7em;
  font-weight: 400;
`;
const TitleSum = styled.div`
  grid-area: header;
  text-align: center;

  font-size: 1rem;
`;
const SumSongsText = styled.div`
  grid-area: songs;
  text-align: center;
  font-size: 1rem;
`;
const SumLengthText = styled.div`
  grid-area: length;
  text-align: center;
  font-size: 1rem;
`;
const Count = styled.span<{ $totalTime?: string }>`
  background-color: ${(props) =>
    props.$totalTime && props.$totalTime > "90.00"
      ? `${redTheme}15`
      : "#12851215"};
  border: ${(props) =>
    props.$totalTime && props.$totalTime > "90.00"
      ? `1px solid ${redTheme}40`
      : `1px solid #12851250`};
  color: ${(props) =>
    props.$totalTime && props.$totalTime > "90.00" ? `${redTheme}` : "#128512"};
  padding: 0 0.2em;
  border-radius: 6px;
  font-family: IbmRegular;
  font-weight: 400;
`;
const Conditions = styled.p`
  margin: 0 auto;
  padding: 0;
  font-size: 0.85em;
`;
const TextCopy = styled.p`
  margin: 0;
`;
const TextChecked = styled.span`
  background-color: #00000010;

  border: 1px solid #00000020;
  border-radius: 6px;
  padding: 0 0.2em;
  white-space: nowrap;
`;
declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    whatsapp: true;
  }
}
const Popup = () => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const songsInCart = useSelector((state: RootState) => state.addSong.value);
  const dispatch = useDispatch();

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleClickOpenSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event: SyntheticEvent | Event, reason?: string) => {
    if (event || reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleCleanTracks = () => {
    //Очистить корзину со всеми песнями
    dispatch(clearCart());
    setOpen(false);
  };

  const deleteSongHandler = (song: typeSong) => {
    // Удаляем песню из корзины по клику на кнопку "удалить" напротив каждой песни
    dispatch(removeSong(song));
    if (songsInCart.length === 1) {
      handleCloseDialog();
    }
    // const updatedTracks = tracks.map((track) =>
    //   track.song === song ? { ...track, hidden: true } : track
    // );
    // setTracks(updatedTracks);
    // setTimeout(() => {
    //   setTracks(updatedTracks.filter((track) => track.song !== song));
    // }, 200);
    // if (tracks.length === 1) {
    //   handleCloseDialog();
    // }
  };

  const isMobile = useMediaQuery("(max-width: 450px)");

  const totalMinutesOfCart = songsInCart //Считаем общую сумму длительности всех песен
    .reduce((acc, curr) => acc + parseFloat(curr.length), 0)
    .toFixed(2);

  const arraySongs = songsInCart.map((track) => {
    //Формируем список песен из корзины для копирования в буфер обмена
    return `${track.author} - ${track.song} (${track.length})\n`;
  });

  const text = `${arraySongs.join(
    //Содержание того, что будет скпировано в буфер обмена.
    ""
  )}\nКол-во песен: ${
    songsInCart.length
  }\nОбщее время выступления: ${totalMinutesOfCart}`;

  return (
    <div>
      <CartIcon
        onClick={handleClickOpenDialog}
        totalMinutesOfCart={totalMinutesOfCart}
      />
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullScreen={isMobile}
      >
        <DialogTitle>
          Ваш сет-лист
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5, float: "right" }}
            onClick={handleCloseDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Titles>
            <li>
              <TitleSong>Композиция</TitleSong>
            </li>
          </Titles>
          <ul>
            {songsInCart.map((track) => {
              const { author, song, length } = track;

              return (
                <TrackItem key={song}>
                  <Author>{author}&nbsp;</Author>
                  <Song>&mdash;&nbsp;{song}</Song>
                  <Tooltip title="удалить">
                    <DeleteButton>
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          deleteSongHandler({
                            author: author,
                            song: song,
                            length: length,
                            checked: true,
                          })
                        }
                      >
                        <DeleteForeverRoundedIcon />
                      </IconButton>
                    </DeleteButton>
                  </Tooltip>
                  <SetListLength>{length.replace(".", ":")}</SetListLength>
                </TrackItem>
              );
            })}
          </ul>
          {songsInCart.length === 0 && (
            <div className="noTracks">Список пуст</div>
          )}
          <Total>
            <TitleSum>Итого:</TitleSum>
            <SumSongsText>
              Песен:&nbsp;
              <Count>{songsInCart.length}</Count>
            </SumSongsText>
            <SumLengthText>
              Общее время:&nbsp;
              <Count $totalTime={totalMinutesOfCart}>
                {totalMinutesOfCart}
              </Count>
            </SumLengthText>
          </Total>
          <Conditions>
            &lowast;&nbsp;Минимальная длительность выступления -{" "}
            <TextChecked>90 минут.</TextChecked> Программу можно разделить на
            блоки как Вам удобно. Например:{" "}
            <TextChecked>3 по 30 минут</TextChecked> или{" "}
            <TextChecked>2 по 45 минут</TextChecked>.
          </Conditions>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "2em 0 0 0 ",
              gap: "1em",
            }}
          >
            <TextCopy className={`paragraph`}>
              Скопируйте сет-лист и отправьте его нам прямо сейчас!
            </TextCopy>
            <CopyToClipboard text={text}>
              <Button
                variant="contained"
                color="error"
                endIcon={<ContentPasteIcon />}
                onClick={handleClickOpenSnack}
              >
                Скопировать сет-лист
              </Button>
            </CopyToClipboard>
            <Box
              sx={{
                boxShadow: "1px 1px 3px #00000035",
                borderRadius: "0.5rem",
                padding: "0.3rem",
                margin: "1rem 0 0 0 ",
              }}
            >
              <IconButton
                href={socials.whatsapp}
                target="_blank"
                size="large"
                color="whatsapp"
              >
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={socials.telegram}
                target="_blank"
                color="info"
                size="large"
              >
                <TelegramIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
          <Snackbar
            anchorOrigin={
              isMobile
                ? { vertical: "bottom", horizontal: "center" }
                : { vertical: "top", horizontal: "center" }
            }
            open={openSnack}
            autoHideDuration={3000}
            onClose={handleCloseSnack}
            sx={isMobile ? { marginBottom: "3.4rem" } : null}
          >
            <MuiAlert
              elevation={2}
              variant="filled"
              onClose={handleCloseSnack}
              severity="success"
              sx={{ width: "100%" }}
            >
              Сет-лист скопирован
            </MuiAlert>
          </Snackbar>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleCleanTracks}
            size="large"
          >
            Очистить
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleCloseDialog}
            size="large"
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default memo(Popup);
export { Count };
