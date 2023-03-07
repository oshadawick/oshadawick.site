import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm oshada wickramasinghe from Sri Lanaka. You can contact me on{" "}
          <Link href="https://www.twitter.com/oshada52">Twitter</Link> and all
          my projects are on my{" "}
          <Link href="https://github.com/oshadawick">Github</Link>
        </p>
        <hr />
      </section>
    </Layout>
  );
}
