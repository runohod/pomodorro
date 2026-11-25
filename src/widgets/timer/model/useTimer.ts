import { useState } from "react";

export type TimerMode = "focus" | "shortBreak" | "longBreak";
export type TimerStatus = "ready" | "running" | "paused";

const modeDurations = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export const useTimer = () => {
  const [mode, setMode] = useState<TimerMode>("focus");
  const durationSeconds = modeDurations[mode];
  const [status, setStatus] = useState<TimerStatus>("ready");
  function toggleTimer() {
    if (status === "running") {
      setStatus("paused");
    } else {
      setStatus("running");
    }
  }
  return { mode, setMode, durationSeconds, status, setStatus, toggleTimer };
};
