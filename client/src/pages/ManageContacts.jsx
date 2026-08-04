// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";

// ---------- Mock data (swap for your API call, e.g. services/contactService.js) ----------
const initialSubmissions = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98200 11223",
    subject: "Bulk order inquiry - Diwali gift boxes",
    message:
      "Hi, I'm looking to place a bulk order of your Diwali gift boxes for a corporate event, around 200 units. Could you share pricing and delivery timelines for Thane district?",
    date: "2026-07-28",
    status: "New",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    phone: "+91 90000 44556",
    subject: "Distributor partnership",
    message:
      "We run a chain of gourmet stores across Pune and would like to explore becoming an authorized distributor for the Wobniar range. Please let us know the next steps.",
    date: "2026-07-27",
    status: "New",
  },
  {
    id: 3,
    name: "Ananya Iyer",
    email: "ananya.iyer@example.com",
    phone: "+91 98765 22110",
    subject: "Product availability - Rove Truffle",
    message:
      "I couldn't find the Rove Truffle Classic pack on your website. Is it currently out of stock, or only sold in physical stores?",
    date: "2026-07-25",
    status: "Reviewed",
  },
  {
    id: 4,
    name: "Karan Desai",
    email: "karan.desai@example.com",
    phone: "+91 91234 55667",
    subject: "Packaging feedback",
    message:
      "Just wanted to say the new Benrove packaging looks fantastic. One small suggestion — the tear notch on the wrapper could be a bit larger for easier opening.",
    date: "2026-07-22",
    status: "Reviewed",
  },
];

// const navItems = [
//   { key: "dashboard", label: "Dashboard", icon: "▦" },
//   { key: "brands", label: "Brands", icon: "❚" },
//   { key: "products", label: "Products", icon: "▣" },
//   { key: "contact", label: "Contact Inbox", icon: "✉" },
// ];

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};

const ManageContacts = () => {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [selectedId, setSelectedId] = useState(initialSubmissions[0]?.id ?? null);

  const selected = submissions.find((s) => s.id === selectedId) || null;

  const openSubmission = (id) => {
    setSelectedId(id);
  };

  const markAsReviewed = (id) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Reviewed" } : s))
    );
    // TODO: replace with a real PATCH to your backend, e.g.
    // await contactService.markReviewed(id)
  };

  const deleteSubmission = (id) => {
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
    if (selectedId === id) {
      const remaining = submissions.filter((s) => s.id !== id);
      setSelectedId(remaining[0]?.id ?? null);
    }
  };

  // ---------------------------------------------------------------------------
// Styled components
// ---------------------------------------------------------------------------


  
const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", sans-serif;
  background: #eceae4;
  position: relative;
  overflow-x: hidden;
`;

// const BrandMark = styled.div`
//   font-family: Georgia, "Times New Roman", serif;
//   font-size: 24px;
//   font-weight: 700;
//   color: #d8ae4d;
//   margin-bottom: 36px;
// `;

// const NavList = styled.nav`
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
// `;

// const NavItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 11px 12px;
//   border-radius: 8px;
//   font-size: 14px;
//   cursor: pointer;
//   color: ${({ $active }) => ($active ? "#fff" : "#c7bfae")};
//   background: ${({ $active }) => ($active ? "rgba(255,255,255,0.06)" : "transparent")};
//   border-left: 3px solid ${({ $active }) => ($active ? "#d8ae4d" : "transparent")};

//   &:hover {
//     background: rgba(255, 255, 255, 0.05);
//   }
// `;

// const NavIcon = styled.span`
//   width: 18px;
//   text-align: center;
//   font-size: 14px;
// `;

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

// ---- Inbox layout ----

const InboxCard = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e6e3da;
  min-height: 560px;
`;

const ListPane = styled.div`
  border-right: 1px solid #e6e3da;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const ListPaneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  font-size: 12px;
  font-weight: 600;
  color: #6b665b;
  background: #f4f2ec;
  border-bottom: 1px solid #e6e3da;
