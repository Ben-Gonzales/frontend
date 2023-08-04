'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    // Fetch data from the Node.js server
    fetch('http://localhost:4000/object')
      .then((response) => response.json())
      .then((data) => setData1(data));
  }, []);

  return (
    <main className={styles.main}>
      {data1.map((data) => {
        return <h1>{data.phrase} this is an example output of creating enpoints in the node.js (backend) connecting it to next.js (frontend).</h1>
      })}
      <h2>Endpoints</h2>
      {data1.map((data) => {
        return <p>Name: {data.name}</p>
      })}
      {data1.map((data) => {
        return <p>Age: {data.age}</p>
      })}
      {data1.map((data) => {
        return <p>Occupation: {data.occupation}</p>
      })}
      {data1.map((data) => {
        return <p>{data.name}: {data.sentence}</p>
      })}
    </main>
  )
}
