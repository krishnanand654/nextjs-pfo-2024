import { useRouter } from "next/router";
import Layout from "@/layouts/Layout";

export default function Page() {
  const router = useRouter();
  return (
    <Layout>
      <h1>Post: {router.query.id}</h1>
    </Layout>
  );
}
