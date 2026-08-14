/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { 
  getAllBrands, 
  createBrand, 
  deleteBrand, 
  updateBrand 
} from "../Services/Brand.js";
import AdminProfileMenu from "../components/AdminMenuPage.jsx";
import Pagination from "../components/Pagination.jsx";
import {toast} from "react-toastify";

// ==========================================
// STYLED COMPONENTS (Kept exactly as you designed them)
// ==========================================
const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", sans-serif;
  background: #eceae4;
  position: relative;
  overflow-x: hidden;
`;

const Content = styled.main`
  flex: 1;
  min-width: 0;
  padding: 28px 36px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1f1b16;
  margin: 0;
`;

const Toolbar = styled.div`
  margin-bottom: 18px;
`;

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #241c14;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 11px 18px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #362a1c;
  }
`;

const TableCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e6e3da;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  font-size: 12px;
  text-transform: none;
  font-weight: 600;
  color: #6b665b;
  background: #f4f2ec;
  padding: 14px 20px;
  border-bottom: 1px solid #e6e3da;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #faf9f5;
  }
  &:hover {
    background: #f3f1ea;
  }
`;

const Td = styled.td`
  padding: 14px 20px;
  font-size: 14px;
  color: #2b2822;
  border-bottom: 1px solid #efede5;
  vertical-align: middle;
`;

const LogoThumb = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: #f0eee7;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LogoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    #e7e4db,
    #e7e4db 4px,
    #f0eee7 4px,
    #f0eee7 8px
  );
`;

const ActionsCell = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $danger }) => ($danger ? "#c1443a" : "#3a352d")};
  display: flex;
  padding: 2px;

  &:hover {
    opacity: 0.7;
  }
`;

const Toggle = styled.button`
  width: 40px;
  height: 22px;
  border-radius: 999px;
  border: none;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: ${({ $checked }) => ($checked ? "flex-end" : "flex-start")};
  background: ${({ $checked }) => ($checked ? "#241c14" : "#d9d5c9")};
  cursor: pointer;
  transition: background 0.15s ease;
`;

const ToggleKnob = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  display: block;
`;

// ---- Slide-in panel ----

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 16, 10, 0.25);
  z-index: 10;
`;

const SidePanel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 360px;
  max-width: 90vw;
  background: #fff;
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.08);
  z-index: 11;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.25s ease;
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px;
  border-bottom: 1px solid #eee;
`;

const PanelTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #1f1b16;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4a453b;
  display: flex;
`;

const PanelBody = styled.div`
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #2b2822;
`;

const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dedad0;
  padding: 0 12px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #241c14;
  }
`;

const Select = styled.select`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dedad0;
  padding: 0 12px;
  font-size: 14px;
  background: #fff;
  outline: none;
`;

const UploadBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  border-radius: 8px;
  border: 1px dashed #dedad0;
  padding: 0 12px;
  font-size: 14px;
  color: #6b665b;
  cursor: pointer;
  background: #faf9f6;

  &:hover {
    border-color: #b8b09c;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const PanelFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 18px 24px;
  border-top: 1px solid #eee;
`;

const SecondaryButton = styled.button`
  height: 40px;
  padding: 0 18px;
  border-radius: 8px;
  border: 1px solid #dedad0;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #f7f6f2;
  }
`;

const PrimaryButton = styled.button`
  height: 40px;
  padding: 0 22px;
  border-radius: 8px;
  border: none;
  background: #241c14;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #362a1c;
  }
`;

// Replace your existing Toolbar with ToolbarWrapper for flex layout
const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const FilterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  color: #a89f8f;
  display: flex;
`;

const SearchInput = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e6e3da;
  padding: 0 16px 0 36px; /* Extra left padding for the icon */
  font-size: 14px;
  outline: none;
  min-width: 260px;
  color: #2b2822;

  &:focus {
    border-color: #d8ae4d;
  }
  &::placeholder {
    color: #a89f8f;
  }
`;

const FilterSelect = styled.select`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e6e3da;
  padding: 0 16px;
  font-size: 14px;
  background: #fff;
  outline: none;
  cursor: pointer;
  color: #2b2822;

  &:focus {
    border-color: #d8ae4d;
  }
