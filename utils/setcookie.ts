export default function (name: string, value: string | number, years: number = 10): void {
    let expires: string = ""

    if (value) {
        let date = new Date()
        date.setTime(date.getTime() + (years * 365 * 24 * 60 * 60 * 1000))

        expires = "; expires=" + date.toUTCString()
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}
