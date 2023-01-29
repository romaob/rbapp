export default function IpInfoFetch(){
    return new Promise((resolve, reject) => {
        fetch('https://ipinfo.io/json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            return res.json();
        }).then(data => {
            resolve(data);
        }
        ).catch(err => {
            reject(err);
        }
        )
    })
}