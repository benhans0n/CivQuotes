import * as React from "react"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import Navbar from "../components/navbar"
import { useMediaQuery } from "@mui/material"
import { Helmet } from "react-helmet"

// styles
const styles = {
  box: isDesktop => ({
    width: isDesktop ? 60 + "%" : 100 + "%",
    marginLeft: isDesktop ? 20 + "%" : 0 + "%",
    marginTop: 1 + "%"
  }),
  card: {
    backgroundColor: "#cccccc"
  }
}

// markup
const IndexPage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Civ Quotes</title>
        <link rel="canonical" href="http://civquotes.com" />
      </Helmet>
      <Navbar />
      <Box style={styles.box(isDesktop)}>
        <Card style={styles.card}>
          <CardContent>
            <Card>
              <CardContent>
                <Typography>
                  Hello and welcome to Civ Quotes! Since it's creation in March 2021, this website has served as a catalogue of all
                  the quotes, some quite interesting
                  and some quite bad, from all of the Civilization games that have quotes (sorry Civ I, II, and III), plus Sid
                  Meier's Alpha Centauri.
                  <hr />
                  This website is constantly being updated and upgraded, and the quote catalogues are being updated as more are
                  added with expansions and updates. To find a specific game's quotes, select from the menu in the top right.
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Box>
    </main>
  )
}

export default IndexPage
