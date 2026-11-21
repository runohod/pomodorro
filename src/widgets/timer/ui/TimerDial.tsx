export const TimerDial = () => {
  return (
    <div className="relative mx-auto my-6 aspect-square w-64 max-w-full">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(#625a6c_0deg_0.8deg,transparent_0.8deg_7.5deg)] mask-[radial-gradient(farthest-side,transparent_calc(100%-9px),black_0)]"
      />

      <div className="absolute inset-5 flex flex-col items-center justify-center gap-2 rounded-full border-[6px] border-[#47414f] bg-[#2c2636]">
        <span
          aria-hidden="true"
          className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#ffab87]"
        />
        <span className="font-mono text-xs tracking-widest text-[#ffab87]">
          ФОКУС
        </span>
        <span className="font-mono text-5xl font-bold tabular-nums sm:text-6xl">
          25:00
        </span>
        <span className="font-mono text-xs tracking-widest text-[#c9c0d0]">
          МИН / СЕК
        </span>
      </div>
    </div>
  );
};
