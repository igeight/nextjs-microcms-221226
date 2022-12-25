import { client } from "../../libs/client";

export default function cmsId({ cms }) {
  return (
    <main>
      <h1>{cms.title}</h1>
      <p>{cms.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${cms.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "cms" });

  const paths = data.contents.map((content) => `/cms/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "cms", contentId: id });

  return {
    props: {
      cms: data,
    },
  };
};
