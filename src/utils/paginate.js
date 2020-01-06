import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  //items === array of items
  //pageNumber === number of current page
  //pageSize === number of items in 1 page

  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
