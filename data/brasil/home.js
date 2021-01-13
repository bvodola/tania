const page = {
  css: ``,
  // Logo
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
          <span className="text-green-400 text-left">
            Brasil
            <br />
            Indenizações
          </span>
        ),
        css: `  
          font-weight: bold;
        `,
      },
    ],
  },

  children: [
    {
      _block: "row",
      css: `
        background-image: url('images/bg/motorcycle-bg-3.jpg'); 
        padding: 100px 16px;
        @media (min-width:900px) {
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
              <h1 className="text-3xl text-center">
                Sofreu acidente de trânsito e ficou com sequelas?
              </h1>
              <h1 className="text-3xl text-center">Resgate o DPVAT.</h1>
              <h2 className="text-5xl text-center">
                Receba até <span className="text-green-400">R$ 13.500,00</span>.
              </h2>
            </>
          ),
        },

        // First Form
        {
          _block: "row",
          className: "rounded",
          css: `
            margin-top: 32px;
            background-color: #fff;
            padding: 40px 70px 60px;
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
              title: "Falar agora com um consultor especializado DPVAT",
              submit_button: {
                className:
                  "bg-green-400 hover:bg-green-500 w-full p-4 mt-2 rounded text-white  focus:outline-none transition duration-150 ease-in-out",
                children: "Fale agora com um consultor",
              },
              children: [
                {
                  _block: "field",
                  name: "name",
                  placeholder: "Nome + Sobrenome",
                  widget: "text",
                  fullWidth: true,
                },
                {
                  _block: "field",
                  name: "phone",
                  placeholder: "DDD sem zero + Telefone",
                  widget: "text",
                  fullWidth: true,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      _block: "row",
      className: "w-full",
      children: [
        {
          _block: "text",
          content: (
            <h1 className="text-5xl text-center text-green-400 my-10">
              Como Trabalhamos
            </h1>
          ),
        },
      ],
    },

    // ========
    // Features
    // ========
    {
      _block: "row",
      className: "mx-10 mb-10",
      children: [
        {
          _block: "col",
          className: "mb-10",
          children: [
            {
              _block: "row",
              children: [
                {
                  _block: "text",
                  content: (
                    <>
                      <h2 className="text-2xl">
                        Indenização na conta no menor tempo possível
                      </h2>
                      <h3 className="mt-4">
                        Nossos consultores e especialistas estão de prontidão e
                        possuem anos de experiência no ramo, para que a
                        indenização seja paga no menor tempo possível!
                      </h3>
                    </>
                  ),
                },
              ],
            },
          ],
        },

        {
          _block: "col",
          className: "mb-10",
          children: [
            {
              _block: "row",
              children: [
                {
                  _block: "text",
                  content: (
                    <>
                      <h2 className="text-2xl">
                        Análise total dos seus documentos
                      </h2>
                      <h3 className="mt-4">
                        Para que a indenização seja paga rapidamente e sem
                        problemas no caminho, analisamos detalhadamente toda a
                        sua documentação e elaboramos um excelente atendimento.
                      </h3>
                    </>
                  ),
                },
              ],
            },
          ],
        },

        {
          _block: "col",
          className: "mb-10",
          children: [
            {
              _block: "row",
              children: [
                {
                  _block: "text",
                  content: (
                    <>
                      <h2 className="text-2xl">
                        Comunicação fácil e canais de atendimento variados
                      </h2>
                      <h3 className="mt-4">
                        Prezamos pela excelência no atendimento ao cliente e
                        contamos com vários canais de atendimento para que o
                        cliente, a hora que desejar, entre em contato.
                      </h3>
                    </>
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default page;
