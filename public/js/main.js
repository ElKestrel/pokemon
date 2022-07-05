import { Pokemon } from "./module/class.js";

let Pikachu = new Pokemon('Pikachu', 50, 60, 70, 80, 300)
let Tortank = new Pokemon('Tortank', 20, 30, 40, 50, 500) //Création des Pokemon

let pkavie = document.getElementsByClassName('barrepika')[0]
pkavie.innerHTML = Pikachu.vie+'/300' //Afficher la vie de Tortank sur page HTML

let tortvie = document.getElementsByClassName('barretor')[0]
    tortvie.innerHTML = Tortank.vie+'/500' //Afficher la vie de Pikachu sur page HTML

let prog1 = document.getElementById('prog1')
let prog2 = document.getElementById('prog2')


let btnatqpika1 = document.getElementById('atq1')
btnatqpika1.addEventListener('click', function () {
    setTimeout(function(){  
        let dialog = document.getElementsByClassName('dialog')[0]
        setTimeout(function(){ dialog.innerHTML = ''
        document.getElementsByClassName('giftor')[0].style.opacity = "1";
        }, 2000);
        dialog.innerHTML = 'Pikachu lance son attaque Eclair'
        document.getElementsByClassName('giftor')[0].style.opacity = "0.5";
        Tortank.vie = Tortank.vie - Pikachu.attaque
        prog1.value = prog1.value - Pikachu.attaque
        if (Tortank.vie<=0) {
            alert('Pikachu à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        if (Pikachu.vie<=0) {
            alert('Tortank à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        let tortvie = document.getElementsByClassName('barretor')[0]
        tortvie.innerHTML = Tortank.vie+'/500'}, 1000);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            document.getElementsByClassName('gif')[0].style.opacity = "0.5";
            let x = Math.floor(Math.random()*4)
            if (x == 0) {
                dialog2.innerHTML = 'Tortank lance son attaque 1'
                Pikachu.vie = Pikachu.vie - Tortank.attaque
                prog2.value = prog2.value - Tortank.attaque
            } else if (x==1) {
                dialog2.innerHTML = 'Tortank lance son attaque 2'
                Pikachu.vie = Pikachu.vie - Tortank.attaque2
                prog2.value = prog2.value - Tortank.attaque2
            } else if (x==2) {
                dialog2.innerHTML = 'Tortank lance son attaque 3'
                Pikachu.vie = Pikachu.vie - Tortank.attaque3
                prog2.value = prog2.value - Tortank.attaque3
            } else if (x==3) {
                dialog2.innerHTML = 'Tortank lance son attaque 4'
                Pikachu.vie = Pikachu.vie - Tortank.attaque4 
                prog2.value = prog2.value - Tortank.attaque4
            }
        }, 4500);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            dialog2.innerHTML = ''
            document.getElementsByClassName('gif')[0].style.opacity = "1";
        }, 6000);
})
let btnatqpika2 = document.getElementsByClassName('atqpika2')[0]
btnatqpika2.addEventListener('click', function () {
    setTimeout(function(){  
        let dialog = document.getElementsByClassName('dialog')[0]
        setTimeout(function(){ dialog.innerHTML = ''
        document.getElementsByClassName('giftor')[0].style.opacity = "1";
        }, 2000);
        dialog.innerHTML = 'Pikachu lance son attaque Blazer'
        document.getElementsByClassName('giftor')[0].style.opacity = "0.5";
        Tortank.vie = Tortank.vie - Pikachu.attaque2
        prog1.value = prog1.value - Pikachu.attaque2
        if (Tortank.vie<=0) {
            alert('Pikachu à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        if (Pikachu.vie<=0) {
            alert('Tortank à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        let tortvie = document.getElementsByClassName('barretor')[0]
        tortvie.innerHTML = Tortank.vie+'/500'}, 1000);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            document.getElementsByClassName('gif')[0].style.opacity = "0.5";
            let x = Math.floor(Math.random()*4)
            if (x == 0) {
                dialog2.innerHTML = 'Tortank lance son attaque 1'
                Pikachu.vie = Pikachu.vie - Tortank.attaque
                prog2.value = prog2.value - Tortank.attaque
            } else if (x==1) {
                dialog2.innerHTML = 'Tortank lance son attaque 2'
                Pikachu.vie = Pikachu.vie - Tortank.attaque2
                prog2.value = prog2.value - Tortank.attaque2
            } else if (x==2) {
                dialog2.innerHTML = 'Tortank lance son attaque 3'
                Pikachu.vie = Pikachu.vie - Tortank.attaque3
                prog2.value = prog2.value - Tortank.attaque3
            } else if (x==3) {
                dialog2.innerHTML = 'Tortank lance son attaque 4'
                Pikachu.vie = Pikachu.vie - Tortank.attaque4 
                prog2.value = prog2.value - Tortank.attaque4
            }
        }, 4500);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            dialog2.innerHTML = ''
            document.getElementsByClassName('gif')[0].style.opacity = "1";
        }, 6000);
})
let btnatqpika3 = document.getElementsByClassName('atqpika3')[0]
btnatqpika3.addEventListener('click', function () {
    setTimeout(function(){  
        let dialog = document.getElementsByClassName('dialog')[0]
        setTimeout(function(){ dialog.innerHTML = ''
        document.getElementsByClassName('giftor')[0].style.opacity = "1";
        }, 2000);
        dialog.innerHTML = 'Pikachu lance son attaque Flash'
        document.getElementsByClassName('giftor')[0].style.opacity = "0.5";
        Tortank.vie = Tortank.vie - Pikachu.attaque3
        prog1.value = prog1.value - Pikachu.attaque3
        if (Tortank.vie<=0) {
            alert('Pikachu à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        if (Pikachu.vie<=0) {
            alert('Tortank à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        let tortvie = document.getElementsByClassName('barretor')[0]
        tortvie.innerHTML = Tortank.vie+'/500'}, 1000);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            document.getElementsByClassName('gif')[0].style.opacity = "0.5";
            let x = Math.floor(Math.random()*4)
            if (x == 0) {
                dialog2.innerHTML = 'Tortank lance son attaque 1'
                Pikachu.vie = Pikachu.vie - Tortank.attaque
                prog2.value = prog2.value - Tortank.attaque
            } else if (x==1) {
                dialog2.innerHTML = 'Tortank lance son attaque 2'
                Pikachu.vie = Pikachu.vie - Tortank.attaque2
                prog2.value = prog2.value - Tortank.attaque2
            } else if (x==2) {
                dialog2.innerHTML = 'Tortank lance son attaque 3'
                Pikachu.vie = Pikachu.vie - Tortank.attaque3
                prog2.value = prog2.value - Tortank.attaque3
            } else if (x==3) {
                dialog2.innerHTML = 'Tortank lance son attaque 4'
                Pikachu.vie = Pikachu.vie - Tortank.attaque4 
                prog2.value = prog2.value - Tortank.attaque4
            }
        }, 4500);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            dialog2.innerHTML = ''
            document.getElementsByClassName('gif')[0].style.opacity = "1";
        }, 6000);
})
let btnatqpika4 = document.getElementsByClassName('atqpika4')[0]
btnatqpika4.addEventListener('click', function () {
    setTimeout(function(){  
        let dialog = document.getElementsByClassName('dialog')[0]
        setTimeout(function(){ dialog.innerHTML = ''
        document.getElementsByClassName('giftor')[0].style.opacity = "1";
        }, 2000);
        dialog.innerHTML = 'Pikachu lance son attaque Kestrel'
        document.getElementsByClassName('giftor')[0].style.opacity = "0.5";
        Tortank.vie = Tortank.vie - Pikachu.attaque4
        prog1.value = prog1.value - Pikachu.attaque4
        if (Tortank.vie<=0) {
            alert('Pikachu à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        if (Pikachu.vie<=0) {
            alert('Tortank à gagné.') 
            while (1==1) {
                alert('Jeu terminé')
            }
        }
        let tortvie = document.getElementsByClassName('barretor')[0]
        tortvie.innerHTML = Tortank.vie+'/500'}, 1000);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            document.getElementsByClassName('gif')[0].style.opacity = "0.5";
            let x = Math.floor(Math.random()*4)
            if (x == 0) {
                dialog2.innerHTML = 'Tortank lance son attaque 1'
                Pikachu.vie = Pikachu.vie - Tortank.attaque
                prog2.value = prog2.value - Tortank.attaque
            } else if (x==1) {
                dialog2.innerHTML = 'Tortank lance son attaque 2'
                Pikachu.vie = Pikachu.vie - Tortank.attaque2
                prog2.value = prog2.value - Tortank.attaque2
            } else if (x==2) {
                dialog2.innerHTML = 'Tortank lance son attaque 3'
                Pikachu.vie = Pikachu.vie - Tortank.attaque3
                prog2.value = prog2.value - Tortank.attaque3
            } else if (x==3) {
                dialog2.innerHTML = 'Tortank lance son attaque 4'
                Pikachu.vie = Pikachu.vie - Tortank.attaque4 
                prog2.value = prog2.value - Tortank.attaque4
            }
        }, 4500);
        setTimeout(function(){ 
            let dialog2 = document.getElementsByClassName('dialog2')[0]
            dialog2.innerHTML = ''
            document.getElementsByClassName('gif')[0].style.opacity = "1";
        }, 6000);
})







