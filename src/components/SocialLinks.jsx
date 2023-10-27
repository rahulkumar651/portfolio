import React from "react";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoGmail,
} from "react-icons/bi";
import { AiFillFile } from "react-icons/ai";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Mail <BiLogoGmail size={30} />
        </>
      ),
      href: "https://mail.google.com/mail/u/0/",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <BiLogoLinkedinSquare size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rahulraghav651/",
    },
    {
      id: 3,
      child: (
        <>
          github <BiLogoGithub size={30} />
        </>
      ),
      href: "https://github.com/rahulkumar651",
    },
    {
      id: 4,
      child: (
        <>
          Resume <AiFillFile size={30} />
        </>
      ),
      href: "srcassetsRahul.pdf",
      download: true,
    },
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col  top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, href, download, child }) => (
            <li
              key={id}
              className=" flex justify-between items-center w-40 h-1/4 px-4 my-1  bg-gradient-to-r from-slate-500 to-slate-600 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 "
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white "
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
