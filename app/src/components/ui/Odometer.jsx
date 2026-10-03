import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

export default function Odometer({ value, prefix = "", suffix = "", decimals = 0, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(latest);
        }
      });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  );
}