`;

// ---------- Icons (inline SVG) ----------
const EditIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const UploadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M17 8l-5-5-5 5" />
    <path d="M12 3v12" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

const ManageBrands = () => {
  const [brands, setBrands] = useState([]);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [form, setForm] = useState({
    name: "",
    logoFile: null,
    existingLogoUrl: null
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Fetch all active (isDeleted: false) brands from backend on mount
  useEffect(() => {
    getAllBrands()
      .then((result) => {
        setBrands(result.data.data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch brands:", err);
      });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer); // Cleanup if user types again before 300ms
  }, [searchTerm]);
// 3. FILTERING LOGIC:
  const filteredBrands = brands.filter((brand) => {
    // Check Search (case-insensitive)
    const matchesSearch = brand.brandname
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    return matchesSearch;
  });

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

  // Math to calculate slices
  const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBrands = filteredBrands.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle soft deleting a brand
  const handleDeleteBrand = async (slug) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this brand?");
    if (!isConfirmed) return;

    try {
      const response = await deleteBrand(slug);
      if (response.data.success) {
        setBrands((prev) => prev.filter((b) => b.slug !== slug));
        toast.success("Brand deleted successfully!");
      }
    } catch (error) {
      console.error("Failed to delete brand:", error);
      toast.error("Failed to delete brand. Please try again.");
    }
  };

  const openPanelForAdd = () => {
    setEditingBrand(null);
    setForm({ name: "", logoFile: null, status: "Active" });
    setPanelOpen(true);
  };  

  const openPanelForEdit = (brand) => {
  setEditingBrand(brand);

  setForm({ 
    name: brand.brandname, 
    logoFile: null, 
  });
  setPanelOpen(true);
  };

  const closePanel = () => {
    setPanelOpen(false);
    setEditingBrand(null);
    setForm({ name: "", logoFile: null, status: "Active" });
  };

  // Handle saving a new brand
  const handleSave = async () => {
      if (!form.name.trim()) return;

      const formData = new FormData();

      try {
        if (editingBrand) {
          formData.append("brandname", form.name.trim());
          
          if (form.logoFile) {
            formData.append("brandlogo", form.logoFile);
          }
          const response = await updateBrand(editingBrand.slug, formData);
          
          if (response.data.success) {
            setBrands((prev) => 
              prev.map((b) => (b.slug === editingBrand.slug ? response.data.data : b))
            );
            closePanel();
            toast.success("Brand updated successfully!");
          }
        } else {
          // --- CREATE NEW BRAND ---
          formData.append("brandname", form.name.trim());
          formData.append("numberofproducts", "0");
          formData.append("isDeleted", form.status === "Inactive" ? "true" : "false");
          
          if (form.logoFile) {
            formData.append("brandlogo", form.logoFile);
          }

          const response = await createBrand(formData);

          if (response.data.success) {
            if (!response.data.data.isDeleted) {
              setBrands((prev) => [response.data.data, ...prev]);
            }
            closePanel();
            toast.success("Brand created successfully!");
          }
        }
      } catch (error) {
        console.error("Failed to save brand:", error);
        toast.error(`Failed to ${editingBrand ? 'update' : 'create'} brand. Please try again.`);
      }
    };  

return (
    <PageWrapper>
      <Content>
        <TopBar>
          <PageTitle>Manage Brands</PageTitle>
          <AdminProfileMenu />
        </TopBar>

        {/* --- REPLACED TOOLBAR WITH SEARCH/FILTER COMPONENT --- */}
        <ToolbarWrapper>
          <FilterControls>
            <SearchWrapper>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchInput
                type="text"
                placeholder="Search brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchWrapper>
          </FilterControls>

          <AddButton onClick={openPanelForAdd}>
            <PlusIcon />
            Add New Brand
          </AddButton>
        </ToolbarWrapper>

        <TableCard>
          <Table>
            <thead>
              <tr>
                <Th>Brand Logo</Th>
                <Th>Brand Name</Th>
                <Th>Product Count</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {/* --- MAPPING OVER FILTERED BRANDS --- */}
              {currentBrands.length > 0 ? (
                currentBrands.map((brand) => (
                  <Tr key={brand._id || brand.slug}>
                    <Td>
                      <LogoThumb>
                        {brand.brandlogo ? (
                          <img src={brand.brandlogo} alt={`${brand.brandname} logo`} />
                        ) : (
                          <LogoPlaceholder />
                        )}
                      </LogoThumb>
                    </Td>
                    <Td>{brand.brandname}</Td>
                    <Td>{brand.numberofproducts || 0}</Td>
                    <Td>
                      <ActionsCell>
                        <IconButton title="Edit brand" onClick={() => openPanelForEdit(brand)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          title="Delete brand"
                          $danger
                          onClick={() => handleDeleteBrand(brand.slug)}
                        >
                          <TrashIcon />
                        </IconButton>
                      </ActionsCell>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan="5" style={{ textAlign: "center", padding: "40px", color: "#8a8375" }}>
                    No brands match your search criteria.
                  </Td>
                </Tr>
              )}
            </tbody>
          </Table>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredBrands.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </TableCard>
      </Content>

      {isPanelOpen && <Overlay onClick={closePanel} />}
      <SidePanel $open={isPanelOpen}>
        <PanelHeader>
          <PanelTitle>{editingBrand ? "Edit Brand" : "Add New Brand"}</PanelTitle>
          <CloseButton onClick={closePanel} aria-label="Close panel">
            <CloseIcon />
            </CloseButton>
        </PanelHeader>

        <PanelBody>
          <FieldGroup>
            <Label>Brand Name</Label>
            <Input
              type="text"
              placeholder="Enter brand name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Upload Logo</Label>
            <UploadBox htmlFor="brand-logo-upload">
              <UploadIcon />
              {form.logoFile ? form.logoFile.name : "Upload Logo"}
            </UploadBox>
            <HiddenFileInput
              id="brand-logo-upload"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  logoFile: e.target.files?.[0] || null,
                }))
              }
            />
          </FieldGroup>

        </PanelBody>

        <PanelFooter>
          <SecondaryButton onClick={closePanel}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
        </PanelFooter>
      </SidePanel>
    </PageWrapper>
  );
}

export default ManageBrands;