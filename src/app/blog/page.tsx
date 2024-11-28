import { Metadata } from "next";

import Breadcrumb from "@/components/Common/Breadcrumb";
import DiseasesWrapper from '@/components/Diseases/DiseasesWrapper'

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Blog = () => {


  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <DiseasesWrapper />
    </>
  );
};

export default Blog;
