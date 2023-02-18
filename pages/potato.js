import Head from "next/head";

import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Layout from "../components/Layout";

export default function Team() {
  // this is a state hook! You don't need to use it to make cool websites
  const [counter, setCounter] = useState(0);

  const handleButton1Click = () => {
    setCounter(counter + 1);
    console.log("Button1 was clicked!");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid container spacing={2}>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              m={4}
            >
              <Typography variant="h2">Potato Demo Page</Typography>
            </Box>
            <Box>
              <Typography>
                Notice that the sx prop on the Box allows us to specify all of
                our normal html attributes. In this Box holding the h2
                Typography component, we are centering the contents of the box.
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" my={3}>
                Put your text in a typography component
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" my={3}>
                It makes styling easy!
              </Typography>
            </Box>
            <Button variant="contained" onClick={handleButton1Click}>
              Button1
            </Button>
            <Typography>
              This is a demo on how useState works. Every time the button is
              clicked, the component is rerendered and the counter is updated.
              <br />
              Counter: {counter}
            </Typography>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Layout>
    </>
  );
}
