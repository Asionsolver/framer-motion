function Background() {
  return (
    <div className="w-full h-screen z-[2] fixed">
      <div className="absolute top-[5%] w-full py-10 flex justify-center font-semibold text-xl text-zinc-700">
        Documents.
      </div>
      <h2 className="absolute top-1/2 left-1/2 -translate-y-[50%]  -translate-x-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-500">
        Docs.
      </h2>
    </div>
  );
}

export default Background;
