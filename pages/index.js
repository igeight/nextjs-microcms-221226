import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ cms }) {
  return (
    <>
      <main>
        <h1>{cms.title}</h1>
        <ul>
          {cms.map((cms) => (
            <li key={cms.id}>
              <Link href={`/cms/${cms.id}`}>{cms.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
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
