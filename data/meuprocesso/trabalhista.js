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
              <h1 className="text-4xl text-center mb-10">
                ADVOGADOS TRABALHISTAS EM SP
              </h1>
              <h1 className="text-3xl text-center mb-10">
                Escritório Especializado <br />
                <span className="text-blue-300">Processo 100% online</span>
              </h1>
              <h2 className="text-5xl text-center">
                Faça agora sua consulta{" "}
                <span className="text-blue-300">grátis</span>.
              </h2>
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
              title: "Falar agora com um advogado trabalhista",
              children: [
                {
                  _block: "button",
                  onClick:
                    "whatsapp:5511994695279?text=Oi, tudo bem? Gostaria de falar com um advogado trabalhista, por favor. Obrigado!",
                  variant: "green",
                  text: (
                    <>
                      <i className="text-2xl mr-2 fab fa-whatsapp"></i> Fale
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

    // ========
    // Features
    // ========

    {
      _block: "row",
      css: `
      margin-top: 30px;
        background-color: #eee;
      `,
      children: [
        {
          _block: "row",
          className: "w-full",
          children: [
            {
              _block: "text",
              content: (
                <h1 className="text-5xl text-center text-primary my-10 px-5">
                  Como Trabalhamos
                </h1>
              ),
            },
          ],
        },

        {
          _block: "row",
          className: "w-full px-10",
          css: `
            @media(min-width: 901px) {
              margin-bottom: 2.5rem;
            }

            .col {
              margin-bottom: 2rem;
            }

          `,
          children: [
            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-briefcase"></i>
                      <p className="text-xl text-center my-2">
                        Trabalho sem Registro
                      </p>
                      <p className="text-center">
                        Tenha seu vínculo empregatício reconhecido e suas verbas
                        e direitos assegurados.
                      </p>
                    </>
                  ),
                },
              ],
            },

            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-wheelchair"></i>
                      <p className="text-xl text-center my-2">
                        Acidente de Trabalho
                      </p>
                      <p className="text-center">
                        Todo trabalhador que se envolve em um acidente de
                        trabalho tem direito à uma reparação.
                      </p>
                    </>
                  ),
                },
              ],
            },
            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-user-clock"></i>
                      <p className="text-xl text-center my-2">Hora Extra</p>
                      <p className="text-center">
                        Receba por todas as horas extras acumuladas durante sua
                        jornada de trabalho.
                      </p>
                    </>
                  ),
                },
              ],
            },
            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-legal"></i>
                      <p className="text-xl text-center my-2">
                        Reversão Justa Causa
                      </p>
                      <p className="text-center">
                        Muitos não sabem, mas a justa causa pode ser revertida
                        em favor do empregado.
                      </p>
                    </>
                  ),
                },
              ],
            },
          ],
        },

        {
          _block: "row",
          className: "w-full mb-10 px-10",
          css: `
            .col {
              margin-bottom: 2rem;
            }
          `,
          children: [
            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-ambulance"></i>
                      <p className="text-xl text-center my-2">
                        Jornada Abusivas
                      </p>
                      <p className="text-center">
                        Intervalos de repouso curtos demais e jornadas com mais
                        horas do que o máximo previsto em lei.
                      </p>
                    </>
                  ),
                },
              ],
            },

            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-restroom"></i>
                      <p className="text-xl text-center my-2">Assédio</p>
                      <p className="text-center">
                        Seja devidamente indenizado por eventual assédio que
                        tenha sofrido no ambiente de trabalho.
                      </p>
                    </>
                  ),
                },
              ],
            },
            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-fire"></i>
                      <p className="text-xl text-center my-2">Periculosidade</p>
                      <p className="text-center">
                        A maioria das empresas não paga o valor devido a título
                        de periculosidade.
                      </p>
                    </>
                  ),
                },
              ],
            },
            {
              _block: "col",
              children: [
                {
                  _block: "text",
                  className: "text-center",
                  content: (
                    <>
                      <i className="text-3xl text-primary fa fa-biohazard"></i>
                      <p className="text-xl text-center my-2">Insalubridade</p>
                      <p className="text-center">
                        A maioria das empresas não paga o valor devido a título
                        de insalubridade.
                      </p>
                    </>
                  ),
                },
              ],
            },
          ],
        },
      ],
    },

    // =======
    // Contact
    // =======
    {
      _block: "row",
      className: "rounded",
      css: `
        margin-top: 32px;
        background-color: #fff;
        padding: 20px;
        width: 100%;
        @media(min-width: 901px) {
          padding: 40px 25%;
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
          title: "Solicite uma ligação de nossos advogados",
          redir: "/meuprocesso.trabalhista-obrigado",
          submit_button: {
            children: (
              <>
                <i className="fa fa-phone mr-2"></i> Solicitar Ligação
              </>
            ),
            variant: "primary",
            className: "w-full",
          },
          children: [
            {
              _block: "field",
              required: true,
              key: "name_field",
              name: "name",
              placeholder: "Nome",
              fullWidth: true,
            },
            {
              _block: "field",
              required: true,
              key: "phone_field",
              type: "tel",
              name: "phone",
              placeholder: "Telefone",
              fullWidth: true,
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
