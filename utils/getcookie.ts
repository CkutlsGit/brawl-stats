export default function (name: string): string | null {
    let nameEQ: string = name + "="
    let ca: string[] = document.cookie.split(';')

    for (let i: number = 0; i < ca.length; i++) {
        let c: string = ca[i]

        while (c.charAt(0) == ' ') c = c.substring(1, c.length)

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }

    return null
}