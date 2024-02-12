import { FC, useState } from "react";
import "./CssIssue.css";

interface IDataIssue {
  data: string;
}

const CssIssue: FC<IDataIssue> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return data ? (
    <div className="issue-block">
      <div className={`animated-div ${expanded ? "expanded" : "collapsed"}`}>
        <h3>Animation Issue CSS approach</h3>
        <h4>{data}</h4>
      </div>
      <button className="toggle-btn" onClick={toggleExpand}>
        {expanded ? "Свернуть" : "Развернуть"}
      </button>
    </div>
  ) : null;
};

export default CssIssue;
