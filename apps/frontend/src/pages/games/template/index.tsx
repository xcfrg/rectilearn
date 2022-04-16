import Head from "next/head";
import { NextPage } from "next";

import Questions from "../../../components/questions";

const Template: NextPage = () => {
    return (
      <>
        <Head>
          <title>Games</title>
        </Head>
        <Questions question="hello in french" answer="bonjour" />
      </>
    );
  }
  
export default Template;