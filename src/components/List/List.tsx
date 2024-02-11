import { FC } from "react";
import { IData } from "../../App";
import "./List.css";

interface IList {
  data?: IData[];
}

const List: FC<IList> = ({ data }) => {
  return (
    <div className="list">
      {data?.length ? (
        data?.map((el) => {
          return (
            <div key={el.id} className="data-item">
              <h3>{el.title}</h3>
              <h4>{el.body}</h4>
            </div>
          );
        })
      ) : (
        <h3>Nothing found yet!</h3>
      )}
    </div>
  );
};

export default List;
