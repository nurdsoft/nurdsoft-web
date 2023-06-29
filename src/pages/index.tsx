import * as React from "react";
import { withPrefix, type HeadFC, type PageProps } from "gatsby";
import "../styles/style.scss";
import { StaticImage } from "gatsby-plugin-image";
import {
  LETTER_D,
  LETTER_F,
  LETTER_N,
  LETTER_O,
  LETTER_R,
  LETTER_S,
  LETTER_T,
  LETTER_U,
} from "../icons";
import Layout from "../components/layout";
import * as animationData from "../animations/logo.json";
import Lottie from "react-lottie";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  const [_step, _setStep] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (_step === 0) {
        _setStep((step) => step + 1);
      }
    }, 2300);
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
      {_step === 0 || _step === 1 ? (
        <main className="pageStyles flex justify-center items-center">
          {(_step === 0 || _step === 1) && (
            <div>
              <Lottie options={defaultOptions} />
            </div>
          )}
          {_step === 1 && (
            <div className="bottomText">Press any key to continue...</div>
          )}
        </main>
      ) : (
        <Layout />
      )}
    </>
  );
};

//BND-343

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
