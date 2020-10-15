import * as utils from "utils";

const page = {
  css: `
    h1 {
      color: #125089;
      font-weight: bold;
    }
  `,
  // Logo
  logo: {
    children: [
      {
        _block: "markdown",
        content: "# Inglês Rapidão",
        style: {
          textAlign: "center",
          margin: "10px 0",
        },
      },
    ],
  },

  children: [
    // =========
    // Section 1
    // =========
    {
      _block: "row",
      variant: "container",
      css: `
        padding-top: 100px;
        padding-bottom: 100px;
        background-image: url('/images/usa.jpg');
        background-size: cover;
        background-position: center;    
        background-attachment: fixed;
        @media(max-width:900px) {
          padding-top: 30px;
        }
      `,
      variant: "container",
      children: [
        {
          _block: "col",
          css: `
          @media(max-width:900px) {
            text-align: center;
          }
          `,
          children: [
            {
              _block: "markdown",
              content: `# Livro Grátis
## 5 dicas matadoras para estudar inglês sozinho. 
### Comece agora a aprender usando apenas seu celular, na hora em que quiser e sem ter que comprar cursos caros.`,
            },
            {
              _block: "button",
              variant: "darkRed",
              text: "Baixa Livro Grátis",
              css: `font-weight: 500;`,
              onClick: "openModal:ctaFormModal",
            },
          ],
        },
        {
          _block: "col",
          css: `text-align: center;`,
          children: [
            {
              _block: "image",
              src: "/images/capa-ebook-1-3d.png",
              css: `
                max-width: 60%;
                @media(max-width:900px) {
                  margin-top: 20px;
                  max-width: 100%;
                }
                
              `,
            },
          ],
        },
      ],
    },

    {
      _block: "modal",
      id: "ctaFormModal",
      children: [utils.emailForm("Baixar livro grátis")],
    },
  ],
};

export default page;
