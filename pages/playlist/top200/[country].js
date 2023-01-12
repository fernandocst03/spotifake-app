import { useRouter } from "next/router"
import { useState, useEffect } from 'react'
import Top200 from "../../../components/Top200"
import Navigation from "../../../components/Navigation"

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
          'X-RapidAPI-Key': 'de731bf4d7mshe61421839551803p1110dejsn29749a8c0618',
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
          <Top200
            country={country}
            type={country}
            tracks={tracks}
          />
        </section>
      </div>
    </>
  )
}
