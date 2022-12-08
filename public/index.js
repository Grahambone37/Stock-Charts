async function main() {
    //   209495c129ad4f65be985b53badbc367
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    /*
    let result = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=209495c129ad4f65be985b53badbc367&outputsize=1')
    parsedResult = await result.json()
    //console.log(parsedResult)
    let GME = parsedResult.GME
    let MSFT = parsedResult.MSFT
    let DIS = parsedResult.DIS
    let BNTX = parsedResult.BNTX
    const stocks = [GME, MSFT, DIS, BNTX];
    console.log(stocks)
    */

    const { GME, MSFT, DIS, BNTX } = mockData;
    const stocks = [GME, MSFT, DIS, BNTX]
    console.log(stocks)
}

main()