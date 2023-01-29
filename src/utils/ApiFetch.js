import values from "../values";
//import {Buffer} from 'buffer';
window.Buffer = window.Buffer || require("buffer").Buffer;


//Function to override the fetch method with the api url and default headers
export default function ApiFetch(route, {method, headers, body}){

    return new Promise((resolve, reject) => {
        fetch(values.airtable_url + route, {
            method,
            headers: {
                'Content-Type': 'application/json',  
                'Authorization': 'Bearer ' + values.airtable_token,
                ...headers
            },
            body
        }).then(res => {
            resolve(res);
        }
        ).catch(err => {
            reject(err);
        }
        )
    })
}