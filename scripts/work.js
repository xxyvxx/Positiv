document.querySelectorAll('.work__card').forEach(card => {
    const img = card.querySelector('.work__card-img');
    const text = card.querySelector('.work__card-text');

    img.addEventListener('click', () => {
        // Переключение текста
        if (text.style.display === "none" || text.style.display === "") {
            text.style.display = "block"; // Показываем текст
            card.style.backgroundColor = "#b9ff66"; // Меняем фон на зеленый
            img.src = "./images/Minus icon.svg"; // Меняем изображение на минус
        } else {
            text.style.display = "none"; // Скрываем текст
            card.style.backgroundColor = ""; // Возвращаем фон к исходному
            img.src = "./images/Plus icon.svg"; // Меняем изображение обратно на плюс
        }
    });
});