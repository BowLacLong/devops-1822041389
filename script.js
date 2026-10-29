// Live Clock update
function updateClock() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString('vi-VN') + ' - ' + now.toLocaleDateString('vi-VN');
    }
}

// Button interaction
let count = 0;
const btnClick = document.getElementById('btn-click');
const btnReset = document.getElementById('btn-reset');
const clickCount = document.getElementById('click-count');

if (btnClick) {
    btnClick.addEventListener('click', () => {
        count++;
        if (clickCount) {
            clickCount.textContent = count;
        }
    });
}

if (btnReset) {
    btnReset.addEventListener('click', () => {
        count = 0;
        if (clickCount) {
            clickCount.textContent = count;
        }
    });
}

// Initialize clock
setInterval(updateClock, 1000);
updateClock();

console.log("Website deployed successfully via GitHub Actions for Vũ Hải Luân - 1822041389");
