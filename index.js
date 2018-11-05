class Driver {
    constructor(name, dayJoined){
        this.name = name
        this.startDate = new Date(dayJoined)
    }


    yearsExperienceFromBeginningOf(year){
        let startYear = this.startDate.getFullYear()
        return year - startYear 
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled(){
        let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

            let vertDist = () => {
                let vertStart = parseInt(this.beginningLocation.vertical)
                let vertEnd = parseInt(this.endingLocation.vertical)

                if (vertStart > vertEnd){
                    return vertStart - vertEnd
                } else {
                    return vertEnd - vertStart 
                }
            }

            let horizDist = () => {
                let horizStart = this.beginningLocation.horizontal
                let horizEnd = this.endingLocation.horizontal

                let startIndex = eastWest.findIndex((location)=>{
                    return location === horizStart
                })

                let endIndex = eastWest.findIndex((location) => {
                    return location === horizEnd
                })

                if (startIndex > endIndex){
                    return startIndex - endIndex
                } else {
                    return endIndex - startIndex 
                }
                
            }

        return vertDist() + horizDist()
    }

    estimatedTime(peak){
        if(peak){
            return this.blocksTravelled() / 2
        } else {
            return this.blocksTravelled() / 3
        }
    }
}
