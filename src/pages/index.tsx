import * as React from "react";
import { type PageProps } from "gatsby";
import "../styles/style.scss";
import Layout from "../components/layout";
import * as animationData from "../animations/logo.json";
import Lottie from "react-lottie";
import Seo from "../components/seo";
import HomeLayout from "../components/layouts/homelayout";

const IndexPage: React.FC<PageProps> = () => {
  const [_step, _setStep] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (_step === 0) {
        _setStep((step) => step + 1);
      }
    }, 2500);
  }, []);

  React.useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (_step === 1) {
        event.preventDefault();
        _setStep((step) => step + 1);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("click", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("click", keyDownHandler);
    };
  }, [_step]);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Seo />
      {_step === 0 ? (
        <main className="pageStyles flex justify-center items-center">
          <div>
            <Lottie options={defaultOptions} />
          </div>
        </main>
      ) : (
        <Layout>
          <HomeLayout />
        </Layout>
      )}
    </>
  );
};

//BND-343

export default IndexPage;
