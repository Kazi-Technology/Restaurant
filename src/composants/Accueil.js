import logo from '../assets/logos/logoDelicius.png';
import burger from '../assets/images/fille.png'

const Accueil = () => {
    return (
        <div>

            <img width="150" src={logo} alt="burger" id="brg" className="position-absolute" />

            <div className="home d-flex align-items-center justify-content-center flex-column">

                <img width="200" src={burger} alt="logo" className="mb-1" />
                <h2>Bienvenue chez nous <span className="text text-danger">!</span></h2>
                <p className="p-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae illo aliquam dolore quaerat aliquid dignissimos. Facere non alias delectus numquam, repellat ab, qui, voluptatem quo vitae adipisci recusandae beatae?</p>
                <a href="/categorie/" role="button" className="btn btn-danger p-2" >Cliquez pour passer à la commande</a>

            </div>

        </div>
    );
};

export default Accueil;