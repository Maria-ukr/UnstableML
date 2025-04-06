import React, { useEffect } from 'react';
import './CircleLoader.sass';

export default function CircleLoader() {
  useEffect(() => {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    let isRadarOn = true;

    const center = {
      cx: 30,
      cy: 30,
    };

    document.body.addEventListener('click', () => {
      isRadarOn = !isRadarOn;
      drawRadarScanner(center);
    });

    // draw center circle
    const drawContainerCircle = ({ cx, cy }) => {
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      ctx.arc(cx, cy, 25, 0, Math.PI * 2, true);
      ctx.stroke();

      drawCenterCircle({ cx, cy });
    };

    const drawCenterCircle = ({ cx, cy }) => {
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white';
      ctx.lineWidth = 1;
      ctx.arc(cx, cy, 2, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.fill();
    };

    const startAngle = 180;
    const endAngle = -startAngle;
    let angle = startAngle;
    let radius = 25;

    const drawRadarScanner = ({ x, y, cx, cy }) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.stroke();

      requestAnimationFrame(() => draw({ cx, cy }));
    };

    const draw = ({ cx, cy }) => {
      if (angle <= endAngle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawContainerCircle({ cx, cy });
        angle = startAngle;
      }

      if (!isRadarOn) {
        return;
      }

      angle -= 0.35;
      drawRadarScanner(getPointsOnCircle({ radius, angle, cx, cy }));
    };

    const getPointsOnCircle = ({ radius, angle, cx, cy }) => {
      angle = angle * (Math.PI / 180); // convert from degrees to radians
      const x = cx + radius * Math.sin(angle);
      const y = cy + radius * Math.cos(angle);
      return {
        x,
        y,
        cx,
        cy,
      };
    };

    drawContainerCircle(center);
    drawRadarScanner(getPointsOnCircle({ ...center, radius, angle }));
  }, []);
  return (
    <canvas
      className='circle absolute'
      id='animationCanvas'
      width='60'
      height='60'
    ></canvas>
  );
}
