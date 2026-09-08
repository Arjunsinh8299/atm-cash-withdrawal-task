document.getElementById("dispenseBtn").addEventListener("click",function(){
    
    const notes={
        2000:Number(document.getElementById("notes2000").value),
        500:Number(document.getElementById("notes500").value),
        200:Number(document.getElementById("notes200").value),
        100:Number(document.getElementById("notes100").value)
    };
    
    let amount=Number(document.getElementById("withdrawalAmount").value);
    
    let totalATMCash =
    notes[2000] * 2000 +
    notes[500] * 500 +
    notes[200] * 200 +
    notes[100] * 100;


    let count2000=0;
    let count500=0;
    let count200=0;
    let count100=0;
    
    while(amount>=2000 && notes[2000]>0){
        count2000++;
        amount=amount-2000;
        notes[2000]--;
    }
    while(amount>=500 && notes[500]>0){
        count500++;
        amount=amount-500;
        notes[500]--;
    }
    while(amount>=200 && notes[200]>0){
        count200++;
        amount=amount-200;
        notes[200]--;
    }
    while(amount>=100 && notes[100]>0){
        count100++;
        amount=amount-100;
        notes[100]--;
    }
    
    if(amount==0){
        document.getElementById("transactionStatus").innerHTML="Transaction Succesful"

        let remainingATMCash =
            notes[2000] * 2000 +
            notes[500] * 500 +
            notes[200] * 200 +
            notes[100] * 100;


        document.getElementById("remainingCash").innerText =
            "₹" + remainingATMCash;


        document.getElementById("dispensedNotes").innerHTML=`
        <tr>
            <td>2000</td>
            <td>${count2000}</td>
            <td>${count2000*2000}</td>
        </tr>
        <tr>
            <td>500</td>
            <td>${count500}</td>
            <td>${count500*500}</td>
        </tr>
        <tr>
            <td>200</td>
            <td>${count200}</td>
            <td>${count200*200}</td>
        </tr>
        <tr>
            <td>100</td>
            <td>${count100}</td>
            <td>${count100*100}</td>
        </tr>
        `;
  
    }
    else{
        document.getElementById("transactionStatus").innerHTML="Transaction Failed"

        document.getElementById("remainingCash").innerText ="₹" + totalATMCash;



        document.getElementById("dispensedNotes").innerHTML=`<tr><td colspan="3">--</td></tr>`

    }
    
    
    document.getElementById("displayWithdrawal").innerText="₹"+Number(document.getElementById("withdrawalAmount").value);
})