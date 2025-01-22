import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQueryState } from "nuqs";
import React from "react";
import { Button } from "../ui/button";

const PagePagination = ({ totalPages }: { totalPages: number }) => {
  const [page, setPage] = useQueryState("page", { defaultValue: "1" });


  const prevHandler = () => {
    +page > 1 ? setPage(String(+page - 1)) : null;
  };

  const nextHandler = () => {
    +page < totalPages ? setPage(String(+page + 1)) : null;
  };
  const switchToPage = (pg: number) => {
    setPage(String(pg));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={prevHandler} />
        </PaginationItem>

        {Array.from({ length: totalPages > 3 ? 3 : totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <Button
              className="mx-1"
              size={"base"}
              variant={index + 1 == +page ? "orange" : "secondary"}
              onClick={() => switchToPage(index + 1)}
            >
              {index + 1}
            </Button>
          </PaginationItem>
        ))}

        {totalPages > 3 && (
          <>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
          <Button
            className="mx-1"
            size={"base"}
            variant={totalPages == +page ? "orange" : "secondary"}
            onClick={() => switchToPage(totalPages)}
          >
            {totalPages}
          </Button>
        </PaginationItem>
        </>
        )}
        <PaginationItem>
          <PaginationNext onClick={nextHandler} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PagePagination;
