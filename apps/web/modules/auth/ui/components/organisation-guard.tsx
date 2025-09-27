"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layouts/auth-layout";
import { OrgSelectionView } from "@/modules/auth/ui/views/org-selection-view";

export const OrganisationGuard = ({ children }: { children: React.ReactNode }) => {
  const { organization } = useOrganization();
  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView />
      </AuthLayout>
    );
  }
  return (
    <>
      {children}
    </>
  );
};