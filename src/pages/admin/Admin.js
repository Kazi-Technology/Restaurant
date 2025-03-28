import logo from '../../assets/logos/logoDelicius.png'

const Admin = () => {
    return (
        <div className="form-creer-admin d-flex align-items-center justify-content-center">

            <img width="150" src={logo} alt="burger" id="brg" className="position-absolute" />

            <form action="home" method="get" className="p-2">
            
                <h1>S'authentifier</h1>
                <p>Saisisez votre identifiant et mot de passe admin <br /> pour vous connecter</p>

                <input type="text" placeholder="Identifiant" className="form-control mb-3 p-3 border-0" name="ident" />
                <input type="password" placeholder="Mot de passe" className="form-control p-3 border-0 mb-4" name="mdp" />

                <button type="submit" className="btn btn-danger p-2 w-100">Se Connecter</button>
                <a href="creer" className="text-dark">Créer un autre administrateur ?</a>

            </form>


        </div>
    );
};

export default Admin;