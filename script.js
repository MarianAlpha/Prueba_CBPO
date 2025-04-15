function templateHTML(user) {
    return `
        <article class="col-12 col-sm-6 col-md-5 col-lg-4 my-2">
            <section class="card">
                <header class="card-header">
                    <h4 class="card-title">Información Básica</h4>
                </header>
                <section class="card-body">
                    <dl class="row">
                        <dt class="col-sm-4">Nombre</dt>
                        <dd class="col-sm-8 name">${user.name}</dd>

                        <dt class="col-sm-4">Email</dt>
                        <dd class="col-sm-8 email">${user.email}</dd>
                    </dl>
                    <section class="additional-info" style="display: none;">
                        <dl class="row">
                            <dt class="col-sm-4">Username</dt>
                            <dd class="col-sm-8 username">${user.username}</dd>

                            <dt class="col-sm-4">Dirección</dt>
                            <dd class="col-sm-8 address">${user.address.street}, ${user.address.city}</dd>

                            <dt class="col-sm-4">Teléfono</dt>
                            <dd class="col-sm-8 phone">${user.phone}</dd>

                            <dt class="col-sm-4">Website</dt>
                            <dd class="col-sm-8 website">${user.website}</dd>
                            
                            <dt class="col-sm-4">Empresa</dt>
                            <dd class="col-sm-8 company">${user.company.name}</dd>
                        </dl>
                    </section>     
                </section>
                
                <button type="button" class="btn btn-info btn-lg btn-block btn-show-more">Ver Detalles</button>
                <button type="button" class="btn btn-outline-warning btn-favorite" onclick="toggleFavorite(${user.id}, this)">⭐ Favorito</button>
            </section>
        </article>
    `;
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector(".row");

        data.forEach(user => {
            const cardHTML = templateHTML(user);
            container.innerHTML += cardHTML;
        });

        showMoreButtons();
    })
    .catch(error => console.error('Error fetching data:', error));

function toggleFavorite(userId, btn) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(userId)) {

        favorites = favorites.filter(id => id !== userId);
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-outline-warning");
        console.log(`Usuario ${userId} removido de favoritos`);

    } else {

        favorites.push(userId);
        btn.classList.remove("btn-outline-warning");
        btn.classList.add("btn-warning");
        console.log(`Usuario ${userId} marcado como favorito`);

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function showMoreButtons() {
    document.querySelectorAll(".btn-show-more").forEach(button => {
        button.addEventListener("click", function () {
            const additionalInfo = this.parentElement.querySelector(".additional-info");
            if (additionalInfo.style.display === "none") {
                additionalInfo.style.display = "block";
                this.textContent = "Ver menos";
            } else {
                additionalInfo.style.display = "none";
                this.textContent = "Ver Detalles";
            }
        });
    });
}