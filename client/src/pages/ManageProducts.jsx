/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllProducts, deleteProduct, createProduct } from "../Services/Product.js";
import { getAllBrands } from "../Services/Brand.js";
import AdminProfileMenu from "../Components/AdminMenuPage.jsx";

// ==========================================
// STYLED COMPONENTS
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
  padding: 0 16px 0 36px;
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
  text-align: center !important;
`;

const Th = styled.th`
  text-align: center !important;
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
  justify-items: center;
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
  justify-content: center;
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
  width: 500px;
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
`;

const FieldRow = styled.div`
  display: flex;
  gap: 16px;

  > div {
    flex: 1;
  }
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

// ---------- Icons ----------
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
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    flavor: "",
    imageFile: null,
  });

  // --- SEARCH & FILTER STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filterBrand, setFilterBrand] = useState("All");
  
  // --- NEW: FLAVOR FILTER STATE ---
  const [filterFlavor, setFilterFlavor] = useState("All");

  useEffect(() => {
    getAllBrands()
      .then((result) => {
        const fetchedBrands = result.data.data || [];
        setBrands(fetchedBrands);
        if (fetchedBrands.length > 0) {
          setForm((prev) => ({ ...prev, brand: fetchedBrands[0].brandname }));
        }
      })
      .catch((err) => {
        console.error("Failed to fetch brands:", err);
      });

    getAllProducts()
      .then((result) => {
        setProducts(result.data.data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  // --- DEBOUNCE SEARCH LOGIC ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // --- DYNAMICALLY EXTRACT UNIQUE FLAVORS ---
  // Filter out empty or null flavors so we don't have blank options
  const uniqueFlavors = [...new Set(
    products
      .map((p) => p.flavor)
      .filter((f) => f && f.trim() !== "")
  )];

  // --- FILTERED PRODUCTS ARRAY ---
  const filteredProducts = products.filter((product) => {
    // 1. Search text match (by product name)
    const matchesSearch = product.productname
      ?.toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    // 2. Brand match
    const matchesBrand = filterBrand === "All" || product.brandname === filterBrand;
    
    // 3. Flavor match
    const matchesFlavor = filterFlavor === "All" || product.flavor === filterFlavor;

    // Must match all three filters
    return matchesSearch && matchesBrand && matchesFlavor;
  });

  const handleDeleteProduct = async (slug) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!isConfirmed) return;
    try {
      const response = await deleteProduct(slug);
      if (response.data.success) {
        setProducts((prev) => prev.filter((p) => p.slug !== slug));
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const openPanel = () => setPanelOpen(true);
  
  const closePanel = () => {
    setPanelOpen(false);
    setForm({ name: "", brand: brands.length > 0 ? brands[0].brandname : "", price: "", flavor: "", imageFile: null });
  };

  const handleSave = async () => {
    if (!form.name.trim()) return;

    const formData = new FormData();
    formData.append("productname", form.name.trim());
    formData.append("brandname", form.brand);
    formData.append("flavor", form.flavor);
    formData.append("productprice", Number(form.price) || 0);
    if (form.imageFile) {
      formData.append("productphotolink", form.imageFile);
    }

    setProducts((prev) => [
      { 
        _id: `temp-${Date.now()}`,
        slug: `temp-${Date.now()}`,
        productname: form.name.trim(),
        brandname: form.brand,
        flavor: form.flavor,
        productprice: Number(form.price) || 0,
        productphotolink: form.imageFile ? URL.createObjectURL(form.imageFile) : null 
      },
      ...prev,
    ]);
    
    closePanel();
    await createProduct(formData);
  };

  return (
    <PageWrapper>
      <Content>
        <TopBar>
          <PageTitle>Manage Products</PageTitle>
          <AdminProfileMenu />
        </TopBar>

        <ToolbarWrapper>
          <FilterControls>
            <SearchWrapper>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchInput
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchWrapper>

            {/* Product Filter uses Brands dynamically */}
            <FilterSelect
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
            >
              <option value="All">All Brands</option>
              {brands.map((brand) => (
                <option key={brand._id || brand.slug} value={brand.brandname}>
                  {brand.brandname}
                </option>
              ))}
            </FilterSelect>
            
            {/* --- NEW: FLAVOR FILTER --- */}
            <FilterSelect
              value={filterFlavor}
              onChange={(e) => setFilterFlavor(e.target.value)}
            >
              <option value="All">All Flavors</option>
              {uniqueFlavors.map((flavor, index) => (
                <option key={index} value={flavor}>
                  {flavor}
                </option>
              ))}
            </FilterSelect>
          </FilterControls>

          <AddButton onClick={openPanel}>
            <PlusIcon />
            Add New Product
          </AddButton>
        </ToolbarWrapper>

        <TableCard>
          <Table>
            <thead>
              <tr>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Brand</Th>
                <Th>Price</Th>
                <Th>Flavor</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Tr key={product._id || product.slug}>
                    <Td>
                      <LogoThumb>
                        {product.productphotolink ? (
                          <img
                            src={product.productphotolink}
                            alt={`${product.productname}`}
                          />
                        ) : (
                          <LogoPlaceholder />
                        )}
                      </LogoThumb>
                    </Td>
                    <Td>{product.productname}</Td>
                    <Td>{product.brandname}</Td>
                    <Td>
                      {product.productprice != null
                        ? `₹${product.productprice}`
                        : "--"}
                    </Td>
                    <Td>{product.flavor || "--"}</Td>
                    <Td>
                      <ActionsCell>
                        <IconButton title="Edit product">
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          title="Delete product"
                          $danger
                          onClick={() => handleDeleteProduct(product.slug)}
                        >
                          <TrashIcon />
                        </IconButton>
                      </ActionsCell>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan="6" style={{ textAlign: "center", padding: "40px", color: "#8a8375" }}>
                    No products match your search criteria.
                  </Td>
                </Tr>
              )}
            </tbody>
          </Table>
        </TableCard>
      </Content>

      {isPanelOpen && <Overlay onClick={closePanel} />}
      <SidePanel $open={isPanelOpen}>
        <PanelHeader>
          <PanelTitle>Add New Product</PanelTitle>
          <CloseButton onClick={closePanel} aria-label="Close panel">
            <CloseIcon />
          </CloseButton>
        </PanelHeader>

        <PanelBody>
          <FieldGroup>
            <Label>Product Name</Label>
            <Input
              type="text"
              placeholder="e.g. Rove Truffle - Classic"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Brand</Label>
            <Select
              value={form.brand}
              onChange={(e) => { setForm((f) => ({ ...f, brand: e.target.value }))}}
            >
              {brands.map((brand) => (
                <option key={brand.brandname} value={brand.brandname}>
                  {brand.brandname}
                </option>
              ))}
            </Select>
          </FieldGroup>

          <FieldRow>
            <FieldGroup>
              <Label>Price (₹)</Label>
              <Input
                type="number"
                placeholder="0"
                value={form.price}
                onChange={(e) =>
                  setForm((f) => ({ ...f, price: e.target.value }))
                }
              />
            </FieldGroup>
            <FieldGroup>
              <Label>Flavor</Label>
              <Input
                type="text"
                placeholder="e.g. Chocolate"
                value={form.flavor}
                onChange={(e) =>
                  setForm((f) => ({ ...f, flavor: e.target.value }))
                }
              />
            </FieldGroup>
          </FieldRow>

          <FieldGroup>
            <Label>Upload Image</Label>
            <UploadBox htmlFor="product-image-upload">
              <UploadIcon />
              {form.imageFile ? form.imageFile.name : "Upload Image"}
            </UploadBox>
            <HiddenFileInput
              id="product-image-upload"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  imageFile: e.target.files?.[0] || null,
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

export default ManageProducts;