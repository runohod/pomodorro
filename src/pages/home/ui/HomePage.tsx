import { settingsIcon } from "@/shared/assets";
import { TimerPanel } from "@/widgets/timer";

export const HomePage = () => {
  return (
    <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
      <section className="">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/favicon.svg" width={45} height={45} alt="" />

            <div>
              <div className="text-xl font-bold leading-tight">Фокус</div>
              <div className="text-xs text-stone-600">Помодоро-таймер</div>
            </div>
          </div>

          <button
            type="button"
            className="flex gap-3 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium hover:bg-stone-100"
          >
            <img src={settingsIcon} width={18} height={18} alt="" />
            Настройки
          </button>
        </header>

        <div className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Время для фокуса
          </h1>
          <div className="mt-1 text-sm text-stone-600">
            Выбери режим и запусти таймер.
          </div>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 items-start gap-5 md:grid-cols-[1.9fr_1fr]">
        <TimerPanel />

        <div className="flex min-w-0 flex-col gap-4 text-[#241f2c]">
          <section className="rounded-3xl border border-[#e7e1da] bg-[#fffdfb] p-5">
            <h2 className="text-xl font-bold">Сегодня</h2>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-[#f1eee9] p-3">
                <p className="text-xs text-[#655e6c]">Сессии</p>
                <p className="mt-2 font-mono text-3xl font-semibold">0</p>
              </div>

              <div className="rounded-xl bg-[#f1eee9] p-3">
                <p className="text-xs text-[#655e6c]">В фокусе</p>
                <p className="mt-2 font-mono text-3xl font-semibold">
                  0<span className="ml-1 font-sans text-xs font-normal">мин</span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#655e6c]">
              Учитываются завершённые сессии.
            </p>
          </section>

          <section className="rounded-3xl border border-[#e7e1da] bg-[#fffdfb] p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold">Цикл</h2>
              <span className="rounded-full bg-[#f1eee9] px-2.5 py-1 font-mono text-xs">
                0 / 4
              </span>
            </div>

            <ol
              aria-label="Сессии текущего цикла"
              className="mt-3 grid grid-cols-4 gap-2"
            >
              {[1, 2, 3, 4].map((session) => (
                <li
                  key={session}
                  className="rounded-lg bg-[#f1eee9] py-1.5 text-center font-mono text-xs text-[#655e6c]"
                >
                  {session}
                </li>
              ))}
            </ol>

            <p className="mt-4 text-xs text-[#655e6c]">
              После четвёртой сессии — длинный перерыв.
            </p>

            <div className="mt-4 flex items-center gap-2 border-t border-[#e7e1da] pt-4">
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#96e2ca]"
              >
                ›
              </span>
              <div>
                <p className="text-xs text-[#655e6c]">Следом</p>
                <p className="text-sm font-semibold">Короткий перерыв</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
