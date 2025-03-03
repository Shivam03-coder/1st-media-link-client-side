"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import { useDarkMode } from "usehooks-ts";
import { dark } from "@clerk/themes";
import { useSearchParams } from "next/navigation";

const SignInComponent = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <SignIn
      appearance={{
        baseTheme: isDarkMode ? dark : undefined,
        elements: {
          rootBox: "center flex-col py-8 ",
          cardBox: "shadow-none rounded-none sm:w-[400px] md:w-[500px]",
          card: "bg-white dark:bg-gray-800  font-lexend w-full",
          formFieldLabel: "textDark font-lexend text-base font-normal",
          footer: {
            background: isDarkMode ? "#1f2937" : "#ffffff",
            padding: "0rem 3.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "0px 0px 12px 12px",
            "& > div > div:nth-child(1), & > div > div:nth-child(2)": {
              display: "none",
            },
          },
          formFieldInput:
            "bg-white dark:bg-gray-900 p-5 rounded focus:ring-0 shadow-none focus:ring",
          formButtonPrimary:
            "dark:bg-gray-900 textDark card rounded text-sm font-normal  shadow-none! border-none",
          header: "uppercase textDark font-normal",
          socialButtonsBlockButton:
            "w-full bg-blue-100 dark:bg-primary text-white hover:bg-red-700 rounded-md py-3 font-normal text-base",
          footerActionLink: "text-blue-400  pl-1",
        },
      }}
    />
  );
};

export default SignInComponent;
