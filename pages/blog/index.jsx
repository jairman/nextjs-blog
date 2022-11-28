import Link from "next/link";
import Layout from "../../components/Layout";
export default function index({ data }) {
  console.log(data);
  return (
    <Layout title="Blog | next.js" description="agrege ua  descripcion">
      <h1>Lista de Blogs</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
          <Link href={`/blog/${id}`}>
          {id} - {title}
          </Link>
          
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
