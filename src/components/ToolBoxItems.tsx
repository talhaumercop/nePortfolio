'use client'
import React, { Fragment } from "react";
import LanguageIcons from "./LanguageIcons";
import { twMerge } from "tailwind-merge";

type Props = {};

function ToolBoxItems({
  toolBox,
  className,
  itemsWrapperClass,
  animationDirection, // New prop for direction control
}: {
  toolBox: {
    iconType: React.ElementType;
    title: string;
  }[];
  className?: string;
  itemsWrapperClass?: string;
  animationDirection?: "left" | "right"; // Direction of animation
}) {
  return (
    <div
      className={twMerge(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex-none flex gap-4 py-3 animate-scroll",
          itemsWrapperClass,
          animationDirection === "right" ? "animate-scroll-right" : "animate-scroll-left"
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolBox.map((tool, index) => (
              <div
                key={index}
                className="gap-4 py-2 px-3 outline outline-2 rounded-lg outline-white/30 inline-flex items-center"
              >
                <LanguageIcons components={tool.iconType} />
                <span className="font-semibold">{tool.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      {/* Tailwind CSS Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default ToolBoxItems;
