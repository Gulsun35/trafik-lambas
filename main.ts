let rastgele_sayi = 0
let trafik_lambası = ""
input.onButtonPressed(Button.A, function () {
    rastgele_sayi = randint(0, 2)
    if (rastgele_sayi == 0) {
        trafik_lambası = "Kirmizi"
    } else if (rastgele_sayi == 1) {
        trafik_lambası = "Sari"
    } else if (rastgele_sayi == 2) {
        trafik_lambası = "Yesil"
    }
})
basic.forever(function () {
    if (trafik_lambası == "Kirmizi") {
        basic.showIcon(IconNames.No)
    } else if (trafik_lambası == "Sari") {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (trafik_lambası == "Yesil") {
        basic.showIcon(IconNames.Yes)
    }
})
