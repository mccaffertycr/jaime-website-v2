import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

// import { rhythm } from "../utils/typography"

const About = () => {
  const data = useStaticQuery(graphql`
    query AbautQuery {
      avatar: file(absolutePath: { regex: "/jaime_1.png/" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        width: `100%`,
        margin: `0 auto`,
        padding: `1.0875rem 1.45rem`,
      }}
    >
      <h3>Engaging Students</h3>
      <Image
        fixed={data.avatar.childImageSharp.fluid}
        alt={"jaime"}
        style={{
          marginBottom: `.45rem`,
          minWidth: `100%`,
          height: 200,
        }}
      />
      <p>
        Welcome to the teaching website of James Gibilisco! In this site, you
        will view how Mr. Gibilisco communicates and engages with his students
        using the content and information that has been gathered during his
        studies at Gwynedd Mercy University, obtaining a Masters of Science in
        Education.{" "}
      </p>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        <Link to={`/articles`}>View Articles</Link>
      </div>
      <h3>Teaching Mission Statement:</h3>
      <p>
        Every individual in the classroom has had experiences and perspectives
        that are worth sharing so we are all simultaneously students as well as
        teachers. Through student-centric and project-based learning, I hope to
        foster an individual relationship with each student which, in turn,
        leads to a positive learning community. By building relationships with
        the students, I seek to understand each of their individual learning
        styles so that every student’s academic needs are fulfilled. In
        understanding individual needs and having a strong college preparatory
        background, I establish clear objectives within each course and scaffold
        their learning by identifying skills that each student should strive to
        improve upon. I also believe that knowing each student and by the
        student understanding who I am, I am more able to aid them in the
        development of the entire person, not just from an academic standpoint
        but also through character and moral development, and to reach their
        highest potential. To do this, students need to think critically of the
        world around them by becoming people who do not ask “what” to think but
        “how” and “why” to think.
      </p>
    </div>
  )
}

export default About
