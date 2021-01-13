import React from "react";
import { Section } from "blocks/index";
import { createGlobalStyle } from "styled-components";
import { dashToPascal, PageContext } from "utils";
import mailchimp from "@mailchimp/mailchimp_marketing";

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
  const [pageStateValues, setPageStateValues] = React.useState({
    slug: props.slug,
  });

  /**
   * Changes a prop inside the pageState object
   * @param {string} k the state prop key
   * @param {any} v the new state prop value
   */
  const setPageStatePropValue = (k, v) => {
    setPageStateValues((state) => {
      const newState = {
        ...state,
        [k]: v,
      };
      console.log(newState);
      return newState;
    });
  };

  const clearPageStateValues = () => {
    console.log("clear");
    setPageStateValues(() => {
      const newState = {
        slug: props.slug,
      };
      console.log(newState);
      return newState;
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

  // MailChimp Test
  mailchimp.setConfig({
    apiKey: "adeb451b113b0eb1f6c22ade2539220e-us2",
    server: "us2",
  });

  // Returns null if pageData is not ready
  if (pageData === null) return null;

  return (
    <PageContext.Provider
      value={{
        values: pageStateValues,
        set: setPageStatePropValue,
        clear: clearPageStateValues,
      }}
    >
      <GlobalStyle id={pageId} style={pageData.css} />

      <div id={pageId}>
        {/* ====== */}
        {/* Navbar */}
        {/* ====== */}
        <nav
          style={{
            position: "fixed",
            backgroundColor: "rgba(255,255,255,0.9)",
            width: "100%",
            borderBottom: "1px solid #eee",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "normal",
          }}
        >
          {pageData.logo.children.map((section) => (
            <Section {...section} />
          ))}
        </nav>
        <div style={{ height: "60px", width: "100%" }} />

        {/* ====== */}
        {/* Blocks */}
        {/* ====== */}
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
      slug: context.params.slug.replace(/\./g, "/"),
    },
  };
}
