import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Index() {
  return (
    <Layout pageTitle='hello there'>
      <StaticImage
        alt='An arty portrait of Hannah looking down with a bright light shining at her face.'
        src='../images/portrait.jpg'
      />
    </Layout>
  );
}
