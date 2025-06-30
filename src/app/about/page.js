import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <>
      <div className="h-screen text-center flex flex-col items-center justify-center">
        <div>
          <InfoCircledIcon className="inline-block" />
          <h1 className="font-semibold text-lg">This page is still under development. Come back later.</h1>
        </div>
      </div>
    </>
  )
};
