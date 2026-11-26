import { useState, useRef, useEffect } from "react";

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
  const [remainingSeconds, setRemainingSeconds] = useState(modeDurations.focus);

  function toggleTimer() {
    if (status === "running") {
      if (deadlineRef.current !== null) {
        const remainingMilliseconds = deadlineRef.current - Date.now();
        const secondsLeft = Math.max(
          0,
          Math.ceil(remainingMilliseconds / 1000),
        );

        setRemainingSeconds(secondsLeft);
      }

      deadlineRef.current = null;
      setStatus("paused");
    } else {
      deadlineRef.current = Date.now() + remainingSeconds * 1000;
      setStatus("running");
    }
  }

  function changeMode(nextMode: TimerMode) {
    setMode(nextMode);
    setRemainingSeconds(modeDurations[nextMode]);
    setStatus("ready");
    deadlineRef.current = null;
  }

    function resetTimer() {
    deadlineRef.current = null;
    setRemainingSeconds(modeDurations[mode]);
    setStatus("ready");
  };

  const deadlineRef = useRef<number | null>(null);

  useEffect(() => {
    if (status !== "running") {
      return;
    }
    const intervalId = setInterval(() => {
      if (deadlineRef.current !== null) {
        const remainingMilliseconds = deadlineRef.current - Date.now();
        const secondsLeft = Math.max(
          0,
          Math.ceil(remainingMilliseconds / 1000),
        );

        setRemainingSeconds(secondsLeft);
      }
    }, 250);

    return () => clearInterval(intervalId);
  }, [status]);

  return {
    mode,
    changeMode,
    durationSeconds,
    status,
    setStatus,
    toggleTimer,
    resetTimer,
    remainingSeconds,
    setRemainingSeconds,
    deadlineRef,
  };
};
