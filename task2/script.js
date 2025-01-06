const snowflakeContainer = document.querySelector('.snowflakes');

// Функция для создания снежинок
function createSnowflakes(count) {
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = getRandomSnowflake();
        setRandomProperties(snowflake);
        snowflakeContainer.appendChild(snowflake);

        // Удаление снежинки после завершения анимации
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }
}

// Случайная снежинка из набора символов
function getRandomSnowflake() {
    const snowflakes = ['❄', '❅', '❆', '✦', '✧'];
    return snowflakes[Math.floor(Math.random() * snowflakes.length)];
}

// Установка случайных параметров для снежинок
function setRandomProperties(element) {
    const randomLeft = Math.random() * 100; 
    const randomDelay = Math.random() * 2; 
    const randomDuration = 3 + Math.random() * 3; 
    const randomSize = 1 + Math.random() * 1.5; 

    element.style.left = `${randomLeft}%`;
    element.style.animationDelay = `${randomDelay}s`;
    element.style.animationDuration = `${randomDuration}s`;
    element.style.fontSize = `${randomSize}em`;
}

// Создаем снежинки каждые 200 мс
setInterval(() => createSnowflakes(10), 200);
