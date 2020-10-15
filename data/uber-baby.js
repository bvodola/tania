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
        content: "# UberBaby",
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
        background-image: url('/images/baby.jpg');
        background-size: cover;
        background-position: center;    
        background-attachment: fixed;
      `,
      variant: "container",
      children: [
        {
          _block: "col",
          children: [
            {
              _block: "markdown",
              content: `# Aproveite os momentos e deixe o resto conosco!
## Está cansada ou cansado de ter que se preocupar com as necessidades básicas do seu bebe? Nós estamos aqui pra te ajudar. 
### Nunca mais perca seu tempo calculado fraldas ou virando as latas de leite para renderem mais.`,
            },
            {
              _block: "button",
              variant: "primary",
              text: "Veja nossos Pacotes",
            },
          ],
        },
        {
          _block: "col",
          children: [],
        },
      ],
    },

    // =========
    // Section 2
    // =========
    {
      _block: "row",
      css: "padding: 0; !important",
      children: [
        {
          _block: "col",
          css: `
            padding-left: calc(10% + 16px); 
            background-color: #ffefe6;
            @media(min-width: 900px) {
              min-height: 420px;
            }
          `,
          children: [
            {
              _block: "image",
              src: "/images/beach.jpg",
            },
          ],
        },
        {
          _block: "col",
          css: `
            padding: 5%;
            padding-right: calc(10% + 16px);
            
          `,
          children: [
            {
              _block: "markdown",
              content: `# O que podemos fazer por você?
Nós só queremos uma coisa: que você relaxe! Sabemos da frustação que é quando o filho não tem a fralda que precisa, depois do banho, ou quando a mamadeira fica vazia, pois o leite está no final. Conte conosco e nunca mais se preocupe com a falta dos produtos essenciais para seu filho ou filha!`,
            },
          ],
        },
      ],
    },

    // =========
    // Section 2
    // =========
    {
      _block: "markdown",
      content: `# Com a UberBaby você tem`,
      css: `
        text-align: center;
        padding: 20px 0;
        background: #fafafa;
      `,
    },
    {
      _block: "row",
      variant: "container",
      css: "background: #fafafa;",
      children: [
        {
          _block: "features",
          features: [
            {
              img:
                "https://www.flaticon.com/svg/static/icons/svg/1083/1083822.svg",
              title: "Noites de sono melhores",
              description: "",
            },
            {
              img:
                "https://www.flaticon.com/svg/static/icons/svg/1012/1012661.svg",
              title: "Fralda na hora certa sem faltar",
              description: "",
            },
            {
              img:
                "https://www.flaticon.com/svg/static/icons/svg/3567/3567345.svg",
              title: "Leite e mais leite para dar e vender",
              description: "",
            },
          ],
        },
      ],
    },
  ],
};

export default page;
