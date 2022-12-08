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
    function getColor(stock) {
        if (stock === "GME") {
            return 'rgba(61, 161, 61, 0.7)'
        } else if (stock === 'MSFT') {
            return 'rgba(209, 4, 25, 0.7)'
        } else if (stock === 'DIS') {
            return 'rgba(18, 4, 209, 0.7)'
        } else if (stock === 'BNTX') {
            return 'rgba(166, 43, 158, 0.7)'
        }
    }
    function getHighest(stock) {
        let highest = stock.values.map(value => parseFloat(value.high))
        let highestNum = Math.max(...highest)
        console.log(highestNum)
        return highestNum
    }
    function getNum(stock) {
        if (stock.meta.symbol === "GME") {
            return num[0]
        } else if (stock.meta.symbol === 'MSFT') {
            return num[1]
        } else if (stock.meta.symbol === 'DIS') {
            return num[2]
        } else if (stock.meta.symbol === 'BNTX') {
            console.log([num[3]])
            return num[3]
        }
    }
    let num = stocks.map(stock => getHighest(stock))
    console.log(num)
    //console.log(stocks)
    //console.log(Chart)
    stocks.forEach(stock => stock.values.reverse())
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: [
                    getColor(stock.meta.symbol),
                ],
                borderColor: [
                    getColor(stock.meta.symbol),
                ],
            }))
        }
    });
    //console.log(stocks[0].values)
    console.log(num)
    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: stocks.map(value => value.meta.symbol),
            datasets: [{
                label: 'Highest',
                data: num,
                backgroundColor: stocks.map(stock => getColor(stock.meta.symbol)),
                borderColor: stocks.map(stock => getColor(stock.meta.symbol)),
            }]
        },
        options: {
            label: stocks.map(stock => stock.meta.symbol)
        }
    });
}

main()