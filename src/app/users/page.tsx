import { Metadata } from "next";

import Breadcrumb from '@/components/Common/Breadcrumb'
import UserList from '@/components/User/UserList'

export const metadata: Metadata = {
  title: "User Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const UsersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName='User Page'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.'
      />

      <UserList />
    </>
  )
}

export default UsersPage
