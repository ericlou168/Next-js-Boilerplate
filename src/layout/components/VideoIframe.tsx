export const VideoIframe = () => {
  return (
    <div className="">
      <div className="overflow-x-hidden ">
        <div className="py-4 dark:text-white whitespace-nowrap animate-marquee">
          <span className="mx-4 text-md">Marquee Item 1</span>
          <span className="mx-4 text-md">Marquee Item 2</span>
          <span className="mx-4 text-md">Marquee Item 3</span>
          <span className="mx-4 text-md">Marquee Item 4</span>
          <span className="mx-4 text-md">Marquee Item 5</span>
        </div>
      </div>
      <iframe
        className=" aspect-video  w-full"
        src="https://www.youtube.com/embed/f3gnRM7wp4w"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
