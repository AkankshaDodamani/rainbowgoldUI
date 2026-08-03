/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Form from "../components/Form";
import SideNav from "../Components/SideNav.jsx";

const initialBrands = [
  {
    id: 1,
    name: "Wobniar",
    logo: "/images/wobniar-logo.png",
    productCount: 19,
    active: true,
  },
  {
    id: 2,
    name: "Brand Aaaquetin",
    logo: null,
    productCount: 3,
    active: false,
  },
  {
    id: 3,
    name: "Wutini Name",
    logo: "/images/wutini-logo.png",
    productCount: 2,
    active: true,
  },
  {
    id: 4,
    name: "Brand Hoversky",
    logo: "/images/hoversky-logo.png",
    productCount: 2,
    active: false,
  },
  {
    id: 5,
    name: "Waniar",
    logo: "/images/waniar-logo.png",
    productCount: 1,
    active: false,
  },
  {
    id: 6,
    name: "Brand Name",
    logo: "/images/lopin-logo.png",
    productCount: 10,
    active: false,
  },
  {
    id: 7,
    name: "Brand Name",
    logo: "/images/wodentar-logo.png",
    productCount: 2,
    active: true,
  },
];

const EditIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 6h18" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const UploadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M17 8l-5-5-5 5" />
    <path d="M12 3v12" />
  </svg>
);

const navItems = [
  { key: "brands", label: "Brands", icon: "❚" },
  { key: "products", label: "Products", icon: "▣" },
  { key: "contact", label: "Contact Inbox", icon: "✉" },
];


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
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.06)" : "transparent"};
  border-left: 3px solid
    ${({ $active }) => ($active ? "#d8ae4d" : "transparent")};

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

const brandFormFields = [
  { name: "name", label: "Brand Name", type: "text", required: true, placeholder: "Enter brand name" },
  { name: "logoFile", label: "Brand Logo", type: "file", placeholder: "Upload brand logo" },
  {
      name: "status",
      label: "Initial Status",
      type: "select",
      options: ["Active", "Inactive"],
    },
];

const ManageBrands = () => {
  const [brands, setBrands] = useState(initialBrands);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    logoFile: null,
    status: "Active",
  });

  const toggleBrandStatus = (id) => {
    setBrands((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b)),
    );
  };

  const deleteBrand = (id) => {
    setBrands((prev) => prev.filter((b) => b.id !== id));
  };

  const openPanel = () => setPanelOpen(true);
  const closePanel = () => {
    setPanelOpen(false);
    setForm({ name: "", logoFile: null, status: "Active" });
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    const newBrand = {
      id: Date.now(),
      name: form.name.trim(),
      logo: form.logoFile ? URL.createObjectURL(form.logoFile) : null,
      productCount: 0,
      active: form.status === "Active",
    };
    setBrands((prev) => [newBrand, ...prev]);
    closePanel();
    // TODO: replace with a real POST to your backend, e.g.
    // await brandService.createBrand({ name, logo, status })
  };

  return (
    <PageWrapper>
      <SideNav />

      <Content>
        <TopBar>
          <PageTitle>Manage Brands</PageTitle>
          <AdminProfile>
            <Avatar />
            Admin profile
            <Chevron>⌄</Chevron>
          </AdminProfile>
        </TopBar>

        <Toolbar>
          <AddButton onClick={openPanel}>
            <PlusIcon />
            Add New Brand
          </AddButton>
        </Toolbar>

        <TableCard>
          <Table>
            <thead>
              <tr>
                <Th>Brand Logo</Th>
                <Th>Brand Name</Th>
                <Th>Product Count</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <Tr key={brand.id}>
                  <Td>
                    <LogoThumb>
                      {brand.logo ? (
                        <img src={brand.logo} alt={`${brand.name} logo`} />
                      ) : (
                        <LogoPlaceholder />
                      )}
                    </LogoThumb>
                  </Td>
                  <Td>{brand.name}</Td>
                  <Td>{brand.productCount}</Td>
                  <Td>
                    <Toggle
                      type="button"
                      $checked={brand.active}
                      onClick={() => toggleBrandStatus(brand.id)}
                      aria-pressed={brand.active}
                      aria-label={`Toggle ${brand.name} status`}
                    >
                      <ToggleKnob $checked={brand.active} />
                    </Toggle>
                  </Td>
                  <Td>
                    <ActionsCell>
                      <IconButton title="Edit brand">
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        title="Delete brand"
                        $danger
                        onClick={() => deleteBrand(brand.id)}
                      >
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
          <PanelTitle>Add New Brand</PanelTitle>
          <CloseButton onClick={closePanel} aria-label="Close panel">
            <CloseIcon />
          </CloseButton>
        </PanelHeader>

        <PanelBody>
          <Form 
            fields = {brandFormFields}
            submitLabel = "Save"
            onSubmit={(data) => {console.log("added brand data:", data)}}/>
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