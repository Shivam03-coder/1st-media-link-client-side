"use client";

import { Play, Pause, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TimerTracker = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <Card>
      {/* Header */}
      <CardHeader className="text-center">
        <CardTitle className="text-lg font-semibold text-gray-800">
          Timer Tracker
        </CardTitle>
        <CardDescription className="text-gray-500">
          Track your daily time usage
        </CardDescription>
      </CardHeader>

      {/* Timer Display */}
      <CardContent className="flex flex-col items-center justify-center space-y-4">
        <button
          onClick={handleStartStop}
          className={`flex h-16 w-16 items-center justify-center rounded-full shadow-md transition duration-200 ${
            isRunning
              ? "bg-red-500 hover:bg-red-600"
              : "bg-yellow-400 hover:bg-yellow-500"
          }`}
        >
          {isRunning ? (
            <Pause className="h-8 w-8 text-white" />
          ) : (
            <Play className="h-8 w-8 text-white" />
          )}
        </button>

        <p className="text-3xl font-bold text-gray-800">{formatTime(time)}</p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex w-full flex-col space-y-3">
        <span className="text-center font-semibold">
          {formatTime(time)} / 03:00:00
        </span>

        <button
          onClick={handleReset}
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gray-300 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-400"
        >
          <X className="h-4 w-4" />
          <span>Reset Timer</span>
        </button>
      </CardFooter>
    </Card>
  );
};

export default TimerTracker;
