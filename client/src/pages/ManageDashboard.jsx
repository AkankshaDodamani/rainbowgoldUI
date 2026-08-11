// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import AdminProfileMenu from "../components/AdminMenuPage.jsx";
// ============================================================
// LOGIC
// ============================================================

// mock summary data (swap for real API calls, e.g. dashboardService.getSummary())
const initialStats = {
  totalBrands: 7,
  totalProducts: 39,
  newMessages: 2,
  outOfStock: 3,
};

// mock recent contact submissions (swap for GET /contact?limit=4)
const recentSubmissions = [
  { id: 1, name: "Priya Sharma", subject: "Bulk order inquiry - Diwali gift boxes", date: "2026-07-28", status: "New" },
  { id: 2, name: "Rohan Mehta", subject: "Distributor partnership", date: "2026-07-27", status: "New" },
  { id: 3, name: "Ananya Iyer", subject: "Product availability - Rove Truffle", date: "2026-07-25", status: "Reviewed" },
];

// mock top brands by product count (swap for GET /brands?sort=productCount)
const topBrands = [
  { id: 1, name: "Wobniar", productCount: 19 },
  { id: 2, name: "Brand Name", productCount: 10 },
  { id: 3, name: "Wutini Name", productCount: 2 },
];

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};

const ManageDashboard = () => {
  const [stats] = useState(initialStats);
  const [submissions] = useState(recentSubmissions);
  const [brands] = useState(topBrands);

  const statCards = [
    { label: "Total Brands", value: stats.totalBrands, icon: "❚" },
    { label: "Total Products", value: stats.totalProducts, icon: "▣" },
    { label: "New Messages", value: stats.newMessages, icon: "✉", highlight: stats.newMessages > 0 },
    { label: "New Prodcuts", value: stats.outOfStock, icon: "⚠", warning: stats.outOfStock > 0 },
  ];

  // ============================================================
// STYLED COMPONENTS
// ============================================================

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", sans-serif;
  background: #eceae4;
  position: relative;
  overflow-x: hidden;
`;

// const Sidebar = styled.aside`
//   width: 220px;
//   flex-shrink: 0;
//   background: #241c14;
//   color: #d8d2c6;
//   padding: 28px 20px;
// `;

// const BrandMark = styled.div`
//   font-family: Georgia, "Times New Roman", serif;
//   font-size: 24px;
//   font-weight: 700;
//   color: #d8ae4d;
//   margin-bottom: 36px;
// `;

// const SidebarSubtitle = styled.div`
//   font-family: "Inter", sans-serif;
//   font-size: 11px;
//   font-weight: 400;
//   color: #a89f8f;
//   margin-top: 2px;
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

// ---- Stat cards ----

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: #fff;
  border: 1px solid #e6e3da;
  border-radius: 12px;
  padding: 20px;
  ${({ $highlight }) => $highlight && `border-color: #bcd8c4;`}
  ${({ $warning }) => $warning && `border-color: #f0c9c3;`}
`;

const StatIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  margin-bottom: 14px;
  background: #f4f2ec;
  color: #6b665b;
  ${({ $highlight }) => $highlight && `background: #e4f5e9; color: #1e7a3d;`}
  ${({ $warning }) => $warning && `background: #fbeae8; color: #c1443a;`}
`;

const StatValue = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #1f1b16;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #6b665b;
  margin-top: 4px;
`;

// ---- Panels (recent activity) ----

const PanelGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: #fff;
  border: 1px solid #e6e3da;
  border-radius: 12px;
  overflow: hidden;
`;

const PanelHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e6e3da;
  background: #f4f2ec;
`;

const PanelTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #2b2822;
  margin: 0;
`;

const PanelList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PanelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid #efede5;

  &:last-child {
    border-bottom: none;
  }
`;

const PanelRowMain = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

const PanelRowTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1b16;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PanelRowSubtitle = styled.div`
  font-size: 12px;
  color: #8a8375;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 260px;
`;

const PanelRowSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const PanelRowDate = styled.div`
  font-size: 12px;
  color: #9a9384;
`;

const RankBadge = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f4f2ec;
  color: #6b665b;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Badge = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  color: ${({ $status }) => ($status === "New" ? "#1e7a3d" : "#5c584e")};
  background: ${({ $status }) => ($status === "New" ? "#e4f5e9" : "#eeece5")};
`;

const EmptyState = styled.div`
  padding: 30px 20px;
  text-align: center;
  font-size: 13px;
  color: #9a9384;
`;

  // ============================================================
  // TAGS
  // ============================================================
  return (
    <PageWrapper>
      <Content>
        <TopBar>
          <PageTitle>Dashboard</PageTitle>
            <AdminProfileMenu />
        </TopBar>

        <StatGrid>
          {statCards.map((card) => (
            <StatCard key={card.label} $highlight={card.highlight} $warning={card.warning}>
              <StatIcon $highlight={card.highlight} $warning={card.warning}>
                {card.icon}
              </StatIcon>
              <StatValue>{card.value}</StatValue>
              <StatLabel>{card.label}</StatLabel>
            </StatCard>
          ))}
        </StatGrid>

        <PanelGrid>
          <Panel>
            <PanelHeader>
              <PanelTitle>Recent Contact Submissions</PanelTitle>
            </PanelHeader>
            <PanelList>
              {submissions.map((s) => (
                <PanelRow key={s.id}>
                  <PanelRowMain>
                    <PanelRowTitle>{s.name}</PanelRowTitle>
                    <PanelRowSubtitle>{s.subject}</PanelRowSubtitle>
                  </PanelRowMain>
                  <PanelRowSide>
                    <PanelRowDate>{formatDate(s.date)}</PanelRowDate>
                    <Badge $status={s.status}>{s.status}</Badge>
                  </PanelRowSide>
                </PanelRow>
              ))}
              {submissions.length === 0 && <EmptyState>No submissions yet.</EmptyState>}
            </PanelList>
          </Panel>

          <Panel>
            <PanelHeader>
              <PanelTitle>Top Brands by Product Count</PanelTitle>
            </PanelHeader>
            <PanelList>
              {brands.map((b, i) => (
                <PanelRow key={b.id}>
                  <PanelRowMain>
                    <RankBadge>{i + 1}</RankBadge>
                    <PanelRowTitle>{b.name}</PanelRowTitle>
                  </PanelRowMain>
                  <PanelRowSide>
                    <PanelRowDate>{b.productCount} products</PanelRowDate>
                  </PanelRowSide>
                </PanelRow>
              ))}
              {brands.length === 0 && <EmptyState>No brands yet.</EmptyState>}
            </PanelList>
          </Panel>
        </PanelGrid>
      </Content>
    </PageWrapper>
  );
};

export default ManageDashboard;