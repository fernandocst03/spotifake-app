import Navigation from "../../../components/Navigation"
import Top200 from "../../../components/Top200"
import { Children } from "react"
import { API_KEY } from "../../../config/key"

export default function Top200Global ({ tracks }) {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "row"
    }}
    >
      <Navigation />
      <section style={{
        backgroundColor: "var(--white)",
        width: "100%",
        height: "100%"
      }}
      >
        <section
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            overflowY: "scroll"
          }}
        >
          <Top200
            type="Global"
            tracks={tracks}
          >
            {Children}
          </Top200>
        </section>
      </section>
    </div>
  )
}

export async function getStaticProps () {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  }

  const response = await fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
  const tracks = await response.json()
  return {
    props: { tracks }
  }
}
