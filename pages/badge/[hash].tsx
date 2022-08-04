import { allCollections, Collection } from "../../lib/api";

export async function getStaticPaths() {
  const res: Collection[] = await allCollections();
  const paths = res.map((col) => ({
    params: { hash: col.hash },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { hash: string } }) {
  const collection = (await allCollections(params.hash))[0];

  return { props: { collection } };
}

export default function Badge({ collection }: { collection: Collection }) {
  return <div>{JSON.stringify(collection)}</div>;
}
