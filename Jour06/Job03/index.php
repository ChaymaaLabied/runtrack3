<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Maquette Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <script src="script.js" defer></script>
</head>

<body class="text-white">
    <header class="bg-dark">
        <nav class="navbar navbar-expand-lg navbar-dark bg-gradient"
            style="background: linear-gradient(to right,#1d1d1d,#4b4b4b);">
            <div class="container">
                <a class="navbar-brand me-4" href="#">LPTF</a>
                <div class="collapse navbar-collapse show">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="https://laplateforme.io">Accueil</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Units</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Skills</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main class="container-fluid bg-light text-white py-5">
        <h1 class="text-center fw-light text-dark mb-5">La Plateforme_</h1>

        <div class="row g-4 justify-content-center">
            <!-- Carte Papillon -->
            <section class="col-12 col-md-3">
                <div class="card text-dark">
                    <img src="images/image_papillon.jpg" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">Un Papillon</h5>
                        <p class="card-text">Un papillon c'est un peu comme une chenille, mais un peu avec des ailes, ne pas ingérer.</p>
                        <button class="btn btn-primary w-100" id="btnPapillon">Commander votre propre papillon</button>
                    </div>
                </div>
            </section>

            <!-- Modal Papillon -->
            <div class="modal" tabindex="-1" id="modalPapillon">
                <div class="modal-dialog">
                    <div class="modal-content text-black">
                        <div class="modal-header border-0">
                            <h5 class="modal-title">Achat</h5>
                        </div>
                        <div class="modal-body">
                            Achat du papillon confirmé
                        </div>
                        <div class="modal-footer border-0">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Jumbotron / Section centrale -->
            <section class="col-12 col-md-6 bg-body-tertiary text-dark p-4 rounded">
                <h2>Bonjour , monde !</h2>
                <p>
                    Il existe plusieurs visions du terme : le monde est la matière, l'espace, et les phénomènes qui nous sont accessibles avec les sens,
                    l'expérience, ou la raison, le sens le plus courant désigne notre planète, la Terre, avec des habitants et son environnement plus ou moins naturel.
                </p>
                <hr class="border-dark w-75 mx-auto">
                <p>Le sens étendu désigne l'univers dans son ensemble</p>
                <div class="d-flex align-items-center gap-3 mb-4">
                    <button class="btn btn-danger" id="btnReboot">Rebooter le monde</button>
                    <div class="spinner-border text-primary" id="mainSpinner"></div>
                </div>
                <nav class="d-flex justify-content-center justify-content-md-end">
                    <ul class="pagination pagination-sm mb-0">
                        <li class="page-item"><a class="page-link" href="#" data-page="prev" aria-label="Previous">&laquo;</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page="2">2</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page="3">3</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page="next" aria-label="Next">&raquo;</a></li>
                    </ul>
                </nav>
            </section>

            <!-- Liste à droite -->
            <section class="col-12 col-md-3 d-flex flex-column gap-2">
                <button class="btn btn-outline-primary">Limbes</button>
                <button class="btn btn-outline-primary">Luxure</button>
                <button class="btn btn-outline-primary">Gourmandise</button>
                <button class="btn btn-outline-primary">Avarice</button>
                <button class="btn btn-outline-primary">Colère</button>
                <button class="btn btn-outline-primary">Heresie</button>
                <button class="btn btn-outline-primary">Violence</button>
                <button class="btn btn-outline-primary">Ruse et tromperie</button>
                <button class="btn btn-outline-primary">Trahison</button>
                <button class="btn btn-outline-primary">Internet Explorer</button>
            </section>
        </div>

        <!-- Progress bar + boutons -->
        <div class="d-flex flex-row flex-wrap align-items-center gap-2 mt-3">
            <button id="btn-progress-minus" class="btn btn-outline-secondary">−</button>
            <div class="progress flex-grow-1" style="height: 12px;">
                <div id="mainProgress" class="progress-bar progress-bar-striped bg-warning" role="progressbar"
                    style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
            <button id="btn-progress-plus" class="btn btn-outline-secondary">+</button>
        </div>

        <!-- Formulaire -->
        <div class="row mt-4 g-5">
            <div class="col-md-6">
                <p class="text-dark fw-light mb-3">Recevez votre copie gratuite d'Internet 2 et 2.1 Beta :</p>
                <div class="input-group mb-3">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="username" placeholder="Username">
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="password1" placeholder="Mot de passe">
                    <span class="input-group-text">@example.com</span>
                </div>
                <label for="dogecoin" class="form-label text-dark">URL des internets 2 et 2.1 Beta</label>
                <div class="input-group mb-3">
                    <span class="input-group-text">dogeCoin</span>
                    <input type="text" class="form-control" id="dogecoin">
                    <span class="input-group-text">.00</span>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">https://l33t.lpf/dkwp/berklusconimt/</span>
                    <input type="text" class="form-control" id="url">
                </div>
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label text-dark">Email address</label>
                <input type="email" class="form-control mb-3" id="email" placeholder="Email">

                <label for="password2" class="form-label text-dark">Password</label>
                <input type="password" class="form-control mb-3" id="password2" placeholder="Password">

                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="check">
                    <label class="form-check-label text-dark" for="check">Check me out</label>
                </div>
                <button class="btn btn-primary" id="submitForm">Submit</button>
            </div>

            <!-- Modal formulaire -->
            <div class="modal fade" id="formModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content text-dark">
                        <div class="modal-header">
                            <h5 class="modal-title text-dark">Récapitulatif du formulaire</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body text-dark" id="modalContent"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>