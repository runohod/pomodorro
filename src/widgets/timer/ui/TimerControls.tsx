import type { TimerStatus } from "../model/useTimer";

type TimerControlsProps = { status: TimerStatus, onToggle: () => void };

const statusLabels = {
  ready: "Старт",
  running: "Пауза",
  paused: "Продолжить",
};

export const TimerControls = ({ status, onToggle }: TimerControlsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button
        type="button"
        className="rounded-full bg-[#ffab87] px-10 py-3 text-sm font-semibold text-[#241f2c] hover:bg-[#ffc0a4]"
        onClick={onToggle}
      >
        {statusLabels[status]}
      </button>
      <button
        type="button"
        className="rounded-full border border-[#47414f] bg-[#302938] px-5 py-3 text-sm hover:bg-[#403749]"
      >
        Сброс
      </button>
    </div>
  );
};