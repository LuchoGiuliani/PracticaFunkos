
module.exports = {
  homeMobile: (req, res) => {
    return res.render("homeMobile", {
      title: "Home Mobile",
      styles: ["homeMobile","style"]
    });
  },
  listado: (req, res) => {
    return res.render("listado", {
      title: "Listado Desktop",
      styles: ["listado","style"]
    })
  },
  home: (req, res) => {
    return res.render("home", {
      title: "Home Desktop",
      styles: ["homeDesktop","style"]
    })
  },
  listadoMobile: (req, res) => {
    return res.render("listadoMobile", {
      title: "listado Mobile",
      styles: ["listadoMobile","style"]
    })
  }
 
};
