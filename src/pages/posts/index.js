import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    }, 
  }
}


function PostIndex({ posts }) {
  return (
    <>
      {posts.map((post) => (
         <h3 key={post.id} className="postList">
          <Link href={`/posts/${encodeURIComponent(post.id)}`}>{post.title}</Link>
          </h3>
      ))}
    </>
  )
}



export default PostIndex