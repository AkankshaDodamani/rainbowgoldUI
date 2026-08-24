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
`;

const PageInfo = styled.div`
  font-size: 13px;
  color: #6b665b;
`;

const PageControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

        {[...Array(totalPages)].map((_, index) => (
          <PageButton 
            key={index + 1} 
            $active={currentPage === index + 1}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </PageButton>
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