export function Cryptos(coins){
    let cryptosHtml = ''
    coins.forEach(coin => {
        cryptosHtml += `
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 flex items-center"><img src="${coin.image}" alt="${coin.id}" class="w-7 h-7 mr-2">${coin.name}</th>
                <td class="px-6 py-4">$${coin.current_price.toLocaleString()}</td>
                <td class="px-6 py-4 ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-600'}">${coin.price_change_percentage_24h.toFixed(2)}%</td>
                <td class="px-6 py-4">$${coin.market_cap.toLocaleString()}</td>
                <td class="px-6 py-4 w-auto text-center">
                    <a id="${coin.id}" class="buybutton font-medium text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 transition-all cursor-pointer">Buy</a>
                </td>
            </tr>
        `
    })

    return cryptosHtml
}

export function walletCoins(coins){
    let cryptosHtml = ''
    coins.forEach(coin => {
        cryptosHtml += `
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 flex items-center"><img src="${coin.image}" alt="${coin.id}" class="w-7 h-7 mr-2">${coin.name}</th>
                <td class="px-6 py-4">$${coin.current_price.toLocaleString()}</td>
                <td class="px-6 py-4 ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-600'}">${coin.price_change_percentage_24h.toFixed(2)}%</td>
                <td class="px-6 py-4">$${coin.market_cap.toLocaleString()}</td>
                <td class="px-6 py-4 w-auto text-center">
                    <a id="${coin.id}" class="buybutton font-medium text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 transition-all cursor-pointer">Sell</a>
                </td>
            </tr>
        `
    })

    return cryptosHtml
}

export function mobileWalletCoins(coins){
    let mobileCryptosHtml = ''
    coins.forEach(coin => {
        mobileCryptosHtml += `
        <div class="md:hidden mobile-table flex flex-col w-full justify-between text-gray-900 px-6">
            <div class="flex w-full justify-between border-b pb-4 mb-4">
                <a href="">
                    <div class="flex items-center">
                        <div class="coin-ico border p-2 rounded-xl mr-2">
                            <img src="${coin.image}" alt="${coin.id}" class="w-7 h-7">
                        </div>
                        <div class="coin-name-market-cap">
                            <span class="title font-bold">${coin.name}</span>
                        </div>
                    </div>
                </a>
                <div class="coin-price-percentage flex items-center justify-end w-5/12 sm:w-3/12 gap-x-4">
                    <div class="coinpriceperc text text-sm text-end">
                        <p>$${coin.current_price.toLocaleString()}</p>
                        <p class="${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-600'}">${coin.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>
                    <a id="${coin.id}" class="buybutton text font-medium text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600 transition-all cursor-pointer">Sell</a>
                </div>
            </div>
        </div>
        `
    })

    return mobileCryptosHtml
}

export function mobileCryptos(coins){
    let mobileCryptosHtml = ''
    coins.forEach(coin => {
        mobileCryptosHtml += `
        <div class="md:hidden mobile-table flex flex-col w-full justify-between text-gray-900 px-6">
            <div class="flex w-full justify-between border-b pb-4 mb-4">
                <a href="">
                    <div class="flex items-center">
                        <div class="coin-ico border p-2 rounded-xl mr-2">
                            <img src="${coin.image}" alt="${coin.id}" class="w-7 h-7">
                        </div>
                        <div class="coin-name-market-cap">
                            <span class="title font-bold">${coin.name}</span>
                            <p class="text text-sm">$${coin.market_cap.toLocaleString()}</p>
                        </div>
                    </div>
                </a>
                <div class="coin-price-percentage flex items-center justify-end w-5/12 sm:w-3/12 gap-x-4">
                    <div class="coinpriceperc text text-sm text-end">
                        <p>$${coin.current_price.toLocaleString()}</p>
                        <p class="${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-600'}">${coin.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>
                    <a id="${coin.id}" class="buybutton text font-medium text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 transition-all cursor-pointer">Buy</a>
                </div>
            </div>
        </div>
        `
    })

    return mobileCryptosHtml
}