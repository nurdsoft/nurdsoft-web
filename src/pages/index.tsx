import * as React from "react";
import { withPrefix, type HeadFC, type PageProps } from "gatsby";
import "../styles/global.css";
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

const IndexPage: React.FC<PageProps> = () => {
  const [_step, _setStep] = React.useState<number>(0);

  const onIconClick = () => {
    _setStep((step) => step + 1);
    console.log(_step, "step");
  };

  React.useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (_step === 0) {
        event.preventDefault();
        _setStep((step) => step + 1);
      }

      if (_step === 1) {
        event.preventDefault();
        _setStep((step) => step + 1);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [_step]);

  return (
    <>
      {_step === 0 || _step === 1 ? (
        <main className="pageStyles flex justify-center items-center">
          {_step === 0 && (
            <div onClick={onIconClick}>
              <StaticImage
                className="cursor-pointer"
                src={"../images/nurdsoft-logo.png"}
                width={77}
                alt="Nurdsoft Logo"
              />
            </div>
          )}
          {_step === 1 && (
            <>
              <div className="logoAnimation">
                <LETTER_N className="letter_n widthL " />
                <LETTER_U className="letter_n" />
                <LETTER_R className="letter_n" />
                <LETTER_D className="letter_n" />
                <LETTER_S className="letter_n" />
                <LETTER_O className="letter_n" />
                <LETTER_F className="letter_n" />
                <LETTER_T className="letter_n" />
              </div>
            </>
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
