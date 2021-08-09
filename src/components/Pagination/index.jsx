import LoadMoreBtn from "../ButtonMore";

const Pagination = ({onLoad, disabled}) => (
  <LoadMoreBtn onLoad={onLoad} disabled={disabled}>Load more</LoadMoreBtn>
);

export default Pagination;
