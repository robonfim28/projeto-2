if (compra => 500) {
    percentual = 0.1;
} else if (compra => 100) {
    percentual = 0.05;
} else {
    percentual = 0;
}

const desconto = compra * percentual;
const total = compra - desconto;