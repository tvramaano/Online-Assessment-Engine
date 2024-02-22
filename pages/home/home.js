function createHomePage(){
     
    return  createElement(
                                elementName = "section",
                                className = "online_assessment_engine_title",
                                idName = "",
                                onclick_action = "",
                                onmouseover_action = "",
                                onmouseout_action = "",
                                content = createElement(
                                                                elementName = "section",
                                                                className = "online_assessment_engine_section_left",
                                                                idName = "",
                                                                onclick_action = "",
                                                                onmouseover_action = "",
                                                                onmouseout_action = "",
                                                                content = "ONLINE ASSESSMENT ENGINE"
                                                        )+
                                          createElement(
                                                                elementName = "section",
                                                                className = "online_assessment_engine_section_right",
                                                                idName = "",
                                                                onclick_action = "",
                                                                onmouseover_action = "",
                                                                onmouseout_action = "",
                                                                content = createToolTip(
                                                                                             tooltip_element = dictionary_link(
                                                                                                                                        term = "VERSION 1.0",
                                                                                                                                        definitionIndex = defintions_index.online_assessment_engine_version
                                                                                                                              ),
                                                                                            toolltip_text = "View info",
                                                                                            tooltip_position = TOOLTIP_POSITION.bottom,
                                                                                            tooltip_button_width = ""
                                                                                        )
                                                        )
                        )+                                                              
        createContentCard(
                                 solution_lines_arr = DEMO_ASSESSMENT_LINES_ARR,
                                 arr = DEMO_ASSESSMENT_CONTENT
                         )
                     
        
}



