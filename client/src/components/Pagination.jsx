// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

// ==========================================
// STYLED COMPONENTS
// ==========================================
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #fff;
  border-top: 1px solid #e6e3da;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    padding: 16px 12px;
  }
`;

const PageInfo = styled.div`
  font-size: 13px;
  color: #6b665b;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const PageControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid ${({ $active }) => ($active ? "#241c14" : "#e6e3da")};
  background: ${({ $active }) => ($active ? "#241c14" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#3a352d")};
  font-size: 13px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#362a1c" : "#f4f2ec")};
  }

  @media (max-width: 640px) {
    min-width: 36px;
    height: 36px;
  }
`;

// NEW: Styled component for the "..."
const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: #8a8375;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
`;

// ==========================================
// MAIN COMPONENT
// ==========================================
const Pagination = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  itemsPerPage, 
  onPageChange 
}) => {
  if (totalItems === 0) return null;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // --- PAGINATION LOGIC ---
  const getVisiblePages = (current, total) => {
    // If 5 or fewer pages, just show all of them
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    // If we are near the beginning
    if (current <= 3) {
      return [1, 2, 3, 4, "...", total];
    }

    // If we are near the end
    if (current >= total - 2) {
      return [1, "...", total - 3, total - 2, total - 1, total];
    }

    // If we are somewhere in the middle
    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <PaginationWrapper>
      <PageInfo>
        Showing <strong>{startIndex + 1}</strong> to <strong>{endIndex}</strong> of <strong>{totalItems}</strong> entries
      </PageInfo>
      
      <PageControls>
        <PageButton 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Prev
        </PageButton>

        {visiblePages.map((page, index) => (
          page === "..." ? (
            // Render the ellipsis
            <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
          ) : (
            // Render standard page buttons
            <PageButton 
              key={page} 
              $active={currentPage === page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageButton>
          )
        ))}

        <PageButton 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </PageControls>
    </PaginationWrapper>
  );
};

export default Pagination;