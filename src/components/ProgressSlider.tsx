"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Heading, Image, Text } from "@chakra-ui/react";

interface Item {
  title: string;
  desc: string;
}

export default function ProgressSlider({ items }: { items: Item[] }) {
  const duration: number = 5000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      {/* Item image */}
      <div className="transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <span className="block text-sm font-medium text-white mb-2">
                <Heading as="h1" size="4xl" noOfLines={1}>
                  {item.title}
                </Heading>
                <Text mx={8} my={10} fontSize="md">
                  {item.desc}
                </Text>
              </span>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto flex justify-around">
        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span
              className={`text-center flex flex-col items-center  ${
                active === index
                  ? ""
                  : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
              }`}
            >
              <span className="block text-sm font-medium text-white mb-2"></span>
              <span
                className="block relative w-4 h-4 bg-slate-200 rounded-full"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 dark:bg-indigo-500 bg-orange-500 rounded-[inherit]"
                  style={{ width: active === index ? `${progress}%` : "0%" }}
                ></span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
