import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

interface Posts {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}

interface PostProps {
  posts: Posts[];
}

export default function Post({ posts }) {
  return <h1>Teste</h1>;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  // if (!session) {
  // }

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("publication", String(slug), {});

  const posts = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      posts,
    },
  };
};
