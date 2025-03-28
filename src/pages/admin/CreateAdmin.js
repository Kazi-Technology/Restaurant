import logo from '../../assets/logos/logoDelicius.png'

const CreateAdmin = () => {
    return (
        <div className="form-creer-admin d-flex align-items-center justify-content-center">

            <img width="150" src={logo} alt="burger" id="brg" className="position-absolute" />

            <form action="home" method="get" className="">
            
                <h2>Créer un compte</h2>
                <p>Saisisez votre identifiant et mot de passe admin <br /> puis cliquer sur créer un compte</p>

                <input type="text" placeholder="Identifiant" className="form-control mb-3 p-3 border-0" name="ident" />
                <input type="password" placeholder="Mot de passe" className="form-control p-3 border-0 mb-3" name="mdp" />
                <input type="password" placeholder="Confirmer mot de passe" className="form-control p-3 border-0 mb-4" name="mdpConfirm" />

                <button type="submit" className="btn btn-danger p-2 w-100">Se Connecter</button>
                <a href="/admin/" className="text-dark">Avez-vous déjà un compte ? se connecter</a>

            </form>


        </div>
    );
};

export default CreateAdmin;