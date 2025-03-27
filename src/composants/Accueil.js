import logo from '../assets/logos/logo.png';

const Accueil = () => {
    return (
        <div className="home d-flex align-items-center justify-content-center flex-column">

            <img width="250" src={logo} alt="logo" className="mb-3" />
            <h1>Bienvenue chez nous !</h1>
            <p className="text-center p-3 container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae illo aliquam dolore quaerat aliquid dignissimos. Facere non alias delectus numquam, repellat ab, qui, voluptatem quo vitae adipisci recusandae beatae?</p>
            <a href="/categorie/" role="button" className="btn btn-danger p-2" >Cliquez pour passer à la commande</a>

        </div>
    );
};

export default Accueil;