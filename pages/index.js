// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ cms }) {
  return (
    <div>
      <ul>
        {cms.map((cms) => (
          <li key={cms.id}>
            <Link href={`/cms/${cms.id}`}>{cms.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "cms" });

  return {
    props: {
      cms: data.contents,
    },
  };
};
