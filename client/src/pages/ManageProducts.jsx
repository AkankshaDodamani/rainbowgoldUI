/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "../Components/SideNav.jsx";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", sans-serif;
  background: #eceae4;
  position: relative;
  overflow-x: hidden;
`;

const BrandMark = styled.div`
  font-family: Georgia, "Times New Roman", serif;
  font-size: 24px;
  font-weight: 700;
  color: #d8ae4d;
  margin-bottom: 36px;
`;

const SidebarSubtitle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #a89f8f;
  margin-top: 2px;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#fff" : "#c7bfae")};
  background: ${({ $active }) => ($active ? "rgba(255,255,255,0.06)" : "transparent")};
  border-left: 3px solid ${({ $active }) => ($active ? "#d8ae4d" : "transparent")};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const NavIcon = styled.span`
  width: 18px;
  text-align: center;
  font-size: 14px;
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

const AdminProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #e3e0d8;
  border-radius: 10px;
  padding: 8px 14px;
  font-size: 13px;
  color: #3a352d;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #e7e2d4;
`;

const Chevron = styled.span`
  color: #8a8375;
  font-size: 12px;
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

const OutOfStockTag = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  color: #c1443a;
  background: #fbeae8;
  border-radius: 999px;
  padding: 3px 10px;
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

// ---------- Mock data (swap for your API call, e.g. services/productService.js) ----------
const initialProducts = [
  { id: 1, name: "Rove Truffle - Classic", brand: "Wobniar", image: "/images/rove-truffle.png", price: 249, flavor: 120, active: true },
  { id: 2, name: "Benrove Almond Bar", brand: "Wobniar", image: null, price: 149, flavor: 0, active: false },
  { id: 3, name: "Bentley Praline Box", brand: "Wutini Name", image: "/images/bentley-praline.png", price: 399, flavor: 45, active: true },
  { id: 4, name: "Avlon White Mixey", brand: "Brand Hoversky", image: "/images/avlon-mixey.png", price: 199, flavor: 12, active: false },
  { id: 5, name: "Lovebliss Gift Pack", brand: "Waniar", image: "/images/lovebliss.png", price: 599, flavor: 8, active: false },
  { id: 6, name: "Delisso Eclairs Tin", brand: "Brand Name", image: "/images/delisso-eclairs.png", price: 179, flavor: 60, active: true },
];

// ---------- Icons (inline SVG, no extra dependency) ----------
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

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "▦" },
  { key: "brands", label: "Brands", icon: "❚" },
  { key: "products", label: "Products", icon: "▣" },
  { key: "contact", label: "Contact Inbox", icon: "✉" },
];

const brandOptions = ["Wobniar", "Wutini Name", "Brand Hoversky", "Waniar", "Brand Name"];

const ManageProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    brand: brandOptions[0],
    price: "",
    flavor: "",
    imageFile: null,
    status: "Active",
  });

  const toggleProductStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const openPanel = () => setPanelOpen(true);
  const closePanel = () => {
    setPanelOpen(false);
    setForm({ name: "", brand: brandOptions[0], price: "", stock: "", imageFile: null, status: "Active" });
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    const newProduct = {
      id: Date.now(),
      name: form.name.trim(),
      brand: form.brand,
      image: form.imageFile ? URL.createObjectURL(form.imageFile) : null,
      price: Number(form.price) || 0,
      stock: Number(form.stock) || 0,
      active: form.status === "Active",
    };
    setProducts((prev) => [newProduct, ...prev]);
    closePanel();
    // TODO: replace with a real POST to your backend, e.g.
    // await productService.createProduct({ name, brand, price, stock, image, status })
  };

  return (
    <PageWrapper>
      <SideNav />

      <Content>
        <TopBar>
          <PageTitle>Manage Products</PageTitle>
          <AdminProfile>
            <Avatar />
            Admin profile
            <Chevron>⌄</Chevron>
          </AdminProfile>
        </TopBar>

        <Toolbar>
          <AddButton onClick={openPanel}>
            <PlusIcon />
            Add New Product
          </AddButton>
        </Toolbar>

        <TableCard>
          <Table>
            <thead>
              <tr>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Brand</Th>
                <Th>Price</Th>
                <Th>Flavor</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>
                    <LogoThumb>
                      {product.image ? (
                        <img src={product.image} alt={`${product.name}`} />
                      ) : (
                        <LogoPlaceholder />
                      )}
                    </LogoThumb>
                  </Td>
                  <Td>{product.name}</Td>
                  <Td>{product.brand}</Td>
                  <Td>₹{product.price}</Td>
                  <Td>
                    {product.stock > 0 ? (
                      product.stock
                    ) : (
                      <OutOfStockTag>Out of stock</OutOfStockTag>
                    )}
                  </Td>
                  <Td>
                    <Toggle
                      type="button"
                      $checked={product.active}
                      onClick={() => toggleProductStatus(product.id)}
                      aria-pressed={product.active}
                      aria-label={`Toggle ${product.name} status`}
                    >
                      <ToggleKnob $checked={product.active} />
                    </Toggle>
                  </Td>
                  <Td>
                    <ActionsCell>
                      <IconButton title="Edit product">
                        <EditIcon />
                      </IconButton>
                      <IconButton title="Delete product" $danger onClick={() => deleteProduct(product.id)}>
                        <TrashIcon />
                      </IconButton>
                    </ActionsCell>
                  </Td>
                </Tr>
              ))}
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
              onChange={(e) => setForm((f) => ({ ...f, brand: e.target.value }))}
            >
              {brandOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
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
                onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
              />
            </FieldGroup>
            <FieldGroup>
              <Label>Flavor</Label>
              <Input
                type="text"
                placeholder="e.g. Chocolate"
                value={form.flavor}
                onChange={(e) => setForm((f) => ({ ...f, flavor: e.target.value }))}
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
                setForm((f) => ({ ...f, imageFile: e.target.files?.[0] || null }))
              }
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Initial Status</Label>
            <Select
              value={form.status}
              onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Select>
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
