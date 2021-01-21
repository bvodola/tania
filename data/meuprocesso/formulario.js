import { ON_CLICK_WHATSAPP } from "./_constants";

const page = {
  css: ``,
  // ====
  // Logo
  // ====
  logo: {
    children: [
      {
        _block: "image",
        src: "/images/logo-bi.png",
        css: `
          width: 32px;
          margin-right: 8px;
        `,
      },
      {
        _block: "text",

        content: (
          <span>
            Meu Processo
            <br />
            Trabalhista
          </span>
        ),
        css: `  
          font-weight: bold;
          color: #125089;
          text-align: left;
        `,
      },
    ],
  },

  children: [
    {
      _block: "redir",
      url: "https://forms.gle/XXR2Bw6LxArrW2LL9",
    },
  ],
};

export default page;
