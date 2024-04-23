const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row h-[640px] overflow-hidden justify-center gap-16 md:gap-10 items-center relative bg-[#651385b6]">
      {/* <div className="absolute right-0 bottom-0 custom-radial-gradient2  opacity-60 z-0"></div>
      <div className="absolute left-0 bottom-0 custom-radial-gradient3  opacity-60 z-0"></div> */}

      <div className="relative text-center">
        {/* <img
          src="./0024-removebg-preview.png"
          className="w-40 absolute top-0  left-0  "
        /> */}
        <div className=" hhh text-white  text-center text-3xl md:text-5xl lg:text-8xl font-bold z-50">
          <h1>Thank You</h1>
        </div>
      </div>
      <div className="list-none text-white text-xl font-extralight leading-loose px-10 lg:px-0">
        <li>@reallygreatsite </li>
        <li>www.reallygreatsite.com</li>
        <li>123 Anywhere ST., Any City, ST 12345 </li>
        <li>hello@reallygreatsite.com</li>
      </div>
    </div>
  );
};
export default Footer;
