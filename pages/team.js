import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Layout from "../components/Layout";
import PersonCard from "../components/PersonCard";

// import HelloKitty from "../public/hello_kitty.png";
//import HelloKitty from "../public/LafHacksLogo.png";
import LafHacksLogo from "../public/LafHacksLogo.png";

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
              <Typography variant="h2">Our Team</Typography>
            </Box>
            <Box>
              <Typography>We can use Cards from Material UI (MUI)</Typography>

              <Link href="https://mui.com/components/" target="_blank" mt={2}>
                Check out all the MUI components here
              </Link>
              <Typography mt={2}>
                Note that by setting target=_blank the link will open in a new
                tab.
              </Typography>
            </Box>
            <Box>
              <PersonCard
                name="Claire"
                classYear="2023"
                major="Computer Science"
              />
              <PersonCard
                name="Josh"
                classYear="2024"
                major="Computer Science"
              />
              <PersonCard
                name="Sakhi"
                classYear="2024"
                major="Computer Science and Bio"
              />
              <PersonCard
                name="Sebs"
                classYear="2024"
                major="Computer Science and Theater"
              />
              <PersonCard
                name="Katie"
                classYear="2024"
                major="Computer Science"
              />
              <PersonCard
                name="Kizuki"
                classYear="2024"
                major="Computer Science and Econ"
              />
              <PersonCard
                name="Cam"
                classYear="2025"
                major="Computer Science"
              />
              <PersonCard
                name="Nathan "
                classYear="2025"
                major="Computer Science"
              />
            </Box>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Layout>
    </>
  );
}
