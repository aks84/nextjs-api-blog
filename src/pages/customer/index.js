
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
        
        <div className="customer_card" key={customer.director_id}>
         <Link href={`/customer/${encodeURIComponent(customer.director_id)}`}><h2>{customer.director_id}</h2></Link>
         <p>Full Name: {customer.first_name} {customer.last_name}</p>
         <p>Email: {customer.email}</p>
         <p>Phone: {customer.phone}</p>
         <p>Address: {customer.address1}</p>
         <p>City: {customer.city}</p>
         <p>State: {customer.state}</p>
         <p>PAN: {customer.pan_number}</p>
         <p>Type: {customer.type}</p>
         <p>Designation: {customer.disignation}</p>
        </div>
      ))}
    </>
  )
}



export default Customer