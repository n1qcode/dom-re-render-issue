import { FC } from "react";
import "./HeightIssue.css";

interface IDataIssue {
  data: string;
}

const HeightIssue: FC<IDataIssue> = ({ data }) => {
  return data ? (
    <div className="issue-block">
      <h3>The Height Issue</h3>
      <h4>{data}</h4>
    </div>
  ) : null;
};

export default HeightIssue;
