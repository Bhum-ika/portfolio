import React from 'react'
import "../styles/index.css"
import "../styles/skills.css"
import "../styles/header.css"
import "../styles/contact.css"
import "../styles/about.css"
import AppLayout from '../components/AppLayout'

export default function App({Component,pageProps}) {
  return (

<AppLayout>
<Component {...pageProps}/>
</AppLayout>
 
  )
}

 