const TOOLTIP_POSITION = {
                                bottom: "bottom",
                                top: "top",
                                left: "left",
                                right: "right"
                         }

function createToolTip(tooltip_element,toolltip_text,tooltip_position,tooltip_button_width){
    return createElement(
                                        elementName = "div", 
                                        className = "tooltip_container_"+tooltip_position + " " + tooltip_button_width,
                                        idName = "",
                                        onclick_action = "",
                                        onmouseover = "",
                                        onmouseout = "",
                                        content = tooltip_element+
                                                  createElement(
                                                                    elementName = "span", 
                                                                    className = "tooltip_container_text_"+tooltip_position + " " + tooltip_button_width,
                                                                    idName = "",
                                                                    onclick_action = "",
                                                                    onmouseover = "",
                                                                    onmouseout = "",
                                                                    content = toolltip_text
                                                                )
                        )
 }
