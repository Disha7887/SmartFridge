import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Background decoration elements data
  const gradientBlurs = [
    {
      className:
        "absolute w-96 h-96 top-[102px] left-[72px] rounded-full blur-[32px] bg-[linear-gradient(135deg,rgba(239,68,68,0.15)_0%,rgba(249,115,22,0.15)_100%)]",
    },
    {
      className:
        "absolute w-80 h-80 top-[614px] left-[976px] rounded-full blur-[32px] bg-[linear-gradient(135deg,rgba(249,115,22,0.2)_0%,rgba(236,72,153,0.2)_100%)]",
    },
    {
      className:
        "absolute w-64 h-64 top-[563px] left-[216px] rounded-full blur-[32px] bg-[linear-gradient(135deg,rgba(236,72,153,0.25)_0%,rgba(239,68,68,0.25)_100%)]",
    },
  ];

  const borderCircles = [
    {
      className:
        "absolute w-40 h-40 top-64 left-72 rounded-full border-2 border-solid border-[#f770704c]",
    },
    {
      className:
        "absolute w-32 h-32 top-[717px] left-[880px] rounded-full border-2 border-solid border-[#fa913c66]",
    },
    {
      className:
        "absolute w-48 h-48 top-[525px] left-[864px] rounded-full border-2 border-solid border-[#f472b540]",
    },
  ];

  const smallDots = [
    {
      className:
        "absolute w-4 h-4 top-[205px] left-36 bg-[#ffffff4c] rounded-full",
    },
    {
      className:
        "absolute w-3 h-3 top-[410px] left-[1212px] bg-[#f7707066] rounded-full",
    },
    {
      className:
        "absolute w-2 h-2 top-[709px] left-72 bg-[#fa913c80] rounded-full",
    },
    {
      className:
        "absolute w-5 h-5 top-[614px] left-[1060px] bg-[#f472b559] rounded-full",
    },
    {
      className:
        "absolute w-6 h-6 top-[488px] left-[1008px] bg-[#fba5a54c] rounded-full",
    },
  ];

  const rotatedElements = [
    {
      className:
        "absolute w-12 h-12 top-[358px] left-[1080px] rotate-45 bg-[linear-gradient(135deg,rgba(239,68,68,0.2)_0%,rgba(0,0,0,0)_100%)]",
    },
    {
      className:
        "absolute w-8 h-8 top-[378px] left-[1264px] rotate-45 bg-[linear-gradient(135deg,rgba(249,115,22,0.25)_0%,rgba(0,0,0,0)_100%)]",
    },
    {
      className:
        "absolute w-16 h-16 top-[819px] left-[576px] rotate-45 bg-[linear-gradient(135deg,rgba(236,72,153,0.15)_0%,rgba(0,0,0,0)_100%)]",
    },
  ];

  const gradientLines = [
    {
      className:
        "absolute w-px h-32 top-[205px] left-[360px] bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(248,113,113,0.3)_50%,rgba(0,0,0,0)_100%)]",
    },
    {
      className:
        "absolute w-px h-24 top-[614px] left-[935px] bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(251,146,60,0.4)_50%,rgba(0,0,0,0)_100%)]",
    },
    {
      className:
        "absolute w-px h-28 top-[605px] left-[864px] bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(244,114,182,0.35)_50%,rgba(0,0,0,0)_100%)]",
    },
  ];

  // Trust indicators data
  const trustIndicators = [
    {
      icon: "/figmaAssets/margin-wrap-29.svg",
      text: "100% Secure",
      className: "flex w-[102.7px] h-5 items-center relative",
    },
    {
      icon: "/figmaAssets/margin-wrap-22.svg",
      text: "Instant Processing",
      className: "flex w-[138.88px] h-5 items-center relative",
    },
    {
      icon: "/figmaAssets/margin-wrap-23.svg",
      text: "Always Free",
      className: "flex w-[97.47px] h-5 items-center relative",
    },
  ];

  // Supported file formats data
  const fileFormats = [
    {
      icon: "/figmaAssets/margin-wrap-20.svg",
      text: "PDF",
      className: "w-[38.58px] h-4 items-center flex relative",
    },
    {
      icon: "/figmaAssets/margin-wrap-1.svg",
      text: "DOC",
      className: "w-[40.44px] h-4 items-center flex relative",
    },
    {
      icon: "/figmaAssets/margin-wrap-27.svg",
      text: "XLS",
      className: "w-[37.61px] h-4 items-center flex relative",
    },
    {
      icon: "/figmaAssets/margin-wrap-34.svg",
      text: "JPG",
      className: "w-[38.88px] h-4 items-center flex relative",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="relative w-full">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {gradientBlurs.map((blur, index) => (
            <div key={`blur-${index}`} className={blur.className} />
          ))}

          {borderCircles.map((circle, index) => (
            <div key={`circle-${index}`} className={circle.className} />
          ))}

          {smallDots.map((dot, index) => (
            <div key={`dot-${index}`} className={dot.className} />
          ))}

          {rotatedElements.map((element, index) => (
            <div key={`rotated-${index}`} className={element.className} />
          ))}

          {gradientLines.map((line, index) => (
            <div key={`line-${index}`} className={line.className} />
          ))}
        </div>

        {/* Main content */}
        <div className="flex items-center justify-center w-full py-20">
          <div className="flex flex-wrap max-w-screen-xl w-full items-center gap-12 px-8">
            {/* Left column - Text content */}
            <div className="flex flex-col w-full lg:w-[584px] space-y-8">
              {/* Trusted badge */}
              <Badge
                variant="outline"
                className="bg-[#ef444433] text-red-300 border-[#f770704c] rounded-full px-[17px] py-[9px] w-fit"
              >
                <img
                  className="mr-2"
                  alt="Trust icon"
                  src="/figmaAssets/margin-wrap.svg"
                />
                <span className="font-medium text-sm">
                  Trusted by 10M+ users worldwide
                </span>
              </Badge>

              {/* Heading */}
              <h1 className="font-bold text-white text-5xl leading-[48px] max-w-[584px]">
                Professional PDF tools trusted by millions
              </h1>

              {/* Description */}
              <p className="text-[#d0d5da] text-lg leading-7 max-w-2xl">
                Every tool you need to use PDFs, at your fingertips. All are
                100% FREE and easy to use! Merge, split, compress, convert,
                rotate, unlock and watermark PDFs with just a few clicks.
              </p>

              {/* Action buttons */}
              <div className="flex gap-4">
                <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 h-[61px] rounded-lg shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a]">
                  <img
                    className="mr-2"
                    alt="Convert icon"
                    src="/figmaAssets/margin-wrap-32.svg"
                  />
                  Start Converting Now
                </Button>

                <Button
                  variant="outline"
                  className="bg-[#ffffff1a] text-white border-2 border-[#ffffff33] backdrop-blur-[2px] h-[61px] px-[34px] py-[18px] rounded-lg"
                >
                  <img
                    className="mr-2"
                    alt="Play icon"
                    src="/figmaAssets/margin-wrap-4.svg"
                  />
                  Watch Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center">
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={`indicator-${index}`}
                    className={`${indicator.className} ${index > 0 ? "ml-8" : ""}`}
                  >
                    <img
                      className="mr-2"
                      alt={`${indicator.text} icon`}
                      src={indicator.icon}
                    />
                    <span className="font-normal text-[#d0d5da] text-sm leading-5 whitespace-nowrap">
                      {indicator.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - File upload area */}
            <Card className="flex flex-col w-full lg:w-[584px] h-[405px] bg-[#ffffff1a] rounded-3xl border-2 border-dashed border-[#6a7280] backdrop-blur-[2px]">
              <CardContent className="flex flex-col items-center justify-center h-full p-[50px]">
                <img
                  className="mb-4"
                  alt="Upload icon"
                  src="/figmaAssets/margin-wrap-31.svg"
                />

                <h2 className="font-bold text-white text-xl text-center mb-3">
                  Drop your PDF here
                </h2>

                <p className="text-[#d0d5da] text-base text-center mb-8">
                  or click to browse files
                </p>

                <Button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-12 py-4 h-[57px] rounded-xl shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] mb-8">
                  <img
                    className="mr-2"
                    alt="Select file icon"
                    src="/figmaAssets/margin-wrap-3.svg"
                  />
                  Select PDF File
                </Button>

                {/* Supported file formats */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {fileFormats.map((format, index) => (
                    <div key={`format-${index}`} className={format.className}>
                      <img
                        className="mr-1"
                        alt={`${format.text} icon`}
                        src={format.icon}
                      />
                      <span className="font-normal text-[#9ca2af] text-xs leading-4 whitespace-nowrap">
                        {format.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
