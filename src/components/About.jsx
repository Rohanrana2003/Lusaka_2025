import { useEffect } from "react"


const About = () => {

  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  
  return (
    <div>About</div>
  )
}

export default About