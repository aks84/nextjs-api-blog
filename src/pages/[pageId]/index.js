import {useRouter} from 'next/router'

const Post = () => {
  const router = useRouter()
  const { director_id } = router.query

  return <p>Post: {director_id}</p>
}

export default Post