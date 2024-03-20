        function Calcular() {
            var peso = parseFloat(document.getElementById('txtpeso').value);
            var altura = parseFloat(document.getElementById('txtaltura').value);
            if (isNaN(peso) || peso <= 0) {
                document.getElementById('txtpeso').value = "Peso inválido";
            }
            if (isNaN(altura) || altura <= 0) {
                document.getElementById('txtaltura').value = "Altura inválida";
            }
            
            var resu = peso/ Math.pow(altura,2);
            document.getElementById('txtresu').value = resu.toFixed(2);
            Exibir();
        }
        
        function Exibir() {
            var sexo = document.getElementById('txtsexof');
            var resu = parseFloat(document.getElementById('txtresu').value);
            var mensagem = "";

            if (sexo.checked==true) 
            {
                if (resu < 19)
                    mensagem = "Abaixo do Peso! Procure um endocrinologista e nutricionista para montar um programa nutricional para você.";
                else if (resu >=19 && resu <=24)
                    mensagem = "Peso Normal! Parabéns, você está muito gata. Continue assim...";
                else if (resu >=24.1 && resu <=29)
                    mensagem = "Obesidade Leve! Garota, precisa fazer exercícios físicos e ajustar sua dieta para não engordar mais. Procure um endocrinologista urgente...";
                else if (resu >= 29.1 && resu <=39)
                    mensagem = "Obesidade Moderada! Procure um endocrinologista urgente para verificar sua saúde cardiaca, níveis de colesterol.";
                else if (resu >= 39.1)
                    mensagem = "Obesidade Mórbida! Mulher com risco alto de infarto ou AVC. Procure um endocrinologista urgente para verificar sua saúde cardíaca, níveis de colesterol, triglicerides e açúcar no sangue.";
            } 
            else 
            {
                if (resu < 20)
                    mensagem = "Abaixo do Peso! Procure um endocrinologista e nutricionista para montar um programa nutricional para você.";
                else if (resu >=20 && resu <=25) 
                    mensagem = "Peso Normal! Parabéns, você está muito gato. Continue assim...";
                else if (resu >=25.1 && resu <30) 
                    mensagem = "Obesidade Leve! Garoto, precisa fazer exercícios físicos e ajustar sua dieta para não engordar mais. Procure um endocrinologista urgente...";
                else if (resu >=30.1 && resu <=40) 
                    mensagem = "Obesidade Moderada! Procure um endocrinologista urgente para verificar sua saúde cardiaca, níveis de colesterol.";
                else if (resu >40)
                    mensagem = "Obesidade Mórbida! Homem com risco alto de infarto ou AVC. Procure um endocrinologista urgente para verificar sua saúde cardíaca, níveis de colesterol, triglicerides e açúcar no sangue.";
            }
            document.getElementById('txtresu').value = resu;
            document.getElementById('txtinfo').value= mensagem;
        }