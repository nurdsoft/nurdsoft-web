import * as React from "react";
import { type PageProps } from "gatsby";
import Layout from "../components/layout";
// import heroGif from "../animations/heroAnim.gif"
import Seo from "../components/seo";
import HomeLayout from "../components/layouts/homelayout";
import "../styles/style.scss";

const IndexPage: React.FC<PageProps> = () => {
  // const [_step, _setStep] = React.useState<number>(0);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     if (_step === 0) {
  //       _setStep((step) => step + 1);
  //     }
  //   }, 2700);
  // }, []);

  // React.useEffect(() => {
  //   const keyDownHandler = (event: any) => {
  //     if (_step === 1) {
  //       event.preventDefault();
  //       _setStep((step) => step + 1);
  //     }
  //   };

  //   document.addEventListener("keydown", keyDownHandler);
  //   document.addEventListener("click", keyDownHandler);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //     document.removeEventListener("click", keyDownHandler);
  //   };
  // }, [_step]);

  return (
    <>
      {/* {_step === 0 ? (
        <main className="pageStyles flex justify-center items-center">
          <div className="w-full h-auto">
            <img loading="eager" className="w-full h-auto" src={heroGif} alt="heroGIf" />
          </div>
        </main>
      ) : (
      )} */}
      <Layout>
        <HomeLayout />
      </Layout>
    </>
  );
};

//BND-343

export default IndexPage;

export async function getServerData() {
  return {
    headers: {
      'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
    }
  }
}

export const Head = () => (
  <Seo />
)
