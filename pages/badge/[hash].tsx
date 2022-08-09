import BadgeComponent from "../../components/badge/badge";
import Layout from "../../components/layout/layout";
import { allCollections, Collection } from "../../lib/api";

export default function Badge({
  collection,
  playlist,
  video,
  quiz,
}: {
  collection: Collection;
  playlist: string;
  video: string | null;
  quiz: string | null;
}) {
  return (
    <Layout title={`${collection.title} Badge`}>
      <BadgeComponent
        badge={collection}
        playlist={playlist}
        video={video}
        quiz={quiz}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res: Collection[] = await allCollections();
  const paths = res.map((col) => ({
    params: { hash: col.hash },
  }));

  return { paths, fallback: false };
}

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps({ params }: { params: { hash: string } }) {
  const collection = (await allCollections(params.hash))[0];

  const filePath = path.join(process.cwd(), "quizzes.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  let video = null,
    quiz = null,
    playlist = objectData[collection.subtitle]?.playlist;

  if (!collection.title.toLowerCase().includes("master")) {
    const obj = objectData[collection.subtitle].badges[collection.title];
    video = obj.video;
    quiz = obj.quiz;
  }

  return { props: { collection, video, quiz, playlist } };
}