`;

const SubmissionList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

const SubmissionItem = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #efede5;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#f4f1e9" : "#fff")};
  border-left: 3px solid ${({ $active }) => ($active ? "#8a4a1f" : "transparent")};

  &:hover {
    background: #faf9f5;
  }
`;

const ItemTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
`;

const ItemName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1b16;
`;

const ItemDate = styled.div`
  font-size: 12px;
  color: #9a9384;
  flex-shrink: 0;
`;

const ItemSubject = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #3a352d;
  margin-top: 4px;
`;

const ItemSnippet = styled.div`
  font-size: 12px;
  color: #8a8375;
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Badge = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  color: ${({ $status }) => ($status === "New" ? "#1e7a3d" : "#5c584e")};
  background: ${({ $status }) => ($status === "New" ? "#e4f5e9" : "#eeece5")};
`;

const DetailPane = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 32px;
  min-height: 0;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #efede5;
`;

const DetailSubject = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1f1b16;
  margin: 0 0 8px 0;
`;

const DetailMeta = styled.div`
  font-size: 13px;
  color: #6b665b;
  margin-top: 2px;
`;

const DetailMessageBox = styled.div`
  margin-top: 22px;
  font-size: 14px;
  line-height: 1.7;
  color: #2b2822;
  flex: 1;
`;

const DetailActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid #efede5;
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
  color: #c1443a;

  &:hover {
    background: #fbeae8;
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
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background: ${({ disabled }) => (disabled ? "#241c14" : "#362a1c")};
  }
`;

const EmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;
  font-size: 13px;
  color: #9a9384;
`;

  return (
    <PageWrapper>
      <Content>
        <TopBar>
          <PageTitle>Contact Submissions</PageTitle>
          <AdminProfile>
            <Avatar />
            Admin profile
            <Chevron>⌄</Chevron>
          </AdminProfile>
        </TopBar>

        <InboxCard>
          <ListPane>
            <ListPaneHeader>
              <span>{submissions.length} messages</span>
              <span>
                {submissions.filter((s) => s.status === "New").length} new
              </span>
            </ListPaneHeader>

            <SubmissionList>
              {submissions.map((s) => (
                <SubmissionItem
                  key={s.id}
                  $active={s.id === selectedId}
                  onClick={() => openSubmission(s.id)}
                >
                  <ItemTopRow>
                    <ItemName>{s.name}</ItemName>
                    <ItemDate>{formatDate(s.date)}</ItemDate>
                  </ItemTopRow>
                  <ItemSubject>{s.subject}</ItemSubject>
                  <ItemSnippet>{s.message}</ItemSnippet>
                  <Badge $status={s.status}>{s.status}</Badge>
                </SubmissionItem>
              ))}
              {submissions.length === 0 && (
                <EmptyState>No contact submissions yet.</EmptyState>
              )}
            </SubmissionList>
          </ListPane>

          <DetailPane>
            {selected ? (
              <>
                <DetailHeader>
                  <div>
                    <DetailSubject>{selected.subject}</DetailSubject>
                    <DetailMeta>
                      <strong>{selected.name}</strong> · {selected.email} ·{" "}
                      {selected.phone}
                    </DetailMeta>
                    <DetailMeta>{formatDate(selected.date)}</DetailMeta>
                  </div>
                  <Badge $status={selected.status}>{selected.status}</Badge>
                </DetailHeader>

                <DetailMessageBox>{selected.message}</DetailMessageBox>

                <DetailActions>
                  <SecondaryButton onClick={() => deleteSubmission(selected.id)}>
                    Delete
                  </SecondaryButton>
                  <PrimaryButton
                    disabled={selected.status === "Reviewed"}
                    onClick={() => markAsReviewed(selected.id)}
                  >
                    {selected.status === "Reviewed" ? "Reviewed" : "Mark as Reviewed"}
                  </PrimaryButton>
                </DetailActions>
              </>
            ) : (
              <EmptyState>Select a message to view details.</EmptyState>
            )}
          </DetailPane>
        </InboxCard>
      </Content>
    </PageWrapper>
  );
}

export default ManageContacts;

