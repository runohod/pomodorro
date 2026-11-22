import { useState } from "react";

export type TimerMode = "focus" | "shortBreak" | "longBreak";

export const useTimer = () => {
    const [mode, setMode] = useState<TimerMode>("focus");
    return { mode, setMode };
};
