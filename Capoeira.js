const moves = [{img:"Images/Esquiva Baxia.jpg", name : "Esquiva Baixa", lab:"Esquiva" ,des :"A low dodge used to avoid an attack. Keep your head low and your body light on your feet." },
{img:"Images/Ginga.jpg",name:"Ginga", lab:"Movement",des:"Start in a staggered stance and shift your weight from side to side while stepping one foot back and returning to center. Keep your knees bent, stay light on your feet, and move your arms naturally to protect your face and maintain balance."},
{img:"Images/bencao.jpg",name:"Benção", lab:"Kick",des:"A straight pushing kick directed toward an opponent's body."}
, {img:"Images/armada.jpg",name:"Armada", lab:"Kick", des:"A spinning kick where you turn your body and swing one leg in a wide arc toward the opponent. Keep your balance, spot your target, and use the rotation of your hips to generate power."},
{img:"Images/Meia Frente.jpg",name:"Meia Lua de frente", lab:"Kick", des:"A crescent-shaped kick that swings the leg in an arc from the outside toward the center. Keep your supporting foot planted, lift your leg smoothly, and use your hips to guide the motion."},
{img:"Images/Au.jpg",name:"Au", lab:"Movement", des:"A cartwheel-like movement used to move around an opponent while keeping your body mobile. Place your hands on the ground, kick your legs overhead one at a time, and land lightly on your feet."},
{img:"Images/nega.jpg",name:"Negativa", lab:"Esquiva", des:"Low defensive position with one leg extended."},
{img:"Images/coco.jpg",name:"Cocorinha", lab:"Esquiva", des:"Low crouching dodge used to avoid high attacks."}
]
const newMove = document.getElementById("newMove");
const moveName = document.getElementById("moveName");
const moveDes = document.getElementById("moveDes");
const newCombo = document.getElementById("newCombo");
const Combo = document.getElementById("Combo");
const MoveLabel = document.getElementById("moveLabel");
const movePics = document.getElementById("movePics");

newMove.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * moves.length);
    const randomMove = moves[randomIndex]

    moveName.textContent = randomMove.name;
    moveDes.textContent = randomMove.des;
    MoveLabel.textContent = randomMove.lab;
    movePics.src = randomMove.img;
});

newCombo.addEventListener("click", function() {
    let combo = "";
    let usedMoves = [];

    for (let i = 0; i < 3; i++) {

        let randomIndex = Math.floor(Math.random() * moves.length);
        let randomMove = moves[randomIndex];

        while (usedMoves.includes(randomMove)) {
            randomIndex = Math.floor(Math.random() * moves.length);
            randomMove = moves[randomIndex];
        }

        usedMoves.push(randomMove);

        combo += randomMove.name;

        if (i < 2) {
            combo += " → ";
        }
    }

    Combo.textContent = combo;
});




