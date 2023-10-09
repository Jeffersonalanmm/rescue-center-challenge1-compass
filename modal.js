            // Função para mostrar o modal de aplicação de adoção
            function showAdoptionModal() {
                const modal = document.getElementById("myModal");
                modal.style.display = "block";
            }

            // Função para fechar o modal de aplicação de adoção
            function closeAdoptionModal() {
                const modal = document.getElementById("myModal");
                modal.style.display = "none";
            }

            // Event listener para abrir o modal de aplicação de adoção quando um botão "Apply to Adopt" é clicado
            const applyButtons = document.querySelectorAll(".apply");
            applyButtons.forEach(function (button) {
                button.addEventListener("click", showAdoptionModal);
            });
            // Event listener para abrir o modal de aplicação de adoção personalizado quando o botão "Apply to Adopt" personalizado é clicado
            const customApplyButton = document.getElementById("openModal2");
            customApplyButton.addEventListener("click", showAdoptionModal);

            // Event listener para fechar o modal de aplicação de adoção quando o botão "Cancelar" é clicado ou quando o botão "X" no canto superior direito é clicado
            const closeAdoptionButton = document.getElementById("closeModal");
            closeAdoptionButton.addEventListener("click", closeAdoptionModal);
            function populateDays() {
                const daySelect = document.getElementById("day");

                for (let i = 1; i <= 31; i++) {
                    const option = document.createElement("option");
                    option.value = i;
                    option.text = i;
                    daySelect.appendChild(option);
                }
            }

            // Função para gerar as opções de mês
            function populateMonths() {
                const monthSelect = document.getElementById("month");

                const months = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];

                for (let i = 0; i < months.length; i++) {
                    const option = document.createElement("option");
                    option.value = months[i];
                    option.text = months[i];
                    monthSelect.appendChild(option);
                }
            }

            // Função para gerar as opções de ano (por exemplo, de 1900 a 2023)
            function populateYears() {
                const yearSelect = document.getElementById("year");
                const currentYear = new Date().getFullYear();

                for (let year = 1900; year <= currentYear; year++) {
                    const option = document.createElement("option");
                    option.value = year;
                    option.text = year;
                    yearSelect.appendChild(option);
                }
            }

            // Chame as funções para preencher as opções
            populateDays();
            populateMonths();
            populateYears();
            // Event listener para fechar o modal de aplicação de adoção quando clicar fora do modal
            window.addEventListener('click', (event) => {
                const modal = document.getElementById("myModal");
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });