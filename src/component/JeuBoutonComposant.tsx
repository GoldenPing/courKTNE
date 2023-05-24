import "../style/JeuBoutonComposant.css";

// const cas ={
//     'instant':[
//         {
//             'couleur' : '',
//             'nbPile' : (e: number) => { return e > 1},
//             'textBouton' : 'exploser',
//             'indic' : '',
//         },
//         {
//             'couleur' : '',
//             'nbPile' : (e: number) => { return e > 2},
//             'textBouton' : '',
//             'indic' : 'FRK',
//         },
//         {
//             'couleur' : 'rouge',
//             'nbPile' : '',
//             'textBouton' : 'Maintenir',
//             'indic' : '',
//         },
//     ]
// }
    
export default function JeuBoutonComposant(){
    
   // const color = useState('')


    // function find(e) {
    //     e.preventDefault();

    //     const form = e.target;
    //     const formData = new FormData(form)

    //     const formJson = Object.fromEntries(formData.entries());
    //     console.log(formJson);

    //     console.log(cas.instant)
    //     const caseModif = cas.instant.map((etat) => {
    //         let resNbPile= false, resCouleur= false, resTextBouton= false, resIndic = false

    //         if(typeof etat.nbPile !== 'string'){
    //             const nbPile = parseInt(formJson.nbPile);
    //             resNbPile = etat.nbPile(nbPile)
    //         }

    //         if(etat.couleur !== ''){
                
    //         }
    //     })

    //     console.log(caseModif);
    // }




    return (
        <>
            <div className="border">
                <h1>Boutons</h1>

                <h3>Question a poser</h3>
            
                <ul>
                    <li>Quelle est la couleur du bouton ?</li>
                    <select name="couleur" placeholder="Couleur du boutons">
                    <option value="red">Rouge</option>
                    <option value="white">Blanc</option>
                    <option value="Yellow">Jaune</option>
                    <option value="blue">Bleu</option>
                    <option value="autre">Autre</option>
                    </select>

                    <li>Qu'est qui est marqué ?</li>
                    <select name="text" placeholder="Text du boutons">
                    <option value="annuler">Annuler</option>
                    <option value="exploser">Exploser</option>
                    <option value="maintenir">Maintenir</option>
                    <option value="autre">Autre</option>
                    </select>

                    <li>Quelle est le nombre de piles ?</li>
                    <input type="number" name="nbPile" id="" placeholder="nb de pile" />

                    <li>Qu'est qui est marqué sur l'indicateur illuminé?</li>
                    <select name="text" placeholder="Text de l'indicateur">
                    <option value="car">CAR</option>
                    <option value="frk">FRK</option>
                    <option value="autre">Autre</option>
                    </select>
                </ul>
            <button type="submit" >Valider</button>
                
       


            </div>
        </>
    )
}