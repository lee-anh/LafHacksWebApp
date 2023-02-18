import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Layout from "../components/Layout";
import LafHacksLogo from "../public/LafHacksLogo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Laf Hacks Example App</title>
        <meta
          name="description"
          content="Example next js react app for Laf Hacks 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid container spacing={2}>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <Typography align="center" variant="h2">
              Welcome to Laf Hacks!
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              m={4}
            >
              <Image
                src={LafHacksLogo}
                alt="Laf Hacks Logo"
                width={200}
                priority
              />
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              nulla ligula. Aliquam fringilla risus a sapien laoreet, ac
              hendrerit ex elementum. Integer at suscipit lorem, vitae ornare
              leo. Praesent in leo eu dolor pulvinar euismod ac quis lectus.
              Vestibulum fermentum arcu eget massa dictum, elementum pulvinar
              odio maximus.
              <br />
              <br />
              Ut volutpat convallis mi, in elementum tortor viverra sed. Nunc
              mattis sollicitudin mauris, eu aliquam mi elementum nec. Maecenas
              aliquam scelerisque odio eu fringilla. Aliquam mollis sollicitudin
              tempor. Pellentesque tristique lacus sit amet mi placerat, in
              lacinia ante euismod. Nulla fringilla aliquam cursus. Pellentesque
              bibendum quam at orci posuere, ac feugiat eros dignissim.
              <br />
              <br />
              Praesent hendrerit, nunc quis efficitur sagittis, libero nunc
              ornare ante, sit amet feugiat elit urna quis metus. Pellentesque
              feugiat lorem lectus, eget dictum enim lobortis eget. Duis eu
              tellus vitae ipsum fermentum ultrices nec nec turpis. Nam dapibus
              eros quis sollicitudin eleifend. Maecenas pharetra placerat felis,
              ut dapibus diam consequat iaculis. Quisque vulputate odio ac
              placerat egestas. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed accumsan erat a leo luctus lacinia. Sed
              fermentum, felis in blandit blandit, lorem arcu malesuada ligula,
              ut posuere nunc justo id nulla. Mauris luctus sagittis augue, eu
              pretium dolor tempus eu. Sed porttitor vitae libero sit amet
              tristique. Proin in magna vulputate, auctor nulla ut, hendrerit
              mi. Curabitur ac viverra ligula, at pulvinar augue. Nulla nec
              lorem metus. Suspendisse lobortis fermentum mi at elementum. Nam
              sed mollis massa.
            </Typography>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Layout>
    </>
  );
}
