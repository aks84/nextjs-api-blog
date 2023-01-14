import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch('http://128.199.21.80:3004/director/all_list')
  const data = await res.json()

  return {
    props: {
      data,
    }, 
  }
}


function Customer({ data }) {
  return (
    <>
      {data.result.result.map((customer) => (
          <li key={customer.director_id}>
          <Link href={`${encodeURIComponent(customer.director_id)}`}>{customer.first_name} {customer.last_name}</Link>
          </li>
      ))}
    </>
  )
}

export default Customer