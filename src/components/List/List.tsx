import { forwardRef } from "react";
import "./List.css";
import { IData } from "../../hooks/useSearchImitation";

interface IList {
  data?: IData[];
}

const List = forwardRef<HTMLDivElement, IList>(function List({ data }, ref) {
  return (
    <div className="list list-start" ref={ref}>
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
});

export default List;
