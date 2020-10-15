import React from "react";
import { Section } from "blocks/index";
import { createGlobalStyle } from "styled-components";
import { dashToPascal, PageContext } from "utils";

const GlobalStyle = createGlobalStyle`
  ${(props) => `
    #${props.id} {
      ${props.style}
    }
  `}
`;

export default function Home(props) {
  const pageId = dashToPascal(props.slug);
  const [pageData, setPageData] = React.useState(null);
  const [pageState, setPageStateObject] = React.useState({});
  const setPageState = (k, v) => {
    setPageStateObject({
      ...pageState,
      [k]: v,
    });
  };

  // Fetch Page Data from file
  const fetchData = async () => {
    const _pageData = (await import(`../data/${props.slug}`)).default;
    setPageData(_pageData);
  };

  // Trigger Page Data Fetching
  React.useEffect(() => {
    fetchData();
  }, []);

  // Returns null if pageData is not ready
  if (pageData === null) return null;

  console.log("pageState", pageState);
  return (
    <PageContext.Provider
      value={{
        ...pageState,
        set: setPageState,
      }}
    >
      <GlobalStyle id={pageId} style={pageData.css} />
      <div id={pageId}>
        {/* Navbar */}
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

        {/* Blocks */}
        {pageData.children.map((section) => (
          <Section {...section} />
        ))}
      </div>
    </PageContext.Provider>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}
