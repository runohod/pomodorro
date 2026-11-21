export const TimerModeSwitch = () => {
  return (
    <div
      role="group"
      aria-label="Режим таймера"
      className="grid grid-cols-3 gap-1 rounded-xl bg-[#302938] p-1"
    >
      <button
        type="button"
        aria-pressed={true}
        className="rounded-lg bg-[#ffab87] px-2 py-2 text-xs font-semibold text-[#241f2c] sm:text-sm"
      >
        Фокус
      </button>
      <button
        type="button"
        aria-pressed={false}
        className="rounded-lg px-2 py-2 text-xs hover:bg-[#403749] sm:text-sm"
      >
        Короткий
      </button>
      <button
        type="button"
        aria-pressed={false}
        className="rounded-lg px-2 py-2 text-xs hover:bg-[#403749] sm:text-sm"
      >
        Длинный
      </button>
    </div>
  );
};
