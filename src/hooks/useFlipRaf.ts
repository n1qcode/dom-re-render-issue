import { useState } from "react";

interface IUseFlipRaf {
  topBlockEl: HTMLDivElement | null;
  listEl: HTMLDivElement | null;
}

const useFlipRaf = (props: IUseFlipRaf) => {
  const { listEl, topBlockEl } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (!topBlockEl || !listEl) return;

    const topBlocParams = topBlockEl.getBoundingClientRect();
    const listElParams = listEl.getBoundingClientRect();

    const topBlockFirst = topBlocParams.top;
    const listFirst = listElParams.top;

    topBlockEl.classList.add("expanded");
    listEl.classList.add("list-end");

    const topBlockLast = topBlocParams.top;
    const listLast = listElParams.top;

    const invertTopBlock = topBlockFirst - topBlockLast;
    const invertListBlock = listFirst - listLast;

    topBlockEl.style.transform = `translateY(${invertTopBlock}px)`;
    listEl.style.transform = `translateY(${invertListBlock}px)`;

    requestAnimationFrame(function () {
      topBlockEl.classList.add("animate-on-transforms");
      listEl.classList.add("animate-on-transforms");

      topBlockEl.style.transform = "";
      listEl.style.transform = "";
    });

    setIsExpanded(true);
  };

  return { isExpanded, toggleExpand };
};

export default useFlipRaf;
