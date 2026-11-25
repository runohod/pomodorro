import type { TimerMode } from "@/widgets/timer/model/useTimer";
type TimerDialProps = { mode: TimerMode, durationSeconds: number };

const modeLabels = {
  focus: "Фокус",
  shortBreak: "Короткий",
  longBreak: "Длинный",
};

export const TimerDial = ({ mode, durationSeconds }: TimerDialProps) => {

  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;

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
          {modeLabels[mode]}
        </span>
        <span className="font-mono text-5xl font-bold tabular-nums sm:text-6xl">
          {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </span>
        <span className="font-mono text-xs tracking-widest text-[#c9c0d0]">
          МИН / СЕК
        </span>
      </div>
    </div>
  );
};
