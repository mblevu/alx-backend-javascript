#!/usr/bin/node
function getCurrentYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
        [`income-${income}`]: income,
        [`gdp-${gdp}`]: gdp,
        [`capita-${capita}`]: capita
    };

    return budget;
}