import useSWR from "swr";
import Layout from "../components/layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

function MyIpFetcher() {
  const { data, error } = useSWR("/api/myip", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>{data.ip}</div>;
}

export default function MyIp() {
  return (
    <Layout>
      <MyIpFetcher />
    </Layout>
  );
}
