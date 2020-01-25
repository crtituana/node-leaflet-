 class Display{
    constructor(){
        this.rutas = '';
        this.apiUrl = 'http://localhost:4000/api/rutas'
    }

    ApiRest(){
        var http = new XMLHttpRequest();
        http.open('GET', this.apiUrl, false);
        http.send(null);
        if(http.status == 200){
            this.mapa(JSON.parse(http.response))
        }
    } 

    mapa(rutas){
        const map = L.map('mapa').setView([-0.2247332, -78.5179488], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-0.2247332, -78.5179488]).addTo(map).bindPopup('Yavirac Institute');

        rutas.forEach(element => {
            let nombre = element.nombre;
            L.marker(element.latlong).addTo(map).bindPopup(nombre);
        });
    }
}

let view = new Display();

view.ApiRest();