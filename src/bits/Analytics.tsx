import React from 'react'
import Script from 'next/script'

export default function Analytics() {
  React.useEffect(() => {
    var win: any = global
    win.dataLayer = win.dataLayer || [];
    win.gtag = () => {
      // @ts-ignore
      win.dataLayer.push(arguments)
    }
    win.gtag('js', new Date())

    win.gtag('config', 'G-K4RWKBBEC3')
  }, [])

  return (
    <Script 
      src="https://www.googletagmanager.com/gtag/js?id=G-K4RWKBBEC3" />
  )
}
