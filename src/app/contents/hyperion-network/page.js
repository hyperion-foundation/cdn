import { CircleBackslashIcon } from "@radix-ui/react-icons";

export default function HyperionNetworkContent() {
  return (
    <>
      <div className="h-screen text-center flex flex-col items-center justify-center">
        <div>
          <CircleBackslashIcon className="inline-block" />
          <h1 className="font-semibold text-lg">There is no available content at the moment. Please come back later.</h1>
        </div>
      </div>
    </>
  )
};
