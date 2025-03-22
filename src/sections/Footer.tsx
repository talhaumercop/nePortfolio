import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-white-400/20">
      <div className="container">
        <div className="border-t border-white/10 py-6 flex flex-col items-center text-sm">
          <div className="text-gray-400">&copy; {new Date().getFullYear()}.All rights reserved.</div>
          <div className="flex items-center mt-8 gap-6">
            <a href="https://www.instagram.com/the.webstory?igsh=MWI4NnAzMWI3bHdraw==" className="font-semibold flex">Instagram   <ArrowUpRightIcon className="size-4"/></a>
            <a href="https://www.facebook.com/share/18UP2i3KfD/" className="font-semibold flex">Facebook   <ArrowUpRightIcon className="size-4"/></a>
            <a href="https://www.linkedin.com/in/talha-umar-78430a356/" className="font-semibold flex">LinkedIn  <ArrowUpRightIcon className="size-4"/></a>
          </div>
        </div>
      </div>
    </footer>
    
  )
};
