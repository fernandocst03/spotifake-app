import style from "../styles/Top200.module.css"
import SongsItemList from "../components/SongsItemList"

export default function Top200Global ({ tracks, type }) {
  return (
    <>
      <div className={style.globalContainer}>
        <div className={style.globalImg}>.</div>
        <div className={style.globalDescription}>
          <div className={style.info}>
            <p className={style.playText}>Dale Play!</p>
            <p className={style.titleText}>Top 200 {type}</p>
            <p className={style.updateText}>Actializada: Miercoles</p>
          </div>
          <p className={style.textDescription}>Si alguna vez te preguntas qué escucha el planeta, aquí tienes la respuesta. Estos son los cien éxitos que más suenan ahora mismo en todo el mundo. Las canciones de esta lista se actualizan continuamente. Si te gusta alguna, agrégala a tu biblioteca.</p>
          <div className={style.buttonsContainer}>
            <button type="button" className={style.likeButton}>♥ Me gusta</button>
            <button type="button" className={style.likeButton}>▶︎ Reproducir</button>
          </div>
        </div>
      </div>
      <div className={style.songsTop200Container}>
        <div className={style.headerListTop200}>
          <p>Songs</p>
          <p>Artists</p>
          <p>release date</p>
        </div>
        <section>
          {tracks.map((track, index) => (
            <SongsItemList
              key={index}
              trackName={track.trackMetadata.trackName}
              trackArtist={track.trackMetadata.artists.map(artist => artist.name)}
              trackReleaseDate={track.trackMetadata.releaseDate}
            />
          )).slice(0, 200)}
          <SongsItemList />
        </section>
      </div>
    </>
  )
}
