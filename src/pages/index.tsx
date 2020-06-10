import home from "./home/_home";
import { graphql } from "gatsby";

export const query = graphql`
    query HomeQuery {
        blogImage: file(relativePath: { eq: "gutenberg-editor-wires.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 550) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        blogImage2: file(relativePath: { eq: "spilled-milk-wordpress.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 550) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        courseImage: file(relativePath: { eq: "ghactionscover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        featuredCourseReviews: allCourseReview(
            limit: 3
            filter: {
                course: { id: { eq: "x015vNbBDIRfbZt9qM09qkwzA==" } }
                content: { regex: "/.{10,}$/" }
            }
        ) {
            edges {
                node {
                    id
                    content
                    user {
                        title
                    }
                }
            }
        }
    }
`;
export default home;
