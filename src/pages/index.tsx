import { NextPage } from "next";
import {
  Article,
  PostLoading,
  SearchBar,
  Sidebar,
  WriteFormModal,
} from "~/components";
import { api } from "~/utils/api";

const Home: NextPage = (props) => {
  const { data, isLoading } = api.post.getPost.useQuery();

  return (
    <div className="grid h-full w-full grid-cols-12 scrollbar-hide">
      <main className="col-span-8 h-full w-full border-r px-8">
        <SearchBar />

        <div className="flex flex-col gap-y-8 py-8 scrollbar-hide">
          {isLoading ? (
            <PostLoading />
          ) : (
            data?.map((item, index) => {
              return <Article key={index} post={item} />;
            })
          )}
        </div>
      </main>
      <Sidebar />
      <WriteFormModal />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = (await req.json()) as any[];

  return {
    props: {
      posts,
    },
  };
}

// export function getStaticProps() {
//   return {
//     props: {
//       title: "Hello",
//     },
//   };
// }
