import Link from "next/link"
import Head from 'next/head';
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function HomePage({events}) {
  return (
    <Layout>
       <h1>Upcoming Events</h1>
   </Layout>
  )
}

export async function getServerSideProps() {
   const res = await fetch(`${API_URL}/api/events`);
   const events = await res.json();

   return {
      props: {events},
      revalidate: 1
   }
}