import { TimerDial } from "./TimerDial";
import { TimerControls } from "./TimerControls";
import { TimerModeSwitch } from "./TimerModeSwitch";
import { useTimer } from "../model/useTimer";

export const TimerPanel = () => {
  const { mode, setMode, durationSeconds, status, toggleTimer } = useTimer();

  return (
    <section className="min-w-0 rounded-3xl bg-[#241f2c] p-4 text-[#fff8f4] shadow-lg sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-mono text-xs uppercase tracking-widest">
          Таймер
        </h2>
        <span className="rounded-full border border-[#47414f] bg-[#302938] px-3 py-1 font-mono text-xs uppercase">
          Готов
        </span>
      </div>

      <TimerModeSwitch mode={mode} onModeChange={setMode} />

      <TimerDial mode={mode} durationSeconds={durationSeconds}/>

      <TimerControls status={status}  onToggle={toggleTimer}/>
    </section>
  );
};
