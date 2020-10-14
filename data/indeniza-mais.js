const page = {
  logo: {
    children: [
      {
        _block: "image",
        src:
          "http://www.indenizamais.com.br/wp-content/themes/indeniza/img/Indeniza%20Mais.png",
        css: `
          width: 150px;
        `,
      },
    ],
  },
  children: [
    // Section 1
    {
      _block: "row",
      css: `
        padding-top: 32px;
        padding-bottom: 32px;
        
      `,
      variant: "container",
      children: [
        {
          _block: "col",
          children: [
            {
              _block: "image",
              css: `
                max-width: 50%;
                margin-right: 32px;
                align-self: flex-end;
                @media(max-width: 900px) {
                  max-width: 70%;
                  margin-right: 0;
                  align-self: center;
                }
              `,
              src:
                "http://www.indenizamais.com.br/wp-content/themes/indeniza/img/boneco-indeniza-mais.png",
            },
          ],
        },
        {
          _block: "col",
          children: [
            {
              _block: "markdown",
              content: `# Você foi vítima de acidente de trânsito? Fez cirurgia ou ficou com sequelas?
## Receba até R$13.500 do Seguro DPVAT!
### Solicite orientação gratuita de nossa equipe e descubra se você tem direito a receber indenização do seguro DPVAT.`,
            },
          ],
        },
      ],
    },

    // Section 2
    {
      _block: "row",
      css: `
        background-color: #eee;
        padding-top: 32px;
        padding-bottom: 32px;
      `,
      variant: "container",
      children: [
        {
          _block: "col",
          children: [
            {
              _block: "markdown",
              content: `**Você se encaixa em alguma dessas situações?**
- Sofreu acidente de trânsito?
- Passou por alguma cirurgia depois do acidente?
- Ficou com algum tipo de sequela?

Se você respondeu sim a pelo menos uma dessas perguntas, é um forte candidato a receber a indenização.

**Porque falar com a IndenizaMais?**

- Assessores especializados
- Dê entrada sem sair de casa
- Acompanhe seu processo pelo celular`,
            },
          ],
        },
        {
          _block: "col",
          children: [
            {
              _block: "row",
              vertical: true,
              children: [
                {
                  _block: "form",
                  variant: "panel",
                  title: "Descubra se você tem direito ao DPVAT",
                  submit_button: {
                    children: "Eu tenho direito?",
                    // fullWidth: true,
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
                    {
                      _block: "field",
                      name: "comment",
                      placeholder:
                        "(Opcional) Conte-nos um pouco mais sobre seu caso",
                      widget: "textarea",
                      fullWidth: true,
                    },
                  ],
                },
                {
                  _block: "text",
                  content: "Descubra mais falando com a IndenizaMais",
                },
                {
                  _block: "whatsapp_link",
                  phone: "5511999668246",
                },
                {
                  _block: "text",
                  content: "contato@indenizamais.com.br | indenizamais.com.br",
                },
              ],
            },
          ],
        },
      ],
    },

    // Section 3
    {
      _block: "text",
      style: {
        padding: "50px 0",
        textAlign: "center",
      },
      content: "Indeniza Mais - Todos os direitos reservados",
    },
  ],
};

export default page;
