import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import React, { createRef,useEffect,useState } from "react"
import {db,fire} from "../fire";


export default function Todo() {
    let inputValue = createRef();
    const [listeFaire, setListeFaire] = useState([]);
    const history = useHistory();

    const ajouterListe = (e) => {
        e.preventDefault();
        const valeurPenseBete = inputValue.current.value

        db.collection("Todo").doc(valeurPenseBete).set({
            todo:valeurPenseBete,
            author:"Othior"
        })
    }

    // retire les elements de la db mais 
    const retirerListe = (e,id) => {
        e.preventDefault();

        db.collection("Todo").doc(id).delete().then(function (){
            console.log("deleted")
        }).catch((function(error) {
            console.error("Error removing document: ", error);
        }))
    }


    // va rechercher les elements de la db pour les mettres dans une liste
    const attrapeTodo = () => {
        db.collection('Todo').get().then((snapshot) => {

            let data = [];
            snapshot.forEach((doc) => {
                console.log(doc.data().todo)
              data.push(doc.data().todo);
            });
            setListeFaire(data);
          })
    }

    useEffect(() => {
        attrapeTodo();
    },[])
    return (
        <>
            <h2>Ajouter un pense bête</h2>
            <input type="text" ref={inputValue} placeholder="Ajouter ici le pense bête" />
            <button onClick={(e) => ajouterListe(e)}>Envoyer</button>

            {listeFaire.map((pense,index)=>(
              <div key={index}>
                {pense} <span onClick={(e) => retirerListe(e,pense)}>X</span>
              </div>
            ))}
        </>
    )
}