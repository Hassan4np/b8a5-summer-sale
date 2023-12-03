let total = 0

function InputPrice(element) {
    const projectText = element.childNodes[3].childNodes[3].innerText;

    const ProjectPrice = element.childNodes[3].childNodes[5].childNodes[0].innerText;
    const SetAreaname = document.getElementById('itemaddarea');
    let count = SetAreaname.childElementCount;
    const ptag = document.createElement('p');
    ptag.classList.add('pl-2')
    ptag.innerHTML = `${count+1} ${projectText}`
    SetAreaname.appendChild(ptag);
    total = total + parseFloat(ProjectPrice);
    const MakePurchasbutton = document.getElementById('MakePurchasbutton');
    const ApplyCoupion = document.getElementById('ApplyCoupion');
    const TOTALPRICE = total;

    // total area
    const totalprices = document.getElementById('totalprice');
    // const discountprice = document.getAnimations('discount');
    const alltotal = document.getElementById('alltotalprice');
    // total area end

    if (TOTALPRICE > 0) {
        MakePurchasbutton.removeAttribute('disabled');
    }
    if (TOTALPRICE >= 200) {
        ApplyCoupion.removeAttribute('disabled')
    }
    const ApplyCoupioninput = document.getElementById('ApplyCoupioninput');
    ApplyCoupion.addEventListener('click', function() {
        const applyput = ApplyCoupioninput.value;

        if (applyput === 'SELL200') {
            const discount = (TOTALPRICE * 0.2).toFixed(2);

            discounttotal = (TOTALPRICE - discount);
            document.getElementById('discountpPrice').innerText = discount;
            alltotal.innerText = discounttotal;
        }
    })
    totalprices.innerText = TOTALPRICE;
    alltotal.innerText = TOTALPRICE;
    applyput.value = " ";
}

function Gohome() {
    window.location.href = "http://127.0.0.1:5500/index.html?";
}