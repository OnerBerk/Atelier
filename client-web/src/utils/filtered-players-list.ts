import {Player} from "../domain/domain";

export const returnFilteredList = (list: Player[], search: string): Player[] => {
    const lastnameFirstname = (p: Player) => {
        const concat = p.firstname.concat(p.lastname)
        return concat.toLowerCase()
    }

    const filteredList: Player[] = list.filter((l) => lastnameFirstname(l).includes(search.toLowerCase()))
    return filteredList
}