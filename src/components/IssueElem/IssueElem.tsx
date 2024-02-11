import { FC, useState } from "react";
import "./IssueElem.css";

interface IDataIssue {
  data: string;
}

const IssueElem: FC<IDataIssue> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return data ? (
    <div className="issue-block">
      <div className={`animated-div ${expanded ? "expanded" : "collapsed"}`}>
        <h3>The Height Issue</h3>
        <h4>{data}</h4>
      </div>
      <button className="toggle-btn" onClick={toggleExpand}>
        {expanded ? "Свернуть" : "Развернуть"}
      </button>
    </div>
  ) : null;
};

export default IssueElem;
