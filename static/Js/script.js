document.addEventListener("DOMContentLoaded", () => {

    const reduceMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    /* =========================================
       PANTALLA DE ARRANQUE
    ========================================= */

    const bootScreen = document.getElementById("bootScreen");

    if (bootScreen) {

        if (reduceMotion || sessionStorageGet("opBooted")) {
            bootScreen.classList.add("done");
        } else {
            setTimeout(() => bootScreen.classList.add("done"), 2200);
            sessionStorageSet("opBooted", "1");
        }
    }

    function sessionStorageGet(key) {
        try {
            return sessionStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function sessionStorageSet(key, value) {
        try {
            sessionStorage.setItem(key, value);
        } catch (error) {
            return;
        }
    }


    /* =========================================
       AVISO RETRO (reemplaza los alert)
    ========================================= */

    const toast = document.getElementById("konamiToast");
    let toastTimer;

    function showToast(title, text) {

        if (!toast) {
            return;
        }

        toast.querySelector("span").textContent = title;
        toast.querySelector("small").textContent = text;
        toast.classList.add("show");

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
    }


    /* =========================================
       MENÚ RESPONSIVO
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =========================================
       LINK ACTIVO SEGÚN LA SECCIÓN
    ========================================= */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if ("IntersectionObserver" in window && sections.length) {

        const sectionObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                navigationLinks.forEach(link => link.classList.remove("active"));

                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        sections.forEach(section => sectionObserver.observe(section));

        window.addEventListener("scroll", () => {
            if (window.scrollY < 200) {
                navigationLinks.forEach(link => link.classList.remove("active"));
                const homeLink = document.querySelector('.nav-link[href="#inicio"]');
                if (homeLink) {
                    homeLink.classList.add("active");
                }
            }
        }, { passive: true });
    }


    /* =========================================
       HEADER AL HACER SCROLL
    ========================================= */

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }, { passive: true });
    }


    /* =========================================
       PIXELES FLOTANTES
    ========================================= */

    const pixelColors = ["#8b3dff", "#b98cff", "#52e5ff", "#39ff88", "#ff4f8b"];

    document.querySelectorAll(".pixel-sky").forEach(sky => {

        const total = Number(sky.dataset.pixels) || 30;

        for (let i = 0; i < total; i++) {

            const pixel = document.createElement("span");
            const size = [4, 6, 8, 10][Math.floor(Math.random() * 4)];

            pixel.className = "sky-pixel";
            pixel.style.setProperty("--x", `${Math.random() * 100}%`);
            pixel.style.setProperty("--y", `${Math.random() * 100}%`);
            pixel.style.setProperty("--s", `${size}px`);
            pixel.style.setProperty("--c", pixelColors[Math.floor(Math.random() * pixelColors.length)]);
            pixel.style.setProperty("--d", `${4 + Math.random() * 6}s`);
            pixel.style.setProperty("--delay", `${Math.random() * -8}s`);

            sky.appendChild(pixel);
        }
    });


    /* =========================================
       EFECTO MÁQUINA DE ESCRIBIR
    ========================================= */

    document.querySelectorAll(".typewriter").forEach(element => {

        const text = element.dataset.type || element.textContent;

        if (reduceMotion) {
            return;
        }

        element.textContent = "";
        let index = 0;

        setTimeout(function typeLetter() {

            element.textContent = text.slice(0, index + 1);
            index++;

            if (index < text.length) {
                setTimeout(typeLetter, 55);
            }
        }, 1900);
    });


    /* =========================================
       ARTEFACTOS DEL HERO (NODOS 72, 83, 94, 00)
    ========================================= */

    const artifacts = [
        {
            year: "1972",
            name: "Primeras experiencias comerciales",
            description: "El videojuego comienza a convertirse en una experiencia comercial y cultural."
        },
        {
            year: "1983",
            name: "La consola llega a casa",
            description: "Los sistemas domésticos transforman la manera de jugar y crean nuevas generaciones de jugadores."
        },
        {
            year: "1994",
            name: "Una nueva dimensión",
            description: "Las nuevas tecnologías gráficas transforman la manera de crear y experimentar videojuegos."
        },
        {
            year: "2000",
            name: "El videojuego conectado",
            description: "Internet y las nuevas plataformas conectan a jugadores de todo el mundo."
        }
    ];

    const artifactInfo = document.getElementById("artifactInfo");
    const artifactYear = document.getElementById("artifactYear");
    const artifactName = document.getElementById("artifactName");
    const artifactDescription = document.getElementById("artifactDescription");
    const orbitNodes = document.querySelectorAll(".orbit-node");
    let artifactTimer;

    function updateArtifact(index) {

        const artifact = artifacts[index];

        if (!artifact || !artifactInfo) {
            return;
        }

        artifactYear.textContent = artifact.year;
        artifactName.textContent = artifact.name;
        artifactDescription.textContent = artifact.description;

        orbitNodes.forEach(node => node.classList.remove("active"));

        if (orbitNodes[index]) {
            orbitNodes[index].classList.add("active");
        }

        artifactInfo.classList.add("show");

        clearTimeout(artifactTimer);
        artifactTimer = setTimeout(() => {
            artifactInfo.classList.remove("show");
            orbitNodes.forEach(node => node.classList.remove("active"));
        }, 5000);
    }

    orbitNodes.forEach(node => {

        node.addEventListener("click", () => {
            updateArtifact(Number(node.dataset.era));
        });
    });


    /* =========================================
       CONTADORES DE ESTADÍSTICAS
    ========================================= */

    const counters = document.querySelectorAll("[data-count]");

    function animateCounter(counter) {

        const target = Number(counter.dataset.count);
        const prefix = counter.dataset.prefix || "";
        const duration = 1400;
        const start = performance.now();

        function frame(now) {

            const progress = Math.min((now - start) / duration, 1);
            const steps = Math.floor(progress * 20) / 20;

            counter.textContent = prefix + Math.round(target * steps);

            if (progress < 1) {
                requestAnimationFrame(frame);
            }
        }

        requestAnimationFrame(frame);
    }

    if ("IntersectionObserver" in window && !reduceMotion) {

        const counterObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: .6 });

        counters.forEach(counter => counterObserver.observe(counter));
    }


    /* =========================================
       APARICIÓN AL HACER SCROLL
    ========================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && !reduceMotion) {

        const revealObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: .12 });

        revealElements.forEach(element => revealObserver.observe(element));

    } else {
        revealElements.forEach(element => element.classList.add("visible"));
    }


    /* =========================================
       LÍNEA DEL TIEMPO
    ========================================= */

    const timelinePoints = document.querySelectorAll(".timeline-point");
    const timelineProgress = document.getElementById("timelineProgress");
    const timelineYear = document.getElementById("timelineYear");
    const timelineTitle = document.getElementById("timelineTitle");
    const timelineText = document.getElementById("timelineText");
    const timelinePanel = document.querySelector(".timeline-panel");
    let timelineIndex = 0;
    let timelineAuto;

    function selectEra(index) {

        const point = timelinePoints[index];

        if (!point) {
            return;
        }

        timelineIndex = index;

        timelinePoints.forEach((item, i) => {
            item.classList.toggle("active", i === index);
            item.classList.toggle("passed", i < index);
            item.setAttribute("aria-selected", String(i === index));
        });

        if (timelineProgress) {
            timelineProgress.style.width = `${(index / (timelinePoints.length - 1)) * 100}%`;
        }

        if (timelineYear) {
            timelineYear.textContent = point.querySelector(".timeline-year").textContent;
            timelineTitle.textContent = point.dataset.title;
            timelineText.textContent = point.dataset.text;
        }

        if (timelinePanel) {
            timelinePanel.classList.remove("swap");
            void timelinePanel.offsetWidth;
            timelinePanel.classList.add("swap");
        }
    }

    function startTimelineAuto() {

        clearInterval(timelineAuto);

        if (reduceMotion) {
            return;
        }

        timelineAuto = setInterval(() => {
            selectEra((timelineIndex + 1) % timelinePoints.length);
        }, 4500);
    }

    timelinePoints.forEach((point, index) => {

        point.addEventListener("click", () => {
            selectEra(index);
            startTimelineAuto();
        });
    });

    if (timelinePoints.length) {
        selectEra(0);
        startTimelineAuto();
    }


    /* =========================================
       PERSONAJES PIXEL ART: BIT Y MIAU
    ========================================= */

    const stageLeft = document.querySelector(".stage-left");
    const spriteBit = document.getElementById("spriteBit");
    const coinHud = document.getElementById("coinHud");
    let coins = 0;
    let jumping = false;

    function bitJump() {

        if (!stageLeft || jumping) {
            return;
        }

        jumping = true;
        stageLeft.classList.add("is-jumping");

        setTimeout(() => {
            coins++;
            if (coinHud) {
                coinHud.textContent = `× ${String(coins).padStart(2, "0")}`;
                coinHud.parentElement.classList.remove("bump");
                void coinHud.parentElement.offsetWidth;
                coinHud.parentElement.classList.add("bump");
            }
        }, 300);

        setTimeout(() => {
            stageLeft.classList.remove("is-jumping");
            jumping = false;
        }, 900);
    }

    if (spriteBit) {
        spriteBit.addEventListener("click", bitJump);
    }

    if (stageLeft && !reduceMotion) {
        setInterval(bitJump, 3200);
    }

    const stageRight = document.querySelector(".stage-right");
    const spriteMiau = document.getElementById("spriteMiau");
    const miauBubble = document.getElementById("miauBubble");
    const miauWords = ["¡MIAU!", "¡NYA!", "¡GG!", "¡1UP!", "PRRR..."];

    function miauTalk() {

        if (!stageRight || !miauBubble) {
            return;
        }

        miauBubble.textContent = miauWords[Math.floor(Math.random() * miauWords.length)];
        miauBubble.classList.add("show");
        stageRight.classList.add("is-happy");

        setTimeout(() => stageRight.classList.remove("is-happy"), 500);
        setTimeout(() => miauBubble.classList.remove("show"), 1500);
    }

    if (spriteMiau) {
        spriteMiau.addEventListener("click", miauTalk);
    }

    if (stageRight && !reduceMotion) {
        setInterval(miauTalk, 6500);
    }


    /* =========================================
       EXPLOSIÓN DE PIXELES AL HACER CLIC
    ========================================= */

    if (!reduceMotion) {

        document.addEventListener("click", event => {

            if (event.target.closest(".modal-overlay, input, label")) {
                return;
            }

            for (let i = 0; i < 10; i++) {

                const particle = document.createElement("span");
                const angle = (Math.PI * 2 * i) / 10;
                const distance = 30 + Math.random() * 30;

                particle.className = "pixel-burst";
                particle.style.left = `${event.clientX - 4}px`;
                particle.style.top = `${event.clientY - 4}px`;
                particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
                particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
                particle.style.setProperty("--c", pixelColors[i % pixelColors.length]);

                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 650);
            }
        });
    }


    /* =========================================
       CÓDIGO KONAMI: ↑ ↑ ↓ ↓ ← → ← → B A
    ========================================= */

    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let konamiIndex = 0;

    document.addEventListener("keydown", event => {

        const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

        konamiIndex = key === konami[konamiIndex] ? konamiIndex + 1 : (key === konami[0] ? 1 : 0);

        if (konamiIndex === konami.length) {

            konamiIndex = 0;
            const active = document.body.classList.toggle("rainbow");

            showToast(
                active ? "★ CHEAT ACTIVADO ★" : "CHEAT DESACTIVADO",
                active ? "MODO ARCOÍRIS DESBLOQUEADO" : "VOLVIENDO AL MODO NORMAL"
            );
        }
    });


    /* =========================================
       MODALES DE INICIAR SESIÓN Y REGISTRO
    ========================================= */

    function openModal(id) {

        const modal = document.getElementById(id);

        if (!modal) {
            return;
        }

        document.querySelectorAll(".modal-overlay.open").forEach(open => closeModal(open));

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");

        const firstInput = modal.querySelector("input");
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 200);
        }
    }

    function closeModal(modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    }

    document.querySelectorAll("[data-modal-open]").forEach(button => {
        button.addEventListener("click", () => openModal(button.dataset.modalOpen));
    });

    document.querySelectorAll("[data-switch-modal]").forEach(button => {
        button.addEventListener("click", () => openModal(button.dataset.switchModal));
    });

    document.querySelectorAll(".modal-overlay").forEach(modal => {

        modal.addEventListener("click", event => {
            if (event.target === modal || event.target.closest("[data-modal-close]")) {
                closeModal(modal);
            }
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            document.querySelectorAll(".modal-overlay.open").forEach(modal => closeModal(modal));
        }
    });

    const loginAlert = document.querySelector("#loginModal .auth-alert");
    if (loginAlert) {
        openModal("loginModal");
    }


    /* =========================================
       BOTONES DE COLECCIÓN, COMUNIDAD Y MARKETPLACE
    ========================================= */

    const collectionButton = document.querySelector(".collection-copy .button");

    if (collectionButton) {
        collectionButton.addEventListener("click", event => {
            event.preventDefault();
            showToast("PRÓXIMAMENTE", "LA CREACIÓN DE COLECCIONES ESTARÁ DISPONIBLE PRONTO");
        });
    }

    const communityButton = document.querySelector(".community-action .button");

    if (communityButton) {
        communityButton.addEventListener("click", event => {
            event.preventDefault();
            showToast("¡GRACIAS, PLAYER!", "PRONTO PODRÁS FORMAR PARTE DE OUR PATH");
        });
    }

    document.querySelectorAll(".product-info a").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const productCard = link.closest(".product-card");
            const productName = productCard?.querySelector("h3")?.textContent || "este artículo";

            showToast(productName.toUpperCase(), "LA FICHA DEL ARTÍCULO ESTARÁ DISPONIBLE PRÓXIMAMENTE");
        });
    });


    /* =========================================
       PREVENIR ERRORES POR IMÁGENES
    ========================================= */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", () => {
            image.classList.add("img-error");
            image.alt = "Imagen no disponible";
        });
    });


    /* =========================================
       MODALES DE LA PÁGINA DE USUARIOS
    ========================================= */

    const toggleEditPass = document.getElementById("toggleEditPass");

    if (toggleEditPass) {

        toggleEditPass.addEventListener("click", function () {
            const input = document.getElementById("editClave");
            const icon = this.querySelector("i");
            const show = input.type === "password";
            input.type = show ? "text" : "password";
            icon.classList.toggle("fa-eye", !show);
            icon.classList.toggle("fa-eye-slash", show);
        });
    }

    const editUserModal = document.getElementById("editUserModal");

    if (editUserModal) {

        editUserModal.addEventListener("show.bs.modal", function (e) {
            const b = e.relatedTarget;
            if (!b || !b.dataset.id) return;

            document.getElementById("editId").value = b.dataset.id;
            document.getElementById("editIdLabel").textContent = b.dataset.id;
            document.getElementById("editNombre").value = b.dataset.nombre;
            document.getElementById("editCorreo").value = b.dataset.correo;
            document.getElementById("editPerfil").value = b.dataset.perfil;
            document.getElementById("editImagenActual").value = b.dataset.imagen;
            document.getElementById("editAvatar").src = "img/usuarios/" + b.dataset.imagen;
            document.getElementById("editClave").value = "";
        });
    }

    const deleteUserModal = document.getElementById("deleteUserModal");

    if (deleteUserModal) {

        deleteUserModal.addEventListener("show.bs.modal", function (e) {
            const b = e.relatedTarget;
            if (b && b.dataset.id) {
                document.getElementById("deleteId").value = b.dataset.id;
            }
        });
    }


    console.log(
        "%cOur Path%c | Prueba el código Konami: ↑ ↑ ↓ ↓ ← → ← → B A",
        "color:#8b3dff;font-weight:bold",
        "color:#39ff88"
    );
});
