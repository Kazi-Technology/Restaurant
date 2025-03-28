import data from '../data/categories.json'

const TableProduits = () => {
    return (
        <div>
            
            <table className="table rounded">

                <thead className="table-danger">
                    <tr>
                        <th className="p-2">Date</th>
                        <th className="p-2">Nom Produit</th>
                        <th className="p-2">Prix</th>
                        <th className="p-2">Details</th>
                        <th className="p-2">Catérorie</th>
                    </tr>
                </thead>

                <tbody>

                    {data.elements.map((el)=> (

                        <tr className="p-2" key={el.id}>
                            
                            <td className="p-2">{new Date().toLocaleDateString()}</td>
                            <td className="p-2">{el.description}</td>
                            <td className="p-2">{el.prix}</td>
                            <td className="p-2">{el.details}</td>
                            <td className="p-2">{el.categorie}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default TableProduits;