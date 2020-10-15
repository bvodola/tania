import React from "react";
import { Section } from "blocks/index";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${(props) => `
    #${props.id} {
      ${props.style}
    }
  `}
`;

export default function Home(props) {
  const [pageData, setPageData] = React.useState(null);

  const fetchData = async () => {
    const _pageData = (await import(`../data/${props.slug}`)).default;
    setPageData(_pageData);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (pageData === null) return null;

  return (
    <>
      <GlobalStyle id={props.slug} style={pageData.css} />
      <div id={props.slug}>
        <nav
          style={{
            position: "fixed",
            backgroundColor: "rgba(255,255,255,0.9)",
            width: "100%",
            borderBottom: "1px solid #eee",
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          {pageData.logo.children.map((section) => (
            <Section {...section} />
          ))}
        </nav>
        <div style={{ height: "70px", width: "100%" }} />
        {pageData.children.map((section) => (
          <Section {...section} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}
