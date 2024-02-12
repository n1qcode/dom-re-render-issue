import { forwardRef, useEffect, useRef } from "react";
import "./FlipRafIssue.css";

interface IDataIssue {
  data: string;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const FlipRafIssue = forwardRef<HTMLDivElement, IDataIssue>(
  function FlipRafIssue({ data, isExpanded, toggleExpand }, ref) {
    const infoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!isExpanded || !infoRef.current) return;
      const infoEl = infoRef.current;
      const infoParams = infoEl.getBoundingClientRect();

      const first = infoParams.top;

      infoEl.classList.add("info-expanded");

      const last = infoParams.top;

      const invert = first - last;

      infoEl.style.transform = `translateY(${invert}px)`;

      requestAnimationFrame(function () {
        infoEl.classList.add("animate-on-transforms");

        infoEl.style.transform = "";
      });
    }, [isExpanded]);

    return (
      <div ref={ref} className="collapsed">
        {data ? (
          <div className="issue-block">
            <div ref={infoRef} className="info info-collapsed">
              <h3>Animation Issue Flip approach</h3>
              <h4>{data}</h4>
              {!isExpanded && (
                <button className="toggle-btn" onClick={() => toggleExpand()}>
                  Expand
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
);

export default FlipRafIssue;
