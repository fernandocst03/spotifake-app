import Link from "next/link"
import style from "../styles/Navigation.module.css"

const linksNavbar = [
  {
    label: "Home",
    icon: "⌂",
    route: "/"
  },
  {
    label: "Explore",
    icon: "⊞",
    route: "/explore"
  },
  {
    label: "Songs",
    icon: "♪",
    route: "/songs"
  }
]

const linksPlaylist = [
  {
    label: "Playlist 1",
    icon: "♬"
  },
  {
    label: "Playlist 2",
    icon: "♬"
  },
  {
    label: "Playlist 3",
    icon: "♬"
  },
  {
    label: "Playlist 4",
    icon: "♬"
  }
]

export default function Navigation () {
  return (
    <nav className={style.navbar}>
      <div>
        <input type="text" placeholder="Search" className={style.inputSearch} />
      </div>
      <div className={style.navbarContainer}>
        <p className={style.navbarTitle}>SpotiFake</p>
        <ul className={style.navbarList}>
          {linksNavbar.map(({ label, route, icon }) => {
            return (
              <li
                key={route}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "10px"
                }}
              >
                <span>{icon}</span>
                <Link href={route} className={style.navbarItem}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <p className={style.navbarTitle}>Playlists</p>
        <ul className={style.navbarList}>
          {linksPlaylist.map(({ label, icon }) => {
            return (
              <li
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "10px"
                }}
              >
                <span>{icon}</span>
                <Link href="/" className={style.navbarItem}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
