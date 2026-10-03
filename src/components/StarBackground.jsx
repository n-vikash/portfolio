
import { useMemo } from "react";

function StarBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${2 + Math.random() * 4}s`,
        size: `${1 + Math.random() * 2}px`,
      })),
    []
  );

  return (
    <div className="star-background" aria-hidden="true">
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />
      <div className="ambient-glow glow-three" />

      {stars.map((star) => (
        <span
          className="star"
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;