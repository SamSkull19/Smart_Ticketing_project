const btnSelect = document.getElementsByClassName('btnSelect');

let count = 0;
let totalSeatAvailable = 8;

for (const btn of btnSelect) {
    btn.addEventListener('click', function (event) {
        count++;
        totalSeatAvailable--;

        let seatPrice = 550;


        if (count <= 4) {
            btn.style.backgroundColor = '#1DD100';
            btn.style.color = 'white';

            const totalSeatCart = count;
            setInnerText('seatOnCart', totalSeatCart);

            const seatReducing = totalSeatAvailable;
            setInnerText('totalSeatAvailable', seatReducing);

            // Cart List
            const cartL = document.getElementById('cartList');

            const li = document.createElement('li');

            const p1 = document.createElement('p');
            p1.innerText = btn.innerText;

            const p2 = document.createElement('p');
            p2.innerText = 'Economy';

            const p3 = document.createElement('p');
            p3.innerText = '550';

            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);

            cartL.appendChild(li);

            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';

            totalPriceCost('totalPrice', parseInt(seatPrice));
            totalGrandPriceCostCoupon('others');

        


        }
        else {
            // const warn = document.getElementById('seatMain'); 
            // const p = document.createElement('p');
            // p.innerText = 'Maximum 4 seats can be selected.'
            // warn.appendChild(p);

            btn.setAttribute('disabled', true);
        }

    });
}

const delCon = document.getElementById('inputCoupon');

delCon.addEventListener('keyup', function (event) {
    const inputValue = event.target.value;

    const delBTN = document.getElementById('enterD')
    if (inputValue === 'NEW15' || inputValue === 'Couple20') {
        delBTN.removeAttribute('disabled');
        totalGrandPriceCostCoupon(inputValue);
    }
    else {
        delBTN.setAttribute('disabled', true);
    }

})


const enter = document.getElementById('enterD');

enter.addEventListener('click', function () {
    const inputDel = document.getElementById('inputDel');
    const texts = document.getElementById('textT');
})

const enterFinal = document.getElementById('enterD');
enterFinal.addEventListener('click', function () {
    const couponBox = document.getElementById('CouponBox');
    couponBox.style.visibility= 'hidden';
})



function totalPriceCost(id, price) {
    let totalCost = document.getElementById(id).innerText;
    let convertedCost = parseInt(totalCost);
    const sum = convertedCost + parseInt(price);
    setInnerText('totalPrice', sum);
}




function totalGrandPriceCostCoupon(category) {
    let totalCost = document.getElementById('totalPrice').innerText;
    let convertedCost = parseInt(totalCost);

    let dis = 0;
    let sum = convertedCost;
    if (category === 'NEW15') {
        dis = ((convertedCost * 15) / 100);
        sum = sum - dis;
        setInnerText('grandPrice', sum);
    }

    else if (category === 'Couple20') {
        dis = ((convertedCost * 20) / 100);
        sum = sum - dis;
        setInnerText('grandPrice', sum);
    }

    else {
        dis = convertedCost;
        setInnerText('grandPrice', dis);
    }
}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}



const nextPageBTN = document.getElementById('nextPageBTN');
nextPageBTN.addEventListener('click', function () {
    const mainPage = document.getElementById('MainPage');
    mainPage.classList.add('hidden');

    const successPage = document.getElementById('successPage');
    successPage.classList.remove('hidden');

})















