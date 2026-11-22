import type { TimerMode } from "../model/useTimer";
type TimerModeSwitchProps = {
  mode: TimerMode;
  onModeChange: (mode: TimerMode) => void;
};

export const TimerModeSwitch = ({
  mode,
  onModeChange,
}: TimerModeSwitchProps) => {
  return (
    <div
      role="group"
      aria-label="Режим таймера"
      className="grid grid-cols-3 gap-1 rounded-xl bg-[#302938] p-1"
    >
      <button
        type="button"
        aria-pressed={mode === "focus"}
        onClick={() => onModeChange("focus")}
        className="rounded-lg px-2 py-2 text-xs font-semibold sm:text-sm aria-pressed:bg-[#ffab87] aria-pressed:text-[#241f2c]"
      >
        Фокус
      </button>
      <button
        type="button"
        aria-pressed={mode === "shortBreak"}
        onClick={() => onModeChange("shortBreak")}
        className="rounded-lg px-2 py-2 text-xs hover:bg-[#403749] sm:text-sm aria-pressed:bg-[#ffab87] aria-pressed:text-[#241f2c]"
      >
        Короткий
      </button>
      <button
        type="button"
        aria-pressed={mode === "longBreak"}
        onClick={() => onModeChange("longBreak")}
        className="rounded-lg px-2 py-2 text-xs hover:bg-[#403749] sm:text-sm aria-pressed:bg-[#ffab87] aria-pressed:text-[#241f2c]"
      >
        Длинный
      </button>
    </div>
  );
};
