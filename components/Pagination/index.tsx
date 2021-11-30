import React from "react";
import Pagination from "@material-ui/lab/Pagination";

//declaração de tipos das propriedades do component Pagination
interface IPropsComponent {
  handleChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
  page: number;
  total_pages: number;
}

//Component pagination
export default function PaginationComponent({
  handleChange,
  page,
  total_pages,
}: IPropsComponent) {
  return (
    <div>
      <Pagination
        count={total_pages}
        page={page}
        color="secondary"
        onChange={handleChange}
      />
    </div>
  );
}
