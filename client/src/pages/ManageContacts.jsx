import { useEffect, useState } from "react";
import styled from "styled-components";
import AdminProfileMenu from "../components/AdminMenuPage.jsx";
import { getAllContacts } from "../Services/Contact.js";
// eslint-disable-next-line no-unused-vars
import SideNav from "../Components/SideNav.jsx"; 


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
  border-left: 3px solid
    ${({ $active }) => ($active ? "#8a4a1f" : "transparent")};

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

// const DetailActions = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 12px;
//   padding-top: 20px;
//   border-top: 1px solid #efede5;
// `;

// const SecondaryButton = styled.button`
//   height: 40px;
//   padding: 0 18px;
//   border-radius: 8px;
//   border: 1px solid #dedad0;
//   background: #fff;
//   font-size: 14px;
//   font-weight: 500;
//   cursor: pointer;
//   color: #c1443a;

//   &:hover {
//     background: #fbeae8;
//   }
// `;

const EmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;
  font-size: 13px;
  color: #9a9384;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #1f1b16;
  cursor: pointer;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: flex; /* Visible only on mobile */
  }
`;

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// ---- Component ----

const ManageContacts = ({toggleSidebar}) => {

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const [submissions, setSubmissions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    getAllContacts()
      .then((result) => {
        const data = result.data.data;
        setSubmissions(data);
        setSelectedId((prev) => prev ?? data[0]?._id ?? null);
      })
      .catch((err) => {
        console.error("Failed to fetch contacts!!", err);
      });
  }, []);

  const selected = submissions.find((s) => s._id === selectedId) || null;

  const openSubmission = (id) => {
    setSelectedId(id);
  };

  // const deleteSubmission = (id) => {
  //   setSubmissions((prev) => {
  //     const remaining = prev.filter((s) => s._id !== id);
  //     if (selectedId === id) {
  //       setSelectedId(remaining[0]?._id ?? null);
  //     }
  //     return remaining;
  //   });
  // };

  return (
    <PageWrapper>
      <Content>
        <TopBar>
          <TitleGroup>
            <HamburgerButton onClick={toggleSidebar}>
              <MenuIcon />
            </HamburgerButton>
            <PageTitle>Manage Contacts</PageTitle>
          </TitleGroup>
          <AdminProfileMenu />
        </TopBar>

        <InboxCard>
          <ListPane>
            <ListPaneHeader>
              <span>{submissions.length} messages</span>
            </ListPaneHeader>

            <SubmissionList>
              {submissions.map((s) => (
                <SubmissionItem
                  key={s._id}
                  $active={s._id === selectedId}
                  onClick={() => openSubmission(s._id)}
                >
                  <ItemTopRow>
                    <ItemName>{s.name}</ItemName>
                    <ItemDate>{formatDate(s.createdAt)}</ItemDate>
                  </ItemTopRow>
                  <ItemSubject>{s.subject}</ItemSubject>
                  <ItemSnippet>{s.message}</ItemSnippet>
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
                    <DetailMeta>{formatDate(selected.createdAt)}</DetailMeta>
                  </div>
                </DetailHeader>

                <DetailMessageBox>{selected.message}</DetailMessageBox>

                {/* <DetailActions>
                  <SecondaryButton
                    onClick={() => deleteSubmission(selected._id)}
                  >
                    Delete
                  </SecondaryButton>
                </DetailActions> */}
              </>
            ) : (
              <EmptyState>Select a message to view details.</EmptyState>
            )}
          </DetailPane>
        </InboxCard>
      </Content>
    </PageWrapper>
  );
};

export default ManageContacts;
