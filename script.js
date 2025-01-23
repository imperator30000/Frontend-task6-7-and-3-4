document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".menu");
  
    mobileMenuButton.addEventListener("click", () => {
      menu.classList.toggle("menu--open");
    });
  

    document.querySelectorAll(".menu_link").forEach((menuLink) => {
        menuLink.addEventListener("click", (event) => {
          const submenu = menuLink.nextElementSibling;
          if (submenu && submenu.classList.contains("submenu")) {
            document.querySelectorAll(".submenu").forEach((submenu_) => {
              if (submenu_ !== submenu) {
                submenu_.classList.remove("menu--open");
                submenu.parentElement.classList.remove("clicked")
              }
            });
            submenu.classList.toggle("menu--open");
        }
        document.querySelectorAll(".menu_link").forEach((link) => {
        if (link !== menuLink) {
          link.classList.remove("clicked");
        }
      });
        menuLink.classList.toggle("clicked")
        });
    });

    document.querySelectorAll(".submenu_link").forEach((submenulink) => {
        submenulink.addEventListener("click", (event) => {
          const nestedSubmenu = submenulink.nextElementSibling;
          if (nestedSubmenu && nestedSubmenu.classList.contains("submenu")) {
            document.querySelectorAll(".submenu_nested").forEach((submenu) => {
              if (submenu !== nestedSubmenu) {
                submenu.classList.remove("menu--open");
                submenu.parentElement.classList.remove("clicked")
              }
            });
            nestedSubmenu.classList.toggle("menu--open");
            nestedSubmenu.parentElement.classList.toggle("clicked")
          }
        });
      });
    
  });



  