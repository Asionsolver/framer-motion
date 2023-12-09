import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import {motion} from 'framer-motion'
// eslint-disable-next-line react/prop-types
export default function Card({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative w-60 h-72 rounded-[40px] bg-zinc-700 text-white px-7 py-10 overflow-hidden">
      <IoDocumentTextSharp />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {/* eslint-disable-next-line react/prop-types */}
        {data.desc}
      </p>

      <div className="footer w-full  absolute footer bottom-0 left-0 bg-zinc-700">
        <div className="flex h-[52px] justify-between items-center px-6 py-5">
          {/* eslint-disable-next-line react/prop-types */}
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {/* eslint-disable-next-line react/prop-types */}
            {data.close ? <MdOutlineFileDownload /> : <IoIosClose />}
          </span>
        </div>
        {/* eslint-disable-next-line react/prop-types */}
        {data.tag.isOpen && (
          <div
            // eslint-disable-next-line react/prop-types
            className={`tag ${data.tag.tagColor} h-[52px]  flex items-center justify-center `}
          >
            {/* eslint-disable-next-line react/prop-types */}
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
