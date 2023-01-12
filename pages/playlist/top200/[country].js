import { useRouter } from "next/router"
import { useState, useEffect } from 'react'
import Top200 from "../../../components/Top200"
import Navigation from "../../../components/Navigation"
import { API_KEY } from "../../../config/key"

export default function Top200ByCountry () {
  const router = useRouter()
  const { country } = router.query

  const [tracks, setTracks] = useState([])
  let pais = ""

  switch (country) {
  case "mexico":
    pais = "MX"
    break
  case "united-states":
    pais = "US"
    break
  case "spain":
    pais = "ES"
    break
  }

  const url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=${pais}`

  useEffect(() => {
    async function fetcData () {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
      }

      const response = await fetch(url, options)
      const tracks = await response.json()
      setTracks(tracks)
    }
    fetcData()
  }, [url])

  return (
    <>
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
              country={country}
              type={country}
              tracks={tracks}
            />
          </section>
        </section>
      </div>
    </>
  )
}
