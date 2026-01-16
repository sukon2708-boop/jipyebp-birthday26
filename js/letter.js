const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ แก้ข้อความจดหมายตรงนี้ได้เลย
const MESSAGE = `
สุขสันต์วันเกิดน้าบี๋ เค้ารักบี๋มากๆๆน้าาา
ขอให้บี๋มีความสุขสุขภาพแข็งแรงอยู่กับเค้าทุกปีเยยน้า
ให้เค้าอยู่ถือเค้กให้ทุกปีขอให้บี๋เจอเพื่อนดีๆเพื่อนที่รัก
และจริงใจกับบี๋จริงๆดูแลตัวเองดีๆด้วยเด้อเรา2คนจะห่างไกลกัน
แล้วเค้าเป็นห่วงและอยู่ข้างๆบี๋เสมอน้าเค้าหวังดีที่สุ๊ดดดดดดดด 
รักๆๆๆๆ ิิิิิิ

`;

function open(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}
function close(){ modalBackdrop.style.display = "none"; }

openLetter.addEventListener("click", open);
readBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) close();
});
