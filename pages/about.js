import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Error from './_error'

 const About = ({user:{name,avatar_url},statusCode}) => {
   return(
     <>
    {statusCode ? (<Layout title="About">
        <p>{name}</p>
        <img src={avatar_url} alt="Reed" height="200px"/>
      </Layout>)
    : (<Error statusCode={statusCode}/>)}
    </>)

     

 }

About.getInitialProps = async () =>{
  const res = await fetch('https://api.github.com/users/reedbarger')
  const statusCode = res.status == 200 ? res.status : false
  const data = await res.json()
  console.log(res.status)
  return { user: data,statusCode }
}

export default About