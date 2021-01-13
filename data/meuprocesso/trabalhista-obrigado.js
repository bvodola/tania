import { Features } from "blocks";

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
    // ======
    // Header
    // ======
    {
      _block: "row",
      css: `
        width: 100%;
        background-image: url('images/bg/legal-bg-2.jpg'); 
        background-size: cover;
        padding: 40px 16px 100px;
        background-position-x: -400px;
        @media(min-width: 600px) {
          background-position-x: -180px;
        }
        @media (min-width:900px) {
          background-position-x: 0;
          padding: 100px 25%;
        }
      `,
      children: [
        // Header
        {
          _block: "text",
          css: `
            color: #fff;
          `,
          content: (
            <>
              <h1 className="text-3xl text-center mb-10 text-blue-300">
                Muito obrigado pelo contato!
              </h1>
            </>
          ),
        },

        // ==========
        // First Form
        // ==========
        {
          _block: "row",
          className: "rounded",
          css: `
            margin-top: 32px;
            background-color: #fff;
            width: 100%;
            padding: 20px;
            @media(min-width: 901px) {
              padding: 40px 70px 60px;
            }
          `,
          children: [
            {
              _block: "form",
              css: `
                .title {
                  text-align: center;
                  margin-bottom: 16px;
                  font-size: 20px;
                }
              `,
              title: "Se quiser, você pode falar conosco por WhatsApp",
              children: [
                {
                  _block: "button",
                  onClick:
                    "whatsapp:5511994695279?text=Oi, tudo bem? Gostaria de falar com um advogado trabalhista, por favor. Obrigado!",
                  variant: "green",
                  text: (
                    <>
                      <i className="text-2xl mr-2 fab fa-whatsapp"></i> Falar
                      agora por WhatsApp
                    </>
                  ),
                  className: "w-full",
                },
              ],
            },
          ],
        },
      ],
    },

    // ======
    // Footer
    // ======
    {
      _block: "row",
      className: "text-center w-full bg-gray-100 py-10 mt-10",

      children: [
        {
          _block: "text",
          content: [
            <h1 className="text-2xl mb-5 text-primary">
              Telefone e Endereços
            </h1>,
            <p>(11) 99469-5279 </p>,
            <p>Rua Jaboatão, 50 - Casa Verde - São Paulo/SP</p>,
            <p>Av. Washington Luis, 6817 - Jd. Aeroporto - São Paulo/SP</p>,
          ],
        },
      ],
    },
  ],
};

export default page;
