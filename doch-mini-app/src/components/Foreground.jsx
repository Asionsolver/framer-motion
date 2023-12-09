import { useRef } from "react";
import Card from "./Card";

export default function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Quick React Practice Task | Docs Mini App | React | Framer Motion",
      fileSize: "0.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-500",
      },
    },
    {
      desc: "Quick React Practice Task | Docs Mini App | React | Framer Motion",
      fileSize: "0.5mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-yellow-500",
      },
    },
    {
      desc: "Quick React Practice Task | Docs Mini App | React | Framer Motion",
      fileSize: "0.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-blue-500",
      },
    },
    {
      desc: "Quick React Practice Task | Docs Mini App | React | Framer Motion",
      fileSize: "0.5mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-red-500",
      },
    },
  ];
  return (
    <div>
      <div ref={ref} className="flex gap-8 flex-wrap p-8 z-[3] fixed w-full h-screen top-0 left-0">
        {data.map((item, index) => (
          <Card  data={item} key={index} reference={ref}/>
        ))}
      </div>
    </div>
  );
}
