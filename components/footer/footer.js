function createFooter(){
    getElement(
        elementName = "footer_id"
    ).innerHTML = createElement(
                                    elementName = "section",
                                    className = "footer_bottom",
                                    idName = "",
                                    onclick_action = "",
                                    onmouseover_action = "",
                                    onmouseout_action = "",
                                    content =  createElement(
                                                                            elementName = "section",
                                                                            className = "footer_bottom_section",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = setImage(
                                                                                                    imgName = "mtd_devices",
                                                                                                    idImg = ""
                                                                                              )
                                                            )+
                                              createElement(
                                                                            elementName = "section",
                                                                            className = "footer_bottom_section",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = createElement(
                                                                                                        elementName = "section",
                                                                                                        className = "footer_bottom_section_title",
                                                                                                        idName = "",
                                                                                                        onclick_action = "",
                                                                                                        onmouseover_action = "",
                                                                                                        onmouseout_action = "",
                                                                                                        content = "Online Assessment Engine is a fun, engaging and interactive educational assessment tool to aid in improving learning and understanding topics taught at schools in the form of an online assessment. "+
                                                                                                                  "The online assessment has been developed in such a way that important concepts have been highlighted so that the end user is able to get more information on the concept. "+
                                                                                                                  "The online assessment will guide users on the solution for each problem with context and the mark allocations for each solution."
                                                                                                    )
                                                            )
                                              
                    )+
                    createElement(
                                    elementName = "section",
                                    className = "footer_bottom_section_company",
                                    idName = "",
                                    onclick_action = "",
                                    onmouseover_action = "",
                                    onmouseout_action = "",
                                    content = "Developed by Tech Raider"
                                )
                   

}






