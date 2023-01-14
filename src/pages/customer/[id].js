
const customer = ({ customer }) => {
  return (
    <div>
         <h3>Director ID: {customer.directory_id}</h3>
         <p>Email: {customer.email} </p>
         <p>PAN: {customer.pan} </p>
         <p>City: {customer.city} </p>
         <p>State: {customer.state} </p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://128.199.21.80:3004/director/all_list')
  const customers = await res.json()

  const paths = customers.result.result.map((customer) => ({
    params: { id: customer.director_id.toString() },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`http://128.199.21.80:3004/director/all_list/${params.id}`)
  const customer = await res.json()

  return { props: { customer } }
}

export default customer