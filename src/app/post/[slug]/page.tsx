import { getItemBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/post.type";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { object }: PostProps = await getItemBySlug(slug);

  return <div></div>;
}
