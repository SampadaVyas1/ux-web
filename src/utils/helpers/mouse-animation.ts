import { IScrollPositionAxis } from "../types/common";

export const lerp = (
  startValue: number,
  endValue: number,
  interpolationFactor: number
) => (1 - interpolationFactor) * startValue + interpolationFactor * endValue;

const compute = (
  targetElement: HTMLDivElement,
  currentPos: { x: number; y: number },
  mousePosition: { mouseX: number; mouseY: number },
  amount: number
) => {
  currentPos.x = lerp(currentPos.x, mousePosition.mouseX, amount);
  targetElement.style.left = `${currentPos.x}px`;

  currentPos.y = lerp(currentPos.y, mousePosition.mouseY, amount);
  targetElement.style.top = `${currentPos.y}px`;

  window.requestAnimationFrame(() =>
    compute(targetElement, currentPos, mousePosition, amount)
  );
};

export const updateCursorWithMousePosition = (
  targetElement: HTMLDivElement,
  mousePosition: { mouseX: number; mouseY: number }
) => {
  const currentPos = { x: 0, y: 0 };
  const data = targetElement.getAttribute("data-amt");
  const amount = data ? +data : 1;

  compute(targetElement, currentPos, mousePosition, amount);
};

export const handleMouseMove = (
  e: { clientX: number; clientY: number },
  mousePosition: { mouseX: number; mouseY: number },
  pointPosition: { mouseX: number; mouseY: number },
  elementE1: React.RefObject<HTMLDivElement | null>,
  scrollPositionObj: IScrollPositionAxis = {
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  }
) => {
  mousePosition.mouseX = e.clientX + scrollPositionObj.scrollX;
  mousePosition.mouseY = e.clientY + scrollPositionObj.scrollY;

  if (elementE1.current) {
    pointPosition.mouseX = e.clientX;
    pointPosition.mouseY = e.clientY;
  }
};
