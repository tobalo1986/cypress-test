/// <reference types="cypress" />

import {Mainpage} from "../page-objects/main"
import {Shiftingcontent} from "../page-objects/shifting content"

describe ("test de login",() => {
    const mainpage = new Mainpage()
    const shiftingcontent = new Shiftingcontent()

beforeEach(() => {
        mainpage.navigate()
        mainpage.clickshiftingcontent()})
    
        it("the shifting content have five element in the menu 1",() =>{

        shiftingcontent.clickexample1()
        shiftingcontent.filllength()
    })
})