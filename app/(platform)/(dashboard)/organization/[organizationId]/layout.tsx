import { OrgControl } from "./_components/org-control";

const OrganizationIDLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl/>
      {children}
    </>
  );
};

export default OrganizationIDLayout;